import{a as b,S as w,i}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function f(e,r){const o="https://pixabay.com/api/",l={params:{key:"55049647-b8a5550eee026fa1bd35fd901",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}};return(await b.get(o,l)).data}let L=new w(".gallery a",{captionsData:"alt",captionDelay:250});const p=document.querySelector(".gallery"),m=document.querySelector("#loader");function S(e){return`
    <li class="li-item">
      <a class="link-a" href="${e.largeImageURL}">
        <img class="img-item" src="${e.webformatURL}" alt="${e.tags}">
        <div class="img-info">
          <div class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${e.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${e.views}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${e.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${e.downloads}</p>
          </div>
        </div>
      </a>
    </li>`}function y(e){const r=e.map(o=>S(o)).join("");p.insertAdjacentHTML("beforeend",r),L.refresh()}function q(){p.innerHTML=""}function g(){m.classList.add("is-active")}function h(){m.classList.remove("is-active")}document.querySelector(".gallery");const d=document.querySelector(".form"),a=document.querySelector(".load-btn");let n=1,u="";d.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.elements["search-text"].value.trim();if(r===""){i.error({message:"Please fill in the search field!",position:"topRight"});return}u=r,n=1,q(),g();try{const o=await f(u,n);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits),v(o.totalHits)}catch(o){i.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{h(),d.reset()}});a.addEventListener("click",async()=>{n+=1,a.style.display="none",g();try{const e=await f(u,n);y(e.hits),v(e.totalHits);const r=document.querySelector(".li-item");if(r){const{height:o}=r.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch(e){i.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"}),a.style.display="block"}finally{h()}});function v(e){const r=Math.ceil(e/15);n>=r?(a.style.display="none",i.info({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):a.style.display="block"}
//# sourceMappingURL=index.js.map
