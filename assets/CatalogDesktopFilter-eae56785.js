import{a as e,r as u,j as t,F as p}from"./index-cc1f2768.js";const v=n=>e("div",{className:"catalogDesktopFilterMenuShadow",onClick:o=>{o.target===o.currentTarget&&o.currentTarget.classList.remove("open")},children:e("div",{className:"catalogDesktopFilterMenuContainer",children:n.selectedFilter})}),k=()=>{const[n,o]=u.useState(null),r=l=>{var c,i,a,d;const s=document.querySelector(".catalogDesktopFilterMenuShadow");document.querySelector("button.open")===l.currentTarget?((i=(c=document.querySelector("button.open"))==null?void 0:c.classList)==null||i.remove("open"),s.classList.remove("open"),document.body.style.overflow="auto",o(null)):((d=(a=document.querySelector("button.open"))==null?void 0:a.classList)==null||d.remove("open"),l.currentTarget.classList.add("open"),s.classList.add("open"),document.body.style.overflow="hidden",o(l.currentTarget.textContent))};return t(p,{children:[t("div",{className:"catalogDesktopFiltersContainer",children:[e("p",{children:"FILTERS"}),t("button",{onClick:r,children:["CATEGORIES",t("div",{className:"filterDesktopArrowBtn",children:[e("div",{}),e("div",{})]})]}),t("button",{onClick:r,children:["COLORS",t("div",{className:"filterDesktopArrowBtn",children:[e("div",{}),e("div",{})]})]}),t("button",{onClick:r,children:["SIZES",t("div",{className:"filterDesktopArrowBtn",children:[e("div",{}),e("div",{})]})]}),t("button",{onClick:r,children:["PRICE",t("div",{className:"filterDesktopArrowBtn",children:[e("div",{}),e("div",{})]})]})]}),e(v,{selectedFilter:n})]})};export{k as default};
