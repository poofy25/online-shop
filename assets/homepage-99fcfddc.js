import{j as i,a as e,u as l,F as u}from"./index-5b0d1cd4.js";import{s as d,J as p}from"./filter-8d223ecb.js";const h="/online-shop/assets/homePageMobileWelcome-3ea9d063.png";function m(){return i("div",{className:"homeWelcomeContainer",children:[e("img",{src:h,className:"homeIMG"}),i("p",{children:["Shop the latest trends ",e("br",{})," with dilVin"]}),e("button",{children:"Shop now"})]})}function o(r){const t=l();let s,c;const n=r.product_object;n.discount?(s=i("div",{className:"productPriceContainer",children:[i("p",{className:"productPriceDiscountPrice",children:[n.discount.price_after_discount,"$"]}),i("p",{className:"productPriceOldPrice discount",children:[n.price,"$"]})]}),c=i("div",{className:"priceDiscountNumber",children:[n.discount.percentage,"%"]})):s=e("div",{className:"productPriceContainer",children:i("p",{className:"productPriceOldPrice",children:[n.price,"$"]})});const a=()=>{t(`/product/${n.id}`)};return i("div",{className:"productContainer",children:[e("img",{src:n.image,onClick:a}),c,e("p",{onClick:a,children:n.name}),s]})}const N={id:[13,29,11,40,44,35]};function g(){l();let r;const t=d(N,p);return i("div",{className:"featuredContainer",children:[e("p",{children:"Featured right now"}),e("div",{className:"productList",children:t.map((s,c)=>{if(c%2==0){r=s;return}if(c%2!==0)return i("div",{className:"twoProductsContainer",children:[e("div",{className:"product",children:e(o,{product_object:r})}),e("div",{className:"product",children:e(o,{product_object:s})})]},c+1)})})]})}var f={id:[4,30,23,1,9,44],discount:null};function v(){let r;const t=d(f,p);return i("div",{className:"promotionsContainer",children:[e("p",{children:"Promotions"}),e("div",{className:"promotionProductList",children:t.map((s,c)=>{if(c%2==0){r=s;return}if(c%2!==0)return i("div",{className:"twoProductsContainer",children:[e("div",{className:"product",children:e(o,{product_object:r})}),e("div",{className:"product",children:e(o,{product_object:s})})]},c+1)})})]})}const y="/online-shop/assets/highQualityClothingIcon-0d7af6fd.png",P="/online-shop/assets/varietyIcon-c5de84d7.png",w="/online-shop/assets/pricingIcon-78f1ae54.png",b="/online-shop/assets/expierenceIcon-eea407ee.png";function C(){return i("div",{className:"whyUsContainer",children:[e("p",{children:"Why chose dilVin"}),i("div",{className:"whyUsList",children:[i("div",{className:"reason",children:[e("img",{src:y}),e("p",{className:"reasonTitle",children:"Quality clothing"}),e("p",{className:"reasonExplication",children:"Our products are made with high-quality materials to ensure durability and longevity."})]}),i("div",{className:"reason",children:[e("img",{src:P}),e("p",{className:"reasonTitle",children:"Variety of styles"}),e("p",{className:"reasonExplication",children:"We offer a wide selection of unique and trendy clothing options to suit any personal style."})]}),i("div",{className:"reason",children:[e("img",{src:w}),e("p",{className:"reasonTitle",children:"Pricing"}),e("p",{className:"reasonExplication",children:"Our prices are reasonable and competitive without sacrificing quality."})]}),i("div",{className:"reason",children:[e("img",{src:b}),e("p",{className:"reasonTitle",children:"Easy shopping"}),e("p",{className:"reasonExplication",children:"Our website is user-friendly, with clear product descriptions and fast, reliable shipping"})]})]})]})}function j(){return e(u,{children:i("div",{className:"websiteContent",children:[e(m,{}),e(g,{}),e(v,{}),e(C,{})]})})}export{j as default};