var y=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(y(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},n=(t,e,s,c)=>(y(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s);import{a as v,S as w,s as E,i as g}from"./assets/vendor-d441b171.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const b=40,H="44883181-49eb7880702be53042c4f854e",I="https://pixabay.com/api/";var f,i,u;class S{constructor(){m(this,f,void 0);m(this,i,void 0);m(this,u,void 0);n(this,f,""),n(this,i,1),n(this,u,0)}addPage(){n(this,i,a(this,i)+1)}resetPage(){n(this,i,1)}isMorePage(){return b*(a(this,i)-1)<a(this,u)}get totalHits(){return a(this,u)}get currentPage(){return a(this,i)}set searchQuery(e){n(this,f,e)}async fetchImage(){const e=await v.get(`${I}?key=${H}&q=${a(this,f)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${b}&page=${a(this,i)}`);return n(this,u,e.data.totalHits),e.data}}f=new WeakMap,i=new WeakMap,u=new WeakMap;const h=document.getElementById("search-form"),p=document.querySelector(".gallery"),l=new S,A=new w(".gallery a"),M=E.create(p);M.partiallyExitViewport(x);h.addEventListener("submit",O);function O(t){t.preventDefault(),p.innerHTML="",l.searchQuery=h.elements.searchQuery.value,h.reset(),P()}function x(){if(l.isMorePage()){P();return}}async function P(){try{const t=await l.fetchImage();l.currentPage===1&&l.totalHits!==0&&g.success({message:`Hooray! We found ${l.totalHits} images.`}),_(t.hits)}catch{g.error({message:"Oops! Something went wrong! Try to reload the page!"})}}function _(t){if(!t.length){g.error("Sorry, there are no images matching your search query. Please try again.");return}const e=t.map(({webformatURL:s,largeImageURL:c,tags:r,likes:o,views:d,comments:$,downloads:L})=>`<div class="photo-card">
        <a href="${c}">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${o}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${d}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${$}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${L}
              </p>
            </div></a>
          </div>`).join("");p.insertAdjacentHTML("beforeend",e),A.refresh(),l.addPage()}
//# sourceMappingURL=commonHelpers.js.map
