import{a as c,F as N,j as i,g as b,h as p,r as f,u as v,f as D}from"./index-f77f5197.js";import{s as d,J as h}from"./filter-9c4b88d1.js";import{P as B}from"./Product-bc6ad190.js";function S(n){const e=n.catalogData.searchData[n.catalogData.catalogPage-1];return e?c(N,{children:c("div",{className:"catalogProductsContainer",children:n.catalogData.searchData.length>0?e.map((s,t)=>c("div",{className:"catalogProduct",children:c(B,{product_object:s})},t)):c("p",{children:"NO PRODUCTS WERE FOUND"})})}):c("p",{children:"damn"})}function k(n){const e=n.catalogData,s=n.setCatalogData,t=()=>{e.catalogPage>1&&(s({...e,catalogPage:e.catalogPage-1}),document.documentElement.scrollTop=0)},o=()=>{e.catalogPage<e.searchData.length&&(s({...e,catalogPage:e.catalogPage+1}),document.documentElement.scrollTop=0)},r=a=>{a.target.textContent!=e.catalogPage&&(s({...e,catalogPage:Number(a.target.textContent)}),document.documentElement.scrollTop=0)};for(let a=0;a<document.querySelectorAll(".numberedBtns").length;a++)document.querySelectorAll(".numberedBtns")[a].textContent==e.catalogPage?document.querySelectorAll(".numberedBtns")[a].classList.add("deactivateNumberedBtn"):document.querySelectorAll(".numberedBtns")[a].classList.remove("deactivateNumberedBtn");return i("div",{className:"catalogPagesNavigatorContainer",children:[c("button",{onClick:t,className:`movingBtns ${e.catalogPage===1?"deactivateMovingBtn":""}`,children:"<"}),c("button",{onClick:r,className:"numberedBtns",children:1}),e.searchData.length<4?e.searchData.map((a,l)=>{if(!(l===0||e.searchData.length===1))return c("button",{onClick:r,className:"numberedBtns",children:l+1},l)}):e.searchData.map((a,l)=>{if(!(e.searchData.length===1||l===e.searchData.length-1))return c("button",{onClick:r,className:"numberedBtns",children:l+2},l)}),c("button",{onClick:o,className:`movingBtns ${e.catalogPage===e.searchData.length?"deactivateMovingBtn":""}`,children:">"})]})}const A="/online-shop/assets/filterIcon-2a7d15cc.png";const E=["All Categories","Shirts","Dresses","Jeans","Sportswear","Coats","Tops","Hoodies","Leggings","Trousers"];let u=null;const P=(n,e)=>{for(var s=0;s<e.length;s++)if(e[s].textContent==n)return e[s];return"nothing"};function V(n){const e=n.catalogData,s=b(),t=p(),o=Object.fromEntries(new URLSearchParams(t.search));let r,a;const l=g=>{u!==g.target&&(a=g.target.textContent==="All Categories"?"*":g.target.textContent,r={category:a},u!==null&&u.classList.remove("selectedCategoryBtn"),g.target.classList.add("selectedCategoryBtn"),u=g.target,s(r,!0))};return f.useEffect(()=>{u=document.querySelector(".selectedCategoryBtn")},[]),f.useEffect(()=>{const g=document.querySelector(".catalogCategories").childNodes;o.category?u=P(o.category!=="*"?o.category:"All Categories",g):u=P("All Categories",g)},[o]),i("div",{className:"catalogHeader",children:[i("div",{className:"catalogCategoryName",children:[i("p",{children:["Women ",e.filters.category==="*"?"Clothing":e.filters.category]}),e.filters.name?i("p",{className:"catalogHeaderSearchValue",children:["Search result for: ",e.filters.name]}):""]}),c("div",{className:"catalogCategories",children:E.map((g,m)=>m===0&&!o.category?c("button",{className:"selectedCategoryBtn",onClick:l,children:g},m):g===o.category?c("button",{className:"selectedCategoryBtn",onClick:l,children:g},m):c("button",{onClick:l,children:g},m))}),i("div",{className:"catalogFilterAndAmountContainer",children:[c("div",{className:"catalogProductAmount",children:i("p",{children:[e.rawSearchData.length," Products"]})}),i("button",{className:"catalogFilter",children:[c("img",{src:A}),"Filter"]})]})]})}const y=["name","category","price","color","size"];function C(n){let e;const s=[];if(n.length>10){e=Math.ceil(n.length/10);for(let t=0;t<e;t++){let o=[],r=t===0?1:t+1,a=t*10;for(a;a<=r*10&&!(a>=r*10||a+1>n.length);a++)o.push(n[a]);s.push(o)}}else{let t=[],o=1;for(let r=0;r<=o*10&&!(r>=o*10||r+1>n.length);r++)t.push(n[r]);s.push(t)}return s}function H(){const n=v(),e=D(),s=p(),[t,o]=f.useState({filters:{name:e.searchValue,category:"*"},rawSearchData:d({name:e.searchValue,category:"*"},h),searchData:C(d({name:e.searchValue,category:"*"},h)),catalogPage:1});return f.useEffect(()=>{const r=Object.fromEntries(new URLSearchParams(s.search)),a={};for(const l in r)for(const g in y)if(l===y[g]){a[l]=r[l];break}Object.keys(a).length!==0?o({...t,filters:{...t.filters,...a},rawSearchData:d({...t.filters,...a},h),searchData:C(d({...t.filters,...a},h)),catalogPage:1}):(o({filters:{name:r.searchValue,category:"*"},rawSearchData:d({name:r.searchValue,category:"*"},h),searchData:C(d({name:r.searchValue,category:"*"},h)),catalogPage:1}),n("/catalog"))},[s.search]),c(N,{children:i("div",{className:"websiteContent",children:[c(V,{catalogData:t,setCatalogData:o,searchValue:e.searchValue}),c(S,{catalogData:t,setCatalogData:o,searchValue:e.searchValue}),c(k,{catalogData:t,setCatalogData:o})]})})}export{H as default};
