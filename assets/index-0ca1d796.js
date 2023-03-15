function Mp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kr={},Fp={get exports(){return kr},set exports(e){kr=e}},yo={},P={},zp={get exports(){return P},set exports(e){P=e}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),Bp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Kp=Symbol.for("react.memo"),Qp=Symbol.for("react.lazy"),Zl=Symbol.iterator;function qp(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Zc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Jc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=Kn.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Jc}var ba=$a.prototype=new ed;ba.constructor=$a;Xc(ba,Kn.prototype);ba.isPureReactComponent=!0;var eu=Array.isArray,td=Object.prototype.hasOwnProperty,Va={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)td.call(t,r)&&!nd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Kr,type:e,key:o,ref:s,props:i,_owner:Va.current}}function Yp(e,t){return{$$typeof:Kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tu=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function Ii(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Kr:case Bp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Qo(s,0):r,eu(i)?(n="",e!=null&&(n=e.replace(tu,"$&/")+"/"),Ii(i,t,n,"",function(u){return u})):i!=null&&(Ha(i)&&(i=Yp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",eu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Qo(o,a);s+=Ii(o,t,n,l,i)}else if(l=qp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Qo(o,a++),s+=Ii(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ii(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},ki={transition:null},Zp={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Va};D.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Kn;D.Fragment=jp;D.Profiler=bp;D.PureComponent=$a;D.StrictMode=$p;D.Suspense=Gp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)td.call(t,l)&&!nd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Kr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vp,_context:e},e.Consumer=e};D.createElement=rd;D.createFactory=function(e){var t=rd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Wp,render:e}};D.isValidElement=Ha;D.lazy=function(e){return{$$typeof:Qp,_payload:{_status:-1,_result:e},_init:Xp}};D.memo=function(e,t){return{$$typeof:Kp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return he.current.useCallback(e,t)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,t){return he.current.useEffect(e,t)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return he.current.useMemo(e,t)};D.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return he.current.useTransition()};D.version="18.2.0";(function(e){e.exports=D})(zp);const em=Up(P),Ls=Mp({__proto__:null,default:em},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm=P,nm=Symbol.for("react.element"),rm=Symbol.for("react.fragment"),im=Object.prototype.hasOwnProperty,om=tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sm={key:!0,ref:!0,__self:!0,__source:!0};function id(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)im.call(t,r)&&!sm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nm,type:e,key:o,ref:s,props:i,_owner:om.current}}yo.Fragment=rm;yo.jsx=id;yo.jsxs=id;(function(e){e.exports=yo})(Fp);const wo=kr.Fragment,y=kr.jsx,U=kr.jsxs;var Ds={},Ms={},am={get exports(){return Ms},set exports(e){Ms=e}},Te={},Us={},lm={get exports(){return Us},set exports(e){Us=e}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,x){var A=k.length;k.push(x);e:for(;0<A;){var Q=A-1>>>1,Z=k[Q];if(0<i(Z,x))k[Q]=x,k[A]=Z,A=Q;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var x=k[0],A=k.pop();if(A!==x){k[0]=A;e:for(var Q=0,Z=k.length,ri=Z>>>1;Q<ri;){var Vt=2*(Q+1)-1,Ko=k[Vt],Ht=Vt+1,ii=k[Ht];if(0>i(Ko,A))Ht<Z&&0>i(ii,Ko)?(k[Q]=ii,k[Ht]=A,Q=Ht):(k[Q]=Ko,k[Vt]=A,Q=Vt);else if(Ht<Z&&0>i(ii,A))k[Q]=ii,k[Ht]=A,Q=Ht;else break e}}return x}function i(k,x){var A=k.sortIndex-x.sortIndex;return A!==0?A:k.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,m=3,g=!1,S=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(k){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=k)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function v(k){if(w=!1,h(k),!S)if(n(l)!==null)S=!0,Wo(E);else{var x=n(u);x!==null&&Go(v,x.startTime-k)}}function E(k,x){S=!1,w&&(w=!1,f(N),N=-1),g=!0;var A=m;try{for(h(x),p=n(l);p!==null&&(!(p.expirationTime>x)||k&&!De());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,m=p.priorityLevel;var Z=Q(p.expirationTime<=x);x=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&r(l),h(x)}else r(l);p=n(l)}if(p!==null)var ri=!0;else{var Vt=n(u);Vt!==null&&Go(v,Vt.startTime-x),ri=!1}return ri}finally{p=null,m=A,g=!1}}var T=!1,C=null,N=-1,j=5,L=-1;function De(){return!(e.unstable_now()-L<j)}function Xn(){if(C!==null){var k=e.unstable_now();L=k;var x=!0;try{x=C(!0,k)}finally{x?Zn():(T=!1,C=null)}}else T=!1}var Zn;if(typeof c=="function")Zn=function(){c(Xn)};else if(typeof MessageChannel<"u"){var Xl=new MessageChannel,Dp=Xl.port2;Xl.port1.onmessage=Xn,Zn=function(){Dp.postMessage(null)}}else Zn=function(){R(Xn,0)};function Wo(k){C=k,T||(T=!0,Zn())}function Go(k,x){N=R(function(){k(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,Wo(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(m){case 1:case 2:case 3:var x=3;break;default:x=m}var A=m;m=x;try{return k()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,x){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var A=m;m=k;try{return x()}finally{m=A}},e.unstable_scheduleCallback=function(k,x,A){var Q=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Q+A:Q):A=Q,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,k={id:d++,callback:x,priorityLevel:k,startTime:A,expirationTime:Z,sortIndex:-1},A>Q?(k.sortIndex=A,t(u,k),n(l)===null&&k===n(u)&&(w?(f(N),N=-1):w=!0,Go(v,A-Q))):(k.sortIndex=Z,t(l,k),S||g||(S=!0,Wo(E))),k},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(k){var x=m;return function(){var A=m;m=x;try{return k.apply(this,arguments)}finally{m=A}}}})(od);(function(e){e.exports=od})(lm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=P,ke=Us;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,Tr={};function hn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fs=Object.prototype.hasOwnProperty,um=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},ru={};function cm(e){return Fs.call(ru,e)?!0:Fs.call(nu,e)?!1:um.test(e)?ru[e]=!0:(nu[e]=!0,!1)}function dm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fm(e,t,n,r){if(t===null||typeof t>"u"||dm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wa,Ga);oe[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wa,Ga);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wa,Ga);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fm(t,n,i,r)&&(n=null),r||i===null?cm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ud=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),cd=Symbol.for("react.offscreen"),iu=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,qo;function lr(e){if(qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qo=t&&t[1]||""}return`
`+qo+e}var Yo=!1;function Jo(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function hm(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function $s(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case zs:return"Profiler";case Qa:return"StrictMode";case Bs:return"Suspense";case js:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ud:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:$s(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return $s(e(t))}catch{}}return null}function pm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $s(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e){var t=dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=mm(e))}function fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function Vs(e,t){hd(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hs(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hs(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ur(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function pd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gm=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function vd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vm=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if(vm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,An=null,Ln=null;function uu(e){if(e=Yr(e)){if(typeof Ys!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ko(t),Ys(e.stateNode,e.type,t))}}function wd(e){An?Ln?Ln.push(e):Ln=[e]:An=e}function _d(){if(An){var e=An,t=Ln;if(Ln=An=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function Sd(e,t){return e(t)}function Ed(){}var Xo=!1;function Id(e,t,n){if(Xo)return e(t,n);Xo=!0;try{return Sd(e,t,n)}finally{Xo=!1,(An!==null||Ln!==null)&&(Ed(),_d())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Js=!1;if(lt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Js=!1}function ym(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pr=!1,ji=null,$i=!1,Xs=null,wm={onError:function(e){pr=!0,ji=e}};function _m(e,t,n,r,i,o,s,a,l){pr=!1,ji=null,ym.apply(wm,arguments)}function Sm(e,t,n,r,i,o,s,a,l){if(_m.apply(this,arguments),pr){if(pr){var u=ji;pr=!1,ji=null}else throw Error(_(198));$i||($i=!0,Xs=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(pn(e)!==e)throw Error(_(188))}function Em(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Td(e){return e=Em(e),e!==null?Cd(e):null}function Cd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cd(e);if(t!==null)return t;e=e.sibling}return null}var Pd=ke.unstable_scheduleCallback,du=ke.unstable_cancelCallback,Im=ke.unstable_shouldYield,km=ke.unstable_requestPaint,q=ke.unstable_now,Tm=ke.unstable_getCurrentPriorityLevel,Xa=ke.unstable_ImmediatePriority,Nd=ke.unstable_UserBlockingPriority,bi=ke.unstable_NormalPriority,Cm=ke.unstable_LowPriority,Rd=ke.unstable_IdlePriority,_o=null,Ge=null;function Pm(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Om,Nm=Math.log,Rm=Math.LN2;function Om(e){return e>>>=0,e===0?32:31-(Nm(e)/Rm|0)|0}var ui=64,ci=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=cr(a):(o&=s,o!==0&&(r=cr(o)))}else s=n&~i,s!==0?r=cr(s):o!==0&&(r=cr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function xm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Be(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=xm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Od(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function Lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ad,el,Ld,Dd,Md,ea=!1,di=[],Nt=null,Rt=null,Ot=null,Nr=new Map,Rr=new Map,_t=[],Dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yr(t),t!==null&&el(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mm(e,t,n,r,i){switch(t){case"focusin":return Nt=nr(Nt,e,t,n,r,i),!0;case"dragenter":return Rt=nr(Rt,e,t,n,r,i),!0;case"mouseover":return Ot=nr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,nr(Nr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rr.set(o,nr(Rr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ud(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=kd(n),t!==null){e.blockedOn=t,Md(e.priority,function(){Ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qs=r,n.target.dispatchEvent(r),qs=null}else return t=Yr(n),t!==null&&el(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Ti(e)&&n.delete(t)}function Um(){ea=!1,Nt!==null&&Ti(Nt)&&(Nt=null),Rt!==null&&Ti(Rt)&&(Rt=null),Ot!==null&&Ti(Ot)&&(Ot=null),Nr.forEach(hu),Rr.forEach(hu)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Um)))}function Or(e){function t(i){return rr(i,e)}if(0<di.length){rr(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&rr(Nt,e),Rt!==null&&rr(Rt,e),Ot!==null&&rr(Ot,e),Nr.forEach(t),Rr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Ud(n),n.blockedOn===null&&_t.shift()}var Dn=pt.ReactCurrentBatchConfig,Hi=!0;function Fm(e,t,n,r){var i=F,o=Dn.transition;Dn.transition=null;try{F=1,tl(e,t,n,r)}finally{F=i,Dn.transition=o}}function zm(e,t,n,r){var i=F,o=Dn.transition;Dn.transition=null;try{F=4,tl(e,t,n,r)}finally{F=i,Dn.transition=o}}function tl(e,t,n,r){if(Hi){var i=ta(e,t,n,r);if(i===null)us(e,t,r,Wi,n),fu(e,r);else if(Mm(i,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Dm.indexOf(e)){for(;i!==null;){var o=Yr(i);if(o!==null&&Ad(o),o=ta(e,t,n,r),o===null&&us(e,t,r,Wi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else us(e,t,r,null,n)}}var Wi=null;function ta(e,t,n,r){if(Wi=null,e=Ja(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function Fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tm()){case Xa:return 1;case Nd:return 4;case bi:case Cm:return 16;case Rd:return 536870912;default:return 16}default:return 16}}var Tt=null,nl=null,Ci=null;function zd(){if(Ci)return Ci;var e,t=nl,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ci=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function pu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:pu,this.isPropagationStopped=pu,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Ce(Qn),qr=G({},Qn,{view:0,detail:0}),Bm=Ce(qr),es,ts,ir,So=G({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(es=e.screenX-ir.screenX,ts=e.screenY-ir.screenY):ts=es=0,ir=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),mu=Ce(So),jm=G({},So,{dataTransfer:0}),$m=Ce(jm),bm=G({},qr,{relatedTarget:0}),ns=Ce(bm),Vm=G({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=Ce(Vm),Wm=G({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=Ce(Wm),Km=G({},Qn,{data:0}),gu=Ce(Km),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ym[e])?!!t[e]:!1}function il(){return Jm}var Xm=G({},qr,{key:function(e){if(e.key){var t=Qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zm=Ce(Xm),eg=G({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=Ce(eg),tg=G({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),ng=Ce(tg),rg=G({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=Ce(rg),og=G({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sg=Ce(og),ag=[9,13,27,32],ol=lt&&"CompositionEvent"in window,mr=null;lt&&"documentMode"in document&&(mr=document.documentMode);var lg=lt&&"TextEvent"in window&&!mr,Bd=lt&&(!ol||mr&&8<mr&&11>=mr),yu=String.fromCharCode(32),wu=!1;function jd(e,t){switch(e){case"keyup":return ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function ug(e,t){switch(e){case"compositionend":return $d(t);case"keypress":return t.which!==32?null:(wu=!0,yu);case"textInput":return e=t.data,e===yu&&wu?null:e;default:return null}}function cg(e,t){if(_n)return e==="compositionend"||!ol&&jd(e,t)?(e=zd(),Ci=nl=Tt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dg[e.type]:t==="textarea"}function bd(e,t,n,r){wd(r),t=Gi(t,"onChange"),0<t.length&&(n=new rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,xr=null;function fg(e){Zd(e,0)}function Eo(e){var t=In(e);if(fd(t))return e}function hg(e,t){if(e==="change")return t}var Vd=!1;if(lt){var rs;if(lt){var is="oninput"in document;if(!is){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),is=typeof Su.oninput=="function"}rs=is}else rs=!1;Vd=rs&&(!document.documentMode||9<document.documentMode)}function Eu(){gr&&(gr.detachEvent("onpropertychange",Hd),xr=gr=null)}function Hd(e){if(e.propertyName==="value"&&Eo(xr)){var t=[];bd(t,xr,e,Ja(e)),Id(fg,t)}}function pg(e,t,n){e==="focusin"?(Eu(),gr=t,xr=n,gr.attachEvent("onpropertychange",Hd)):e==="focusout"&&Eu()}function mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(xr)}function gg(e,t){if(e==="click")return Eo(t)}function vg(e,t){if(e==="input"||e==="change")return Eo(t)}function yg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:yg;function Ar(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fs.call(t,i)||!be(e[i],t[i]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wg(e){var t=Gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ku(n,o);var s=ku(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _g=lt&&"documentMode"in document&&11>=document.documentMode,Sn=null,na=null,vr=null,ra=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||Sn==null||Sn!==Bi(r)||(r=Sn,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Ar(vr,r)||(vr=r,r=Gi(na,"onSelect"),0<r.length&&(t=new rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},os={},Kd={};lt&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Io(e){if(os[e])return os[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kd)return os[e]=t[n];return e}var Qd=Io("animationend"),qd=Io("animationiteration"),Yd=Io("animationstart"),Jd=Io("transitionend"),Xd=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Xd.set(e,t),hn(t,[e])}for(var ss=0;ss<Cu.length;ss++){var as=Cu[ss],Sg=as.toLowerCase(),Eg=as[0].toUpperCase()+as.slice(1);jt(Sg,"on"+Eg)}jt(Qd,"onAnimationEnd");jt(qd,"onAnimationIteration");jt(Yd,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Jd,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sm(r,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Pu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Pu(i,a,u),o=l}}}if($i)throw e=Xs,$i=!1,Xs=null,e}function $(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(ef(t,e,2,!1),n.add(r))}function ls(e,t,n){var r=0;t&&(r|=4),ef(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[pi]){e[pi]=!0,ad.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||ls(n,!1,e),ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,ls("selectionchange",!1,t))}}function ef(e,t,n,r){switch(Fd(t)){case 1:var i=Fm;break;case 4:i=zm;break;default:i=tl}n=i.bind(null,t,n,e),i=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function us(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Id(function(){var u=o,d=Ja(n),p=[];e:{var m=Xd.get(e);if(m!==void 0){var g=rl,S=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":g=Zm;break;case"focusin":S="focus",g=ns;break;case"focusout":S="blur",g=ns;break;case"beforeblur":case"afterblur":g=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ng;break;case Qd:case qd:case Yd:g=Hm;break;case Jd:g=ig;break;case"scroll":g=Bm;break;case"wheel":g=sg;break;case"copy":case"cut":case"paste":g=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vu}var w=(t&4)!==0,R=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,f!==null&&(v=Pr(c,f),v!=null&&w.push(Dr(c,v,h)))),R)break;c=c.return}0<w.length&&(m=new g(m,S,null,n,d),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==qs&&(S=n.relatedTarget||n.fromElement)&&(Qt(S)||S[ut]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=u,S=S?Qt(S):null,S!==null&&(R=pn(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=u),g!==S)){if(w=mu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=vu,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=g==null?m:In(g),h=S==null?m:In(S),m=new w(v,c+"leave",g,n,d),m.target=R,m.relatedTarget=h,v=null,Qt(d)===u&&(w=new w(f,c+"enter",S,n,d),w.target=h,w.relatedTarget=R,v=w),R=v,g&&S)t:{for(w=g,f=S,c=0,h=w;h;h=vn(h))c++;for(h=0,v=f;v;v=vn(v))h++;for(;0<c-h;)w=vn(w),c--;for(;0<h-c;)f=vn(f),h--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=vn(w),f=vn(f)}w=null}else w=null;g!==null&&Nu(p,m,g,w,!1),S!==null&&R!==null&&Nu(p,R,S,w,!0)}}e:{if(m=u?In(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=hg;else if(_u(m))if(Vd)E=vg;else{E=mg;var T=pg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=gg);if(E&&(E=E(e,u))){bd(p,E,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Hs(m,"number",m.value)}switch(T=u?In(u):window,e){case"focusin":(_u(T)||T.contentEditable==="true")&&(Sn=T,na=u,vr=null);break;case"focusout":vr=na=Sn=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Tu(p,n,d);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":Tu(p,n,d)}var C;if(ol)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _n?jd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Bd&&n.locale!=="ko"&&(_n||N!=="onCompositionStart"?N==="onCompositionEnd"&&_n&&(C=zd()):(Tt=d,nl="value"in Tt?Tt.value:Tt.textContent,_n=!0)),T=Gi(u,N),0<T.length&&(N=new gu(N,e,null,n,d),p.push({event:N,listeners:T}),C?N.data=C:(C=$d(n),C!==null&&(N.data=C)))),(C=lg?ug(e,n):cg(e,n))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(d=new gu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Zd(p,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=Pr(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Pr(n,o),l!=null&&s.unshift(Dr(n,l,a))):i||(l=Pr(n,o),l!=null&&s.push(Dr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var kg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Tg,"")}function mi(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(_(425))}function Ki(){}var ia=null,oa=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,Cg=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Pg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Ng)}:aa;function Ng(e){setTimeout(function(){throw e})}function cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),We="__reactFiber$"+qn,Mr="__reactProps$"+qn,ut="__reactContainer$"+qn,la="__reactEvents$"+qn,Rg="__reactListeners$"+qn,Og="__reactHandles$"+qn;function Qt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xu(e);e!==null;){if(n=e[We])return n;e=xu(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[We]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ko(e){return e[Mr]||null}var ua=[],kn=-1;function $t(e){return{current:e}}function b(e){0>kn||(e.current=ua[kn],ua[kn]=null,kn--)}function B(e,t){kn++,ua[kn]=e.current,e.current=t}var Bt={},ue=$t(Bt),ve=$t(!1),rn=Bt;function jn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Qi(){b(ve),b(ue)}function Au(e,t,n){if(ue.current!==Bt)throw Error(_(168));B(ue,t),B(ve,n)}function tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,pm(e)||"Unknown",i));return G({},n,r)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,rn=ue.current,B(ue,e),B(ve,ve.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=tf(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,b(ve),b(ue),B(ue,e)):b(ve),B(ve,n)}var tt=null,To=!1,ds=!1;function nf(e){tt===null?tt=[e]:tt.push(e)}function xg(e){To=!0,nf(e)}function bt(){if(!ds&&tt!==null){ds=!0;var e=0,t=F;try{var n=tt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,To=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Pd(Xa,bt),i}finally{F=t,ds=!1}}return null}var Tn=[],Cn=0,Yi=null,Ji=0,Pe=[],Ne=0,on=null,rt=1,it="";function Wt(e,t){Tn[Cn++]=Ji,Tn[Cn++]=Yi,Yi=e,Ji=t}function rf(e,t,n){Pe[Ne++]=rt,Pe[Ne++]=it,Pe[Ne++]=on,on=e;var r=rt;e=it;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var o=32-Be(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-Be(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function al(e){e.return!==null&&(Wt(e,1),rf(e,1,0))}function ll(e){for(;e===Yi;)Yi=Tn[--Cn],Tn[Cn]=null,Ji=Tn[--Cn],Tn[Cn]=null;for(;e===on;)on=Pe[--Ne],Pe[Ne]=null,it=Pe[--Ne],Pe[Ne]=null,rt=Pe[--Ne],Pe[Ne]=null}var Ee=null,Se=null,V=!1,ze=null;function of(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(V){var t=Se;if(t){var n=t;if(!Du(e,t)){if(ca(e))throw Error(_(418));t=xt(n.nextSibling);var r=Ee;t&&Du(e,t)?of(r,n):(e.flags=e.flags&-4097|2,V=!1,Ee=e)}}else{if(ca(e))throw Error(_(418));e.flags=e.flags&-4097|2,V=!1,Ee=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function gi(e){if(e!==Ee)return!1;if(!V)return Mu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=Se)){if(ca(e))throw sf(),Error(_(418));for(;t;)of(e,t),t=xt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?xt(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=Se;e;)e=xt(e.nextSibling)}function $n(){Se=Ee=null,V=!1}function ul(e){ze===null?ze=[e]:ze.push(e)}var Ag=pt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xi=$t(null),Zi=null,Pn=null,cl=null;function dl(){cl=Pn=Zi=null}function fl(e){var t=Xi.current;b(Xi),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){Zi=e,cl=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Zi===null)throw Error(_(308));Pn=e,Zi.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var qt=null;function hl(e){qt===null?qt=[e]:qt.push(e)}function af(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}function Uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(m=t,g=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){p=S.call(g,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(g,p,m):S,m==null)break e;p=G({},p,m);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=p}}function Fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var uf=new sd.Component().refs;function ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Dt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(je(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Dt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(je(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Dt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(je(t,e,r,n),Ni(t,e,r))}};function zu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function cf(e,t,n){var r=!1,i=Bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=ye(t)?rn:ue.current,r=t.contextTypes,o=(r=r!=null)?jn(e,i):Bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=uf,pl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=ye(t)?rn:ue.current,i.context=jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ha(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===uf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function df(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function o(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,v){return c===null||c.tag!==6?(c=ys(h,f.mode,v),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,v){var E=h.type;return E===wn?d(f,c,h.props.children,v,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&ju(E)===c.type)?(v=i(c,h.props),v.ref=or(f,c,h),v.return=f,v):(v=Di(h.type,h.key,h.props,null,f.mode,v),v.ref=or(f,c,h),v.return=f,v)}function u(f,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ws(h,f.mode,v),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function d(f,c,h,v,E){return c===null||c.tag!==7?(c=en(h,f.mode,v,E),c.return=f,c):(c=i(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ys(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case si:return h=Di(c.type,c.key,c.props,null,f.mode,h),h.ref=or(f,null,c),h.return=f,h;case yn:return c=ws(c,f.mode,h),c.return=f,c;case yt:var v=c._init;return p(f,v(c._payload),h)}if(ur(c)||er(c))return c=en(c,f.mode,h,null),c.return=f,c;vi(f,c)}return null}function m(f,c,h,v){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(f,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case si:return h.key===E?l(f,c,h,v):null;case yn:return h.key===E?u(f,c,h,v):null;case yt:return E=h._init,m(f,c,E(h._payload),v)}if(ur(h)||er(h))return E!==null?null:d(f,c,h,v,null);vi(f,h)}return null}function g(f,c,h,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(h)||null,a(c,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case si:return f=f.get(v.key===null?h:v.key)||null,l(c,f,v,E);case yn:return f=f.get(v.key===null?h:v.key)||null,u(c,f,v,E);case yt:var T=v._init;return g(f,c,h,T(v._payload),E)}if(ur(v)||er(v))return f=f.get(h)||null,d(c,f,v,E,null);vi(c,v)}return null}function S(f,c,h,v){for(var E=null,T=null,C=c,N=c=0,j=null;C!==null&&N<h.length;N++){C.index>N?(j=C,C=null):j=C.sibling;var L=m(f,C,h[N],v);if(L===null){C===null&&(C=j);break}e&&C&&L.alternate===null&&t(f,C),c=o(L,c,N),T===null?E=L:T.sibling=L,T=L,C=j}if(N===h.length)return n(f,C),V&&Wt(f,N),E;if(C===null){for(;N<h.length;N++)C=p(f,h[N],v),C!==null&&(c=o(C,c,N),T===null?E=C:T.sibling=C,T=C);return V&&Wt(f,N),E}for(C=r(f,C);N<h.length;N++)j=g(C,f,N,h[N],v),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?N:j.key),c=o(j,c,N),T===null?E=j:T.sibling=j,T=j);return e&&C.forEach(function(De){return t(f,De)}),V&&Wt(f,N),E}function w(f,c,h,v){var E=er(h);if(typeof E!="function")throw Error(_(150));if(h=E.call(h),h==null)throw Error(_(151));for(var T=E=null,C=c,N=c=0,j=null,L=h.next();C!==null&&!L.done;N++,L=h.next()){C.index>N?(j=C,C=null):j=C.sibling;var De=m(f,C,L.value,v);if(De===null){C===null&&(C=j);break}e&&C&&De.alternate===null&&t(f,C),c=o(De,c,N),T===null?E=De:T.sibling=De,T=De,C=j}if(L.done)return n(f,C),V&&Wt(f,N),E;if(C===null){for(;!L.done;N++,L=h.next())L=p(f,L.value,v),L!==null&&(c=o(L,c,N),T===null?E=L:T.sibling=L,T=L);return V&&Wt(f,N),E}for(C=r(f,C);!L.done;N++,L=h.next())L=g(C,f,N,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),c=o(L,c,N),T===null?E=L:T.sibling=L,T=L);return e&&C.forEach(function(Xn){return t(f,Xn)}),V&&Wt(f,N),E}function R(f,c,h,v){if(typeof h=="object"&&h!==null&&h.type===wn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case si:e:{for(var E=h.key,T=c;T!==null;){if(T.key===E){if(E=h.type,E===wn){if(T.tag===7){n(f,T.sibling),c=i(T,h.props.children),c.return=f,f=c;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&ju(E)===T.type){n(f,T.sibling),c=i(T,h.props),c.ref=or(f,T,h),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}h.type===wn?(c=en(h.props.children,f.mode,v,h.key),c.return=f,f=c):(v=Di(h.type,h.key,h.props,null,f.mode,v),v.ref=or(f,c,h),v.return=f,f=v)}return s(f);case yn:e:{for(T=h.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ws(h,f.mode,v),c.return=f,f=c}return s(f);case yt:return T=h._init,R(f,c,T(h._payload),v)}if(ur(h))return S(f,c,h,v);if(er(h))return w(f,c,h,v);vi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=ys(h,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return R}var bn=df(!0),ff=df(!1),Jr={},Ke=$t(Jr),Ur=$t(Jr),Fr=$t(Jr);function Yt(e){if(e===Jr)throw Error(_(174));return e}function ml(e,t){switch(B(Fr,t),B(Ur,e),B(Ke,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}b(Ke),B(Ke,t)}function Vn(){b(Ke),b(Ur),b(Fr)}function hf(e){Yt(Fr.current);var t=Yt(Ke.current),n=Gs(t,e.type);t!==n&&(B(Ur,e),B(Ke,n))}function gl(e){Ur.current===e&&(b(Ke),b(Ur))}var H=$t(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fs=[];function vl(){for(var e=0;e<fs.length;e++)fs[e]._workInProgressVersionPrimary=null;fs.length=0}var Ri=pt.ReactCurrentDispatcher,hs=pt.ReactCurrentBatchConfig,sn=0,W=null,J=null,ee=null,no=!1,yr=!1,zr=0,Lg=0;function se(){throw Error(_(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function wl(e,t,n,r,i,o){if(sn=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Fg:zg,e=n(r,i),yr){o=0;do{if(yr=!1,zr=0,25<=o)throw Error(_(301));o+=1,ee=J=null,t.updateQueue=null,Ri.current=Bg,e=n(r,i)}while(yr)}if(Ri.current=ro,t=J!==null&&J.next!==null,sn=0,ee=J=W=null,no=!1,t)throw Error(_(300));return e}function _l(){var e=zr!==0;return zr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(J===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(_(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function Br(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=Le(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,W.lanes|=d,an|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,an|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ms(e){var t=Le(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);be(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pf(){}function mf(e,t){var n=W,r=Le(),i=t(),o=!be(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,Sl(yf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,jr(9,vf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(_(349));sn&30||gf(n,t,i)}return i}function gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vf(e,t,n,r){t.value=n,t.getSnapshot=r,wf(t)&&_f(e)}function yf(e,t,n){return n(function(){wf(t)&&_f(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function _f(e){var t=ct(e,1);t!==null&&je(t,e,1,-1)}function $u(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Ug.bind(null,W,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sf(){return Le().memoizedState}function Oi(e,t,n,r){var i=He();W.flags|=e,i.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&yl(r,s.deps)){i.memoizedState=jr(t,n,o,r);return}}W.flags|=e,i.memoizedState=jr(1|t,n,o,r)}function bu(e,t){return Oi(8390656,8,e,t)}function Sl(e,t){return Po(2048,8,e,t)}function Ef(e,t){return Po(4,2,e,t)}function If(e,t){return Po(4,4,e,t)}function kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,kf.bind(null,t,e),n)}function El(){}function Cf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nf(e,t,n){return sn&21?(be(n,t)||(n=Od(),W.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Dg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=hs.transition;hs.transition={};try{e(!1),t()}finally{F=n,hs.transition=r}}function Rf(){return Le().memoizedState}function Mg(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Of(e))xf(t,n);else if(n=af(e,t,n,r),n!==null){var i=fe();je(n,e,r,i),Af(n,t,r)}}function Ug(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Of(e))xf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,be(a,s)){var l=t.interleaved;l===null?(i.next=i,hl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=af(e,t,i,r),n!==null&&(i=fe(),je(n,e,r,i),Af(n,t,r))}}function Of(e){var t=e.alternate;return e===W||t!==null&&t===W}function xf(e,t){yr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}var ro={readContext:Ae,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Fg={readContext:Ae,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mg.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:El,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=Dg.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=He();if(V){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),te===null)throw Error(_(349));sn&30||gf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bu(yf.bind(null,r,o,e),[e]),r.flags|=2048,jr(9,vf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(V){var n=it,r=rt;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zg={readContext:Ae,useCallback:Cf,useContext:Ae,useEffect:Sl,useImperativeHandle:Tf,useInsertionEffect:Ef,useLayoutEffect:If,useMemo:Pf,useReducer:ps,useRef:Sf,useState:function(){return ps(Br)},useDebugValue:El,useDeferredValue:function(e){var t=Le();return Nf(t,J.memoizedState,e)},useTransition:function(){var e=ps(Br)[0],t=Le().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:mf,useId:Rf,unstable_isNewReconciler:!1},Bg={readContext:Ae,useCallback:Cf,useContext:Ae,useEffect:Sl,useImperativeHandle:Tf,useInsertionEffect:Ef,useLayoutEffect:If,useMemo:Pf,useReducer:ms,useRef:Sf,useState:function(){return ms(Br)},useDebugValue:El,useDeferredValue:function(e){var t=Le();return J===null?t.memoizedState=e:Nf(t,J.memoizedState,e)},useTransition:function(){var e=ms(Br)[0],t=Le().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:mf,useId:Rf,unstable_isNewReconciler:!1};function Hn(e,t){try{var n="",r=t;do n+=hm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jg=typeof WeakMap=="function"?WeakMap:Map;function Lf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Ta=r),ma(e,t)},n}function Df(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ev.bind(null,e,t,n),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var $g=pt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?ff(t,null,n,r):bn(t,e.child,n,r)}function Gu(e,t,n,r,i){n=n.render;var o=t.ref;return Mn(t,i),r=wl(e,t,n,r,o,i),n=_l(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(V&&n&&al(t),t.flags|=1,de(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ol(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mf(e,t,o,r,i)):(e=Di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,dt(e,t,i)}return ga(e,t,n,r,i)}function Uf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Rn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Rn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Rn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Rn,_e),_e|=r;return de(e,t,i,n),t.child}function Ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=ye(n)?rn:ue.current;return o=jn(t,o),Mn(t,i),n=wl(e,t,n,r,o,i),r=_l(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(V&&r&&al(t),t.flags|=1,de(e,t,n,i),t.child)}function Qu(e,t,n,r,i){if(ye(n)){var o=!0;qi(t)}else o=!1;if(Mn(t,i),t.stateNode===null)xi(e,t),cf(t,n,r),pa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ye(n)?rn:ue.current,u=jn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bu(t,s,r,u),wt=!1;var m=t.memoizedState;s.state=m,eo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ve.current||wt?(typeof d=="function"&&(ha(t,n,d,r),l=t.memoizedState),(a=wt||zu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ye(n)?rn:ue.current,l=jn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Bu(t,s,r,l),wt=!1,m=t.memoizedState,s.state=m,eo(t,r,s,i);var S=t.memoizedState;a!==p||m!==S||ve.current||wt?(typeof g=="function"&&(ha(t,n,g,r),S=t.memoizedState),(u=wt||zu(t,n,u,r,m,S,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return va(e,t,n,r,o,i)}function va(e,t,n,r,i,o){Ff(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Lu(t,n,!1),dt(e,t,o);r=t.stateNode,$g.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bn(t,e.child,null,o),t.child=bn(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,i&&Lu(t,n,!0),t.child}function zf(e){var t=e.stateNode;t.pendingContext?Au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Au(e,t.context,!1),ml(e,t.containerInfo)}function qu(e,t,n,r,i){return $n(),ul(i),t.flags|=256,de(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(H,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Oo(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wa(n),t.memoizedState=ya,e):Il(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Il(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&ul(r),bn(t,e.child,null,n),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=gs(Error(_(422))),yi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bn(t,e.child,null,s),t.child.memoizedState=wa(s),t.memoizedState=ya,o);if(!(t.mode&1))return yi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=gs(o,r,void 0),yi(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),je(r,e,i,-1))}return Rl(),r=gs(Error(_(421))),yi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=xt(i.nextSibling),Ee=t,V=!0,ze=null,e!==null&&(Pe[Ne++]=rt,Pe[Ne++]=it,Pe[Ne++]=on,rt=e.id,it=e.overflow,on=t),t=Il(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function vs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vs(t,!0,n,null,o);break;case"together":vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vg(e,t,n){switch(t.tag){case 3:zf(t),$n();break;case 5:hf(t);break;case 1:ye(t.type)&&qi(t);break;case 4:ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Bf(e,t,n):(B(H,H.current&1),e=dt(e,t,n),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Uf(e,t,n)}return dt(e,t,n)}var $f,_a,bf,Vf;$f=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_a=function(){};bf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(Ke.current);var o=null;switch(n){case"input":i=bs(e,i),r=bs(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}Ks(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hg(e,t,n){var r=t.pendingProps;switch(ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&Qi(),ae(t),null;case 3:return r=t.stateNode,Vn(),b(ve),b(ue),vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Na(ze),ze=null))),_a(e,t),ae(t),null;case 5:gl(t);var i=Yt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)bf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ae(t),null}if(e=Yt(Ke.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)$(dr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":ou(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":au(r,o),$("invalid",r)}Ks(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",""+a]):Tr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":ai(r),su(r,o,!0);break;case"textarea":ai(r),lu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[Mr]=r,$f(e,t,!1,!1),t.stateNode=e;e:{switch(s=Qs(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)$(dr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":ou(e,r),i=bs(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),$("invalid",e);break;case"textarea":au(e,r),i=Ws(e,r),$("invalid",e);break;default:i=r}Ks(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cr(e,l):typeof l=="number"&&Cr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&Ka(e,o,l,s))}switch(n){case"input":ai(e),su(e,r,!1);break;case"textarea":ai(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Yt(Fr.current),Yt(Ke.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(b(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Se!==null&&t.mode&1&&!(t.flags&128))sf(),$n(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[We]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else ze!==null&&(Na(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?X===0&&(X=3):Rl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Vn(),_a(e,t),e===null&&Lr(t.stateNode.containerInfo),ae(t),null;case 10:return fl(t.type._context),ae(t),null;case 17:return ye(t.type)&&Qi(),ae(t),null;case 19:if(b(H),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Wn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return ae(t),null}else 2*q()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=H.current,B(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Nl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Wg(e,t){switch(ll(t),t.tag){case 1:return ye(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),b(ve),b(ue),vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gl(t),null;case 13:if(b(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(H),null;case 4:return Vn(),null;case 10:return fl(t.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var wi=!1,le=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ju=!1;function Kg(e,t){if(ia=Hi,e=Gd(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Hi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,R=S.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ue(t.type,w),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return S=Ju,Ju=!1,S}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sa(t,n,o)}i=i.next}while(i!==r)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hf(e){var t=e.alternate;t!==null&&(e.alternate=null,Hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Mr],delete t[la],delete t[Rg],delete t[Og])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var re=null,Fe=!1;function gt(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:le||Nn(n,t);case 6:var r=re,i=Fe;re=null,gt(e,t,n),re=r,Fe=i,re!==null&&(Fe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Fe?(e=re,n=n.stateNode,e.nodeType===8?cs(e.parentNode,n):e.nodeType===1&&cs(e,n),Or(e)):cs(re,n.stateNode));break;case 4:r=re,i=Fe,re=n.stateNode.containerInfo,Fe=!0,gt(e,t,n),re=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Sa(n,t,s),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!le&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,gt(e,t,n),le=r):gt(e,t,n);break;default:gt(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gg),t.forEach(function(r){var i=nv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Fe=!1;break e;case 3:re=a.stateNode.containerInfo,Fe=!0;break e;case 4:re=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(re===null)throw Error(_(160));Gf(o,s,i),re=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}function Kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{wr(3,e,e.return),No(3,e)}catch(w){K(e,e.return,w)}try{wr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Cr(i,"")}catch(w){K(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hd(i,o),Qs(a,s);var u=Qs(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?yd(i,p):d==="dangerouslySetInnerHTML"?gd(i,p):d==="children"?Cr(i,p):Ka(i,d,p,u)}switch(a){case"input":Vs(i,o);break;case"textarea":pd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?xn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(w){K(e,e.return,w)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){K(e,e.return,w)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cl=q())),r&4&&Zu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||d,Me(t,e),le=u):Me(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(p=I=d;I!==null;){switch(m=I,g=m.child,m.tag){case 0:case 11:case 14:case 15:wr(4,m,m.return);break;case 1:Nn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){tc(p);continue}}g!==null?(g.return=m,I=g):tc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vd("display",s))}catch(w){K(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){K(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&Zu(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var o=Xu(e);ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xu(e);Ia(e,a,s);break;default:throw Error(_(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qg(e,t,n){I=e,Qf(e)}function Qf(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||wi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=wi;var u=le;if(wi=s,(le=l)&&!u)for(I=i;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?nc(i):l!==null?(l.return=s,I=l):nc(i);for(;o!==null;)I=o,Qf(o),o=o.sibling;I=i,wi=a,le=u}ec(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):ec(e)}}function ec(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||No(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}le||t.flags&512&&Ea(t)}catch(m){K(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function tc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function nc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{No(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Ea(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Ea(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var qg=Math.ceil,io=pt.ReactCurrentDispatcher,kl=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,M=0,te=null,Y=null,ie=0,_e=0,Rn=$t(0),X=0,$r=null,an=0,Ro=0,Tl=0,_r=null,me=null,Cl=0,Wn=1/0,et=null,oo=!1,Ta=null,Lt=null,_i=!1,Ct=null,so=0,Sr=0,Ca=null,Ai=-1,Li=0;function fe(){return M&6?q():Ai!==-1?Ai:Ai=q()}function Dt(e){return e.mode&1?M&2&&ie!==0?ie&-ie:Ag.transition!==null?(Li===0&&(Li=Od()),Li):(e=F,e!==0||(e=window.event,e=e===void 0?16:Fd(e.type)),e):1}function je(e,t,n,r){if(50<Sr)throw Sr=0,Ca=null,Error(_(185));Qr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Ro|=n),X===4&&St(e,ie)),we(e,r),n===1&&M===0&&!(t.mode&1)&&(Wn=q()+500,To&&bt()))}function we(e,t){var n=e.callbackNode;Am(e,t);var r=Vi(e,e===te?ie:0);if(r===0)n!==null&&du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&du(n),t===1)e.tag===0?xg(rc.bind(null,e)):nf(rc.bind(null,e)),Pg(function(){!(M&6)&&bt()}),n=null;else{switch(xd(r)){case 1:n=Xa;break;case 4:n=Nd;break;case 16:n=bi;break;case 536870912:n=Rd;break;default:n=bi}n=nh(n,qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qf(e,t){if(Ai=-1,Li=0,M&6)throw Error(_(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Vi(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=M;M|=2;var o=Jf();(te!==e||ie!==t)&&(et=null,Wn=q()+500,Zt(e,t));do try{Xg();break}catch(a){Yf(e,a)}while(1);dl(),io.current=o,M=i,Y!==null?t=0:(te=null,ie=0,t=X)}if(t!==0){if(t===2&&(i=Zs(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=$r,Zt(e,0),St(e,r),we(e,q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yg(i)&&(t=ao(e,r),t===2&&(o=Zs(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=$r,Zt(e,0),St(e,r),we(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Gt(e,me,et);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Cl+500-q(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(Gt.bind(null,e,me,et),t);break}Gt(e,me,et);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Be(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qg(r/1960))-r,10<r){e.timeoutHandle=aa(Gt.bind(null,e,me,et),r);break}Gt(e,me,et);break;case 5:Gt(e,me,et);break;default:throw Error(_(329))}}}return we(e,q()),e.callbackNode===n?qf.bind(null,e):null}function Pa(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=ao(e,t),e!==2&&(t=me,me=n,t!==null&&Na(t)),e}function Na(e){me===null?me=e:me.push.apply(me,e)}function Yg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Tl,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(M&6)throw Error(_(327));Un();var t=Vi(e,0);if(!(t&1))return we(e,q()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Zs(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=$r,Zt(e,0),St(e,t),we(e,q()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,me,et),we(e,q()),null}function Pl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Wn=q()+500,To&&bt())}}function ln(e){Ct!==null&&Ct.tag===0&&!(M&6)&&Un();var t=M;M|=1;var n=Oe.transition,r=F;try{if(Oe.transition=null,F=1,e)return e()}finally{F=r,Oe.transition=n,M=t,!(M&6)&&bt()}}function Nl(){_e=Rn.current,b(Rn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cg(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Vn(),b(ve),b(ue),vl();break;case 5:gl(r);break;case 4:Vn();break;case 13:b(H);break;case 19:b(H);break;case 10:fl(r.type._context);break;case 22:case 23:Nl()}n=n.return}if(te=e,Y=e=Mt(e.current,null),ie=_e=t,X=0,$r=null,Tl=Ro=an=0,me=_r=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qt=null}return e}function Yf(e,t){do{var n=Y;try{if(dl(),Ri.current=ro,no){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(sn=0,ee=J=W=null,yr=!1,zr=0,kl.current=null,n===null||n.return===null){X=1,$r=t,Y=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Hu(s);if(g!==null){g.flags&=-257,Wu(g,s,a,o,t),g.mode&1&&Vu(o,u,t),t=g,l=u;var S=t.updateQueue;if(S===null){var w=new Set;w.add(l),t.updateQueue=w}else S.add(l);break e}else{if(!(t&1)){Vu(o,u,t),Rl();break e}l=Error(_(426))}}else if(V&&a.mode&1){var R=Hu(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Wu(R,s,a,o,t),ul(Hn(l,a));break e}}o=l=Hn(l,a),X!==4&&(X=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Lf(o,l,t);Uu(o,f);break e;case 1:a=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Lt===null||!Lt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Df(o,a,t);Uu(o,v);break e}}o=o.return}while(o!==null)}Zf(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Jf(){var e=io.current;return io.current=ro,e===null?ro:e}function Rl(){(X===0||X===3||X===2)&&(X=4),te===null||!(an&268435455)&&!(Ro&268435455)||St(te,ie)}function ao(e,t){var n=M;M|=2;var r=Jf();(te!==e||ie!==t)&&(et=null,Zt(e,t));do try{Jg();break}catch(i){Yf(e,i)}while(1);if(dl(),M=n,io.current=r,Y!==null)throw Error(_(261));return te=null,ie=0,X}function Jg(){for(;Y!==null;)Xf(Y)}function Xg(){for(;Y!==null&&!Im();)Xf(Y)}function Xf(e){var t=th(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Zf(e):Y=t,kl.current=null}function Zf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wg(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Hg(n,t,_e),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Gt(e,t,n){var r=F,i=Oe.transition;try{Oe.transition=null,F=1,Zg(e,t,n,r)}finally{Oe.transition=i,F=r}return null}function Zg(e,t,n,r){do Un();while(Ct!==null);if(M&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lm(e,o),e===te&&(Y=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,nh(bi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=F;F=1;var a=M;M|=4,kl.current=null,Kg(e,n),Kf(n,e),wg(oa),Hi=!!ia,oa=ia=null,e.current=n,Qg(n),km(),M=a,F=s,Oe.transition=o}else e.current=n;if(_i&&(_i=!1,Ct=e,so=i),o=e.pendingLanes,o===0&&(Lt=null),Pm(n.stateNode),we(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Ta,Ta=null,e;return so&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===Ca?Sr++:(Sr=0,Ca=e):Sr=0,bt(),null}function Un(){if(Ct!==null){var e=xd(so),t=Oe.transition,n=F;try{if(Oe.transition=null,F=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,so=0,M&6)throw Error(_(331));var i=M;for(M|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:wr(8,d,o)}var p=d.child;if(p!==null)p.return=d,I=p;else for(;I!==null;){d=I;var m=d.sibling,g=d.return;if(Hf(d),d===u){I=null;break}if(m!==null){m.return=g,I=m;break}I=g}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){s=I;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,I=h;else e:for(s=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:No(9,a)}}catch(E){K(a,a.return,E)}if(a===s){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(M=i,bt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{F=n,Oe.transition=t}}return!1}function ic(e,t,n){t=Hn(n,t),t=Lf(e,t,1),e=At(e,t,1),t=fe(),e!==null&&(Qr(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Hn(n,e),e=Df(t,e,1),t=At(t,e,1),e=fe(),t!==null&&(Qr(t,1,e),we(t,e));break}}t=t.return}}function ev(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ie&n)===n&&(X===4||X===3&&(ie&130023424)===ie&&500>q()-Cl?Zt(e,0):Tl|=n),we(e,t)}function eh(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=fe();e=ct(e,t),e!==null&&(Qr(e,t,n),we(e,n))}function tv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eh(e,n)}function nv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),eh(e,n)}var th;th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Vg(e,t,n);ge=!!(e.flags&131072)}else ge=!1,V&&t.flags&1048576&&rf(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var i=jn(t,ue.current);Mn(t,n),i=wl(null,t,r,e,i,n);var o=_l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,qi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pl(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,pa(t,r,e,n),t=va(null,t,r,!0,o,n)):(t.tag=0,V&&o&&al(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iv(r),e=Ue(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,Ue(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Qu(e,t,r,i,n);case 3:e:{if(zf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lf(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Hn(Error(_(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(_(424)),t),t=qu(e,t,r,n,i);break e}else for(Se=xt(t.stateNode.containerInfo.firstChild),Ee=t,V=!0,ze=null,n=ff(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=dt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return hf(t),e===null&&da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,sa(r,i)?s=null:o!==null&&sa(r,o)&&(t.flags|=32),Ff(e,t),de(e,t,s,n),t.child;case 6:return e===null&&da(t),null;case 13:return Bf(e,t,n);case 4:return ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Gu(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,B(Xi,r._currentValue),r._currentValue=s,o!==null)if(be(o.value,s)){if(o.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mn(t,n),i=Ae(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),Ku(e,t,r,i,n);case 15:return Mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),xi(e,t),t.tag=1,ye(r)?(e=!0,qi(t)):e=!1,Mn(t,n),cf(t,r,i),pa(t,r,i,n),va(null,t,r,!0,e,n);case 19:return jf(e,t,n);case 22:return Uf(e,t,n)}throw Error(_(156,t.tag))};function nh(e,t){return Pd(e,t)}function rv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new rv(e,t,n,r)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iv(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Ya)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ol(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return en(n.children,i,o,t);case Qa:s=8,i|=8;break;case zs:return e=Re(12,n,t,i|2),e.elementType=zs,e.lanes=o,e;case Bs:return e=Re(13,n,t,i),e.elementType=Bs,e.lanes=o,e;case js:return e=Re(19,n,t,i),e.elementType=js,e.lanes=o,e;case cd:return Oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:s=10;break e;case ud:s=9;break e;case qa:s=11;break e;case Ya:s=14;break e;case yt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Re(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=cd,e.lanes=n,e.stateNode={isHidden:!1},e}function ys(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ov(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xl(e,t,n,r,i,o,s,a,l){return e=new ov(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Re(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(o),e}function sv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rh(e){if(!e)return Bt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ye(n))return tf(e,n,t)}return t}function ih(e,t,n,r,i,o,s,a,l){return e=xl(n,r,!0,e,i,o,s,a,l),e.context=rh(null),n=e.current,r=fe(),i=Dt(n),o=at(r,i),o.callback=t??null,At(n,o,i),e.current.lanes=i,Qr(e,i,r),we(e,r),e}function xo(e,t,n,r){var i=t.current,o=fe(),s=Dt(i);return n=rh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,s),e!==null&&(je(e,i,s,o),Ni(e,i,s)),s}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function av(){return null}var oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}Ao.prototype.render=Ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));xo(e,t,null,null)};Ao.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){xo(null,e,null,null)}),t[ut]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Ud(e)}};function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function lv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lo(s);o.call(u)}}var s=ih(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=s,e[ut]=s.current,Lr(e.nodeType===8?e.parentNode:e),ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lo(l);a.call(u)}}var l=xl(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=l,e[ut]=l.current,Lr(e.nodeType===8?e.parentNode:e),ln(function(){xo(t,l,n,r)}),l}function Do(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=lo(s);a.call(l)}}xo(t,s,e,i)}else s=lv(n,t,e,i,r);return lo(s)}Ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(Za(t,n|1),we(t,q()),!(M&6)&&(Wn=q()+500,bt()))}break;case 13:ln(function(){var r=ct(e,1);if(r!==null){var i=fe();je(r,e,1,i)}}),Al(e,1)}};el=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=fe();je(t,e,134217728,n)}Al(e,134217728)}};Ld=function(e){if(e.tag===13){var t=Dt(e),n=ct(e,t);if(n!==null){var r=fe();je(n,e,t,r)}Al(e,t)}};Dd=function(){return F};Md=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ys=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(_(90));fd(r),Vs(r,i)}}}break;case"textarea":pd(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Sd=Pl;Ed=ln;var uv={usingClientEntryPoint:!1,Events:[Yr,In,ko,wd,_d,Pl]},ar={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cv={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Td(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{_o=Si.inject(cv),Ge=Si}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dl(t))throw Error(_(200));return sv(e,t,null,n)};Te.createRoot=function(e,t){if(!Dl(e))throw Error(_(299));var n=!1,r="",i=oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xl(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Ll(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Td(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return ln(e)};Te.hydrate=function(e,t,n){if(!Lo(t))throw Error(_(200));return Do(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Dl(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=oh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ih(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ao(t)};Te.render=function(e,t,n){if(!Lo(t))throw Error(_(200));return Do(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(_(40));return e._reactRootContainer?(ln(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=Pl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Do(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Te})(am);var ac=Ms;Ds.createRoot=ac.createRoot,Ds.hydrateRoot=ac.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const lc="popstate";function dv(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=mn(i.location.hash.substr(1));return Ra("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:sh(o))}function r(i,o){fv(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return pv(t,n,r,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hv(){return Math.random().toString(36).substr(2,8)}function uc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ra(e,t,n,r){return n===void 0&&(n=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mn(t):t,{state:n,key:t&&t.key||r||hv()})}function sh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Pt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(br({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=Pt.Pop;let R=d(),f=R==null?null:R-u;u=R,l&&l({action:a,location:w.location,delta:f})}function m(R,f){a=Pt.Push;let c=Ra(w.location,R,f);n&&n(c,R),u=d()+1;let h=uc(c,u),v=w.createHref(c);try{s.pushState(h,"",v)}catch{i.location.assign(v)}o&&l&&l({action:a,location:w.location,delta:1})}function g(R,f){a=Pt.Replace;let c=Ra(w.location,R,f);n&&n(c,R),u=d();let h=uc(c,u),v=w.createHref(c);s.replaceState(h,"",v),o&&l&&l({action:a,location:w.location,delta:0})}function S(R){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:sh(R);return ne(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,s)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lc,p),l=R,()=>{i.removeEventListener(lc,p),l=null}},createHref(R){return t(i,R)},createURL:S,encodeLocation(R){let f=S(R);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(R){return s.go(R)}};return w}var cc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cc||(cc={}));function mv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mn(t):t,i=uh(r.pathname||"/",n);if(i==null)return null;let o=ah(e);gv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Tv(o[a],Nv(i));return s}function ah(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ah(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Iv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of lh(o.path))i(o,s,l)}),t}function lh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function gv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vv=/^:\w+$/,yv=3,wv=2,_v=1,Sv=10,Ev=-2,dc=e=>e==="*";function Iv(e,t){let n=e.split("/"),r=n.length;return n.some(dc)&&(r+=Ev),t&&(r+=wv),n.filter(i=>!dc(i)).reduce((i,o)=>i+(vv.test(o)?yv:o===""?_v:Sv),r)}function kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Tv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Cv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:tn([i,d.pathname]),pathnameBase:Dv(tn([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=tn([i,d.pathnameBase]))}return o}function Cv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Pv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Rv(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Pv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ml(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Nv(e){try{return decodeURI(e)}catch(t){return Ml(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rv(e,t){try{return decodeURIComponent(e)}catch(n){return Ml(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function uh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ml(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ov(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mn(e):e;return{pathname:n?n.startsWith("/")?n:xv(n,t):t,search:Mv(r),hash:Uv(i)}}function xv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _s(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Av(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mn(e):(i=br({},e),ne(!i.pathname||!i.pathname.includes("?"),_s("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),_s("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),_s("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let l=Ov(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const tn=e=>e.join("/").replace(/\/\/+/g,"/"),Dv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Uv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zv=["post","put","patch","delete"];[...zv];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function Bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const jv=typeof Object.is=="function"?Object.is:Bv,{useState:$v,useEffect:bv,useLayoutEffect:Vv,useDebugValue:Hv}=Ls;function Wv(e,t,n){const r=t(),[{inst:i},o]=$v({inst:{value:r,getSnapshot:t}});return Vv(()=>{i.value=r,i.getSnapshot=t,Ss(i)&&o({inst:i})},[e,r,t]),bv(()=>(Ss(i)&&o({inst:i}),e(()=>{Ss(i)&&o({inst:i})})),[e]),Hv(r),r}function Ss(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!jv(n,r)}catch{return!0}}function Gv(e,t,n){return t()}const Kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qv=!Kv,qv=Qv?Gv:Wv;"useSyncExternalStore"in Ls&&(e=>e.useSyncExternalStore)(Ls);const ch=P.createContext(null),dh=P.createContext(null),Ul=P.createContext(null),Mo=P.createContext(null),Xr=P.createContext({outlet:null,matches:[]}),fh=P.createContext(null);function Uo(){return P.useContext(Mo)!=null}function hh(){return Uo()||ne(!1),P.useContext(Mo).location}function Yn(){Uo()||ne(!1);let{basename:e,navigator:t}=P.useContext(Ul),{matches:n}=P.useContext(Xr),{pathname:r}=hh(),i=JSON.stringify(Av(n).map(a=>a.pathnameBase)),o=P.useRef(!1);return P.useEffect(()=>{o.current=!0}),P.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Lv(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:tn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Yv(e,t){Uo()||ne(!1);let{navigator:n}=P.useContext(Ul),r=P.useContext(dh),{matches:i}=P.useContext(Xr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=hh(),u;if(t){var d;let w=typeof t=="string"?mn(t):t;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||ne(!1),u=w}else u=l;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",g=mv(e,{pathname:m}),S=ey(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:tn([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:tn([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&S?P.createElement(Mo.Provider,{value:{location:Oa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pt.Pop}},S):S}function Jv(){let e=iy(),t=Fv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,o)}class Xv extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(Xr.Provider,{value:this.props.routeContext},P.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zv(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(ch);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Xr.Provider,{value:t},r)}function ey(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||ne(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||P.createElement(Jv,null):null,d=t.concat(r.slice(0,a+1)),p=()=>P.createElement(Zv,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?P.createElement(Xv,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var fc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(fc||(fc={}));var uo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(uo||(uo={}));function ty(e){let t=P.useContext(dh);return t||ne(!1),t}function ny(e){let t=P.useContext(Xr);return t||ne(!1),t}function ry(e){let t=ny(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function iy(){var e;let t=P.useContext(fh),n=ty(uo.UseRouteError),r=ry(uo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fr(e){ne(!1)}function oy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:o,static:s=!1}=e;Uo()&&ne(!1);let a=t.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=mn(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:g="default"}=r,S=P.useMemo(()=>{let w=uh(u,a);return w==null?null:{pathname:w,search:d,hash:p,state:m,key:g}},[a,u,d,p,m,g]);return S==null?null:P.createElement(Ul.Provider,{value:l},P.createElement(Mo.Provider,{children:n,value:{location:S,navigationType:i}}))}function sy(e){let{children:t,location:n}=e,r=P.useContext(ch),i=r&&!t?r.router.routes:xa(t);return Yv(i,n)}var hc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(hc||(hc={}));new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;if(r.type===P.Fragment){n.push.apply(n,xa(r.props.children,t));return}r.type!==fr&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=xa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ay(e){let{basename:t,children:n,window:r}=e,i=P.useRef();i.current==null&&(i.current=dv({window:r,v5Compat:!0}));let o=i.current,[s,a]=P.useState({action:o.action,location:o.location});return P.useLayoutEffect(()=>o.listen(a),[o]),P.createElement(oy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(pc||(pc={}));var mc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));const ly="/online-shop/assets/searchIcon-3cccc96a.png";function uy(){return y("div",{className:"searchBarContainer",children:U("form",{children:[y("input",{type:"text",placeholder:"Search for products..."}),y("button",{children:y("img",{src:ly})})]})})}const cy="/online-shop/assets/homePageMobileWelcome-3ea9d063.png";function dy(){return U("div",{className:"homeWelcomeContainer",children:[y("img",{src:cy}),U("p",{children:["Shop the latest trends ",y("br",{})," with dilVin"]}),y("button",{children:"Shop now"})]})}function Aa(e){return U("div",{className:"productContainer",children:[y("img",{src:e.product_img}),y("p",{children:e.product_name}),U("p",{children:[e.product_price,"$"]})]})}const fy=[{id:1,name:"Floral Blouse",category:"Tops",description:"A beautiful floral blouse that is perfect for adding a pop of color to your outfit. Features a loose fit and v-neckline.",price:39.99,sizes:["S","M","L"],colors:["Blue","Pink","Yellow"],image:"https://www.joebrowns.co.uk/media/catalog/product/W/A/WA295A_1.jpg?quality=90&bg-color=255,255,255&fit=bounds&height=&width="},{id:2,name:"Knit Cardigan",category:"Sweaters",description:"A cozy and chic knit cardigan that features a button-down front and ribbed trim. Perfect for layering.",price:49.99,sizes:["S","M","L"],colors:["Beige","Grey","Black"],image:"https://cdn.outfitbook.fr/23715-thickbox_default/chunky-knitted-colourblock-cardigan.jpg"},{id:3,name:"Wrap Dress",category:"Dresses",description:"A versatile and stylish wrap dress that is perfect for any occasion. Features a flattering wrap silhouette and short sleeves.",price:59.99,sizes:["S","M","L"],colors:["Black","Green","Red"],image:"https://cdn.shopify.com/s/files/1/0625/5693/products/Beau_black_1932.jpg?v=1659616374"},{id:4,name:"Off-Shoulder Top",category:"Tops",description:"A trendy off-shoulder top that features a smocked neckline and elasticated cuffs. Perfect for a day out with friends.",price:29.99,sizes:["S","M","L"],colors:["White","Black","Pink"],image:"https://www.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dw8a6b9fb0/images/pauline-off-shoulder-top-ST22030040/Pauline_Off_Shoulder_Top_in_White_2528ST22030040012529_1.jpg"},{id:5,name:"Faux Leather Jacket",category:"Jackets",description:"A sleek and stylish faux leather jacket that features a zippered front and belted waist. Perfect for adding edge to any outfit.",price:69.99,sizes:["S","M","L"],colors:["Black","Brown"],image:"https://i8.amplience.net/i/jpl/jd_II6103_a?qlt=92&w=600&h=765&v=1&fmt=auto.png"},{id:6,name:"Ruffle Sleeve Top",category:"Tops",description:"A feminine and chic ruffle sleeve top that features a round neckline and relaxed fit. Perfect for dressing up or down.",price:44.99,sizes:["S","M","L"],colors:["White","Blue","Pink"],image:"https://media3.newlookassets.com/i/newlook/664087801/womens/clothing/tops/justyouroutfit-white-ruffle-mesh-sleeve-top.jpg?strip=true&qlt=80&w=720"}],ph={products:fy};function hy(){let e;return U("div",{className:"featuredContainer",children:[y("p",{children:"Featured right now"}),y("div",{className:"productList",children:ph.products.slice(0,6).map((t,n)=>{if(n%2==0){e=t;return}if(n%2!==0)return console.log(""),console.log("Idex:"+n),console.log("Last Item:"+e.id),console.log("Item:"+t.id),U("div",{className:"twoProductsContainer",children:[y("div",{className:"product",children:y(Aa,{product_name:e.name,product_price:e.price,product_img:e.image})}),y("div",{className:"product",children:y(Aa,{product_name:t.name,product_price:t.price,product_img:t.image})})]},n+1)})})]})}function py(){return U("div",{className:"promotionsContainer",children:[y("p",{children:"Promotions"}),y("div",{className:"promotionProductList",children:ph.products.slice(0,6).map((e,t)=>y("div",{className:"product",children:y(Aa,{product_name:e.name,product_price:e.price,product_img:e.image})},e.id))})]})}const my="/online-shop/assets/highQualityClothingIcon-0d7af6fd.png",gy="/online-shop/assets/varietyIcon-c5de84d7.png",vy="/online-shop/assets/pricingIcon-78f1ae54.png",yy="/online-shop/assets/expierenceIcon-eea407ee.png";function wy(){return U("div",{className:"whyUsContainer",children:[y("p",{children:"Why chose dilVin"}),U("div",{className:"whyUsList",children:[U("div",{className:"reason",children:[y("img",{src:my}),y("p",{className:"reasonTitle",children:"Quality clothing"}),y("p",{className:"reasonExplication",children:"Our products are made with high-quality materials to ensure durability and longevity."})]}),U("div",{className:"reason",children:[y("img",{src:gy}),y("p",{className:"reasonTitle",children:"Variety of styles"}),y("p",{className:"reasonExplication",children:"We offer a wide selection of unique and trendy clothing options to suit any personal style."})]}),U("div",{className:"reason",children:[y("img",{src:vy}),y("p",{className:"reasonTitle",children:"Pricing"}),y("p",{className:"reasonExplication",children:"Our prices are reasonable and competitive without sacrificing quality."})]}),U("div",{className:"reason",children:[y("img",{src:yy}),y("p",{className:"reasonTitle",children:"Easy shopping"}),y("p",{className:"reasonExplication",children:"Our website is user-friendly, with clear product descriptions and fast, reliable shipping"})]})]})]})}function _y(){return y(wo,{children:U("div",{className:"websiteContent",children:[y(uy,{}),y(dy,{}),y(hy,{}),y(py,{}),y(wy,{})]})})}/**
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
 */const mh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Sy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[p],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Sy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new Ey;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iy=function(e){const t=mh(e);return gh.encodeByteArray(t,!0)},vh=function(e){return Iy(e).replace(/\./g,"")},yh=function(e){try{return gh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ty=()=>ky().__FIREBASE_DEFAULTS__,Cy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Py=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yh(e[1]);return t&&JSON.parse(t)},Fl=()=>{try{return Ty()||Cy()||Py()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ny=e=>{var t,n;return(n=(t=Fl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ry=()=>{var e;return(e=Fl())===null||e===void 0?void 0:e.config},wh=e=>{var t;return(t=Fl())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Oy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function _h(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ly(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Sh(){try{return typeof indexedDB=="object"}catch{return!1}}function Eh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Dy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const My="FirebaseError";class Ze extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=My,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Uy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ze(i,a,r)}}function Uy(e,t){return e.replace(Fy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Fy=/\{\$([^}]+)}/g;function zy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(gc(o)&&gc(s)){if(!Vr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gc(e){return e!==null&&typeof e=="object"}/**
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
 */function Zr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function By(e,t){const n=new jy(e,t);return n.subscribe.bind(n)}class jy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$y(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Es),i.error===void 0&&(i.error=Es),i.complete===void 0&&(i.complete=Es);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $y(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Es(){}/**
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
 */const by=1e3,Vy=2,Hy=4*60*60*1e3,Wy=.5;function vc(e,t=by,n=Vy){const r=t*Math.pow(n,e),i=Math.round(Wy*r*(Math.random()-.5)*2);return Math.min(Hy,r+i)}/**
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
 */class Gy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Oy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qy(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ky(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ky(e){return e===Kt?void 0:e}function Qy(e){return e.instantiationMode==="EAGER"}/**
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
 */class qy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const Yy={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Jy=z.INFO,Xy={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Zy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Xy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zl{constructor(t){this.name=t,this._logLevel=Jy,this._logHandler=Zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const e0=(e,t)=>t.some(n=>e instanceof n);let yc,wc;function t0(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n0(){return wc||(wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,La=new WeakMap,kh=new WeakMap,Is=new WeakMap,Bl=new WeakMap;function r0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ut(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Ih.set(n,e)}).catch(()=>{}),Bl.set(t,e),t}function i0(e){if(La.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});La.set(e,t)}let Da={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return La.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function o0(e){Da=e(Da)}function s0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ks(this),t,...n);return kh.set(r,t.sort?t.sort():[t]),Ut(r)}:n0().includes(e)?function(...t){return e.apply(ks(this),t),Ut(Ih.get(this))}:function(...t){return Ut(e.apply(ks(this),t))}}function a0(e){return typeof e=="function"?s0(e):(e instanceof IDBTransaction&&i0(e),e0(e,t0())?new Proxy(e,Da):e)}function Ut(e){if(e instanceof IDBRequest)return r0(e);if(Is.has(e))return Is.get(e);const t=a0(e);return t!==e&&(Is.set(e,t),Bl.set(t,e)),t}const ks=e=>Bl.get(e);function Th(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ut(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ut(s.result),l.oldVersion,l.newVersion,Ut(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const l0=["get","getKey","getAll","getAllKeys","count"],u0=["put","add","delete","clear"],Ts=new Map;function _c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ts.get(t))return Ts.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=u0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||l0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ts.set(t,o),o}o0(e=>({...e,get:(t,n,r)=>_c(t,n)||e.get(t,n,r),has:(t,n)=>!!_c(t,n)||e.has(t,n)}));/**
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
 */class c0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function d0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ma="@firebase/app",Sc="0.9.4";/**
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
 */const un=new zl("@firebase/app"),f0="@firebase/app-compat",h0="@firebase/analytics-compat",p0="@firebase/analytics",m0="@firebase/app-check-compat",g0="@firebase/app-check",v0="@firebase/auth",y0="@firebase/auth-compat",w0="@firebase/database",_0="@firebase/database-compat",S0="@firebase/functions",E0="@firebase/functions-compat",I0="@firebase/installations",k0="@firebase/installations-compat",T0="@firebase/messaging",C0="@firebase/messaging-compat",P0="@firebase/performance",N0="@firebase/performance-compat",R0="@firebase/remote-config",O0="@firebase/remote-config-compat",x0="@firebase/storage",A0="@firebase/storage-compat",L0="@firebase/firestore",D0="@firebase/firestore-compat",M0="firebase",U0="9.17.2";/**
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
 */const Ua="[DEFAULT]",F0={[Ma]:"fire-core",[f0]:"fire-core-compat",[p0]:"fire-analytics",[h0]:"fire-analytics-compat",[g0]:"fire-app-check",[m0]:"fire-app-check-compat",[v0]:"fire-auth",[y0]:"fire-auth-compat",[w0]:"fire-rtdb",[_0]:"fire-rtdb-compat",[S0]:"fire-fn",[E0]:"fire-fn-compat",[I0]:"fire-iid",[k0]:"fire-iid-compat",[T0]:"fire-fcm",[C0]:"fire-fcm-compat",[P0]:"fire-perf",[N0]:"fire-perf-compat",[R0]:"fire-rc",[O0]:"fire-rc-compat",[x0]:"fire-gcs",[A0]:"fire-gcs-compat",[L0]:"fire-fst",[D0]:"fire-fst-compat","fire-js":"fire-js",[M0]:"fire-js-all"};/**
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
 */const co=new Map,Fa=new Map;function z0(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(Fa.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;Fa.set(t,e);for(const n of co.values())z0(n,e);return!0}function Jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const B0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new gn("app","Firebase",B0);/**
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
 */class j0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Fo=U0;function Ch(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Ry()),!n)throw Ft.create("no-options");const o=co.get(i);if(o){if(Vr(n,o.options)&&Vr(r,o.config))return o;throw Ft.create("duplicate-app",{appName:i})}const s=new qy(i);for(const l of Fa.values())s.addComponent(l);const a=new j0(n,r,s);return co.set(i,a),a}function Ph(e=Ua){const t=co.get(e);if(!t&&e===Ua)return Ch();if(!t)throw Ft.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=F0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}ft(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const $0="firebase-heartbeat-database",b0=1,Hr="firebase-heartbeat-store";let Cs=null;function Nh(){return Cs||(Cs=Th($0,b0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Hr)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Cs}async function V0(e){try{return(await Nh()).transaction(Hr).objectStore(Hr).get(Rh(e))}catch(t){if(t instanceof Ze)un.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(n.message)}}}async function Ec(e,t){try{const r=(await Nh()).transaction(Hr,"readwrite");return await r.objectStore(Hr).put(t,Rh(e)),r.done}catch(n){if(n instanceof Ze)un.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function Rh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const H0=1024,W0=30*24*60*60*1e3;class G0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=W0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ic(),{heartbeatsToSend:n,unsentEntries:r}=K0(this._heartbeatsCache.heartbeats),i=vh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ic(){return new Date().toISOString().substring(0,10)}function K0(e,t=H0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),kc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sh()?Eh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await V0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function kc(e){return vh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function q0(e){ft(new Je("platform-logger",t=>new c0(t),"PRIVATE")),ft(new Je("heartbeat",t=>new G0(t),"PRIVATE")),Qe(Ma,Sc,e),Qe(Ma,Sc,"esm2017"),Qe("fire-js","")}q0("");var Y0="firebase",J0="9.17.2";/**
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
 */Qe(Y0,J0,"app");const Oh="@firebase/installations",jl="0.6.4";/**
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
 */const xh=1e4,Ah=`w:${jl}`,Lh="FIS_v2",X0="https://firebaseinstallations.googleapis.com/v1",Z0=60*60*1e3,ew="installations",tw="Installations";/**
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
 */const nw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},cn=new gn(ew,tw,nw);function Dh(e){return e instanceof Ze&&e.code.includes("request-failed")}/**
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
 */function Mh({projectId:e}){return`${X0}/projects/${e}/installations`}function Uh(e){return{token:e.token,requestStatus:2,expiresIn:iw(e.expiresIn),creationTime:Date.now()}}async function Fh(e,t){const r=(await t.json()).error;return cn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function rw(e,{refreshToken:t}){const n=zh(e);return n.append("Authorization",ow(t)),n}async function Bh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function iw(e){return Number(e.replace("s","000"))}function ow(e){return`${Lh} ${e}`}/**
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
 */async function sw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Mh(e),i=zh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Lh,appId:e.appId,sdkVersion:Ah},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Bh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Uh(u.authToken)}}else throw await Fh("Create Installation",l)}/**
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
 */function jh(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function aw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lw=/^[cdef][\w-]{21}$/,za="";function uw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=cw(e);return lw.test(n)?n:za}catch{return za}}function cw(e){return aw(e).substr(0,22)}/**
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
 */function zo(e){return`${e.appName}!${e.appId}`}/**
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
 */const $h=new Map;function bh(e,t){const n=zo(e);Vh(n,t),dw(n,t)}function Vh(e,t){const n=$h.get(e);if(n)for(const r of n)r(t)}function dw(e,t){const n=fw();n&&n.postMessage({key:e,fid:t}),hw()}let Jt=null;function fw(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=e=>{Vh(e.data.key,e.data.fid)}),Jt}function hw(){$h.size===0&&Jt&&(Jt.close(),Jt=null)}/**
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
 */const pw="firebase-installations-database",mw=1,dn="firebase-installations-store";let Ps=null;function $l(){return Ps||(Ps=Th(pw,mw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(dn)}}})),Ps}async function fo(e,t){const n=zo(e),i=(await $l()).transaction(dn,"readwrite"),o=i.objectStore(dn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&bh(e,t.fid),t}async function Hh(e){const t=zo(e),r=(await $l()).transaction(dn,"readwrite");await r.objectStore(dn).delete(t),await r.done}async function Bo(e,t){const n=zo(e),i=(await $l()).transaction(dn,"readwrite"),o=i.objectStore(dn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&bh(e,a.fid),a}/**
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
 */async function bl(e){let t;const n=await Bo(e.appConfig,r=>{const i=gw(r),o=vw(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===za?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function gw(e){const t=e||{fid:uw(),registrationStatus:0};return Wh(t)}function vw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=yw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ww(e)}:{installationEntry:t}}async function yw(e,t){try{const n=await sw(e,t);return fo(e.appConfig,n)}catch(n){throw Dh(n)&&n.customData.serverCode===409?await Hh(e.appConfig):await fo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ww(e){let t=await Tc(e.appConfig);for(;t.registrationStatus===1;)await jh(100),t=await Tc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bl(e);return r||n}return t}function Tc(e){return Bo(e,t=>{if(!t)throw cn.create("installation-not-found");return Wh(t)})}function Wh(e){return _w(e)?{fid:e.fid,registrationStatus:0}:e}function _w(e){return e.registrationStatus===1&&e.registrationTime+xh<Date.now()}/**
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
 */async function Sw({appConfig:e,heartbeatServiceProvider:t},n){const r=Ew(e,n),i=rw(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Ah,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Bh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Uh(u)}else throw await Fh("Generate Auth Token",l)}function Ew(e,{fid:t}){return`${Mh(e)}/${t}/authTokens:generate`}/**
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
 */async function Vl(e,t=!1){let n;const r=await Bo(e.appConfig,o=>{if(!Gh(o))throw cn.create("not-registered");const s=o.authToken;if(!t&&Tw(s))return o;if(s.requestStatus===1)return n=Iw(e,t),o;{if(!navigator.onLine)throw cn.create("app-offline");const a=Pw(o);return n=kw(e,a),a}});return n?await n:r.authToken}async function Iw(e,t){let n=await Cc(e.appConfig);for(;n.authToken.requestStatus===1;)await jh(100),n=await Cc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Vl(e,t):r}function Cc(e){return Bo(e,t=>{if(!Gh(t))throw cn.create("not-registered");const n=t.authToken;return Nw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function kw(e,t){try{const n=await Sw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await fo(e.appConfig,r),n}catch(n){if(Dh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await fo(e.appConfig,r)}throw n}}function Gh(e){return e!==void 0&&e.registrationStatus===2}function Tw(e){return e.requestStatus===2&&!Cw(e)}function Cw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Z0}function Pw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Nw(e){return e.requestStatus===1&&e.requestTime+xh<Date.now()}/**
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
 */async function Rw(e){const t=e,{installationEntry:n,registrationPromise:r}=await bl(t);return r?r.catch(console.error):Vl(t).catch(console.error),n.fid}/**
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
 */async function Ow(e,t=!1){const n=e;return await xw(n),(await Vl(n,t)).token}async function xw(e){const{registrationPromise:t}=await bl(e);t&&await t}/**
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
 */function Aw(e){if(!e||!e.options)throw Ns("App Configuration");if(!e.name)throw Ns("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ns(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ns(e){return cn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Kh="installations",Lw="installations-internal",Dw=e=>{const t=e.getProvider("app").getImmediate(),n=Aw(t),r=Jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Mw=e=>{const t=e.getProvider("app").getImmediate(),n=Jn(t,Kh).getImmediate();return{getId:()=>Rw(n),getToken:i=>Ow(n,i)}};function Uw(){ft(new Je(Kh,Dw,"PUBLIC")),ft(new Je(Lw,Mw,"PRIVATE"))}Uw();Qe(Oh,jl);Qe(Oh,jl,"esm2017");/**
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
 */const ho="analytics",Fw="firebase_id",zw="origin",Bw=60*1e3,jw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new zl("@firebase/analytics");/**
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
 */function qh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function $w(e,t){const n=document.createElement("script");n.src=`${Qh}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function bw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Vw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await qh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ie.error(a)}e("config",i,o)}async function Hw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await qh(n);for(const l of s){const u=a.find(p=>p.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ie.error(o)}}function Ww(e,t,n,r){async function i(o,s,a){try{o==="event"?await Hw(e,t,n,s,a):o==="config"?await Vw(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ie.error(l)}}return i}function Gw(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Ww(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Kw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Qh)&&n.src.includes(e))return n;return null}/**
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
 */const Qw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new gn("analytics","Analytics",Qw);/**
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
 */const qw=30,Yw=1e3;class Jw{constructor(t={},n=Yw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Yh=new Jw;function Xw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Xw(r)},o=jw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function e1(e,t=Yh,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw xe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new r1;return setTimeout(async()=>{a.abort()},n!==void 0?n:Bw),Jh({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Jh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Yh){var o;const{appId:s,measurementId:a}=e;try{await t1(r,t)}catch(l){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await Zw(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!n1(u)){if(i.deleteThrottleMetadata(s),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?vc(n,i.intervalMillis,qw):vc(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),Ie.debug(`Calling attemptFetch again in ${d} millis`),Jh(e,p,r,i)}}function t1(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function n1(e){if(!(e instanceof Ze)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class r1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function i1(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function o1(){if(Sh())try{await Eh()}catch(e){return Ie.warn(xe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function s1(e,t,n,r,i,o,s){var a;const l=e1(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ie.error(g)),t.push(l);const u=o1().then(g=>{if(g)return r.getId()}),[d,p]=await Promise.all([l,u]);Kw(o)||$w(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[zw]="firebase",m.update=!0,p!=null&&(m[Fw]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class a1{constructor(t){this.app=t}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Pc=[];const Nc={};let Rs="dataLayer",l1="gtag",Rc,Xh,Oc=!1;function u1(){const e=[];if(_h()&&e.push("This is a browser extension environment."),Dy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function c1(e,t,n){u1();const r=e.options.appId;if(!r)throw xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(Er[r]!=null)throw xe.create("already-exists",{id:r});if(!Oc){bw(Rs);const{wrappedGtag:o,gtagCore:s}=Gw(Er,Pc,Nc,Rs,l1);Xh=o,Rc=s,Oc=!0}return Er[r]=s1(e,Pc,Nc,t,Rc,Rs,n),new a1(e)}function d1(e=Ph()){e=mt(e);const t=Jn(e,ho);return t.isInitialized()?t.getImmediate():f1(e)}function f1(e,t={}){const n=Jn(e,ho);if(n.isInitialized()){const i=n.getImmediate();if(Vr(t,n.getOptions()))return i;throw xe.create("already-initialized")}return n.initialize({options:t})}function h1(e,t,n,r){e=mt(e),i1(Xh,Er[e.app.options.appId],t,n,r).catch(i=>Ie.error(i))}const xc="@firebase/analytics",Ac="0.9.4";function p1(){ft(new Je(ho,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return c1(r,i,n)},"PUBLIC")),ft(new Je("analytics-internal",e,"PRIVATE")),Qe(xc,Ac),Qe(xc,Ac,"esm2017");function e(t){try{const n=t.getProvider(ho).getImmediate();return{logEvent:(r,i,o)=>h1(n,r,i,o)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}p1();function Hl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Zh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m1=Zh,ep=new gn("auth","Firebase",Zh());/**
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
 */const Lc=new zl("@firebase/auth");function Mi(e,...t){Lc.logLevel<=z.ERROR&&Lc.error(`Auth (${Fo}): ${e}`,...t)}/**
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
 */function Xe(e,...t){throw Wl(e,...t)}function qe(e,...t){return Wl(e,...t)}function tp(e,t,n){const r=Object.assign(Object.assign({},m1()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function g1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Xe(e,"argument-error"),tp(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ep.create(e,...t)}function O(e,t,...n){if(!e)throw Wl(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mi(t),new Error(t)}function ht(e,t){e||ot(t)}/**
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
 */const Dc=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=Dc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dc.set(e,t),t)}/**
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
 */function v1(e,t){const n=Jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vr(o,t??{}))return i;Xe(i,"already-initialized")}return n.initialize({options:t})}function y1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Ba(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function w1(){return Mc()==="http:"||Mc()==="https:"}function Mc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function _1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w1()||_h()||"connection"in navigator)?navigator.onLine:!0}function S1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ei{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=xy()||Ay()}get(){return _1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class np{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const E1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const I1=new ei(3e4,6e4);function k1(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jo(e,t,n,r,i={}){return rp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Zr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),np.fetch()(ip(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function rp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},E1),t);try{const i=new C1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ei(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ei(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ei(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ei(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tp(e,d,u);Xe(e,d)}}catch(i){if(i instanceof Ze)throw i;Xe(e,"internal-error",{message:String(i)})}}async function T1(e,t,n,r,i={}){const o=await jo(e,t,n,r,i);return"mfaPendingCredential"in o&&Xe(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ip(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gl(e.config,i):`${e.config.apiScheme}://${i}`}class C1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),I1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ei(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function P1(e,t){return jo(e,"POST","/v1/accounts:delete",t)}async function N1(e,t){return jo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function R1(e,t=!1){const n=mt(e),r=await n.getIdToken(t),i=Kl(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ir(Os(i.auth_time)),issuedAtTime:Ir(Os(i.iat)),expirationTime:Ir(Os(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Os(e){return Number(e)*1e3}function Kl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=yh(n);return i?JSON.parse(i):(Mi("Failed to decode base64 JWT payload"),null)}catch(i){return Mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O1(e){const t=Kl(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ze&&x1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function x1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class A1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class op{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wr(e,N1(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?M1(o.providerUserInfo):[],a=D1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new op(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function L1(e){const t=mt(e);await po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function D1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function M1(e){return e.map(t=>{var{providerId:n}=t,r=Hl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function U1(e,t){const n=await rp(e,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=ip(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",np.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):O1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await U1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Gr;return r&&(O(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function vt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Hl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new op(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return R1(this,t)}reload(){return L1(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wr(this,P1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:v,isAnonymous:E,providerData:T,stsTokenManager:C}=n;O(h&&C,t,"internal-error");const N=Gr.fromJSON(this.name,C);O(typeof h=="string",t,"internal-error"),vt(p,t.name),vt(m,t.name),O(typeof v=="boolean",t,"internal-error"),O(typeof E=="boolean",t,"internal-error"),vt(g,t.name),vt(S,t.name),vt(w,t.name),vt(R,t.name),vt(f,t.name),vt(c,t.name);const j=new nn({uid:h,auth:t,email:m,emailVerified:v,displayName:p,isAnonymous:E,photoURL:S,phoneNumber:g,tenantId:w,stsTokenManager:N,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(j.providerData=T.map(L=>Object.assign({},L))),R&&(j._redirectEventId=R),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const o=new nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await po(o),o}}/**
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
 */class sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}sp.type="NONE";const Uc=sp;/**
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
 */function Ui(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ui("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(st(Uc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(Uc);const s=Ui(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const p=nn._fromJSON(t,d);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fn(o,t,r))}}/**
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
 */function Fc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(up(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ap(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dp(t))return"Blackberry";if(fp(t))return"Webos";if(Ql(t))return"Safari";if((t.includes("chrome/")||lp(t))&&!t.includes("edge/"))return"Chrome";if(cp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ap(e=ce()){return/firefox\//i.test(e)}function Ql(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lp(e=ce()){return/crios\//i.test(e)}function up(e=ce()){return/iemobile/i.test(e)}function cp(e=ce()){return/android/i.test(e)}function dp(e=ce()){return/blackberry/i.test(e)}function fp(e=ce()){return/webos/i.test(e)}function $o(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function F1(e=ce()){var t;return $o(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function z1(){return Ly()&&document.documentMode===10}function hp(e=ce()){return $o(e)||cp(e)||fp(e)||dp(e)||/windows phone/i.test(e)||up(e)}function B1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pp(e,t=[]){let n;switch(e){case"Browser":n=Fc(ce());break;case"Worker":n=`${Fc(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fo}/${r}`}/**
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
 */class j1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class $1{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zc(this),this.idTokenSubscription=new zc(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await po(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?mt(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return O(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bo(e){return mt(e)}class zc{constructor(t){this.auth=t,this.observer=null,this.addObserver=By(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function b1(e,t,n){const r=bo(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=mp(t),{host:s,port:a}=V1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||H1()}function mp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function V1(e){const t=mp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Bc(s)}}}function Bc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function H1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class gp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}/**
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
 */async function zn(e,t){return T1(e,"POST","/v1/accounts:signInWithIdp",k1(e,t))}/**
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
 */const W1="http://localhost";class fn extends gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Hl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new fn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:W1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zr(n)}return t}}/**
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
 */class ti extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends ti{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class nt extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nt.credentialFromTaggedObject(t)}static credentialFromError(t){return nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class It extends ti{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class kt extends ti{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await nn._fromIdTokenResponse(t,r,i),s=jc(r);return new Gn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=jc(r);return new Gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function jc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class mo extends Ze{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new mo(t,n,r,i)}}function vp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(e,o,t,r):o})}async function G1(e,t,n=!1){const r=await Wr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gn._forOperation(e,"link",r)}/**
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
 */async function K1(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Wr(e,vp(r,i,t,e),n);O(o.idToken,r,"internal-error");const s=Kl(o.idToken);O(s,r,"internal-error");const{sub:a}=s;return O(e.uid===a,r,"user-mismatch"),Gn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),o}}/**
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
 */async function Q1(e,t,n=!1){const r="signIn",i=await vp(e,r,t),o=await Gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function q1(e,t,n,r){return mt(e).onIdTokenChanged(t,n,r)}function Y1(e,t,n){return mt(e).beforeAuthStateChanged(t,n)}function J1(e,t,n,r){return mt(e).onAuthStateChanged(t,n,r)}const go="__sak";/**
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
 */class yp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function X1(){const e=ce();return Ql(e)||$o(e)}const Z1=1e3,e_=10;class wp extends yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=X1()&&B1(),this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);z1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,e_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wp.type="LOCAL";const t_=wp;/**
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
 */class _p extends yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_p.type="SESSION";const Sp=_p;/**
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
 */function n_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Vo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await n_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
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
 */class r_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Yl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ye(){return window}function i_(e){Ye().location.href=e}/**
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
 */function Ep(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function o_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function a_(){return Ep()?self:null}/**
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
 */const Ip="firebaseLocalStorageDb",l_=1,vo="firebaseLocalStorage",kp="fbase_key";class ni{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(e,t){return e.transaction([vo],t?"readwrite":"readonly").objectStore(vo)}function u_(){const e=indexedDB.deleteDatabase(Ip);return new ni(e).toPromise()}function ja(){const e=indexedDB.open(Ip,l_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vo,{keyPath:kp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vo)?t(r):(r.close(),await u_(),t(await ja()))})})}async function $c(e,t,n){const r=Ho(e,!0).put({[kp]:t,value:n});return new ni(r).toPromise()}async function c_(e,t){const n=Ho(e,!1).get(t),r=await new ni(n).toPromise();return r===void 0?null:r.value}function bc(e,t){const n=Ho(e,!0).delete(t);return new ni(n).toPromise()}const d_=800,f_=3;class Tp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>f_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(a_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await o_(),!this.activeServiceWorker)return;this.sender=new r_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||s_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ja();return await $c(t,go,"1"),await bc(t,go),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$c(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>c_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ho(i,!1).getAll();return new ni(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tp.type="LOCAL";const h_=Tp;/**
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
 */function p_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function m_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=qe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",p_().appendChild(r)})}function g_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ei(3e4,6e4);/**
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
 */class Jl extends gp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function v_(e){return Q1(e.auth,new Jl(e),e.bypassAuthState)}function y_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),K1(n,new Jl(e),e.bypassAuthState)}async function w_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),G1(n,new Jl(e),e.bypassAuthState)}/**
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
 */class Pp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return v_;case"linkViaPopup":case"linkViaRedirect":return w_;case"reauthViaPopup":case"reauthViaRedirect":return y_;default:Xe(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const __=new ei(2e3,1e4);async function Np(e,t,n){const r=bo(e);g1(e,t,ql);const i=Cp(r,n);return new Xt(r,"signInViaPopup",t,i).executeNotNull()}class Xt extends Pp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,__.get())};t()}}Xt.currentPopupAction=null;/**
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
 */const S_="pendingRedirect",Fi=new Map;class E_ extends Pp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Fi.get(this.auth._key());if(!t){try{const r=await I_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Fi.set(this.auth._key(),t)}return this.bypassAuthState||Fi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I_(e,t){const n=C_(t),r=T_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function k_(e,t){Fi.set(e._key(),t)}function T_(e){return st(e._redirectPersistence)}function C_(e){return Ui(S_,e.config.apiKey,e.name)}async function P_(e,t,n=!1){const r=bo(e),i=Cp(r,t),s=await new E_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const N_=10*60*1e3;class R_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!O_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Rp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=N_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vc(t))}saveEventToCache(t){this.cachedEventUids.add(Vc(t)),this.lastProcessedEventTime=Date.now()}}function Vc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Rp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function O_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(e);default:return!1}}/**
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
 */async function x_(e,t={}){return jo(e,"GET","/v1/projects",t)}/**
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
 */const A_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L_=/^https?/;async function D_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await x_(e);for(const n of t)try{if(M_(n))return}catch{}Xe(e,"unauthorized-domain")}function M_(e){const t=Ba(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!L_.test(n))return!1;if(A_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const U_=new ei(3e4,6e4);function Hc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function F_(e){return new Promise((t,n)=>{var r,i,o;function s(){Hc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hc(),n(qe(e,"network-request-failed"))},timeout:U_.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=g_("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(qe(e,"network-request-failed"))},m_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw zi=null,t})}let zi=null;function z_(e){return zi=zi||F_(e),zi}/**
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
 */const B_=new ei(5e3,15e3),j_="__/auth/iframe",$_="emulator/auth/iframe",b_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H_(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gl(t,$_):`https://${e.config.authDomain}/${j_}`,r={apiKey:t.apiKey,appName:e.name,v:Fo},i=V_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Zr(r).slice(1)}`}async function W_(e){const t=await z_(e),n=Ye().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:H_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=qe(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},B_.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const G_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K_=500,Q_=600,q_="_blank",Y_="http://localhost";class Wc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J_(e,t,n,r=K_,i=Q_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},G_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ce().toLowerCase();n&&(a=lp(u)?q_:n),ap(u)&&(t=t||Y_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,S])=>`${m}${g}=${S},`,"");if(F1(u)&&a!=="_self")return X_(t||"",a),new Wc(null);const p=window.open(t||"",a,d);O(p,e,"popup-blocked");try{p.focus()}catch{}return new Wc(p)}function X_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Z_="__/auth/handler",eS="emulator/auth/handler";function Gc(e,t,n,r,i,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fo,eventId:i};if(t instanceof ql){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",zy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ti){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${tS(e)}?${Zr(a).slice(1)}`}function tS({config:e}){return e.emulator?Gl(e,eS):`https://${e.authDomain}/${Z_}`}/**
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
 */const xs="webStorageSupport";class nS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sp,this._completeRedirectFn=P_,this._overrideRedirectResult=k_}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Gc(t,n,r,Ba(),i);return J_(t,s,Yl())}async _openRedirect(t,n,r,i){return await this._originValidation(t),i_(Gc(t,n,r,Ba(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await W_(t),r=new R_(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xs,{type:xs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[xs];s!==void 0&&n(!!s),Xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return hp()||Ql()||$o()}}const rS=nS;var Kc="@firebase/auth",Qc="0.21.4";/**
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
 */class iS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sS(e){ft(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{O(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),O(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pp(e)},d=new $1(a,l,u);return y1(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Je("auth-internal",t=>{const n=bo(t.getProvider("auth").getImmediate());return(r=>new iS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Kc,Qc,oS(e)),Qe(Kc,Qc,"esm2017")}/**
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
 */const aS=5*60,lS=wh("authIdTokenMaxAge")||aS;let qc=null;const uS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lS)return;const i=n==null?void 0:n.token;qc!==i&&(qc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cS(e=Ph()){const t=Jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=v1(e,{popupRedirectResolver:rS,persistence:[h_,t_,Sp]}),r=wh("authTokenSyncURL");if(r){const o=uS(r);Y1(n,o,()=>o(n.currentUser)),q1(n,s=>o(s))}const i=Ny("auth");return i&&b1(n,`http://${i}`),n}sS("Browser");const dS={apiKey:"AIzaSyBQW8BHrhweij93RP-jif7FB0BJmWWe6yI",authDomain:"online-shop-25.firebaseapp.com",projectId:"online-shop-25",storageBucket:"online-shop-25.appspot.com",messagingSenderId:"445130183188",appId:"1:445130183188:web:ab69f3361f833528eecd01",measurementId:"G-T93XCFM44G"},fS=Ch(dS);d1(fS);const $e=cS();$e.currentUser;const Op=new nt;const xp="/online-shop/assets/googleIcon-8edb2dab.png";function hS(){let e=Yn();return U("div",{className:"signInContainer",children:[y("p",{children:"SIGN IN WITH..."}),U("button",{onClick:()=>{Np($e,Op).then(n=>{let r=n.user.email,i=n.user.displayName;const o={userEmail:r,userName:i};return console.log($e.currentUser),localStorage.setItem("userName",i),e("/account"),console.log(o)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[y("img",{src:xp}),"GOOGLE"]})]})}function pS(){let e=Yn();return U("div",{className:"signUpContainer",children:[y("p",{children:"SIGN UP WITH..."}),U("button",{onClick:()=>{Np($e,Op).then(n=>{let r=n.user.email,i=n.user.displayName;const o={userEmail:r,userName:i};return console.log($e.currentUser),localStorage.setItem("userName",i),e("/account"),console.log(o)}).catch(n=>{console.log(n)})},className:"googleBtn",children:[y("img",{src:xp}),"GOOGLE"]})]})}const Yc={SignIn:y(hS,{}),SignUp:y(pS,{})};function mS(){const[e,t]=P.useState(Yc.SignIn),n=r=>{document.querySelector(".activeBtn").classList.remove("activeBtn"),r.target.classList.add("activeBtn"),t(Yc[r.target.attributes.container.value])};return U("div",{className:"loginMenu",children:[U("div",{className:"loginBtns",children:[y("button",{className:"activeBtn",onClick:n,container:"SignIn",children:"SIGN IN"}),y("button",{onClick:n,container:"SignUp",children:"SIGN UP"})]}),y("div",{className:"loginMenuContent",children:e})]})}function gS(){return y(wo,{children:y("div",{className:"websiteContent",children:y(mS,{})})})}/*! *****************************************************************************
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
***************************************************************************** */function vS(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(d){try{u(r.next(d))}catch(p){s(p)}}function l(d){try{u(r.throw(d))}catch(p){s(p)}}function u(d){d.done?o(d.value):i(d.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function yS(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var On=function(){return On=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},On.apply(this,arguments)},Ap=function(e){return{loading:e==null,value:e}},wS=function(){return function(e,t){switch(t.type){case"error":return On(On({},e),{error:t.error,loading:!1,value:void 0});case"reset":return Ap(t.defaultValue);case"value":return On(On({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},_S=function(e){var t=e?e():void 0,n=P.useReducer(wS(),Ap(t)),r=n[0],i=n[1],o=P.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),s=P.useCallback(function(l){i({type:"error",error:l})},[]),a=P.useCallback(function(l){i({type:"value",value:l})},[]);return P.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},Lp=function(e,t){var n=_S(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return P.useEffect(function(){var l=J1(e,function(u){return vS(void 0,void 0,void 0,function(){var d;return yS(this,function(p){switch(p.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];p.label=1;case 1:return p.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return p.sent(),[3,4];case 3:return d=p.sent(),o(d),[3,4];case 4:return s(u),[2]}})})},o);return function(){l()}},[e]),[a,i,r]};const SS="/online-shop/assets/signOutIcon-5ab103d1.png";function ES(){const e=Yn();return U("button",{onClick:()=>{$e.signOut().then(function(){console.log("Signout Succesfull"),localStorage.setItem("userName",""),e("/login")},function(n){console.log("Signout Failed")})},className:"signOutBtn",children:[y("img",{src:SS}),y("p",{children:"Sign out"})]})}function IS(){return U("div",{className:"accountMenu",children:[U("div",{className:"accountHeader",children:[y("div",{className:"backgroundPfp",children:y("img",{src:$e.currentUser.photoURL})}),y("div",{className:"pfp",children:y("img",{src:$e.currentUser.photoURL})}),y("div",{className:"pfpName",children:U("p",{children:["Hi , ",y("br",{}),y("span",{children:$e.currentUser.displayName})]})})]}),y("div",{className:"signOutOption",children:y(ES,{})})]})}function kS(){const e=Yn(),[t,n,r]=Lp($e);if(t)return y("div",{children:y("div",{className:"websiteContent",children:y(IS,{})})});e("/login")}const TS="/online-shop/assets/emptyCartImage-e50ae3ed.png";function CS(){const e=Yn();return U("div",{className:"emptyCartContainer",children:[y("img",{src:TS}),y("p",{className:"emptyCartText",children:"You have no items in cart."}),y("p",{children:"Dilvin has many articles that are waiting for you!"}),y("button",{onClick:()=>{e("/")},className:"goShoppingBtn",children:"Go Shopping"})]})}function PS(){return y(wo,{children:y("div",{className:"websiteContent",children:y(CS,{})})})}const NS="/online-shop/assets/logedOutProfileIcon-d865a437.png",RS="/online-shop/assets/logedInProfileIcon-59f87b6b.png",OS="/online-shop/assets/companyLogo-a2d24ab5.png",xS="/online-shop/assets/cartIcon-440718d0.png";let As=!1;function AS(){let e=Yn();const[t]=Lp($e);let n=NS;return t&&(n=RS),U("div",{className:"Navbar",children:[U("button",{className:"menuButton",onClick:()=>{As===!1?(As=!0,console.log("Open"),document.querySelector(".menuContainer").classList.add("open")):(As=!1,console.log("Close"),document.querySelector(".menuContainer").classList.remove("open"))},children:[y("div",{className:"menuButtonRow1"}),y("div",{className:"menuButtonRow2"}),y("div",{className:"menuButtonRow3"})]}),y("div",{className:"menuContainer"}),y("div",{className:"companyLogo",children:y("button",{onClick:()=>{e("/")},children:y("img",{src:OS})})}),U("div",{className:"navBtns",children:[y("div",{className:"accountBtn",children:y("button",{onClick:()=>{t||e("/login"),t&&e("/account")},children:y("img",{src:n})})}),y("div",{className:"cartBtn",children:y("button",{onClick:()=>{e("/cart")},children:y("img",{src:xS})})})]})]})}function LS(){return y("footer",{className:"footer",children:"© 2023 dalVin"})}function DS(){return U(wo,{children:[y(AS,{}),U(sy,{children:[y(fr,{path:"/",element:y(_y,{})}),y(fr,{path:"/login",element:y(gS,{})}),y(fr,{path:"/account",element:y(kS,{})}),y(fr,{path:"/cart",element:y(PS,{})})]}),y(LS,{})]})}Ds.createRoot(document.getElementById("root")).render(y(ay,{children:y(DS,{})}));
