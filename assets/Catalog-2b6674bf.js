import{j as m,a as t,F as O,r as f,g as R,h as w,u as q}from"./index-07659d2a.js";import{s as y,J as N}from"./filter-82ad5ad8.js";import{P as x}from"./Product-bb6dc760.js";const L=function(c){if(c.search){const s=decodeURI(c.search).split("&"),i=Object();for(let d=0;d<s.length;d++){const n=s[d].split("=");n[1]=n[1].replace("%3D","="),n[0]=n[0].replace("?",""),typeof i[n[0]]>"u"?i[n[0]]=[n[1]]:i[n[0]].push(n[1])}return i}else return null};function H(c){const e=c.catalogData,s=c.setCatalogData,i=()=>{e.catalogPage>1&&(s({...e,catalogPage:e.catalogPage-1}),document.documentElement.scrollTop=0)},d=()=>{e.catalogPage<e.searchData.length&&(s({...e,catalogPage:e.catalogPage+1}),document.documentElement.scrollTop=0)},n=r=>{r.target.textContent!=e.catalogPage&&(s({...e,catalogPage:Number(r.target.textContent)}),document.documentElement.scrollTop=0)};for(let r=0;r<document.querySelectorAll(".numberedBtns").length;r++)document.querySelectorAll(".numberedBtns")[r].textContent==e.catalogPage?document.querySelectorAll(".numberedBtns")[r].classList.add("deactivateNumberedBtn"):document.querySelectorAll(".numberedBtns")[r].classList.remove("deactivateNumberedBtn");return m("div",{className:"catalogPagesNavigatorContainer",children:[t("button",{onClick:i,className:`movingBtns ${e.catalogPage===1?"deactivateMovingBtn":""}`,children:"<"}),t("button",{onClick:n,className:"numberedBtns",children:1}),e.searchData.length<4?e.searchData.map((r,a)=>{if(!(a===0||e.searchData.length===1))return t("button",{onClick:n,className:"numberedBtns",children:a+1},a)}):e.searchData.map((r,a)=>{if(!(e.searchData.length===1||a===e.searchData.length-1))return t("button",{onClick:n,className:"numberedBtns",children:a+2},a)}),t("button",{onClick:d,className:`movingBtns ${e.catalogPage===e.searchData.length?"deactivateMovingBtn":""}`,children:">"})]})}function $(c){const e=c.catalogData.searchData[c.catalogData.catalogPage-1];return e?t(O,{children:m("div",{className:"catalogProductsContainer",children:[c.catalogData.searchData.length>0?e.map((s,i)=>t("div",{className:"catalogProduct",children:t(x,{product_object:s})},i)):t("p",{children:"NO PRODUCTS WERE FOUND"}),t(H,{catalogData:c.catalogData,setCatalogData:c.setCatalogData})]})}):t("p",{children:"damn"})}const I="/online-shop/assets/filterIcon-2a7d15cc.png";function V(c){const e=c.option,s=c.filters,[i,d]=f.useState(),n=()=>{var r;if(console.log(c.optionSelected,e),((r=c.optionSelected)==null?void 0:r.name)===e.name)return c.setOptionSelected(null);c.setOptionSelected({name:e.name,element:e.element,data:e==null?void 0:e.data})};return f.useEffect(()=>{s[e.name.toLowerCase()]?d(s[e.name.toLowerCase()].toString().replaceAll(","," , ")):(s.range||s.sale)&&e.name==="Price"?(s.range&&(s.range[0]===">="?d(`Over ${s.range[1]}$`):d(`Under ${s.range[1]}$`)),s.sale&&(i&&!i.includes("On sale")?d(r=>`${r} , On sale`):d("On sale"))):d(null)},[s]),t("div",{className:"catalogFilterBtn",onClick:n,children:m("div",{className:"catalogFilterBtnContainer",children:[m("div",{className:"catalogFilterBtnContainerWrapper",children:[t("p",{children:e==null?void 0:e.name}),m("button",{className:"filterArrowBtn",children:[t("div",{}),t("div",{})]})]}),i&&t("div",{className:"selectedDataContainer",children:i})]})})}function T(c){const e=window.innerWidth<=767;return t("div",{className:"viewItemsContainer",children:t("button",{onClick:()=>{e?c.closeFilterMenu(!1):c.setOptionSelected(null)},children:e?"VIEW ITEMS":"APPLY FILTERS"})})}function M(c){const e=c.filters,s=c.setFilters,i=c.data,d=(n,r)=>{e.color?e.color.indexOf(r)===-1?(n.currentTarget.classList.add("selected"),s(a=>({...a,color:[r,...a.color]}))):(n.currentTarget.classList.remove("selected"),s(a=>{if(a.color.filter(o=>o!==r).length===0){const{color:o,...u}=a;return u}return{...a,color:a.color.filter(o=>o!==r)}})):(n.currentTarget.classList.add("selected"),s(a=>({...a,color:[r]})))};return t("div",{className:"filterOptionContaianer",children:i.map((n,r)=>{var o;let a=!1;return((o=e==null?void 0:e.color)==null?void 0:o.indexOf(n.name))!==-1&&e.color&&(a=!0),t("button",{className:`filterOptionBtn ${a&&"selected"} `,onClick:u=>{d(u,n.name)},children:m("div",{className:"filterOptionBtnContainer",children:[t("div",{style:{backgroundColor:n.value},className:"colorDiv"}),t("p",{children:n.name}),t("div",{className:"check"})]})},r)})})}function U(c){const e=c.filters,s=c.setFilters,i=c.data,d=(n,r)=>{e.category?e.category.indexOf(r)===-1?(n.currentTarget.classList.add("selected"),s(a=>({...a,category:[r]}))):(n.currentTarget.classList.remove("selected"),s(a=>{if(a.category.filter(o=>o!==r).length===0){const{category:o,...u}=a;return u}return{...a,category:a.category.filter(o=>o!==r)}})):(n.currentTarget.classList.add("selected"),s(a=>({...a,category:[r]})))};return t("div",{className:"filterOptionContaianer",children:i.map((n,r)=>{var o;let a=!1;return((o=e==null?void 0:e.category)==null?void 0:o.indexOf(n.name))!==-1&&e.category&&(a=!0),t("button",{className:`filterOptionBtn ${a&&"selected"} `,onClick:u=>{d(u,n.name)},children:m("div",{className:"filterOptionBtnContainer",children:[t("p",{children:n.name}),t("div",{className:"check"})]})},r)})})}function z(c){const e=c.filters,s=c.setFilters,i=f.useRef(null),d=f.useRef(!1),[n,r]=f.useState(e!=null&&e.range?[e.range[0],e.range[1]]:[">=","5"]),a=u=>{e!=null&&e.sale?(u.currentTarget.classList.remove("selected"),s(l=>{const{sale:h,...g}=l;return{...g}})):(u.currentTarget.classList.add("selected"),s(l=>({...l,sale:!0})))},o=(u,l)=>{document.querySelector(".priceBtn.active").classList.remove("active"),u.currentTarget.classList.add("active"),r(h=>{const g=[...h];return g[0]=l,g})};return f.useEffect(()=>{d.current===!0?(i.current.textContent=`${n[1]}$`,s(u=>({...u,range:n}))):d.current=!0},[n]),f.useEffect(()=>{document.getElementById("priceInput").value=e!=null&&e.range?e==null?void 0:e.range[1]:"5"},[]),m("div",{className:"filterOptionContaianer",children:[t("button",{className:`filterOptionBtn ${(e==null?void 0:e.sale)!==!1&&(e==null?void 0:e.sale)&&"selected"} `,onClick:u=>{a(u,e.sale)},children:m("div",{className:"filterOptionBtnContainer",children:[t("p",{children:"Sale"}),t("div",{className:"check"})]})}),t("button",{className:"filterOptionBtn",children:m("div",{className:"filterOptionBtnContainer price",children:[m("div",{className:"priceWrapper",children:[t("button",{className:`priceBtn ${e!=null&&e.range?(e==null?void 0:e.range[0])===">="&&"active":"active"}`,onClick:u=>{o(u,">=")},children:"Over"}),m("p",{ref:i,children:[e!=null&&e.range?e.range[1]:n[1],"$"]}),t("button",{className:`priceBtn ${(e==null?void 0:e.range)&&(e==null?void 0:e.range[0])==="<="&&"active"}`,onClick:u=>{o(u,"<=")},children:"Under"})]}),m("div",{className:"inputWrapper",children:[t("input",{type:"range",id:"priceInput",min:"5",max:"250",step:"5",list:"tickmarks",onChange:()=>{r(u=>{const l=[...u];return l[1]=document.getElementById("priceInput").value,l})}}),m("datalist",{id:"tickmarks",children:[t("option",{value:"5",label:"5$"}),t("option",{value:"250",label:"250$"})]})]})]})})]})}function W(c){const e=c.filters,s=c.setFilters,i=c.data,d=(n,r)=>{e.size?e.size.indexOf(r)===-1?(n.currentTarget.classList.add("selected"),s(a=>({...a,size:[r,...a.size]}))):(n.currentTarget.classList.remove("selected"),s(a=>{if(a.size.filter(o=>o!==r).length===0){const{size:o,...u}=a;return u}return{...a,size:a.size.filter(o=>o!==r)}})):(n.currentTarget.classList.add("selected"),s(a=>({...a,size:[r]})))};return t("div",{className:"filterOptionContaianer",children:i.map((n,r)=>{var o;let a=!1;return((o=e==null?void 0:e.size)==null?void 0:o.indexOf(n.name))!==-1&&e.size&&(a=!0),t("button",{className:`filterOptionBtn ${a&&"selected"} `,onClick:u=>{d(u,n.name)},children:m("div",{className:"filterOptionBtnContainer",children:[t("p",{children:n.name}),t("div",{className:"check"})]})},r)})})}const j=[{name:"Red",value:"rgb(255,0,0)"},{name:"Brown",value:"rgb(165, 42, 42)"},{name:"Khaki",value:"rgb(240, 230, 140)"},{name:"Yellow",value:"rgb(255,255,0)"},{name:"Olive",value:"rgb(128,128,0)"},{name:"Green",value:"rgb(0,255,0)"},{name:"Light blue",value:"rgb(173, 216, 230)"},{name:"Blue",value:"rgb(0, 0, 255)"},{name:"Navy",value:"rgb(0, 0, 128)"},{name:"Purple",value:"rgb(128, 0, 128)"},{name:"Pink",value:"rgb(255, 192, 203)"},{name:"Black",value:"rgb(0,0,0)"},{name:"Gray",value:"rgb(128, 128, 128)"},{name:"Beige",value:"rgb(245, 245, 220)"},{name:"White",value:"rgb(255,255,255)"}],X=[{name:"Shirts"},{name:"Dresses"},{name:"Jeans"},{name:"Sportswear"},{name:"Coats"},{name:"Tops"},{name:"Hoodies"},{name:"Leggings"},{name:"Trousers"}],J=[{name:"XXS"},{name:"XS"},{name:"S"},{name:"M"},{name:"L"},{name:"XL"},{name:"XXL"}];let G=[{name:"Category",element:t(U,{}),data:X},{name:"Color",element:t(M,{}),data:j},{name:"Size",element:t(W,{}),data:J},{name:"Price",element:t(z,{})}];function Y(c){var D,S,E,A;const e=window.innerWidth<=767,s=c.filtersBtn.current,i=R(),d=f.useRef(null),n=w(),r=f.useRef(!1),a=L(n),[o,u]=f.useState(!1),[l,h]=f.useState(null),[g,F]=f.useState({...a});return s&&(s.onclick=()=>{u(!o)}),f.useEffect(()=>{g!==c.urlParams&&F({...c.urlParams})},[c.urlParams]),f.useEffect(()=>{r.current?o?(d.current.classList.add("on"),document.body.style.overflow="hidden",h(null)):(d.current.classList.remove("on"),document.body.style.overflow="auto",g&&i(g)):r.current=!0},[o]),f.useEffect(()=>{console.log(l),l!==null&&(document.querySelector(".catalogFiltersSecond").classList.add("Active"),document.querySelector(".catalogFiltersFirst").classList.remove("Active"),document.body.style.overflow="hidden"),l===null&&(document.querySelector(".catalogFiltersSecond").classList.remove("Active"),document.querySelector(".catalogFiltersFirst").classList.add("Active"),document.body.style.overflow="auto",e||i(g))},[l]),m("div",{className:"catalogFilterMenu",ref:d,children:[m("div",{className:"catalogFiltersContainer",children:[m("div",{className:"catalogFiltersFirst",children:[e&&t("div",{className:"catalogFilterHeader",children:t("p",{children:"FILTER"})}),t("div",{className:"catalogFilterOptions",children:G.map((v,b)=>t(V,{option:{...v},setOptionSelected:h,optionSelected:l,filters:g},b))}),t(T,{closeFilterMenu:u,setOptionSelected:h})]}),m("div",{className:"catalogFiltersSecond",onClick:v=>{e||v.target===document.querySelector(".catalogFiltersSecond")&&h(null)},children:[e?m(O,{children:[m("div",{className:"catalogFilterHeader",children:[m("button",{onClick:()=>{document.querySelector(".catalogFiltersSecond").classList.remove("Active"),document.querySelector(".catalogFiltersFirst").classList.add("Active"),setTimeout(()=>{h(null)},500)},children:[t("div",{}),t("div",{})]}),t("p",{onClick:()=>{document.querySelector(".catalogFiltersSecond").classList.remove("Active"),document.querySelector(".catalogFiltersFirst").classList.add("Active"),setTimeout(()=>{h(null)},500)},children:(D=l==null?void 0:l.name)==null?void 0:D.toUpperCase()}),(l==null?void 0:l.name)!=="Price"?t("button",{className:"selectionBtn",onClick:()=>{var v,b;if(g[(v=l==null?void 0:l.name)==null?void 0:v.toLowerCase()]){const B={...g};delete B[(b=l==null?void 0:l.name)==null?void 0:b.toLowerCase()],F(B)}},children:g[(S=l==null?void 0:l.name)==null?void 0:S.toLowerCase()]&&t("p",{children:"CLEAR"})}):t("button",{className:"selectionBtn",onClick:()=>{if(g.sale||g.range){const v={...g};delete v.range,delete v.sale,F(v)}},children:g.sale&&t("p",{children:"CLEAR"})||g.range&&t("p",{children:"CLEAR"})})]}),t("div",{className:"catalogFilterOptions",children:(l==null?void 0:l.element)&&f.cloneElement(l==null?void 0:l.element,{setFilters:F,filters:g,data:l==null?void 0:l.data})})]}):m("div",{className:"catalogDesktopFilterOptions",children:[m("div",{className:"catalogFilterHeader",children:[t("p",{children:(E=l==null?void 0:l.name)==null?void 0:E.toUpperCase()}),(l==null?void 0:l.name)!=="Price"?t("button",{className:"selectionBtn",onClick:()=>{var v,b;if(g[(v=l==null?void 0:l.name)==null?void 0:v.toLowerCase()]){const B={...g};delete B[(b=l==null?void 0:l.name)==null?void 0:b.toLowerCase()],F(B)}},children:g[(A=l==null?void 0:l.name)==null?void 0:A.toLowerCase()]&&t("p",{children:"CLEAR"})}):t("button",{className:"selectionBtn",onClick:()=>{if(g.sale||g.range){const v={...g};delete v.range,delete v.sale,F(v)}},children:g.sale&&t("p",{children:"CLEAR"})||g.range&&t("p",{children:"CLEAR"})})]}),(l==null?void 0:l.element)&&f.cloneElement(l==null?void 0:l.element,{setFilters:F,filters:g,data:l==null?void 0:l.data})]}),e&&t(T,{closeFilterMenu:u})]})]}),t("div",{className:"catalogFiltersShadow",onClick:()=>{u(!1)}})]})}const K=["All Categories","Shirts","Dresses","Jeans","Sportswear","Coats","Tops","Hoodies","Leggings","Trousers"];let C=null;const k=(c,e)=>{for(var s=0;s<e.length;s++)if(e[s].textContent==c)return e[s];return"nothing"};function _(c){const e=c.catalogData,s=R(),i=w(),d=q(),n=L(i);let r,a;const o=f.useRef(null),u=window.innerWidth<=767,l=h=>{if(C!==h.target){if(a=h.target.textContent==="All Categories"?"*":h.target.textContent,a!=="*")r={...n,category:[a]};else{const{category:g,...F}=n;r={...F}}C!==null&&C.classList.remove("selectedCategoryBtn"),h.target.classList.add("selectedCategoryBtn"),C=h.target,s(r,!0)}};return f.useEffect(()=>{const h=document.querySelector(".catalogCategories").childNodes;C=k("All Categories",h),C.classList.add("selectedCategoryBtn")},[]),f.useEffect(()=>{C&&document.querySelector(".selectedCategoryBtn")&&(document.querySelector(".selectedCategoryBtn").classList.remove("selectedCategoryBtn"),C.classList.add("selectedCategoryBtn"))},[C]),f.useEffect(()=>{const h=document.querySelector(".catalogCategories").childNodes;n!=null&&n.category?C=k(n.category[0]!=="*"?n.category[0]:"All Categories",h):C=k("All Categories",h)},[n]),m("div",{className:"catalogHeader",children:[m("div",{className:"catalogCategoryName",children:[m("p",{children:["Women ",e.filters.category[0]==="*"?"Clothing":e.filters.category]}),e.filters.name?m("p",{className:"catalogHeaderSearchValue",children:["Search result for: ",e.filters.name]}):""]}),t("div",{className:"catalogCategories",children:K.map((h,g)=>h===(n==null?void 0:n.category)?t("button",{className:"selectedCategoryBtn",onClick:l,children:h},g):t("button",{onClick:l,children:h},g))}),m("div",{className:"catalogFilterAndAmountContainer",children:[t("div",{className:"catalogProductAmount",children:m("p",{children:[e.rawSearchData.length," Products"]})}),u?m("button",{className:"catalogFilter",ref:o,children:[t("img",{src:I}),"Filter"]}):t("button",{className:"catalogClearFilterBtn",onClick:()=>d("/catalog"),children:"CLEAR"})]}),t(Y,{filtersBtn:o,urlParams:n})]})}const p=["name","category","range","sale","color","size"];function P(c,e){let s;const i=[];if(c.length>e){s=Math.ceil(c.length/e);for(let d=0;d<s;d++){let n=[],r=d===0?1:d+1,a=d*e;for(a;a<=r*e&&!(a>=r*e||a+1>c.length);a++)n.push(c[a]);i.push(n)}}else{let d=[],n=1;for(let r=0;r<=n*e&&!(r>=n*e||r+1>c.length);r++)d.push(c[r]);i.push(d)}return i}function te(){const c=window.innerWidth<=767,e=q(),s=w(),i=L(s);let d=c?10:15;console.log(d);const[n,r]=f.useState({filters:{name:i==null?void 0:i.searchValue,category:[["*"]]},rawSearchData:y({name:i==null?void 0:i.searchValue,category:["*"]},N),searchData:P(y({name:i==null?void 0:i.searchValue,category:[["*"]]},N),d),catalogPage:1});return f.useEffect(()=>{const a=L(s),o={};for(const u in a)for(const l in p)if(u===p[l]){o[u]=a[u];break}Object.keys(o).length!==0?(console.log("Result: ",y({...o},N),{...o}),r({...n,filters:o.category?{...o}:{...o,category:["*"]},rawSearchData:y({...o},N),searchData:P(y({...o},N),d),catalogPage:1})):(r({filters:{name:a==null?void 0:a.searchValue,category:["*"]},rawSearchData:y({name:a==null?void 0:a.searchValue,category:["*"]},N),searchData:P(y({name:a==null?void 0:a.searchValue,category:["*"]},N),d),catalogPage:1}),e("/catalog"))},[s.search]),t(O,{children:t("div",{className:"websiteContent",children:m("div",{className:"catalogContainer",style:{width:"100vw"},children:[t(_,{catalogData:n,setCatalogData:r,searchValue:i==null?void 0:i.searchValue}),t($,{catalogData:n,setCatalogData:r,searchValue:i==null?void 0:i.searchValue})]})})})}export{te as default};
