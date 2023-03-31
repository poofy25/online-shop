function pE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cs={},gE={get exports(){return cs},set exports(t){cs=t}},rl={},C={},yE={get exports(){return C},set exports(t){C=t}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),vE=Symbol.for("react.portal"),wE=Symbol.for("react.fragment"),EE=Symbol.for("react.strict_mode"),SE=Symbol.for("react.profiler"),IE=Symbol.for("react.provider"),TE=Symbol.for("react.context"),_E=Symbol.for("react.forward_ref"),kE=Symbol.for("react.suspense"),CE=Symbol.for("react.memo"),AE=Symbol.for("react.lazy"),$f=Symbol.iterator;function NE(t){return t===null||typeof t!="object"?null:(t=$f&&t[$f]||t["@@iterator"],typeof t=="function"?t:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,_g={};function wi(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||Ig}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kg(){}kg.prototype=wi.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||Ig}var Rh=Nh.prototype=new kg;Rh.constructor=Nh;Tg(Rh,wi.prototype);Rh.isPureReactComponent=!0;var bf=Array.isArray,Cg=Object.prototype.hasOwnProperty,Dh={current:null},Ag={key:!0,ref:!0,__self:!0,__source:!0};function Ng(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cg.call(e,r)&&!Ag.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qs,type:t,key:s,ref:o,props:i,_owner:Dh.current}}function RE(t,e){return{$$typeof:qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===qs}function DE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uf=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DE(""+t.key):e.toString(36)}function Ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qs:case vE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ru(o,0):r,bf(i)?(n="",t!=null&&(n=t.replace(Uf,"$&/")+"/"),Ko(i,e,n,"",function(u){return u})):i!=null&&(xh(i)&&(i=RE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ru(s,a);o+=Ko(s,e,n,l,i)}else if(l=NE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ru(s,a++),o+=Ko(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function So(t,e,n){if(t==null)return t;var r=[],i=0;return Ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qe={current:null},Wo={transition:null},PE={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Dh};K.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=wi;K.Fragment=wE;K.Profiler=SE;K.PureComponent=Nh;K.StrictMode=EE;K.Suspense=kE;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cg.call(e,l)&&!Ag.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qs,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:TE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IE,_context:t},t.Consumer=t};K.createElement=Ng;K.createFactory=function(t){var e=Ng.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:_E,render:t}};K.isValidElement=xh;K.lazy=function(t){return{$$typeof:AE,_payload:{_status:-1,_result:t},_init:xE}};K.memo=function(t,e){return{$$typeof:CE,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return qe.current.useCallback(t,e)};K.useContext=function(t){return qe.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return qe.current.useDeferredValue(t)};K.useEffect=function(t,e){return qe.current.useEffect(t,e)};K.useId=function(){return qe.current.useId()};K.useImperativeHandle=function(t,e,n){return qe.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return qe.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return qe.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return qe.current.useMemo(t,e)};K.useReducer=function(t,e,n){return qe.current.useReducer(t,e,n)};K.useRef=function(t){return qe.current.useRef(t)};K.useState=function(t){return qe.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return qe.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return qe.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(yE);const Wn=mE(C),Ju=pE({__proto__:null,default:Wn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OE=C,LE=Symbol.for("react.element"),ME=Symbol.for("react.fragment"),$E=Object.prototype.hasOwnProperty,bE=OE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UE={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$E.call(e,r)&&!UE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LE,type:t,key:s,ref:o,props:i,_owner:bE.current}}rl.Fragment=ME;rl.jsx=Rg;rl.jsxs=Rg;(function(t){t.exports=rl})(gE);const FE=cs.Fragment,j=cs.jsx,Pt=cs.jsxs;var Zu={},ec={},VE={get exports(){return ec},set exports(t){ec=t}},at={},tc={},jE={get exports(){return tc},set exports(t){tc=t}},Dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var B=A.length;A.push(V);e:for(;0<B;){var ce=B-1>>>1,Se=A[ce];if(0<i(Se,V))A[ce]=V,A[B]=Se,B=ce;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],B=A.pop();if(B!==V){A[0]=B;e:for(var ce=0,Se=A.length,wo=Se>>>1;ce<wo;){var Hn=2*(ce+1)-1,nu=A[Hn],Kn=Hn+1,Eo=A[Kn];if(0>i(nu,B))Kn<Se&&0>i(Eo,nu)?(A[ce]=Eo,A[Kn]=B,ce=Kn):(A[ce]=nu,A[Hn]=B,ce=Hn);else if(Kn<Se&&0>i(Eo,B))A[ce]=Eo,A[Kn]=B,ce=Kn;else break e}}return V}function i(A,V){var B=A.sortIndex-V.sortIndex;return B!==0?B:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(A){if(v=!1,m(A),!y)if(n(l)!==null)y=!0,eu(_);else{var V=n(u);V!==null&&tu(w,V.startTime-A)}}function _(A,V){y=!1,v&&(v=!1,p(P),P=-1),g=!0;var B=d;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||A&&!wt());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var Se=ce(h.expirationTime<=V);V=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var wo=!0;else{var Hn=n(u);Hn!==null&&tu(w,Hn.startTime-V),wo=!1}return wo}finally{h=null,d=B,g=!1}}var N=!1,R=null,P=-1,Z=5,z=-1;function wt(){return!(t.unstable_now()-z<Z)}function Di(){if(R!==null){var A=t.unstable_now();z=A;var V=!0;try{V=R(!0,A)}finally{V?xi():(N=!1,R=null)}}else N=!1}var xi;if(typeof f=="function")xi=function(){f(Di)};else if(typeof MessageChannel<"u"){var Mf=new MessageChannel,fE=Mf.port2;Mf.port1.onmessage=Di,xi=function(){fE.postMessage(null)}}else xi=function(){T(Di,0)};function eu(A){R=A,N||(N=!0,xi())}function tu(A,V){P=T(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,eu(_))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return A()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=d;d=A;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(A,V,B){var ce=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ce+B:ce):B=ce,A){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=B+Se,A={id:c++,callback:V,priorityLevel:A,startTime:B,expirationTime:Se,sortIndex:-1},B>ce?(A.sortIndex=B,e(u,A),n(l)===null&&A===n(u)&&(v?(p(P),P=-1):v=!0,tu(w,B-ce))):(A.sortIndex=Se,e(l,A),y||g||(y=!0,eu(_))),A},t.unstable_shouldYield=wt,t.unstable_wrapCallback=function(A){var V=d;return function(){var B=d;d=V;try{return A.apply(this,arguments)}finally{d=B}}}})(Dg);(function(t){t.exports=Dg})(jE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg=C,it=tc;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,hs={};function Ir(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(hs[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,BE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Vf={};function zE(t){return nc.call(Vf,t)?!0:nc.call(Ff,t)?!1:BE.test(t)?Vf[t]=!0:(Ff[t]=!0,!1)}function HE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KE(t,e,n,r){if(e===null||typeof e>"u"||HE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ge(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Ge(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Ge(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Ge(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Ge(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Ge(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Ge(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Ge(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Ge(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Ge(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ph,Oh);xe[e]=new Ge(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ph,Oh);xe[e]=new Ge(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ph,Oh);xe[e]=new Ge(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KE(e,n,i,r)&&(n=null),r||i===null?zE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cn=xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Mg=Symbol.for("react.offscreen"),jf=Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,iu;function ji(t){if(iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);iu=e&&e[1]||""}return`
`+iu+t}var su=!1;function ou(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ji(t):""}function WE(t){switch(t.tag){case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Or:return"Portal";case rc:return"Profiler";case Mh:return"StrictMode";case ic:return"Suspense";case sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lg:return(t.displayName||"Context")+".Consumer";case Og:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bh:return e=t.displayName||null,e!==null?e:oc(t.type)||"Memo";case fn:e=t._payload,t=t._init;try{return oc(t(e))}catch{}}return null}function qE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oc(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GE(t){var e=$g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=GE(t))}function bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$g(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ac(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function lc(t,e){Ug(t,e);var n=Ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&uc(t,e.type,Ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uc(t,e,n){(e!=="number"||ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Bi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ln(n)}}function Fg(t,e){var n=Ln(e.value),r=Ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _o,jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QE=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){QE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YE=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(t,e){if(e){if(YE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mc=null,Gr=null,Qr=null;function Wf(t){if(t=Ys(t)){if(typeof mc!="function")throw Error(E(280));var e=t.stateNode;e&&(e=ll(e),mc(t.stateNode,t.type,e))}}function Hg(t){Gr?Qr?Qr.push(t):Qr=[t]:Gr=t}function Kg(){if(Gr){var t=Gr,e=Qr;if(Qr=Gr=null,Wf(t),e)for(t=0;t<e.length;t++)Wf(e[t])}}function Wg(t,e){return t(e)}function qg(){}var au=!1;function Gg(t,e,n){if(au)return t(e,n);au=!0;try{return Wg(t,e,n)}finally{au=!1,(Gr!==null||Qr!==null)&&(qg(),Kg())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var gc=!1;if(en)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{gc=!1}function XE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qi=!1,ha=null,da=!1,yc=null,JE={onError:function(t){Qi=!0,ha=t}};function ZE(t,e,n,r,i,s,o,a,l){Qi=!1,ha=null,XE.apply(JE,arguments)}function eS(t,e,n,r,i,s,o,a,l){if(ZE.apply(this,arguments),Qi){if(Qi){var u=ha;Qi=!1,ha=null}else throw Error(E(198));da||(da=!0,yc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qf(t){if(Tr(t)!==t)throw Error(E(188))}function tS(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qf(i),t;if(s===r)return qf(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Yg(t){return t=tS(t),t!==null?Xg(t):null}function Xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xg(t);if(e!==null)return e;t=t.sibling}return null}var Jg=it.unstable_scheduleCallback,Gf=it.unstable_cancelCallback,nS=it.unstable_shouldYield,rS=it.unstable_requestPaint,he=it.unstable_now,iS=it.unstable_getCurrentPriorityLevel,Fh=it.unstable_ImmediatePriority,Zg=it.unstable_UserBlockingPriority,fa=it.unstable_NormalPriority,sS=it.unstable_LowPriority,ey=it.unstable_IdlePriority,il=null,Mt=null;function oS(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(il,t,void 0,(t.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:uS,aS=Math.log,lS=Math.LN2;function uS(t){return t>>>=0,t===0?32:31-(aS(t)/lS|0)|0}var ko=64,Co=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zi(a):(s&=o,s!==0&&(r=zi(s)))}else o=n&~i,o!==0?r=zi(o):s!==0&&(r=zi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kt(e),i=1<<n,r|=t[n],e&=~i;return r}function cS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ty(){var t=ko;return ko<<=1,!(ko&4194240)&&(ko=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kt(e),t[e]=n}function dS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ry,jh,iy,sy,oy,wc=!1,Ao=[],Tn=null,_n=null,kn=null,ps=new Map,ms=new Map,mn=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,e){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function Li(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ys(e),e!==null&&jh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pS(t,e,n,r,i){switch(e){case"focusin":return Tn=Li(Tn,t,e,n,r,i),!0;case"dragenter":return _n=Li(_n,t,e,n,r,i),!0;case"mouseover":return kn=Li(kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ps.set(s,Li(ps.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ms.set(s,Li(ms.get(s)||null,t,e,n,r,i)),!0}return!1}function ay(t){var e=Xn(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qg(n),e!==null){t.blockedOn=e,oy(t.priority,function(){iy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pc=r,n.target.dispatchEvent(r),pc=null}else return e=Ys(n),e!==null&&jh(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){qo(t)&&n.delete(e)}function mS(){wc=!1,Tn!==null&&qo(Tn)&&(Tn=null),_n!==null&&qo(_n)&&(_n=null),kn!==null&&qo(kn)&&(kn=null),ps.forEach(Yf),ms.forEach(Yf)}function Mi(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,mS)))}function gs(t){function e(i){return Mi(i,t)}if(0<Ao.length){Mi(Ao[0],t);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tn!==null&&Mi(Tn,t),_n!==null&&Mi(_n,t),kn!==null&&Mi(kn,t),ps.forEach(e),ms.forEach(e),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)ay(n),n.blockedOn===null&&mn.shift()}var Yr=cn.ReactCurrentBatchConfig,ma=!0;function gS(t,e,n,r){var i=Y,s=Yr.transition;Yr.transition=null;try{Y=1,Bh(t,e,n,r)}finally{Y=i,Yr.transition=s}}function yS(t,e,n,r){var i=Y,s=Yr.transition;Yr.transition=null;try{Y=4,Bh(t,e,n,r)}finally{Y=i,Yr.transition=s}}function Bh(t,e,n,r){if(ma){var i=Ec(t,e,n,r);if(i===null)vu(t,e,r,ga,n),Qf(t,r);else if(pS(i,t,e,n,r))r.stopPropagation();else if(Qf(t,r),e&4&&-1<fS.indexOf(t)){for(;i!==null;){var s=Ys(i);if(s!==null&&ry(s),s=Ec(t,e,n,r),s===null&&vu(t,e,r,ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vu(t,e,r,null,n)}}var ga=null;function Ec(t,e,n,r){if(ga=null,t=Uh(r),t=Xn(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ga=t,null}function ly(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case Fh:return 1;case Zg:return 4;case fa:case sS:return 16;case ey:return 536870912;default:return 16}default:return 16}}var En=null,zh=null,Go=null;function uy(){if(Go)return Go;var t,e=zh,n=e.length,r,i="value"in En?En.value:En.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Go=i.slice(t,1<r?1-r:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function Xf(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:Xf,this.isPropagationStopped=Xf,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=lt(Ei),Qs=oe({},Ei,{view:0,detail:0}),vS=lt(Qs),uu,cu,$i,sl=oe({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(uu=t.screenX-$i.screenX,cu=t.screenY-$i.screenY):cu=uu=0,$i=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),Jf=lt(sl),wS=oe({},sl,{dataTransfer:0}),ES=lt(wS),SS=oe({},Qs,{relatedTarget:0}),hu=lt(SS),IS=oe({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),TS=lt(IS),_S=oe({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=lt(_S),CS=oe({},Ei,{data:0}),Zf=lt(CS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RS[t])?!!e[t]:!1}function Kh(){return DS}var xS=oe({},Qs,{key:function(t){if(t.key){var e=AS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kh,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PS=lt(xS),OS=oe({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=lt(OS),LS=oe({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kh}),MS=lt(LS),$S=oe({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=lt($S),US=oe({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=lt(US),VS=[9,13,27,32],Wh=en&&"CompositionEvent"in window,Yi=null;en&&"documentMode"in document&&(Yi=document.documentMode);var jS=en&&"TextEvent"in window&&!Yi,cy=en&&(!Wh||Yi&&8<Yi&&11>=Yi),tp=String.fromCharCode(32),np=!1;function hy(t,e){switch(t){case"keyup":return VS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function BS(t,e){switch(t){case"compositionend":return dy(e);case"keypress":return e.which!==32?null:(np=!0,tp);case"textInput":return t=e.data,t===tp&&np?null:t;default:return null}}function zS(t,e){if(Mr)return t==="compositionend"||!Wh&&hy(t,e)?(t=uy(),Go=zh=En=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cy&&e.locale!=="ko"?null:e.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HS[t.type]:e==="textarea"}function fy(t,e,n,r){Hg(r),e=ya(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xi=null,ys=null;function KS(t){_y(t,0)}function ol(t){var e=Ur(t);if(bg(e))return t}function WS(t,e){if(t==="change")return e}var py=!1;if(en){var du;if(en){var fu="oninput"in document;if(!fu){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),fu=typeof ip.oninput=="function"}du=fu}else du=!1;py=du&&(!document.documentMode||9<document.documentMode)}function sp(){Xi&&(Xi.detachEvent("onpropertychange",my),ys=Xi=null)}function my(t){if(t.propertyName==="value"&&ol(ys)){var e=[];fy(e,ys,t,Uh(t)),Gg(KS,e)}}function qS(t,e,n){t==="focusin"?(sp(),Xi=e,ys=n,Xi.attachEvent("onpropertychange",my)):t==="focusout"&&sp()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(ys)}function QS(t,e){if(t==="click")return ol(e)}function YS(t,e){if(t==="input"||t==="change")return ol(e)}function XS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:XS;function vs(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nc.call(e,i)||!At(t[i],e[i]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var n=op(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function gy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yy(){for(var t=window,e=ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ca(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JS(t){var e=yy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(r!==null&&qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ap(n,s);var o=ap(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZS=en&&"documentMode"in document&&11>=document.documentMode,$r=null,Sc=null,Ji=null,Ic=!1;function lp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||$r==null||$r!==ca(r)||(r=$r,"selectionStart"in r&&qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&vs(Ji,r)||(Ji=r,r=ya(Sc,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$r)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},pu={},vy={};en&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function al(t){if(pu[t])return pu[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vy)return pu[t]=e[n];return t}var wy=al("animationend"),Ey=al("animationiteration"),Sy=al("animationstart"),Iy=al("transitionend"),Ty=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){Ty.set(t,e),Ir(e,[t])}for(var mu=0;mu<up.length;mu++){var gu=up[mu],eI=gu.toLowerCase(),tI=gu[0].toUpperCase()+gu.slice(1);Fn(eI,"on"+tI)}Fn(wy,"onAnimationEnd");Fn(Ey,"onAnimationIteration");Fn(Sy,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Iy,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function cp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eS(r,e,void 0,t),t.currentTarget=null}function _y(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cp(i,a,u),s=l}}}if(da)throw t=yc,da=!1,yc=null,t}function ee(t,e){var n=e[Ac];n===void 0&&(n=e[Ac]=new Set);var r=t+"__bubble";n.has(r)||(ky(e,t,2,!1),n.add(r))}function yu(t,e,n){var r=0;e&&(r|=4),ky(n,t,r,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function ws(t){if(!t[Do]){t[Do]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(nI.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Do]||(e[Do]=!0,yu("selectionchange",!1,e))}}function ky(t,e,n,r){switch(ly(e)){case 1:var i=gS;break;case 4:i=yS;break;default:i=Bh}n=i.bind(null,e,n,t),i=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gg(function(){var u=s,c=Uh(n),h=[];e:{var d=Ty.get(t);if(d!==void 0){var g=Hh,y=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":g=PS;break;case"focusin":y="focus",g=hu;break;case"focusout":y="blur",g=hu;break;case"beforeblur":case"afterblur":g=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=MS;break;case wy:case Ey:case Sy:g=TS;break;case Iy:g=bS;break;case"scroll":g=vS;break;case"wheel":g=FS;break;case"copy":case"cut":case"paste":g=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ep}var v=(e&4)!==0,T=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=fs(f,p),w!=null&&v.push(Es(f,w,m)))),T)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==pc&&(y=n.relatedTarget||n.fromElement)&&(Xn(y)||y[tn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Xn(y):null,y!==null&&(T=Tr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Jf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=ep,w="onPointerLeave",p="onPointerEnter",f="pointer"),T=g==null?d:Ur(g),m=y==null?d:Ur(y),d=new v(w,f+"leave",g,n,c),d.target=T,d.relatedTarget=m,w=null,Xn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=T,w=v),T=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=Dr(m))f++;for(m=0,w=p;w;w=Dr(w))m++;for(;0<f-m;)v=Dr(v),f--;for(;0<m-f;)p=Dr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Dr(v),p=Dr(p)}v=null}else v=null;g!==null&&hp(h,d,g,v,!1),y!==null&&T!==null&&hp(h,T,y,v,!0)}}e:{if(d=u?Ur(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var _=WS;else if(rp(d))if(py)_=YS;else{_=GS;var N=qS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=QS);if(_&&(_=_(t,u))){fy(h,_,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&uc(d,"number",d.value)}switch(N=u?Ur(u):window,t){case"focusin":(rp(N)||N.contentEditable==="true")&&($r=N,Sc=u,Ji=null);break;case"focusout":Ji=Sc=$r=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,lp(h,n,c);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":lp(h,n,c)}var R;if(Wh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Mr?hy(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cy&&n.locale!=="ko"&&(Mr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Mr&&(R=uy()):(En=c,zh="value"in En?En.value:En.textContent,Mr=!0)),N=ya(u,P),0<N.length&&(P=new Zf(P,t,null,n,c),h.push({event:P,listeners:N}),R?P.data=R:(R=dy(n),R!==null&&(P.data=R)))),(R=jS?BS(t,n):zS(t,n))&&(u=ya(u,"onBeforeInput"),0<u.length&&(c=new Zf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}_y(h,e)})}function Es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fs(t,n),s!=null&&r.unshift(Es(t,s,i)),s=fs(t,e),s!=null&&r.push(Es(t,s,i))),t=t.return}return r}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fs(n,s),l!=null&&o.unshift(Es(n,l,a))):i||(l=fs(n,s),l!=null&&o.push(Es(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rI=/\r\n?/g,iI=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(rI,`
`).replace(iI,"")}function xo(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(E(425))}function va(){}var Tc=null,_c=null;function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,sI=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,oI=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(aI)}:Cc;function aI(t){setTimeout(function(){throw t})}function wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),gs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gs(e)}function Cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Si=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Si,Ss="__reactProps$"+Si,tn="__reactContainer$"+Si,Ac="__reactEvents$"+Si,lI="__reactListeners$"+Si,uI="__reactHandles$"+Si;function Xn(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[Ot])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[Ot]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function ll(t){return t[Ss]||null}var Nc=[],Fr=-1;function Vn(t){return{current:t}}function te(t){0>Fr||(t.current=Nc[Fr],Nc[Fr]=null,Fr--)}function X(t,e){Fr++,Nc[Fr]=t.current,t.current=e}var Mn={},je=Vn(Mn),Xe=Vn(!1),hr=Mn;function ii(t,e){var n=t.type.contextTypes;if(!n)return Mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function wa(){te(Xe),te(je)}function mp(t,e,n){if(je.current!==Mn)throw Error(E(168));X(je,e),X(Xe,n)}function Cy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,qE(t)||"Unknown",i));return oe({},n,r)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,hr=je.current,X(je,t),X(Xe,Xe.current),!0}function gp(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Cy(t,e,hr),r.__reactInternalMemoizedMergedChildContext=t,te(Xe),te(je),X(je,t)):te(Xe),X(Xe,n)}var Kt=null,ul=!1,Eu=!1;function Ay(t){Kt===null?Kt=[t]:Kt.push(t)}function cI(t){ul=!0,Ay(t)}function jn(){if(!Eu&&Kt!==null){Eu=!0;var t=0,e=Y;try{var n=Kt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kt=null,ul=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(t+1)),Jg(Fh,jn),i}finally{Y=e,Eu=!1}}return null}var Vr=[],jr=0,Sa=null,Ia=0,ut=[],ct=0,dr=null,qt=1,Gt="";function qn(t,e){Vr[jr++]=Ia,Vr[jr++]=Sa,Sa=t,Ia=e}function Ny(t,e,n){ut[ct++]=qt,ut[ct++]=Gt,ut[ct++]=dr,dr=t;var r=qt;t=Gt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var s=32-kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-kt(e)+i|n<<i|r,Gt=s+t}else qt=1<<s|n<<i|r,Gt=t}function Gh(t){t.return!==null&&(qn(t,1),Ny(t,1,0))}function Qh(t){for(;t===Sa;)Sa=Vr[--jr],Vr[jr]=null,Ia=Vr[--jr],Vr[jr]=null;for(;t===dr;)dr=ut[--ct],ut[ct]=null,Gt=ut[--ct],ut[ct]=null,qt=ut[--ct],ut[ct]=null}var nt=null,tt=null,ne=!1,Tt=null;function Ry(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=Cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=dr!==null?{id:qt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(ne){var e=tt;if(e){var n=e;if(!yp(t,e)){if(Rc(t))throw Error(E(418));e=Cn(n.nextSibling);var r=nt;e&&yp(t,e)?Ry(r,n):(t.flags=t.flags&-4097|2,ne=!1,nt=t)}}else{if(Rc(t))throw Error(E(418));t.flags=t.flags&-4097|2,ne=!1,nt=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Po(t){if(t!==nt)return!1;if(!ne)return vp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kc(t.type,t.memoizedProps)),e&&(e=tt)){if(Rc(t))throw Dy(),Error(E(418));for(;e;)Ry(t,e),e=Cn(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=Cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?Cn(t.stateNode.nextSibling):null;return!0}function Dy(){for(var t=tt;t;)t=Cn(t.nextSibling)}function si(){tt=nt=null,ne=!1}function Yh(t){Tt===null?Tt=[t]:Tt.push(t)}var hI=cn.ReactCurrentBatchConfig;function St(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ta=Vn(null),_a=null,Br=null,Xh=null;function Jh(){Xh=Br=_a=null}function Zh(t){var e=Ta.current;te(Ta),t._currentValue=e}function xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){_a=t,Xh=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ye=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(Xh!==t)if(t={context:t,memoizedValue:e,next:null},Br===null){if(_a===null)throw Error(E(308));Br=t,_a.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return e}var Jn=null;function ed(t){Jn===null?Jn=[t]:Jn.push(t)}function xy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ed(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pn=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Py(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function An(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,ed(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}function wp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ka(t,e,n,r){var i=t.updateQueue;pn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=oe({},h,d);break e;case 2:pn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=h}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Oy=new xg.Component().refs;function Pc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=Rn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Ct(e,t,i,r),Yo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=Rn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Ct(e,t,i,r),Yo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=Rn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=An(t,i,r),e!==null&&(Ct(e,t,r,n),Yo(e,t,r))}};function Sp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vs(n,r)||!vs(i,s):!0}function Ly(t,e,n){var r=!1,i=Mn,s=e.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=Je(e)?hr:je.current,r=e.contextTypes,s=(r=r!=null)?ii(t,i):Mn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cl.enqueueReplaceState(e,e.state,null)}function Oc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Oy,td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=Je(e)?hr:je.current,i.context=ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cl.enqueueReplaceState(i,i.state,null),ka(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Oy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Oo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function My(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Dn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Au(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var _=m.type;return _===Lr?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&Tp(_)===f.type)?(w=i(f,m.props),w.ref=bi(p,f,m),w.return=p,w):(w=na(m.type,m.key,m.props,null,p.mode,w),w.ref=bi(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Nu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,_){return f===null||f.tag!==7?(f=or(m,p.mode,w,_),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Au(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return m=na(f.type,f.key,f.props,null,p.mode,m),m.ref=bi(p,null,f),m.return=p,m;case Or:return f=Nu(f,p.mode,m),f.return=p,f;case fn:var w=f._init;return h(p,w(f._payload),m)}if(Bi(f)||Pi(f))return f=or(f,p.mode,m,null),f.return=p,f;Oo(p,f)}return null}function d(p,f,m,w){var _=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:return m.key===_?l(p,f,m,w):null;case Or:return m.key===_?u(p,f,m,w):null;case fn:return _=m._init,d(p,f,_(m._payload),w)}if(Bi(m)||Pi(m))return _!==null?null:c(p,f,m,w,null);Oo(p,m)}return null}function g(p,f,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Io:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,_);case Or:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,_);case fn:var N=w._init;return g(p,f,m,N(w._payload),_)}if(Bi(w)||Pi(w))return p=p.get(m)||null,c(f,p,w,_,null);Oo(f,w)}return null}function y(p,f,m,w){for(var _=null,N=null,R=f,P=f=0,Z=null;R!==null&&P<m.length;P++){R.index>P?(Z=R,R=null):Z=R.sibling;var z=d(p,R,m[P],w);if(z===null){R===null&&(R=Z);break}t&&R&&z.alternate===null&&e(p,R),f=s(z,f,P),N===null?_=z:N.sibling=z,N=z,R=Z}if(P===m.length)return n(p,R),ne&&qn(p,P),_;if(R===null){for(;P<m.length;P++)R=h(p,m[P],w),R!==null&&(f=s(R,f,P),N===null?_=R:N.sibling=R,N=R);return ne&&qn(p,P),_}for(R=r(p,R);P<m.length;P++)Z=g(R,p,P,m[P],w),Z!==null&&(t&&Z.alternate!==null&&R.delete(Z.key===null?P:Z.key),f=s(Z,f,P),N===null?_=Z:N.sibling=Z,N=Z);return t&&R.forEach(function(wt){return e(p,wt)}),ne&&qn(p,P),_}function v(p,f,m,w){var _=Pi(m);if(typeof _!="function")throw Error(E(150));if(m=_.call(m),m==null)throw Error(E(151));for(var N=_=null,R=f,P=f=0,Z=null,z=m.next();R!==null&&!z.done;P++,z=m.next()){R.index>P?(Z=R,R=null):Z=R.sibling;var wt=d(p,R,z.value,w);if(wt===null){R===null&&(R=Z);break}t&&R&&wt.alternate===null&&e(p,R),f=s(wt,f,P),N===null?_=wt:N.sibling=wt,N=wt,R=Z}if(z.done)return n(p,R),ne&&qn(p,P),_;if(R===null){for(;!z.done;P++,z=m.next())z=h(p,z.value,w),z!==null&&(f=s(z,f,P),N===null?_=z:N.sibling=z,N=z);return ne&&qn(p,P),_}for(R=r(p,R);!z.done;P++,z=m.next())z=g(R,p,P,z.value,w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?P:z.key),f=s(z,f,P),N===null?_=z:N.sibling=z,N=z);return t&&R.forEach(function(Di){return e(p,Di)}),ne&&qn(p,P),_}function T(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:e:{for(var _=m.key,N=f;N!==null;){if(N.key===_){if(_=m.type,_===Lr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&Tp(_)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=bi(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Lr?(f=or(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=na(m.type,m.key,m.props,null,p.mode,w),w.ref=bi(p,f,m),w.return=p,p=w)}return o(p);case Or:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Nu(m,p.mode,w),f.return=p,p=f}return o(p);case fn:return N=m._init,T(p,f,N(m._payload),w)}if(Bi(m))return y(p,f,m,w);if(Pi(m))return v(p,f,m,w);Oo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Au(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return T}var oi=My(!0),$y=My(!1),Xs={},$t=Vn(Xs),Is=Vn(Xs),Ts=Vn(Xs);function Zn(t){if(t===Xs)throw Error(E(174));return t}function nd(t,e){switch(X(Ts,e),X(Is,t),X($t,Xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hc(e,t)}te($t),X($t,e)}function ai(){te($t),te(Is),te(Ts)}function by(t){Zn(Ts.current);var e=Zn($t.current),n=hc(e,t.type);e!==n&&(X(Is,t),X($t,n))}function rd(t){Is.current===t&&(te($t),te(Is))}var ie=Vn(0);function Ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function id(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Xo=cn.ReactCurrentDispatcher,Iu=cn.ReactCurrentBatchConfig,fr=0,se=null,me=null,Te=null,Aa=!1,Zi=!1,_s=0,dI=0;function Oe(){throw Error(E(321))}function sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function od(t,e,n,r,i,s){if(fr=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xo.current=t===null||t.memoizedState===null?gI:yI,t=n(r,i),Zi){s=0;do{if(Zi=!1,_s=0,25<=s)throw Error(E(301));s+=1,Te=me=null,e.updateQueue=null,Xo.current=vI,t=n(r,i)}while(Zi)}if(Xo.current=Na,e=me!==null&&me.next!==null,fr=0,Te=me=se=null,Aa=!1,e)throw Error(E(300));return t}function ad(){var t=_s!==0;return _s=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?se.memoizedState=Te=t:Te=Te.next=t,Te}function vt(){if(me===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Te===null?se.memoizedState:Te.next;if(e!==null)Te=e,me=t;else{if(t===null)throw Error(E(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Te===null?se.memoizedState=Te=t:Te=Te.next=t}return Te}function ks(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=vt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(Ye=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=vt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(Ye=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Uy(){}function Fy(t,e){var n=se,r=vt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,Ye=!0),r=r.queue,ld(By.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Cs(9,jy.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(E(349));fr&30||Vy(n,e,i)}return i}function Vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jy(t,e,n,r){e.value=n,e.getSnapshot=r,zy(e)&&Hy(t)}function By(t,e,n){return n(function(){zy(e)&&Hy(t)})}function zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function Hy(t){var e=nn(t,1);e!==null&&Ct(e,t,1,-1)}function _p(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=mI.bind(null,se,t),[e.memoizedState,t]}function Cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ky(){return vt().memoizedState}function Jo(t,e,n,r){var i=xt();se.flags|=t,i.memoizedState=Cs(1|e,n,void 0,r===void 0?null:r)}function hl(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&sd(r,o.deps)){i.memoizedState=Cs(e,n,s,r);return}}se.flags|=t,i.memoizedState=Cs(1|e,n,s,r)}function kp(t,e){return Jo(8390656,8,t,e)}function ld(t,e){return hl(2048,8,t,e)}function Wy(t,e){return hl(4,2,t,e)}function qy(t,e){return hl(4,4,t,e)}function Gy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qy(t,e,n){return n=n!=null?n.concat([t]):null,hl(4,4,Gy.bind(null,e,t),n)}function ud(){}function Yy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jy(t,e,n){return fr&21?(At(n,e)||(n=ty(),se.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ye=!0),t.memoizedState=n)}function fI(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Iu.transition;Iu.transition={};try{t(!1),e()}finally{Y=n,Iu.transition=r}}function Zy(){return vt().memoizedState}function pI(t,e,n){var r=Rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ev(t))tv(e,n);else if(n=xy(t,e,n,r),n!==null){var i=We();Ct(n,t,r,i),nv(n,e,r)}}function mI(t,e,n){var r=Rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(t))tv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,ed(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=xy(t,e,i,r),n!==null&&(i=We(),Ct(n,t,r,i),nv(n,e,r))}}function ev(t){var e=t.alternate;return t===se||e!==null&&e===se}function tv(t,e){Zi=Aa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}var Na={readContext:yt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},gI={readContext:yt,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,Gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pI.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:ud,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=fI.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=xt();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),_e===null)throw Error(E(349));fr&30||Vy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kp(By.bind(null,r,s,t),[t]),r.flags|=2048,Cs(9,jy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=_e.identifierPrefix;if(ne){var n=Gt,r=qt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yI={readContext:yt,useCallback:Yy,useContext:yt,useEffect:ld,useImperativeHandle:Qy,useInsertionEffect:Wy,useLayoutEffect:qy,useMemo:Xy,useReducer:Tu,useRef:Ky,useState:function(){return Tu(ks)},useDebugValue:ud,useDeferredValue:function(t){var e=vt();return Jy(e,me.memoizedState,t)},useTransition:function(){var t=Tu(ks)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Uy,useSyncExternalStore:Fy,useId:Zy,unstable_isNewReconciler:!1},vI={readContext:yt,useCallback:Yy,useContext:yt,useEffect:ld,useImperativeHandle:Qy,useInsertionEffect:Wy,useLayoutEffect:qy,useMemo:Xy,useReducer:_u,useRef:Ky,useState:function(){return _u(ks)},useDebugValue:ud,useDeferredValue:function(t){var e=vt();return me===null?e.memoizedState=t:Jy(e,me.memoizedState,t)},useTransition:function(){var t=_u(ks)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Uy,useSyncExternalStore:Fy,useId:Zy,unstable_isNewReconciler:!1};function li(t,e){try{var n="",r=e;do n+=WE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wI=typeof WeakMap=="function"?WeakMap:Map;function rv(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Da||(Da=!0,Hc=r),Lc(t,e)},n}function iv(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lc(t,e),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OI.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Np(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,An(n,e,1))),n.lanes|=1),t)}var EI=cn.ReactCurrentOwner,Ye=!1;function He(t,e,n,r){e.child=t===null?$y(e,null,n,r):oi(e,t.child,n,r)}function Rp(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=od(t,e,n,r,s,i),n=ad(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(ne&&n&&Gh(e),e.flags|=1,He(t,e,r,i),e.child)}function Dp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sv(t,e,s,r,i)):(t=na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vs,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=Dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function sv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vs(s,r)&&t.ref===e.ref)if(Ye=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ye=!0);else return e.lanes=t.lanes,rn(t,e,i)}return Mc(t,e,n,r,i)}function ov(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Hr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Hr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Hr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Hr,et),et|=r;return He(t,e,i,n),e.child}function av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mc(t,e,n,r,i){var s=Je(n)?hr:je.current;return s=ii(e,s),Xr(e,i),n=od(t,e,n,r,s,i),r=ad(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(ne&&r&&Gh(e),e.flags|=1,He(t,e,n,i),e.child)}function xp(t,e,n,r,i){if(Je(n)){var s=!0;Ea(e)}else s=!1;if(Xr(e,i),e.stateNode===null)Zo(t,e),Ly(e,n,r),Oc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=Je(n)?hr:je.current,u=ii(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ip(e,o,r,u),pn=!1;var d=e.memoizedState;o.state=d,ka(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xe.current||pn?(typeof c=="function"&&(Pc(e,n,c,r),l=e.memoizedState),(a=pn||Sp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Py(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:St(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=Je(n)?hr:je.current,l=ii(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ip(e,o,r,l),pn=!1,d=e.memoizedState,o.state=d,ka(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Xe.current||pn?(typeof g=="function"&&(Pc(e,n,g,r),y=e.memoizedState),(u=pn||Sp(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $c(t,e,n,r,s,i)}function $c(t,e,n,r,i,s){av(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gp(e,n,!1),rn(t,e,s);r=e.stateNode,EI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,s),e.child=oi(e,null,a,s)):He(t,e,a,s),e.memoizedState=r.state,i&&gp(e,n,!0),e.child}function lv(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),nd(t,e.containerInfo)}function Pp(t,e,n,r,i){return si(),Yh(i),e.flags|=256,He(t,e,n,r),e.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function uv(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ie,i&1),t===null)return Dc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pl(o,r,0,null),t=or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uc(n),e.memoizedState=bc,t):cd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dn(a,s):(s=or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bc,r}return s=t.child,t=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cd(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lo(t,e,n,r){return r!==null&&Yh(r),oi(e,t.child,null,n),t=cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ku(Error(E(422))),Lo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pl({mode:"visible",children:r.children},i,0,null),s=or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=Uc(o),e.memoizedState=bc,s);if(!(e.mode&1))return Lo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=ku(s,r,void 0),Lo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ye||a){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),Ct(r,t,i,-1))}return gd(),r=ku(Error(E(421))),Lo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=LI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=Cn(i.nextSibling),nt=e,ne=!0,Tt=null,t!==null&&(ut[ct++]=qt,ut[ct++]=Gt,ut[ct++]=dr,qt=t.id,Gt=t.overflow,dr=e),e=cd(e,r.children),e.flags|=4096,e)}function Op(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xc(t.return,e,n)}function Cu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,n,e);else if(t.tag===19)Op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ca(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ca(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function II(t,e,n){switch(e.tag){case 3:lv(e),si();break;case 5:by(e);break;case 1:Je(e.type)&&Ea(e);break;case 4:nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Ta,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?uv(t,e,n):(X(ie,ie.current&1),t=rn(t,e,n),t!==null?t.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,ov(t,e,n)}return rn(t,e,n)}var hv,Fc,dv,fv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fc=function(){};dv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zn($t.current);var s=null;switch(n){case"input":i=ac(t,i),r=ac(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=cc(t,i),r=cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=va)}dc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ui(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TI(t,e,n){var r=e.pendingProps;switch(Qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return Je(e.type)&&wa(),Le(e),null;case 3:return r=e.stateNode,ai(),te(Xe),te(je),id(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(qc(Tt),Tt=null))),Fc(t,e),Le(e),null;case 5:rd(e);var i=Zn(Ts.current);if(n=e.type,t!==null&&e.stateNode!=null)dv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Le(e),null}if(t=Zn($t.current),Po(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[Ss]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Hi.length;i++)ee(Hi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Bf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Hf(r,s),ee("invalid",r)}dc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",""+a]):hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":To(r),zf(r,s,!0);break;case"textarea":To(r),Kf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=va)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[Ss]=r,hv(t,e,!1,!1),e.stateNode=t;e:{switch(o=fc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hi.length;i++)ee(Hi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Bf(t,r),i=ac(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Hf(t,r),i=cc(t,r),ee("invalid",t);break;default:i=r}dc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ds(t,l):typeof l=="number"&&ds(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Lh(t,s,l,o))}switch(n){case"input":To(t),zf(t,r,!1);break;case"textarea":To(t),Kf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)fv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Zn(Ts.current),Zn($t.current),Po(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Le(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&tt!==null&&e.mode&1&&!(e.flags&128))Dy(),si(),e.flags|=98560,s=!1;else if(s=Po(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ot]=e}else si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else Tt!==null&&(qc(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ye===0&&(ye=3):gd())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return ai(),Fc(t,e),t===null&&ws(e.stateNode.containerInfo),Le(e),null;case 10:return Zh(e.type._context),Le(e),null;case 17:return Je(e.type)&&wa(),Le(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ui(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ca(t),o!==null){for(e.flags|=128,Ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>ui&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Le(e),null}else 2*he()-s.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function _I(t,e){switch(Qh(e),e.tag){case 1:return Je(e.type)&&wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),te(Xe),te(je),id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rd(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return ai(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Mo=!1,$e=!1,kI=typeof WeakSet=="function"?WeakSet:Set,k=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Vc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Lp=!1;function CI(t,e){if(Tc=ma,t=yy(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:t,selectionRange:n},ma=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,T=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:St(e.type,v),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=Lp,Lp=!1,y}function es(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vc(e,n,s)}i=i.next}while(i!==r)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pv(t){var e=t.alternate;e!==null&&(t.alternate=null,pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[Ss],delete e[Ac],delete e[lI],delete e[uI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mv(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=va));else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}var Ae=null,It=!1;function hn(t,e,n){for(n=n.child;n!==null;)gv(t,e,n),n=n.sibling}function gv(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:$e||zr(n,e);case 6:var r=Ae,i=It;Ae=null,hn(t,e,n),Ae=r,It=i,Ae!==null&&(It?(t=Ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(It?(t=Ae,n=n.stateNode,t.nodeType===8?wu(t.parentNode,n):t.nodeType===1&&wu(t,n),gs(t)):wu(Ae,n.stateNode));break;case 4:r=Ae,i=It,Ae=n.stateNode.containerInfo,It=!0,hn(t,e,n),Ae=r,It=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vc(n,e,o),i=i.next}while(i!==r)}hn(t,e,n);break;case 1:if(!$e&&(zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}hn(t,e,n);break;case 21:hn(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,hn(t,e,n),$e=r):hn(t,e,n);break;default:hn(t,e,n)}}function $p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kI),e.forEach(function(r){var i=MI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,It=!1;break e;case 3:Ae=a.stateNode.containerInfo,It=!0;break e;case 4:Ae=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ae===null)throw Error(E(160));gv(s,o,i),Ae=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yv(e,t),e=e.sibling}function yv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(e,t),Dt(t),r&4){try{es(3,t,t.return),dl(3,t)}catch(v){ae(t,t.return,v)}try{es(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:Et(e,t),Dt(t),r&512&&n!==null&&zr(n,n.return);break;case 5:if(Et(e,t),Dt(t),r&512&&n!==null&&zr(n,n.return),t.flags&32){var i=t.stateNode;try{ds(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ug(i,s),fc(a,o);var u=fc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?zg(i,h):c==="dangerouslySetInnerHTML"?jg(i,h):c==="children"?ds(i,h):Lh(i,c,h,u)}switch(a){case"input":lc(i,s);break;case"textarea":Fg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?qr(i,!!s.multiple,s.defaultValue,!0):qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ss]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(Et(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(Et(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:Et(e,t),Dt(t);break;case 13:Et(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fd=he())),r&4&&$p(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||c,Et(e,t),$e=u):Et(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,g=d.child,d.tag){case 0:case 11:case 14:case 15:es(4,d,d.return);break;case 1:zr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:zr(d,d.return);break;case 22:if(d.memoizedState!==null){Up(h);continue}}g!==null?(g.return=d,k=g):Up(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bg("display",o))}catch(v){ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Et(e,t),Dt(t),r&4&&$p(t);break;case 21:break;default:Et(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mv(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ds(i,""),r.flags&=-33);var s=Mp(t);zc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mp(t);Bc(t,a,o);break;default:throw Error(E(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AI(t,e,n){k=t,vv(t)}function vv(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=Mo;var u=$e;if(Mo=o,($e=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(i):l!==null?(l.return=o,k=l):Fp(i);for(;s!==null;)k=s,vv(s),s=s.sibling;k=i,Mo=a,$e=u}bp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):bp(t)}}function bp(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&gs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}$e||e.flags&512&&jc(e)}catch(d){ae(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Up(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Fp(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{jc(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{jc(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var NI=Math.ceil,Ra=cn.ReactCurrentDispatcher,hd=cn.ReactCurrentOwner,ft=cn.ReactCurrentBatchConfig,q=0,_e=null,pe=null,Re=0,et=0,Hr=Vn(0),ye=0,As=null,pr=0,fl=0,dd=0,ts=null,Qe=null,fd=0,ui=1/0,Ht=null,Da=!1,Hc=null,Nn=null,$o=!1,Sn=null,xa=0,ns=0,Kc=null,ea=-1,ta=0;function We(){return q&6?he():ea!==-1?ea:ea=he()}function Rn(t){return t.mode&1?q&2&&Re!==0?Re&-Re:hI.transition!==null?(ta===0&&(ta=ty()),ta):(t=Y,t!==0||(t=window.event,t=t===void 0?16:ly(t.type)),t):1}function Ct(t,e,n,r){if(50<ns)throw ns=0,Kc=null,Error(E(185));Gs(t,n,r),(!(q&2)||t!==_e)&&(t===_e&&(!(q&2)&&(fl|=n),ye===4&&gn(t,Re)),Ze(t,r),n===1&&q===0&&!(e.mode&1)&&(ui=he()+500,ul&&jn()))}function Ze(t,e){var n=t.callbackNode;hS(t,e);var r=pa(t,t===_e?Re:0);if(r===0)n!==null&&Gf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gf(n),e===1)t.tag===0?cI(Vp.bind(null,t)):Ay(Vp.bind(null,t)),oI(function(){!(q&6)&&jn()}),n=null;else{switch(ny(r)){case 1:n=Fh;break;case 4:n=Zg;break;case 16:n=fa;break;case 536870912:n=ey;break;default:n=fa}n=Cv(n,wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wv(t,e){if(ea=-1,ta=0,q&6)throw Error(E(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=pa(t,t===_e?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Pa(t,r);else{e=r;var i=q;q|=2;var s=Sv();(_e!==t||Re!==e)&&(Ht=null,ui=he()+500,sr(t,e));do try{xI();break}catch(a){Ev(t,a)}while(1);Jh(),Ra.current=s,q=i,pe!==null?e=0:(_e=null,Re=0,e=ye)}if(e!==0){if(e===2&&(i=vc(t),i!==0&&(r=i,e=Wc(t,i))),e===1)throw n=As,sr(t,0),gn(t,r),Ze(t,he()),n;if(e===6)gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!RI(i)&&(e=Pa(t,r),e===2&&(s=vc(t),s!==0&&(r=s,e=Wc(t,s))),e===1))throw n=As,sr(t,0),gn(t,r),Ze(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Gn(t,Qe,Ht);break;case 3:if(gn(t,r),(r&130023424)===r&&(e=fd+500-he(),10<e)){if(pa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cc(Gn.bind(null,t,Qe,Ht),e);break}Gn(t,Qe,Ht);break;case 4:if(gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NI(r/1960))-r,10<r){t.timeoutHandle=Cc(Gn.bind(null,t,Qe,Ht),r);break}Gn(t,Qe,Ht);break;case 5:Gn(t,Qe,Ht);break;default:throw Error(E(329))}}}return Ze(t,he()),t.callbackNode===n?wv.bind(null,t):null}function Wc(t,e){var n=ts;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=Pa(t,e),t!==2&&(e=Qe,Qe=n,e!==null&&qc(e)),t}function qc(t){Qe===null?Qe=t:Qe.push.apply(Qe,t)}function RI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gn(t,e){for(e&=~dd,e&=~fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kt(e),r=1<<n;t[n]=-1,e&=~r}}function Vp(t){if(q&6)throw Error(E(327));Jr();var e=pa(t,0);if(!(e&1))return Ze(t,he()),null;var n=Pa(t,e);if(t.tag!==0&&n===2){var r=vc(t);r!==0&&(e=r,n=Wc(t,r))}if(n===1)throw n=As,sr(t,0),gn(t,e),Ze(t,he()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gn(t,Qe,Ht),Ze(t,he()),null}function pd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(ui=he()+500,ul&&jn())}}function mr(t){Sn!==null&&Sn.tag===0&&!(q&6)&&Jr();var e=q;q|=1;var n=ft.transition,r=Y;try{if(ft.transition=null,Y=1,t)return t()}finally{Y=r,ft.transition=n,q=e,!(q&6)&&jn()}}function md(){et=Hr.current,te(Hr)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sI(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wa();break;case 3:ai(),te(Xe),te(je),id();break;case 5:rd(r);break;case 4:ai();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Zh(r.type._context);break;case 22:case 23:md()}n=n.return}if(_e=t,pe=t=Dn(t.current,null),Re=et=e,ye=0,As=null,dd=fl=pr=0,Qe=ts=null,Jn!==null){for(e=0;e<Jn.length;e++)if(n=Jn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jn=null}return t}function Ev(t,e){do{var n=pe;try{if(Jh(),Xo.current=Na,Aa){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Aa=!1}if(fr=0,Te=me=se=null,Zi=!1,_s=0,hd.current=null,n===null||n.return===null){ye=1,As=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Ap(o);if(g!==null){g.flags&=-257,Np(g,o,a,s,e),g.mode&1&&Cp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Cp(s,u,e),gd();break e}l=Error(E(426))}}else if(ne&&a.mode&1){var T=Ap(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Np(T,o,a,s,e),Yh(li(l,a));break e}}s=l=li(l,a),ye!==4&&(ye=2),ts===null?ts=[s]:ts.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=rv(s,l,e);wp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Nn===null||!Nn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=iv(s,a,e);wp(s,w);break e}}s=s.return}while(s!==null)}Tv(n)}catch(_){e=_,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Sv(){var t=Ra.current;return Ra.current=Na,t===null?Na:t}function gd(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(pr&268435455)&&!(fl&268435455)||gn(_e,Re)}function Pa(t,e){var n=q;q|=2;var r=Sv();(_e!==t||Re!==e)&&(Ht=null,sr(t,e));do try{DI();break}catch(i){Ev(t,i)}while(1);if(Jh(),q=n,Ra.current=r,pe!==null)throw Error(E(261));return _e=null,Re=0,ye}function DI(){for(;pe!==null;)Iv(pe)}function xI(){for(;pe!==null&&!nS();)Iv(pe)}function Iv(t){var e=kv(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Tv(t):pe=e,hd.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_I(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,pe=null;return}}else if(n=TI(n,e,et),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ye===0&&(ye=5)}function Gn(t,e,n){var r=Y,i=ft.transition;try{ft.transition=null,Y=1,PI(t,e,n,r)}finally{ft.transition=i,Y=r}return null}function PI(t,e,n,r){do Jr();while(Sn!==null);if(q&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dS(t,s),t===_e&&(pe=_e=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,Cv(fa,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=Y;Y=1;var a=q;q|=4,hd.current=null,CI(t,n),yv(n,t),JS(_c),ma=!!Tc,_c=Tc=null,t.current=n,AI(n),rS(),q=a,Y=o,ft.transition=s}else t.current=n;if($o&&($o=!1,Sn=t,xa=i),s=t.pendingLanes,s===0&&(Nn=null),oS(n.stateNode),Ze(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Da)throw Da=!1,t=Hc,Hc=null,t;return xa&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===Kc?ns++:(ns=0,Kc=t):ns=0,jn(),null}function Jr(){if(Sn!==null){var t=ny(xa),e=ft.transition,n=Y;try{if(ft.transition=null,Y=16>t?16:t,Sn===null)var r=!1;else{if(t=Sn,Sn=null,xa=0,q&6)throw Error(E(331));var i=q;for(q|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:es(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,g=c.return;if(pv(c),c===u){k=null;break}if(d!==null){d.return=g,k=d;break}k=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:es(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(_){ae(a,a.return,_)}if(a===o){k=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,k=w;break e}k=a.return}}if(q=i,jn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(il,t)}catch{}r=!0}return r}finally{Y=n,ft.transition=e}}return!1}function jp(t,e,n){e=li(n,e),e=rv(t,e,1),t=An(t,e,1),e=We(),t!==null&&(Gs(t,1,e),Ze(t,e))}function ae(t,e,n){if(t.tag===3)jp(t,t,n);else for(;e!==null;){if(e.tag===3){jp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){t=li(n,t),t=iv(e,t,1),e=An(e,t,1),t=We(),e!==null&&(Gs(e,1,t),Ze(e,t));break}}e=e.return}}function OI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(Re&n)===n&&(ye===4||ye===3&&(Re&130023424)===Re&&500>he()-fd?sr(t,0):dd|=n),Ze(t,e)}function _v(t,e){e===0&&(t.mode&1?(e=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):e=1);var n=We();t=nn(t,e),t!==null&&(Gs(t,e,n),Ze(t,n))}function LI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_v(t,n)}function MI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),_v(t,n)}var kv;kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Ye=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ye=!1,II(t,e,n);Ye=!!(t.flags&131072)}else Ye=!1,ne&&e.flags&1048576&&Ny(e,Ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zo(t,e),t=e.pendingProps;var i=ii(e,je.current);Xr(e,n),i=od(null,e,r,t,i,n);var s=ad();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,Ea(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,td(e),i.updater=cl,e.stateNode=i,i._reactInternals=e,Oc(e,r,t,n),e=$c(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Gh(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bI(r),t=St(r,t),i){case 0:e=Mc(null,e,r,t,n);break e;case 1:e=xp(null,e,r,t,n);break e;case 11:e=Rp(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,St(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Mc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),xp(t,e,r,i,n);case 3:e:{if(lv(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Py(t,e),ka(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=li(Error(E(423)),e),e=Pp(t,e,r,n,i);break e}else if(r!==i){i=li(Error(E(424)),e),e=Pp(t,e,r,n,i);break e}else for(tt=Cn(e.stateNode.containerInfo.firstChild),nt=e,ne=!0,Tt=null,n=$y(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){e=rn(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return by(e),t===null&&Dc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kc(r,i)?o=null:s!==null&&kc(r,s)&&(e.flags|=32),av(t,e),He(t,e,o,n),e.child;case 6:return t===null&&Dc(e),null;case 13:return uv(t,e,n);case 4:return nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Rp(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Ta,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!Xe.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=yt(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),Dp(t,e,r,i,n);case 15:return sv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Zo(t,e),e.tag=1,Je(r)?(t=!0,Ea(e)):t=!1,Xr(e,n),Ly(e,r,i),Oc(e,r,i,n),$c(null,e,r,!0,t,n);case 19:return cv(t,e,n);case 22:return ov(t,e,n)}throw Error(E(156,e.tag))};function Cv(t,e){return Jg(t,e)}function $I(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new $I(t,e,n,r)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bI(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===bh)return 14}return 2}function Dn(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return or(n.children,i,s,e);case Mh:o=8,i|=8;break;case rc:return t=dt(12,n,e,i|2),t.elementType=rc,t.lanes=s,t;case ic:return t=dt(13,n,e,i),t.elementType=ic,t.lanes=s,t;case sc:return t=dt(19,n,e,i),t.elementType=sc,t.lanes=s,t;case Mg:return pl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Og:o=10;break e;case Lg:o=9;break e;case $h:o=11;break e;case bh:o=14;break e;case fn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function or(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=dt(22,t,r,e),t.elementType=Mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Au(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,i,s,o,a,l){return t=new UI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(s),t}function FI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Av(t){if(!t)return Mn;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Je(n))return Cy(t,n,e)}return e}function Nv(t,e,n,r,i,s,o,a,l){return t=vd(n,r,!0,t,i,s,o,a,l),t.context=Av(null),n=t.current,r=We(),i=Rn(n),s=Jt(r,i),s.callback=e??null,An(n,s,i),t.current.lanes=i,Gs(t,i,r),Ze(t,r),t}function ml(t,e,n,r){var i=e.current,s=We(),o=Rn(i);return n=Av(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=An(i,e,o),t!==null&&(Ct(t,i,o,s),Yo(t,i,o)),o}function Oa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function VI(){return null}var Rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ed(t){this._internalRoot=t}gl.prototype.render=Ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ml(t,e,null,null)};gl.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){ml(null,t,null,null)}),e[tn]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mn.length&&e!==0&&e<mn[n].priority;n++);mn.splice(n,0,t),n===0&&ay(t)}};function Sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function jI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oa(o);s.call(u)}}var o=Nv(e,r,t,0,null,!1,!1,"",zp);return t._reactRootContainer=o,t[tn]=o.current,ws(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oa(l);a.call(u)}}var l=vd(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[tn]=l.current,ws(t.nodeType===8?t.parentNode:t),mr(function(){ml(e,l,n,r)}),l}function vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Oa(o);a.call(l)}}ml(e,o,t,i)}else o=jI(n,e,t,i,r);return Oa(o)}ry=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(Vh(e,n|1),Ze(e,he()),!(q&6)&&(ui=he()+500,jn()))}break;case 13:mr(function(){var r=nn(t,1);if(r!==null){var i=We();Ct(r,t,1,i)}}),wd(t,1)}};jh=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=We();Ct(e,t,134217728,n)}wd(t,134217728)}};iy=function(t){if(t.tag===13){var e=Rn(t),n=nn(t,e);if(n!==null){var r=We();Ct(n,t,e,r)}wd(t,e)}};sy=function(){return Y};oy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};mc=function(t,e,n){switch(e){case"input":if(lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ll(r);if(!i)throw Error(E(90));bg(r),lc(r,i)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&qr(t,!!n.multiple,e,!1)}};Wg=pd;qg=mr;var BI={usingClientEntryPoint:!1,Events:[Ys,Ur,ll,Hg,Kg,pd]},Fi={findFiberByHostInstance:Xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zI={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yg(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||VI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{il=bo.inject(zI),Mt=bo}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BI;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(e))throw Error(E(200));return FI(t,e,null,n)};at.createRoot=function(t,e){if(!Sd(t))throw Error(E(299));var n=!1,r="",i=Rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,ws(t.nodeType===8?t.parentNode:t),new Ed(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Yg(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return mr(t)};at.hydrate=function(t,e,n){if(!yl(e))throw Error(E(200));return vl(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!Sd(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gl(e)};at.render=function(t,e,n){if(!yl(e))throw Error(E(200));return vl(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!yl(t))throw Error(E(40));return t._reactRootContainer?(mr(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};at.unstable_batchedUpdates=pd;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return vl(t,e,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=at})(VE);var Hp=ec;Zu.createRoot=Hp.createRoot,Zu.hydrateRoot=Hp.hydrateRoot;const HI="modulepreload",KI=function(t){return"/online-shop/"+t},Kp={},Ii=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=KI(s),s in Kp)return;Kp[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":HI,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ns.apply(this,arguments)}var In;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(In||(In={}));const Wp="popstate";function WI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=_r(i.location.hash.substr(1));return Gc("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Dv(s))}function r(i,s){qI(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return QI(e,n,r,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GI(){return Math.random().toString(36).substr(2,8)}function qp(t,e){return{usr:t.state,key:t.key,idx:e}}function Gc(t,e,n,r){return n===void 0&&(n=null),Ns({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_r(e):e,{state:n,key:e&&e.key||r||GI()})}function Dv(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _r(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=In.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ns({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=In.Pop;let T=c(),p=T==null?null:T-u;u=T,l&&l({action:a,location:v.location,delta:p})}function d(T,p){a=In.Push;let f=Gc(v.location,T,p);n&&n(f,T),u=c()+1;let m=qp(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(T,p){a=In.Replace;let f=Gc(v.location,T,p);n&&n(f,T),u=c();let m=qp(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(T){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:Dv(T);return ke(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wp,h),l=T,()=>{i.removeEventListener(Wp,h),l=null}},createHref(T){return e(i,T)},createURL:y,encodeLocation(T){let p=y(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(T){return o.go(T)}};return v}var Gp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gp||(Gp={}));function YI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_r(e):e,i=Ov(r.pathname||"/",n);if(i==null)return null;let s=xv(t);XI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=oT(s[a],uT(i));return o}function xv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Pv(s.path))i(s,o,l)}),e}function Pv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Pv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function XI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JI=/^:\w+$/,ZI=3,eT=2,tT=1,nT=10,rT=-2,Qp=t=>t==="*";function iT(t,e){let n=t.split("/"),r=n.length;return n.some(Qp)&&(r+=rT),e&&(r+=eT),n.filter(i=>!Qp(i)).reduce((i,s)=>i+(JI.test(s)?ZI:s===""?tT:nT),r)}function sT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ar([i,c.pathname]),pathnameBase:mT(ar([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ar([i,c.pathnameBase]))}return s}function aT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=cT(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Id(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uT(t){try{return decodeURI(t)}catch(e){return Id(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cT(t,e){try{return decodeURIComponent(t)}catch(n){return Id(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ov(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Id(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_r(t):t;return{pathname:n?n.startsWith("/")?n:dT(n,e):e,search:gT(r),hash:yT(i)}}function dT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ru(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_r(t):(i=Ns({},t),ke(!i.pathname||!i.pathname.includes("?"),Ru("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Ru("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Ru("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=hT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),mT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const wT=["post","put","patch","delete"];[...wT];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qc.apply(this,arguments)}function ET(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const ST=typeof Object.is=="function"?Object.is:ET,{useState:IT,useEffect:TT,useLayoutEffect:_T,useDebugValue:kT}=Ju;function CT(t,e,n){const r=e(),[{inst:i},s]=IT({inst:{value:r,getSnapshot:e}});return _T(()=>{i.value=r,i.getSnapshot=e,Du(i)&&s({inst:i})},[t,r,e]),TT(()=>(Du(i)&&s({inst:i}),t(()=>{Du(i)&&s({inst:i})})),[t]),kT(r),r}function Du(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!ST(n,r)}catch{return!0}}function AT(t,e,n){return e()}const NT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RT=!NT,DT=RT?AT:CT;"useSyncExternalStore"in Ju&&(t=>t.useSyncExternalStore)(Ju);const Lv=C.createContext(null),Mv=C.createContext(null),Td=C.createContext(null),wl=C.createContext(null),Ti=C.createContext({outlet:null,matches:[]}),$v=C.createContext(null);function El(){return C.useContext(wl)!=null}function _d(){return El()||ke(!1),C.useContext(wl).location}function bv(){El()||ke(!1);let{basename:t,navigator:e}=C.useContext(Td),{matches:n}=C.useContext(Ti),{pathname:r}=_d(),i=JSON.stringify(fT(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=pT(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ar([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function uO(){let{matches:t}=C.useContext(Ti),e=t[t.length-1];return e?e.params:{}}function xT(t,e){El()||ke(!1);let{navigator:n}=C.useContext(Td),r=C.useContext(Mv),{matches:i}=C.useContext(Ti),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=_d(),u;if(e){var c;let v=typeof e=="string"?_r(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ke(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=YI(t,{pathname:d}),y=MT(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ar([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ar([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?C.createElement(wl.Provider,{value:{location:Qc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:In.Pop}},y):y}function PT(){let t=FT(),e=vT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}class OT extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Ti.Provider,{value:this.props.routeContext},C.createElement($v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LT(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Lv);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ti.Provider,{value:e},r)}function MT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ke(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||C.createElement(PT,null):null,c=e.concat(r.slice(0,a+1)),h=()=>C.createElement(LT,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?C.createElement(OT,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var Yp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Yp||(Yp={}));var La;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(La||(La={}));function $T(t){let e=C.useContext(Mv);return e||ke(!1),e}function bT(t){let e=C.useContext(Ti);return e||ke(!1),e}function UT(t){let e=bT(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function FT(){var t;let e=C.useContext($v),n=$T(La.UseRouteError),r=UT(La.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Qn(t){ke(!1)}function VT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:s,static:o=!1}=t;El()&&ke(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=_r(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=C.useMemo(()=>{let v=Ov(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return y==null?null:C.createElement(Td.Provider,{value:l},C.createElement(wl.Provider,{children:n,value:{location:y,navigationType:i}}))}function jT(t){let{children:e,location:n}=t,r=C.useContext(Lv),i=r&&!e?r.router.routes:Yc(e);return xT(i,n)}var Xp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Xp||(Xp={}));new Promise(()=>{});function Yc(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,Yc(r.props.children,e));return}r.type!==Qn&&ke(!1),!r.props.index||!r.props.children||ke(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Yc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function BT(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=WI({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(a),[s]),C.createElement(VT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Jp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Jp||(Jp={}));var Zp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zp||(Zp={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new HT;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KT=function(t){const e=Uv(t);return Fv.encodeByteArray(e,!0)},Ma=function(t){return KT(t).replace(/\./g,"")},Vv=function(t){try{return Fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=()=>WT().__FIREBASE_DEFAULTS__,GT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vv(t[1]);return e&&JSON.parse(e)},kd=()=>{try{return qT()||GT()||QT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jv=t=>{var e,n;return(n=(e=kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YT=t=>{const e=jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},XT=()=>{var t;return(t=kd())===null||t===void 0?void 0:t.config},Bv=t=>{var e;return(e=kd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function zv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n_(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hv(){try{return typeof indexedDB=="object"}catch{return!1}}function Kv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function r_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=i_,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?s_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}}function s_(t,e){return t.replace(o_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const o_=/\{\$([^}]+)}/g;function a_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(em(s)&&em(o)){if(!Rs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function em(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function l_(t,e){const n=new u_(t,e);return n.subscribe.bind(n)}class u_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");c_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xu),i.error===void 0&&(i.error=xu),i.complete===void 0&&(i.complete=xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=1e3,d_=2,f_=4*60*60*1e3,p_=.5;function tm(t,e=h_,n=d_){const r=e*Math.pow(n,t),i=Math.round(p_*r*(Math.random()-.5)*2);return Math.min(f_,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y_(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:g_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function g_(t){return t===Yn?void 0:t}function y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new m_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const w_={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},E_=G.INFO,S_={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},I_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=S_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=E_,this._logHandler=I_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const T_=(t,e)=>e.some(n=>t instanceof n);let nm,rm;function __(){return nm||(nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k_(){return rm||(rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,Xc=new WeakMap,qv=new WeakMap,Pu=new WeakMap,Cd=new WeakMap;function C_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wv.set(n,t)}).catch(()=>{}),Cd.set(e,t),e}function A_(t){if(Xc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N_(t){Jc=t(Jc)}function R_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ou(this),e,...n);return qv.set(r,e.sort?e.sort():[e]),xn(r)}:k_().includes(t)?function(...e){return t.apply(Ou(this),e),xn(Wv.get(this))}:function(...e){return xn(t.apply(Ou(this),e))}}function D_(t){return typeof t=="function"?R_(t):(t instanceof IDBTransaction&&A_(t),T_(t,__())?new Proxy(t,Jc):t)}function xn(t){if(t instanceof IDBRequest)return C_(t);if(Pu.has(t))return Pu.get(t);const e=D_(t);return e!==t&&(Pu.set(t,e),Cd.set(e,t)),e}const Ou=t=>Cd.get(t);function Gv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xn(o.result),l.oldVersion,l.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const x_=["get","getKey","getAll","getAllKeys","count"],P_=["put","add","delete","clear"],Lu=new Map;function im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lu.get(e))return Lu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=P_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Lu.set(e,s),s}N_(t=>({...t,get:(e,n,r)=>im(e,n)||t.get(e,n,r),has:(e,n)=>!!im(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",sm="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Sl("@firebase/app"),M_="@firebase/app-compat",$_="@firebase/analytics-compat",b_="@firebase/analytics",U_="@firebase/app-check-compat",F_="@firebase/app-check",V_="@firebase/auth",j_="@firebase/auth-compat",B_="@firebase/database",z_="@firebase/database-compat",H_="@firebase/functions",K_="@firebase/functions-compat",W_="@firebase/installations",q_="@firebase/installations-compat",G_="@firebase/messaging",Q_="@firebase/messaging-compat",Y_="@firebase/performance",X_="@firebase/performance-compat",J_="@firebase/remote-config",Z_="@firebase/remote-config-compat",ek="@firebase/storage",tk="@firebase/storage-compat",nk="@firebase/firestore",rk="@firebase/firestore-compat",ik="firebase",sk="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",ok={[Zc]:"fire-core",[M_]:"fire-core-compat",[b_]:"fire-analytics",[$_]:"fire-analytics-compat",[F_]:"fire-app-check",[U_]:"fire-app-check-compat",[V_]:"fire-auth",[j_]:"fire-auth-compat",[B_]:"fire-rtdb",[z_]:"fire-rtdb-compat",[H_]:"fire-fn",[K_]:"fire-fn-compat",[W_]:"fire-iid",[q_]:"fire-iid-compat",[G_]:"fire-fcm",[Q_]:"fire-fcm-compat",[Y_]:"fire-perf",[X_]:"fire-perf-compat",[J_]:"fire-rc",[Z_]:"fire-rc-compat",[ek]:"fire-gcs",[tk]:"fire-gcs-compat",[nk]:"fire-fst",[rk]:"fire-fst-compat","fire-js":"fire-js",[ik]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map,th=new Map;function ak(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(th.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of $a.values())ak(n,t);return!0}function Cr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new kr("app","Firebase",lk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=sk;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=XT()),!n)throw Pn.create("no-options");const s=$a.get(i);if(s){if(Rs(n,s.options)&&Rs(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new v_(i);for(const l of th.values())o.addComponent(l);const a=new uk(n,r,o);return $a.set(i,a),a}function Ad(t=eh){const e=$a.get(t);if(!e&&t===eh)return Qv();if(!e)throw Pn.create("no-app",{appName:t});return e}function pt(t,e,n){var r;let i=(r=ok[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}Vt(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="firebase-heartbeat-database",hk=1,Ds="firebase-heartbeat-store";let Mu=null;function Yv(){return Mu||(Mu=Gv(ck,hk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ds)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Mu}async function dk(t){try{return(await Yv()).transaction(Ds).objectStore(Ds).get(Xv(t))}catch(e){if(e instanceof Rt)gr.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function om(t,e){try{const r=(await Yv()).transaction(Ds,"readwrite");return await r.objectStore(Ds).put(e,Xv(t)),r.done}catch(n){if(n instanceof Rt)gr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function Xv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=1024,pk=30*24*60*60*1e3;class mk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=am();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=pk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=am(),{heartbeatsToSend:n,unsentEntries:r}=gk(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function am(){return new Date().toISOString().substring(0,10)}function gk(t,e=fk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hv()?Kv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lm(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){Vt(new Nt("platform-logger",e=>new O_(e),"PRIVATE")),Vt(new Nt("heartbeat",e=>new mk(e),"PRIVATE")),pt(Zc,sm,t),pt(Zc,sm,"esm2017"),pt("fire-js","")}vk("");var wk="firebase",Ek="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt(wk,Ek,"app");const Jv="@firebase/installations",Nd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=1e4,e0=`w:${Nd}`,t0="FIS_v2",Sk="https://firebaseinstallations.googleapis.com/v1",Ik=60*60*1e3,Tk="installations",_k="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},yr=new kr(Tk,_k,kk);function n0(t){return t instanceof Rt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0({projectId:t}){return`${Sk}/projects/${t}/installations`}function i0(t){return{token:t.token,requestStatus:2,expiresIn:Ak(t.expiresIn),creationTime:Date.now()}}async function s0(t,e){const r=(await e.json()).error;return yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function o0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ck(t,{refreshToken:e}){const n=o0(t);return n.append("Authorization",Nk(e)),n}async function a0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ak(t){return Number(t.replace("s","000"))}function Nk(t){return`${t0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=r0(t),i=o0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:t0,appId:t.appId,sdkVersion:e0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await a0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:i0(u.authToken)}}else throw await s0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=/^[cdef][\w-]{21}$/,nh="";function Pk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ok(t);return xk.test(n)?n:nh}catch{return nh}}function Ok(t){return Dk(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;function c0(t,e){const n=Il(t);h0(n,e),Lk(n,e)}function h0(t,e){const n=u0.get(t);if(n)for(const r of n)r(e)}function Lk(t,e){const n=Mk();n&&n.postMessage({key:t,fid:e}),$k()}let er=null;function Mk(){return!er&&"BroadcastChannel"in self&&(er=new BroadcastChannel("[Firebase] FID Change"),er.onmessage=t=>{h0(t.data.key,t.data.fid)}),er}function $k(){u0.size===0&&er&&(er.close(),er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="firebase-installations-database",Uk=1,vr="firebase-installations-store";let $u=null;function Rd(){return $u||($u=Gv(bk,Uk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vr)}}})),$u}async function ba(t,e){const n=Il(t),i=(await Rd()).transaction(vr,"readwrite"),s=i.objectStore(vr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&c0(t,e.fid),e}async function d0(t){const e=Il(t),r=(await Rd()).transaction(vr,"readwrite");await r.objectStore(vr).delete(e),await r.done}async function Tl(t,e){const n=Il(t),i=(await Rd()).transaction(vr,"readwrite"),s=i.objectStore(vr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&c0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t){let e;const n=await Tl(t.appConfig,r=>{const i=Fk(r),s=Vk(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===nh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Fk(t){const e=t||{fid:Pk(),registrationStatus:0};return f0(e)}function Vk(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jk(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Bk(t)}:{installationEntry:e}}async function jk(t,e){try{const n=await Rk(t,e);return ba(t.appConfig,n)}catch(n){throw n0(n)&&n.customData.serverCode===409?await d0(t.appConfig):await ba(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Bk(t){let e=await um(t.appConfig);for(;e.registrationStatus===1;)await l0(100),e=await um(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Dd(t);return r||n}return e}function um(t){return Tl(t,e=>{if(!e)throw yr.create("installation-not-found");return f0(e)})}function f0(t){return zk(t)?{fid:t.fid,registrationStatus:0}:t}function zk(t){return t.registrationStatus===1&&t.registrationTime+Zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk({appConfig:t,heartbeatServiceProvider:e},n){const r=Kk(t,n),i=Ck(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:e0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await a0(()=>fetch(r,a));if(l.ok){const u=await l.json();return i0(u)}else throw await s0("Generate Auth Token",l)}function Kk(t,{fid:e}){return`${r0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(t,e=!1){let n;const r=await Tl(t.appConfig,s=>{if(!p0(s))throw yr.create("not-registered");const o=s.authToken;if(!e&&Gk(o))return s;if(o.requestStatus===1)return n=Wk(t,e),s;{if(!navigator.onLine)throw yr.create("app-offline");const a=Yk(s);return n=qk(t,a),a}});return n?await n:r.authToken}async function Wk(t,e){let n=await cm(t.appConfig);for(;n.authToken.requestStatus===1;)await l0(100),n=await cm(t.appConfig);const r=n.authToken;return r.requestStatus===0?xd(t,e):r}function cm(t){return Tl(t,e=>{if(!p0(e))throw yr.create("not-registered");const n=e.authToken;return Xk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qk(t,e){try{const n=await Hk(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ba(t.appConfig,r),n}catch(n){if(n0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await d0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ba(t.appConfig,r)}throw n}}function p0(t){return t!==void 0&&t.registrationStatus===2}function Gk(t){return t.requestStatus===2&&!Qk(t)}function Qk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ik}function Yk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Xk(t){return t.requestStatus===1&&t.requestTime+Zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t){const e=t,{installationEntry:n,registrationPromise:r}=await Dd(e);return r?r.catch(console.error):xd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e=!1){const n=t;return await eC(n),(await xd(n,e)).token}async function eC(t){const{registrationPromise:e}=await Dd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){if(!t||!t.options)throw bu("App Configuration");if(!t.name)throw bu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bu(t){return yr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="installations",nC="installations-internal",rC=t=>{const e=t.getProvider("app").getImmediate(),n=tC(e),r=Cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},iC=t=>{const e=t.getProvider("app").getImmediate(),n=Cr(e,m0).getImmediate();return{getId:()=>Jk(n),getToken:i=>Zk(n,i)}};function sC(){Vt(new Nt(m0,rC,"PUBLIC")),Vt(new Nt(nC,iC,"PRIVATE"))}sC();pt(Jv,Nd);pt(Jv,Nd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="analytics",oC="firebase_id",aC="origin",lC=60*1e3,uC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",g0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Sl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cC(t,e){const n=document.createElement("script");n.src=`${g0}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function hC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dC(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await y0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){rt.error(a)}t("config",i,s)}async function fC(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await y0(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){rt.error(s)}}function pC(t,e,n,r){async function i(s,o,a){try{s==="event"?await fC(t,e,n,o,a):s==="config"?await dC(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){rt.error(l)}}return i}function mC(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=pC(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function gC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(g0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},mt=new kr("analytics","Analytics",yC);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=30,wC=1e3;class EC{constructor(e={},n=wC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const v0=new EC;function SC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function IC(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:SC(r)},s=uC.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function TC(t,e=v0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw mt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new CC;return setTimeout(async()=>{a.abort()},n!==void 0?n:lC),w0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function w0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=v0){var s;const{appId:o,measurementId:a}=t;try{await _C(r,e)}catch(l){if(a)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await IC(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!kC(u)){if(i.deleteThrottleMetadata(o),a)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?tm(n,i.intervalMillis,vC):tm(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),rt.debug(`Calling attemptFetch again in ${c} millis`),w0(t,h,r,i)}}function _C(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function kC(t){if(!(t instanceof Rt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class CC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function AC(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(){if(Hv())try{await Kv()}catch(t){return rt.warn(mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return rt.warn(mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function RC(t,e,n,r,i,s,o){var a;const l=TC(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>rt.error(g)),e.push(l);const u=NC().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);gC(s)||cC(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[aC]="firebase",d.update=!0,h!=null&&(d[oC]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.app=e}_delete(){return delete rs[this.app.options.appId],Promise.resolve()}}let rs={},hm=[];const dm={};let Uu="dataLayer",xC="gtag",fm,E0,pm=!1;function PC(){const t=[];if(zv()&&t.push("This is a browser extension environment."),r_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=mt.create("invalid-analytics-context",{errorInfo:e});rt.warn(n.message)}}function OC(t,e,n){PC();const r=t.options.appId;if(!r)throw mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mt.create("no-api-key");if(rs[r]!=null)throw mt.create("already-exists",{id:r});if(!pm){hC(Uu);const{wrappedGtag:s,gtagCore:o}=mC(rs,hm,dm,Uu,xC);E0=s,fm=o,pm=!0}return rs[r]=RC(t,hm,dm,e,fm,Uu,n),new DC(t)}function LC(t=Ad()){t=st(t);const e=Cr(t,Ua);return e.isInitialized()?e.getImmediate():MC(t)}function MC(t,e={}){const n=Cr(t,Ua);if(n.isInitialized()){const i=n.getImmediate();if(Rs(e,n.getOptions()))return i;throw mt.create("already-initialized")}return n.initialize({options:e})}function $C(t,e,n,r){t=st(t),AC(E0,rs[t.app.options.appId],e,n,r).catch(i=>rt.error(i))}const mm="@firebase/analytics",gm="0.9.4";function bC(){Vt(new Nt(Ua,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return OC(r,i,n)},"PUBLIC")),Vt(new Nt("analytics-internal",t,"PRIVATE")),pt(mm,gm),pt(mm,gm,"esm2017");function t(e){try{const n=e.getProvider(Ua).getImmediate();return{logEvent:(r,i,s)=>$C(n,r,i,s)}}catch(n){throw mt.create("interop-component-reg-failed",{reason:n})}}}bC();var UC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Pd=Pd||{},$=UC||self;function Fa(){}function _l(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FC(t){return Object.prototype.hasOwnProperty.call(t,Fu)&&t[Fu]||(t[Fu]=++VC)}var Fu="closure_uid_"+(1e9*Math.random()>>>0),VC=0;function jC(t,e,n){return t.call.apply(t.bind,arguments)}function BC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=jC:Fe=BC,Fe.apply(null,arguments)}function Uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var zC=0;Bn.prototype.s=!1;Bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zC!=0)&&FC(this)};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Od(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ym(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_l(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var HC=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Fa,e),$.removeEventListener("test",Fa,e)}catch{}return t}();function Va(t){return/^[\s\xa0]*$/.test(t)}var vm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vu(t,e){return t<e?-1:t>e?1:0}function kl(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return kl().indexOf(t)!=-1}function Ld(t){return Ld[" "](t),t}Ld[" "]=Fa;function KC(t){var e=GC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WC=Lt("Opera"),ci=Lt("Trident")||Lt("MSIE"),I0=Lt("Edge"),rh=I0||ci,T0=Lt("Gecko")&&!(kl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),qC=kl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function _0(){var t=$.document;return t?t.documentMode:void 0}var ja;e:{var ju="",Bu=function(){var t=kl();if(T0)return/rv:([^\);]+)(\)|;)/.exec(t);if(I0)return/Edge\/([\d\.]+)/.exec(t);if(ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qC)return/WebKit\/(\S+)/.exec(t);if(WC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bu&&(ju=Bu?Bu[1]:""),ci){var zu=_0();if(zu!=null&&zu>parseFloat(ju)){ja=String(zu);break e}}ja=ju}var GC={};function QC(){return KC(function(){let t=0;const e=vm(String(ja)).split("."),n=vm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vu(i[2].length==0,s[2].length==0)||Vu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ih;if($.document&&ci){var wm=_0();ih=wm||parseInt(ja,10)||void 0}else ih=void 0;var YC=ih;function xs(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(T0){e:{try{Ld(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xs.X.h.call(this)}}Pe(xs,Ve);var XC={2:"touch",3:"pen",4:"mouse"};xs.prototype.h=function(){xs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var to="closure_listenable_"+(1e6*Math.random()|0),JC=0;function ZC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++JC,this.ba=this.ea=!1}function Cl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Md(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function k0(t){const e={};for(const n in t)e[n]=t[n];return e}const Em="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Em.length;s++)n=Em[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Al(t){this.src=t,this.g={},this.h=0}Al.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=oh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ZC(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=S0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Cl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function oh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var $d="closure_lm_"+(1e6*Math.random()|0),Hu={};function A0(t,e,n,r,i){if(r&&r.once)return R0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)A0(t,e[s],n,r,i);return null}return n=Fd(n),t&&t[to]?t.N(e,n,eo(r)?!!r.capture:!!r,i):N0(t,e,n,!1,r,i)}function N0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=eo(i)?!!i.capture:!!i,a=Ud(t);if(a||(t[$d]=a=new Al(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=eA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)HC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(x0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eA(){function t(n){return e.call(t.src,t.listener,n)}const e=tA;return t}function R0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)R0(t,e[s],n,r,i);return null}return n=Fd(n),t&&t[to]?t.O(e,n,eo(r)?!!r.capture:!!r,i):N0(t,e,n,!0,r,i)}function D0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)D0(t,e[s],n,r,i);else r=eo(r)?!!r.capture:!!r,n=Fd(n),t&&t[to]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=oh(s,n,r,i),-1<n&&(Cl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=oh(e,n,r,i)),(n=-1<t?e[t]:null)&&bd(n))}function bd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[to])sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(x0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ud(e))?(sh(n,t),n.h==0&&(n.src=null,e[$d]=null)):Cl(t)}}}function x0(t){return t in Hu?Hu[t]:Hu[t]="on"+t}function tA(t,e){if(t.ba)t=!0;else{e=new xs(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bd(t),t=n.call(r,e)}return t}function Ud(t){return t=t[$d],t instanceof Al?t:null}var Ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fd(t){return typeof t=="function"?t:(t[Ku]||(t[Ku]=function(e){return t.handleEvent(e)}),t[Ku])}function Ce(){Bn.call(this),this.i=new Al(this),this.P=this,this.I=null}Pe(Ce,Bn);Ce.prototype[to]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){D0(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var i=e;e=new Ve(r,t),C0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Fo(o,r,!0,e)&&i}if(o=e.g=t,i=Fo(o,r,!0,e)&&i,i=Fo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Fo(o,r,!1,e)&&i}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Cl(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&sh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vd=$.JSON.stringify;function nA(){var t=L0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rA{constructor(){this.h=this.g=null}add(e,n){const r=P0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var P0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new iA,t=>t.reset());class iA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sA(t){$.setTimeout(()=>{throw t},0)}function O0(t,e){ah||oA(),lh||(ah(),lh=!0),L0.add(t,e)}var ah;function oA(){var t=$.Promise.resolve(void 0);ah=function(){t.then(aA)}}var lh=!1,L0=new rA;function aA(){for(var t;t=nA();){try{t.h.call(t.g)}catch(n){sA(n)}var e=P0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lh=!1}function Nl(t,e){Ce.call(this),this.h=t||1,this.g=e||$,this.j=Fe(this.lb,this),this.l=Date.now()}Pe(Nl,Ce);D=Nl.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(jd(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Nl.X.M.call(this),jd(this),delete this.g};function Bd(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function M0(t){t.g=Bd(()=>{t.g=null,t.i&&(t.i=!1,M0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lA extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:M0(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ps(t){Bn.call(this),this.h=t,this.g={}}Pe(Ps,Bn);var Sm=[];function $0(t,e,n,r){Array.isArray(n)||(n&&(Sm[0]=n.toString()),n=Sm);for(var i=0;i<n.length;i++){var s=A0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function b0(t){Md(t.g,function(e,n){this.g.hasOwnProperty(n)&&bd(e)},t),t.g={}}Ps.prototype.M=function(){Ps.X.M.call(this),b0(this)};Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rl(){this.g=!0}Rl.prototype.Aa=function(){this.g=!1};function uA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dA(t,n)+(r?" "+r:"")})}function hA(t,e){t.info(function(){return"TIMEOUT: "+e})}Rl.prototype.info=function(){};function dA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vd(n)}catch{return e}}var Ar={},Im=null;function Dl(){return Im=Im||new Ce}Ar.Pa="serverreachability";function U0(t){Ve.call(this,Ar.Pa,t)}Pe(U0,Ve);function Os(t){const e=Dl();De(e,new U0(e))}Ar.STAT_EVENT="statevent";function F0(t,e){Ve.call(this,Ar.STAT_EVENT,t),this.stat=e}Pe(F0,Ve);function Ke(t){const e=Dl();De(e,new F0(e,t))}Ar.Qa="timingevent";function V0(t,e){Ve.call(this,Ar.Qa,t),this.size=e}Pe(V0,Ve);function no(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var xl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},j0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zd(){}zd.prototype.h=null;function Tm(t){return t.h||(t.h=t.i())}function B0(){}var ro={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Hd(){Ve.call(this,"d")}Pe(Hd,Ve);function Kd(){Ve.call(this,"c")}Pe(Kd,Ve);var uh;function Pl(){}Pe(Pl,zd);Pl.prototype.g=function(){return new XMLHttpRequest};Pl.prototype.i=function(){return{}};uh=new Pl;function io(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ps(this),this.O=fA,t=rh?125:void 0,this.T=new Nl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new z0}function z0(){this.i=null,this.g="",this.h=!1}var fA=45e3,ch={},Ba={};D=io.prototype;D.setTimeout=function(t){this.O=t};function hh(t,e,n){t.K=1,t.v=Ll(sn(e)),t.s=n,t.P=!0,H0(t,null)}function H0(t,e){t.F=Date.now(),so(t),t.A=sn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),J0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new z0,t.g=ww(t.l,n?e:null,!t.s),0<t.N&&(t.L=new lA(Fe(t.La,t,t.g),t.N)),$0(t.S,t.g,"readystatechange",t.ib),e=t.H?k0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Os(),uA(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=Qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||rh||this.g&&(this.h.h||this.g.fa()||Am(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Os(3):Os(2)),Ol(this);var n=this.g.aa();this.Y=n;t:if(K0(this)){var r=Am(this.g);t="";var i=r.length,s=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),is(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cA(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Va(a)){var u=a;break t}}u=null}if(n=u)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,dh(this,n);else{this.i=!1,this.o=3,Ke(12),tr(this),is(this);break e}}this.P?(W0(this,c,o),rh&&this.i&&c==3&&($0(this.S,this.T,"tick",this.hb),this.T.start())):(Kr(this.j,this.m,o,null),dh(this,o)),c==4&&tr(this),this.i&&!this.I&&(c==4?mw(this.l,this):(this.i=!1,so(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),tr(this),is(this)}}}catch{}finally{}};function K0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function W0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=pA(t,n),i==Ba){e==4&&(t.o=4,Ke(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ch){t.o=4,Ke(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,i,null),dh(t,i);K0(t)&&i!=Ba&&i!=ch&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jd(e),e.K=!0,Ke(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),is(t))}D.hb=function(){if(this.g){var t=Qt(this.g),e=this.g.fa();this.C<e.length&&(Ol(this),W0(this,t,e),this.i&&t!=4&&so(this))}};function pA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ba:(n=Number(e.substring(n,r)),isNaN(n)?ch:(r+=1,r+n>e.length?Ba:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,tr(this)};function so(t){t.V=Date.now()+t.O,q0(t,t.O)}function q0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=no(Fe(t.gb,t),e)}function Ol(t){t.B&&($.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(hA(this.j,this.A),this.K!=2&&(Os(),Ke(17)),tr(this),this.o=2,is(this)):q0(this,this.V-t)};function is(t){t.l.G==0||t.I||mw(t.l,t)}function tr(t){Ol(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jd(t.T),b0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function dh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fh(n.h,t))){if(!t.J&&fh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ka(n),bl(n);else break e;Xd(n),Ke(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=no(Fe(n.cb,n),6e3));if(1>=tw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else nr(n,11)}else if((t.J||n.g==t)&&Ka(n),!Va(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=vw(r,r.H?r.ka:null,r.V),o.J){nw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Ol(a),so(a)),r.g=o}else fw(r);0<n.i.length&&Ul(n)}else u[0]!="stop"&&u[0]!="close"||nr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nr(n,7):Yd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Os(4)}catch{}}function mA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function gA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_l(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function G0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_l(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gA(t),r=mA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Q0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof lr){this.h=e!==void 0?e:t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ha(this,t.m),this.l=t.l,e=t.i;var n=new Ls;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_m(this,n),this.o=t.o}else t&&(n=String(t).match(Q0))?(this.h=!!e,za(this,n[1]||"",!0),this.s=Ki(n[2]||""),this.g=Ki(n[3]||"",!0),Ha(this,n[4]),this.l=Ki(n[5]||"",!0),_m(this,n[6]||"",!0),this.o=Ki(n[7]||"")):(this.h=!!e,this.i=new Ls(null,this.h))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wi(e,km,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wi(e,km,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wi(n,n.charAt(0)=="/"?EA:wA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wi(n,IA)),t.join("")};function sn(t){return new lr(t)}function za(t,e,n){t.j=n?Ki(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _m(t,e,n){e instanceof Ls?(t.i=e,TA(t.i,t.h)):(n||(e=Wi(e,SA)),t.i=new Ls(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Ll(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ki(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var km=/[#\/\?@]/g,wA=/[#\?:]/g,EA=/[#\?]/g,SA=/[#\?@]/g,IA=/#/g;function Ls(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&yA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ls.prototype;D.add=function(t,e){zn(this),this.i=null,t=_i(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Y0(t,e){zn(t),e=_i(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function X0(t,e){return zn(t),e=_i(t,e),t.g.has(e)}D.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){zn(this);let e=[];if(typeof t=="string")X0(this,t)&&(e=e.concat(this.g.get(_i(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return zn(this),this.i=null,t=_i(this,t),X0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function J0(t,e,n){Y0(t,e),0<n.length&&(t.i=null,t.g.set(_i(t,e),Od(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function _i(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TA(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Y0(this,r),J0(this,i,n))},t)),t.j=e}var _A=class{constructor(e,n){this.h=e,this.g=n}};function Z0(t){this.l=t||kA,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kA=10;function ew(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tw(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wd(t,e){t.g?t.g.add(e):t.h=e}function nw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Z0.prototype.cancel=function(){if(this.i=rw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Od(t.i)}function qd(){}qd.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};qd.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function CA(){this.g=new qd}function AA(t,e,n){const r=n||"";try{G0(t,function(i,s){let o=i;eo(i)&&(o=Vd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function NA(t,e){const n=new Rl;if($.Image){const r=new Image;r.onload=Uo(Vo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Uo(Vo,n,r,"TestLoadImage: error",!1,e),r.onabort=Uo(Vo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Uo(Vo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function oo(t){this.l=t.ac||null,this.j=t.jb||!1}Pe(oo,zd);oo.prototype.g=function(){return new Ml(this.l,this.j)};oo.prototype.i=function(t){return function(){return t}}({});function Ml(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Ml,Ce);var Gd=0;D=Ml.prototype;D.open=function(t,e){if(this.readyState!=Gd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ms(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=Gd};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function iw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ao(this):Ms(this),this.readyState==3&&iw(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,ao(this))};D.Ua=function(t){this.g&&(this.response=t,ao(this))};D.ga=function(){this.g&&ao(this)};function ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ms(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ms(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RA=$.JSON.parse;function ue(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sw,this.K=this.L=!1}Pe(ue,Ce);var sw="",DA=/^https?$/i,xA=["POST","PUT"];D=ue.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uh.g(),this.C=this.u?Tm(this.u):Tm(uh),this.g.onreadystatechange=Fe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=S0(xA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lw(this),0<this.B&&((this.K=PA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.qa,this)):this.A=Bd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cm(this,s)}};function PA(t){return ci&&QC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Cm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ow(t),$l(t)}function ow(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),$l(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$l(this,!0)),ue.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?aw(this):this.fb())};D.fb=function(){aw(this)};function aw(t){if(t.h&&typeof Pd<"u"&&(!t.C[1]||Qt(t)!=4||t.aa()!=2)){if(t.v&&Qt(t)==4)Bd(t.Ha,0,t);else if(De(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Q0)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!DA.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ow(t)}}finally{$l(t)}}}}function $l(t,e){if(t.g){lw(t);const n=t.g,r=t.C[0]?Fa:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function lw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RA(e)}};function Am(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uw(t){let e="";return Md(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cw(t){this.Ca=0,this.i=[],this.j=new Rl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vi("baseRetryDelayMs",5e3,t),this.bb=Vi("retryDelaySeedMs",1e4,t),this.$a=Vi("forwardChannelMaxRetries",2,t),this.ta=Vi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Z0(t&&t.concurrentRequestLimit),this.Fa=new CA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=cw.prototype;D.ma=8;D.G=1;function Yd(t){if(hw(t),t.G==3){var e=t.U++,n=sn(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),lo(t,n),e=new io(t,t.j,e,void 0),e.K=2,e.v=Ll(sn(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=ww(e.l,null),e.g.da(e.v)),e.F=Date.now(),so(e)}yw(t)}function bl(t){t.g&&(Jd(t),t.g.cancel(),t.g=null)}function hw(t){bl(t),t.u&&($.clearTimeout(t.u),t.u=null),Ka(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Ul(t){ew(t.h)||t.m||(t.m=!0,O0(t.Ja,t),t.C=0)}function OA(t,e){return tw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=no(Fe(t.Ja,t,e),gw(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new io(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=k0(s),C0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dw(this,i,e),n=sn(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),lo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(uw(s)))+"&"+e:this.o&&Qd(n,this.o,s)),Wd(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,hh(i,n,null)):hh(i,n,e),this.G=2}}else this.G==3&&(t?Nm(this,t):this.i.length==0||ew(this.h)||Nm(this))};function Nm(t,e){var n;e?n=e.m:n=t.U++;const r=sn(t.F);re(r,"SID",t.I),re(r,"RID",n),re(r,"AID",t.T),lo(t,r),t.o&&t.s&&Qd(r,t.o,t.s),n=new io(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=dw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wd(t.h,n),hh(n,r,e)}function lo(t,e){t.ia&&Md(t.ia,function(n,r){re(e,r,n)}),t.l&&G0({},function(n,r){re(e,r,n)})}function dw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Fe(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{AA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function fw(t){t.g||t.u||(t.Z=1,O0(t.Ia,t),t.A=0)}function Xd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=no(Fe(t.Ia,t),gw(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,pw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=no(Fe(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),bl(this),pw(this))};function Jd(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function pw(t){t.g=new io(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=sn(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),lo(t,e),t.o&&t.s&&Qd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ll(sn(e)),n.s=null,n.P=!0,H0(n,t)}D.cb=function(){this.v!=null&&(this.v=null,bl(this),Xd(this),Ke(19))};function Ka(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function mw(t,e){var n=null;if(t.g==e){Ka(t),Jd(t),t.g=null;var r=2}else if(fh(t.h,e))n=e.D,nw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Dl(),De(r,new V0(r,n)),Ul(t)}else fw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&OA(t,e)||r==2&&Xd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function gw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Fe(t.kb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||za(n,"https"),Ll(n)),NA(n.toString(),r)}else Ke(2);t.G=0,t.l&&t.l.va(e),yw(t),hw(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function yw(t){if(t.G=0,t.la=[],t.l){const e=rw(t.h);(e.length!=0||t.i.length!=0)&&(ym(t.la,e),ym(t.la,t.i),t.h.i.length=0,Od(t.i),t.i.length=0),t.l.ua()}}function vw(t,e,n){var r=n instanceof lr?sn(n):new lr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ha(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new lr(null,void 0);r&&za(s,r),e&&(s.g=e),i&&Ha(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&re(r,n,e),re(r,"VER",t.ma),lo(t,r),r}function ww(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new oo({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function Ew(){}D=Ew.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Wa(){if(ci&&!(10<=Number(YC)))throw Error("Environmental error: no available transport.")}Wa.prototype.g=function(t,e){return new ot(t,e)};function ot(t,e){Ce.call(this),this.g=new cw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Va(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Va(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ki(this)}Pe(ot,Ce);ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=vw(t,null,t.V),Ul(t)};ot.prototype.close=function(){Yd(this.g)};ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vd(t),t=n);e.i.push(new _A(e.ab++,t)),e.G==3&&Ul(e)};ot.prototype.M=function(){this.g.l=null,delete this.j,Yd(this.g),delete this.g,ot.X.M.call(this)};function Sw(t){Hd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(Sw,Hd);function Iw(){Kd.call(this),this.status=1}Pe(Iw,Kd);function ki(t){this.g=t}Pe(ki,Ew);ki.prototype.xa=function(){De(this.g,"a")};ki.prototype.wa=function(t){De(this.g,new Sw(t))};ki.prototype.va=function(t){De(this.g,new Iw)};ki.prototype.ua=function(){De(this.g,"b")};Wa.prototype.createWebChannel=Wa.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;xl.NO_ERROR=0;xl.TIMEOUT=8;xl.HTTP_ERROR=6;j0.COMPLETE="complete";B0.EventType=ro;ro.OPEN="a";ro.CLOSE="b";ro.ERROR="c";ro.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var LA=function(){return new Wa},MA=function(){return Dl()},Wu=xl,$A=j0,bA=Ar,Rm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},UA=oo,jo=B0,FA=ue;const Dm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Sl("@firebase/firestore");function xm(){return wr.logLevel}function x(t,...e){if(wr.logLevel<=G.DEBUG){const n=e.map(Zd);wr.debug(`Firestore (${Ci}): ${t}`,...n)}}function on(t,...e){if(wr.logLevel<=G.ERROR){const n=e.map(Zd);wr.error(`Firestore (${Ci}): ${t}`,...n)}}function ph(t,...e){if(wr.logLevel<=G.WARN){const n=e.map(Zd);wr.warn(`Firestore (${Ci}): ${t}`,...n)}}function Zd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function J(t,e){t||b()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BA{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new Tw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Me(e)}}class zA{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(J(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class HA{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new zA(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WA{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.A=n.token,new KA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new ve(0,0))}static max(){return new U(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $s?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends $s{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const GA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends $s{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return GA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(le.fromString(e))}static fromName(e){return new O(le.fromString(e).popFirst(5))}static empty(){return new O(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new le(e.slice()))}}function QA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new $n(i,O.empty(),e)}function YA(t){return new $n(t.readTime,t.key,-1)}class $n{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $n(U.min(),O.empty(),-1)}static max(){return new $n(U.max(),O.empty(),-1)}}function XA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==JA)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ef.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function tN(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new nN("Invalid base64 string: "+i):i}}(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const rN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(J(!!t),typeof t=="string"){let e=0;const n=rN.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Aw(t){const e=t.mapValue.fields.__previous_value__;return Cw(e)?Aw(e):e}function Us(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cw(t)?4:iN(t)?9007199254740991:10:b()}function jt(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Us(t).isEqual(Us(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=bn(r.timestampValue),o=bn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return di(r.bytesValue).isEqual(di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=fe(r.doubleValue),o=fe(i.doubleValue);return s===o?qa(s)===qa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Pm(s)!==Pm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!jt(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Fs(t,e){return(t.values||[]).find(n=>jt(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=fe(i.integerValue||i.doubleValue),a=fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Om(t.timestampValue,e.timestampValue);case 4:return Om(Us(t),Us(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=di(i),a=di(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(fe(i.latitude),fe(s.latitude));return o!==0?o:Q(fe(i.longitude),fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Bo.mapValue&&s===Bo.mapValue)return 0;if(i===Bo.mapValue)return 1;if(s===Bo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=fi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function Om(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=bn(t),r=bn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function pi(t){return mh(t)}function mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=bn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mh(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function gh(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function Lm(t){return!!t&&"nullValue"in t}function Mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ra(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ss(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.position=e,this.inclusive=n}}function $m(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{}class ge extends Nw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oN(e,n,r):n==="array-contains"?new uN(e,r):n==="in"?new cN(e,r):n==="not-in"?new hN(e,r):n==="array-contains-any"?new dN(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aN(e,r):new lN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fi(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends Nw{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Bt(e,n)}matches(e){return Rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Rw(t){return t.op==="and"}function Dw(t){return sN(t)&&Rw(t)}function sN(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function yh(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(Dw(t))return t.filters.map(e=>yh(e)).join(",");{const e=t.filters.map(n=>yh(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&jt(n.value,r.value)}(t,e):t instanceof Bt?function(n,r){return r instanceof Bt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&xw(s,r.filters[o]),!0):!1}(t,e):void b()}function Pw(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${pi(e.value)}`}(t):t instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Pw).join(" ,")+"}"}(t):"Filter"}class oN extends ge{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class aN extends ge{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lN extends ge{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class uN extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&Fs(n.arrayValue,this.value)}}class cN extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class hN extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fs(this.value.arrayValue,n)}}class dN extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n="asc"){this.field=e,this.dir=n}}function fN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Um(this.data.getIterator())}getIteratorFrom(e){return new Um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class Um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new _t([])}unionWith(e){let n=new we(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ss(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ai(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(ss(this.value))}}function Lw(t){const e=[];return Ai(t.fields,(n,r)=>{const i=new Ue([n]);if(ra(r)){const s=Lw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,U.min(),U.min(),U.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new be(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new be(e,2,n,U.min(),U.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,U.min(),U.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function Fm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pN(t,e,n,r,i,s,o)}function nf(t){const e=F(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e._t=n}return e._t}function rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bm(t.startAt,e.startAt)&&bm(t.endAt,e.endAt)}function vh(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function mN(t,e,n,r,i,s,o,a){return new Vl(t,e,n,r,i,s,o,a)}function sf(t){return new Vl(t)}function Vm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vN(t){return t.collectionGroup!==null}function Zr(t){const e=F(t);if(e.wt===null){e.wt=[];const n=yN(e),r=gN(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new os(n)),e.wt.push(new os(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new os(Ue.keyField(),s))}}}return e.wt}function an(t){const e=F(t);if(!e.gt)if(e.limitType==="F")e.gt=Fm(e.path,e.collectionGroup,Zr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Zr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new os(s.field,o))}const r=e.endAt?new Ga(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ga(e.startAt.position,e.startAt.inclusive):null;e.gt=Fm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function wh(t,e,n){return new Vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return rf(an(t),an(e))&&t.limitType===e.limitType}function Mw(t){return`${nf(an(t))}|lt:${t.limitType}`}function Eh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Pw(r)).join(", ")}]`),Fl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),`Target(${n})`}(an(t))}; limitType=${t.limitType})`}function Bl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Zr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=$m(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Zr(n),r)||n.endAt&&!function(i,s,o){const a=$m(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Zr(n),r))}(t,e)}function wN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $w(t){return(e,n)=>{let r=!1;for(const i of Zr(t)){const s=EN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EN(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function Uw(t){return{integerValue:""+t}}function SN(t,e){return tN(e)?Uw(e):bw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this._=void 0}}function IN(t,e,n){return t instanceof Vs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof js?Vw(t,e):t instanceof Bs?jw(t,e):function(r,i){const s=Fw(r,i),o=jm(s)+jm(r.It);return gh(s)&&gh(r.It)?Uw(o):bw(r.Tt,o)}(t,e)}function TN(t,e,n){return t instanceof js?Vw(t,e):t instanceof Bs?jw(t,e):n}function Fw(t,e){return t instanceof Qa?gh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Vs extends zl{}class js extends zl{constructor(e){super(),this.elements=e}}function Vw(t,e){const n=Bw(e);for(const r of t.elements)n.some(i=>jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bs extends zl{constructor(e){super(),this.elements=e}}function jw(t,e){let n=Bw(e);for(const r of t.elements)n=n.filter(i=>!jt(i,r));return{arrayValue:{values:n}}}class Qa extends zl{constructor(e,n){super(),this.Tt=e,this.It=n}}function jm(t){return fe(t.integerValue||t.doubleValue)}function Bw(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.field=e,this.transform=n}}function kN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof js&&r instanceof js||n instanceof Bs&&r instanceof Bs?hi(n.elements,r.elements,jt):n instanceof Qa&&r instanceof Qa?jt(n.It,r.It):n instanceof Vs&&r instanceof Vs}(t.transform,e.transform)}class CN{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hl{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kw(t.key,Zt.none()):new ho(t.key,t.data,Zt.none());{const n=t.data,r=ht.empty();let i=new we(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new _t(i.toArray()),Zt.none())}}function AN(t,e,n){t instanceof ho?function(r,i,s){const o=r.value.clone(),a=zm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(r,i,s){if(!ia(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=zm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Hw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function as(t,e,n,r){return t instanceof ho?function(i,s,o,a){if(!ia(i.precondition,s))return o;const l=i.value.clone(),u=Hm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,s,o,a){if(!ia(i.precondition,s))return o;const l=Hm(i.fieldTransforms,a,s),u=s.data;return u.setAll(Hw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ia(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function NN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Fw(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function Bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hi(n,r,(i,s)=>kN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends Hl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends Hl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zm(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,TN(o,a,n[i]))}return r}function Hm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IN(s,o,e))}return r}class Kw extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RN extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,W;function xN(t){switch(t){default:return b();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ww(t){if(t===void 0)return on("GRPC error has no .code"),I.UNKNOWN;switch(t){case de.OK:return I.OK;case de.CANCELLED:return I.CANCELLED;case de.UNKNOWN:return I.UNKNOWN;case de.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case de.INTERNAL:return I.INTERNAL;case de.UNAVAILABLE:return I.UNAVAILABLE;case de.UNAUTHENTICATED:return I.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case de.NOT_FOUND:return I.NOT_FOUND;case de.ALREADY_EXISTS:return I.ALREADY_EXISTS;case de.PERMISSION_DENIED:return I.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case de.ABORTED:return I.ABORTED;case de.OUT_OF_RANGE:return I.OUT_OF_RANGE;case de.UNIMPLEMENTED:return I.UNIMPLEMENTED;case de.DATA_LOSS:return I.DATA_LOSS;default:return b()}}(W=de||(de={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=new Ee(O.comparator);function ln(){return PN}const qw=new Ee(O.comparator);function qi(...t){let e=qw;for(const n of t)e=e.insert(n.key,n);return e}function Gw(t){let e=qw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return ls()}function Qw(){return ls()}function ls(){return new Ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const ON=new Ee(O.comparator),LN=new we(O.comparator);function H(...t){let e=LN;for(const n of t)e=e.add(n);return e}const MN=new we(Q);function Yw(){return MN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(U.min(),i,Yw(),ln(),H())}}class fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class Xw{constructor(e,n){this.targetId=e,this.Rt=n}}class Jw{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Km{constructor(){this.bt=0,this.vt=qm(),this.Pt=ze.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=H(),n=H(),r=H();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new fo(this.Pt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=qm()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class $N{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=ln(),this.Kt=Wm(),this.Gt=new we(Q)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.$t(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.$t(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(vh(s))if(r===0){const o=new O(s.path);this.zt(n,o,be.newNoDocument(o,U.min()))}else J(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&vh(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,be.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=H();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Kl(e,n,this.Gt,this.Ut,r);return this.Ut=ln(),this.Kt=Wm(),this.Gt=new we(Q),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Km,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new we(Q),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Km),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Wm(){return new Ee(O.comparator)}function qm(){return new Ee(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),FN=(()=>({and:"AND",or:"OR"}))();class VN{constructor(e,n){this.databaseId=e,this.yt=n}}function Ya(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zw(t,e){return t.yt?e.toBase64():e.toUint8Array()}function jN(t,e){return Ya(t,e.toTimestamp())}function bt(t){return J(!!t),U.fromTimestamp(function(e){const n=bn(e);return new ve(n.seconds,n.nanos)}(t))}function of(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function e1(t){const e=le.fromString(t);return J(i1(e)),e}function Sh(t,e){return of(t.databaseId,e.path)}function qu(t,e){const n=e1(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(t1(n))}function Ih(t,e){return of(t.databaseId,e)}function BN(t){const e=e1(t);return e.length===4?le.emptyPath():t1(e)}function Th(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t1(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gm(t,e,n){return{name:Sh(t,e),fields:n.value.mapValue.fields}}function zN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(J(u===void 0||typeof u=="string"),ze.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:Ww(l.code);return new L(u,l.message||"")}(o);n=new Jw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qu(t,r.document.name),s=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):U.min(),a=new ht({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new sa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qu(t,r.document),s=r.readTime?bt(r.readTime):U.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qu(t,r.document),s=r.removedTargetIds||[];n=new sa([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new DN(i),o=r.targetId;n=new Xw(o,s)}}return n}function HN(t,e){let n;if(e instanceof ho)n={update:Gm(t,e.key,e.value)};else if(e instanceof Kw)n={delete:Sh(t,e.key)};else if(e instanceof Nr)n={update:Gm(t,e.key,e.data),updateMask:ZN(e.fieldMask)};else{if(!(e instanceof RN))return b();n={verify:Sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof js)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qa)return{fieldPath:s.field.canonicalString(),increment:o.It};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function KN(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?bt(r.updateTime):bt(i);return s.isEqual(U.min())&&(s=bt(i)),new CN(s,r.transformResults||[])}(n,e))):[]}function WN(t,e){return{documents:[Ih(t,e.path)]}}function qN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ih(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ih(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return r1(Bt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xr(c.field),direction:YN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||Fl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GN(t){let e=BN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=n1(c);return h instanceof Bt&&Dw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new os(Pr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Fl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ga(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ga(d,h)}(n.endAt)),mN(e,i,o,s,a,"F",l,u)}function QN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function n1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pr(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Pr(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pr(e.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pr(e.unaryFilter.field);return ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(Pr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(n=>n1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function YN(t){return bN[t]}function XN(t){return UN[t]}function JN(t){return FN[t]}function xr(t){return{fieldPath:t.canonicalString()}}function Pr(t){return Ue.fromServerFormat(t.fieldPath)}function r1(t){return t instanceof ge?function(e){if(e.op==="=="){if(Mm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NAN"}};if(Lm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NAN"}};if(Lm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(e.field),op:XN(e.op),value:e.value}}}(t):t instanceof Bt?function(e){const n=e.getFilters().map(r=>r1(r));return n.length===1?n[0]:{compositeFilter:{op:JN(e.op),filters:n}}}(t):b()}function ZN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&AN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=as(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=as(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=zw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,r)=>Bm(n,r))&&hi(this.baseMutations,e.baseMutations,(n,r)=>Bm(n,r))}}class af{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=ON;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new af(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,i,s=U.min(),o=U.min(),a=ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.oe=e}}function rR(t){const e=GN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.Ze=new sR}addToCollectionParentIndex(e,n){return this.Ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve($n.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve($n.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class sR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new mi(0)}static Sn(){return new mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.changes=new Ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&as(r.mutation,i,_t.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ln();const o=ls(),a=ls();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Nr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),as(c.mutation,u,c.mutation.getFieldMask(),ve.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new aR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ls();let i=new Ee((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||_t.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Qw();c.forEach(d=>{if(!s.has(d)){const g=zw(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(rr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:Gw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=qi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=qi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new Vl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=qi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&as(u.mutation,l,_t.empty(),ve.now()),Bl(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return S.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:bt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:rR(r.bundledQuery),readTime:bt(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.overlays=new Ee(O.comparator),this.ss=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=rr(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=rr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tR(n,r));let s=this.ss.get(n);s===void 0&&(s=H(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.rs=new we(Ie.os),this.us=new we(Ie.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Ie(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new O(new le([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new le([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=H();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||Q(e.gs,n.gs)}static cs(e,n){return Q(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new we(Ie.os)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(Q);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),S.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new O(s),0);let a=new we(Q);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),S.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return S.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}bn(e){}containsKey(e,n){const r=new Ie(n,0),i=this.ps.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.Rs=e,this.docs=new Ee(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let r=ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ln();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||XA(YA(c),r)<=0||(i.has(c.key)||Bl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}bs(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fR(this)}getSize(e){return S.resolve(this.size)}}class fR extends oR{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.persistence=e,this.vs=new Ni(n=>nf(n),rf),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new lf,this.targetCount=0,this.Ss=mi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ps&&(this.Ps=n),S.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.xn(n),S.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ef(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new pR(this),this.indexManager=new iR,this.remoteDocumentCache=function(r){return new dR(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new nR(n),this.Os=new uR(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new hR(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new gR(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Fs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}$s(e,n){return S.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class gR extends ZA{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Bs=new lf,this.Ls=null}static qs(e){return new uf(e)}get Us(){if(this.Ls)return this.Ls;throw b()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),S.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Us,r=>{const i=O.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return S.or([()=>S.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Fi(e,n,i,r)).next(s=>s||this.$i(e,n))}Mi(e,n){if(Vm(n))return S.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wh(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,wh(n,null,"F")):this.qi(e,u,n,l)}))})))}Fi(e,n,r,i){return Vm(n)||i.isEqual(U.min())?this.$i(e,n):this.Oi.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.$i(e,n):(xm()<=G.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Eh(n)),this.qi(e,o,n,QA(i,-1)))})}Bi(e,n){let r=new we($w(e));return n.forEach((i,s)=>{Bl(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}$i(e,n){return xm()<=G.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Eh(n)),this.Oi.getDocumentsMatchingQuery(e,n,$n.min())}qi(e,n,r,i){return this.Oi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Ee(Q),this.Gi=new Ni(s=>nf(s),rf),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lR(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function wR(t,e,n,r){return new vR(t,e,n,r)}async function s1(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function ER(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);J(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function o1(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function SR(t,e){const n=F(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ze.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,g,c)&&a.push(n.Ns.updateTargetData(s,g))});let l=ln(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(IR(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(U.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(h=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function IR(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ln();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function TR(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _R(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new ur(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function _h(t,e,n){const r=F(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!co(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function Qm(t,e,n){const r=F(t);let i=U.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),h=c.Gi.get(u);return h!==void 0?S.resolve(c.Ki.get(h)):c.Ns.getTargetData(l,u)}(r,o,an(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:H())).next(a=>(kR(r,wN(e),a),{documents:a,Yi:s})))}function kR(t,e,n){let r=t.Qi.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class Ym{constructor(){this.activeTargetIds=Yw()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CR{constructor(){this.Ur=new Ym,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=this.fo(e,n);x("RestConnection","Sending: ",o,r);const a={};return this._o(a,i,s),this.wo(e,o,a,r).then(l=>(x("RestConnection","Received: ",l),l),l=>{throw ph("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=NR[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){return new Promise((s,o)=>{const a=new FA;a.setWithCredentials(!0),a.listenOnce($A.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wu.NO_ERROR:const u=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Wu.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Wu.HTTP_ERROR:const c=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(v)>=0?v:I.UNKNOWN}(d.status);o(new L(g,d.message))}else o(new L(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(I.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}yo(e,n,r){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=LA(),o=MA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new UA({})),this._o(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");x("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new RR({Yr:y=>{h?x("Connection","Not sending because WebChannel is closed:",y):(c||(x("Connection","Opening WebChannel transport."),u.open(),c=!0),x("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,v,T)=>{y.listen(v,p=>{try{T(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,jo.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),g(u,jo.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.oo())}),g(u,jo.EventType.ERROR,y=>{h||(h=!0,ph("Connection","WebChannel transport errored:",y),d.oo(new L(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,jo.EventType.MESSAGE,y=>{var v;if(!h){const T=y.data[0];J(!!T);const p=T,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){x("Connection","WebChannel received error:",f);const m=f.status;let w=function(N){const R=de[N];if(R!==void 0)return Ww(R)}(m),_=f.message;w===void 0&&(w=I.INTERNAL,_="Unknown error status: "+m+" with message "+f.message),h=!0,d.oo(new L(w,_)),u.close()}else x("Connection","WebChannel received:",T),d.uo(T)}}),g(o,bA.STAT_EVENT,y=>{y.stat===Rm.PROXY?x("Connection","Detected buffering proxy"):y.stat===Rm.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Gu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){return new VN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new a1(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xR extends l1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=zN(this.Tt,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?bt(s.readTime):U.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Th(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=vh(a)?{documents:WN(i,a)}:{query:qN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Zw(i,s.resumeToken):s.snapshotVersion.compareTo(U.min())>0&&(o.readTime=Ya(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=QN(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Th(this.Tt),n.removeTarget=e,this.qo(n)}}class PR extends l1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=KN(e.writeResults,e.commitTime),r=bt(e.commitTime);return this.listener.eu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Th(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HN(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(I.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class LR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(on(n),this.cu=!1):x("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.mu.add(4),await po(l),l.pu.set("Unknown"),l.mu.delete(4),await ql(l)}(this))})}),this.pu=new LR(r,i)}}async function ql(t){if(Rr(t))for(const e of t.gu)await e(!0)}async function po(t){for(const e of t.gu)await e(!1)}function u1(t,e){const n=F(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ff(n)?df(n):Ri(n).Mo()&&hf(n,e))}function c1(t,e){const n=F(t),r=Ri(n);n.wu.delete(e),r.Mo()&&h1(n,e),n.wu.size===0&&(r.Mo()?r.Bo():Rr(n)&&n.pu.set("Unknown"))}function hf(t,e){t.Iu.Ft(e.targetId),Ri(t).Jo(e)}function h1(t,e){t.Iu.Ft(e),Ri(t).Yo(e)}function df(t){t.Iu=new $N({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ri(t).start(),t.pu.au()}function ff(t){return Rr(t)&&!Ri(t).Oo()&&t.wu.size>0}function Rr(t){return F(t).mu.size===0}function d1(t){t.Iu=void 0}async function $R(t){t.wu.forEach((e,n)=>{hf(t,e)})}async function bR(t,e){d1(t),ff(t)?(t.pu.fu(e),df(t)):t.pu.set("Unknown")}async function UR(t,e,n){if(t.pu.set("Online"),e instanceof Jw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xa(t,r)}else if(e instanceof sa?t.Iu.Qt(e):e instanceof Xw?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(U.min()))try{const r=await o1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(ze.EMPTY_BYTE_STRING,l.snapshotVersion)),h1(i,a);const u=new ur(l.target,a,1,l.sequenceNumber);hf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Xa(t,r)}}async function Xa(t,e,n){if(!co(e))throw e;t.mu.add(1),await po(t),t.pu.set("Offline"),n||(n=()=>o1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ql(t)})}function f1(t,e){return e().catch(n=>Xa(t,n,e))}async function Gl(t){const e=F(t),n=Un(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;FR(e);)try{const i=await TR(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,VR(e,i)}catch(i){await Xa(e,i)}p1(e)&&m1(e)}function FR(t){return Rr(t)&&t._u.length<10}function VR(t,e){t._u.push(e);const n=Un(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function p1(t){return Rr(t)&&!Un(t).Oo()&&t._u.length>0}function m1(t){Un(t).start()}async function jR(t){Un(t).su()}async function BR(t){const e=Un(t);for(const n of t._u)e.tu(n.mutations)}async function zR(t,e,n){const r=t._u.shift(),i=af.from(r,e,n);await f1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gl(t)}async function HR(t,e){e&&Un(t).Xo&&await async function(n,r){if(i=r.code,xN(i)&&i!==I.ABORTED){const s=n._u.shift();Un(n).$o(),await f1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Gl(n)}var i}(t,e),p1(t)&&m1(t)}async function Jm(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Rr(n);n.mu.add(3),await po(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ql(n)}async function KR(t,e){const n=F(t);e?(n.mu.delete(2),await ql(n)):e||(n.mu.add(2),await po(n),n.pu.set("Unknown"))}function Ri(t){return t.Tu||(t.Tu=function(e,n,r){const i=F(e);return i.ru(),new xR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:$R.bind(null,t),no:bR.bind(null,t),Ho:UR.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ff(t)?df(t):t.pu.set("Unknown")):(await t.Tu.stop(),d1(t))})),t.Tu}function Un(t){return t.Eu||(t.Eu=function(e,n,r){const i=F(e);return i.ru(),new PR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:jR.bind(null,t),no:HR.bind(null,t),nu:BR.bind(null,t),eu:zR.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Gl(t)):(await t.Eu.stop(),t._u.length>0&&(x("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mf(t,e){if(on("AsyncQueue",`${e}: ${t}`),co(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=qi(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.Au=new Ee(O.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):b():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gi(e,n,ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.bu=void 0,this.listeners=[]}}class qR{constructor(){this.queries=new Ni(e=>Mw(e),jl),this.onlineState="Unknown",this.vu=new Set}}async function GR(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new WR),i)try{s.bu=await n.onListen(r)}catch(o){const a=mf(o,`Initialization of query '${Eh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.bu&&e.Vu(s.bu)&&gf(n)}async function QR(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function YR(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.bu=i}}r&&gf(n)}function XR(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function gf(t){t.vu.forEach(e=>{e.next()})}class JR{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ou||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.key=e}}class y1{constructor(e){this.key=e}}class ZR{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=H(),this.mutatedKeys=H(),this.ju=$w(e),this.zu=new ei(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new Zm,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Bl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),T=!0):this.Yu(d,g)||(r.track({type:2,doc:g}),T=!0,(l&&this.ju(g,l)>0||u&&this.ju(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),T=!0):d&&!g&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(h)-g(d)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new gi(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Zm,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=H(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new y1(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new g1(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=H();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return gi.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class eD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tD{constructor(e){this.key=e,this.ic=!1}}class nD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ni(a=>Mw(a),jl),this.uc=new Map,this.cc=new Set,this.ac=new Ee(O.comparator),this.hc=new Map,this.lc=new lf,this.fc={},this.dc=new Map,this._c=mi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function rD(t,e){const n=fD(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await _R(n.localStore,an(e));n.isPrimaryClient&&u1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await iD(n,e,r,a==="current",o.resumeToken)}return i}async function iD(t,e,n,r,i){t.mc=(h,d,g)=>async function(y,v,T,p){let f=v.view.Hu(T);f.Li&&(f=await Qm(y.localStore,v.query,!1).then(({documents:_})=>v.view.Hu(_,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return tg(y,v.targetId,w.tc),w.snapshot}(t,h,d,g);const s=await Qm(t.localStore,e,!0),o=new ZR(e,s.Yi),a=o.Hu(s.documents),l=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);tg(t,n,u.tc);const c=new eD(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function sD(t,e){const n=F(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!jl(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _h(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),c1(n.remoteStore,r.targetId),kh(n,r.targetId)}).catch(uo)):(kh(n,r.targetId),await _h(n.localStore,r.targetId,!0))}async function oD(t,e,n){const r=pD(t);try{const i=await function(s,o){const a=F(s),l=ve.now(),u=o.reduce((d,g)=>d.add(g.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=ln(),y=H();return a.ji.getEntries(d,u).next(v=>{g=v,g.forEach((T,p)=>{p.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const T=[];for(const p of o){const f=NN(p,c.get(p.key).overlayedDocument);f!=null&&T.push(new Nr(p.key,f,Lw(f.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Gw(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Ee(Q)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await mo(r,i.changes),await Gl(r.remoteStore)}catch(i){const s=mf(i,"Failed to persist write");n.reject(s)}}async function v1(t,e){const n=F(t);try{const r=await SR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?J(o.ic):i.removedDocuments.size>0&&(J(o.ic),o.ic=!1))}),await mo(n,r,e)}catch(r){await uo(r)}}function eg(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&gf(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aD(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Ee(O.comparator);o=o.insert(s,be.newNoDocument(s,U.min()));const a=H().add(s),l=new Kl(U.min(),new Map,new we(Q),o,a);await v1(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),yf(r)}else await _h(r.localStore,e,!1).then(()=>kh(r,e,n)).catch(uo)}async function lD(t,e){const n=F(t),r=e.batch.batchId;try{const i=await ER(n.localStore,e);E1(n,r,null),w1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,i)}catch(i){await uo(i)}}async function uD(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);E1(r,e,n),w1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,i)}catch(i){await uo(i)}}function w1(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function E1(t,e,n){const r=F(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||S1(t,r)})}function S1(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(c1(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),yf(t))}function tg(t,e,n){for(const r of n)r instanceof g1?(t.lc.addReference(r.key,e),cD(t,r)):r instanceof y1?(x("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||S1(t,r.key)):b()}function cD(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.cc.add(r),yf(t))}function yf(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(le.fromString(e)),r=t._c.next();t.hc.set(r,new tD(n)),t.ac=t.ac.insert(n,r),u1(t.remoteStore,new ur(an(sf(n.path)),r,2,ef.at))}}async function mo(t,e,n){const r=F(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=cf.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Ci,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.xi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!co(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ki.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(r.localStore,s))}async function hD(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await s1(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new L(I.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mo(n,r.Wi)}}function dD(t,e){const n=F(t),r=n.hc.get(e);if(r&&r.ic)return H().add(r.key);{let i=H();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function fD(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aD.bind(null,e),e.rc.Ho=YR.bind(null,e.eventManager),e.rc.gc=XR.bind(null,e.eventManager),e}function pD(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uD.bind(null,e),e}class mD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return wR(this.persistence,new yR,e.initialUser,this.Tt)}Tc(e){return new mR(uf.qs,this.Tt)}Ic(e){return new CR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>eg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hD.bind(null,this.syncEngine),await KR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qR}createDatastore(e){const n=Wl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DR(i));var i;return function(s,o,a,l){return new OR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>eg(this.syncEngine,a,0),o=Xm.C()?new Xm:new AR,new MR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new nD(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);x("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await po(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=_w.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wD(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await s1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ED(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SD(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Jm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Jm(e.remoteStore,s)),t.onlineComponents=e}async function SD(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await wD(t,new mD)),t.offlineComponents}async function I1(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await ED(t,new gD)),t.onlineComponents}function ID(t){return I1(t).then(e=>e.syncEngine)}async function TD(t){const e=await I1(t),n=e.eventManager;return n.onListen=rD.bind(null,e.syncEngine),n.onUnlisten=sD.bind(null,e.syncEngine),n}function _D(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new yD({next:h=>{s.enqueueAndForget(()=>QR(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new L(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new L(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new JR(sf(o.path),u,{includeMetadataChanges:!0,Ou:!0});return GR(i,c)}(await TD(t),t.asyncQueue,e,n,r)),r.promise}const ng=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CD(t,e,n,r){if(e===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rg(t){if(!O.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new VA;switch(n.type){case"gapi":const r=n.client;return new HA(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ng.get(e);n&&(x("ComponentProvider","Removing Datastore"),ng.delete(e),n.terminate())}(this),Promise.resolve()}}function AD(t,e,n,r={}){var i;const s=(t=zs(t,wf))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ph("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Me.MOCK_USER;else{o=ZT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Me(l)}t._authCredentials=new jA(new Tw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Ef{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ef(this.firestore,e,this._query)}}class Hs extends Ef{constructor(e,n,r){super(e,n,sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new O(e))}withConverter(e){return new Hs(this.firestore,e,this._path)}}function hO(t,e,...n){if(t=st(t),arguments.length===1&&(e=_w.R()),kD("doc","path",e),t instanceof wf){const r=le.fromString(e,...n);return rg(r),new gt(t,null,new O(r))}{if(!(t instanceof gt||t instanceof Hs))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return rg(r),new gt(t.firestore,t instanceof Hs?t.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new a1(this,"async_queue_retry"),this.Hc=()=>{const n=Gu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Gu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new On;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!co(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw on("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=pf.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&b()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class Sf extends wf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ND,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_1(this),this._firestoreClient.terminate()}}function RD(t,e){const n=typeof t=="object"?t:Ad(),r=typeof t=="string"?t:e||"(default)",i=Cr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YT("firestore");s&&AD(i,...s)}return i}function T1(t){return t._firestoreClient||_1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new eN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new vD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(ze.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=/^__.*__$/;class xD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}function k1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class kf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new kf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ja(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(k1(this.ra)&&DD.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class PD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Wl(e)}wa(e,n,r,i=!1){return new kf({ra:e,methodName:n,_a:r,path:Ue.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function OD(t){const e=t._freezeSettings(),n=Wl(t._databaseId);return new PD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LD(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);R1("Data must be an object, but it was:",o,r);const a=A1(r,o);let l,u;if(s.merge)l=new _t(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=MD(e,h,n);if(!o.contains(d))throw new L(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bD(c,d)||c.push(d)}l=new _t(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new xD(new ht(a),l,u)}class Cf extends Tf{_toFieldTransform(e){return new _N(e.path,new Vs)}isEqual(e){return e instanceof Cf}}function C1(t,e){if(N1(t=st(t)))return R1("Unsupported field value:",e,t),A1(t,e);if(t instanceof Tf)return function(n,r){if(!k1(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=C1(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return SN(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ve.fromDate(n);return{timestampValue:Ya(r.Tt,i)}}if(n instanceof ve){const i=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ya(r.Tt,i)}}if(n instanceof _f)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yi)return{bytesValue:Zw(r.Tt,n._byteString)};if(n instanceof gt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:of(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${vf(n)}`)}(t,e)}function A1(t,e){const n={};return kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(t,(r,i)=>{const s=C1(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function N1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof _f||t instanceof yi||t instanceof gt||t instanceof Tf)}function R1(t,e,n){if(!N1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=vf(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function MD(t,e,n){if((e=st(e))instanceof If)return e._internalPath;if(typeof e=="string")return D1(t,e);throw Ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const $D=new RegExp("[~\\*/\\[\\]]");function D1(t,e,n){if(e.search($D)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new If(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ja(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(I.INVALID_ARGUMENT,a+t+l)}function bD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(P1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UD extends x1{data(){return super.data()}}function P1(t,e){return typeof e=="string"?D1(t,e):e instanceof If?e._internalPath:e._delegate._internalPath}class FD{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const r={};return Ai(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _f(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Aw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Us(e));default:return null}}convertTimestamp(e){const n=bn(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);J(i1(r));const i=new bs(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||on(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class O1 extends x1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new BD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(P1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class BD extends O1{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){t=zs(t,gt);const e=zs(t.firestore,Sf);return _D(T1(e),t._key).then(n=>KD(e,t,n))}class zD extends FD{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function fO(t,e,n){t=zs(t,gt);const r=zs(t.firestore,Sf),i=VD(t.converter,e,n);return HD(r,[LD(OD(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function HD(t,e){return function(n,r){const i=new On;return n.asyncQueue.enqueueAndForget(async()=>oD(await ID(n),r,i)),i.promise}(T1(t),e)}function KD(t,e,n){const r=n.docs.get(e._key),i=new zD(t);return new O1(t,i,e._key,r,new jD(n.hasPendingWrites,n.fromCache),e.converter)}function pO(){return new Cf("serverTimestamp")}(function(t,e=!0){(function(n){Ci=n})(Zs),Vt(new Nt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Sf(new BA(n.getProvider("auth-internal")),new WA(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),pt(Dm,"3.8.4",t),pt(Dm,"3.8.4","esm2017")})();function Af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WD=L1,M1=new kr("auth","Firebase",L1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Sl("@firebase/auth");function oa(t,...e){sg.logLevel<=G.ERROR&&sg.error(`Auth (${Zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Nf(t,...e)}function Ut(t,...e){return Nf(t,...e)}function $1(t,e,n){const r=Object.assign(Object.assign({},WD()),{[e]:n});return new kr("auth","Firebase",r).create(e,{appName:t.name})}function qD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),$1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M1.create(t,...e)}function M(t,e,...n){if(!t)throw Nf(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function un(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Map;function Xt(t){un(t instanceof Function,"Expected a class definition");let e=og.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,og.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){const n=Cr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Rs(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function QD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YD(){return ag()==="http:"||ag()==="https:"}function ag(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YD()||zv()||"connection"in navigator)?navigator.onLine:!0}function JD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=e_()||t_()}get(){return XD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new go(3e4,6e4);function tx(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ql(t,e,n,r,i={}){return U1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),b1.fetch()(F1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function U1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZD),e);try{const i=new rx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $1(t,c,u);zt(t,c)}}catch(i){if(i instanceof Rt)throw i;zt(t,"internal-error",{message:String(i)})}}async function nx(t,e,n,r,i={}){const s=await Ql(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rf(t.config,i):`${t.config.apiScheme}://${i}`}class rx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),ex.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e){return Ql(t,"POST","/v1/accounts:delete",e)}async function sx(t,e){return Ql(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ox(t,e=!1){const n=st(t),r=await n.getIdToken(e),i=Df(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:us(Qu(i.auth_time)),issuedAtTime:us(Qu(i.iat)),expirationTime:us(Qu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qu(t){return Number(t)*1e3}function Df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vv(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ax(t){const e=Df(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&lx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ks(t,sx(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dx(s.providerUserInfo):[],a=hx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function cx(t){const e=st(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dx(t){return t.map(e=>{var{providerId:n}=e,r=Af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(t,e){const n=await U1(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",b1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ax(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ws;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ox(this,e)}reload(){return cx(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ks(this,ix(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:_,providerData:N,stsTokenManager:R}=n;M(m&&R,e,"internal-error");const P=Ws.fromJSON(this.name,R);M(typeof m=="string",e,"internal-error"),dn(h,e.name),dn(d,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof _=="boolean",e,"internal-error"),dn(g,e.name),dn(y,e.name),dn(v,e.name),dn(T,e.name),dn(p,e.name),dn(f,e.name);const Z=new cr({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:_,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(Z.providerData=N.map(z=>Object.assign({},z))),T&&(Z._redirectEventId=T),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ws;i.updateFromServerResponse(n);const s=new cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Za(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}j1.type="NONE";const lg=j1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=aa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Xt(lg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt(lg);const o=aa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=cr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W1(e))return"Blackberry";if(q1(e))return"Webos";if(xf(e))return"Safari";if((e.includes("chrome/")||z1(e))&&!e.includes("edge/"))return"Chrome";if(K1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B1(t=Be()){return/firefox\//i.test(t)}function xf(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z1(t=Be()){return/crios\//i.test(t)}function H1(t=Be()){return/iemobile/i.test(t)}function K1(t=Be()){return/android/i.test(t)}function W1(t=Be()){return/blackberry/i.test(t)}function q1(t=Be()){return/webos/i.test(t)}function Yl(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function px(t=Be()){var e;return Yl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mx(){return n_()&&document.documentMode===10}function G1(t=Be()){return Yl(t)||K1(t)||q1(t)||W1(t)||/windows phone/i.test(t)||H1(t)}function gx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t,e=[]){let n;switch(t){case"Browser":n=ug(Be());break;case"Worker":n=`${ug(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new yx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Xl(t){return st(t)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=l_(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wx(t,e,n){const r=Xl(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Y1(e),{host:o,port:a}=Ex(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Sx()}function Y1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ex(t){const e=Y1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return nx(t,"POST","/v1/accounts:signInWithIdp",tx(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="http://localhost";class Sr extends X1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:Ix,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends yo{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends yo{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends yo{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cr._fromIdTokenResponse(e,r,i),o=dg(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dg(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new el(e,n,r,i)}}function J1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,r):s})}async function Tx(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ks(t,J1(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Df(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e,n=!1){const r="signIn",i=await J1(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Cx(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function Ax(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function Nx(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}const tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(){const t=Be();return xf(t)||Yl(t)}const Dx=1e3,xx=10;class eE extends Z1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rx()&&gx(),this.fallbackToPolling=G1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const Px=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Z1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Ox(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Of("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function Mx(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function $x(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ux(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebaseLocalStorageDb",Fx=1,nl="firebaseLocalStorage",sE="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function Vx(){const t=indexedDB.deleteDatabase(iE);return new vo(t).toPromise()}function Ah(){const t=indexedDB.open(iE,Fx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nl,{keyPath:sE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nl)?e(r):(r.close(),await Vx(),e(await Ah()))})})}async function fg(t,e,n){const r=Zl(t,!0).put({[sE]:e,value:n});return new vo(r).toPromise()}async function jx(t,e){const n=Zl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function pg(t,e){const n=Zl(t,!0).delete(e);return new vo(n).toPromise()}const Bx=800,zx=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(Ux()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $x(),!this.activeServiceWorker)return;this.sender=new Lx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ah();return await fg(e,tl,"1"),await pg(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zl(i,!1).getAll();return new vo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const Hx=oE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kx().appendChild(r)})}function qx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){return e?Xt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends X1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gx(t){return kx(t.auth,new Lf(t),t.bypassAuthState)}function Qx(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),_x(n,new Lf(t),t.bypassAuthState)}async function Yx(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Tx(n,new Lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gx;case"linkViaPopup":case"linkViaRedirect":return Yx;case"reauthViaPopup":case"reauthViaRedirect":return Qx;default:zt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new go(2e3,1e4);async function mO(t,e,n){const r=Xl(t);qD(t,e,Pf);const i=aE(r,n);return new ir(r,"signInViaPopup",e,i).executeNotNull()}class ir extends lE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xx.get())};e()}}ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="pendingRedirect",la=new Map;class Zx extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const r=await eP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eP(t,e){const n=rP(e),r=nP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tP(t,e){la.set(t._key(),e)}function nP(t){return Xt(t._redirectPersistence)}function rP(t){return aa(Jx,t.config.apiKey,t.name)}async function iP(t,e,n=!1){const r=Xl(t),i=aE(r,e),o=await new Zx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=10*60*1e3;class oP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sP&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e={}){return Ql(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cP=/^https?/;async function hP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lP(t);for(const n of e)try{if(dP(n))return}catch{}zt(t,"unauthorized-domain")}function dP(t){const e=Ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cP.test(n))return!1;if(uP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new go(3e4,6e4);function gg(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pP(t){return new Promise((e,n)=>{var r,i,s;function o(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),n(Ut(t,"network-request-failed"))},timeout:fP.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const a=qx("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},Wx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ua=null,e})}let ua=null;function mP(t){return ua=ua||pP(t),ua}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=new go(5e3,15e3),yP="__/auth/iframe",vP="emulator/auth/iframe",wP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SP(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rf(e,vP):`https://${t.config.authDomain}/${yP}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},i=EP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Js(r).slice(1)}`}async function IP(t){const e=await mP(t),n=Ft().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:SP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},gP.get());function l(){Ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_P=500,kP=600,CP="_blank",AP="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NP(t,e,n,r=_P,i=kP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=z1(u)?CP:n),B1(u)&&(e=e||AP,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(px(u)&&a!=="_self")return RP(e||"",a),new yg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new yg(h)}function RP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="__/auth/handler",xP="emulator/auth/handler";function vg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:i};if(e instanceof Pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",a_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof yo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${PP(t)}?${Js(a).slice(1)}`}function PP({config:t}){return t.emulator?Rf(t,xP):`https://${t.authDomain}/${DP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="webStorageSupport";class OP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=iP,this._overrideRedirectResult=tP}async _openPopup(e,n,r,i){var s;un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=vg(e,n,r,Ch(),i);return NP(e,o,Of())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Mx(vg(e,n,r,Ch(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IP(e),r=new oP(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yu];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G1()||xf()||Yl()}}const LP=OP;var wg="@firebase/auth",Eg="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bP(t){Vt(new Nt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q1(t)},c=new vx(a,l,u);return QD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vt(new Nt("auth-internal",e=>{const n=Xl(e.getProvider("auth").getImmediate());return(r=>new MP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(wg,Eg,$P(t)),pt(wg,Eg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=5*60,FP=Bv("authIdTokenMaxAge")||UP;let Sg=null;const VP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FP)return;const i=n==null?void 0:n.token;Sg!==i&&(Sg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jP(t=Ad()){const e=Cr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GD(t,{popupRedirectResolver:LP,persistence:[Hx,Px,nE]}),r=Bv("authTokenSyncURL");if(r){const s=VP(r);Ax(n,s,()=>s(n.currentUser)),Cx(n,o=>s(o))}const i=jv("auth");return i&&wx(n,`http://${i}`),n}bP("Browser");const BP={apiKey:"AIzaSyBQW8BHrhweij93RP-jif7FB0BJmWWe6yI",authDomain:"online-shop-25.firebaseapp.com",projectId:"online-shop-25",storageBucket:"online-shop-25.appspot.com",messagingSenderId:"445130183188",appId:"1:445130183188:web:ab69f3361f833528eecd01",measurementId:"G-T93XCFM44G"},cE=Qv(BP);LC(cE);const gO=RD(cE),hE=jP();hE.currentUser;const yO=new Wt;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function zP(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function HP(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wr=function(){return Wr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Wr.apply(this,arguments)},dE=function(t){return{loading:t==null,value:t}},KP=function(){return function(t,e){switch(e.type){case"error":return Wr(Wr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return dE(e.defaultValue);case"value":return Wr(Wr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},WP=function(t){var e=t?t():void 0,n=C.useReducer(KP(),dE(e)),r=n[0],i=n[1],s=C.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=C.useCallback(function(l){i({type:"error",error:l})},[]),a=C.useCallback(function(l){i({type:"value",value:l})},[]);return C.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},qP=function(t,e){var n=WP(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return C.useEffect(function(){var l=Nx(t,function(u){return zP(void 0,void 0,void 0,function(){var c;return HP(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};const GP="/online-shop/assets/logedOutProfileIcon-d865a437.png",QP="/online-shop/assets/logedInProfileIcon-59f87b6b.png",YP="/online-shop/assets/companyLogo-a2d24ab5.png",XP="/online-shop/assets/cartIcon-440718d0.png";const JP="/online-shop/assets/searchIcon-3cccc96a.png";function ZP(){const t=bv(),e=_d();let n="";const r=()=>{n=document.querySelector(".navBarSearchInput").value,n!==""&&t(`/catalog/${n}`)};return C.useEffect(()=>{e.pathname.indexOf("/catalog")===-1&&(document.querySelector(".navBarSearchInput").value="",n="")},[e]),j("div",{className:"searchBarContainer",children:Pt("div",{children:[j("input",{className:"navBarSearchInput",type:"text",placeholder:"Search for products...",onFocus:i=>{i.target.value=""}}),j("button",{onClick:r,type:"submit",children:j("img",{src:JP})})]})})}let Xu=!1;function eO(){let t=bv();const[e]=qP(hE);let n=GP;e&&(n=QP);const r=()=>{e||t("/login"),e&&t("/account")},i=()=>{Xu?(Xu=!1,document.querySelector(".menuContainer").classList.remove("open"),document.querySelector(".menuButton").classList.remove("active"),document.body.style.overflow="auto"):(Xu=!0,document.querySelector(".menuContainer").classList.add("open"),document.querySelector(".menuButton").classList.add("active"),document.body.style.overflow="hidden")};return C.useEffect(()=>{localStorage.getItem("cartNotification")==="true"&&document.querySelector(".navCartNotification").classList.add("active");const s=document.querySelector(".Navbar");let o=0,a=0,l=0;return window.addEventListener("scroll",u=>{o>document.documentElement.scrollTop&&(a=document.documentElement.scrollTop),o<document.documentElement.scrollTop&&(l=document.documentElement.scrollTop),l-a>=s.offsetHeight&&o>document.documentElement.scrollTop&&s.classList.contains("NavbarActive")&&s.classList.remove("NavbarActive"),l-a>=s.offsetHeight&&o<document.documentElement.scrollTop&&document.documentElement.scrollTop>s.offsetHeight&&s.classList.add("NavbarActive"),o=document.documentElement.scrollTop}),()=>{}},[]),Pt("div",{className:"Navbar",children:[Pt("div",{className:"navBarTop",children:[Pt("button",{className:"menuButton",onClick:i,children:[j("div",{className:"menuButtonRow1"}),j("div",{className:"menuButtonRow2"}),j("div",{className:"menuButtonRow3"})]}),Pt("div",{className:"menuContainer",children:[j("div",{className:"menuContainerShadow",onClick:i}),j("div",{className:"menuContainerContent"})]}),j("div",{className:"companyLogo",children:j("button",{onClick:()=>{t("/")},children:j("img",{src:YP})})}),Pt("div",{className:"navBtns",children:[j("div",{className:"accountBtn",children:j("button",{onClick:r,children:j("img",{src:n})})}),j("div",{className:"cartBtn",children:Pt("button",{onClick:()=>{t("/cart")},children:[j("div",{className:"navCartNotification"}),j("img",{src:XP})]})})]})]}),j(ZP,{})]})}function tO(){return j("footer",{className:"footer",children:"© 2023 dalVin"})}const nO=C.lazy(()=>Ii(()=>import("./homepage-e5f1c1f0.js"),["assets/homepage-e5f1c1f0.js","assets/Product-9ffc2b9c.js","assets/Product-c525706c.css","assets/filter-b435fde3.js","assets/homepage-765d2410.css"])),rO=C.lazy(()=>Ii(()=>import("./loginpage-aced08c7.js"),["assets/loginpage-aced08c7.js","assets/loginpage-694f2afc.css"])),iO=C.lazy(()=>Ii(()=>import("./accountpage-20949e27.js"),["assets/accountpage-20949e27.js","assets/accountpage-a6302aac.css"])),sO=C.lazy(()=>Ii(()=>import("./cartpage-3907cb76.js"),["assets/cartpage-3907cb76.js","assets/cartpage-0fa951fb.css"])),oO=C.lazy(()=>Ii(()=>import("./ProductScreen-fc7a1886.js"),["assets/ProductScreen-fc7a1886.js","assets/filter-b435fde3.js","assets/ProductScreen-9c823876.css"])),aO=C.lazy(()=>Ii(()=>import("./Catalog-06a5f3fc.js"),["assets/Catalog-06a5f3fc.js","assets/filter-b435fde3.js","assets/Product-9ffc2b9c.js","assets/Product-c525706c.css","assets/Catalog-48e56f1c.css"]));function lO(){return Pt(FE,{children:[j(eO,{}),Pt(jT,{children:[j(Qn,{path:"/",element:j(Wn.Suspense,{fallback:"Loading...",children:j(nO,{})})}),j(Qn,{path:"/login",element:Pt(Wn.Suspense,{fallback:"Loading...",children:[j(rO,{})," "]})}),j(Qn,{path:"/account",element:j(Wn.Suspense,{fallback:"Loading...",children:j(iO,{})})}),j(Qn,{path:"/cart",element:j(Wn.Suspense,{fallback:"Loading...",children:j(sO,{})})}),j(Qn,{path:"/product/:id",element:j(Wn.Suspense,{fallback:"Loading...",children:j(oO,{})})}),j(Qn,{path:"/catalog/:searchValue",element:j(Wn.Suspense,{fallback:"Loading...",children:j(aO,{})})})]}),j(tO,{})]})}Zu.createRoot(document.getElementById("root")).render(j(BT,{children:j(lO,{})}));export{FE as F,fO as J,dO as K,hO as Z,j as a,hE as b,pO as c,gO as d,qP as e,uO as f,Pt as j,yO as p,C as r,mO as s,bv as u};
