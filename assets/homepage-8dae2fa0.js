import{u as a,j as s,a as e,F as d}from"./index-2929b74e.js";import{P as c}from"./Product-3e29e2a0.js";import{s as r,J as l}from"./filter-82ad5ad8.js";const h="/online-shop/assets/homePageMobileWelcome-3ea9d063.png",m="/online-shop/assets/homePageWelcome2-238f4c20.png";function p(){const i=a(),t=window.innerWidth<=767;return s("div",{className:"homeWelcomeContainer",children:[e("img",{src:h,className:"homeIMG"}),!t&&e("img",{src:m,className:"homeIMG"}),s("p",{children:["Shop the latest trends ",e("br",{})," with dilVin"]}),e("button",{onClick:()=>{i("/catalog/")},children:"SHOP NOW"})]})}const u={id:[13,29,11,40,44,35]};function g(){a();let i;const t=r(u,l);return s("div",{className:"featuredContainer",children:[e("p",{children:"Featured right now"}),e("div",{className:"productList",children:t.map((o,n)=>{if(n%2==0){i=o;return}if(n%2!==0)return s("div",{className:"twoProductsContainer",children:[e("div",{className:"product",children:e(c,{product_object:i})}),e("div",{className:"product",children:e(c,{product_object:o})})]},n+1)})})]})}var N={id:[4,30,23,1,9,44],sale:[!0]};function f(){let i;const t=r(N,l);return s("div",{className:"promotionsContainer",children:[e("p",{children:"Promotions"}),e("div",{className:"promotionProductList",children:t.map((o,n)=>{if(n%2==0){i=o;return}if(n%2!==0)return s("div",{className:"twoProductsContainer",children:[e("div",{className:"product",children:e(c,{product_object:i})}),e("div",{className:"product",children:e(c,{product_object:o})})]},n+1)})})]})}const v="/online-shop/assets/highQualityClothingIcon-0d7af6fd.png",y="/online-shop/assets/varietyIcon-c5de84d7.png",w="/online-shop/assets/pricingIcon-78f1ae54.png",P="/online-shop/assets/expierenceIcon-eea407ee.png";function I(){return s("div",{className:"whyUsContainer",children:[e("p",{children:"Why chose dilVin"}),s("div",{className:"whyUsList",children:[s("div",{className:"reason",children:[e("img",{src:v}),e("p",{className:"reasonTitle",children:"Quality clothing"}),e("p",{className:"reasonExplication",children:"Our products are made with high-quality materials to ensure durability and longevity."})]}),s("div",{className:"reason",children:[e("img",{src:y}),e("p",{className:"reasonTitle",children:"Variety of styles"}),e("p",{className:"reasonExplication",children:"We offer a wide selection of unique and trendy clothing options to suit any personal style."})]}),s("div",{className:"reason",children:[e("img",{src:w}),e("p",{className:"reasonTitle",children:"Pricing"}),e("p",{className:"reasonExplication",children:"Our prices are reasonable and competitive without sacrificing quality."})]}),s("div",{className:"reason",children:[e("img",{src:P}),e("p",{className:"reasonTitle",children:"Easy shopping"}),e("p",{className:"reasonExplication",children:"Our website is user-friendly, with clear product descriptions and fast, reliable shipping"})]})]})]})}function L(){return e(d,{children:s("div",{className:"websiteContent",children:[e(p,{}),e(g,{}),e(f,{}),e(I,{})]})})}export{L as default};
