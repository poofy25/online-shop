import{u as g,a as r,j as t,r as d,F as p,c as S,Z as C,d as N,b as f,J as I,e as P}from"./index-9e54bae8.js";const v="/online-shop/assets/emptyCartImage-e50ae3ed.png";function y(){const o=g();return r("div",{className:"emptyCartContainer",children:[t("img",{src:v}),t("p",{className:"emptyCartText",children:"You have no items in cart."}),t("p",{children:"Dilvin has many articles that are waiting for you!"}),t("button",{onClick:()=>{o("/")},className:"goShoppingBtn",children:"Go Shopping"})]})}const A="/online-shop/assets/trashIcon-19b5cd10.png";function D(o){let a=g(),e=o.productData;const[i,u]=d.useState(e.amount),n=s=>{const l=JSON.parse(localStorage.getItem("cartProducts")).filter(h=>h.uniqueID!==s.uniqueID);localStorage.setItem("cartProducts",JSON.stringify(l)),console.log(l),o.updateLS(JSON.parse(localStorage.getItem("cartProducts")))},c=s=>{s.target.textContent==="-"?i-1>0?u(l=>l-1):(console.log("Delete function"),n(e)):s.target.textContent==="+"&&u(l=>l+1)};d.useEffect(()=>{u(e.amount)},[o.LSData]),d.useEffect(()=>{e={...e,amount:i};let s=JSON.parse(localStorage.getItem("cartProducts"));s[o.productIndex]=e,localStorage.setItem("cartProducts",JSON.stringify(s)),o.updateLS(JSON.parse(localStorage.getItem("cartProducts")))},[i]);const m=()=>{a(`/product/${e.id}`)};return r("div",{className:"productCartContainer",children:[t("img",{src:e.image,onClick:m}),r("div",{className:"cartProductDetails",children:[t("p",{className:"cartProductName",onClick:m,children:e.name}),t("button",{className:"cartProductTrashBtn",onClick:()=>{n(e)},children:t("img",{src:A})}),r("span",{className:"sizeAndColorContainer",children:[r("span",{className:"cartProductSize",children:[t("p",{children:"Size: "}),t("p",{children:e.size})]}),r("span",{className:"cartProductColor",children:[t("p",{children:"Color: "}),t("p",{children:e.color})]})]}),r("p",{className:"cartProductPrice",children:["$",(i*(e.discount?e.discount.price_after_discount:e.price)).toFixed(2),i>1?r("span",{children:["   |   $",e.discount?e.discount.price_after_discount:e.price," ea."]}):t(p,{})]}),r("div",{className:"productCountContainer",children:[t("button",{onClick:c,children:"-"}),t("div",{className:"productAmmount",children:i}),t("button",{onClick:c,children:"+"})]})]})]})}function b(){const[o]=S(f),[a,e]=d.useState(JSON.parse(localStorage.getItem("cartProducts")));localStorage.setItem("cartNotification",!1);const i=()=>{let n=0;for(const c in a)n+=a[c].amount*(a[c].discount?a[c].discount.price_after_discount:a[c].price);return n.toFixed(2)},u=()=>{let n=0;for(const c in a)n+=a[c].amount;return n};return d.useEffect(()=>()=>{if(o){const n=C(N,`users/${o.uid}`);async function c(){const m={cartItems:a,updatedAt:P()};try{await I(n,m,{merge:!0}),console.log("written",a)}catch(s){console.error("Error adding document: ",s)}}c()}console.log("unmounted")},[]),JSON.parse(localStorage.getItem("cartProducts"))===null||JSON.parse(localStorage.getItem("cartProducts")).length===0?t(p,{children:t("div",{className:"websiteContent",children:t(y,{})})}):(document.querySelector(".navCartNotification").classList.remove("active"),t(p,{children:t("div",{className:"websiteContent",children:r("div",{className:"cartPage",children:[t("p",{className:"cartPageHeader",children:"Your shopping cart"}),r("div",{className:"checkoutContainer",children:[r("p",{className:"checkoutItemsAmount",children:["Items: ",t("span",{children:u()})]}),r("p",{className:"checkoutAmount",children:["Subtotal: ",r("span",{children:["$",i()]})]}),t("button",{className:"checkoutBtn",children:"CHECKOUT"})]}),a.map((n,c)=>t(D,{productData:n,productIndex:c,updateLS:e,LSData:a},c))]})})}))}export{b as default};
