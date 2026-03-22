import{a as u,S as d,i as n}from"./assets/vendor-D8kWkXeg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function p(e){const s="https://pixabay.com/api/",r={params:{key:"55049647-b8a5550eee026fa1bd35fd901",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get(s,r).then(i=>i.data)}let m=new d(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),f=document.querySelector("#loader");function g(e){return`
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
    </li>`}function h(e){const s=e.map(r=>g(r)).join("");c.innerHTML=s,m.refresh()}function y(){c.innerHTML=""}function v(){f.classList.add("is-active")}function L(){f.classList.remove("is-active")}document.querySelector(".gallery");const l=document.querySelector(".form");l.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements["search-text"].value.trim();if(s===""){n.error({message:"Please fill in the search field!",position:"topRight"});return}y(),v(),p(s).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(r.hits)}).catch(r=>{n.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"}),console.log("Error details:",r)}).finally(()=>{L(),l.reset()})});
//# sourceMappingURL=index.js.map
