import{u as o,j as e,a as r}from"./index-628e8f45.js";function l(s){const a=o();let i,t;const c=s.product_object;c.discount?(i=e("div",{className:"productPriceContainer",children:[e("p",{className:"productPriceDiscountPrice",children:[c.discount.price_after_discount,"$"]}),e("p",{className:"productPriceOldPrice discount",children:[c.price,"$"]})]}),t=e("div",{className:"priceDiscountNumber",children:[c.discount.percentage,"%"]})):i=r("div",{className:"productPriceContainer",children:e("p",{className:"productPriceOldPrice",children:[c.price,"$"]})});const n=()=>{a(`/product/${c.id}`)};return e("div",{className:"productContainer",children:[r("img",{src:c.image,onClick:n}),t,r("p",{onClick:n,children:c.name}),i]})}export{l as P};
