import{a as i,F as I,j as n,r as a,c as D,b as _,Z as L,d as E,J as $,e as k,f as B}from"./index-9e54bae8.js";import{s as q,J as w}from"./filter-8d223ecb.js";function J(r){const e=r.productData;return i(I,{children:[n("p",{className:"productPercentOff",children:e!=null&&e.discount?`Save ${e==null?void 0:e.discount.percentage}%`:""}),i("div",{className:"productPriceContainer",children:[n("p",{className:"productPrice",children:e!=null&&e.discount?"":"$"+(e==null?void 0:e.price)}),n("p",{className:"productPriceAfterDiscount",children:e!=null&&e.discount?"$"+(e==null?void 0:e.discount.price_after_discount):""}),n("p",{className:"productPriceBeforeDiscount",children:e!=null&&e.discount?"$"+(e==null?void 0:e.price):""})]})]})}function A(r){const e=r.productData,[s,t]=a.useState(e==null?void 0:e.colors[0]),d=o=>{t(o.target.attributes.btncolor.value),r.productCartData(c=>({...c,color:o.target.attributes.btncolor.value})),o.target.parentNode.childNodes.forEach(c=>{c.style.border="2px solid rgba(0, 0, 0 , 0.5)",c.style.boxShadow="none"}),o.target.style.border="2px solid white",o.target.style.boxShadow="0px 0px 0px 2px rgba(0, 0, 0,.75)"};return a.useEffect(()=>{t(e==null?void 0:e.colors[0])},[r.productData]),i("div",{className:"productColorsContainer",children:[i("p",{className:"productSelectedColor",children:["Color  ",i("span",{children:["- ",s]})]}),n("div",{className:"colorsBtns",children:e==null?void 0:e.colors.map((o,c)=>n("button",{style:{backgroundColor:o,boxShadow:c===0?"0px 0px 0px 2px rgba(0, 0, 0,.75)":"none",border:c===0?"2px solid white":"2px solid rgba(0, 0, 0 , 0.5)"},onClick:d,btncolor:o,children:o},o))})]})}function j(r){const e=r.productData,[s,t]=a.useState("Chose your size "),d=c=>{document.querySelector(".productSizesContainer").classList.contains("open")?document.querySelector(".productSizesContainer").classList.remove("open"):document.querySelector(".productSizesContainer").classList.add("open")},o=c=>{t(c.target.textContent),r.productCartData(l=>({...l,size:c.target.textContent})),document.querySelector(".productSizesContainer").classList.remove("open")};return i("div",{className:"productSizesContainer",children:[n("p",{children:"Size"}),i("button",{className:"sizesBtn",onClick:d,children:[s,i("div",{className:"btnarrow",children:[n("div",{className:"leftarrow"}),n("div",{className:"rightarrow"})]})]}),n("div",{className:"sizesdropdownMenu",children:e==null?void 0:e.sizes.map(c=>n("button",{onClick:o,children:c},c))})]})}function F(r){const[e]=D(_),s={...r==null?void 0:r.productCartData,uniqueID:`${r==null?void 0:r.productCartData.name}-${r==null?void 0:r.productCartData.color}-${r==null?void 0:r.productCartData.size}`};return n("button",{className:"toCartBtn",onClick:d=>{if(r.productCartData.size==="")document.querySelector(".productSizesContainer").classList.contains("open")?document.querySelector(".productSizesContainer").classList.remove("open"):document.querySelector(".productSizesContainer").classList.add("open");else{d.target.childNodes[0].classList.add("cartBtnAnimation");let o;if(localStorage.getItem("cartProducts")===null?o=[]:o=JSON.parse(localStorage.getItem("cartProducts")),o.filter((c,l)=>((c==null?void 0:c.uniqueID)===(s==null?void 0:s.uniqueID)&&(console.log(o[l]),o[l].amount+=1),(c==null?void 0:c.uniqueID)===(s==null?void 0:s.uniqueID))).length>0?console.log("found pair"):o.unshift(s),localStorage.setItem("cartProducts",JSON.stringify(o)),localStorage.setItem("cartNotification",!0),document.querySelector(".navCartNotification").classList.add("active"),e){const c=L(E,`users/${e.uid}`);async function l(){const u={cartItems:o,updatedAt:k()};try{await $(c,u,{merge:!0}),console.log("written")}catch(m){console.error("Error adding document: ",m)}}l()}}},children:n("div",{className:""})})}function Z(){var l,u,m,f,S,h,C,g;let r=B();const[e,s]=a.useState(Number(r.id)),[t,d]=a.useState({}),[o,c]=a.useState({name:(l=t[0])==null?void 0:l.name,price:(u=t[0])==null?void 0:u.price,discount:(m=t[0])!=null&&m.discount?{percent:(f=t[0])==null?void 0:f.discount.percent,price_after_discount:(S=t[0])==null?void 0:S.discount.price_after_discount}:null,color:"",size:"",image:(h=t[0])==null?void 0:h.image,amount:1});return a.useEffect(()=>{d(q({id:[e]},w))},[]),a.useEffect(()=>{s(Number(r.id))},[r]),a.useEffect(()=>{d(q({id:[e]},w))},[e]),a.useEffect(()=>{var N,b,z,P,p,v,x,y;c({id:(N=t[0])==null?void 0:N.id,name:(b=t[0])==null?void 0:b.name,price:(z=t[0])==null?void 0:z.price,discount:(P=t[0])!=null&&P.discount?{percent:(p=t[0])==null?void 0:p.discount.percentage,price_after_discount:(v=t[0])==null?void 0:v.discount.price_after_discount}:null,color:(x=t[0])==null?void 0:x.colors[0],size:"",image:(y=t[0])==null?void 0:y.image,amount:1})},[t]),i("div",{className:"productScreen",children:[n("img",{src:(C=t[0])==null?void 0:C.image}),i("div",{className:"productContent",children:[n("p",{className:"productName",children:(g=t[0])==null?void 0:g.name}),n(J,{productData:t[0]}),n(A,{productData:t[0],productCartData:c}),n(j,{productData:t[0],productCartData:c}),n(F,{productData:t[0],productCartData:o})]})]})}export{Z as default};
