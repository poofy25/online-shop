function xp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sr={},Lp={get exports(){return Sr},set exports(e){Sr=e}},go={},R={},Mp={get exports(){return R},set exports(e){R=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),Up=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),$p=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),Vp=Symbol.for("react.suspense"),Hp=Symbol.for("react.memo"),Wp=Symbol.for("react.lazy"),Jl=Symbol.iterator;function Kp(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yc=Object.assign,Jc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=Kn.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}var $a=za.prototype=new Xc;$a.constructor=za;Yc($a,Kn.prototype);$a.isPureReactComponent=!0;var Xl=Array.isArray,Zc=Object.prototype.hasOwnProperty,Ba={current:null},ed={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Zc.call(t,r)&&!ed.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hr,type:e,key:o,ref:s,props:i,_owner:Ba.current}}function Gp(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Qp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zl=/\/+/g;function Ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qp(""+e.key):t.toString(36)}function _i(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hr:case Up:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ko(s,0):r,Xl(i)?(n="",e!=null&&(n=e.replace(Zl,"$&/")+"/"),_i(i,t,n,"",function(u){return u})):i!=null&&(ja(i)&&(i=Gp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Zl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Xl(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ko(o,a);s+=_i(o,t,n,l,i)}else if(l=Kp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ko(o,a++),s+=_i(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ni(e,t,n){if(e==null)return e;var r=[],i=0;return _i(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Si={transition:null},Yp={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Si,ReactCurrentOwner:Ba};L.Children={map:ni,forEach:function(e,t,n){ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Kn;L.Fragment=Fp;L.Profiler=$p;L.PureComponent=za;L.StrictMode=zp;L.Suspense=Vp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zc.call(t,l)&&!ed.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bp,_context:e},e.Consumer=e};L.createElement=td;L.createFactory=function(e){var t=td.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:bp,render:e}};L.isValidElement=ja;L.lazy=function(e){return{$$typeof:Wp,_payload:{_status:-1,_result:e},_init:qp}};L.memo=function(e,t){return{$$typeof:Hp,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(Mp);const Jp=Dp(R),As=xp({__proto__:null,default:Jp},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=R,Zp=Symbol.for("react.element"),em=Symbol.for("react.fragment"),tm=Object.prototype.hasOwnProperty,nm=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)tm.call(t,r)&&!rm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zp,type:e,key:o,ref:s,props:i,_owner:nm.current}}go.Fragment=em;go.jsx=nd;go.jsxs=nd;(function(e){e.exports=go})(Lp);const rd=Sr.Fragment,A=Sr.jsx,Se=Sr.jsxs;var xs={},Ds={},im={get exports(){return Ds},set exports(e){Ds=e}},Te={},Ls={},om={get exports(){return Ls},set exports(e){Ls=e}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var x=I.length;I.push(O);e:for(;0<x;){var G=x-1>>>1,X=I[G];if(0<i(X,O))I[G]=O,I[x]=X,x=G;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],x=I.pop();if(x!==O){I[0]=x;e:for(var G=0,X=I.length,ei=X>>>1;G<ei;){var Vt=2*(G+1)-1,Wo=I[Vt],Ht=Vt+1,ti=I[Ht];if(0>i(Wo,x))Ht<X&&0>i(ti,Wo)?(I[G]=ti,I[Ht]=x,G=Ht):(I[G]=Wo,I[Vt]=x,G=Vt);else if(Ht<X&&0>i(ti,x))I[G]=ti,I[Ht]=x,G=Ht;else break e}}return O}function i(I,O){var x=I.sortIndex-O.sortIndex;return x!==0?x:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,p=null,m=3,g=!1,_=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function v(I){if(y=!1,h(I),!_)if(n(l)!==null)_=!0,Vo(S);else{var O=n(u);O!==null&&Ho(v,O.startTime-I)}}function S(I,O){_=!1,y&&(y=!1,d(C),C=-1),g=!0;var x=m;try{for(h(O),p=n(l);p!==null&&(!(p.expirationTime>O)||I&&!Le());){var G=p.callback;if(typeof G=="function"){p.callback=null,m=p.priorityLevel;var X=G(p.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(l)&&r(l),h(O)}else r(l);p=n(l)}if(p!==null)var ei=!0;else{var Vt=n(u);Vt!==null&&Ho(v,Vt.startTime-O),ei=!1}return ei}finally{p=null,m=x,g=!1}}var k=!1,T=null,C=-1,$=5,D=-1;function Le(){return!(e.unstable_now()-D<$)}function Yn(){if(T!==null){var I=e.unstable_now();D=I;var O=!0;try{O=T(!0,I)}finally{O?Jn():(k=!1,T=null)}}else k=!1}var Jn;if(typeof c=="function")Jn=function(){c(Yn)};else if(typeof MessageChannel<"u"){var Yl=new MessageChannel,Ap=Yl.port2;Yl.port1.onmessage=Yn,Jn=function(){Ap.postMessage(null)}}else Jn=function(){P(Yn,0)};function Vo(I){T=I,k||(k=!0,Jn())}function Ho(I,O){C=P(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,Vo(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var x=m;m=O;try{return I()}finally{m=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var x=m;m=I;try{return O()}finally{m=x}},e.unstable_scheduleCallback=function(I,O,x){var G=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?G+x:G):x=G,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=x+X,I={id:f++,callback:O,priorityLevel:I,startTime:x,expirationTime:X,sortIndex:-1},x>G?(I.sortIndex=x,t(u,I),n(l)===null&&I===n(u)&&(y?(d(C),C=-1):y=!0,Ho(v,x-G))):(I.sortIndex=X,t(l,I),_||g||(_=!0,Vo(S))),I},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(I){var O=m;return function(){var x=m;m=O;try{return I.apply(this,arguments)}finally{m=x}}}})(id);(function(e){e.exports=id})(om);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=R,ke=Ls;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sd=new Set,Er={};function hn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Er[e]=t,e=0;e<t.length;e++)sd.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function am(e){return Ms.call(tu,e)?!0:Ms.call(eu,e)?!1:sm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function lm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,t,n,r){if(t===null||typeof t>"u"||lm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ba=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ba,Va);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ba,Va);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ba,Va);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ha(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(um(t,n,i,r)&&(n=null),r||i===null?am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Wa=Symbol.for("react.strict_mode"),Us=Symbol.for("react.profiler"),ad=Symbol.for("react.provider"),ld=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),zs=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),nu=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Go;function sr(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var Qo=!1;function qo(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function cm(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function $s(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case Us:return"Profiler";case Wa:return"StrictMode";case Fs:return"Suspense";case zs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case ad:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return t=e.displayName||null,t!==null?t:$s(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return $s(e(t))}catch{}}return null}function dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $s(t);case 8:return t===Wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(e){var t=cd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=fm(e))}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fd(e,t){t=t.checked,t!=null&&Ha(e,"checked",t,!1)}function js(e,t){fd(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||Fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(ar(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function hd(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hm=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){hm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function gd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ws(e,t){if(t){if(pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,An=null,xn=null;function au(e){if(e=Gr(e)){if(typeof Qs!="function")throw Error(w(280));var t=e.stateNode;t&&(t=So(t),Qs(e.stateNode,e.type,t))}}function yd(e){An?xn?xn.push(e):xn=[e]:An=e}function wd(){if(An){var e=An,t=xn;if(xn=An=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function _d(e,t){return e(t)}function Sd(){}var Yo=!1;function Ed(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return _d(e,t,n)}finally{Yo=!1,(An!==null||xn!==null)&&(Sd(),wd())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var qs=!1;if(lt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{qs=!1}function mm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var dr=!1,zi=null,$i=!1,Ys=null,gm={onError:function(e){dr=!0,zi=e}};function vm(e,t,n,r,i,o,s,a,l){dr=!1,zi=null,mm.apply(gm,arguments)}function ym(e,t,n,r,i,o,s,a,l){if(vm.apply(this,arguments),dr){if(dr){var u=zi;dr=!1,zi=null}else throw Error(w(198));$i||($i=!0,Ys=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(pn(e)!==e)throw Error(w(188))}function wm(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function kd(e){return e=wm(e),e!==null?Td(e):null}function Td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Td(e);if(t!==null)return t;e=e.sibling}return null}var Cd=ke.unstable_scheduleCallback,uu=ke.unstable_cancelCallback,_m=ke.unstable_shouldYield,Sm=ke.unstable_requestPaint,Q=ke.unstable_now,Em=ke.unstable_getCurrentPriorityLevel,qa=ke.unstable_ImmediatePriority,Rd=ke.unstable_UserBlockingPriority,Bi=ke.unstable_NormalPriority,Im=ke.unstable_LowPriority,Pd=ke.unstable_IdlePriority,vo=null,Ke=null;function km(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Rm,Tm=Math.log,Cm=Math.LN2;function Rm(e){return e>>>=0,e===0?32:31-(Tm(e)/Cm|0)|0}var si=64,ai=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=lr(a):(o&=s,o!==0&&(r=lr(o)))}else s=n&~i,s!==0?r=lr(s):o!==0&&(r=lr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),i=1<<n,r|=e[n],t&=~i;return r}function Pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$e(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Pm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nd(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function Om(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$e(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ad,Ja,xd,Dd,Ld,Xs=!1,li=[],Rt=null,Pt=null,Nt=null,Tr=new Map,Cr=new Map,wt=[],Am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function er(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gr(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xm(e,t,n,r,i){switch(t){case"focusin":return Rt=er(Rt,e,t,n,r,i),!0;case"dragenter":return Pt=er(Pt,e,t,n,r,i),!0;case"mouseover":return Nt=er(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Tr.set(o,er(Tr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Cr.set(o,er(Cr.get(o)||null,e,t,n,r,i)),!0}return!1}function Md(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Id(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=Gr(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Ei(e)&&n.delete(t)}function Dm(){Xs=!1,Rt!==null&&Ei(Rt)&&(Rt=null),Pt!==null&&Ei(Pt)&&(Pt=null),Nt!==null&&Ei(Nt)&&(Nt=null),Tr.forEach(du),Cr.forEach(du)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Dm)))}function Rr(e){function t(i){return tr(i,e)}if(0<li.length){tr(li[0],e);for(var n=1;n<li.length;n++){var r=li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&tr(Rt,e),Pt!==null&&tr(Pt,e),Nt!==null&&tr(Nt,e),Tr.forEach(t),Cr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Md(n),n.blockedOn===null&&wt.shift()}var Dn=pt.ReactCurrentBatchConfig,bi=!0;function Lm(e,t,n,r){var i=U,o=Dn.transition;Dn.transition=null;try{U=1,Xa(e,t,n,r)}finally{U=i,Dn.transition=o}}function Mm(e,t,n,r){var i=U,o=Dn.transition;Dn.transition=null;try{U=4,Xa(e,t,n,r)}finally{U=i,Dn.transition=o}}function Xa(e,t,n,r){if(bi){var i=Zs(e,t,n,r);if(i===null)as(e,t,r,Vi,n),cu(e,r);else if(xm(i,e,t,n,r))r.stopPropagation();else if(cu(e,r),t&4&&-1<Am.indexOf(e)){for(;i!==null;){var o=Gr(i);if(o!==null&&Ad(o),o=Zs(e,t,n,r),o===null&&as(e,t,r,Vi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else as(e,t,r,null,n)}}var Vi=null;function Zs(e,t,n,r){if(Vi=null,e=Qa(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Id(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function Ud(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Em()){case qa:return 1;case Rd:return 4;case Bi:case Im:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var kt=null,Za=null,Ii=null;function Fd(){if(Ii)return Ii;var e,t=Za,n=t.length,r,i="value"in kt?kt.value:kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ii=i.slice(e,1<r?1-r:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function fu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:fu,this.isPropagationStopped=fu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Ce(Gn),Kr=W({},Gn,{view:0,detail:0}),Um=Ce(Kr),Xo,Zo,nr,yo=W({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Xo=e.screenX-nr.screenX,Zo=e.screenY-nr.screenY):Zo=Xo=0,nr=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),hu=Ce(yo),Fm=W({},yo,{dataTransfer:0}),zm=Ce(Fm),$m=W({},Kr,{relatedTarget:0}),es=Ce($m),Bm=W({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=Ce(Bm),bm=W({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vm=Ce(bm),Hm=W({},Gn,{data:0}),pu=Ce(Hm),Wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gm[e])?!!t[e]:!1}function tl(){return Qm}var qm=W({},Kr,{key:function(e){if(e.key){var t=Wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=Ce(qm),Jm=W({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=Ce(Jm),Xm=W({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Zm=Ce(Xm),eg=W({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Ce(eg),ng=W({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Ce(ng),ig=[9,13,27,32],nl=lt&&"CompositionEvent"in window,fr=null;lt&&"documentMode"in document&&(fr=document.documentMode);var og=lt&&"TextEvent"in window&&!fr,zd=lt&&(!nl||fr&&8<fr&&11>=fr),gu=String.fromCharCode(32),vu=!1;function $d(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function sg(e,t){switch(e){case"compositionend":return Bd(t);case"keypress":return t.which!==32?null:(vu=!0,gu);case"textInput":return e=t.data,e===gu&&vu?null:e;default:return null}}function ag(e,t){if(_n)return e==="compositionend"||!nl&&$d(e,t)?(e=Fd(),Ii=Za=kt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function jd(e,t,n,r){yd(r),t=Hi(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,Pr=null;function ug(e){Xd(e,0)}function wo(e){var t=In(e);if(dd(t))return e}function cg(e,t){if(e==="change")return t}var bd=!1;if(lt){var ts;if(lt){var ns="oninput"in document;if(!ns){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),ns=typeof wu.oninput=="function"}ts=ns}else ts=!1;bd=ts&&(!document.documentMode||9<document.documentMode)}function _u(){hr&&(hr.detachEvent("onpropertychange",Vd),Pr=hr=null)}function Vd(e){if(e.propertyName==="value"&&wo(Pr)){var t=[];jd(t,Pr,e,Qa(e)),Ed(ug,t)}}function dg(e,t,n){e==="focusin"?(_u(),hr=t,Pr=n,hr.attachEvent("onpropertychange",Vd)):e==="focusout"&&_u()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Pr)}function hg(e,t){if(e==="click")return wo(t)}function pg(e,t){if(e==="input"||e==="change")return wo(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:mg;function Nr(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!be(e[i],t[i]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wd(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=Wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(r!==null&&rl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Eu(n,o);var s=Eu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=lt&&"documentMode"in document&&11>=document.documentMode,Sn=null,ea=null,pr=null,ta=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ta||Sn==null||Sn!==Fi(r)||(r=Sn,"selectionStart"in r&&rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Nr(pr,r)||(pr=r,r=Hi(ea,"onSelect"),0<r.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},rs={},Kd={};lt&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function _o(e){if(rs[e])return rs[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kd)return rs[e]=t[n];return e}var Gd=_o("animationend"),Qd=_o("animationiteration"),qd=_o("animationstart"),Yd=_o("transitionend"),Jd=new Map,ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){Jd.set(e,t),hn(t,[e])}for(var is=0;is<ku.length;is++){var os=ku[is],yg=os.toLowerCase(),wg=os[0].toUpperCase()+os.slice(1);$t(yg,"on"+wg)}$t(Gd,"onAnimationEnd");$t(Qd,"onAnimationIteration");$t(qd,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Yd,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_g=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ym(r,t,void 0,e),e.currentTarget=null}function Xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Tu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Tu(i,a,u),o=l}}}if($i)throw e=Ys,$i=!1,Ys=null,e}function B(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var r=e+"__bubble";n.has(r)||(Zd(t,e,2,!1),n.add(r))}function ss(e,t,n){var r=0;t&&(r|=4),Zd(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[di]){e[di]=!0,sd.forEach(function(n){n!=="selectionchange"&&(_g.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,ss("selectionchange",!1,t))}}function Zd(e,t,n,r){switch(Ud(t)){case 1:var i=Lm;break;case 4:i=Mm;break;default:i=Xa}n=i.bind(null,t,n,e),i=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function as(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ed(function(){var u=o,f=Qa(n),p=[];e:{var m=Jd.get(e);if(m!==void 0){var g=el,_=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":g=Ym;break;case"focusin":_="focus",g=es;break;case"focusout":_="blur",g=es;break;case"beforeblur":case"afterblur":g=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zm;break;case Gd:case Qd:case qd:g=jm;break;case Yd:g=tg;break;case"scroll":g=Um;break;case"wheel":g=rg;break;case"copy":case"cut":case"paste":g=Vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mu}var y=(t&4)!==0,P=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,d!==null&&(v=kr(c,d),v!=null&&y.push(Ar(c,v,h)))),P)break;c=c.return}0<y.length&&(m=new g(m,_,null,n,f),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Gs&&(_=n.relatedTarget||n.fromElement)&&(Qt(_)||_[ut]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Qt(_):null,_!==null&&(P=pn(_),_!==P||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=hu,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=mu,v="onPointerLeave",d="onPointerEnter",c="pointer"),P=g==null?m:In(g),h=_==null?m:In(_),m=new y(v,c+"leave",g,n,f),m.target=P,m.relatedTarget=h,v=null,Qt(f)===u&&(y=new y(d,c+"enter",_,n,f),y.target=h,y.relatedTarget=P,v=y),P=v,g&&_)t:{for(y=g,d=_,c=0,h=y;h;h=vn(h))c++;for(h=0,v=d;v;v=vn(v))h++;for(;0<c-h;)y=vn(y),c--;for(;0<h-c;)d=vn(d),h--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=vn(y),d=vn(d)}y=null}else y=null;g!==null&&Cu(p,m,g,y,!1),_!==null&&P!==null&&Cu(p,P,_,y,!0)}}e:{if(m=u?In(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=cg;else if(yu(m))if(bd)S=pg;else{S=fg;var k=dg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=hg);if(S&&(S=S(e,u))){jd(p,S,n,f);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&bs(m,"number",m.value)}switch(k=u?In(u):window,e){case"focusin":(yu(k)||k.contentEditable==="true")&&(Sn=k,ea=u,pr=null);break;case"focusout":pr=ea=Sn=null;break;case"mousedown":ta=!0;break;case"contextmenu":case"mouseup":case"dragend":ta=!1,Iu(p,n,f);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":Iu(p,n,f)}var T;if(nl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else _n?$d(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(zd&&n.locale!=="ko"&&(_n||C!=="onCompositionStart"?C==="onCompositionEnd"&&_n&&(T=Fd()):(kt=f,Za="value"in kt?kt.value:kt.textContent,_n=!0)),k=Hi(u,C),0<k.length&&(C=new pu(C,e,null,n,f),p.push({event:C,listeners:k}),T?C.data=T:(T=Bd(n),T!==null&&(C.data=T)))),(T=og?sg(e,n):ag(e,n))&&(u=Hi(u,"onBeforeInput"),0<u.length&&(f=new pu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=T))}Xd(p,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=kr(e,n),o!=null&&r.unshift(Ar(e,o,i)),o=kr(e,t),o!=null&&r.push(Ar(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=kr(n,o),l!=null&&s.unshift(Ar(n,l,a))):i||(l=kr(n,o),l!=null&&s.push(Ar(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Sg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(Sg,`
`).replace(Eg,"")}function fi(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(w(425))}function Wi(){}var na=null,ra=null;function ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(Tg)}:oa;function Tg(e){setTimeout(function(){throw e})}function ls(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),We="__reactFiber$"+Qn,xr="__reactProps$"+Qn,ut="__reactContainer$"+Qn,sa="__reactEvents$"+Qn,Cg="__reactListeners$"+Qn,Rg="__reactHandles$"+Qn;function Qt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nu(e);e!==null;){if(n=e[We])return n;e=Nu(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[We]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function So(e){return e[xr]||null}var aa=[],kn=-1;function Bt(e){return{current:e}}function j(e){0>kn||(e.current=aa[kn],aa[kn]=null,kn--)}function z(e,t){kn++,aa[kn]=e.current,e.current=t}var zt={},le=Bt(zt),ge=Bt(!1),rn=zt;function $n(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Ki(){j(ge),j(le)}function Ou(e,t,n){if(le.current!==zt)throw Error(w(168));z(le,t),z(ge,n)}function ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,dm(e)||"Unknown",i));return W({},n,r)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,rn=le.current,z(le,e),z(ge,ge.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ef(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,j(ge),j(le),z(le,e)):j(ge),z(ge,n)}var tt=null,Eo=!1,us=!1;function tf(e){tt===null?tt=[e]:tt.push(e)}function Pg(e){Eo=!0,tf(e)}function jt(){if(!us&&tt!==null){us=!0;var e=0,t=U;try{var n=tt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Eo=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Cd(qa,jt),i}finally{U=t,us=!1}}return null}var Tn=[],Cn=0,Qi=null,qi=0,Re=[],Pe=0,on=null,rt=1,it="";function Wt(e,t){Tn[Cn++]=qi,Tn[Cn++]=Qi,Qi=e,qi=t}function nf(e,t,n){Re[Pe++]=rt,Re[Pe++]=it,Re[Pe++]=on,on=e;var r=rt;e=it;var i=32-$e(r)-1;r&=~(1<<i),n+=1;var o=32-$e(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-$e(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function il(e){e.return!==null&&(Wt(e,1),nf(e,1,0))}function ol(e){for(;e===Qi;)Qi=Tn[--Cn],Tn[Cn]=null,qi=Tn[--Cn],Tn[Cn]=null;for(;e===on;)on=Re[--Pe],Re[Pe]=null,it=Re[--Pe],Re[Pe]=null,rt=Re[--Pe],Re[Pe]=null}var Ee=null,_e=null,b=!1,ze=null;function rf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,_e=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,_e=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(b){var t=_e;if(t){var n=t;if(!xu(e,t)){if(la(e))throw Error(w(418));t=Ot(n.nextSibling);var r=Ee;t&&xu(e,t)?rf(r,n):(e.flags=e.flags&-4097|2,b=!1,Ee=e)}}else{if(la(e))throw Error(w(418));e.flags=e.flags&-4097|2,b=!1,Ee=e}}}function Du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function hi(e){if(e!==Ee)return!1;if(!b)return Du(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ia(e.type,e.memoizedProps)),t&&(t=_e)){if(la(e))throw of(),Error(w(418));for(;t;)rf(e,t),t=Ot(t.nextSibling)}if(Du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ee?Ot(e.stateNode.nextSibling):null;return!0}function of(){for(var e=_e;e;)e=Ot(e.nextSibling)}function Bn(){_e=Ee=null,b=!1}function sl(e){ze===null?ze=[e]:ze.push(e)}var Ng=pt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yi=Bt(null),Ji=null,Rn=null,al=null;function ll(){al=Rn=Ji=null}function ul(e){var t=Yi.current;j(Yi),e._currentValue=t}function ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Ji=e,al=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(al!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(Ji===null)throw Error(w(308));Rn=e,Ji.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var qt=null;function cl(e){qt===null?qt=[e]:qt.push(e)}function sf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,cl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,f=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(m=t,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(g,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,m=typeof _=="function"?_.call(g,p,m):_,m==null)break e;p=W({},p,m);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=p}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var lf=new od.Component().refs;function da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=Dt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Be(t,e,i,r),Ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=Dt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Be(t,e,i,r),Ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Dt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(Be(t,e,r,n),Ti(t,e,r))}};function Uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,o):!0}function uf(e,t,n){var r=!1,i=zt,o=t.contextType;return typeof o=="object"&&o!==null?o=xe(o):(i=ve(t)?rn:le.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function fa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=lf,dl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xe(o):(o=ve(t)?rn:le.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(da(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Io.enqueueReplaceState(i,i.state,null),Xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===lf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function cf(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Lt(d,c),d.index=0,d.sibling=null,d}function o(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,h,v){return c===null||c.tag!==6?(c=gs(h,d.mode,v),c.return=d,c):(c=i(c,h),c.return=d,c)}function l(d,c,h,v){var S=h.type;return S===wn?f(d,c,h.props.children,v,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&zu(S)===c.type)?(v=i(c,h.props),v.ref=rr(d,c,h),v.return=d,v):(v=Ai(h.type,h.key,h.props,null,d.mode,v),v.ref=rr(d,c,h),v.return=d,v)}function u(d,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=vs(h,d.mode,v),c.return=d,c):(c=i(c,h.children||[]),c.return=d,c)}function f(d,c,h,v,S){return c===null||c.tag!==7?(c=en(h,d.mode,v,S),c.return=d,c):(c=i(c,h),c.return=d,c)}function p(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=gs(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ri:return h=Ai(c.type,c.key,c.props,null,d.mode,h),h.ref=rr(d,null,c),h.return=d,h;case yn:return c=vs(c,d.mode,h),c.return=d,c;case vt:var v=c._init;return p(d,v(c._payload),h)}if(ar(c)||Xn(c))return c=en(c,d.mode,h,null),c.return=d,c;pi(d,c)}return null}function m(d,c,h,v){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(d,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ri:return h.key===S?l(d,c,h,v):null;case yn:return h.key===S?u(d,c,h,v):null;case vt:return S=h._init,m(d,c,S(h._payload),v)}if(ar(h)||Xn(h))return S!==null?null:f(d,c,h,v,null);pi(d,h)}return null}function g(d,c,h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(h)||null,a(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ri:return d=d.get(v.key===null?h:v.key)||null,l(c,d,v,S);case yn:return d=d.get(v.key===null?h:v.key)||null,u(c,d,v,S);case vt:var k=v._init;return g(d,c,h,k(v._payload),S)}if(ar(v)||Xn(v))return d=d.get(h)||null,f(c,d,v,S,null);pi(c,v)}return null}function _(d,c,h,v){for(var S=null,k=null,T=c,C=c=0,$=null;T!==null&&C<h.length;C++){T.index>C?($=T,T=null):$=T.sibling;var D=m(d,T,h[C],v);if(D===null){T===null&&(T=$);break}e&&T&&D.alternate===null&&t(d,T),c=o(D,c,C),k===null?S=D:k.sibling=D,k=D,T=$}if(C===h.length)return n(d,T),b&&Wt(d,C),S;if(T===null){for(;C<h.length;C++)T=p(d,h[C],v),T!==null&&(c=o(T,c,C),k===null?S=T:k.sibling=T,k=T);return b&&Wt(d,C),S}for(T=r(d,T);C<h.length;C++)$=g(T,d,C,h[C],v),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?C:$.key),c=o($,c,C),k===null?S=$:k.sibling=$,k=$);return e&&T.forEach(function(Le){return t(d,Le)}),b&&Wt(d,C),S}function y(d,c,h,v){var S=Xn(h);if(typeof S!="function")throw Error(w(150));if(h=S.call(h),h==null)throw Error(w(151));for(var k=S=null,T=c,C=c=0,$=null,D=h.next();T!==null&&!D.done;C++,D=h.next()){T.index>C?($=T,T=null):$=T.sibling;var Le=m(d,T,D.value,v);if(Le===null){T===null&&(T=$);break}e&&T&&Le.alternate===null&&t(d,T),c=o(Le,c,C),k===null?S=Le:k.sibling=Le,k=Le,T=$}if(D.done)return n(d,T),b&&Wt(d,C),S;if(T===null){for(;!D.done;C++,D=h.next())D=p(d,D.value,v),D!==null&&(c=o(D,c,C),k===null?S=D:k.sibling=D,k=D);return b&&Wt(d,C),S}for(T=r(d,T);!D.done;C++,D=h.next())D=g(T,d,C,D.value,v),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?C:D.key),c=o(D,c,C),k===null?S=D:k.sibling=D,k=D);return e&&T.forEach(function(Yn){return t(d,Yn)}),b&&Wt(d,C),S}function P(d,c,h,v){if(typeof h=="object"&&h!==null&&h.type===wn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ri:e:{for(var S=h.key,k=c;k!==null;){if(k.key===S){if(S=h.type,S===wn){if(k.tag===7){n(d,k.sibling),c=i(k,h.props.children),c.return=d,d=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&zu(S)===k.type){n(d,k.sibling),c=i(k,h.props),c.ref=rr(d,k,h),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}h.type===wn?(c=en(h.props.children,d.mode,v,h.key),c.return=d,d=c):(v=Ai(h.type,h.key,h.props,null,d.mode,v),v.ref=rr(d,c,h),v.return=d,d=v)}return s(d);case yn:e:{for(k=h.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=i(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=vs(h,d.mode,v),c.return=d,d=c}return s(d);case vt:return k=h._init,P(d,c,k(h._payload),v)}if(ar(h))return _(d,c,h,v);if(Xn(h))return y(d,c,h,v);pi(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,h),c.return=d,d=c):(n(d,c),c=gs(h,d.mode,v),c.return=d,d=c),s(d)):n(d,c)}return P}var jn=cf(!0),df=cf(!1),Qr={},Ge=Bt(Qr),Dr=Bt(Qr),Lr=Bt(Qr);function Yt(e){if(e===Qr)throw Error(w(174));return e}function fl(e,t){switch(z(Lr,t),z(Dr,e),z(Ge,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hs(t,e)}j(Ge),z(Ge,t)}function bn(){j(Ge),j(Dr),j(Lr)}function ff(e){Yt(Lr.current);var t=Yt(Ge.current),n=Hs(t,e.type);t!==n&&(z(Dr,e),z(Ge,n))}function hl(e){Dr.current===e&&(j(Ge),j(Dr))}var V=Bt(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function pl(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Ci=pt.ReactCurrentDispatcher,ds=pt.ReactCurrentBatchConfig,sn=0,H=null,Y=null,Z=null,eo=!1,mr=!1,Mr=0,Og=0;function oe(){throw Error(w(321))}function ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function gl(e,t,n,r,i,o){if(sn=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ci.current=e===null||e.memoizedState===null?Lg:Mg,e=n(r,i),mr){o=0;do{if(mr=!1,Mr=0,25<=o)throw Error(w(301));o+=1,Z=Y=null,t.updateQueue=null,Ci.current=Ug,e=n(r,i)}while(mr)}if(Ci.current=to,t=Y!==null&&Y.next!==null,sn=0,Z=Y=H=null,eo=!1,t)throw Error(w(300));return e}function vl(){var e=Mr!==0;return Mr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function De(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function Ur(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((sn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,H.lanes|=f,an|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,an|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hs(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);be(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hf(){}function pf(e,t){var n=H,r=De(),i=t(),o=!be(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,yl(vf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Fr(9,gf.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(w(349));sn&30||mf(n,t,i)}return i}function mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gf(e,t,n,r){t.value=n,t.getSnapshot=r,yf(t)&&wf(e)}function vf(e,t,n){return n(function(){yf(t)&&wf(e)})}function yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function wf(e){var t=ct(e,1);t!==null&&Be(t,e,1,-1)}function $u(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Dg.bind(null,H,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _f(){return De().memoizedState}function Ri(e,t,n,r){var i=He();H.flags|=e,i.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&ml(r,s.deps)){i.memoizedState=Fr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Fr(1|t,n,o,r)}function Bu(e,t){return Ri(8390656,8,e,t)}function yl(e,t){return ko(2048,8,e,t)}function Sf(e,t){return ko(4,2,e,t)}function Ef(e,t){return ko(4,4,e,t)}function If(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,If.bind(null,t,e),n)}function wl(){}function Tf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rf(e,t,n){return sn&21?(be(n,t)||(n=Nd(),H.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Ag(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ds.transition;ds.transition={};try{e(!1),t()}finally{U=n,ds.transition=r}}function Pf(){return De().memoizedState}function xg(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))Of(t,n);else if(n=sf(e,t,n,r),n!==null){var i=de();Be(n,e,r,i),Af(n,t,r)}}function Dg(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))Of(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,be(a,s)){var l=t.interleaved;l===null?(i.next=i,cl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=sf(e,t,i,r),n!==null&&(i=de(),Be(n,e,r,i),Af(n,t,r))}}function Nf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Of(e,t){mr=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}var to={readContext:xe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Lg={readContext:xe,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,If.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:wl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=Ag.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=He();if(b){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));sn&30||mf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bu(vf.bind(null,r,o,e),[e]),r.flags|=2048,Fr(9,gf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=ee.identifierPrefix;if(b){var n=it,r=rt;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Og++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mg={readContext:xe,useCallback:Tf,useContext:xe,useEffect:yl,useImperativeHandle:kf,useInsertionEffect:Sf,useLayoutEffect:Ef,useMemo:Cf,useReducer:fs,useRef:_f,useState:function(){return fs(Ur)},useDebugValue:wl,useDeferredValue:function(e){var t=De();return Rf(t,Y.memoizedState,e)},useTransition:function(){var e=fs(Ur)[0],t=De().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1},Ug={readContext:xe,useCallback:Tf,useContext:xe,useEffect:yl,useImperativeHandle:kf,useInsertionEffect:Sf,useLayoutEffect:Ef,useMemo:Cf,useReducer:hs,useRef:_f,useState:function(){return hs(Ur)},useDebugValue:wl,useDeferredValue:function(e){var t=De();return Y===null?t.memoizedState=e:Rf(t,Y.memoizedState,e)},useTransition:function(){var e=hs(Ur)[0],t=De().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=cm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ha(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fg=typeof WeakMap=="function"?WeakMap:Map;function xf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,Ia=r),ha(e,t)},n}function Df(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ha(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ha(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jg.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var zg=pt.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?df(t,null,n,r):jn(t,e.child,n,r)}function Hu(e,t,n,r,i){n=n.render;var o=t.ref;return Ln(t,i),r=gl(e,t,n,r,o,i),n=vl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(b&&n&&il(t),t.flags|=1,ce(e,t,r,i),t.child)}function Wu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lf(e,t,o,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Lt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Nr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,dt(e,t,i)}return pa(e,t,n,r,i)}function Mf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Nn,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Nn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Nn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Nn,we),we|=r;return ce(e,t,i,n),t.child}function Uf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var o=ve(n)?rn:le.current;return o=$n(t,o),Ln(t,i),n=gl(e,t,n,r,o,i),r=vl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(b&&r&&il(t),t.flags|=1,ce(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(ve(n)){var o=!0;Gi(t)}else o=!1;if(Ln(t,i),t.stateNode===null)Pi(e,t),uf(t,n,r),fa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=xe(u):(u=ve(n)?rn:le.current,u=$n(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fu(t,s,r,u),yt=!1;var m=t.memoizedState;s.state=m,Xi(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ge.current||yt?(typeof f=="function"&&(da(t,n,f,r),l=t.memoizedState),(a=yt||Uu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,af(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=xe(l):(l=ve(n)?rn:le.current,l=$n(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Fu(t,s,r,l),yt=!1,m=t.memoizedState,s.state=m,Xi(t,r,s,i);var _=t.memoizedState;a!==p||m!==_||ge.current||yt?(typeof g=="function"&&(da(t,n,g,r),_=t.memoizedState),(u=yt||Uu(t,n,u,r,m,_,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ma(e,t,n,r,o,i)}function ma(e,t,n,r,i,o){Uf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Au(t,n,!1),dt(e,t,o);r=t.stateNode,zg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=jn(t,e.child,null,o),t.child=jn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function Ff(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),fl(e,t.containerInfo)}function Gu(e,t,n,r,i){return Bn(),sl(i),t.flags|=256,ce(e,t,n,r),t.child}var ga={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function zf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ro(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=va(n),t.memoizedState=ga,e):_l(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $g(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Lt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Lt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?va(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ga,r}return o=e.child,e=o.sibling,r=Lt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _l(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&sl(r),jn(t,e.child,null,n),e=_l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $g(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ps(Error(w(422))),mi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ro({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jn(t,e.child,null,s),t.child.memoizedState=va(s),t.memoizedState=ga,o);if(!(t.mode&1))return mi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=ps(o,r,void 0),mi(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),Be(r,e,i,-1))}return Cl(),r=ps(Error(w(421))),mi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Ot(i.nextSibling),Ee=t,b=!0,ze=null,e!==null&&(Re[Pe++]=rt,Re[Pe++]=it,Re[Pe++]=on,rt=e.id,it=e.overflow,on=t),t=_l(t,r.children),t.flags|=4096,t)}function Qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ca(e.return,t,n)}function ms(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $f(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ms(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ms(t,!0,n,null,o);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bg(e,t,n){switch(t.tag){case 3:Ff(t),Bn();break;case 5:ff(t);break;case 1:ve(t.type)&&Gi(t);break;case 4:fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Yi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?zf(e,t,n):(z(V,V.current&1),e=dt(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $f(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Mf(e,t,n)}return dt(e,t,n)}var Bf,ya,jf,bf;Bf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ya=function(){};jf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(Ge.current);var o=null;switch(n){case"input":i=Bs(e,i),r=Bs(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=Vs(e,i),r=Vs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wi)}Ws(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Er.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Er.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jg(e,t,n){var r=t.pendingProps;switch(ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&Ki(),se(t),null;case 3:return r=t.stateNode,bn(),j(ge),j(le),pl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Ca(ze),ze=null))),ya(e,t),se(t),null;case 5:hl(t);var i=Yt(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)jf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=Yt(Ge.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[xr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)B(ur[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ru(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":ou(r,o),B("invalid",r)}Ws(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fi(r.textContent,a,e),i=["children",""+a]):Er.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":ii(r),iu(r,o,!0);break;case"textarea":ii(r),su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[xr]=r,Bf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ks(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)B(ur[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":ru(e,r),i=Bs(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":ou(e,r),i=Vs(e,r),B("invalid",e);break;default:i=r}Ws(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?vd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&md(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ir(e,l):typeof l=="number"&&Ir(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Er.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",e):l!=null&&Ha(e,o,l,s))}switch(n){case"input":ii(e),iu(e,r,!1);break;case"textarea":ii(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?On(e,!!r.multiple,o,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Yt(Lr.current),Yt(Ge.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return se(t),null;case 13:if(j(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&_e!==null&&t.mode&1&&!(t.flags&128))of(),Bn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[We]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else ze!==null&&(Ca(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Cl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return bn(),ya(e,t),e===null&&Or(t.stateNode.containerInfo),se(t),null;case 10:return ul(t.type._context),se(t),null;case 17:return ve(t.type)&&Ki(),se(t),null;case 19:if(j(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ir(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Zi(e),s!==null){for(t.flags|=128,ir(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Hn&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!b)return se(t),null}else 2*Q()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Tl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function bg(e,t){switch(ol(t),t.tag){case 1:return ve(t.type)&&Ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),j(ge),j(le),pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(j(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(V),null;case 4:return bn(),null;case 10:return ul(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var gi=!1,ae=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,E=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){K(e,t,r)}}var qu=!1;function Hg(e,t){if(na=bi,e=Wd(),rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++f===r&&(l=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ra={focusedElem:e,selectionRange:n},bi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,P=_.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ue(t.type,y),P);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return _=qu,qu=!1,_}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wa(t,n,o)}i=i.next}while(i!==r)}}function To(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[xr],delete t[sa],delete t[Cg],delete t[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var ne=null,Fe=!1;function mt(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(vo,n)}catch{}switch(n.tag){case 5:ae||Pn(n,t);case 6:var r=ne,i=Fe;ne=null,mt(e,t,n),ne=r,Fe=i,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?ls(e.parentNode,n):e.nodeType===1&&ls(e,n),Rr(e)):ls(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,mt(e,t,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wa(n,t,s),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!ae&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,mt(e,t,n),ae=r):mt(e,t,n);break;default:mt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vg),t.forEach(function(r){var i=Zg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Fe=!1;break e;case 3:ne=a.stateNode.containerInfo,Fe=!0;break e;case 4:ne=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ne===null)throw Error(w(160));Wf(o,s,i),ne=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}function Kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{gr(3,e,e.return),To(3,e)}catch(y){K(e,e.return,y)}try{gr(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Ir(i,"")}catch(y){K(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fd(i,o),Ks(a,s);var u=Ks(a,o);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?vd(i,p):f==="dangerouslySetInnerHTML"?md(i,p):f==="children"?Ir(i,p):Ha(i,f,p,u)}switch(a){case"input":js(i,o);break;case"textarea":hd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?On(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?On(i,!!o.multiple,o.defaultValue,!0):On(i,!!o.multiple,o.multiple?[]:"",!1))}i[xr]=o}catch(y){K(e,e.return,y)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){K(e,e.return,y)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Il=Q())),r&4&&Ju(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||f,Me(t,e),ae=u):Me(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(E=e,f=e.child;f!==null;){for(p=E=f;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:gr(4,m,m.return);break;case 1:Pn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:Pn(m,m.return);break;case 22:if(m.memoizedState!==null){Zu(p);continue}}g!==null?(g.return=m,E=g):Zu(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gd("display",s))}catch(y){K(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){K(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&Ju(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ir(i,""),r.flags&=-33);var o=Yu(e);Ea(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Yu(e);Sa(e,a,s);break;default:throw Error(w(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wg(e,t,n){E=e,Gf(e)}function Gf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||gi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=gi;var u=ae;if(gi=s,(ae=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?ec(i):l!==null?(l.return=s,E=l):ec(i);for(;o!==null;)E=o,Gf(o),o=o.sibling;E=i,gi=a,ae=u}Xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Xu(e)}}function Xu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||To(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Rr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&_a(t)}catch(m){K(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Zu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function ec(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{To(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{_a(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{_a(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Kg=Math.ceil,no=pt.ReactCurrentDispatcher,Sl=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,M=0,ee=null,q=null,re=0,we=0,Nn=Bt(0),J=0,zr=null,an=0,Co=0,El=0,vr=null,pe=null,Il=0,Hn=1/0,et=null,ro=!1,Ia=null,xt=null,vi=!1,Tt=null,io=0,yr=0,ka=null,Ni=-1,Oi=0;function de(){return M&6?Q():Ni!==-1?Ni:Ni=Q()}function Dt(e){return e.mode&1?M&2&&re!==0?re&-re:Ng.transition!==null?(Oi===0&&(Oi=Nd()),Oi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ud(e.type)),e):1}function Be(e,t,n,r){if(50<yr)throw yr=0,ka=null,Error(w(185));Wr(e,n,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(Co|=n),J===4&&_t(e,re)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(Hn=Q()+500,Eo&&jt()))}function ye(e,t){var n=e.callbackNode;Nm(e,t);var r=ji(e,e===ee?re:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?Pg(tc.bind(null,e)):tf(tc.bind(null,e)),kg(function(){!(M&6)&&jt()}),n=null;else{switch(Od(r)){case 1:n=qa;break;case 4:n=Rd;break;case 16:n=Bi;break;case 536870912:n=Pd;break;default:n=Bi}n=th(n,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qf(e,t){if(Ni=-1,Oi=0,M&6)throw Error(w(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=ji(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=M;M|=2;var o=Yf();(ee!==e||re!==t)&&(et=null,Hn=Q()+500,Zt(e,t));do try{qg();break}catch(a){qf(e,a)}while(1);ll(),no.current=o,M=i,q!==null?t=0:(ee=null,re=0,t=J)}if(t!==0){if(t===2&&(i=Js(e),i!==0&&(r=i,t=Ta(e,i))),t===1)throw n=zr,Zt(e,0),_t(e,r),ye(e,Q()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Gg(i)&&(t=oo(e,r),t===2&&(o=Js(e),o!==0&&(r=o,t=Ta(e,o))),t===1))throw n=zr,Zt(e,0),_t(e,r),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Kt(e,pe,et);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Il+500-Q(),10<t)){if(ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oa(Kt.bind(null,e,pe,et),t);break}Kt(e,pe,et);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-$e(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kg(r/1960))-r,10<r){e.timeoutHandle=oa(Kt.bind(null,e,pe,et),r);break}Kt(e,pe,et);break;case 5:Kt(e,pe,et);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?Qf.bind(null,e):null}function Ta(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=oo(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ca(t)),e}function Ca(e){pe===null?pe=e:pe.push.apply(pe,e)}function Gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~El,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if(M&6)throw Error(w(327));Mn();var t=ji(e,0);if(!(t&1))return ye(e,Q()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=zr,Zt(e,0),_t(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,pe,et),ye(e,Q()),null}function kl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Hn=Q()+500,Eo&&jt())}}function ln(e){Tt!==null&&Tt.tag===0&&!(M&6)&&Mn();var t=M;M|=1;var n=Oe.transition,r=U;try{if(Oe.transition=null,U=1,e)return e()}finally{U=r,Oe.transition=n,M=t,!(M&6)&&jt()}}function Tl(){we=Nn.current,j(Nn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ig(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ol(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:bn(),j(ge),j(le),pl();break;case 5:hl(r);break;case 4:bn();break;case 13:j(V);break;case 19:j(V);break;case 10:ul(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(ee=e,q=e=Lt(e.current,null),re=we=t,J=0,zr=null,El=Co=an=0,pe=vr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qt=null}return e}function qf(e,t){do{var n=q;try{if(ll(),Ci.current=to,eo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eo=!1}if(sn=0,Z=Y=H=null,mr=!1,Mr=0,Sl.current=null,n===null||n.return===null){J=1,zr=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=bu(s);if(g!==null){g.flags&=-257,Vu(g,s,a,o,t),g.mode&1&&ju(o,u,t),t=g,l=u;var _=t.updateQueue;if(_===null){var y=new Set;y.add(l),t.updateQueue=y}else _.add(l);break e}else{if(!(t&1)){ju(o,u,t),Cl();break e}l=Error(w(426))}}else if(b&&a.mode&1){var P=bu(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Vu(P,s,a,o,t),sl(Vn(l,a));break e}}o=l=Vn(l,a),J!==4&&(J=2),vr===null?vr=[o]:vr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=xf(o,l,t);Lu(o,d);break e;case 1:a=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xt===null||!xt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Df(o,a,t);Lu(o,v);break e}}o=o.return}while(o!==null)}Xf(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Yf(){var e=no.current;return no.current=to,e===null?to:e}function Cl(){(J===0||J===3||J===2)&&(J=4),ee===null||!(an&268435455)&&!(Co&268435455)||_t(ee,re)}function oo(e,t){var n=M;M|=2;var r=Yf();(ee!==e||re!==t)&&(et=null,Zt(e,t));do try{Qg();break}catch(i){qf(e,i)}while(1);if(ll(),M=n,no.current=r,q!==null)throw Error(w(261));return ee=null,re=0,J}function Qg(){for(;q!==null;)Jf(q)}function qg(){for(;q!==null&&!_m();)Jf(q)}function Jf(e){var t=eh(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Xf(e):q=t,Sl.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bg(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=jg(n,t,we),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Kt(e,t,n){var r=U,i=Oe.transition;try{Oe.transition=null,U=1,Yg(e,t,n,r)}finally{Oe.transition=i,U=r}return null}function Yg(e,t,n,r){do Mn();while(Tt!==null);if(M&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Om(e,o),e===ee&&(q=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,th(Bi,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=U;U=1;var a=M;M|=4,Sl.current=null,Hg(e,n),Kf(n,e),gg(ra),bi=!!na,ra=na=null,e.current=n,Wg(n),Sm(),M=a,U=s,Oe.transition=o}else e.current=n;if(vi&&(vi=!1,Tt=e,io=i),o=e.pendingLanes,o===0&&(xt=null),km(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ro)throw ro=!1,e=Ia,Ia=null,e;return io&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===ka?yr++:(yr=0,ka=e):yr=0,jt(),null}function Mn(){if(Tt!==null){var e=Od(io),t=Oe.transition,n=U;try{if(Oe.transition=null,U=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,io=0,M&6)throw Error(w(331));var i=M;for(M|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:gr(8,f,o)}var p=f.child;if(p!==null)p.return=f,E=p;else for(;E!==null;){f=E;var m=f.sibling,g=f.return;if(Vf(f),f===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){s=E;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,E=h;else e:for(s=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:To(9,a)}}catch(S){K(a,a.return,S)}if(a===s){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(M=i,jt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(vo,e)}catch{}r=!0}return r}finally{U=n,Oe.transition=t}}return!1}function nc(e,t,n){t=Vn(n,t),t=xf(e,t,1),e=At(e,t,1),t=de(),e!==null&&(Wr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)nc(e,e,n);else for(;t!==null;){if(t.tag===3){nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Vn(n,e),e=Df(t,e,1),t=At(t,e,1),e=de(),t!==null&&(Wr(t,1,e),ye(t,e));break}}t=t.return}}function Jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Q()-Il?Zt(e,0):El|=n),ye(e,t)}function Zf(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=de();e=ct(e,t),e!==null&&(Wr(e,t,n),ye(e,n))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zf(e,n)}function Zg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Zf(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Bg(e,t,n);me=!!(e.flags&131072)}else me=!1,b&&t.flags&1048576&&nf(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var i=$n(t,le.current);Ln(t,n),i=gl(null,t,r,e,i,n);var o=vl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,Gi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dl(t),i.updater=Io,t.stateNode=i,i._reactInternals=t,fa(t,r,e,n),t=ma(null,t,r,!0,o,n)):(t.tag=0,b&&o&&il(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tv(r),e=Ue(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,Ue(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ku(e,t,r,i,n);case 3:e:{if(Ff(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,af(e,t),Xi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(w(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(w(424)),t),t=Gu(e,t,r,n,i);break e}else for(_e=Ot(t.stateNode.containerInfo.firstChild),Ee=t,b=!0,ze=null,n=df(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){t=dt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return ff(t),e===null&&ua(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ia(r,i)?s=null:o!==null&&ia(r,o)&&(t.flags|=32),Uf(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ua(t),null;case 13:return zf(e,t,n);case 4:return fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Hu(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(Yi,r._currentValue),r._currentValue=s,o!==null)if(be(o.value,s)){if(o.children===i.children&&!ge.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ca(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ca(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ln(t,n),i=xe(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),Wu(e,t,r,i,n);case 15:return Lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Pi(e,t),t.tag=1,ve(r)?(e=!0,Gi(t)):e=!1,Ln(t,n),uf(t,r,i),fa(t,r,i,n),ma(null,t,r,!0,e,n);case 19:return $f(e,t,n);case 22:return Mf(e,t,n)}throw Error(w(156,t.tag))};function th(e,t){return Cd(e,t)}function ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new ev(e,t,n,r)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tv(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===Ga)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ai(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Rl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return en(n.children,i,o,t);case Wa:s=8,i|=8;break;case Us:return e=Ne(12,n,t,i|2),e.elementType=Us,e.lanes=o,e;case Fs:return e=Ne(13,n,t,i),e.elementType=Fs,e.lanes=o,e;case zs:return e=Ne(19,n,t,i),e.elementType=zs,e.lanes=o,e;case ud:return Ro(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ad:s=10;break e;case ld:s=9;break e;case Ka:s=11;break e;case Ga:s=14;break e;case vt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ud,e.lanes=n,e.stateNode={isHidden:!1},e}function gs(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function vs(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pl(e,t,n,r,i,o,s,a,l){return e=new nv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(o),e}function rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return zt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return ef(e,n,t)}return t}function rh(e,t,n,r,i,o,s,a,l){return e=Pl(n,r,!0,e,i,o,s,a,l),e.context=nh(null),n=e.current,r=de(),i=Dt(n),o=at(r,i),o.callback=t??null,At(n,o,i),e.current.lanes=i,Wr(e,i,r),ye(e,r),e}function Po(e,t,n,r){var i=t.current,o=de(),s=Dt(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,s),e!==null&&(Be(e,i,s,o),Ti(e,i,s)),s}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){rc(e,t),(e=e.alternate)&&rc(e,t)}function iv(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}No.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Po(e,t,null,null)};No.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Po(null,e,null,null)}),t[ut]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Md(e)}};function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function ov(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=so(s);o.call(u)}}var s=rh(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=s,e[ut]=s.current,Or(e.nodeType===8?e.parentNode:e),ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=so(l);a.call(u)}}var l=Pl(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=l,e[ut]=l.current,Or(e.nodeType===8?e.parentNode:e),ln(function(){Po(t,l,n,r)}),l}function Ao(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=so(s);a.call(l)}}Po(t,s,e,i)}else s=ov(n,t,e,i,r);return so(s)}Ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Ya(t,n|1),ye(t,Q()),!(M&6)&&(Hn=Q()+500,jt()))}break;case 13:ln(function(){var r=ct(e,1);if(r!==null){var i=de();Be(r,e,1,i)}}),Nl(e,1)}};Ja=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=de();Be(t,e,134217728,n)}Nl(e,134217728)}};xd=function(e){if(e.tag===13){var t=Dt(e),n=ct(e,t);if(n!==null){var r=de();Be(n,e,t,r)}Nl(e,t)}};Dd=function(){return U};Ld=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Qs=function(e,t,n){switch(t){case"input":if(js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=So(r);if(!i)throw Error(w(90));dd(r),js(r,i)}}}break;case"textarea":hd(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};_d=kl;Sd=ln;var sv={usingClientEntryPoint:!1,Events:[Gr,In,So,yd,wd,kl]},or={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},av={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{vo=yi.inject(av),Ke=yi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Al(t))throw Error(w(200));return rv(e,t,null,n)};Te.createRoot=function(e,t){if(!Al(e))throw Error(w(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pl(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Or(e.nodeType===8?e.parentNode:e),new Ol(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return ln(e)};Te.hydrate=function(e,t,n){if(!Oo(t))throw Error(w(200));return Ao(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Al(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};Te.render=function(e,t,n){if(!Oo(t))throw Error(w(200));return Ao(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(w(40));return e._reactRootContainer?(ln(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=kl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ao(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Te})(im);var oc=Ds;xs.createRoot=oc.createRoot,xs.hydrateRoot=oc.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const sc="popstate";function lv(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=mn(i.location.hash.substr(1));return Ra("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:oh(o))}function r(i,o){uv(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return dv(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cv(){return Math.random().toString(36).substr(2,8)}function ac(e,t){return{usr:e.state,key:e.key,idx:t}}function Ra(e,t,n,r){return n===void 0&&(n=null),$r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mn(t):t,{state:n,key:t&&t.key||r||cv()})}function oh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ct.Pop,l=null,u=f();u==null&&(u=0,s.replaceState($r({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){a=Ct.Pop;let P=f(),d=P==null?null:P-u;u=P,l&&l({action:a,location:y.location,delta:d})}function m(P,d){a=Ct.Push;let c=Ra(y.location,P,d);n&&n(c,P),u=f()+1;let h=ac(c,u),v=y.createHref(c);try{s.pushState(h,"",v)}catch{i.location.assign(v)}o&&l&&l({action:a,location:y.location,delta:1})}function g(P,d){a=Ct.Replace;let c=Ra(y.location,P,d);n&&n(c,P),u=f();let h=ac(c,u),v=y.createHref(c);s.replaceState(h,"",v),o&&l&&l({action:a,location:y.location,delta:0})}function _(P){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:oh(P);return te(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return a},get location(){return e(i,s)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sc,p),l=P,()=>{i.removeEventListener(sc,p),l=null}},createHref(P){return t(i,P)},createURL:_,encodeLocation(P){let d=_(P);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(P){return s.go(P)}};return y}var lc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lc||(lc={}));function fv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mn(t):t,i=lh(r.pathname||"/",n);if(i==null)return null;let o=sh(e);hv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Ev(o[a],Tv(i));return s}function sh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sh(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:_v(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ah(o.path))i(o,s,l)}),t}function ah(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ah(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function hv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pv=/^:\w+$/,mv=3,gv=2,vv=1,yv=10,wv=-2,uc=e=>e==="*";function _v(e,t){let n=e.split("/"),r=n.length;return n.some(uc)&&(r+=wv),t&&(r+=gv),n.filter(i=>!uc(i)).reduce((i,o)=>i+(pv.test(o)?mv:o===""?vv:yv),r)}function Sv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ev(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Iv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;o.push({params:r,pathname:tn([i,f.pathname]),pathnameBase:Av(tn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=tn([i,f.pathnameBase]))}return o}function Iv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[f]=Cv(a[p]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function kv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Tv(e){try{return decodeURI(e)}catch(t){return xl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cv(e,t){try{return decodeURIComponent(e)}catch(n){return xl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function lh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mn(e):e;return{pathname:n?n.startsWith("/")?n:Pv(n,t):t,search:xv(r),hash:Dv(i)}}function Pv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ys(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ov(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mn(e):(i=$r({},e),te(!i.pathname||!i.pathname.includes("?"),ys("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),ys("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),ys("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let l=Rv(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const tn=e=>e.join("/").replace(/\/\/+/g,"/"),Av=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mv=["post","put","patch","delete"];[...Mv];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Fv=typeof Object.is=="function"?Object.is:Uv,{useState:zv,useEffect:$v,useLayoutEffect:Bv,useDebugValue:jv}=As;function bv(e,t,n){const r=t(),[{inst:i},o]=zv({inst:{value:r,getSnapshot:t}});return Bv(()=>{i.value=r,i.getSnapshot=t,ws(i)&&o({inst:i})},[e,r,t]),$v(()=>(ws(i)&&o({inst:i}),e(()=>{ws(i)&&o({inst:i})})),[e]),jv(r),r}function ws(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Fv(n,r)}catch{return!0}}function Vv(e,t,n){return t()}const Hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wv=!Hv,Kv=Wv?Vv:bv;"useSyncExternalStore"in As&&(e=>e.useSyncExternalStore)(As);const uh=R.createContext(null),ch=R.createContext(null),Dl=R.createContext(null),xo=R.createContext(null),qr=R.createContext({outlet:null,matches:[]}),dh=R.createContext(null);function Do(){return R.useContext(xo)!=null}function fh(){return Do()||te(!1),R.useContext(xo).location}function Lo(){Do()||te(!1);let{basename:e,navigator:t}=R.useContext(Dl),{matches:n}=R.useContext(qr),{pathname:r}=fh(),i=JSON.stringify(Nv(n).map(a=>a.pathnameBase)),o=R.useRef(!1);return R.useEffect(()=>{o.current=!0}),R.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Ov(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:tn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Gv(e,t){Do()||te(!1);let{navigator:n}=R.useContext(Dl),r=R.useContext(ch),{matches:i}=R.useContext(qr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=fh(),u;if(t){var f;let y=typeof t=="string"?mn(t):t;a==="/"||(f=y.pathname)!=null&&f.startsWith(a)||te(!1),u=y}else u=l;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",g=fv(e,{pathname:m}),_=Jv(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:tn([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:tn([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&_?R.createElement(xo.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ct.Pop}},_):_}function Qv(){let e=ty(),t=Lv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,o)}class qv extends R.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.createElement(qr.Provider,{value:this.props.routeContext},R.createElement(dh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yv(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(uh);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(qr.Provider,{value:t},r)}function Jv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||te(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||R.createElement(Qv,null):null,f=t.concat(r.slice(0,a+1)),p=()=>R.createElement(Yv,{match:s,routeContext:{outlet:o,matches:f}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?R.createElement(qv,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:f}}):p()},null)}var cc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(cc||(cc={}));var ao;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ao||(ao={}));function Xv(e){let t=R.useContext(ch);return t||te(!1),t}function Zv(e){let t=R.useContext(qr);return t||te(!1),t}function ey(e){let t=Zv(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function ty(){var e;let t=R.useContext(dh),n=Xv(ao.UseRouteError),r=ey(ao.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function xi(e){te(!1)}function ny(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:o,static:s=!1}=e;Do()&&te(!1);let a=t.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=mn(r));let{pathname:u="/",search:f="",hash:p="",state:m=null,key:g="default"}=r,_=R.useMemo(()=>{let y=lh(u,a);return y==null?null:{pathname:y,search:f,hash:p,state:m,key:g}},[a,u,f,p,m,g]);return _==null?null:R.createElement(Dl.Provider,{value:l},R.createElement(xo.Provider,{children:n,value:{location:_,navigationType:i}}))}function ry(e){let{children:t,location:n}=e,r=R.useContext(uh),i=r&&!t?r.router.routes:Na(t);return Gv(i,n)}var dc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(dc||(dc={}));new Promise(()=>{});function Na(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;if(r.type===R.Fragment){n.push.apply(n,Na(r.props.children,t));return}r.type!==xi&&te(!1),!r.props.index||!r.props.children||te(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Na(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iy(e){let{basename:t,children:n,window:r}=e,i=R.useRef();i.current==null&&(i.current=lv({window:r,v5Compat:!0}));let o=i.current,[s,a]=R.useState({action:o.action,location:o.location});return R.useLayoutEffect(()=>o.listen(a),[o]),R.createElement(ny,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var fc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(fc||(fc={}));var hc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hc||(hc={}));/**
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
 */const hh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},oy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[f],n[p],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):oy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new sy;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const _=u<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(e){const t=hh(e);return ph.encodeByteArray(t,!0)},mh=function(e){return ay(e).replace(/\./g,"")},gh=function(e){try{return ph.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ly(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uy=()=>ly().__FIREBASE_DEFAULTS__,cy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gh(e[1]);return t&&JSON.parse(t)},Ll=()=>{try{return uy()||cy()||dy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fy=e=>{var t,n;return(n=(t=Ll())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hy=()=>{var e;return(e=Ll())===null||e===void 0?void 0:e.config},vh=e=>{var t;return(t=Ll())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class py{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function my(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function yh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vy(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wh(){try{return typeof indexedDB=="object"}catch{return!1}}function _h(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function yy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wy="FirebaseError";class Ze extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=wy,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?_y(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ze(i,a,r)}}function _y(e,t){return e.replace(Sy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Sy=/\{\$([^}]+)}/g;function Ey(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Br(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(pc(o)&&pc(s)){if(!Br(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pc(e){return e!==null&&typeof e=="object"}/**
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
 */function Yr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Iy(e,t){const n=new ky(e,t);return n.subscribe.bind(n)}class ky{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ty(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=_s),i.error===void 0&&(i.error=_s),i.complete===void 0&&(i.complete=_s);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ty(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function _s(){}/**
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
 */const Cy=1e3,Ry=2,Py=4*60*60*1e3,Ny=.5;function mc(e,t=Cy,n=Ry){const r=t*Math.pow(n,e),i=Math.round(Ny*r*(Math.random()-.5)*2);return Math.min(Py,r+i)}/**
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
 */function bt(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Oy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new py;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xy(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ay(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ay(e){return e===Gt?void 0:e}function xy(e){return e.instantiationMode==="EAGER"}/**
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
 */class Dy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Oy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Ly={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},My=F.INFO,Uy={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Fy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Uy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ml{constructor(t){this.name=t,this._logLevel=My,this._logHandler=Fy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ly[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const zy=(e,t)=>t.some(n=>e instanceof n);let gc,vc;function $y(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function By(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sh=new WeakMap,Oa=new WeakMap,Eh=new WeakMap,Ss=new WeakMap,Ul=new WeakMap;function jy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Mt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Sh.set(n,e)}).catch(()=>{}),Ul.set(t,e),t}function by(e){if(Oa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Oa.set(e,t)}let Aa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Oa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Eh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vy(e){Aa=e(Aa)}function Hy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Es(this),t,...n);return Eh.set(r,t.sort?t.sort():[t]),Mt(r)}:By().includes(e)?function(...t){return e.apply(Es(this),t),Mt(Sh.get(this))}:function(...t){return Mt(e.apply(Es(this),t))}}function Wy(e){return typeof e=="function"?Hy(e):(e instanceof IDBTransaction&&by(e),zy(e,$y())?new Proxy(e,Aa):e)}function Mt(e){if(e instanceof IDBRequest)return jy(e);if(Ss.has(e))return Ss.get(e);const t=Wy(e);return t!==e&&(Ss.set(e,t),Ul.set(t,e)),t}const Es=e=>Ul.get(e);function Ih(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Mt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mt(s.result),l.oldVersion,l.newVersion,Mt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ky=["get","getKey","getAll","getAllKeys","count"],Gy=["put","add","delete","clear"],Is=new Map;function yc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Is.get(t))return Is.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Gy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ky.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Is.set(t,o),o}Vy(e=>({...e,get:(t,n,r)=>yc(t,n)||e.get(t,n,r),has:(t,n)=>!!yc(t,n)||e.has(t,n)}));/**
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
 */class Qy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xa="@firebase/app",wc="0.9.4";/**
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
 */const un=new Ml("@firebase/app"),Yy="@firebase/app-compat",Jy="@firebase/analytics-compat",Xy="@firebase/analytics",Zy="@firebase/app-check-compat",e0="@firebase/app-check",t0="@firebase/auth",n0="@firebase/auth-compat",r0="@firebase/database",i0="@firebase/database-compat",o0="@firebase/functions",s0="@firebase/functions-compat",a0="@firebase/installations",l0="@firebase/installations-compat",u0="@firebase/messaging",c0="@firebase/messaging-compat",d0="@firebase/performance",f0="@firebase/performance-compat",h0="@firebase/remote-config",p0="@firebase/remote-config-compat",m0="@firebase/storage",g0="@firebase/storage-compat",v0="@firebase/firestore",y0="@firebase/firestore-compat",w0="firebase",_0="9.17.2";/**
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
 */const Da="[DEFAULT]",S0={[xa]:"fire-core",[Yy]:"fire-core-compat",[Xy]:"fire-analytics",[Jy]:"fire-analytics-compat",[e0]:"fire-app-check",[Zy]:"fire-app-check-compat",[t0]:"fire-auth",[n0]:"fire-auth-compat",[r0]:"fire-rtdb",[i0]:"fire-rtdb-compat",[o0]:"fire-fn",[s0]:"fire-fn-compat",[a0]:"fire-iid",[l0]:"fire-iid-compat",[u0]:"fire-fcm",[c0]:"fire-fcm-compat",[d0]:"fire-perf",[f0]:"fire-perf-compat",[h0]:"fire-rc",[p0]:"fire-rc-compat",[m0]:"fire-gcs",[g0]:"fire-gcs-compat",[v0]:"fire-fst",[y0]:"fire-fst-compat","fire-js":"fire-js",[w0]:"fire-js-all"};/**
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
 */const lo=new Map,La=new Map;function E0(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(La.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;La.set(t,e);for(const n of lo.values())E0(n,e);return!0}function qn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const I0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new gn("app","Firebase",I0);/**
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
 */class k0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=_0;function kh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Da,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=hy()),!n)throw Ut.create("no-options");const o=lo.get(i);if(o){if(Br(n,o.options)&&Br(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const s=new Dy(i);for(const l of La.values())s.addComponent(l);const a=new k0(n,r,s);return lo.set(i,a),a}function Th(e=Da){const t=lo.get(e);if(!t&&e===Da)return kh();if(!t)throw Ut.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=S0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}ft(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const T0="firebase-heartbeat-database",C0=1,jr="firebase-heartbeat-store";let ks=null;function Ch(){return ks||(ks=Ih(T0,C0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jr)}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),ks}async function R0(e){try{return(await Ch()).transaction(jr).objectStore(jr).get(Rh(e))}catch(t){if(t instanceof Ze)un.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(n.message)}}}async function _c(e,t){try{const r=(await Ch()).transaction(jr,"readwrite");return await r.objectStore(jr).put(t,Rh(e)),r.done}catch(n){if(n instanceof Ze)un.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function Rh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const P0=1024,N0=30*24*60*60*1e3;class O0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=N0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sc(),{heartbeatsToSend:n,unsentEntries:r}=A0(this._heartbeatsCache.heartbeats),i=mh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sc(){return new Date().toISOString().substring(0,10)}function A0(e,t=P0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ec(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ec(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wh()?_h().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await R0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ec(e){return mh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function D0(e){ft(new Je("platform-logger",t=>new Qy(t),"PRIVATE")),ft(new Je("heartbeat",t=>new O0(t),"PRIVATE")),Qe(xa,wc,e),Qe(xa,wc,"esm2017"),Qe("fire-js","")}D0("");var L0="firebase",M0="9.17.2";/**
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
 */Qe(L0,M0,"app");const Ph="@firebase/installations",Fl="0.6.4";/**
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
 */const Nh=1e4,Oh=`w:${Fl}`,Ah="FIS_v2",U0="https://firebaseinstallations.googleapis.com/v1",F0=60*60*1e3,z0="installations",$0="Installations";/**
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
 */const B0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},cn=new gn(z0,$0,B0);function xh(e){return e instanceof Ze&&e.code.includes("request-failed")}/**
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
 */function Dh({projectId:e}){return`${U0}/projects/${e}/installations`}function Lh(e){return{token:e.token,requestStatus:2,expiresIn:b0(e.expiresIn),creationTime:Date.now()}}async function Mh(e,t){const r=(await t.json()).error;return cn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Uh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function j0(e,{refreshToken:t}){const n=Uh(e);return n.append("Authorization",V0(t)),n}async function Fh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function b0(e){return Number(e.replace("s","000"))}function V0(e){return`${Ah} ${e}`}/**
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
 */async function H0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Dh(e),i=Uh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Ah,appId:e.appId,sdkVersion:Oh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Fh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Lh(u.authToken)}}else throw await Mh("Create Installation",l)}/**
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
 */function zh(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function W0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const K0=/^[cdef][\w-]{21}$/,Ma="";function G0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Q0(e);return K0.test(n)?n:Ma}catch{return Ma}}function Q0(e){return W0(e).substr(0,22)}/**
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
 */function Uo(e){return`${e.appName}!${e.appId}`}/**
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
 */const $h=new Map;function Bh(e,t){const n=Uo(e);jh(n,t),q0(n,t)}function jh(e,t){const n=$h.get(e);if(n)for(const r of n)r(t)}function q0(e,t){const n=Y0();n&&n.postMessage({key:e,fid:t}),J0()}let Jt=null;function Y0(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=e=>{jh(e.data.key,e.data.fid)}),Jt}function J0(){$h.size===0&&Jt&&(Jt.close(),Jt=null)}/**
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
 */const X0="firebase-installations-database",Z0=1,dn="firebase-installations-store";let Ts=null;function zl(){return Ts||(Ts=Ih(X0,Z0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(dn)}}})),Ts}async function uo(e,t){const n=Uo(e),i=(await zl()).transaction(dn,"readwrite"),o=i.objectStore(dn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Bh(e,t.fid),t}async function bh(e){const t=Uo(e),r=(await zl()).transaction(dn,"readwrite");await r.objectStore(dn).delete(t),await r.done}async function Fo(e,t){const n=Uo(e),i=(await zl()).transaction(dn,"readwrite"),o=i.objectStore(dn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Bh(e,a.fid),a}/**
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
 */async function $l(e){let t;const n=await Fo(e.appConfig,r=>{const i=ew(r),o=tw(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ma?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ew(e){const t=e||{fid:G0(),registrationStatus:0};return Vh(t)}function tw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=nw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rw(e)}:{installationEntry:t}}async function nw(e,t){try{const n=await H0(e,t);return uo(e.appConfig,n)}catch(n){throw xh(n)&&n.customData.serverCode===409?await bh(e.appConfig):await uo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function rw(e){let t=await Ic(e.appConfig);for(;t.registrationStatus===1;)await zh(100),t=await Ic(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $l(e);return r||n}return t}function Ic(e){return Fo(e,t=>{if(!t)throw cn.create("installation-not-found");return Vh(t)})}function Vh(e){return iw(e)?{fid:e.fid,registrationStatus:0}:e}function iw(e){return e.registrationStatus===1&&e.registrationTime+Nh<Date.now()}/**
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
 */async function ow({appConfig:e,heartbeatServiceProvider:t},n){const r=sw(e,n),i=j0(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Oh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Fh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Lh(u)}else throw await Mh("Generate Auth Token",l)}function sw(e,{fid:t}){return`${Dh(e)}/${t}/authTokens:generate`}/**
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
 */async function Bl(e,t=!1){let n;const r=await Fo(e.appConfig,o=>{if(!Hh(o))throw cn.create("not-registered");const s=o.authToken;if(!t&&uw(s))return o;if(s.requestStatus===1)return n=aw(e,t),o;{if(!navigator.onLine)throw cn.create("app-offline");const a=dw(o);return n=lw(e,a),a}});return n?await n:r.authToken}async function aw(e,t){let n=await kc(e.appConfig);for(;n.authToken.requestStatus===1;)await zh(100),n=await kc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Bl(e,t):r}function kc(e){return Fo(e,t=>{if(!Hh(t))throw cn.create("not-registered");const n=t.authToken;return fw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lw(e,t){try{const n=await ow(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await uo(e.appConfig,r),n}catch(n){if(xh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await uo(e.appConfig,r)}throw n}}function Hh(e){return e!==void 0&&e.registrationStatus===2}function uw(e){return e.requestStatus===2&&!cw(e)}function cw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+F0}function dw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function fw(e){return e.requestStatus===1&&e.requestTime+Nh<Date.now()}/**
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
 */async function hw(e){const t=e,{installationEntry:n,registrationPromise:r}=await $l(t);return r?r.catch(console.error):Bl(t).catch(console.error),n.fid}/**
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
 */async function pw(e,t=!1){const n=e;return await mw(n),(await Bl(n,t)).token}async function mw(e){const{registrationPromise:t}=await $l(e);t&&await t}/**
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
 */function gw(e){if(!e||!e.options)throw Cs("App Configuration");if(!e.name)throw Cs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Cs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Cs(e){return cn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Wh="installations",vw="installations-internal",yw=e=>{const t=e.getProvider("app").getImmediate(),n=gw(t),r=qn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ww=e=>{const t=e.getProvider("app").getImmediate(),n=qn(t,Wh).getImmediate();return{getId:()=>hw(n),getToken:i=>pw(n,i)}};function _w(){ft(new Je(Wh,yw,"PUBLIC")),ft(new Je(vw,ww,"PRIVATE"))}_w();Qe(Ph,Fl);Qe(Ph,Fl,"esm2017");/**
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
 */const co="analytics",Sw="firebase_id",Ew="origin",Iw=60*1e3,kw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new Ml("@firebase/analytics");/**
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
 */function Gh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Tw(e,t){const n=document.createElement("script");n.src=`${Kh}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Cw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Rw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Gh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ie.error(a)}e("config",i,o)}async function Pw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Gh(n);for(const l of s){const u=a.find(p=>p.measurementId===l),f=u&&t[u.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ie.error(o)}}function Nw(e,t,n,r){async function i(o,s,a){try{o==="event"?await Pw(e,t,n,s,a):o==="config"?await Rw(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ie.error(l)}}return i}function Ow(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Nw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Aw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Kh)&&n.src.includes(e))return n;return null}/**
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
 */const xw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ae=new gn("analytics","Analytics",xw);/**
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
 */const Dw=30,Lw=1e3;class Mw{constructor(t={},n=Lw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Qh=new Mw;function Uw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Fw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Uw(r)},o=kw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function zw(e,t=Qh,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ae.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ae.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Iw),qh({appId:r,apiKey:i,measurementId:o},s,a,t)}async function qh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Qh){var o;const{appId:s,measurementId:a}=e;try{await $w(r,t)}catch(l){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await Fw(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!Bw(u)){if(i.deleteThrottleMetadata(s),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?mc(n,i.intervalMillis,Dw):mc(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),Ie.debug(`Calling attemptFetch again in ${f} millis`),qh(e,p,r,i)}}function $w(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Bw(e){if(!(e instanceof Ze)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class jw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function bw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function Vw(){if(wh())try{await _h()}catch(e){return Ie.warn(Ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hw(e,t,n,r,i,o,s){var a;const l=zw(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ie.error(g)),t.push(l);const u=Vw().then(g=>{if(g)return r.getId()}),[f,p]=await Promise.all([l,u]);Aw(o)||Tw(o,f.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[Ew]="firebase",m.update=!0,p!=null&&(m[Sw]=p),i("config",f.measurementId,m),f.measurementId}/**
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
 */class Ww{constructor(t){this.app=t}_delete(){return delete wr[this.app.options.appId],Promise.resolve()}}let wr={},Tc=[];const Cc={};let Rs="dataLayer",Kw="gtag",Rc,Yh,Pc=!1;function Gw(){const e=[];if(yh()&&e.push("This is a browser extension environment."),yy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ae.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function Qw(e,t,n){Gw();const r=e.options.appId;if(!r)throw Ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(wr[r]!=null)throw Ae.create("already-exists",{id:r});if(!Pc){Cw(Rs);const{wrappedGtag:o,gtagCore:s}=Ow(wr,Tc,Cc,Rs,Kw);Yh=o,Rc=s,Pc=!0}return wr[r]=Hw(e,Tc,Cc,t,Rc,Rs,n),new Ww(e)}function qw(e=Th()){e=bt(e);const t=qn(e,co);return t.isInitialized()?t.getImmediate():Yw(e)}function Yw(e,t={}){const n=qn(e,co);if(n.isInitialized()){const i=n.getImmediate();if(Br(t,n.getOptions()))return i;throw Ae.create("already-initialized")}return n.initialize({options:t})}function Jw(e,t,n,r){e=bt(e),bw(Yh,wr[e.app.options.appId],t,n,r).catch(i=>Ie.error(i))}const Nc="@firebase/analytics",Oc="0.9.4";function Xw(){ft(new Je(co,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Qw(r,i,n)},"PUBLIC")),ft(new Je("analytics-internal",e,"PRIVATE")),Qe(Nc,Oc),Qe(Nc,Oc,"esm2017");function e(t){try{const n=t.getProvider(co).getImmediate();return{logEvent:(r,i,o)=>Jw(n,r,i,o)}}catch(n){throw Ae.create("interop-component-reg-failed",{reason:n})}}}Xw();function jl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Jh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zw=Jh,Xh=new gn("auth","Firebase",Jh());/**
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
 */const Ac=new Ml("@firebase/auth");function Di(e,...t){Ac.logLevel<=F.ERROR&&Ac.error(`Auth (${Mo}): ${e}`,...t)}/**
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
 */function Xe(e,...t){throw bl(e,...t)}function qe(e,...t){return bl(e,...t)}function Zh(e,t,n){const r=Object.assign(Object.assign({},Zw()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function e1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Xe(e,"argument-error"),Zh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xh.create(e,...t)}function N(e,t,...n){if(!e)throw bl(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Di(t),new Error(t)}function ht(e,t){e||ot(t)}/**
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
 */const xc=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=xc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xc.set(e,t),t)}/**
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
 */function t1(e,t){const n=qn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Br(o,t??{}))return i;Xe(i,"already-initialized")}return n.initialize({options:t})}function n1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Ua(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function r1(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function i1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r1()||yh()||"connection"in navigator)?navigator.onLine:!0}function o1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Jr{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=my()||gy()}get(){return i1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vl(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ep{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const s1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const a1=new Jr(3e4,6e4);function l1(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zo(e,t,n,r,i={}){return tp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Yr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ep.fetch()(np(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function tp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},s1),t);try{const i=new c1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw wi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw wi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw wi(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zh(e,f,u);Xe(e,f)}}catch(i){if(i instanceof Ze)throw i;Xe(e,"internal-error",{message:String(i)})}}async function u1(e,t,n,r,i={}){const o=await zo(e,t,n,r,i);return"mfaPendingCredential"in o&&Xe(e,"multi-factor-auth-required",{_serverResponse:o}),o}function np(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Vl(e.config,i):`${e.config.apiScheme}://${i}`}class c1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),a1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function d1(e,t){return zo(e,"POST","/v1/accounts:delete",t)}async function f1(e,t){return zo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function _r(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function h1(e,t=!1){const n=bt(e),r=await n.getIdToken(t),i=Hl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:_r(Ps(i.auth_time)),issuedAtTime:_r(Ps(i.iat)),expirationTime:_r(Ps(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ps(e){return Number(e)*1e3}function Hl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const i=gh(n);return i?JSON.parse(i):(Di("Failed to decode base64 JWT payload"),null)}catch(i){return Di("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p1(e){const t=Hl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function br(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ze&&m1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function m1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class g1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await br(e,f1(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?w1(o.providerUserInfo):[],a=y1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new rp(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function v1(e){const t=bt(e);await fo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function y1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function w1(e){return e.map(t=>{var{providerId:n}=t,r=jl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _1(e,t){const n=await tp(e,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=np(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ep.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):p1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await _1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Vr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function gt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=jl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await br(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return h1(this,t)}reload(){return v1(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await br(this,d1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:h,emailVerified:v,isAnonymous:S,providerData:k,stsTokenManager:T}=n;N(h&&T,t,"internal-error");const C=Vr.fromJSON(this.name,T);N(typeof h=="string",t,"internal-error"),gt(p,t.name),gt(m,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof S=="boolean",t,"internal-error"),gt(g,t.name),gt(_,t.name),gt(y,t.name),gt(P,t.name),gt(d,t.name),gt(c,t.name);const $=new nn({uid:h,auth:t,email:m,emailVerified:v,displayName:p,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:C,createdAt:d,lastLoginAt:c});return k&&Array.isArray(k)&&($.providerData=k.map(D=>Object.assign({},D))),P&&($._redirectEventId=P),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Vr;i.updateFromServerResponse(n);const o=new nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await fo(o),o}}/**
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
 */class ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ip.type="NONE";const Lc=ip;/**
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
 */function Li(e,t,n){return`firebase:${e}:${t}:${n}`}class Un{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,o),this.fullPersistenceKey=Li("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Un(st(Lc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(Lc);const s=Li(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const p=nn._fromJSON(t,f);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Un(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Un(o,t,r))}}/**
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
 */function Mc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ap(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(op(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(up(t))return"Blackberry";if(cp(t))return"Webos";if(Wl(t))return"Safari";if((t.includes("chrome/")||sp(t))&&!t.includes("edge/"))return"Chrome";if(lp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function op(e=ue()){return/firefox\//i.test(e)}function Wl(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sp(e=ue()){return/crios\//i.test(e)}function ap(e=ue()){return/iemobile/i.test(e)}function lp(e=ue()){return/android/i.test(e)}function up(e=ue()){return/blackberry/i.test(e)}function cp(e=ue()){return/webos/i.test(e)}function $o(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function S1(e=ue()){var t;return $o(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function E1(){return vy()&&document.documentMode===10}function dp(e=ue()){return $o(e)||lp(e)||cp(e)||up(e)||/windows phone/i.test(e)||ap(e)}function I1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fp(e,t=[]){let n;switch(e){case"Browser":n=Mc(ue());break;case"Worker":n=`${Mc(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mo}/${r}`}/**
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
 */class k1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class T1{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uc(this),this.idTokenSubscription=new Uc(this),this.beforeStateQueue=new k1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await fo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=o1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?bt(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bo(e){return bt(e)}class Uc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Iy(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function C1(e,t,n){const r=Bo(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=hp(t),{host:s,port:a}=R1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||P1()}function hp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function R1(e){const t=hp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Fc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Fc(s)}}}function Fc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function P1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class pp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}/**
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
 */async function Fn(e,t){return u1(e,"POST","/v1/accounts:signInWithIdp",l1(e,t))}/**
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
 */const N1="http://localhost";class fn extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=jl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new fn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fn(t,n)}buildRequest(){const t={requestUri:N1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yr(n)}return t}}/**
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
 */class Kl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xr extends Kl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends Xr{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class nt extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nt.credentialFromTaggedObject(t)}static credentialFromError(t){return nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class Et extends Xr{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class It extends Xr{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */class Wn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await nn._fromIdTokenResponse(t,r,i),s=zc(r);return new Wn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=zc(r);return new Wn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function zc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ho extends Ze{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ho(t,n,r,i)}}function mp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(e,o,t,r):o})}async function O1(e,t,n=!1){const r=await br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wn._forOperation(e,"link",r)}/**
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
 */async function A1(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await br(e,mp(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=Hl(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Wn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),o}}/**
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
 */async function x1(e,t,n=!1){const r="signIn",i=await mp(e,r,t),o=await Wn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function D1(e,t,n,r){return bt(e).onIdTokenChanged(t,n,r)}function L1(e,t,n){return bt(e).beforeAuthStateChanged(t,n)}const po="__sak";/**
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
 */class gp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function M1(){const e=ue();return Wl(e)||$o(e)}const U1=1e3,F1=10;class vp extends gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=M1()&&I1(),this.fallbackToPolling=dp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);E1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,F1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},U1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vp.type="LOCAL";const z1=vp;/**
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
 */class yp extends gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yp.type="SESSION";const wp=yp;/**
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
 */function $1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new jo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await $1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
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
 */function Gl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class B1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Gl("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ye(){return window}function j1(e){Ye().location.href=e}/**
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
 */function _p(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function b1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function H1(){return _p()?self:null}/**
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
 */const Sp="firebaseLocalStorageDb",W1=1,mo="firebaseLocalStorage",Ep="fbase_key";class Zr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bo(e,t){return e.transaction([mo],t?"readwrite":"readonly").objectStore(mo)}function K1(){const e=indexedDB.deleteDatabase(Sp);return new Zr(e).toPromise()}function Fa(){const e=indexedDB.open(Sp,W1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(mo,{keyPath:Ep})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(mo)?t(r):(r.close(),await K1(),t(await Fa()))})})}async function $c(e,t,n){const r=bo(e,!0).put({[Ep]:t,value:n});return new Zr(r).toPromise()}async function G1(e,t){const n=bo(e,!1).get(t),r=await new Zr(n).toPromise();return r===void 0?null:r.value}function Bc(e,t){const n=bo(e,!0).delete(t);return new Zr(n).toPromise()}const Q1=800,q1=3;class Ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(H1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await b1(),!this.activeServiceWorker)return;this.sender=new B1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||V1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fa();return await $c(t,po,"1"),await Bc(t,po),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$c(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>G1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=bo(i,!1).getAll();return new Zr(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ip.type="LOCAL";const Y1=Ip;/**
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
 */function J1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function X1(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=qe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",J1().appendChild(r)})}function Z1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Jr(3e4,6e4);/**
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
 */function kp(e,t){return t?st(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ql extends pp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function e_(e){return x1(e.auth,new Ql(e),e.bypassAuthState)}function t_(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),A1(n,new Ql(e),e.bypassAuthState)}async function n_(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),O1(n,new Ql(e),e.bypassAuthState)}/**
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
 */class Tp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return e_;case"linkViaPopup":case"linkViaRedirect":return n_;case"reauthViaPopup":case"reauthViaRedirect":return t_;default:Xe(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r_=new Jr(2e3,1e4);async function Cp(e,t,n){const r=Bo(e);e1(e,t,Kl);const i=kp(r,n);return new Xt(r,"signInViaPopup",t,i).executeNotNull()}class Xt extends Tp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,r_.get())};t()}}Xt.currentPopupAction=null;/**
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
 */const i_="pendingRedirect",Mi=new Map;class o_ extends Tp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Mi.get(this.auth._key());if(!t){try{const r=await s_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Mi.set(this.auth._key(),t)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s_(e,t){const n=u_(t),r=l_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function a_(e,t){Mi.set(e._key(),t)}function l_(e){return st(e._redirectPersistence)}function u_(e){return Li(i_,e.config.apiKey,e.name)}async function c_(e,t,n=!1){const r=Bo(e),i=kp(r,t),s=await new o_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const d_=10*60*1e3;class f_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!h_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Rp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=d_&&this.cachedEventUids.clear(),this.cachedEventUids.has(jc(t))}saveEventToCache(t){this.cachedEventUids.add(jc(t)),this.lastProcessedEventTime=Date.now()}}function jc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Rp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function h_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(e);default:return!1}}/**
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
 */async function p_(e,t={}){return zo(e,"GET","/v1/projects",t)}/**
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
 */const m_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g_=/^https?/;async function v_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await p_(e);for(const n of t)try{if(y_(n))return}catch{}Xe(e,"unauthorized-domain")}function y_(e){const t=Ua(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!g_.test(n))return!1;if(m_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const w_=new Jr(3e4,6e4);function bc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function __(e){return new Promise((t,n)=>{var r,i,o;function s(){bc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(qe(e,"network-request-failed"))},timeout:w_.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=Z1("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(qe(e,"network-request-failed"))},X1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ui=null,t})}let Ui=null;function S_(e){return Ui=Ui||__(e),Ui}/**
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
 */const E_=new Jr(5e3,15e3),I_="__/auth/iframe",k_="emulator/auth/iframe",T_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vl(t,k_):`https://${e.config.authDomain}/${I_}`,r={apiKey:t.apiKey,appName:e.name,v:Mo},i=C_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Yr(r).slice(1)}`}async function P_(e){const t=await S_(e),n=Ye().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:R_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:T_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=qe(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},E_.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const N_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O_=500,A_=600,x_="_blank",D_="http://localhost";class Vc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L_(e,t,n,r=O_,i=A_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},N_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=sp(u)?x_:n),op(u)&&(t=t||D_,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(S1(u)&&a!=="_self")return M_(t||"",a),new Vc(null);const p=window.open(t||"",a,f);N(p,e,"popup-blocked");try{p.focus()}catch{}return new Vc(p)}function M_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const U_="__/auth/handler",F_="emulator/auth/handler";function Hc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Mo,eventId:i};if(t instanceof Kl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ey(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Xr){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${z_(e)}?${Yr(a).slice(1)}`}function z_({config:e}){return e.emulator?Vl(e,F_):`https://${e.authDomain}/${U_}`}/**
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
 */const Ns="webStorageSupport";class $_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wp,this._completeRedirectFn=c_,this._overrideRedirectResult=a_}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Hc(t,n,r,Ua(),i);return L_(t,s,Gl())}async _openRedirect(t,n,r,i){return await this._originValidation(t),j1(Hc(t,n,r,Ua(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await P_(t),r=new f_(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ns,{type:Ns},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ns];s!==void 0&&n(!!s),Xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return dp()||Wl()||$o()}}const B_=$_;var Wc="@firebase/auth",Kc="0.21.4";/**
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
 */class j_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function V_(e){ft(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(e)},f=new T1(a,l,u);return n1(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Je("auth-internal",t=>{const n=Bo(t.getProvider("auth").getImmediate());return(r=>new j_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Wc,Kc,b_(e)),Qe(Wc,Kc,"esm2017")}/**
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
 */const H_=5*60,W_=vh("authIdTokenMaxAge")||H_;let Gc=null;const K_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W_)return;const i=n==null?void 0:n.token;Gc!==i&&(Gc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G_(e=Th()){const t=qn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=t1(e,{popupRedirectResolver:B_,persistence:[Y1,z1,wp]}),r=vh("authTokenSyncURL");if(r){const o=K_(r);L1(n,o,()=>o(n.currentUser)),D1(n,s=>o(s))}const i=fy("auth");return i&&C1(n,`http://${i}`),n}V_("Browser");const Q_={apiKey:"AIzaSyBQW8BHrhweij93RP-jif7FB0BJmWWe6yI",authDomain:"online-shop-25.firebaseapp.com",projectId:"online-shop-25",storageBucket:"online-shop-25.appspot.com",messagingSenderId:"445130183188",appId:"1:445130183188:web:ab69f3361f833528eecd01",measurementId:"G-T93XCFM44G"},Pp=kh(Q_);qw(Pp);const je=G_(Pp),Np=new nt,q_="/online-shop/assets/logedOutProfileIcon-d865a437.png",Y_="/online-shop/assets/logedInProfileIcon-59f87b6b.png",J_="/online-shop/assets/companyLogo-a2d24ab5.png",X_="/online-shop/assets/cartIcon-440718d0.png";let Os=!1;function ql(){let e=Lo(),t;je.currentUser===null?t=q_:t=Y_;const n=()=>{je.currentUser||e("/login"),je.currentUser&&e("/account")};return Se("div",{className:"Navbar",children:[Se("button",{className:"menuButton",onClick:()=>{Os===!1?(Os=!0,console.log("Open"),document.querySelector(".menuContainer").classList.add("open")):(Os=!1,console.log("Close"),document.querySelector(".menuContainer").classList.remove("open"))},children:[A("div",{className:"menuButtonRow1"}),A("div",{className:"menuButtonRow2"}),A("div",{className:"menuButtonRow3"})]}),A("div",{className:"menuContainer"}),A("div",{className:"companyLogo",children:A("button",{onClick:()=>{e("/")},children:A("img",{src:J_})})}),Se("div",{className:"navBtns",children:[A("div",{className:"accountBtn",children:A("button",{onClick:n,children:A("img",{src:t})})}),A("div",{className:"cartBtn",children:A("button",{onClick:n,children:A("img",{src:X_})})})]})]})}function Z_(){let e;return je.currentUser===null?e="Please Log In !":e=`Loged in as ${je.currentUser.email}. Welcome back, ${je.currentUser.displayName}`,Se(rd,{children:[A(ql,{}),A("h1",{children:e})]})}const Op="/online-shop/assets/googleIcon-8edb2dab.png";function eS(){let e=Lo();return Se("div",{className:"signInContainer",children:[A("p",{children:"SIGN IN WITH..."}),Se("button",{onClick:()=>{Cp(je,Np).then(n=>{let r=n.user.email,i=n.user.displayName;const o={userEmail:r,userName:i};return console.log(je.currentUser),localStorage.setItem("userName",i),e("/"),console.log(o)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[A("img",{src:Op}),"GOOGLE"]})]})}function tS(){let e=Lo();return Se("div",{className:"signUpContainer",children:[A("p",{children:"SIGN UP WITH..."}),Se("button",{onClick:()=>{Cp(je,Np).then(n=>{let r=n.user.email,i=n.user.displayName;const o={userEmail:r,userName:i};return console.log(je.currentUser),localStorage.setItem("userName",i),e("/"),console.log(o)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[A("img",{src:Op}),"GOOGLE"]})]})}const Qc={SignIn:A(eS,{}),SignUp:A(tS,{})};function nS(){const[e,t]=R.useState(Qc.SignIn),n=r=>{document.querySelector(".activeBtn").classList.remove("activeBtn"),r.target.classList.add("activeBtn"),t(Qc[r.target.attributes.container.value])};return Se("div",{className:"loginMenu",children:[Se("div",{className:"loginBtns",children:[A("button",{className:"activeBtn",onClick:n,container:"SignIn",children:"SIGN IN"}),A("button",{onClick:n,container:"SignUp",children:"SIGN UP"})]}),A("div",{className:"loginMenuContent",children:e})]})}function rS(){return Se(rd,{children:[A(ql,{}),A("div",{className:"websiteContent",children:A(nS,{})})]})}function iS(){const e=Lo();return A("div",{className:"signOut-container",children:A("button",{onClick:()=>{je.signOut().then(function(){console.log("Signout Succesfull"),localStorage.setItem("userName",""),e("/login")},function(n){console.log("Signout Failed")})},children:"Sign Out"})})}function oS(){return Se("div",{children:[A(ql,{}),A("h1",{children:"Account"}),A(iS,{})]})}function sS(){return A("div",{className:"App",children:Se(ry,{children:[A(xi,{path:"/",element:A(Z_,{})}),A(xi,{path:"/login",element:A(rS,{})}),A(xi,{path:"/account",element:A(oS,{})})]})})}xs.createRoot(document.getElementById("root")).render(A(iy,{children:A(sS,{})}));
