import{a as n,F as p,j as r,r as i,d as m}from"./index-0e99c828.js";import{s as a,J as u}from"./filter-8d223ecb.js";function h(t){const e=t.productData;return n(p,{children:[r("p",{className:"productPercentOff",children:e!=null&&e.discount?`Save ${e==null?void 0:e.discount.percentage}%`:""}),n("div",{className:"productPriceContainer",children:[r("p",{className:"productPrice",children:e!=null&&e.discount?"":"$"+(e==null?void 0:e.price)}),r("p",{className:"productPriceAfterDiscount",children:e!=null&&e.discount?"$"+(e==null?void 0:e.discount.price_after_discount):""}),r("p",{className:"productPriceBeforeDiscount",children:e!=null&&e.discount?"$"+(e==null?void 0:e.price):""})]})]})}function S(t){const e=t.productData,[l,c]=i.useState(e==null?void 0:e.colors[0]),d=s=>{c(s.target.attributes.btncolor.value),s.target.parentNode.childNodes.forEach(o=>{o.style.border="2px solid rgba(0, 0, 0 , 0.5)",o.style.boxShadow="none"}),s.target.style.border="2px solid white",s.target.style.boxShadow="0px 0px 0px 2px rgba(0, 0, 0,.75)"};return i.useEffect(()=>{c(e==null?void 0:e.colors[0])},[t.productData]),n("div",{className:"productColorsContainer",children:[n("p",{className:"productSelectedColor",children:["Color  ",n("span",{children:["- ",l]})]}),r("div",{className:"colorsBtns",children:e==null?void 0:e.colors.map((s,o)=>r("button",{style:{backgroundColor:s,boxShadow:o===0?"0px 0px 0px 2px rgba(0, 0, 0,.75)":"none",border:o===0?"2px solid white":"2px solid rgba(0, 0, 0 , 0.5)"},onClick:d,btncolor:s,children:s},s))})]})}function f(t){const e=t.productData,[l,c]=i.useState("Chose your size "),d=o=>{document.querySelector(".productSizesContainer").classList.contains("open")?document.querySelector(".productSizesContainer").classList.remove("open"):document.querySelector(".productSizesContainer").classList.add("open")},s=o=>{c(o.target.textContent),document.querySelector(".productSizesContainer").classList.remove("open")};return n("div",{className:"productSizesContainer",children:[r("p",{children:"Size"}),n("button",{className:"sizesBtn",onClick:d,children:[l,n("div",{className:"btnarrow",children:[r("div",{className:"leftarrow"}),r("div",{className:"rightarrow"})]})]}),r("div",{className:"sizesdropdownMenu",children:e==null?void 0:e.sizes.map(o=>r("button",{onClick:s,children:o},o))})]})}function b(){var s,o;let t=m();const[e,l]=i.useState(Number(t.id)),[c,d]=i.useState({});return i.useEffect(()=>{d(a({id:[e]},u))},[]),i.useEffect(()=>{l(Number(t.id))},[t]),i.useEffect(()=>{d(a({id:[e]},u))},[e]),n("div",{className:"productScreen",children:[r("img",{src:(s=c[0])==null?void 0:s.image}),n("div",{className:"productContent",children:[r("p",{className:"productName",children:(o=c[0])==null?void 0:o.name}),r(h,{productData:c[0]}),r(S,{productData:c[0]}),r(f,{productData:c[0]})]})]})}export{b as default};
