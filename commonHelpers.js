var p=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(p(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},n=(t,e,s,l)=>(p(t,e,"write to private field"),l?l.call(t,s):e.set(t,s),s);import{a as v,i as d,S as w,s as E}from"./assets/vendor-d441b171.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const y=40,H="44883181-49eb7880702be53042c4f854e",I="https://pixabay.com/api/";var f,i,u;class S{constructor(){m(this,f,void 0);m(this,i,void 0);m(this,u,void 0);n(this,f,""),n(this,i,1),n(this,u,0)}addPage(){n(this,i,a(this,i)+1)}resetPage(){n(this,i,1)}isMorePage(){return y*(a(this,i)-1)<a(this,u)}get totalHits(){return a(this,u)}get currentPage(){return a(this,i)}set searchQuery(e){n(this,f,e)}async fetchImage(){const e=await v.get(`${I}?key=${H}&q=${a(this,f)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${y}&page=${a(this,i)}`);return n(this,u,e.data.totalHits),e.data}}f=new WeakMap,i=new WeakMap,u=new WeakMap;d.show({position:"right-bottom"});const b=document.getElementById("search-form"),g=document.querySelector(".gallery"),c=new S,A=new w(".gallery a"),M=E.create(g);M.partiallyExitViewport(x);b.addEventListener("submit",O);function O(t){t.preventDefault(),g.innerHTML="",c.searchQuery=b.elements.searchQuery.value,c.resetPage(),P()}function x(){if(c.isMorePage()){P();return}d.info({message:"We're sorry, but you've reached the end of search results."})}async function P(){try{const t=await c.fetchImage();c.currentPage===1&&c.totalHits!==0&&d.success({message:`Hooray! We found ${c.totalHits} images.`}),_(t.hits)}catch{d.error({message:"Oops! Something went wrong! Try to reload the page!"})}}function _(t){if(!t.length){d.error("Sorry, there are no images matching your search query. Please try again."),d.hide();return}const e=t.map(({webformatURL:s,largeImageURL:l,tags:r,likes:o,views:h,comments:$,downloads:L})=>`<div class="photo-card">
        <a href="${l}">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${o}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${h}
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
          </div>`).join("");g.insertAdjacentHTML("beforeend",e),A.refresh(),d.hide(),c.addPage()}
//# sourceMappingURL=commonHelpers.js.map
