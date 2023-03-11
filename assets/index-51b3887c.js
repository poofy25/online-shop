function Lp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kr={},Up={get exports(){return kr},set exports(e){kr=e}},_o={},R={},Fp={get exports(){return R},set exports(e){R=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),zp=Symbol.for("react.portal"),$p=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),bp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Gp=Symbol.for("react.memo"),Kp=Symbol.for("react.lazy"),Zl=Symbol.iterator;function Qp(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Zc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Jc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=Kn.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Jc}var ba=ja.prototype=new ed;ba.constructor=ja;Xc(ba,Kn.prototype);ba.isPureReactComponent=!0;var eu=Array.isArray,td=Object.prototype.hasOwnProperty,Ha={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)td.call(t,r)&&!nd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qr,type:e,key:o,ref:s,props:i,_owner:Ha.current}}function qp(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function Yp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tu=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yp(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qr:case zp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+qo(s,0):r,eu(i)?(n="",e!=null&&(n=e.replace(tu,"$&/")+"/"),ki(i,t,n,"",function(u){return u})):i!=null&&(Va(i)&&(i=qp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",eu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+qo(o,a);s+=ki(o,t,n,l,i)}else if(l=Qp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+qo(o,a++),s+=ki(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Ci={transition:null},Xp={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Ha};L.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Kn;L.Fragment=$p;L.Profiler=jp;L.PureComponent=ja;L.StrictMode=Bp;L.Suspense=Wp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ha.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)td.call(t,l)&&!nd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:Hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bp,_context:e},e.Consumer=e};L.createElement=rd;L.createFactory=function(e){var t=rd.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Vp,render:e}};L.isValidElement=Va;L.lazy=function(e){return{$$typeof:Kp,_payload:{_status:-1,_result:e},_init:Jp}};L.memo=function(e,t){return{$$typeof:Gp,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return he.current.useCallback(e,t)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,t){return he.current.useEffect(e,t)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return he.current.useMemo(e,t)};L.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return he.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(Fp);const Zp=Mp(R),Ls=Lp({__proto__:null,default:Zp},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em=R,tm=Symbol.for("react.element"),nm=Symbol.for("react.fragment"),rm=Object.prototype.hasOwnProperty,im=em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,om={key:!0,ref:!0,__self:!0,__source:!0};function id(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)rm.call(t,r)&&!om.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tm,type:e,key:o,ref:s,props:i,_owner:im.current}}_o.Fragment=nm;_o.jsx=id;_o.jsxs=id;(function(e){e.exports=_o})(Up);const Bi=kr.Fragment,k=kr.jsx,Y=kr.jsxs;var Ms={},Us={},sm={get exports(){return Us},set exports(e){Us=e}},Te={},Fs={},am={get exports(){return Fs},set exports(e){Fs=e}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,A){var x=I.length;I.push(A);e:for(;0<x;){var K=x-1>>>1,Z=I[K];if(0<i(Z,A))I[K]=A,I[x]=Z,x=K;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],x=I.pop();if(x!==A){I[0]=x;e:for(var K=0,Z=I.length,ii=Z>>>1;K<ii;){var Ht=2*(K+1)-1,Qo=I[Ht],Vt=Ht+1,oi=I[Vt];if(0>i(Qo,x))Vt<Z&&0>i(oi,Qo)?(I[K]=oi,I[Vt]=x,K=Vt):(I[K]=Qo,I[Ht]=x,K=Ht);else if(Vt<Z&&0>i(oi,x))I[K]=oi,I[Vt]=x,K=Vt;else break e}}return A}function i(I,A){var x=I.sortIndex-A.sortIndex;return x!==0?x:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,m=3,g=!1,_=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=I)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function v(I){if(y=!1,h(I),!_)if(n(l)!==null)_=!0,Go(S);else{var A=n(u);A!==null&&Ko(v,A.startTime-I)}}function S(I,A){_=!1,y&&(y=!1,f(P),P=-1),g=!0;var x=m;try{for(h(A),p=n(l);p!==null&&(!(p.expirationTime>A)||I&&!Me());){var K=p.callback;if(typeof K=="function"){p.callback=null,m=p.priorityLevel;var Z=K(p.expirationTime<=A);A=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&r(l),h(A)}else r(l);p=n(l)}if(p!==null)var ii=!0;else{var Ht=n(u);Ht!==null&&Ko(v,Ht.startTime-A),ii=!1}return ii}finally{p=null,m=x,g=!1}}var C=!1,T=null,P=-1,$=5,D=-1;function Me(){return!(e.unstable_now()-D<$)}function Xn(){if(T!==null){var I=e.unstable_now();D=I;var A=!0;try{A=T(!0,I)}finally{A?Zn():(C=!1,T=null)}}else C=!1}var Zn;if(typeof c=="function")Zn=function(){c(Xn)};else if(typeof MessageChannel<"u"){var Xl=new MessageChannel,Dp=Xl.port2;Xl.port1.onmessage=Xn,Zn=function(){Dp.postMessage(null)}}else Zn=function(){N(Xn,0)};function Go(I){T=I,C||(C=!0,Zn())}function Ko(I,A){P=N(function(){I(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,Go(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var x=m;m=A;try{return I()}finally{m=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var x=m;m=I;try{return A()}finally{m=x}},e.unstable_scheduleCallback=function(I,A,x){var K=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?K+x:K):x=K,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=x+Z,I={id:d++,callback:A,priorityLevel:I,startTime:x,expirationTime:Z,sortIndex:-1},x>K?(I.sortIndex=x,t(u,I),n(l)===null&&I===n(u)&&(y?(f(P),P=-1):y=!0,Ko(v,x-K))):(I.sortIndex=Z,t(l,I),_||g||(_=!0,Go(S))),I},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(I){var A=m;return function(){var x=m;m=A;try{return I.apply(this,arguments)}finally{m=x}}}})(od);(function(e){e.exports=od})(am);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=R,Ce=Fs;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,Cr={};function hn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Cr[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},ru={};function um(e){return zs.call(ru,e)?!0:zs.call(nu,e)?!1:lm.test(e)?ru[e]=!0:(nu[e]=!0,!1)}function cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dm(e,t,n,r){if(t===null||typeof t>"u"||cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wa,Ga);oe[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wa,Ga);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wa,Ga);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dm(t,n,i,r)&&(n=null),r||i===null?um(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),$s=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ud=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),cd=Symbol.for("react.offscreen"),iu=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Yo;function lr(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Jo=!1;function Xo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function fm(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case $s:return"Profiler";case Qa:return"StrictMode";case Bs:return"Suspense";case js:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ud:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:bs(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return bs(e(t))}catch{}}return null}function hm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=pm(e))}function fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function Vs(e,t){hd(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(ur(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function pd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mm=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function vd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ys=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,xn=null,Dn=null;function uu(e){if(e=Jr(e)){if(typeof Js!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Co(t),Js(e.stateNode,e.type,t))}}function wd(e){xn?Dn?Dn.push(e):Dn=[e]:xn=e}function _d(){if(xn){var e=xn,t=Dn;if(Dn=xn=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function Sd(e,t){return e(t)}function Ed(){}var Zo=!1;function Id(e,t,n){if(Zo)return e(t,n);Zo=!0;try{return Sd(e,t,n)}finally{Zo=!1,(xn!==null||Dn!==null)&&(Ed(),_d())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Xs=!1;if(lt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Xs=!1}function vm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pr=!1,bi=null,Hi=!1,Zs=null,ym={onError:function(e){pr=!0,bi=e}};function wm(e,t,n,r,i,o,s,a,l){pr=!1,bi=null,vm.apply(ym,arguments)}function _m(e,t,n,r,i,o,s,a,l){if(wm.apply(this,arguments),pr){if(pr){var u=bi;pr=!1,bi=null}else throw Error(w(198));Hi||(Hi=!0,Zs=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(pn(e)!==e)throw Error(w(188))}function Sm(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Cd(e){return e=Sm(e),e!==null?Td(e):null}function Td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Td(e);if(t!==null)return t;e=e.sibling}return null}var Rd=Ce.unstable_scheduleCallback,du=Ce.unstable_cancelCallback,Em=Ce.unstable_shouldYield,Im=Ce.unstable_requestPaint,Q=Ce.unstable_now,km=Ce.unstable_getCurrentPriorityLevel,Xa=Ce.unstable_ImmediatePriority,Pd=Ce.unstable_UserBlockingPriority,Vi=Ce.unstable_NormalPriority,Cm=Ce.unstable_LowPriority,Nd=Ce.unstable_IdlePriority,So=null,Ge=null;function Tm(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Nm,Rm=Math.log,Pm=Math.LN2;function Nm(e){return e>>>=0,e===0?32:31-(Rm(e)/Pm|0)|0}var ci=64,di=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=cr(a):(o&=s,o!==0&&(r=cr(o)))}else s=n&~i,s!==0?r=cr(s):o!==0&&(r=cr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Be(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Om(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Od(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function xm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xd,el,Dd,Ld,Md,ta=!1,fi=[],Pt=null,Nt=null,Ot=null,Pr=new Map,Nr=new Map,_t=[],Dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&el(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lm(e,t,n,r,i){switch(t){case"focusin":return Pt=nr(Pt,e,t,n,r,i),!0;case"dragenter":return Nt=nr(Nt,e,t,n,r,i),!0;case"mouseover":return Ot=nr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pr.set(o,nr(Pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,nr(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ud(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=kd(n),t!==null){e.blockedOn=t,Md(e.priority,function(){Dd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ys=r,n.target.dispatchEvent(r),Ys=null}else return t=Jr(n),t!==null&&el(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Ti(e)&&n.delete(t)}function Mm(){ta=!1,Pt!==null&&Ti(Pt)&&(Pt=null),Nt!==null&&Ti(Nt)&&(Nt=null),Ot!==null&&Ti(Ot)&&(Ot=null),Pr.forEach(hu),Nr.forEach(hu)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Mm)))}function Or(e){function t(i){return rr(i,e)}if(0<fi.length){rr(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&rr(Pt,e),Nt!==null&&rr(Nt,e),Ot!==null&&rr(Ot,e),Pr.forEach(t),Nr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Ud(n),n.blockedOn===null&&_t.shift()}var Ln=pt.ReactCurrentBatchConfig,Gi=!0;function Um(e,t,n,r){var i=U,o=Ln.transition;Ln.transition=null;try{U=1,tl(e,t,n,r)}finally{U=i,Ln.transition=o}}function Fm(e,t,n,r){var i=U,o=Ln.transition;Ln.transition=null;try{U=4,tl(e,t,n,r)}finally{U=i,Ln.transition=o}}function tl(e,t,n,r){if(Gi){var i=na(e,t,n,r);if(i===null)cs(e,t,r,Ki,n),fu(e,r);else if(Lm(i,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Dm.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&xd(o),o=na(e,t,n,r),o===null&&cs(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else cs(e,t,r,null,n)}}var Ki=null;function na(e,t,n,r){if(Ki=null,e=Ja(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function Fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case Xa:return 1;case Pd:return 4;case Vi:case Cm:return 16;case Nd:return 536870912;default:return 16}default:return 16}}var Ct=null,nl=null,Ri=null;function zd(){if(Ri)return Ri;var e,t=nl,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function pu(){return!1}function Re(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:pu,this.isPropagationStopped=pu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Re(Qn),Yr=W({},Qn,{view:0,detail:0}),zm=Re(Yr),ts,ns,ir,Eo=W({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(ts=e.screenX-ir.screenX,ns=e.screenY-ir.screenY):ns=ts=0,ir=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),mu=Re(Eo),$m=W({},Eo,{dataTransfer:0}),Bm=Re($m),jm=W({},Yr,{relatedTarget:0}),rs=Re(jm),bm=W({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=Re(bm),Vm=W({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=Re(Vm),Gm=W({},Qn,{data:0}),gu=Re(Gm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qm[e])?!!t[e]:!1}function il(){return Ym}var Jm=W({},Yr,{key:function(e){if(e.key){var t=Km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=Re(Jm),Zm=W({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=Re(Zm),eg=W({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),tg=Re(eg),ng=W({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Re(ng),ig=W({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Re(ig),sg=[9,13,27,32],ol=lt&&"CompositionEvent"in window,mr=null;lt&&"documentMode"in document&&(mr=document.documentMode);var ag=lt&&"TextEvent"in window&&!mr,$d=lt&&(!ol||mr&&8<mr&&11>=mr),yu=String.fromCharCode(32),wu=!1;function Bd(e,t){switch(e){case"keyup":return sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function lg(e,t){switch(e){case"compositionend":return jd(t);case"keypress":return t.which!==32?null:(wu=!0,yu);case"textInput":return e=t.data,e===yu&&wu?null:e;default:return null}}function ug(e,t){if(_n)return e==="compositionend"||!ol&&Bd(e,t)?(e=zd(),Ri=nl=Ct=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $d&&t.locale!=="ko"?null:t.data;default:return null}}var cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cg[e.type]:t==="textarea"}function bd(e,t,n,r){wd(r),t=Qi(t,"onChange"),0<t.length&&(n=new rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Ar=null;function dg(e){Zd(e,0)}function Io(e){var t=In(e);if(fd(t))return e}function fg(e,t){if(e==="change")return t}var Hd=!1;if(lt){var is;if(lt){var os="oninput"in document;if(!os){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),os=typeof Su.oninput=="function"}is=os}else is=!1;Hd=is&&(!document.documentMode||9<document.documentMode)}function Eu(){gr&&(gr.detachEvent("onpropertychange",Vd),Ar=gr=null)}function Vd(e){if(e.propertyName==="value"&&Io(Ar)){var t=[];bd(t,Ar,e,Ja(e)),Id(dg,t)}}function hg(e,t,n){e==="focusin"?(Eu(),gr=t,Ar=n,gr.attachEvent("onpropertychange",Vd)):e==="focusout"&&Eu()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Ar)}function mg(e,t){if(e==="click")return Io(t)}function gg(e,t){if(e==="input"||e==="change")return Io(t)}function vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:vg;function xr(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zs.call(t,i)||!be(e[i],t[i]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yg(e){var t=Gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ku(n,o);var s=ku(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wg=lt&&"documentMode"in document&&11>=document.documentMode,Sn=null,ra=null,vr=null,ia=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||Sn==null||Sn!==ji(r)||(r=Sn,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&xr(vr,r)||(vr=r,r=Qi(ra,"onSelect"),0<r.length&&(t=new rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ss={},Kd={};lt&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ko(e){if(ss[e])return ss[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kd)return ss[e]=t[n];return e}var Qd=ko("animationend"),qd=ko("animationiteration"),Yd=ko("animationstart"),Jd=ko("transitionend"),Xd=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){Xd.set(e,t),hn(t,[e])}for(var as=0;as<Tu.length;as++){var ls=Tu[as],_g=ls.toLowerCase(),Sg=ls[0].toUpperCase()+ls.slice(1);Bt(_g,"on"+Sg)}Bt(Qd,"onAnimationEnd");Bt(qd,"onAnimationIteration");Bt(Yd,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Jd,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eg=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_m(r,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ru(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ru(i,a,u),o=l}}}if(Hi)throw e=Zs,Hi=!1,Zs=null,e}function B(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var r=e+"__bubble";n.has(r)||(ef(t,e,2,!1),n.add(r))}function us(e,t,n){var r=0;t&&(r|=4),ef(n,e,r,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[mi]){e[mi]=!0,ad.forEach(function(n){n!=="selectionchange"&&(Eg.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,us("selectionchange",!1,t))}}function ef(e,t,n,r){switch(Fd(t)){case 1:var i=Um;break;case 4:i=Fm;break;default:i=tl}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Id(function(){var u=o,d=Ja(n),p=[];e:{var m=Xd.get(e);if(m!==void 0){var g=rl,_=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":g=Xm;break;case"focusin":_="focus",g=rs;break;case"focusout":_="blur",g=rs;break;case"beforeblur":case"afterblur":g=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=tg;break;case Qd:case qd:case Yd:g=Hm;break;case Jd:g=rg;break;case"scroll":g=zm;break;case"wheel":g=og;break;case"copy":case"cut":case"paste":g=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vu}var y=(t&4)!==0,N=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,f!==null&&(v=Rr(c,f),v!=null&&y.push(Lr(c,v,h)))),N)break;c=c.return}0<y.length&&(m=new g(m,_,null,n,d),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Ys&&(_=n.relatedTarget||n.fromElement)&&(Qt(_)||_[ut]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Qt(_):null,_!==null&&(N=pn(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=mu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=vu,v="onPointerLeave",f="onPointerEnter",c="pointer"),N=g==null?m:In(g),h=_==null?m:In(_),m=new y(v,c+"leave",g,n,d),m.target=N,m.relatedTarget=h,v=null,Qt(d)===u&&(y=new y(f,c+"enter",_,n,d),y.target=h,y.relatedTarget=N,v=y),N=v,g&&_)t:{for(y=g,f=_,c=0,h=y;h;h=vn(h))c++;for(h=0,v=f;v;v=vn(v))h++;for(;0<c-h;)y=vn(y),c--;for(;0<h-c;)f=vn(f),h--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=vn(y),f=vn(f)}y=null}else y=null;g!==null&&Pu(p,m,g,y,!1),_!==null&&N!==null&&Pu(p,N,_,y,!0)}}e:{if(m=u?In(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=fg;else if(_u(m))if(Hd)S=gg;else{S=pg;var C=hg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=mg);if(S&&(S=S(e,u))){bd(p,S,n,d);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Ws(m,"number",m.value)}switch(C=u?In(u):window,e){case"focusin":(_u(C)||C.contentEditable==="true")&&(Sn=C,ra=u,vr=null);break;case"focusout":vr=ra=Sn=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,Cu(p,n,d);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Cu(p,n,d)}var T;if(ol)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _n?Bd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($d&&n.locale!=="ko"&&(_n||P!=="onCompositionStart"?P==="onCompositionEnd"&&_n&&(T=zd()):(Ct=d,nl="value"in Ct?Ct.value:Ct.textContent,_n=!0)),C=Qi(u,P),0<C.length&&(P=new gu(P,e,null,n,d),p.push({event:P,listeners:C}),T?P.data=T:(T=jd(n),T!==null&&(P.data=T)))),(T=ag?lg(e,n):ug(e,n))&&(u=Qi(u,"onBeforeInput"),0<u.length&&(d=new gu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}Zd(p,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Rr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Rr(n,o),l!=null&&s.unshift(Lr(n,l,a))):i||(l=Rr(n,o),l!=null&&s.push(Lr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ig=/\r\n?/g,kg=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(kg,"")}function gi(e,t,n){if(t=Nu(t),Nu(e)!==t&&n)throw Error(w(425))}function qi(){}var oa=null,sa=null;function aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var la=typeof setTimeout=="function"?setTimeout:void 0,Cg=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Rg)}:la;function Rg(e){setTimeout(function(){throw e})}function ds(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),We="__reactFiber$"+qn,Mr="__reactProps$"+qn,ut="__reactContainer$"+qn,ua="__reactEvents$"+qn,Pg="__reactListeners$"+qn,Ng="__reactHandles$"+qn;function Qt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[We])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[We]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Co(e){return e[Mr]||null}var ca=[],kn=-1;function jt(e){return{current:e}}function j(e){0>kn||(e.current=ca[kn],ca[kn]=null,kn--)}function z(e,t){kn++,ca[kn]=e.current,e.current=t}var $t={},ue=jt($t),ve=jt(!1),rn=$t;function Bn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Yi(){j(ve),j(ue)}function xu(e,t,n){if(ue.current!==$t)throw Error(w(168));z(ue,t),z(ve,n)}function tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,hm(e)||"Unknown",i));return W({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,rn=ue.current,z(ue,e),z(ve,ve.current),!0}function Du(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=tf(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,j(ve),j(ue),z(ue,e)):j(ve),z(ve,n)}var tt=null,To=!1,fs=!1;function nf(e){tt===null?tt=[e]:tt.push(e)}function Og(e){To=!0,nf(e)}function bt(){if(!fs&&tt!==null){fs=!0;var e=0,t=U;try{var n=tt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,To=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Rd(Xa,bt),i}finally{U=t,fs=!1}}return null}var Cn=[],Tn=0,Xi=null,Zi=0,Pe=[],Ne=0,on=null,rt=1,it="";function Wt(e,t){Cn[Tn++]=Zi,Cn[Tn++]=Xi,Xi=e,Zi=t}function rf(e,t,n){Pe[Ne++]=rt,Pe[Ne++]=it,Pe[Ne++]=on,on=e;var r=rt;e=it;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var o=32-Be(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-Be(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function al(e){e.return!==null&&(Wt(e,1),rf(e,1,0))}function ll(e){for(;e===Xi;)Xi=Cn[--Tn],Cn[Tn]=null,Zi=Cn[--Tn],Cn[Tn]=null;for(;e===on;)on=Pe[--Ne],Pe[Ne]=null,it=Pe[--Ne],Pe[Ne]=null,rt=Pe[--Ne],Pe[Ne]=null}var Ie=null,Ee=null,b=!1,$e=null;function of(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Ee=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Ee=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(b){var t=Ee;if(t){var n=t;if(!Lu(e,t)){if(da(e))throw Error(w(418));t=At(n.nextSibling);var r=Ie;t&&Lu(e,t)?of(r,n):(e.flags=e.flags&-4097|2,b=!1,Ie=e)}}else{if(da(e))throw Error(w(418));e.flags=e.flags&-4097|2,b=!1,Ie=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function vi(e){if(e!==Ie)return!1;if(!b)return Mu(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!aa(e.type,e.memoizedProps)),t&&(t=Ee)){if(da(e))throw sf(),Error(w(418));for(;t;)of(e,t),t=At(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ie?At(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=Ee;e;)e=At(e.nextSibling)}function jn(){Ee=Ie=null,b=!1}function ul(e){$e===null?$e=[e]:$e.push(e)}var Ag=pt.ReactCurrentBatchConfig;function Fe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var eo=jt(null),to=null,Rn=null,cl=null;function dl(){cl=Rn=to=null}function fl(e){var t=eo.current;j(eo),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){to=e,cl=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(to===null)throw Error(w(308));Rn=e,to.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var qt=null;function hl(e){qt===null?qt=[e]:qt.push(e)}function af(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}function Uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(m=t,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(g,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,m=typeof _=="function"?_.call(g,p,m):_,m==null)break e;p=W({},p,m);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=p}}function Fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var uf=new sd.Component().refs;function pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(je(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(je(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Lt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(je(t,e,r,n),Ni(t,e,r))}};function zu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,o):!0}function cf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=ye(t)?rn:ue.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=uf,pl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=ye(t)?rn:ue.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===uf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bu(e){var t=e._init;return t(e._payload)}function df(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function o(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,v){return c===null||c.tag!==6?(c=ws(h,f.mode,v),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,v){var S=h.type;return S===wn?d(f,c,h.props.children,v,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&Bu(S)===c.type)?(v=i(c,h.props),v.ref=or(f,c,h),v.return=f,v):(v=Mi(h.type,h.key,h.props,null,f.mode,v),v.ref=or(f,c,h),v.return=f,v)}function u(f,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=_s(h,f.mode,v),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function d(f,c,h,v,S){return c===null||c.tag!==7?(c=en(h,f.mode,v,S),c.return=f,c):(c=i(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ws(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ai:return h=Mi(c.type,c.key,c.props,null,f.mode,h),h.ref=or(f,null,c),h.return=f,h;case yn:return c=_s(c,f.mode,h),c.return=f,c;case yt:var v=c._init;return p(f,v(c._payload),h)}if(ur(c)||er(c))return c=en(c,f.mode,h,null),c.return=f,c;yi(f,c)}return null}function m(f,c,h,v){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(f,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ai:return h.key===S?l(f,c,h,v):null;case yn:return h.key===S?u(f,c,h,v):null;case yt:return S=h._init,m(f,c,S(h._payload),v)}if(ur(h)||er(h))return S!==null?null:d(f,c,h,v,null);yi(f,h)}return null}function g(f,c,h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(h)||null,a(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:return f=f.get(v.key===null?h:v.key)||null,l(c,f,v,S);case yn:return f=f.get(v.key===null?h:v.key)||null,u(c,f,v,S);case yt:var C=v._init;return g(f,c,h,C(v._payload),S)}if(ur(v)||er(v))return f=f.get(h)||null,d(c,f,v,S,null);yi(c,v)}return null}function _(f,c,h,v){for(var S=null,C=null,T=c,P=c=0,$=null;T!==null&&P<h.length;P++){T.index>P?($=T,T=null):$=T.sibling;var D=m(f,T,h[P],v);if(D===null){T===null&&(T=$);break}e&&T&&D.alternate===null&&t(f,T),c=o(D,c,P),C===null?S=D:C.sibling=D,C=D,T=$}if(P===h.length)return n(f,T),b&&Wt(f,P),S;if(T===null){for(;P<h.length;P++)T=p(f,h[P],v),T!==null&&(c=o(T,c,P),C===null?S=T:C.sibling=T,C=T);return b&&Wt(f,P),S}for(T=r(f,T);P<h.length;P++)$=g(T,f,P,h[P],v),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?P:$.key),c=o($,c,P),C===null?S=$:C.sibling=$,C=$);return e&&T.forEach(function(Me){return t(f,Me)}),b&&Wt(f,P),S}function y(f,c,h,v){var S=er(h);if(typeof S!="function")throw Error(w(150));if(h=S.call(h),h==null)throw Error(w(151));for(var C=S=null,T=c,P=c=0,$=null,D=h.next();T!==null&&!D.done;P++,D=h.next()){T.index>P?($=T,T=null):$=T.sibling;var Me=m(f,T,D.value,v);if(Me===null){T===null&&(T=$);break}e&&T&&Me.alternate===null&&t(f,T),c=o(Me,c,P),C===null?S=Me:C.sibling=Me,C=Me,T=$}if(D.done)return n(f,T),b&&Wt(f,P),S;if(T===null){for(;!D.done;P++,D=h.next())D=p(f,D.value,v),D!==null&&(c=o(D,c,P),C===null?S=D:C.sibling=D,C=D);return b&&Wt(f,P),S}for(T=r(f,T);!D.done;P++,D=h.next())D=g(T,f,P,D.value,v),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?P:D.key),c=o(D,c,P),C===null?S=D:C.sibling=D,C=D);return e&&T.forEach(function(Xn){return t(f,Xn)}),b&&Wt(f,P),S}function N(f,c,h,v){if(typeof h=="object"&&h!==null&&h.type===wn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ai:e:{for(var S=h.key,C=c;C!==null;){if(C.key===S){if(S=h.type,S===wn){if(C.tag===7){n(f,C.sibling),c=i(C,h.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&Bu(S)===C.type){n(f,C.sibling),c=i(C,h.props),c.ref=or(f,C,h),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===wn?(c=en(h.props.children,f.mode,v,h.key),c.return=f,f=c):(v=Mi(h.type,h.key,h.props,null,f.mode,v),v.ref=or(f,c,h),v.return=f,f=v)}return s(f);case yn:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=_s(h,f.mode,v),c.return=f,f=c}return s(f);case yt:return C=h._init,N(f,c,C(h._payload),v)}if(ur(h))return _(f,c,h,v);if(er(h))return y(f,c,h,v);yi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=ws(h,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return N}var bn=df(!0),ff=df(!1),Xr={},Ke=jt(Xr),Ur=jt(Xr),Fr=jt(Xr);function Yt(e){if(e===Xr)throw Error(w(174));return e}function ml(e,t){switch(z(Fr,t),z(Ur,e),z(Ke,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ks(t,e)}j(Ke),z(Ke,t)}function Hn(){j(Ke),j(Ur),j(Fr)}function hf(e){Yt(Fr.current);var t=Yt(Ke.current),n=Ks(t,e.type);t!==n&&(z(Ur,e),z(Ke,n))}function gl(e){Ur.current===e&&(j(Ke),j(Ur))}var H=jt(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hs=[];function vl(){for(var e=0;e<hs.length;e++)hs[e]._workInProgressVersionPrimary=null;hs.length=0}var Oi=pt.ReactCurrentDispatcher,ps=pt.ReactCurrentBatchConfig,sn=0,V=null,J=null,ee=null,io=!1,yr=!1,zr=0,xg=0;function se(){throw Error(w(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function wl(e,t,n,r,i,o){if(sn=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?Ug:Fg,e=n(r,i),yr){o=0;do{if(yr=!1,zr=0,25<=o)throw Error(w(301));o+=1,ee=J=null,t.updateQueue=null,Oi.current=zg,e=n(r,i)}while(yr)}if(Oi.current=oo,t=J!==null&&J.next!==null,sn=0,ee=J=V=null,io=!1,t)throw Error(w(300));return e}function _l(){var e=zr!==0;return zr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(J===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function $r(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,V.lanes|=d,an|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,an|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);be(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pf(){}function mf(e,t){var n=V,r=Le(),i=t(),o=!be(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,Sl(yf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Br(9,vf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(w(349));sn&30||gf(n,t,i)}return i}function gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vf(e,t,n,r){t.value=n,t.getSnapshot=r,wf(t)&&_f(e)}function yf(e,t,n){return n(function(){wf(t)&&_f(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function _f(e){var t=ct(e,1);t!==null&&je(t,e,1,-1)}function ju(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Mg.bind(null,V,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sf(){return Le().memoizedState}function Ai(e,t,n,r){var i=Ve();V.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&yl(r,s.deps)){i.memoizedState=Br(t,n,o,r);return}}V.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function bu(e,t){return Ai(8390656,8,e,t)}function Sl(e,t){return Po(2048,8,e,t)}function Ef(e,t){return Po(4,2,e,t)}function If(e,t){return Po(4,4,e,t)}function kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,kf.bind(null,t,e),n)}function El(){}function Tf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pf(e,t,n){return sn&21?(be(n,t)||(n=Od(),V.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Dg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ps.transition;ps.transition={};try{e(!1),t()}finally{U=n,ps.transition=r}}function Nf(){return Le().memoizedState}function Lg(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Of(e))Af(t,n);else if(n=af(e,t,n,r),n!==null){var i=fe();je(n,e,r,i),xf(n,t,r)}}function Mg(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Of(e))Af(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,be(a,s)){var l=t.interleaved;l===null?(i.next=i,hl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=af(e,t,i,r),n!==null&&(i=fe(),je(n,e,r,i),xf(n,t,r))}}function Of(e){var t=e.alternate;return e===V||t!==null&&t===V}function Af(e,t){yr=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}var oo={readContext:De,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Ug={readContext:De,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lg.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:ju,useDebugValue:El,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=ju(!1),t=e[0];return e=Dg.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=Ve();if(b){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));sn&30||gf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bu(yf.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,vf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if(b){var n=it,r=rt;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fg={readContext:De,useCallback:Tf,useContext:De,useEffect:Sl,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:If,useMemo:Rf,useReducer:ms,useRef:Sf,useState:function(){return ms($r)},useDebugValue:El,useDeferredValue:function(e){var t=Le();return Pf(t,J.memoizedState,e)},useTransition:function(){var e=ms($r)[0],t=Le().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:mf,useId:Nf,unstable_isNewReconciler:!1},zg={readContext:De,useCallback:Tf,useContext:De,useEffect:Sl,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:If,useMemo:Rf,useReducer:gs,useRef:Sf,useState:function(){return gs($r)},useDebugValue:El,useDeferredValue:function(e){var t=Le();return J===null?t.memoizedState=e:Pf(t,J.memoizedState,e)},useTransition:function(){var e=gs($r)[0],t=Le().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:mf,useId:Nf,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=fm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function Df(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ao||(ao=!0,Ta=r),ga(e,t)},n}function Lf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $g;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Zg.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Bg=pt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?ff(t,null,n,r):bn(t,e.child,n,r)}function Gu(e,t,n,r,i){n=n.render;var o=t.ref;return Mn(t,i),r=wl(e,t,n,r,o,i),n=_l(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(b&&n&&al(t),t.flags|=1,de(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ol(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mf(e,t,o,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xr(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,dt(e,t,i)}return va(e,t,n,r,i)}function Uf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Nn,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Nn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Nn,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Nn,Se),Se|=r;return de(e,t,i,n),t.child}function Ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,r,i){var o=ye(n)?rn:ue.current;return o=Bn(t,o),Mn(t,i),n=wl(e,t,n,r,o,i),r=_l(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(b&&r&&al(t),t.flags|=1,de(e,t,n,i),t.child)}function Qu(e,t,n,r,i){if(ye(n)){var o=!0;Ji(t)}else o=!1;if(Mn(t,i),t.stateNode===null)xi(e,t),cf(t,n,r),ma(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=ye(n)?rn:ue.current,u=Bn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$u(t,s,r,u),wt=!1;var m=t.memoizedState;s.state=m,no(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ve.current||wt?(typeof d=="function"&&(pa(t,n,d,r),l=t.memoizedState),(a=wt||zu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Fe(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=De(l):(l=ye(n)?rn:ue.current,l=Bn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&$u(t,s,r,l),wt=!1,m=t.memoizedState,s.state=m,no(t,r,s,i);var _=t.memoizedState;a!==p||m!==_||ve.current||wt?(typeof g=="function"&&(pa(t,n,g,r),_=t.memoizedState),(u=wt||zu(t,n,u,r,m,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ya(e,t,n,r,o,i)}function ya(e,t,n,r,i,o){Ff(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Du(t,n,!1),dt(e,t,o);r=t.stateNode,Bg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bn(t,e.child,null,o),t.child=bn(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,i&&Du(t,n,!0),t.child}function zf(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),ml(e,t.containerInfo)}function qu(e,t,n,r,i){return jn(),ul(i),t.flags|=256,de(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function $f(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(H,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ao(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_a(n),t.memoizedState=wa,e):Il(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?_a(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Il(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&ul(r),bn(t,e.child,null,n),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=vs(Error(w(422))),wi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ao({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bn(t,e.child,null,s),t.child.memoizedState=_a(s),t.memoizedState=wa,o);if(!(t.mode&1))return wi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=vs(o,r,void 0),wi(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),je(r,e,i,-1))}return Nl(),r=vs(Error(w(421))),wi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ev.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=At(i.nextSibling),Ie=t,b=!0,$e=null,e!==null&&(Pe[Ne++]=rt,Pe[Ne++]=it,Pe[Ne++]=on,rt=e.id,it=e.overflow,on=t),t=Il(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function ys(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ys(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ys(t,!0,n,null,o);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bg(e,t,n){switch(t.tag){case 3:zf(t),jn();break;case 5:hf(t);break;case 1:ye(t.type)&&Ji(t);break;case 4:ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?$f(e,t,n):(z(H,H.current&1),e=dt(e,t,n),e!==null?e.sibling:null);z(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Uf(e,t,n)}return dt(e,t,n)}var jf,Sa,bf,Hf;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};bf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(Ke.current);var o=null;switch(n){case"input":i=Hs(e,i),r=Hs(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=Gs(e,i),r=Gs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qi)}Qs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Hf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hg(e,t,n){var r=t.pendingProps;switch(ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&Yi(),ae(t),null;case 3:return r=t.stateNode,Hn(),j(ve),j(ue),vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Na($e),$e=null))),Sa(e,t),ae(t),null;case 5:gl(t);var i=Yt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)bf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Yt(Ke.current),vi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)B(dr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ou(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":au(r,o),B("invalid",r)}Qs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,a,e),i=["children",""+a]):Cr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":li(r),su(r,o,!0);break;case"textarea":li(r),lu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[Mr]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(s=qs(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)B(dr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":ou(e,r),i=Hs(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":au(e,r),i=Gs(e,r),B("invalid",e);break;default:i=r}Qs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tr(e,l):typeof l=="number"&&Tr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",e):l!=null&&Ka(e,o,l,s))}switch(n){case"input":li(e),su(e,r,!1);break;case"textarea":li(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?An(e,!!r.multiple,o,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Hf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Yt(Fr.current),Yt(Ke.current),vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(j(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Ee!==null&&t.mode&1&&!(t.flags&128))sf(),jn(),t.flags|=98560,o=!1;else if(o=vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[We]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else $e!==null&&(Na($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?X===0&&(X=3):Nl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Hn(),Sa(e,t),e===null&&Dr(t.stateNode.containerInfo),ae(t),null;case 10:return fl(t.type._context),ae(t),null;case 17:return ye(t.type)&&Yi(),ae(t),null;case 19:if(j(H),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ro(e),s!==null){for(t.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Wn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ro(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!b)return ae(t),null}else 2*Q()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=H.current,z(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Vg(e,t){switch(ll(t),t.tag){case 1:return ye(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),j(ve),j(ue),vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gl(t),null;case 13:if(j(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(H),null;case 4:return Hn(),null;case 10:return fl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var _i=!1,le=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,E=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Ea(e,t,n){try{n()}catch(r){G(e,t,r)}}var Ju=!1;function Gg(e,t){if(oa=Gi,e=Gd(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sa={focusedElem:e,selectionRange:n},Gi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,N=_.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Fe(t.type,y),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return _=Ju,Ju=!1,_}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ea(t,n,o)}i=i.next}while(i!==r)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Mr],delete t[ua],delete t[Pg],delete t[Ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var re=null,ze=!1;function gt(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:le||Pn(n,t);case 6:var r=re,i=ze;re=null,gt(e,t,n),re=r,ze=i,re!==null&&(ze?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(ze?(e=re,n=n.stateNode,e.nodeType===8?ds(e.parentNode,n):e.nodeType===1&&ds(e,n),Or(e)):ds(re,n.stateNode));break;case 4:r=re,i=ze,re=n.stateNode.containerInfo,ze=!0,gt(e,t,n),re=r,ze=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ea(n,t,s),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!le&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,gt(e,t,n),le=r):gt(e,t,n);break;default:gt(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wg),t.forEach(function(r){var i=tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,ze=!1;break e;case 3:re=a.stateNode.containerInfo,ze=!0;break e;case 4:re=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(re===null)throw Error(w(160));Gf(o,s,i),re=null,ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}function Kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),He(e),r&4){try{wr(3,e,e.return),No(3,e)}catch(y){G(e,e.return,y)}try{wr(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Ue(t,e),He(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Ue(t,e),He(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Tr(i,"")}catch(y){G(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hd(i,o),qs(a,s);var u=qs(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?yd(i,p):d==="dangerouslySetInnerHTML"?gd(i,p):d==="children"?Tr(i,p):Ka(i,d,p,u)}switch(a){case"input":Vs(i,o);break;case"textarea":pd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?An(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?An(i,!!o.multiple,o.defaultValue,!0):An(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(y){G(e,e.return,y)}}break;case 6:if(Ue(t,e),He(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(Ue(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Ue(t,e),He(e);break;case 13:Ue(t,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=Q())),r&4&&Zu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||d,Ue(t,e),le=u):Ue(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(p=E=d;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:wr(4,m,m.return);break;case 1:Pn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:Pn(m,m.return);break;case 22:if(m.memoizedState!==null){tc(p);continue}}g!==null?(g.return=m,E=g):tc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vd("display",s))}catch(y){G(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){G(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ue(t,e),He(e),r&4&&Zu(e);break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tr(i,""),r.flags&=-33);var o=Xu(e);Ca(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xu(e);ka(e,a,s);break;default:throw Error(w(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kg(e,t,n){E=e,Qf(e)}function Qf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_i;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=_i;var u=le;if(_i=s,(le=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?nc(i):l!==null?(l.return=s,E=l):nc(i);for(;o!==null;)E=o,Qf(o),o=o.sibling;E=i,_i=a,le=u}ec(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):ec(e)}}function ec(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||No(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Ia(t)}catch(m){G(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function tc(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function nc(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{No(4,t)}catch(l){G(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){G(t,i,l)}}var o=t.return;try{Ia(t)}catch(l){G(t,o,l)}break;case 5:var s=t.return;try{Ia(t)}catch(l){G(t,s,l)}}}catch(l){G(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Qg=Math.ceil,so=pt.ReactCurrentDispatcher,kl=pt.ReactCurrentOwner,Ae=pt.ReactCurrentBatchConfig,M=0,te=null,q=null,ie=0,Se=0,Nn=jt(0),X=0,jr=null,an=0,Oo=0,Cl=0,_r=null,me=null,Tl=0,Wn=1/0,et=null,ao=!1,Ta=null,Dt=null,Si=!1,Tt=null,lo=0,Sr=0,Ra=null,Di=-1,Li=0;function fe(){return M&6?Q():Di!==-1?Di:Di=Q()}function Lt(e){return e.mode&1?M&2&&ie!==0?ie&-ie:Ag.transition!==null?(Li===0&&(Li=Od()),Li):(e=U,e!==0||(e=window.event,e=e===void 0?16:Fd(e.type)),e):1}function je(e,t,n,r){if(50<Sr)throw Sr=0,Ra=null,Error(w(185));qr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Oo|=n),X===4&&St(e,ie)),we(e,r),n===1&&M===0&&!(t.mode&1)&&(Wn=Q()+500,To&&bt()))}function we(e,t){var n=e.callbackNode;Am(e,t);var r=Wi(e,e===te?ie:0);if(r===0)n!==null&&du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&du(n),t===1)e.tag===0?Og(rc.bind(null,e)):nf(rc.bind(null,e)),Tg(function(){!(M&6)&&bt()}),n=null;else{switch(Ad(r)){case 1:n=Xa;break;case 4:n=Pd;break;case 16:n=Vi;break;case 536870912:n=Nd;break;default:n=Vi}n=nh(n,qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qf(e,t){if(Di=-1,Li=0,M&6)throw Error(w(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Wi(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uo(e,r);else{t=r;var i=M;M|=2;var o=Jf();(te!==e||ie!==t)&&(et=null,Wn=Q()+500,Zt(e,t));do try{Jg();break}catch(a){Yf(e,a)}while(1);dl(),so.current=o,M=i,q!==null?t=0:(te=null,ie=0,t=X)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=jr,Zt(e,0),St(e,r),we(e,Q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!qg(i)&&(t=uo(e,r),t===2&&(o=ea(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=jr,Zt(e,0),St(e,r),we(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Gt(e,me,et);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Tl+500-Q(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=la(Gt.bind(null,e,me,et),t);break}Gt(e,me,et);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Be(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qg(r/1960))-r,10<r){e.timeoutHandle=la(Gt.bind(null,e,me,et),r);break}Gt(e,me,et);break;case 5:Gt(e,me,et);break;default:throw Error(w(329))}}}return we(e,Q()),e.callbackNode===n?qf.bind(null,e):null}function Pa(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=uo(e,t),e!==2&&(t=me,me=n,t!==null&&Na(t)),e}function Na(e){me===null?me=e:me.push.apply(me,e)}function qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Cl,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(M&6)throw Error(w(327));Un();var t=Wi(e,0);if(!(t&1))return we(e,Q()),null;var n=uo(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=jr,Zt(e,0),St(e,t),we(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,me,et),we(e,Q()),null}function Rl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Wn=Q()+500,To&&bt())}}function ln(e){Tt!==null&&Tt.tag===0&&!(M&6)&&Un();var t=M;M|=1;var n=Ae.transition,r=U;try{if(Ae.transition=null,U=1,e)return e()}finally{U=r,Ae.transition=n,M=t,!(M&6)&&bt()}}function Pl(){Se=Nn.current,j(Nn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cg(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Hn(),j(ve),j(ue),vl();break;case 5:gl(r);break;case 4:Hn();break;case 13:j(H);break;case 19:j(H);break;case 10:fl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(te=e,q=e=Mt(e.current,null),ie=Se=t,X=0,jr=null,Cl=Oo=an=0,me=_r=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qt=null}return e}function Yf(e,t){do{var n=q;try{if(dl(),Oi.current=oo,io){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}io=!1}if(sn=0,ee=J=V=null,yr=!1,zr=0,kl.current=null,n===null||n.return===null){X=1,jr=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Vu(s);if(g!==null){g.flags&=-257,Wu(g,s,a,o,t),g.mode&1&&Hu(o,u,t),t=g,l=u;var _=t.updateQueue;if(_===null){var y=new Set;y.add(l),t.updateQueue=y}else _.add(l);break e}else{if(!(t&1)){Hu(o,u,t),Nl();break e}l=Error(w(426))}}else if(b&&a.mode&1){var N=Vu(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Wu(N,s,a,o,t),ul(Vn(l,a));break e}}o=l=Vn(l,a),X!==4&&(X=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Df(o,l,t);Uu(o,f);break e;case 1:a=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Lf(o,a,t);Uu(o,v);break e}}o=o.return}while(o!==null)}Zf(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Jf(){var e=so.current;return so.current=oo,e===null?oo:e}function Nl(){(X===0||X===3||X===2)&&(X=4),te===null||!(an&268435455)&&!(Oo&268435455)||St(te,ie)}function uo(e,t){var n=M;M|=2;var r=Jf();(te!==e||ie!==t)&&(et=null,Zt(e,t));do try{Yg();break}catch(i){Yf(e,i)}while(1);if(dl(),M=n,so.current=r,q!==null)throw Error(w(261));return te=null,ie=0,X}function Yg(){for(;q!==null;)Xf(q)}function Jg(){for(;q!==null&&!Em();)Xf(q)}function Xf(e){var t=th(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Zf(e):q=t,kl.current=null}function Zf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vg(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=Hg(n,t,Se),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Gt(e,t,n){var r=U,i=Ae.transition;try{Ae.transition=null,U=1,Xg(e,t,n,r)}finally{Ae.transition=i,U=r}return null}function Xg(e,t,n,r){do Un();while(Tt!==null);if(M&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xm(e,o),e===te&&(q=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,nh(Vi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var s=U;U=1;var a=M;M|=4,kl.current=null,Gg(e,n),Kf(n,e),yg(sa),Gi=!!oa,sa=oa=null,e.current=n,Kg(n),Im(),M=a,U=s,Ae.transition=o}else e.current=n;if(Si&&(Si=!1,Tt=e,lo=i),o=e.pendingLanes,o===0&&(Dt=null),Tm(n.stateNode),we(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ao)throw ao=!1,e=Ta,Ta=null,e;return lo&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===Ra?Sr++:(Sr=0,Ra=e):Sr=0,bt(),null}function Un(){if(Tt!==null){var e=Ad(lo),t=Ae.transition,n=U;try{if(Ae.transition=null,U=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,lo=0,M&6)throw Error(w(331));var i=M;for(M|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:wr(8,d,o)}var p=d.child;if(p!==null)p.return=d,E=p;else for(;E!==null;){d=E;var m=d.sibling,g=d.return;if(Vf(d),d===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){s=E;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,E=h;else e:for(s=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:No(9,a)}}catch(S){G(a,a.return,S)}if(a===s){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(M=i,bt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{U=n,Ae.transition=t}}return!1}function ic(e,t,n){t=Vn(n,t),t=Df(e,t,1),e=xt(e,t,1),t=fe(),e!==null&&(qr(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Vn(n,e),e=Lf(t,e,1),t=xt(t,e,1),e=fe(),t!==null&&(qr(t,1,e),we(t,e));break}}t=t.return}}function Zg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ie&n)===n&&(X===4||X===3&&(ie&130023424)===ie&&500>Q()-Tl?Zt(e,0):Cl|=n),we(e,t)}function eh(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var n=fe();e=ct(e,t),e!==null&&(qr(e,t,n),we(e,n))}function ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eh(e,n)}function tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),eh(e,n)}var th;th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,bg(e,t,n);ge=!!(e.flags&131072)}else ge=!1,b&&t.flags&1048576&&rf(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var i=Bn(t,ue.current);Mn(t,n),i=wl(null,t,r,e,i,n);var o=_l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,Ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pl(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,ma(t,r,e,n),t=ya(null,t,r,!0,o,n)):(t.tag=0,b&&o&&al(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rv(r),e=Fe(r,e),i){case 0:t=va(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,Fe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Qu(e,t,r,i,n);case 3:e:{if(zf(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lf(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(w(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(w(424)),t),t=qu(e,t,r,n,i);break e}else for(Ee=At(t.stateNode.containerInfo.firstChild),Ie=t,b=!0,$e=null,n=ff(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===i){t=dt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return hf(t),e===null&&fa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,aa(r,i)?s=null:o!==null&&aa(r,o)&&(t.flags|=32),Ff(e,t),de(e,t,s,n),t.child;case 6:return e===null&&fa(t),null;case 13:return $f(e,t,n);case 4:return ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Gu(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(eo,r._currentValue),r._currentValue=s,o!==null)if(be(o.value,s)){if(o.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ha(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ha(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mn(t,n),i=De(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),Ku(e,t,r,i,n);case 15:return Mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),xi(e,t),t.tag=1,ye(r)?(e=!0,Ji(t)):e=!1,Mn(t,n),cf(t,r,i),ma(t,r,i,n),ya(null,t,r,!0,e,n);case 19:return Bf(e,t,n);case 22:return Uf(e,t,n)}throw Error(w(156,t.tag))};function nh(e,t){return Rd(e,t)}function nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new nv(e,t,n,r)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rv(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Ya)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ol(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return en(n.children,i,o,t);case Qa:s=8,i|=8;break;case $s:return e=Oe(12,n,t,i|2),e.elementType=$s,e.lanes=o,e;case Bs:return e=Oe(13,n,t,i),e.elementType=Bs,e.lanes=o,e;case js:return e=Oe(19,n,t,i),e.elementType=js,e.lanes=o,e;case cd:return Ao(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:s=10;break e;case ud:s=9;break e;case qa:s=11;break e;case Ya:s=14;break e;case yt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Oe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=cd,e.lanes=n,e.stateNode={isHidden:!1},e}function ws(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function _s(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Al(e,t,n,r,i,o,s,a,l){return e=new iv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Oe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(o),e}function ov(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rh(e){if(!e)return $t;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return tf(e,n,t)}return t}function ih(e,t,n,r,i,o,s,a,l){return e=Al(n,r,!0,e,i,o,s,a,l),e.context=rh(null),n=e.current,r=fe(),i=Lt(n),o=at(r,i),o.callback=t??null,xt(n,o,i),e.current.lanes=i,qr(e,i,r),we(e,r),e}function xo(e,t,n,r){var i=t.current,o=fe(),s=Lt(i);return n=rh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,s),e!==null&&(je(e,i,s,o),Ni(e,i,s)),s}function co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xl(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function sv(){return null}var oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dl(e){this._internalRoot=e}Do.prototype.render=Dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));xo(e,t,null,null)};Do.prototype.unmount=Dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){xo(null,e,null,null)}),t[ut]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Ud(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function av(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=co(s);o.call(u)}}var s=ih(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=s,e[ut]=s.current,Dr(e.nodeType===8?e.parentNode:e),ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=co(l);a.call(u)}}var l=Al(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=l,e[ut]=l.current,Dr(e.nodeType===8?e.parentNode:e),ln(function(){xo(t,l,n,r)}),l}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=co(s);a.call(l)}}xo(t,s,e,i)}else s=av(n,t,e,i,r);return co(s)}xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(Za(t,n|1),we(t,Q()),!(M&6)&&(Wn=Q()+500,bt()))}break;case 13:ln(function(){var r=ct(e,1);if(r!==null){var i=fe();je(r,e,1,i)}}),xl(e,1)}};el=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=fe();je(t,e,134217728,n)}xl(e,134217728)}};Dd=function(e){if(e.tag===13){var t=Lt(e),n=ct(e,t);if(n!==null){var r=fe();je(n,e,t,r)}xl(e,t)}};Ld=function(){return U};Md=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Js=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Co(r);if(!i)throw Error(w(90));fd(r),Vs(r,i)}}}break;case"textarea":pd(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};Sd=Rl;Ed=ln;var lv={usingClientEntryPoint:!1,Events:[Jr,In,Co,wd,_d,Rl]},ar={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uv={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{So=Ei.inject(uv),Ge=Ei}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(t))throw Error(w(200));return ov(e,t,null,n)};Te.createRoot=function(e,t){if(!Ll(e))throw Error(w(299));var n=!1,r="",i=oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Al(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Dl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Cd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return ln(e)};Te.hydrate=function(e,t,n){if(!Lo(t))throw Error(w(200));return Mo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ll(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=oh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ih(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Do(t)};Te.render=function(e,t,n){if(!Lo(t))throw Error(w(200));return Mo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(w(40));return e._reactRootContainer?(ln(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=Rl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Mo(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Te})(sm);var ac=Us;Ms.createRoot=ac.createRoot,Ms.hydrateRoot=ac.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const lc="popstate";function cv(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=mn(i.location.hash.substr(1));return Oa("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:sh(o))}function r(i,o){dv(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return hv(t,n,r,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fv(){return Math.random().toString(36).substr(2,8)}function uc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mn(t):t,{state:n,key:t&&t.key||r||fv()})}function sh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Rt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(br({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=Rt.Pop;let N=d(),f=N==null?null:N-u;u=N,l&&l({action:a,location:y.location,delta:f})}function m(N,f){a=Rt.Push;let c=Oa(y.location,N,f);n&&n(c,N),u=d()+1;let h=uc(c,u),v=y.createHref(c);try{s.pushState(h,"",v)}catch{i.location.assign(v)}o&&l&&l({action:a,location:y.location,delta:1})}function g(N,f){a=Rt.Replace;let c=Oa(y.location,N,f);n&&n(c,N),u=d();let h=uc(c,u),v=y.createHref(c);s.replaceState(h,"",v),o&&l&&l({action:a,location:y.location,delta:0})}function _(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof N=="string"?N:sh(N);return ne(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let y={get action(){return a},get location(){return e(i,s)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lc,p),l=N,()=>{i.removeEventListener(lc,p),l=null}},createHref(N){return t(i,N)},createURL:_,encodeLocation(N){let f=_(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(N){return s.go(N)}};return y}var cc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cc||(cc={}));function pv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mn(t):t,i=uh(r.pathname||"/",n);if(i==null)return null;let o=ah(e);mv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=kv(o[a],Rv(i));return s}function ah(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ah(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ev(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of lh(o.path))i(o,s,l)}),t}function lh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Iv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gv=/^:\w+$/,vv=3,yv=2,wv=1,_v=10,Sv=-2,dc=e=>e==="*";function Ev(e,t){let n=e.split("/"),r=n.length;return n.some(dc)&&(r+=Sv),t&&(r+=yv),n.filter(i=>!dc(i)).reduce((i,o)=>i+(gv.test(o)?vv:o===""?wv:_v),r)}function Iv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function kv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Cv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:tn([i,d.pathname]),pathnameBase:Dv(tn([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=tn([i,d.pathnameBase]))}return o}function Cv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Pv(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Tv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ml(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Rv(e){try{return decodeURI(e)}catch(t){return Ml(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pv(e,t){try{return decodeURIComponent(e)}catch(n){return Ml(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function uh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ml(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mn(e):e;return{pathname:n?n.startsWith("/")?n:Ov(n,t):t,search:Lv(r),hash:Mv(i)}}function Ov(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ss(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Av(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mn(e):(i=br({},e),ne(!i.pathname||!i.pathname.includes("?"),Ss("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ss("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ss("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let l=Nv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const tn=e=>e.join("/").replace(/\/\/+/g,"/"),Dv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Uv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fv=["post","put","patch","delete"];[...Fv];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}function zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const $v=typeof Object.is=="function"?Object.is:zv,{useState:Bv,useEffect:jv,useLayoutEffect:bv,useDebugValue:Hv}=Ls;function Vv(e,t,n){const r=t(),[{inst:i},o]=Bv({inst:{value:r,getSnapshot:t}});return bv(()=>{i.value=r,i.getSnapshot=t,Es(i)&&o({inst:i})},[e,r,t]),jv(()=>(Es(i)&&o({inst:i}),e(()=>{Es(i)&&o({inst:i})})),[e]),Hv(r),r}function Es(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!$v(n,r)}catch{return!0}}function Wv(e,t,n){return t()}const Gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kv=!Gv,Qv=Kv?Wv:Vv;"useSyncExternalStore"in Ls&&(e=>e.useSyncExternalStore)(Ls);const ch=R.createContext(null),dh=R.createContext(null),Ul=R.createContext(null),Uo=R.createContext(null),Zr=R.createContext({outlet:null,matches:[]}),fh=R.createContext(null);function Fo(){return R.useContext(Uo)!=null}function hh(){return Fo()||ne(!1),R.useContext(Uo).location}function Yn(){Fo()||ne(!1);let{basename:e,navigator:t}=R.useContext(Ul),{matches:n}=R.useContext(Zr),{pathname:r}=hh(),i=JSON.stringify(Av(n).map(a=>a.pathnameBase)),o=R.useRef(!1);return R.useEffect(()=>{o.current=!0}),R.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=xv(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:tn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function qv(e,t){Fo()||ne(!1);let{navigator:n}=R.useContext(Ul),r=R.useContext(dh),{matches:i}=R.useContext(Zr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=hh(),u;if(t){var d;let y=typeof t=="string"?mn(t):t;a==="/"||(d=y.pathname)!=null&&d.startsWith(a)||ne(!1),u=y}else u=l;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",g=pv(e,{pathname:m}),_=Zv(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:tn([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:tn([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&_?R.createElement(Uo.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rt.Pop}},_):_}function Yv(){let e=ry(),t=Uv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,o)}class Jv extends R.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.createElement(Zr.Provider,{value:this.props.routeContext},R.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xv(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(ch);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Zr.Provider,{value:t},r)}function Zv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||ne(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||R.createElement(Yv,null):null,d=t.concat(r.slice(0,a+1)),p=()=>R.createElement(Xv,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?R.createElement(Jv,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var fc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(fc||(fc={}));var fo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(fo||(fo={}));function ey(e){let t=R.useContext(dh);return t||ne(!1),t}function ty(e){let t=R.useContext(Zr);return t||ne(!1),t}function ny(e){let t=ty(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function ry(){var e;let t=R.useContext(fh),n=ey(fo.UseRouteError),r=ny(fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fr(e){ne(!1)}function iy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rt.Pop,navigator:o,static:s=!1}=e;Fo()&&ne(!1);let a=t.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=mn(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:g="default"}=r,_=R.useMemo(()=>{let y=uh(u,a);return y==null?null:{pathname:y,search:d,hash:p,state:m,key:g}},[a,u,d,p,m,g]);return _==null?null:R.createElement(Ul.Provider,{value:l},R.createElement(Uo.Provider,{children:n,value:{location:_,navigationType:i}}))}function oy(e){let{children:t,location:n}=e,r=R.useContext(ch),i=r&&!t?r.router.routes:xa(t);return qv(i,n)}var hc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(hc||(hc={}));new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;if(r.type===R.Fragment){n.push.apply(n,xa(r.props.children,t));return}r.type!==fr&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=xa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sy(e){let{basename:t,children:n,window:r}=e,i=R.useRef();i.current==null&&(i.current=cv({window:r,v5Compat:!0}));let o=i.current,[s,a]=R.useState({action:o.action,location:o.location});return R.useLayoutEffect(()=>o.listen(a),[o]),R.createElement(iy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(pc||(pc={}));var mc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));/**
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
 */const ph=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ay=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[p],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ph(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ay(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new ly;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const _=u<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ly extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(e){const t=ph(e);return mh.encodeByteArray(t,!0)},gh=function(e){return uy(e).replace(/\./g,"")},vh=function(e){try{return mh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dy=()=>cy().__FIREBASE_DEFAULTS__,fy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vh(e[1]);return t&&JSON.parse(t)},Fl=()=>{try{return dy()||fy()||hy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},py=e=>{var t,n;return(n=(t=Fl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},my=()=>{var e;return(e=Fl())===null||e===void 0?void 0:e.config},yh=e=>{var t;return(t=Fl())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class gy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function wh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wy(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _h(){try{return typeof indexedDB=="object"}catch{return!1}}function Sh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function _y(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sy="FirebaseError";class Ze extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Sy,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Ey(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ze(i,a,r)}}function Ey(e,t){return e.replace(Iy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Iy=/\{\$([^}]+)}/g;function ky(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(gc(o)&&gc(s)){if(!Hr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gc(e){return e!==null&&typeof e=="object"}/**
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
 */function ei(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Cy(e,t){const n=new Ty(e,t);return n.subscribe.bind(n)}class Ty{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ry(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ry(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
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
 */const Py=1e3,Ny=2,Oy=4*60*60*1e3,Ay=.5;function vc(e,t=Py,n=Ny){const r=t*Math.pow(n,e),i=Math.round(Ay*r*(Math.random()-.5)*2);return Math.min(Oy,r+i)}/**
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
 */function mt(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class xy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new gy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ly(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dy(e){return e===Kt?void 0:e}function Ly(e){return e.instantiationMode==="EAGER"}/**
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
 */class My{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Uy={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Fy=F.INFO,zy={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},$y=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=zy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zl{constructor(t){this.name=t,this._logLevel=Fy,this._logHandler=$y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Uy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const By=(e,t)=>t.some(n=>e instanceof n);let yc,wc;function jy(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function by(){return wc||(wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eh=new WeakMap,Da=new WeakMap,Ih=new WeakMap,ks=new WeakMap,$l=new WeakMap;function Hy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ut(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Eh.set(n,e)}).catch(()=>{}),$l.set(t,e),t}function Vy(e){if(Da.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Da.set(e,t)}let La={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Da.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ih.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wy(e){La=e(La)}function Gy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cs(this),t,...n);return Ih.set(r,t.sort?t.sort():[t]),Ut(r)}:by().includes(e)?function(...t){return e.apply(Cs(this),t),Ut(Eh.get(this))}:function(...t){return Ut(e.apply(Cs(this),t))}}function Ky(e){return typeof e=="function"?Gy(e):(e instanceof IDBTransaction&&Vy(e),By(e,jy())?new Proxy(e,La):e)}function Ut(e){if(e instanceof IDBRequest)return Hy(e);if(ks.has(e))return ks.get(e);const t=Ky(e);return t!==e&&(ks.set(e,t),$l.set(t,e)),t}const Cs=e=>$l.get(e);function kh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ut(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ut(s.result),l.oldVersion,l.newVersion,Ut(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Qy=["get","getKey","getAll","getAllKeys","count"],qy=["put","add","delete","clear"],Ts=new Map;function _c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ts.get(t))return Ts.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qy.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ts.set(t,o),o}Wy(e=>({...e,get:(t,n,r)=>_c(t,n)||e.get(t,n,r),has:(t,n)=>!!_c(t,n)||e.has(t,n)}));/**
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
 */class Yy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ma="@firebase/app",Sc="0.9.4";/**
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
 */const un=new zl("@firebase/app"),Xy="@firebase/app-compat",Zy="@firebase/analytics-compat",e0="@firebase/analytics",t0="@firebase/app-check-compat",n0="@firebase/app-check",r0="@firebase/auth",i0="@firebase/auth-compat",o0="@firebase/database",s0="@firebase/database-compat",a0="@firebase/functions",l0="@firebase/functions-compat",u0="@firebase/installations",c0="@firebase/installations-compat",d0="@firebase/messaging",f0="@firebase/messaging-compat",h0="@firebase/performance",p0="@firebase/performance-compat",m0="@firebase/remote-config",g0="@firebase/remote-config-compat",v0="@firebase/storage",y0="@firebase/storage-compat",w0="@firebase/firestore",_0="@firebase/firestore-compat",S0="firebase",E0="9.17.2";/**
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
 */const Ua="[DEFAULT]",I0={[Ma]:"fire-core",[Xy]:"fire-core-compat",[e0]:"fire-analytics",[Zy]:"fire-analytics-compat",[n0]:"fire-app-check",[t0]:"fire-app-check-compat",[r0]:"fire-auth",[i0]:"fire-auth-compat",[o0]:"fire-rtdb",[s0]:"fire-rtdb-compat",[a0]:"fire-fn",[l0]:"fire-fn-compat",[u0]:"fire-iid",[c0]:"fire-iid-compat",[d0]:"fire-fcm",[f0]:"fire-fcm-compat",[h0]:"fire-perf",[p0]:"fire-perf-compat",[m0]:"fire-rc",[g0]:"fire-rc-compat",[v0]:"fire-gcs",[y0]:"fire-gcs-compat",[w0]:"fire-fst",[_0]:"fire-fst-compat","fire-js":"fire-js",[S0]:"fire-js-all"};/**
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
 */const ho=new Map,Fa=new Map;function k0(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(Fa.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;Fa.set(t,e);for(const n of ho.values())k0(n,e);return!0}function Jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const C0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new gn("app","Firebase",C0);/**
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
 */class T0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const zo=E0;function Ch(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=my()),!n)throw Ft.create("no-options");const o=ho.get(i);if(o){if(Hr(n,o.options)&&Hr(r,o.config))return o;throw Ft.create("duplicate-app",{appName:i})}const s=new My(i);for(const l of Fa.values())s.addComponent(l);const a=new T0(n,r,s);return ho.set(i,a),a}function Th(e=Ua){const t=ho.get(e);if(!t&&e===Ua)return Ch();if(!t)throw Ft.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=I0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}ft(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const R0="firebase-heartbeat-database",P0=1,Vr="firebase-heartbeat-store";let Rs=null;function Rh(){return Rs||(Rs=kh(R0,P0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vr)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Rs}async function N0(e){try{return(await Rh()).transaction(Vr).objectStore(Vr).get(Ph(e))}catch(t){if(t instanceof Ze)un.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(n.message)}}}async function Ec(e,t){try{const r=(await Rh()).transaction(Vr,"readwrite");return await r.objectStore(Vr).put(t,Ph(e)),r.done}catch(n){if(n instanceof Ze)un.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function Ph(e){return`${e.name}!${e.options.appId}`}/**
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
 */const O0=1024,A0=30*24*60*60*1e3;class x0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=A0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ic(),{heartbeatsToSend:n,unsentEntries:r}=D0(this._heartbeatsCache.heartbeats),i=gh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ic(){return new Date().toISOString().substring(0,10)}function D0(e,t=O0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),kc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _h()?Sh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await N0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function kc(e){return gh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function M0(e){ft(new Je("platform-logger",t=>new Yy(t),"PRIVATE")),ft(new Je("heartbeat",t=>new x0(t),"PRIVATE")),Qe(Ma,Sc,e),Qe(Ma,Sc,"esm2017"),Qe("fire-js","")}M0("");var U0="firebase",F0="9.17.2";/**
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
 */Qe(U0,F0,"app");const Nh="@firebase/installations",Bl="0.6.4";/**
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
 */const Oh=1e4,Ah=`w:${Bl}`,xh="FIS_v2",z0="https://firebaseinstallations.googleapis.com/v1",$0=60*60*1e3,B0="installations",j0="Installations";/**
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
 */const b0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},cn=new gn(B0,j0,b0);function Dh(e){return e instanceof Ze&&e.code.includes("request-failed")}/**
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
 */function Lh({projectId:e}){return`${z0}/projects/${e}/installations`}function Mh(e){return{token:e.token,requestStatus:2,expiresIn:V0(e.expiresIn),creationTime:Date.now()}}async function Uh(e,t){const r=(await t.json()).error;return cn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function H0(e,{refreshToken:t}){const n=Fh(e);return n.append("Authorization",W0(t)),n}async function zh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function V0(e){return Number(e.replace("s","000"))}function W0(e){return`${xh} ${e}`}/**
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
 */async function G0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Lh(e),i=Fh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:xh,appId:e.appId,sdkVersion:Ah},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await zh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Mh(u.authToken)}}else throw await Uh("Create Installation",l)}/**
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
 */function $h(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function K0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Q0=/^[cdef][\w-]{21}$/,za="";function q0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Y0(e);return Q0.test(n)?n:za}catch{return za}}function Y0(e){return K0(e).substr(0,22)}/**
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
 */function $o(e){return`${e.appName}!${e.appId}`}/**
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
 */const Bh=new Map;function jh(e,t){const n=$o(e);bh(n,t),J0(n,t)}function bh(e,t){const n=Bh.get(e);if(n)for(const r of n)r(t)}function J0(e,t){const n=X0();n&&n.postMessage({key:e,fid:t}),Z0()}let Jt=null;function X0(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=e=>{bh(e.data.key,e.data.fid)}),Jt}function Z0(){Bh.size===0&&Jt&&(Jt.close(),Jt=null)}/**
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
 */const ew="firebase-installations-database",tw=1,dn="firebase-installations-store";let Ps=null;function jl(){return Ps||(Ps=kh(ew,tw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(dn)}}})),Ps}async function po(e,t){const n=$o(e),i=(await jl()).transaction(dn,"readwrite"),o=i.objectStore(dn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&jh(e,t.fid),t}async function Hh(e){const t=$o(e),r=(await jl()).transaction(dn,"readwrite");await r.objectStore(dn).delete(t),await r.done}async function Bo(e,t){const n=$o(e),i=(await jl()).transaction(dn,"readwrite"),o=i.objectStore(dn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&jh(e,a.fid),a}/**
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
 */async function bl(e){let t;const n=await Bo(e.appConfig,r=>{const i=nw(r),o=rw(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===za?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nw(e){const t=e||{fid:q0(),registrationStatus:0};return Vh(t)}function rw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=iw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ow(e)}:{installationEntry:t}}async function iw(e,t){try{const n=await G0(e,t);return po(e.appConfig,n)}catch(n){throw Dh(n)&&n.customData.serverCode===409?await Hh(e.appConfig):await po(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ow(e){let t=await Cc(e.appConfig);for(;t.registrationStatus===1;)await $h(100),t=await Cc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bl(e);return r||n}return t}function Cc(e){return Bo(e,t=>{if(!t)throw cn.create("installation-not-found");return Vh(t)})}function Vh(e){return sw(e)?{fid:e.fid,registrationStatus:0}:e}function sw(e){return e.registrationStatus===1&&e.registrationTime+Oh<Date.now()}/**
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
 */async function aw({appConfig:e,heartbeatServiceProvider:t},n){const r=lw(e,n),i=H0(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Ah,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await zh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Mh(u)}else throw await Uh("Generate Auth Token",l)}function lw(e,{fid:t}){return`${Lh(e)}/${t}/authTokens:generate`}/**
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
 */async function Hl(e,t=!1){let n;const r=await Bo(e.appConfig,o=>{if(!Wh(o))throw cn.create("not-registered");const s=o.authToken;if(!t&&dw(s))return o;if(s.requestStatus===1)return n=uw(e,t),o;{if(!navigator.onLine)throw cn.create("app-offline");const a=hw(o);return n=cw(e,a),a}});return n?await n:r.authToken}async function uw(e,t){let n=await Tc(e.appConfig);for(;n.authToken.requestStatus===1;)await $h(100),n=await Tc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Hl(e,t):r}function Tc(e){return Bo(e,t=>{if(!Wh(t))throw cn.create("not-registered");const n=t.authToken;return pw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function cw(e,t){try{const n=await aw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await po(e.appConfig,r),n}catch(n){if(Dh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await po(e.appConfig,r)}throw n}}function Wh(e){return e!==void 0&&e.registrationStatus===2}function dw(e){return e.requestStatus===2&&!fw(e)}function fw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$0}function hw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pw(e){return e.requestStatus===1&&e.requestTime+Oh<Date.now()}/**
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
 */async function mw(e){const t=e,{installationEntry:n,registrationPromise:r}=await bl(t);return r?r.catch(console.error):Hl(t).catch(console.error),n.fid}/**
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
 */async function gw(e,t=!1){const n=e;return await vw(n),(await Hl(n,t)).token}async function vw(e){const{registrationPromise:t}=await bl(e);t&&await t}/**
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
 */function yw(e){if(!e||!e.options)throw Ns("App Configuration");if(!e.name)throw Ns("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ns(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ns(e){return cn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Gh="installations",ww="installations-internal",_w=e=>{const t=e.getProvider("app").getImmediate(),n=yw(t),r=Jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sw=e=>{const t=e.getProvider("app").getImmediate(),n=Jn(t,Gh).getImmediate();return{getId:()=>mw(n),getToken:i=>gw(n,i)}};function Ew(){ft(new Je(Gh,_w,"PUBLIC")),ft(new Je(ww,Sw,"PRIVATE"))}Ew();Qe(Nh,Bl);Qe(Nh,Bl,"esm2017");/**
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
 */const mo="analytics",Iw="firebase_id",kw="origin",Cw=60*1e3,Tw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kh="https://www.googletagmanager.com/gtag/js";/**
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
 */const ke=new zl("@firebase/analytics");/**
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
 */function Qh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rw(e,t){const n=document.createElement("script");n.src=`${Kh}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Pw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Nw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Qh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ke.error(a)}e("config",i,o)}async function Ow(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Qh(n);for(const l of s){const u=a.find(p=>p.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){ke.error(o)}}function Aw(e,t,n,r){async function i(o,s,a){try{o==="event"?await Ow(e,t,n,s,a):o==="config"?await Nw(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){ke.error(l)}}return i}function xw(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Aw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Dw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Kh)&&n.src.includes(e))return n;return null}/**
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
 */const Lw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new gn("analytics","Analytics",Lw);/**
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
 */const Mw=30,Uw=1e3;class Fw{constructor(t={},n=Uw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const qh=new Fw;function zw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $w(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:zw(r)},o=Tw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Bw(e,t=qh,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw xe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Hw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Cw),Yh({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Yh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=qh){var o;const{appId:s,measurementId:a}=e;try{await jw(r,t)}catch(l){if(a)return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await $w(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!bw(u)){if(i.deleteThrottleMetadata(s),a)return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?vc(n,i.intervalMillis,Mw):vc(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),ke.debug(`Calling attemptFetch again in ${d} millis`),Yh(e,p,r,i)}}function jw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function bw(e){if(!(e instanceof Ze)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Hw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Vw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function Ww(){if(_h())try{await Sh()}catch(e){return ke.warn(xe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ke.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gw(e,t,n,r,i,o,s){var a;const l=Bw(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ke.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ke.error(g)),t.push(l);const u=Ww().then(g=>{if(g)return r.getId()}),[d,p]=await Promise.all([l,u]);Dw(o)||Rw(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[kw]="firebase",m.update=!0,p!=null&&(m[Iw]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class Kw{constructor(t){this.app=t}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Rc=[];const Pc={};let Os="dataLayer",Qw="gtag",Nc,Jh,Oc=!1;function qw(){const e=[];if(wh()&&e.push("This is a browser extension environment."),_y()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:t});ke.warn(n.message)}}function Yw(e,t,n){qw();const r=e.options.appId;if(!r)throw xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(Er[r]!=null)throw xe.create("already-exists",{id:r});if(!Oc){Pw(Os);const{wrappedGtag:o,gtagCore:s}=xw(Er,Rc,Pc,Os,Qw);Jh=o,Nc=s,Oc=!0}return Er[r]=Gw(e,Rc,Pc,t,Nc,Os,n),new Kw(e)}function Jw(e=Th()){e=mt(e);const t=Jn(e,mo);return t.isInitialized()?t.getImmediate():Xw(e)}function Xw(e,t={}){const n=Jn(e,mo);if(n.isInitialized()){const i=n.getImmediate();if(Hr(t,n.getOptions()))return i;throw xe.create("already-initialized")}return n.initialize({options:t})}function Zw(e,t,n,r){e=mt(e),Vw(Jh,Er[e.app.options.appId],t,n,r).catch(i=>ke.error(i))}const Ac="@firebase/analytics",xc="0.9.4";function e1(){ft(new Je(mo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Yw(r,i,n)},"PUBLIC")),ft(new Je("analytics-internal",e,"PRIVATE")),Qe(Ac,xc),Qe(Ac,xc,"esm2017");function e(t){try{const n=t.getProvider(mo).getImmediate();return{logEvent:(r,i,o)=>Zw(n,r,i,o)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}e1();function Vl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Xh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t1=Xh,Zh=new gn("auth","Firebase",Xh());/**
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
 */const Dc=new zl("@firebase/auth");function Ui(e,...t){Dc.logLevel<=F.ERROR&&Dc.error(`Auth (${zo}): ${e}`,...t)}/**
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
 */function Xe(e,...t){throw Wl(e,...t)}function qe(e,...t){return Wl(e,...t)}function ep(e,t,n){const r=Object.assign(Object.assign({},t1()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function n1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Xe(e,"argument-error"),ep(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Zh.create(e,...t)}function O(e,t,...n){if(!e)throw Wl(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ui(t),new Error(t)}function ht(e,t){e||ot(t)}/**
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
 */const Lc=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=Lc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lc.set(e,t),t)}/**
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
 */function r1(e,t){const n=Jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Hr(o,t??{}))return i;Xe(i,"already-initialized")}return n.initialize({options:t})}function i1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function $a(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function o1(){return Mc()==="http:"||Mc()==="https:"}function Mc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function s1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o1()||wh()||"connection"in navigator)?navigator.onLine:!0}function a1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ti{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=vy()||yy()}get(){return s1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gl(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class tp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const l1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const u1=new ti(3e4,6e4);function c1(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jo(e,t,n,r,i={}){return np(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ei(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),tp.fetch()(rp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function np(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},l1),t);try{const i=new f1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ii(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ii(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ii(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ep(e,d,u);Xe(e,d)}}catch(i){if(i instanceof Ze)throw i;Xe(e,"internal-error",{message:String(i)})}}async function d1(e,t,n,r,i={}){const o=await jo(e,t,n,r,i);return"mfaPendingCredential"in o&&Xe(e,"multi-factor-auth-required",{_serverResponse:o}),o}function rp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gl(e.config,i):`${e.config.apiScheme}://${i}`}class f1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),u1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function h1(e,t){return jo(e,"POST","/v1/accounts:delete",t)}async function p1(e,t){return jo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function m1(e,t=!1){const n=mt(e),r=await n.getIdToken(t),i=Kl(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ir(As(i.auth_time)),issuedAtTime:Ir(As(i.iat)),expirationTime:Ir(As(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function As(e){return Number(e)*1e3}function Kl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=vh(n);return i?JSON.parse(i):(Ui("Failed to decode base64 JWT payload"),null)}catch(i){return Ui("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g1(e){const t=Kl(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ze&&v1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function v1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class y1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ip{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wr(e,p1(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?S1(o.providerUserInfo):[],a=_1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ip(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function w1(e){const t=mt(e);await go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function S1(e){return e.map(t=>{var{providerId:n}=t,r=Vl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function E1(e,t){const n=await np(e,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=rp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):g1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await E1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Gr;return r&&(O(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function vt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Vl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ip(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return m1(this,t)}reload(){return w1(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wr(this,h1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:v,isAnonymous:S,providerData:C,stsTokenManager:T}=n;O(h&&T,t,"internal-error");const P=Gr.fromJSON(this.name,T);O(typeof h=="string",t,"internal-error"),vt(p,t.name),vt(m,t.name),O(typeof v=="boolean",t,"internal-error"),O(typeof S=="boolean",t,"internal-error"),vt(g,t.name),vt(_,t.name),vt(y,t.name),vt(N,t.name),vt(f,t.name),vt(c,t.name);const $=new nn({uid:h,auth:t,email:m,emailVerified:v,displayName:p,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:P,createdAt:f,lastLoginAt:c});return C&&Array.isArray(C)&&($.providerData=C.map(D=>Object.assign({},D))),N&&($._redirectEventId=N),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const o=new nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await go(o),o}}/**
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
 */class op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}op.type="NONE";const Uc=op;/**
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
 */function Fi(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Fi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Fi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(st(Uc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(Uc);const s=Fi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const p=nn._fromJSON(t,d);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fn(o,t,r))}}/**
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
 */function Fc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(sp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cp(t))return"Blackberry";if(dp(t))return"Webos";if(Ql(t))return"Safari";if((t.includes("chrome/")||ap(t))&&!t.includes("edge/"))return"Chrome";if(up(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sp(e=ce()){return/firefox\//i.test(e)}function Ql(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ap(e=ce()){return/crios\//i.test(e)}function lp(e=ce()){return/iemobile/i.test(e)}function up(e=ce()){return/android/i.test(e)}function cp(e=ce()){return/blackberry/i.test(e)}function dp(e=ce()){return/webos/i.test(e)}function bo(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function I1(e=ce()){var t;return bo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function k1(){return wy()&&document.documentMode===10}function fp(e=ce()){return bo(e)||up(e)||dp(e)||cp(e)||/windows phone/i.test(e)||lp(e)}function C1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hp(e,t=[]){let n;switch(e){case"Browser":n=Fc(ce());break;case"Worker":n=`${Fc(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zo}/${r}`}/**
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
 */class T1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class R1{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zc(this),this.idTokenSubscription=new zc(this),this.beforeStateQueue=new T1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await go(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=a1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?mt(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return O(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ho(e){return mt(e)}class zc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cy(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function P1(e,t,n){const r=Ho(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=pp(t),{host:s,port:a}=N1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||O1()}function pp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function N1(e){const t=pp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:$c(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:$c(s)}}}function $c(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function O1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class mp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}/**
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
 */async function zn(e,t){return d1(e,"POST","/v1/accounts:signInWithIdp",c1(e,t))}/**
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
 */const A1="http://localhost";class fn extends mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Vl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new fn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:A1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ei(n)}return t}}/**
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
 */class ql{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ni extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends ni{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class nt extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nt.credentialFromTaggedObject(t)}static credentialFromError(t){return nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class It extends ni{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class kt extends ni{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await nn._fromIdTokenResponse(t,r,i),s=Bc(r);return new Gn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Bc(r);return new Gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Bc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class vo extends Ze{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vo(t,n,r,i)}}function gp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(e,o,t,r):o})}async function x1(e,t,n=!1){const r=await Wr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gn._forOperation(e,"link",r)}/**
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
 */async function D1(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Wr(e,gp(r,i,t,e),n);O(o.idToken,r,"internal-error");const s=Kl(o.idToken);O(s,r,"internal-error");const{sub:a}=s;return O(e.uid===a,r,"user-mismatch"),Gn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),o}}/**
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
 */async function L1(e,t,n=!1){const r="signIn",i=await gp(e,r,t),o=await Gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function M1(e,t,n,r){return mt(e).onIdTokenChanged(t,n,r)}function U1(e,t,n){return mt(e).beforeAuthStateChanged(t,n)}function F1(e,t,n,r){return mt(e).onAuthStateChanged(t,n,r)}const yo="__sak";/**
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
 */class vp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function z1(){const e=ce();return Ql(e)||bo(e)}const $1=1e3,B1=10;class yp extends vp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=z1()&&C1(),this.fallbackToPolling=fp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);k1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,B1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yp.type="LOCAL";const j1=yp;/**
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
 */class wp extends vp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}wp.type="SESSION";const _p=wp;/**
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
 */function b1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Vo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await b1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
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
 */function Yl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class H1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Yl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ye(){return window}function V1(e){Ye().location.href=e}/**
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
 */function Sp(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function W1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function K1(){return Sp()?self:null}/**
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
 */const Ep="firebaseLocalStorageDb",Q1=1,wo="firebaseLocalStorage",Ip="fbase_key";class ri{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(e,t){return e.transaction([wo],t?"readwrite":"readonly").objectStore(wo)}function q1(){const e=indexedDB.deleteDatabase(Ep);return new ri(e).toPromise()}function Ba(){const e=indexedDB.open(Ep,Q1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(wo,{keyPath:Ip})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(wo)?t(r):(r.close(),await q1(),t(await Ba()))})})}async function jc(e,t,n){const r=Wo(e,!0).put({[Ip]:t,value:n});return new ri(r).toPromise()}async function Y1(e,t){const n=Wo(e,!1).get(t),r=await new ri(n).toPromise();return r===void 0?null:r.value}function bc(e,t){const n=Wo(e,!0).delete(t);return new ri(n).toPromise()}const J1=800,X1=3;class kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>X1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(K1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await W1(),!this.activeServiceWorker)return;this.sender=new H1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||G1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ba();return await jc(t,yo,"1"),await bc(t,yo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Y1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Wo(i,!1).getAll();return new ri(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const Z1=kp;/**
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
 */function e_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function t_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=qe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",e_().appendChild(r)})}function n_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ti(3e4,6e4);/**
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
 */function Cp(e,t){return t?st(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Jl extends mp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function r_(e){return L1(e.auth,new Jl(e),e.bypassAuthState)}function i_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),D1(n,new Jl(e),e.bypassAuthState)}async function o_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),x1(n,new Jl(e),e.bypassAuthState)}/**
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
 */class Tp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return r_;case"linkViaPopup":case"linkViaRedirect":return o_;case"reauthViaPopup":case"reauthViaRedirect":return i_;default:Xe(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const s_=new ti(2e3,1e4);async function Rp(e,t,n){const r=Ho(e);n1(e,t,ql);const i=Cp(r,n);return new Xt(r,"signInViaPopup",t,i).executeNotNull()}class Xt extends Tp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,s_.get())};t()}}Xt.currentPopupAction=null;/**
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
 */const a_="pendingRedirect",zi=new Map;class l_ extends Tp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=zi.get(this.auth._key());if(!t){try{const r=await u_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}zi.set(this.auth._key(),t)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u_(e,t){const n=f_(t),r=d_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function c_(e,t){zi.set(e._key(),t)}function d_(e){return st(e._redirectPersistence)}function f_(e){return Fi(a_,e.config.apiKey,e.name)}async function h_(e,t,n=!1){const r=Ho(e),i=Cp(r,t),s=await new l_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const p_=10*60*1e3;class m_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!g_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Pp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=p_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(t))}saveEventToCache(t){this.cachedEventUids.add(Hc(t)),this.lastProcessedEventTime=Date.now()}}function Hc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Pp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function g_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pp(e);default:return!1}}/**
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
 */async function v_(e,t={}){return jo(e,"GET","/v1/projects",t)}/**
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
 */const y_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w_=/^https?/;async function __(e){if(e.config.emulator)return;const{authorizedDomains:t}=await v_(e);for(const n of t)try{if(S_(n))return}catch{}Xe(e,"unauthorized-domain")}function S_(e){const t=$a(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!w_.test(n))return!1;if(y_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const E_=new ti(3e4,6e4);function Vc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function I_(e){return new Promise((t,n)=>{var r,i,o;function s(){Vc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vc(),n(qe(e,"network-request-failed"))},timeout:E_.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=n_("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(qe(e,"network-request-failed"))},t_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw $i=null,t})}let $i=null;function k_(e){return $i=$i||I_(e),$i}/**
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
 */const C_=new ti(5e3,15e3),T_="__/auth/iframe",R_="emulator/auth/iframe",P_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O_(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gl(t,R_):`https://${e.config.authDomain}/${T_}`,r={apiKey:t.apiKey,appName:e.name,v:zo},i=N_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ei(r).slice(1)}`}async function A_(e){const t=await k_(e),n=Ye().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:O_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=qe(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},C_.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const x_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D_=500,L_=600,M_="_blank",U_="http://localhost";class Wc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F_(e,t,n,r=D_,i=L_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},x_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ce().toLowerCase();n&&(a=ap(u)?M_:n),sp(u)&&(t=t||U_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(I1(u)&&a!=="_self")return z_(t||"",a),new Wc(null);const p=window.open(t||"",a,d);O(p,e,"popup-blocked");try{p.focus()}catch{}return new Wc(p)}function z_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $_="__/auth/handler",B_="emulator/auth/handler";function Gc(e,t,n,r,i,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zo,eventId:i};if(t instanceof ql){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ky(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ni){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${j_(e)}?${ei(a).slice(1)}`}function j_({config:e}){return e.emulator?Gl(e,B_):`https://${e.authDomain}/${$_}`}/**
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
 */const xs="webStorageSupport";class b_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_p,this._completeRedirectFn=h_,this._overrideRedirectResult=c_}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Gc(t,n,r,$a(),i);return F_(t,s,Yl())}async _openRedirect(t,n,r,i){return await this._originValidation(t),V1(Gc(t,n,r,$a(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await A_(t),r=new m_(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xs,{type:xs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[xs];s!==void 0&&n(!!s),Xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=__(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fp()||Ql()||bo()}}const H_=b_;var Kc="@firebase/auth",Qc="0.21.4";/**
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
 */class V_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G_(e){ft(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{O(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),O(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hp(e)},d=new R1(a,l,u);return i1(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Je("auth-internal",t=>{const n=Ho(t.getProvider("auth").getImmediate());return(r=>new V_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Kc,Qc,W_(e)),Qe(Kc,Qc,"esm2017")}/**
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
 */const K_=5*60,Q_=yh("authIdTokenMaxAge")||K_;let qc=null;const q_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q_)return;const i=n==null?void 0:n.token;qc!==i&&(qc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Y_(e=Th()){const t=Jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=r1(e,{popupRedirectResolver:H_,persistence:[Z1,j1,_p]}),r=yh("authTokenSyncURL");if(r){const o=q_(r);U1(n,o,()=>o(n.currentUser)),M1(n,s=>o(s))}const i=py("auth");return i&&P1(n,`http://${i}`),n}G_("Browser");const J_={apiKey:"AIzaSyBQW8BHrhweij93RP-jif7FB0BJmWWe6yI",authDomain:"online-shop-25.firebaseapp.com",projectId:"online-shop-25",storageBucket:"online-shop-25.appspot.com",messagingSenderId:"445130183188",appId:"1:445130183188:web:ab69f3361f833528eecd01",measurementId:"G-T93XCFM44G"},X_=Ch(J_);Jw(X_);const _e=Y_();_e.currentUser;const Np=new nt,Z_="/online-shop/assets/logedOutProfileIcon-d865a437.png",eS="/online-shop/assets/logedInProfileIcon-59f87b6b.png",tS="/online-shop/assets/companyLogo-a2d24ab5.png",nS="/online-shop/assets/cartIcon-440718d0.png";let Ds=!1;function Kr(){let e=Yn(),t;return _e.currentUser===null?t=Z_:t=eS,Y("div",{className:"Navbar",children:[Y("button",{className:"menuButton",onClick:()=>{Ds===!1?(Ds=!0,console.log("Open"),document.querySelector(".menuContainer").classList.add("open")):(Ds=!1,console.log("Close"),document.querySelector(".menuContainer").classList.remove("open"))},children:[k("div",{className:"menuButtonRow1"}),k("div",{className:"menuButtonRow2"}),k("div",{className:"menuButtonRow3"})]}),k("div",{className:"menuContainer"}),k("div",{className:"companyLogo",children:k("button",{onClick:()=>{e("/")},children:k("img",{src:tS})})}),Y("div",{className:"navBtns",children:[k("div",{className:"accountBtn",children:k("button",{onClick:()=>{_e.currentUser||e("/login"),_e.currentUser&&e("/account")},children:k("img",{src:t})})}),k("div",{className:"cartBtn",children:k("button",{onClick:()=>{e("/cart")},children:k("img",{src:nS})})})]})]})}/*! *****************************************************************************
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
***************************************************************************** */function rS(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(d){try{u(r.next(d))}catch(p){s(p)}}function l(d){try{u(r.throw(d))}catch(p){s(p)}}function u(d){d.done?o(d.value):i(d.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function iS(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var On=function(){return On=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},On.apply(this,arguments)},Op=function(e){return{loading:e==null,value:e}},oS=function(){return function(e,t){switch(t.type){case"error":return On(On({},e),{error:t.error,loading:!1,value:void 0});case"reset":return Op(t.defaultValue);case"value":return On(On({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},sS=function(e){var t=e?e():void 0,n=R.useReducer(oS(),Op(t)),r=n[0],i=n[1],o=R.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),s=R.useCallback(function(l){i({type:"error",error:l})},[]),a=R.useCallback(function(l){i({type:"value",value:l})},[]);return R.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},Ap=function(e,t){var n=sS(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return R.useEffect(function(){var l=F1(e,function(u){return rS(void 0,void 0,void 0,function(){var d;return iS(this,function(p){switch(p.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];p.label=1;case 1:return p.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return p.sent(),[3,4];case 3:return d=p.sent(),o(d),[3,4];case 4:return s(u),[2]}})})},o);return function(){l()}},[e]),[a,i,r]};function aS(){const[e,t,n]=Ap(_e);return e?Y(Bi,{children:[k(Kr,{}),k("div",{className:"websiteContent",children:k("h1",{onClick:()=>{console.log(logedUser)},children:`Loged in as ${e.email}. Welcome back, ${e.displayName}`})})]}):Y(Bi,{children:[k(Kr,{}),k("div",{className:"websiteContent",children:k("h1",{onClick:()=>{console.log(logedUser)},children:"Please log in !"})})]})}const xp="/online-shop/assets/googleIcon-8edb2dab.png";function lS(){let e=Yn();return Y("div",{className:"signInContainer",children:[k("p",{children:"SIGN IN WITH..."}),Y("button",{onClick:()=>{Rp(_e,Np).then(n=>{let r=n.user.email,i=n.user.displayName;const o={userEmail:r,userName:i};return console.log(_e.currentUser),localStorage.setItem("userName",i),e("/account"),console.log(o)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[k("img",{src:xp}),"GOOGLE"]})]})}function uS(){let e=Yn();return Y("div",{className:"signUpContainer",children:[k("p",{children:"SIGN UP WITH..."}),Y("button",{onClick:()=>{Rp(_e,Np).then(n=>{let r=n.user.email,i=n.user.displayName;const o={userEmail:r,userName:i};return console.log(_e.currentUser),localStorage.setItem("userName",i),e("/account"),console.log(o)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[k("img",{src:xp}),"GOOGLE"]})]})}const Yc={SignIn:k(lS,{}),SignUp:k(uS,{})};function cS(){const[e,t]=R.useState(Yc.SignIn),n=r=>{document.querySelector(".activeBtn").classList.remove("activeBtn"),r.target.classList.add("activeBtn"),t(Yc[r.target.attributes.container.value])};return Y("div",{className:"loginMenu",children:[Y("div",{className:"loginBtns",children:[k("button",{className:"activeBtn",onClick:n,container:"SignIn",children:"SIGN IN"}),k("button",{onClick:n,container:"SignUp",children:"SIGN UP"})]}),k("div",{className:"loginMenuContent",children:e})]})}function dS(){return Y(Bi,{children:[k(Kr,{}),k("div",{className:"websiteContent",children:k(cS,{})})]})}const fS="/online-shop/assets/signOutIcon-5ab103d1.png";function hS(){const e=Yn();return Y("button",{onClick:()=>{_e.signOut().then(function(){console.log("Signout Succesfull"),localStorage.setItem("userName",""),e("/login")},function(n){console.log("Signout Failed")})},className:"signOutBtn",children:[k("img",{src:fS}),k("p",{children:"Sign out"})]})}function pS(){return Y("div",{className:"accountMenu",children:[Y("div",{className:"accountHeader",children:[k("div",{className:"backgroundPfp",children:k("img",{src:_e.currentUser.photoURL})}),k("div",{className:"pfp",children:k("img",{src:_e.currentUser.photoURL})}),k("div",{className:"pfpName",children:Y("p",{children:["Hi , ",k("br",{}),k("span",{children:_e.currentUser.displayName})]})})]}),k("div",{className:"signOutOption",children:k(hS,{})})]})}function mS(){const e=Yn(),[t,n,r]=Ap(_e);if(t)return Y("div",{children:[k(Kr,{}),k("div",{className:"websiteContent",children:k(pS,{})})]});e("/login")}const gS="/online-shop/assets/emptyCartImage-e50ae3ed.png";function vS(){const e=Yn();return Y("div",{className:"emptyCartContainer",children:[k("img",{src:gS}),k("p",{className:"emptyCartText",children:"You have no items in cart."}),k("p",{children:"Dilvin has many articles that are waiting for you!"}),k("button",{onClick:()=>{e("/")},className:"goShoppingBtn",children:"Go Shopping"})]})}function yS(){return Y(Bi,{children:[k(Kr,{}),k("div",{className:"websiteContent",children:k(vS,{})})]})}function wS(){return k("div",{className:"App",children:Y(oy,{children:[k(fr,{path:"/",element:k(aS,{})}),k(fr,{path:"/login",element:k(dS,{})}),k(fr,{path:"/account",element:k(mS,{})}),k(fr,{path:"/cart",element:k(yS,{})})]})})}Ms.createRoot(document.getElementById("root")).render(k(sy,{children:k(wS,{})}));
