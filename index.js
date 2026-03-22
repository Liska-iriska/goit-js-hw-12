import{a as L,S as w,i}from"./assets/vendor-BkC4bTqC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();async function d(e,t){const r="https://pixabay.com/api/",n={params:{key:"55049647-b8a5550eee026fa1bd35fd901",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return(await L.get(r,n)).data}let S=new w(".gallery a",{captionsData:"alt",captionDelay:250});const f=document.querySelector(".gallery"),p=document.querySelector("#loader"),m=document.querySelector(".load-btn");function q(e){return`
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
    </li>`}function y(e){const t=e.map(r=>q(r)).join("");f.insertAdjacentHTML("beforeend",t),S.refresh()}function $(){f.innerHTML=""}function g(){p.classList.add("is-active")}function h(){p.classList.remove("is-active")}function v(){m.style.display="block"}function l(){m.style.display="none"}document.querySelector(".gallery");const B=document.querySelector(".form"),P=document.querySelector(".load-btn");let a=1,u="";l();B.addEventListener("submit",async e=>{e.preventDefault();const t=e.currentTarget.elements["search-text"].value.trim();if(t===""){i.error({message:"Please fill in the search field!",position:"topRight"});return}u=t,a=1,l(),$(),g();try{const r=await d(u,a);if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits),b(r.totalHits)}catch(r){i.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{h()}});P.addEventListener("click",async()=>{a+=1,l(),g();try{const e=await d(u,a);y(e.hits),b(e.totalHits);const t=document.querySelector(".li-item");if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}catch(e){i.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"}),v()}finally{h()}});function b(e){const t=Math.ceil(e/15);a>=t?(l(),t>0&&i.info({message:"We're sorry, but you've reached the end of search results."})):v()}
//# sourceMappingURL=index.js.map
