import{u as g,a as o,j as e,s as u,b as i,p as m,r as I,F as N}from"./index-722a17fc.js";const d="/online-shop/assets/googleIcon-8edb2dab.png";function h(){let s=g();return o("div",{className:"signInContainer",children:[e("p",{children:"SIGN IN WITH..."}),o("button",{onClick:()=>{u(i,m).then(n=>{let t=n.user.email,a=n.user.displayName;const l={userEmail:t,userName:a};return console.log(i.currentUser),localStorage.setItem("userName",a),s("/account"),console.log(l)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[e("img",{src:d}),"GOOGLE"]})]})}function p(){let s=g();return o("div",{className:"signUpContainer",children:[e("p",{children:"SIGN UP WITH..."}),o("button",{onClick:()=>{u(i,m).then(n=>{let t=n.user.email,a=n.user.displayName;const l={userEmail:t,userName:a};return console.log(i.currentUser),localStorage.setItem("userName",a),s("/account"),console.log(l)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[e("img",{src:d}),"GOOGLE"]})]})}const r={SignIn:e(h,{}),SignUp:e(p,{})};function S(){const[s,c]=I.useState(r.SignIn),n=t=>{document.querySelector(".activeBtn").classList.remove("activeBtn"),t.target.classList.add("activeBtn"),c(r[t.target.attributes.container.value])};return o("div",{className:"loginMenu",children:[o("div",{className:"loginBtns",children:[e("button",{className:"activeBtn",onClick:n,container:"SignIn",children:"SIGN IN"}),e("button",{onClick:n,container:"SignUp",children:"SIGN UP"})]}),e("div",{className:"loginMenuContent",children:s})]})}function B(){return e(N,{children:e("div",{className:"websiteContent",children:e(S,{})})})}export{B as default};
