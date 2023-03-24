function Np(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Op(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kr={},Ap={get exports(){return kr},set exports(e){kr=e}},yo={},k={},xp={get exports(){return k},set exports(e){k=e}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Lp=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),zp=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),Bp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),Jl=Symbol.iterator;function Vp(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yc=Object.assign,Jc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=Qn.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}var ja=$a.prototype=new Xc;ja.constructor=$a;Yc(ja,Qn.prototype);ja.isPureReactComponent=!0;var Xl=Array.isArray,Zc=Object.prototype.hasOwnProperty,Ba={current:null},ed={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Zc.call(t,r)&&!ed.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gr,type:e,key:o,ref:s,props:i,_owner:Ba.current}}function Hp(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function Wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zl=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wp(""+e.key):t.toString(36)}function Ii(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Gr:case Dp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Go(s,0):r,Xl(i)?(n="",e!=null&&(n=e.replace(Zl,"$&/")+"/"),Ii(i,t,n,"",function(u){return u})):i!=null&&(ba(i)&&(i=Hp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Zl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Xl(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Go(o,a);s+=Ii(o,t,n,l,i)}else if(l=Vp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Go(o,a++),s+=Ii(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ii(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Kp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},ki={transition:null},Gp={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Ba};D.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Qn;D.Fragment=Lp;D.Profiler=Up;D.PureComponent=$a;D.StrictMode=Mp;D.Suspense=jp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zc.call(t,l)&&!ed.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};D.createElement=td;D.createFactory=function(e){var t=td.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:$p,render:e}};D.isValidElement=ba;D.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Kp}};D.memo=function(e,t){return{$$typeof:Bp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.2.0";(function(e){e.exports=D})(xp);const vn=Op(k),xs=Np({__proto__:null,default:vn},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=k,qp=Symbol.for("react.element"),Yp=Symbol.for("react.fragment"),Jp=Object.prototype.hasOwnProperty,Xp=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zp={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Jp.call(t,r)&&!Zp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qp,type:e,key:o,ref:s,props:i,_owner:Xp.current}}yo.Fragment=Yp;yo.jsx=nd;yo.jsxs=nd;(function(e){e.exports=yo})(Ap);const em=kr.Fragment,M=kr.jsx,Kt=kr.jsxs;var Ds={},Ls={},tm={get exports(){return Ls},set exports(e){Ls=e}},ke={},Ms={},nm={get exports(){return Ms},set exports(e){Ms=e}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var A=I.length;I.push(O);e:for(;0<A;){var G=A-1>>>1,X=I[G];if(0<i(X,O))I[G]=O,I[A]=X,A=G;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],A=I.pop();if(A!==O){I[0]=A;e:for(var G=0,X=I.length,ri=X>>>1;G<ri;){var Bt=2*(G+1)-1,Ko=I[Bt],bt=Bt+1,ii=I[bt];if(0>i(Ko,A))bt<X&&0>i(ii,Ko)?(I[G]=ii,I[bt]=A,G=bt):(I[G]=Ko,I[Bt]=A,G=Bt);else if(bt<X&&0>i(ii,A))I[G]=ii,I[bt]=A,G=bt;else break e}}return O}function i(I,O){var A=I.sortIndex-O.sortIndex;return A!==0?A:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,m=3,g=!1,_=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function v(I){if(y=!1,p(I),!_)if(n(l)!==null)_=!0,Ho(S);else{var O=n(u);O!==null&&Wo(v,O.startTime-I)}}function S(I,O){_=!1,y&&(y=!1,f(R),R=-1),g=!0;var A=m;try{for(p(O),h=n(l);h!==null&&(!(h.expirationTime>O)||I&&!De());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var X=G(h.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(l)&&r(l),p(O)}else r(l);h=n(l)}if(h!==null)var ri=!0;else{var Bt=n(u);Bt!==null&&Wo(v,Bt.startTime-O),ri=!1}return ri}finally{h=null,m=A,g=!1}}var T=!1,C=null,R=-1,$=5,x=-1;function De(){return!(e.unstable_now()-x<$)}function Zn(){if(C!==null){var I=e.unstable_now();x=I;var O=!0;try{O=C(!0,I)}finally{O?er():(T=!1,C=null)}}else T=!1}var er;if(typeof c=="function")er=function(){c(Zn)};else if(typeof MessageChannel<"u"){var Yl=new MessageChannel,Pp=Yl.port2;Yl.port1.onmessage=Zn,er=function(){Pp.postMessage(null)}}else er=function(){P(Zn,0)};function Ho(I){C=I,T||(T=!0,er())}function Wo(I,O){R=P(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,Ho(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return I()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=m;m=I;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(I,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=A+X,I={id:d++,callback:O,priorityLevel:I,startTime:A,expirationTime:X,sortIndex:-1},A>G?(I.sortIndex=A,t(u,I),n(l)===null&&I===n(u)&&(y?(f(R),R=-1):y=!0,Wo(v,A-G))):(I.sortIndex=X,t(l,I),_||g||(_=!0,Ho(S))),I},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(I){var O=m;return function(){var A=m;m=O;try{return I.apply(this,arguments)}finally{m=A}}}})(rd);(function(e){e.exports=rd})(nm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=k,Ie=Ms;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,Tr={};function fn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)od.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=Object.prototype.hasOwnProperty,rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function im(e){return Us.call(tu,e)?!0:Us.call(eu,e)?!1:rm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function om(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sm(e,t,n,r){if(t===null||typeof t>"u"||om(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ha);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ha);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ha);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sm(t,n,i,r)&&(n=null),r||i===null?im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),wn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ad=Symbol.for("react.context"),Ga=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),$s=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),ld=Symbol.for("react.offscreen"),nu=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Qo;function ur(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||""}return`
`+Qo+e}var qo=!1;function Yo(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function am(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case wn:return"Portal";case Fs:return"Profiler";case Ka:return"StrictMode";case zs:return"Suspense";case $s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case sd:return(e._context.displayName||"Context")+".Provider";case Ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function um(e){var t=ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=um(e))}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dd(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function bs(e,t){dd(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vs(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(cr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function fd(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,pd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cm=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function md(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=md(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if(dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Dn=null,Ln=null;function au(e){if(e=Yr(e)){if(typeof qs!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Io(t),qs(e.stateNode,e.type,t))}}function vd(e){Dn?Ln?Ln.push(e):Ln=[e]:Dn=e}function yd(){if(Dn){var e=Dn,t=Ln;if(Ln=Dn=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function wd(e,t){return e(t)}function _d(){}var Jo=!1;function Sd(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return wd(e,t,n)}finally{Jo=!1,(Dn!==null||Ln!==null)&&(_d(),yd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ys=!1;if(st)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Ys=!1}function fm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pr=!1,ji=null,Bi=!1,Js=null,hm={onError:function(e){pr=!0,ji=e}};function pm(e,t,n,r,i,o,s,a,l){pr=!1,ji=null,fm.apply(hm,arguments)}function mm(e,t,n,r,i,o,s,a,l){if(pm.apply(this,arguments),pr){if(pr){var u=ji;pr=!1,ji=null}else throw Error(w(198));Bi||(Bi=!0,Js=u)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(hn(e)!==e)throw Error(w(188))}function gm(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Id(e){return e=gm(e),e!==null?kd(e):null}function kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kd(e);if(t!==null)return t;e=e.sibling}return null}var Td=Ie.unstable_scheduleCallback,uu=Ie.unstable_cancelCallback,vm=Ie.unstable_shouldYield,ym=Ie.unstable_requestPaint,Q=Ie.unstable_now,wm=Ie.unstable_getCurrentPriorityLevel,Ya=Ie.unstable_ImmediatePriority,Cd=Ie.unstable_UserBlockingPriority,bi=Ie.unstable_NormalPriority,_m=Ie.unstable_LowPriority,Rd=Ie.unstable_IdlePriority,wo=null,He=null;function Sm(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:km,Em=Math.log,Im=Math.LN2;function km(e){return e>>>=0,e===0?32:31-(Em(e)/Im|0)|0}var ui=64,ci=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=dr(a):(o&=s,o!==0&&(r=dr(o)))}else s=n&~i,s!==0?r=dr(s):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Tm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Rm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Od,Xa,Ad,xd,Dd,Zs=!1,di=[],Ct=null,Rt=null,Pt=null,Pr=new Map,Nr=new Map,yt=[],Pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yr(t),t!==null&&Xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nm(e,t,n,r,i){switch(t){case"focusin":return Ct=rr(Ct,e,t,n,r,i),!0;case"dragenter":return Rt=rr(Rt,e,t,n,r,i),!0;case"mouseover":return Pt=rr(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pr.set(o,rr(Pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,rr(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ld(e){var t=Gt(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ed(n),t!==null){e.blockedOn=t,Dd(e.priority,function(){Ad(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=Yr(n),t!==null&&Xa(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Ti(e)&&n.delete(t)}function Om(){Zs=!1,Ct!==null&&Ti(Ct)&&(Ct=null),Rt!==null&&Ti(Rt)&&(Rt=null),Pt!==null&&Ti(Pt)&&(Pt=null),Pr.forEach(du),Nr.forEach(du)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Om)))}function Or(e){function t(i){return ir(i,e)}if(0<di.length){ir(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&ir(Ct,e),Rt!==null&&ir(Rt,e),Pt!==null&&ir(Pt,e),Pr.forEach(t),Nr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)Ld(n),n.blockedOn===null&&yt.shift()}var Mn=ft.ReactCurrentBatchConfig,Hi=!0;function Am(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=1,Za(e,t,n,r)}finally{U=i,Mn.transition=o}}function xm(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=4,Za(e,t,n,r)}finally{U=i,Mn.transition=o}}function Za(e,t,n,r){if(Hi){var i=ea(e,t,n,r);if(i===null)ls(e,t,r,Wi,n),cu(e,r);else if(Nm(i,e,t,n,r))r.stopPropagation();else if(cu(e,r),t&4&&-1<Pm.indexOf(e)){for(;i!==null;){var o=Yr(i);if(o!==null&&Od(o),o=ea(e,t,n,r),o===null&&ls(e,t,r,Wi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var Wi=null;function ea(e,t,n,r){if(Wi=null,e=qa(r),e=Gt(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function Md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wm()){case Ya:return 1;case Cd:return 4;case bi:case _m:return 16;case Rd:return 536870912;default:return 16}default:return 16}}var It=null,el=null,Ci=null;function Ud(){if(Ci)return Ci;var e,t=el,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ci=i.slice(e,1<r?1-r:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function fu(){return!1}function Te(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:fu,this.isPropagationStopped=fu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Te(qn),qr=W({},qn,{view:0,detail:0}),Dm=Te(qr),Zo,es,or,_o=W({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Zo=e.screenX-or.screenX,es=e.screenY-or.screenY):es=Zo=0,or=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:es}}),hu=Te(_o),Lm=W({},_o,{dataTransfer:0}),Mm=Te(Lm),Um=W({},qr,{relatedTarget:0}),ts=Te(Um),Fm=W({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),zm=Te(Fm),$m=W({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jm=Te($m),Bm=W({},qn,{data:0}),pu=Te(Bm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function nl(){return Wm}var Km=W({},qr,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=Te(Km),Qm=W({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=Te(Qm),qm=W({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),Ym=Te(qm),Jm=W({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=Te(Jm),Zm=W({},_o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=Te(Zm),tg=[9,13,27,32],rl=st&&"CompositionEvent"in window,mr=null;st&&"documentMode"in document&&(mr=document.documentMode);var ng=st&&"TextEvent"in window&&!mr,Fd=st&&(!rl||mr&&8<mr&&11>=mr),gu=String.fromCharCode(32),vu=!1;function zd(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function rg(e,t){switch(e){case"compositionend":return $d(t);case"keypress":return t.which!==32?null:(vu=!0,gu);case"textInput":return e=t.data,e===gu&&vu?null:e;default:return null}}function ig(e,t){if(Sn)return e==="compositionend"||!rl&&zd(e,t)?(e=Ud(),Ci=el=It=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fd&&t.locale!=="ko"?null:t.data;default:return null}}var og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!og[e.type]:t==="textarea"}function jd(e,t,n,r){vd(r),t=Ki(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Ar=null;function sg(e){Jd(e,0)}function So(e){var t=kn(e);if(cd(t))return e}function ag(e,t){if(e==="change")return t}var Bd=!1;if(st){var ns;if(st){var rs="oninput"in document;if(!rs){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),rs=typeof wu.oninput=="function"}ns=rs}else ns=!1;Bd=ns&&(!document.documentMode||9<document.documentMode)}function _u(){gr&&(gr.detachEvent("onpropertychange",bd),Ar=gr=null)}function bd(e){if(e.propertyName==="value"&&So(Ar)){var t=[];jd(t,Ar,e,qa(e)),Sd(sg,t)}}function lg(e,t,n){e==="focusin"?(_u(),gr=t,Ar=n,gr.attachEvent("onpropertychange",bd)):e==="focusout"&&_u()}function ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(Ar)}function cg(e,t){if(e==="click")return So(t)}function dg(e,t){if(e==="input"||e==="change")return So(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:fg;function xr(e,t){if(je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Us.call(t,i)||!je(e[i],t[i]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hg(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vd(n.ownerDocument.documentElement,n)){if(r!==null&&il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Eu(n,o);var s=Eu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pg=st&&"documentMode"in document&&11>=document.documentMode,En=null,ta=null,vr=null,na=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||En==null||En!==$i(r)||(r=En,"selectionStart"in r&&il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&xr(vr,r)||(vr=r,r=Ki(ta,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},is={},Wd={};st&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Eo(e){if(is[e])return is[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wd)return is[e]=t[n];return e}var Kd=Eo("animationend"),Gd=Eo("animationiteration"),Qd=Eo("animationstart"),qd=Eo("transitionend"),Yd=new Map,ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){Yd.set(e,t),fn(t,[e])}for(var os=0;os<ku.length;os++){var ss=ku[os],mg=ss.toLowerCase(),gg=ss[0].toUpperCase()+ss.slice(1);zt(mg,"on"+gg)}zt(Kd,"onAnimationEnd");zt(Gd,"onAnimationIteration");zt(Qd,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(qd,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mm(r,t,void 0,e),e.currentTarget=null}function Jd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Tu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Tu(i,a,u),o=l}}}if(Bi)throw e=Js,Bi=!1,Js=null,e}function j(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(Xd(t,e,2,!1),n.add(r))}function as(e,t,n){var r=0;t&&(r|=4),Xd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[pi]){e[pi]=!0,od.forEach(function(n){n!=="selectionchange"&&(vg.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,as("selectionchange",!1,t))}}function Xd(e,t,n,r){switch(Md(t)){case 1:var i=Am;break;case 4:i=xm;break;default:i=Za}n=i.bind(null,t,n,e),i=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Gt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Sd(function(){var u=o,d=qa(n),h=[];e:{var m=Yd.get(e);if(m!==void 0){var g=tl,_=e;switch(e){case"keypress":if(Ri(n)===0)break e;case"keydown":case"keyup":g=Gm;break;case"focusin":_="focus",g=ts;break;case"focusout":_="blur",g=ts;break;case"beforeblur":case"afterblur":g=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ym;break;case Kd:case Gd:case Qd:g=zm;break;case qd:g=Xm;break;case"scroll":g=Dm;break;case"wheel":g=eg;break;case"copy":case"cut":case"paste":g=jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mu}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Rr(c,f),v!=null&&y.push(Lr(c,v,p)))),P)break;c=c.return}0<y.length&&(m=new g(m,_,null,n,d),h.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Qs&&(_=n.relatedTarget||n.fromElement)&&(Gt(_)||_[at]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Gt(_):null,_!==null&&(P=hn(_),_!==P||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=hu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=mu,v="onPointerLeave",f="onPointerEnter",c="pointer"),P=g==null?m:kn(g),p=_==null?m:kn(_),m=new y(v,c+"leave",g,n,d),m.target=P,m.relatedTarget=p,v=null,Gt(d)===u&&(y=new y(f,c+"enter",_,n,d),y.target=p,y.relatedTarget=P,v=y),P=v,g&&_)t:{for(y=g,f=_,c=0,p=y;p;p=gn(p))c++;for(p=0,v=f;v;v=gn(v))p++;for(;0<c-p;)y=gn(y),c--;for(;0<p-c;)f=gn(f),p--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=gn(y),f=gn(f)}y=null}else y=null;g!==null&&Cu(h,m,g,y,!1),_!==null&&P!==null&&Cu(h,P,_,y,!0)}}e:{if(m=u?kn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=ag;else if(yu(m))if(Bd)S=dg;else{S=ug;var T=lg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=cg);if(S&&(S=S(e,u))){jd(h,S,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Vs(m,"number",m.value)}switch(T=u?kn(u):window,e){case"focusin":(yu(T)||T.contentEditable==="true")&&(En=T,ta=u,vr=null);break;case"focusout":vr=ta=En=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Iu(h,n,d);break;case"selectionchange":if(pg)break;case"keydown":case"keyup":Iu(h,n,d)}var C;if(rl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Sn?zd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Fd&&n.locale!=="ko"&&(Sn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Sn&&(C=Ud()):(It=d,el="value"in It?It.value:It.textContent,Sn=!0)),T=Ki(u,R),0<T.length&&(R=new pu(R,e,null,n,d),h.push({event:R,listeners:T}),C?R.data=C:(C=$d(n),C!==null&&(R.data=C)))),(C=ng?rg(e,n):ig(e,n))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(d=new pu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=C))}Jd(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Rr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Rr(n,o),l!=null&&s.unshift(Lr(n,l,a))):i||(l=Rr(n,o),l!=null&&s.push(Lr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var yg=/\r\n?/g,wg=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(wg,"")}function mi(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(w(425))}function Gi(){}var ra=null,ia=null;function oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(Eg)}:sa;function Eg(e){setTimeout(function(){throw e})}function us(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Yn,Mr="__reactProps$"+Yn,at="__reactContainer$"+Yn,aa="__reactEvents$"+Yn,Ig="__reactListeners$"+Yn,kg="__reactHandles$"+Yn;function Gt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nu(e);e!==null;){if(n=e[Ve])return n;e=Nu(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[Ve]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Io(e){return e[Mr]||null}var la=[],Tn=-1;function $t(e){return{current:e}}function B(e){0>Tn||(e.current=la[Tn],la[Tn]=null,Tn--)}function z(e,t){Tn++,la[Tn]=e.current,e.current=t}var Ft={},le=$t(Ft),ge=$t(!1),nn=Ft;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Qi(){B(ge),B(le)}function Ou(e,t,n){if(le.current!==Ft)throw Error(w(168));z(le,t),z(ge,n)}function Zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,lm(e)||"Unknown",i));return W({},n,r)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,nn=le.current,z(le,e),z(ge,ge.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Zd(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(le),z(le,e)):B(ge),z(ge,n)}var Ze=null,ko=!1,cs=!1;function ef(e){Ze===null?Ze=[e]:Ze.push(e)}function Tg(e){ko=!0,ef(e)}function jt(){if(!cs&&Ze!==null){cs=!0;var e=0,t=U;try{var n=Ze;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,ko=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Td(Ya,jt),i}finally{U=t,cs=!1}}return null}var Cn=[],Rn=0,Yi=null,Ji=0,Ce=[],Re=0,rn=null,tt=1,nt="";function Vt(e,t){Cn[Rn++]=Ji,Cn[Rn++]=Yi,Yi=e,Ji=t}function tf(e,t,n){Ce[Re++]=tt,Ce[Re++]=nt,Ce[Re++]=rn,rn=e;var r=tt;e=nt;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var o=32-ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,tt=1<<32-ze(t)+i|n<<i|r,nt=o+e}else tt=1<<o|n<<i|r,nt=e}function ol(e){e.return!==null&&(Vt(e,1),tf(e,1,0))}function sl(e){for(;e===Yi;)Yi=Cn[--Rn],Cn[Rn]=null,Ji=Cn[--Rn],Cn[Rn]=null;for(;e===rn;)rn=Ce[--Re],Ce[Re]=null,nt=Ce[--Re],Ce[Re]=null,tt=Ce[--Re],Ce[Re]=null}var Se=null,_e=null,b=!1,Fe=null;function nf(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,_e=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,_e=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(b){var t=_e;if(t){var n=t;if(!xu(e,t)){if(ua(e))throw Error(w(418));t=Nt(n.nextSibling);var r=Se;t&&xu(e,t)?nf(r,n):(e.flags=e.flags&-4097|2,b=!1,Se=e)}}else{if(ua(e))throw Error(w(418));e.flags=e.flags&-4097|2,b=!1,Se=e}}}function Du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function gi(e){if(e!==Se)return!1;if(!b)return Du(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oa(e.type,e.memoizedProps)),t&&(t=_e)){if(ua(e))throw rf(),Error(w(418));for(;t;)nf(e,t),t=Nt(t.nextSibling)}if(Du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Se?Nt(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=_e;e;)e=Nt(e.nextSibling)}function bn(){_e=Se=null,b=!1}function al(e){Fe===null?Fe=[e]:Fe.push(e)}var Cg=ft.ReactCurrentBatchConfig;function Me(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xi=$t(null),Zi=null,Pn=null,ll=null;function ul(){ll=Pn=Zi=null}function cl(e){var t=Xi.current;B(Xi),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Zi=e,ll=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ll!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Zi===null)throw Error(w(308));Pn=e,Zi.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var Qt=null;function dl(e){Qt===null?Qt=[e]:Qt.push(e)}function of(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lt(e,n)}return i=r.interleaved,i===null?(t.next=t,dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,lt(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(m=t,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(g,h,m);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,m=typeof _=="function"?_.call(g,h,m):_,m==null)break e;h=W({},h,m);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=h}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var af=new id.Component().refs;function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=xt(e),o=ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&($e(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=xt(e),o=ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&($e(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=xt(e),i=ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&($e(t,e,r,n),Pi(t,e,r))}};function Uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,o):!0}function lf(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=ve(t)?nn:le.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=af,fl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=ve(t)?nn:le.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===af&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function uf(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Dt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,v){return c===null||c.tag!==6?(c=vs(p,f.mode,v),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,v){var S=p.type;return S===_n?d(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&zu(S)===c.type)?(v=i(c,p.props),v.ref=sr(f,c,p),v.return=f,v):(v=Li(p.type,p.key,p.props,null,f.mode,v),v.ref=sr(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ys(p,f.mode,v),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,v,S){return c===null||c.tag!==7?(c=Zt(p,f.mode,v,S),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vs(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case si:return p=Li(c.type,c.key,c.props,null,f.mode,p),p.ref=sr(f,null,c),p.return=f,p;case wn:return c=ys(c,f.mode,p),c.return=f,c;case gt:var v=c._init;return h(f,v(c._payload),p)}if(cr(c)||tr(c))return c=Zt(c,f.mode,p,null),c.return=f,c;vi(f,c)}return null}function m(f,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case si:return p.key===S?l(f,c,p,v):null;case wn:return p.key===S?u(f,c,p,v):null;case gt:return S=p._init,m(f,c,S(p._payload),v)}if(cr(p)||tr(p))return S!==null?null:d(f,c,p,v,null);vi(f,p)}return null}function g(f,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case si:return f=f.get(v.key===null?p:v.key)||null,l(c,f,v,S);case wn:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,S);case gt:var T=v._init;return g(f,c,p,T(v._payload),S)}if(cr(v)||tr(v))return f=f.get(p)||null,d(c,f,v,S,null);vi(c,v)}return null}function _(f,c,p,v){for(var S=null,T=null,C=c,R=c=0,$=null;C!==null&&R<p.length;R++){C.index>R?($=C,C=null):$=C.sibling;var x=m(f,C,p[R],v);if(x===null){C===null&&(C=$);break}e&&C&&x.alternate===null&&t(f,C),c=o(x,c,R),T===null?S=x:T.sibling=x,T=x,C=$}if(R===p.length)return n(f,C),b&&Vt(f,R),S;if(C===null){for(;R<p.length;R++)C=h(f,p[R],v),C!==null&&(c=o(C,c,R),T===null?S=C:T.sibling=C,T=C);return b&&Vt(f,R),S}for(C=r(f,C);R<p.length;R++)$=g(C,f,R,p[R],v),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?R:$.key),c=o($,c,R),T===null?S=$:T.sibling=$,T=$);return e&&C.forEach(function(De){return t(f,De)}),b&&Vt(f,R),S}function y(f,c,p,v){var S=tr(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var T=S=null,C=c,R=c=0,$=null,x=p.next();C!==null&&!x.done;R++,x=p.next()){C.index>R?($=C,C=null):$=C.sibling;var De=m(f,C,x.value,v);if(De===null){C===null&&(C=$);break}e&&C&&De.alternate===null&&t(f,C),c=o(De,c,R),T===null?S=De:T.sibling=De,T=De,C=$}if(x.done)return n(f,C),b&&Vt(f,R),S;if(C===null){for(;!x.done;R++,x=p.next())x=h(f,x.value,v),x!==null&&(c=o(x,c,R),T===null?S=x:T.sibling=x,T=x);return b&&Vt(f,R),S}for(C=r(f,C);!x.done;R++,x=p.next())x=g(C,f,R,x.value,v),x!==null&&(e&&x.alternate!==null&&C.delete(x.key===null?R:x.key),c=o(x,c,R),T===null?S=x:T.sibling=x,T=x);return e&&C.forEach(function(Zn){return t(f,Zn)}),b&&Vt(f,R),S}function P(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case si:e:{for(var S=p.key,T=c;T!==null;){if(T.key===S){if(S=p.type,S===_n){if(T.tag===7){n(f,T.sibling),c=i(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&zu(S)===T.type){n(f,T.sibling),c=i(T,p.props),c.ref=sr(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===_n?(c=Zt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Li(p.type,p.key,p.props,null,f.mode,v),v.ref=sr(f,c,p),v.return=f,f=v)}return s(f);case wn:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ys(p,f.mode,v),c.return=f,f=c}return s(f);case gt:return T=p._init,P(f,c,T(p._payload),v)}if(cr(p))return _(f,c,p,v);if(tr(p))return y(f,c,p,v);vi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=vs(p,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return P}var Vn=uf(!0),cf=uf(!1),Jr={},We=$t(Jr),Ur=$t(Jr),Fr=$t(Jr);function qt(e){if(e===Jr)throw Error(w(174));return e}function hl(e,t){switch(z(Fr,t),z(Ur,e),z(We,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ws(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ws(t,e)}B(We),z(We,t)}function Hn(){B(We),B(Ur),B(Fr)}function df(e){qt(Fr.current);var t=qt(We.current),n=Ws(t,e.type);t!==n&&(z(Ur,e),z(We,n))}function pl(e){Ur.current===e&&(B(We),B(Ur))}var V=$t(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function ml(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var Ni=ft.ReactCurrentDispatcher,fs=ft.ReactCurrentBatchConfig,on=0,H=null,Y=null,Z=null,no=!1,yr=!1,zr=0,Rg=0;function oe(){throw Error(w(321))}function gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!je(e[n],t[n]))return!1;return!0}function vl(e,t,n,r,i,o){if(on=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?Ag:xg,e=n(r,i),yr){o=0;do{if(yr=!1,zr=0,25<=o)throw Error(w(301));o+=1,Z=Y=null,t.updateQueue=null,Ni.current=Dg,e=n(r,i)}while(yr)}if(Ni.current=ro,t=Y!==null&&Y.next!==null,on=0,Z=Y=H=null,no=!1,t)throw Error(w(300));return e}function yl(){var e=zr!==0;return zr=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function xe(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function $r(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=xe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((on&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,H.lanes|=d,sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,je(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=xe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);je(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ff(){}function hf(e,t){var n=H,r=xe(),i=t(),o=!je(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,wl(gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,jr(9,mf.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(w(349));on&30||pf(n,t,i)}return i}function pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mf(e,t,n,r){t.value=n,t.getSnapshot=r,vf(t)&&yf(e)}function gf(e,t,n){return n(function(){vf(t)&&yf(e)})}function vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!je(e,n)}catch{return!0}}function yf(e){var t=lt(e,1);t!==null&&$e(t,e,1,-1)}function $u(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Og.bind(null,H,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wf(){return xe().memoizedState}function Oi(e,t,n,r){var i=be();H.flags|=e,i.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var i=xe();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&gl(r,s.deps)){i.memoizedState=jr(t,n,o,r);return}}H.flags|=e,i.memoizedState=jr(1|t,n,o,r)}function ju(e,t){return Oi(8390656,8,e,t)}function wl(e,t){return Co(2048,8,e,t)}function _f(e,t){return Co(4,2,e,t)}function Sf(e,t){return Co(4,4,e,t)}function Ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,Ef.bind(null,t,e),n)}function _l(){}function kf(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return on&21?(je(n,t)||(n=Pd(),H.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Pg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=fs.transition;fs.transition={};try{e(!1),t()}finally{U=n,fs.transition=r}}function Rf(){return xe().memoizedState}function Ng(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pf(e))Nf(t,n);else if(n=of(e,t,n,r),n!==null){var i=de();$e(n,e,r,i),Of(n,t,r)}}function Og(e,t,n){var r=xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pf(e))Nf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,je(a,s)){var l=t.interleaved;l===null?(i.next=i,dl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=of(e,t,i,r),n!==null&&(i=de(),$e(n,e,r,i),Of(n,t,r))}}function Pf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Nf(e,t){yr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var ro={readContext:Ae,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Ag={readContext:Ae,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ng.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:_l,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=Pg.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=be();if(b){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));on&30||pf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ju(gf.bind(null,r,o,e),[e]),r.flags|=2048,jr(9,mf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=be(),t=ee.identifierPrefix;if(b){var n=nt,r=tt;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xg={readContext:Ae,useCallback:kf,useContext:Ae,useEffect:wl,useImperativeHandle:If,useInsertionEffect:_f,useLayoutEffect:Sf,useMemo:Tf,useReducer:hs,useRef:wf,useState:function(){return hs($r)},useDebugValue:_l,useDeferredValue:function(e){var t=xe();return Cf(t,Y.memoizedState,e)},useTransition:function(){var e=hs($r)[0],t=xe().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:hf,useId:Rf,unstable_isNewReconciler:!1},Dg={readContext:Ae,useCallback:kf,useContext:Ae,useEffect:wl,useImperativeHandle:If,useInsertionEffect:_f,useLayoutEffect:Sf,useMemo:Tf,useReducer:ps,useRef:wf,useState:function(){return ps($r)},useDebugValue:_l,useDeferredValue:function(e){var t=xe();return Y===null?t.memoizedState=e:Cf(t,Y.memoizedState,e)},useTransition:function(){var e=ps($r)[0],t=xe().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:hf,useId:Rf,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=am(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function Af(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,ka=r),pa(e,t)},n}function xf(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pa(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var Mg=ft.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?cf(t,null,n,r):Vn(t,e.child,n,r)}function Hu(e,t,n,r,i){n=n.render;var o=t.ref;return Un(t,i),r=vl(e,t,n,r,o,i),n=yl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(b&&n&&ol(t),t.flags|=1,ce(e,t,r,i),t.child)}function Wu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Df(e,t,o,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(s,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,ut(e,t,i)}return ma(e,t,n,r,i)}function Lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(On,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(On,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(On,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(On,we),we|=r;return ce(e,t,i,n),t.child}function Mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ma(e,t,n,r,i){var o=ve(n)?nn:le.current;return o=Bn(t,o),Un(t,i),n=vl(e,t,n,r,o,i),r=yl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(b&&r&&ol(t),t.flags|=1,ce(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(ve(n)){var o=!0;qi(t)}else o=!1;if(Un(t,i),t.stateNode===null)Ai(e,t),lf(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ve(n)?nn:le.current,u=Bn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fu(t,s,r,u),vt=!1;var m=t.memoizedState;s.state=m,eo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ge.current||vt?(typeof d=="function"&&(fa(t,n,d,r),l=t.memoizedState),(a=vt||Uu(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,sf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ve(n)?nn:le.current,l=Bn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&Fu(t,s,r,l),vt=!1,m=t.memoizedState,s.state=m,eo(t,r,s,i);var _=t.memoizedState;a!==h||m!==_||ge.current||vt?(typeof g=="function"&&(fa(t,n,g,r),_=t.memoizedState),(u=vt||Uu(t,n,u,r,m,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,o,i)}function ga(e,t,n,r,i,o){Mf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Au(t,n,!1),ut(e,t,o);r=t.stateNode,Mg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Vn(t,e.child,null,o),t.child=Vn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function Uf(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),hl(e,t.containerInfo)}function Gu(e,t,n,r,i){return bn(),al(i),t.flags|=256,ce(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ff(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=No(s,r,0,null),e=Zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=va,e):Sl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ug(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Dt(a,o):(o=Zt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ya(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=va,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sl(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&al(r),Vn(t,e.child,null,n),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ug(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ms(Error(w(422))),yi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=No({mode:"visible",children:r.children},i,0,null),o=Zt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Vn(t,e.child,null,s),t.child.memoizedState=ya(s),t.memoizedState=va,o);if(!(t.mode&1))return yi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=ms(o,r,void 0),yi(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,lt(e,i),$e(r,e,i,-1))}return Rl(),r=ms(Error(w(421))),yi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Nt(i.nextSibling),Se=t,b=!0,Fe=null,e!==null&&(Ce[Re++]=tt,Ce[Re++]=nt,Ce[Re++]=rn,tt=e.id,nt=e.overflow,rn=t),t=Sl(t,r.children),t.flags|=4096,t)}function Qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function gs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function zf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gs(t,!0,n,null,o);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fg(e,t,n){switch(t.tag){case 3:Uf(t),bn();break;case 5:df(t);break;case 1:ve(t.type)&&qi(t);break;case 4:hl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Ff(e,t,n):(z(V,V.current&1),e=ut(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Lf(e,t,n)}return ut(e,t,n)}var $f,wa,jf,Bf;$f=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};jf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qt(We.current);var o=null;switch(n){case"input":i=Bs(e,i),r=Bs(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=Hs(e,i),r=Hs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Ks(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zg(e,t,n){var r=t.pendingProps;switch(sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&Qi(),se(t),null;case 3:return r=t.stateNode,Hn(),B(ge),B(le),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Ra(Fe),Fe=null))),wa(e,t),se(t),null;case 5:pl(t);var i=qt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)jf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=qt(We.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)j(fr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":ru(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":ou(r,o),j("invalid",r)}Ks(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",""+a]):Tr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":ai(r),iu(r,o,!0);break;case"textarea":ai(r),su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[Mr]=r,$f(e,t,!1,!1),t.stateNode=e;e:{switch(s=Gs(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)j(fr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":ru(e,r),i=Bs(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),j("invalid",e);break;case"textarea":ou(e,r),i=Hs(e,r),j("invalid",e);break;default:i=r}Ks(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?gd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cr(e,l):typeof l=="number"&&Cr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&j("scroll",e):l!=null&&Wa(e,o,l,s))}switch(n){case"input":ai(e),iu(e,r,!1);break;case"textarea":ai(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=qt(Fr.current),qt(We.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&_e!==null&&t.mode&1&&!(t.flags&128))rf(),bn(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ve]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Fe!==null&&(Ra(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Rl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Hn(),wa(e,t),e===null&&Dr(t.stateNode.containerInfo),se(t),null;case 10:return cl(t.type._context),se(t),null;case 17:return ve(t.type)&&Qi(),se(t),null;case 19:if(B(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ar(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,ar(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Kn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!b)return se(t),null}else 2*Q()-o.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Cl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function $g(e,t){switch(sl(t),t.tag){case 1:return ve(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),B(ge),B(le),ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pl(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return Hn(),null;case 10:return cl(t.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var wi=!1,ae=!1,jg=typeof WeakSet=="function"?WeakSet:Set,E=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function _a(e,t,n){try{n()}catch(r){K(e,t,r)}}var qu=!1;function Bg(e,t){if(ra=Hi,e=Hd(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},Hi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,P=_.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Me(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return _=qu,qu=!1,_}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_a(t,n,o)}i=i.next}while(i!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Mr],delete t[aa],delete t[Ig],delete t[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var ne=null,Ue=!1;function pt(e,t,n){for(n=n.child;n!==null;)Hf(e,t,n),n=n.sibling}function Hf(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:ae||Nn(n,t);case 6:var r=ne,i=Ue;ne=null,pt(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?us(e.parentNode,n):e.nodeType===1&&us(e,n),Or(e)):us(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,pt(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_a(n,t,s),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!ae&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,pt(e,t,n),ae=r):pt(e,t,n);break;default:pt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jg),t.forEach(function(r){var i=Yg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(w(160));Hf(o,s,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wf(t,e),t=t.sibling}function Wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{wr(3,e,e.return),Ro(3,e)}catch(y){K(e,e.return,y)}try{wr(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Cr(i,"")}catch(y){K(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dd(i,o),Gs(a,s);var u=Gs(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?gd(i,h):d==="dangerouslySetInnerHTML"?pd(i,h):d==="children"?Cr(i,h):Wa(i,d,h,u)}switch(a){case"input":bs(i,o);break;case"textarea":fd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?xn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(y){K(e,e.return,y)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){K(e,e.return,y)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(kl=Q())),r&4&&Ju(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Le(t,e),ae=u):Le(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(h=E=d;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:wr(4,m,m.return);break;case 1:Nn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){Zu(h);continue}}g!==null?(g.return=m,E=g):Zu(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=md("display",s))}catch(y){K(e,e.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){K(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Le(t,e),Be(e),r&4&&Ju(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var o=Yu(e);Ia(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Yu(e);Ea(e,a,s);break;default:throw Error(w(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bg(e,t,n){E=e,Kf(e)}function Kf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||wi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=wi;var u=ae;if(wi=s,(ae=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?ec(i):l!==null?(l.return=s,E=l):ec(i);for(;o!==null;)E=o,Kf(o),o=o.sibling;E=i,wi=a,ae=u}Xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Xu(e)}}function Xu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&Sa(t)}catch(m){K(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Zu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function ec(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Sa(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Sa(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Vg=Math.ceil,io=ft.ReactCurrentDispatcher,El=ft.ReactCurrentOwner,Ne=ft.ReactCurrentBatchConfig,L=0,ee=null,q=null,re=0,we=0,On=$t(0),J=0,Br=null,sn=0,Po=0,Il=0,_r=null,pe=null,kl=0,Kn=1/0,Xe=null,oo=!1,ka=null,At=null,_i=!1,kt=null,so=0,Sr=0,Ta=null,xi=-1,Di=0;function de(){return L&6?Q():xi!==-1?xi:xi=Q()}function xt(e){return e.mode&1?L&2&&re!==0?re&-re:Cg.transition!==null?(Di===0&&(Di=Pd()),Di):(e=U,e!==0||(e=window.event,e=e===void 0?16:Md(e.type)),e):1}function $e(e,t,n,r){if(50<Sr)throw Sr=0,Ta=null,Error(w(185));Qr(e,n,r),(!(L&2)||e!==ee)&&(e===ee&&(!(L&2)&&(Po|=n),J===4&&wt(e,re)),ye(e,r),n===1&&L===0&&!(t.mode&1)&&(Kn=Q()+500,ko&&jt()))}function ye(e,t){var n=e.callbackNode;Cm(e,t);var r=Vi(e,e===ee?re:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?Tg(tc.bind(null,e)):ef(tc.bind(null,e)),Sg(function(){!(L&6)&&jt()}),n=null;else{switch(Nd(r)){case 1:n=Ya;break;case 4:n=Cd;break;case 16:n=bi;break;case 536870912:n=Rd;break;default:n=bi}n=eh(n,Gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gf(e,t){if(xi=-1,Di=0,L&6)throw Error(w(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Vi(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=L;L|=2;var o=qf();(ee!==e||re!==t)&&(Xe=null,Kn=Q()+500,Xt(e,t));do try{Kg();break}catch(a){Qf(e,a)}while(1);ul(),io.current=o,L=i,q!==null?t=0:(ee=null,re=0,t=J)}if(t!==0){if(t===2&&(i=Xs(e),i!==0&&(r=i,t=Ca(e,i))),t===1)throw n=Br,Xt(e,0),wt(e,r),ye(e,Q()),n;if(t===6)wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hg(i)&&(t=ao(e,r),t===2&&(o=Xs(e),o!==0&&(r=o,t=Ca(e,o))),t===1))throw n=Br,Xt(e,0),wt(e,r),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Ht(e,pe,Xe);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=kl+500-Q(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(Ht.bind(null,e,pe,Xe),t);break}Ht(e,pe,Xe);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vg(r/1960))-r,10<r){e.timeoutHandle=sa(Ht.bind(null,e,pe,Xe),r);break}Ht(e,pe,Xe);break;case 5:Ht(e,pe,Xe);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?Gf.bind(null,e):null}function Ca(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=ao(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ra(t)),e}function Ra(e){pe===null?pe=e:pe.push.apply(pe,e)}function Hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Il,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if(L&6)throw Error(w(327));Fn();var t=Vi(e,0);if(!(t&1))return ye(e,Q()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Xs(e);r!==0&&(t=r,n=Ca(e,r))}if(n===1)throw n=Br,Xt(e,0),wt(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,pe,Xe),ye(e,Q()),null}function Tl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Kn=Q()+500,ko&&jt())}}function an(e){kt!==null&&kt.tag===0&&!(L&6)&&Fn();var t=L;L|=1;var n=Ne.transition,r=U;try{if(Ne.transition=null,U=1,e)return e()}finally{U=r,Ne.transition=n,L=t,!(L&6)&&jt()}}function Cl(){we=On.current,B(On)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_g(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Hn(),B(ge),B(le),ml();break;case 5:pl(r);break;case 4:Hn();break;case 13:B(V);break;case 19:B(V);break;case 10:cl(r.type._context);break;case 22:case 23:Cl()}n=n.return}if(ee=e,q=e=Dt(e.current,null),re=we=t,J=0,Br=null,Il=Po=sn=0,pe=_r=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qt=null}return e}function Qf(e,t){do{var n=q;try{if(ul(),Ni.current=ro,no){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(on=0,Z=Y=H=null,yr=!1,zr=0,El.current=null,n===null||n.return===null){J=1,Br=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=bu(s);if(g!==null){g.flags&=-257,Vu(g,s,a,o,t),g.mode&1&&Bu(o,u,t),t=g,l=u;var _=t.updateQueue;if(_===null){var y=new Set;y.add(l),t.updateQueue=y}else _.add(l);break e}else{if(!(t&1)){Bu(o,u,t),Rl();break e}l=Error(w(426))}}else if(b&&a.mode&1){var P=bu(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Vu(P,s,a,o,t),al(Wn(l,a));break e}}o=l=Wn(l,a),J!==4&&(J=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Af(o,l,t);Lu(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(At===null||!At.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=xf(o,a,t);Lu(o,v);break e}}o=o.return}while(o!==null)}Jf(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function qf(){var e=io.current;return io.current=ro,e===null?ro:e}function Rl(){(J===0||J===3||J===2)&&(J=4),ee===null||!(sn&268435455)&&!(Po&268435455)||wt(ee,re)}function ao(e,t){var n=L;L|=2;var r=qf();(ee!==e||re!==t)&&(Xe=null,Xt(e,t));do try{Wg();break}catch(i){Qf(e,i)}while(1);if(ul(),L=n,io.current=r,q!==null)throw Error(w(261));return ee=null,re=0,J}function Wg(){for(;q!==null;)Yf(q)}function Kg(){for(;q!==null&&!vm();)Yf(q)}function Yf(e){var t=Zf(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Jf(e):q=t,El.current=null}function Jf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$g(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=zg(n,t,we),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Ht(e,t,n){var r=U,i=Ne.transition;try{Ne.transition=null,U=1,Gg(e,t,n,r)}finally{Ne.transition=i,U=r}return null}function Gg(e,t,n,r){do Fn();while(kt!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rm(e,o),e===ee&&(q=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,eh(bi,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var s=U;U=1;var a=L;L|=4,El.current=null,Bg(e,n),Wf(n,e),hg(ia),Hi=!!ra,ia=ra=null,e.current=n,bg(n),ym(),L=a,U=s,Ne.transition=o}else e.current=n;if(_i&&(_i=!1,kt=e,so=i),o=e.pendingLanes,o===0&&(At=null),Sm(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=ka,ka=null,e;return so&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Ta?Sr++:(Sr=0,Ta=e):Sr=0,jt(),null}function Fn(){if(kt!==null){var e=Nd(so),t=Ne.transition,n=U;try{if(Ne.transition=null,U=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,so=0,L&6)throw Error(w(331));var i=L;for(L|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:wr(8,d,o)}var h=d.child;if(h!==null)h.return=d,E=h;else for(;E!==null;){d=E;var m=d.sibling,g=d.return;if(bf(d),d===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){s=E;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,E=p;else e:for(s=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ro(9,a)}}catch(S){K(a,a.return,S)}if(a===s){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(L=i,jt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{U=n,Ne.transition=t}}return!1}function nc(e,t,n){t=Wn(n,t),t=Af(e,t,1),e=Ot(e,t,1),t=de(),e!==null&&(Qr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)nc(e,e,n);else for(;t!==null;){if(t.tag===3){nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Wn(n,e),e=xf(t,e,1),t=Ot(t,e,1),e=de(),t!==null&&(Qr(t,1,e),ye(t,e));break}}t=t.return}}function Qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Q()-kl?Xt(e,0):Il|=n),ye(e,t)}function Xf(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=de();e=lt(e,t),e!==null&&(Qr(e,t,n),ye(e,n))}function qg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xf(e,n)}function Yg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Xf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Fg(e,t,n);me=!!(e.flags&131072)}else me=!1,b&&t.flags&1048576&&tf(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ai(e,t),e=t.pendingProps;var i=Bn(t,le.current);Un(t,n),i=vl(null,t,r,e,i,n);var o=yl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,qi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fl(t),i.updater=To,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=ga(null,t,r,!0,o,n)):(t.tag=0,b&&o&&ol(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ai(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xg(r),e=Me(r,e),i){case 0:t=ma(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,Me(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Ku(e,t,r,i,n);case 3:e:{if(Uf(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sf(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(w(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(w(424)),t),t=Gu(e,t,r,n,i);break e}else for(_e=Nt(t.stateNode.containerInfo.firstChild),Se=t,b=!0,Fe=null,n=cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===i){t=ut(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return df(t),e===null&&ca(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,oa(r,i)?s=null:o!==null&&oa(r,o)&&(t.flags|=32),Mf(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ca(t),null;case 13:return Ff(e,t,n);case 4:return hl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Hu(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(Xi,r._currentValue),r._currentValue=s,o!==null)if(je(o.value,s)){if(o.children===i.children&&!ge.current){t=ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ot(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),da(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),da(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=Ae(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Wu(e,t,r,i,n);case 15:return Df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Ai(e,t),t.tag=1,ve(r)?(e=!0,qi(t)):e=!1,Un(t,n),lf(t,r,i),ha(t,r,i,n),ga(null,t,r,!0,e,n);case 19:return zf(e,t,n);case 22:return Lf(e,t,n)}throw Error(w(156,t.tag))};function eh(e,t){return Td(e,t)}function Jg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Jg(e,t,n,r)}function Pl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xg(e){if(typeof e=="function")return Pl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ga)return 11;if(e===Qa)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Pl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _n:return Zt(n.children,i,o,t);case Ka:s=8,i|=8;break;case Fs:return e=Pe(12,n,t,i|2),e.elementType=Fs,e.lanes=o,e;case zs:return e=Pe(13,n,t,i),e.elementType=zs,e.lanes=o,e;case $s:return e=Pe(19,n,t,i),e.elementType=$s,e.lanes=o,e;case ld:return No(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sd:s=10;break e;case ad:s=9;break e;case Ga:s=11;break e;case Qa:s=14;break e;case gt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function No(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=ld,e.lanes=n,e.stateNode={isHidden:!1},e}function vs(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ys(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,t,n,r,i,o,s,a,l){return e=new Zg(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(o),e}function ev(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function th(e){if(!e)return Ft;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return Zd(e,n,t)}return t}function nh(e,t,n,r,i,o,s,a,l){return e=Nl(n,r,!0,e,i,o,s,a,l),e.context=th(null),n=e.current,r=de(),i=xt(n),o=ot(r,i),o.callback=t??null,Ot(n,o,i),e.current.lanes=i,Qr(e,i,r),ye(e,r),e}function Oo(e,t,n,r){var i=t.current,o=de(),s=xt(i);return n=th(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,s),e!==null&&($e(e,i,s,o),Pi(e,i,s)),s}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ol(e,t){rc(e,t),(e=e.alternate)&&rc(e,t)}function tv(){return null}var rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Al(e){this._internalRoot=e}Ao.prototype.render=Al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Oo(e,t,null,null)};Ao.prototype.unmount=Al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Oo(null,e,null,null)}),t[at]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&Ld(e)}};function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function nv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lo(s);o.call(u)}}var s=nh(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=s,e[at]=s.current,Dr(e.nodeType===8?e.parentNode:e),an(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lo(l);a.call(u)}}var l=Nl(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=l,e[at]=l.current,Dr(e.nodeType===8?e.parentNode:e),an(function(){Oo(t,l,n,r)}),l}function Do(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=lo(s);a.call(l)}}Oo(t,s,e,i)}else s=nv(n,t,e,i,r);return lo(s)}Od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Ja(t,n|1),ye(t,Q()),!(L&6)&&(Kn=Q()+500,jt()))}break;case 13:an(function(){var r=lt(e,1);if(r!==null){var i=de();$e(r,e,1,i)}}),Ol(e,1)}};Xa=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=de();$e(t,e,134217728,n)}Ol(e,134217728)}};Ad=function(e){if(e.tag===13){var t=xt(e),n=lt(e,t);if(n!==null){var r=de();$e(n,e,t,r)}Ol(e,t)}};xd=function(){return U};Dd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};qs=function(e,t,n){switch(t){case"input":if(bs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Io(r);if(!i)throw Error(w(90));cd(r),bs(r,i)}}}break;case"textarea":fd(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};wd=Tl;_d=an;var rv={usingClientEntryPoint:!1,Events:[Yr,kn,Io,vd,yd,Tl]},lr={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iv={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Id(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{wo=Si.inject(iv),He=Si}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(t))throw Error(w(200));return ev(e,t,null,n)};ke.createRoot=function(e,t){if(!xl(e))throw Error(w(299));var n=!1,r="",i=rh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nl(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Al(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Id(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return an(e)};ke.hydrate=function(e,t,n){if(!xo(t))throw Error(w(200));return Do(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!xl(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nh(t,null,e,1,n??null,i,!1,o,s),e[at]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ao(t)};ke.render=function(e,t,n){if(!xo(t))throw Error(w(200));return Do(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!xo(e))throw Error(w(40));return e._reactRootContainer?(an(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};ke.unstable_batchedUpdates=Tl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Do(e,t,n,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ke})(tm);var oc=Ls;Ds.createRoot=oc.createRoot,Ds.hydrateRoot=oc.hydrateRoot;const ov="modulepreload",sv=function(e){return"/online-shop/"+e},sc={},Xr=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=sv(o),o in sc)return;sc[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const h=i[d];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":ov,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const ac="popstate";function av(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=pn(i.location.hash.substr(1));return Pa("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:ih(o))}function r(i,o){lv(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return cv(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uv(){return Math.random().toString(36).substr(2,8)}function lc(e,t){return{usr:e.state,key:e.key,idx:t}}function Pa(e,t,n,r){return n===void 0&&(n=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||r||uv()})}function ih(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Tt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(br({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=Tt.Pop;let P=d(),f=P==null?null:P-u;u=P,l&&l({action:a,location:y.location,delta:f})}function m(P,f){a=Tt.Push;let c=Pa(y.location,P,f);n&&n(c,P),u=d()+1;let p=lc(c,u),v=y.createHref(c);try{s.pushState(p,"",v)}catch{i.location.assign(v)}o&&l&&l({action:a,location:y.location,delta:1})}function g(P,f){a=Tt.Replace;let c=Pa(y.location,P,f);n&&n(c,P),u=d();let p=lc(c,u),v=y.createHref(c);s.replaceState(p,"",v),o&&l&&l({action:a,location:y.location,delta:0})}function _(P){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:ih(P);return te(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let y={get action(){return a},get location(){return e(i,s)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ac,h),l=P,()=>{i.removeEventListener(ac,h),l=null}},createHref(P){return t(i,P)},createURL:_,encodeLocation(P){let f=_(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(P){return s.go(P)}};return y}var uc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uc||(uc={}));function dv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?pn(t):t,i=ah(r.pathname||"/",n);if(i==null)return null;let o=oh(e);fv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Sv(o[a],kv(i));return s}function oh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=en([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),oh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:wv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of sh(o.path))i(o,s,l)}),t}function sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function fv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_v(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hv=/^:\w+$/,pv=3,mv=2,gv=1,vv=10,yv=-2,cc=e=>e==="*";function wv(e,t){let n=e.split("/"),r=n.length;return n.some(cc)&&(r+=yv),t&&(r+=mv),n.filter(i=>!cc(i)).reduce((i,o)=>i+(hv.test(o)?pv:o===""?gv:vv),r)}function _v(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Sv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Ev({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:en([i,d.pathname]),pathnameBase:Ov(en([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=en([i,d.pathnameBase]))}return o}function Ev(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Iv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let m=a[h]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Tv(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Iv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function kv(e){try{return decodeURI(e)}catch(t){return Dl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Tv(e,t){try{return decodeURIComponent(e)}catch(n){return Dl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ah(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Dl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pn(e):e;return{pathname:n?n.startsWith("/")?n:Rv(n,t):t,search:Av(r),hash:xv(i)}}function Rv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ws(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pn(e):(i=br({},e),te(!i.pathname||!i.pathname.includes("?"),ws("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),ws("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),ws("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=Cv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const en=e=>e.join("/").replace(/\/\/+/g,"/"),Ov=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Av=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lv=["post","put","patch","delete"];[...Lv];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}function Mv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Uv=typeof Object.is=="function"?Object.is:Mv,{useState:Fv,useEffect:zv,useLayoutEffect:$v,useDebugValue:jv}=xs;function Bv(e,t,n){const r=t(),[{inst:i},o]=Fv({inst:{value:r,getSnapshot:t}});return $v(()=>{i.value=r,i.getSnapshot=t,_s(i)&&o({inst:i})},[e,r,t]),zv(()=>(_s(i)&&o({inst:i}),e(()=>{_s(i)&&o({inst:i})})),[e]),jv(r),r}function _s(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Uv(n,r)}catch{return!0}}function bv(e,t,n){return t()}const Vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hv=!Vv,Wv=Hv?bv:Bv;"useSyncExternalStore"in xs&&(e=>e.useSyncExternalStore)(xs);const lh=k.createContext(null),uh=k.createContext(null),Ll=k.createContext(null),Lo=k.createContext(null),Jn=k.createContext({outlet:null,matches:[]}),ch=k.createContext(null);function Mo(){return k.useContext(Lo)!=null}function dh(){return Mo()||te(!1),k.useContext(Lo).location}function Kv(){Mo()||te(!1);let{basename:e,navigator:t}=k.useContext(Ll),{matches:n}=k.useContext(Jn),{pathname:r}=dh(),i=JSON.stringify(Pv(n).map(a=>a.pathnameBase)),o=k.useRef(!1);return k.useEffect(()=>{o.current=!0}),k.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Nv(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:en([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function pS(){let{matches:e}=k.useContext(Jn),t=e[e.length-1];return t?t.params:{}}function Gv(e,t){Mo()||te(!1);let{navigator:n}=k.useContext(Ll),r=k.useContext(uh),{matches:i}=k.useContext(Jn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=dh(),u;if(t){var d;let y=typeof t=="string"?pn(t):t;a==="/"||(d=y.pathname)!=null&&d.startsWith(a)||te(!1),u=y}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=dv(e,{pathname:m}),_=Jv(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:en([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:en([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&_?k.createElement(Lo.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tt.Pop}},_):_}function Qv(){let e=ty(),t=Dv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,o)}class qv extends k.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(Jn.Provider,{value:this.props.routeContext},k.createElement(ch.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yv(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(lh);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Jn.Provider,{value:t},r)}function Jv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||te(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||k.createElement(Qv,null):null,d=t.concat(r.slice(0,a+1)),h=()=>k.createElement(Yv,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?k.createElement(qv,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:d}}):h()},null)}var dc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(dc||(dc={}));var uo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(uo||(uo={}));function Xv(e){let t=k.useContext(uh);return t||te(!1),t}function Zv(e){let t=k.useContext(Jn);return t||te(!1),t}function ey(e){let t=Zv(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function ty(){var e;let t=k.useContext(ch),n=Xv(uo.UseRouteError),r=ey(uo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function yn(e){te(!1)}function ny(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:o,static:s=!1}=e;Mo()&&te(!1);let a=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=pn(r));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:g="default"}=r,_=k.useMemo(()=>{let y=ah(u,a);return y==null?null:{pathname:y,search:d,hash:h,state:m,key:g}},[a,u,d,h,m,g]);return _==null?null:k.createElement(Ll.Provider,{value:l},k.createElement(Lo.Provider,{children:n,value:{location:_,navigationType:i}}))}function ry(e){let{children:t,location:n}=e,r=k.useContext(lh),i=r&&!t?r.router.routes:Oa(t);return Gv(i,n)}var fc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(fc||(fc={}));new Promise(()=>{});function Oa(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;if(r.type===k.Fragment){n.push.apply(n,Oa(r.props.children,t));return}r.type!==yn&&te(!1),!r.props.index||!r.props.children||te(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Oa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iy(e){let{basename:t,children:n,window:r}=e,i=k.useRef();i.current==null&&(i.current=av({window:r,v5Compat:!0}));let o=i.current,[s,a]=k.useState({action:o.action,location:o.location});return k.useLayoutEffect(()=>o.listen(a),[o]),k.createElement(ny,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var hc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(hc||(hc={}));var pc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pc||(pc={}));/**
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
 */const fh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},oy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):oy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new sy;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(e){const t=fh(e);return hh.encodeByteArray(t,!0)},ph=function(e){return ay(e).replace(/\./g,"")},mh=function(e){try{return hh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const uy=()=>ly().__FIREBASE_DEFAULTS__,cy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mh(e[1]);return t&&JSON.parse(t)},Ml=()=>{try{return uy()||cy()||dy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fy=e=>{var t,n;return(n=(t=Ml())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hy=()=>{var e;return(e=Ml())===null||e===void 0?void 0:e.config},gh=e=>{var t;return(t=Ml())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function my(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function vh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vy(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function yh(){try{return typeof indexedDB=="object"}catch{return!1}}function wh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function yy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wy="FirebaseError";class Je extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=wy,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?_y(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Je(i,a,r)}}function _y(e,t){return e.replace(Sy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Sy=/\{\$([^}]+)}/g;function Ey(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(mc(o)&&mc(s)){if(!Vr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mc(e){return e!==null&&typeof e=="object"}/**
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
 */function Zr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Iy(e,t){const n=new ky(e,t);return n.subscribe.bind(n)}class ky{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ty(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ss),i.error===void 0&&(i.error=Ss),i.complete===void 0&&(i.complete=Ss);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ty(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ss(){}/**
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
 */const Cy=1e3,Ry=2,Py=4*60*60*1e3,Ny=.5;function gc(e,t=Cy,n=Ry){const r=t*Math.pow(n,e),i=Math.round(Ny*r*(Math.random()-.5)*2);return Math.min(Py,r+i)}/**
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
 */function ht(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Oy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new py;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xy(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ay(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ay(e){return e===Wt?void 0:e}function xy(e){return e.instantiationMode==="EAGER"}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Ly={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},My=F.INFO,Uy={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Fy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Uy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=My,this._logHandler=Fy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ly[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const zy=(e,t)=>t.some(n=>e instanceof n);let vc,yc;function $y(){return vc||(vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jy(){return yc||(yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _h=new WeakMap,Aa=new WeakMap,Sh=new WeakMap,Es=new WeakMap,Fl=new WeakMap;function By(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Lt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&_h.set(n,e)}).catch(()=>{}),Fl.set(t,e),t}function by(e){if(Aa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Aa.set(e,t)}let xa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Aa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vy(e){xa=e(xa)}function Hy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Is(this),t,...n);return Sh.set(r,t.sort?t.sort():[t]),Lt(r)}:jy().includes(e)?function(...t){return e.apply(Is(this),t),Lt(_h.get(this))}:function(...t){return Lt(e.apply(Is(this),t))}}function Wy(e){return typeof e=="function"?Hy(e):(e instanceof IDBTransaction&&by(e),zy(e,$y())?new Proxy(e,xa):e)}function Lt(e){if(e instanceof IDBRequest)return By(e);if(Es.has(e))return Es.get(e);const t=Wy(e);return t!==e&&(Es.set(e,t),Fl.set(t,e)),t}const Is=e=>Fl.get(e);function Eh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Lt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Lt(s.result),l.oldVersion,l.newVersion,Lt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ky=["get","getKey","getAll","getAllKeys","count"],Gy=["put","add","delete","clear"],ks=new Map;function wc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Gy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ky.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ks.set(t,o),o}Vy(e=>({...e,get:(t,n,r)=>wc(t,n)||e.get(t,n,r),has:(t,n)=>!!wc(t,n)||e.has(t,n)}));/**
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
 */class Qy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Da="@firebase/app",_c="0.9.4";/**
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
 */const ln=new Ul("@firebase/app"),Yy="@firebase/app-compat",Jy="@firebase/analytics-compat",Xy="@firebase/analytics",Zy="@firebase/app-check-compat",e0="@firebase/app-check",t0="@firebase/auth",n0="@firebase/auth-compat",r0="@firebase/database",i0="@firebase/database-compat",o0="@firebase/functions",s0="@firebase/functions-compat",a0="@firebase/installations",l0="@firebase/installations-compat",u0="@firebase/messaging",c0="@firebase/messaging-compat",d0="@firebase/performance",f0="@firebase/performance-compat",h0="@firebase/remote-config",p0="@firebase/remote-config-compat",m0="@firebase/storage",g0="@firebase/storage-compat",v0="@firebase/firestore",y0="@firebase/firestore-compat",w0="firebase",_0="9.17.2";/**
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
 */const La="[DEFAULT]",S0={[Da]:"fire-core",[Yy]:"fire-core-compat",[Xy]:"fire-analytics",[Jy]:"fire-analytics-compat",[e0]:"fire-app-check",[Zy]:"fire-app-check-compat",[t0]:"fire-auth",[n0]:"fire-auth-compat",[r0]:"fire-rtdb",[i0]:"fire-rtdb-compat",[o0]:"fire-fn",[s0]:"fire-fn-compat",[a0]:"fire-iid",[l0]:"fire-iid-compat",[u0]:"fire-fcm",[c0]:"fire-fcm-compat",[d0]:"fire-perf",[f0]:"fire-perf-compat",[h0]:"fire-rc",[p0]:"fire-rc-compat",[m0]:"fire-gcs",[g0]:"fire-gcs-compat",[v0]:"fire-fst",[y0]:"fire-fst-compat","fire-js":"fire-js",[w0]:"fire-js-all"};/**
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
 */const co=new Map,Ma=new Map;function E0(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(Ma.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,e);for(const n of co.values())E0(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const I0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new mn("app","Firebase",I0);/**
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
 */class k0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Uo=_0;function Ih(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=hy()),!n)throw Mt.create("no-options");const o=co.get(i);if(o){if(Vr(n,o.options)&&Vr(r,o.config))return o;throw Mt.create("duplicate-app",{appName:i})}const s=new Dy(i);for(const l of Ma.values())s.addComponent(l);const a=new k0(n,r,s);return co.set(i,a),a}function kh(e=La){const t=co.get(e);if(!t&&e===La)return Ih();if(!t)throw Mt.create("no-app",{appName:e});return t}function Ke(e,t,n){var r;let i=(r=S0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}ct(new qe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const T0="firebase-heartbeat-database",C0=1,Hr="firebase-heartbeat-store";let Ts=null;function Th(){return Ts||(Ts=Eh(T0,C0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Hr)}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),Ts}async function R0(e){try{return(await Th()).transaction(Hr).objectStore(Hr).get(Ch(e))}catch(t){if(t instanceof Je)ln.warn(t.message);else{const n=Mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function Sc(e,t){try{const r=(await Th()).transaction(Hr,"readwrite");return await r.objectStore(Hr).put(t,Ch(e)),r.done}catch(n){if(n instanceof Je)ln.warn(n.message);else{const r=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Ch(e){return`${e.name}!${e.options.appId}`}/**
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
 */const P0=1024,N0=30*24*60*60*1e3;class O0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=N0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ec(),{heartbeatsToSend:n,unsentEntries:r}=A0(this._heartbeatsCache.heartbeats),i=ph(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ec(){return new Date().toISOString().substring(0,10)}function A0(e,t=P0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ic(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ic(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yh()?wh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await R0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ic(e){return ph(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function D0(e){ct(new qe("platform-logger",t=>new Qy(t),"PRIVATE")),ct(new qe("heartbeat",t=>new O0(t),"PRIVATE")),Ke(Da,_c,e),Ke(Da,_c,"esm2017"),Ke("fire-js","")}D0("");var L0="firebase",M0="9.17.2";/**
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
 */Ke(L0,M0,"app");const Rh="@firebase/installations",zl="0.6.4";/**
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
 */const Ph=1e4,Nh=`w:${zl}`,Oh="FIS_v2",U0="https://firebaseinstallations.googleapis.com/v1",F0=60*60*1e3,z0="installations",$0="Installations";/**
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
 */const j0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},un=new mn(z0,$0,j0);function Ah(e){return e instanceof Je&&e.code.includes("request-failed")}/**
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
 */function xh({projectId:e}){return`${U0}/projects/${e}/installations`}function Dh(e){return{token:e.token,requestStatus:2,expiresIn:b0(e.expiresIn),creationTime:Date.now()}}async function Lh(e,t){const r=(await t.json()).error;return un.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function B0(e,{refreshToken:t}){const n=Mh(e);return n.append("Authorization",V0(t)),n}async function Uh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function b0(e){return Number(e.replace("s","000"))}function V0(e){return`${Oh} ${e}`}/**
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
 */async function H0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=xh(e),i=Mh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Oh,appId:e.appId,sdkVersion:Nh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Uh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Dh(u.authToken)}}else throw await Lh("Create Installation",l)}/**
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
 */function Fh(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const K0=/^[cdef][\w-]{21}$/,Ua="";function G0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Q0(e);return K0.test(n)?n:Ua}catch{return Ua}}function Q0(e){return W0(e).substr(0,22)}/**
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
 */function Fo(e){return`${e.appName}!${e.appId}`}/**
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
 */const zh=new Map;function $h(e,t){const n=Fo(e);jh(n,t),q0(n,t)}function jh(e,t){const n=zh.get(e);if(n)for(const r of n)r(t)}function q0(e,t){const n=Y0();n&&n.postMessage({key:e,fid:t}),J0()}let Yt=null;function Y0(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=e=>{jh(e.data.key,e.data.fid)}),Yt}function J0(){zh.size===0&&Yt&&(Yt.close(),Yt=null)}/**
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
 */const X0="firebase-installations-database",Z0=1,cn="firebase-installations-store";let Cs=null;function $l(){return Cs||(Cs=Eh(X0,Z0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cn)}}})),Cs}async function fo(e,t){const n=Fo(e),i=(await $l()).transaction(cn,"readwrite"),o=i.objectStore(cn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&$h(e,t.fid),t}async function Bh(e){const t=Fo(e),r=(await $l()).transaction(cn,"readwrite");await r.objectStore(cn).delete(t),await r.done}async function zo(e,t){const n=Fo(e),i=(await $l()).transaction(cn,"readwrite"),o=i.objectStore(cn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&$h(e,a.fid),a}/**
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
 */async function jl(e){let t;const n=await zo(e.appConfig,r=>{const i=ew(r),o=tw(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ua?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ew(e){const t=e||{fid:G0(),registrationStatus:0};return bh(t)}function tw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(un.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=nw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rw(e)}:{installationEntry:t}}async function nw(e,t){try{const n=await H0(e,t);return fo(e.appConfig,n)}catch(n){throw Ah(n)&&n.customData.serverCode===409?await Bh(e.appConfig):await fo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function rw(e){let t=await kc(e.appConfig);for(;t.registrationStatus===1;)await Fh(100),t=await kc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jl(e);return r||n}return t}function kc(e){return zo(e,t=>{if(!t)throw un.create("installation-not-found");return bh(t)})}function bh(e){return iw(e)?{fid:e.fid,registrationStatus:0}:e}function iw(e){return e.registrationStatus===1&&e.registrationTime+Ph<Date.now()}/**
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
 */async function ow({appConfig:e,heartbeatServiceProvider:t},n){const r=sw(e,n),i=B0(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Nh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Uh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Dh(u)}else throw await Lh("Generate Auth Token",l)}function sw(e,{fid:t}){return`${xh(e)}/${t}/authTokens:generate`}/**
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
 */async function Bl(e,t=!1){let n;const r=await zo(e.appConfig,o=>{if(!Vh(o))throw un.create("not-registered");const s=o.authToken;if(!t&&uw(s))return o;if(s.requestStatus===1)return n=aw(e,t),o;{if(!navigator.onLine)throw un.create("app-offline");const a=dw(o);return n=lw(e,a),a}});return n?await n:r.authToken}async function aw(e,t){let n=await Tc(e.appConfig);for(;n.authToken.requestStatus===1;)await Fh(100),n=await Tc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Bl(e,t):r}function Tc(e){return zo(e,t=>{if(!Vh(t))throw un.create("not-registered");const n=t.authToken;return fw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lw(e,t){try{const n=await ow(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await fo(e.appConfig,r),n}catch(n){if(Ah(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await fo(e.appConfig,r)}throw n}}function Vh(e){return e!==void 0&&e.registrationStatus===2}function uw(e){return e.requestStatus===2&&!cw(e)}function cw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+F0}function dw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function fw(e){return e.requestStatus===1&&e.requestTime+Ph<Date.now()}/**
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
 */async function hw(e){const t=e,{installationEntry:n,registrationPromise:r}=await jl(t);return r?r.catch(console.error):Bl(t).catch(console.error),n.fid}/**
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
 */async function pw(e,t=!1){const n=e;return await mw(n),(await Bl(n,t)).token}async function mw(e){const{registrationPromise:t}=await jl(e);t&&await t}/**
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
 */function gw(e){if(!e||!e.options)throw Rs("App Configuration");if(!e.name)throw Rs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Rs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Rs(e){return un.create("missing-app-config-values",{valueName:e})}/**
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
 */const Hh="installations",vw="installations-internal",yw=e=>{const t=e.getProvider("app").getImmediate(),n=gw(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ww=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,Hh).getImmediate();return{getId:()=>hw(n),getToken:i=>pw(n,i)}};function _w(){ct(new qe(Hh,yw,"PUBLIC")),ct(new qe(vw,ww,"PRIVATE"))}_w();Ke(Rh,zl);Ke(Rh,zl,"esm2017");/**
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
 */const ho="analytics",Sw="firebase_id",Ew="origin",Iw=60*1e3,kw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ee=new Ul("@firebase/analytics");/**
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
 */function Kh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Tw(e,t){const n=document.createElement("script");n.src=`${Wh}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Cw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Rw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Kh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ee.error(a)}e("config",i,o)}async function Pw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Kh(n);for(const l of s){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ee.error(o)}}function Nw(e,t,n,r){async function i(o,s,a){try{o==="event"?await Pw(e,t,n,s,a):o==="config"?await Rw(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ee.error(l)}}return i}function Ow(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Nw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Aw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Wh)&&n.src.includes(e))return n;return null}/**
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
 */const xw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Oe=new mn("analytics","Analytics",xw);/**
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
 */const Dw=30,Lw=1e3;class Mw{constructor(t={},n=Lw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Gh=new Mw;function Uw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Fw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Uw(r)},o=kw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Oe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function zw(e,t=Gh,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Oe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Oe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Bw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Iw),Qh({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Qh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Gh){var o;const{appId:s,measurementId:a}=e;try{await $w(r,t)}catch(l){if(a)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await Fw(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!jw(u)){if(i.deleteThrottleMetadata(s),a)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?gc(n,i.intervalMillis,Dw):gc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),Ee.debug(`Calling attemptFetch again in ${d} millis`),Qh(e,h,r,i)}}function $w(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Oe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function jw(e){if(!(e instanceof Je)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Bw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function bw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function Vw(){if(yh())try{await wh()}catch(e){return Ee.warn(Oe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ee.warn(Oe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hw(e,t,n,r,i,o,s){var a;const l=zw(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ee.error(g)),t.push(l);const u=Vw().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([l,u]);Aw(o)||Tw(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[Ew]="firebase",m.update=!0,h!=null&&(m[Sw]=h),i("config",d.measurementId,m),d.measurementId}/**
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
 */class Ww{constructor(t){this.app=t}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Cc=[];const Rc={};let Ps="dataLayer",Kw="gtag",Pc,qh,Nc=!1;function Gw(){const e=[];if(vh()&&e.push("This is a browser extension environment."),yy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Oe.create("invalid-analytics-context",{errorInfo:t});Ee.warn(n.message)}}function Qw(e,t,n){Gw();const r=e.options.appId;if(!r)throw Oe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Oe.create("no-api-key");if(Er[r]!=null)throw Oe.create("already-exists",{id:r});if(!Nc){Cw(Ps);const{wrappedGtag:o,gtagCore:s}=Ow(Er,Cc,Rc,Ps,Kw);qh=o,Pc=s,Nc=!0}return Er[r]=Hw(e,Cc,Rc,t,Pc,Ps,n),new Ww(e)}function qw(e=kh()){e=ht(e);const t=Xn(e,ho);return t.isInitialized()?t.getImmediate():Yw(e)}function Yw(e,t={}){const n=Xn(e,ho);if(n.isInitialized()){const i=n.getImmediate();if(Vr(t,n.getOptions()))return i;throw Oe.create("already-initialized")}return n.initialize({options:t})}function Jw(e,t,n,r){e=ht(e),bw(qh,Er[e.app.options.appId],t,n,r).catch(i=>Ee.error(i))}const Oc="@firebase/analytics",Ac="0.9.4";function Xw(){ct(new qe(ho,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Qw(r,i,n)},"PUBLIC")),ct(new qe("analytics-internal",e,"PRIVATE")),Ke(Oc,Ac),Ke(Oc,Ac,"esm2017");function e(t){try{const n=t.getProvider(ho).getImmediate();return{logEvent:(r,i,o)=>Jw(n,r,i,o)}}catch(n){throw Oe.create("interop-component-reg-failed",{reason:n})}}}Xw();function bl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Yh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zw=Yh,Jh=new mn("auth","Firebase",Yh());/**
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
 */const xc=new Ul("@firebase/auth");function Mi(e,...t){xc.logLevel<=F.ERROR&&xc.error(`Auth (${Uo}): ${e}`,...t)}/**
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
 */function Ye(e,...t){throw Vl(e,...t)}function Ge(e,...t){return Vl(e,...t)}function Xh(e,t,n){const r=Object.assign(Object.assign({},Zw()),{[t]:n});return new mn("auth","Firebase",r).create(t,{appName:e.name})}function e_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ye(e,"argument-error"),Xh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Jh.create(e,...t)}function N(e,t,...n){if(!e)throw Vl(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mi(t),new Error(t)}function dt(e,t){e||rt(t)}/**
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
 */const Dc=new Map;function it(e){dt(e instanceof Function,"Expected a class definition");let t=Dc.get(e);return t?(dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dc.set(e,t),t)}/**
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
 */function t_(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vr(o,t??{}))return i;Ye(i,"already-initialized")}return n.initialize({options:t})}function n_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Fa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function r_(){return Lc()==="http:"||Lc()==="https:"}function Lc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function i_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r_()||vh()||"connection"in navigator)?navigator.onLine:!0}function o_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ei{constructor(t,n){this.shortDelay=t,this.longDelay=n,dt(n>t,"Short delay should be less than long delay!"),this.isMobile=my()||gy()}get(){return i_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hl(e,t){dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Zh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const s_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const a_=new ei(3e4,6e4);function l_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $o(e,t,n,r,i={}){return ep(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Zr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Zh.fetch()(tp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function ep(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},s_),t);try{const i=new c_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ei(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ei(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ei(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ei(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xh(e,d,u);Ye(e,d)}}catch(i){if(i instanceof Je)throw i;Ye(e,"internal-error",{message:String(i)})}}async function u_(e,t,n,r,i={}){const o=await $o(e,t,n,r,i);return"mfaPendingCredential"in o&&Ye(e,"multi-factor-auth-required",{_serverResponse:o}),o}function tp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Hl(e.config,i):`${e.config.apiScheme}://${i}`}class c_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),a_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ei(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function d_(e,t){return $o(e,"POST","/v1/accounts:delete",t)}async function f_(e,t){return $o(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function h_(e,t=!1){const n=ht(e),r=await n.getIdToken(t),i=Wl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ir(Ns(i.auth_time)),issuedAtTime:Ir(Ns(i.iat)),expirationTime:Ir(Ns(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ns(e){return Number(e)*1e3}function Wl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=mh(n);return i?JSON.parse(i):(Mi("Failed to decode base64 JWT payload"),null)}catch(i){return Mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p_(e){const t=Wl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Je&&m_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function m_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class g_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class np{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wr(e,f_(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?w_(o.providerUserInfo):[],a=y_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new np(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function v_(e){const t=ht(e);await po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function y_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function w_(e){return e.map(t=>{var{providerId:n}=t,r=bl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function __(e,t){const n=await ep(e,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=tp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):p_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await __(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Kr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function mt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=bl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new np(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return h_(this,t)}reload(){return v_(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wr(this,d_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:v,isAnonymous:S,providerData:T,stsTokenManager:C}=n;N(p&&C,t,"internal-error");const R=Kr.fromJSON(this.name,C);N(typeof p=="string",t,"internal-error"),mt(h,t.name),mt(m,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof S=="boolean",t,"internal-error"),mt(g,t.name),mt(_,t.name),mt(y,t.name),mt(P,t.name),mt(f,t.name),mt(c,t.name);const $=new tn({uid:p,auth:t,email:m,emailVerified:v,displayName:h,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:R,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&($.providerData=T.map(x=>Object.assign({},x))),P&&($._redirectEventId=P),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Kr;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await po(o),o}}/**
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
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}rp.type="NONE";const Mc=rp;/**
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
 */function Ui(e,t,n){return`firebase:${e}:${t}:${n}`}class zn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ui("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zn(it(Mc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||it(Mc);const s=Ui(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=tn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new zn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new zn(o,t,r))}}/**
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
 */function Uc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ip(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lp(t))return"Blackberry";if(up(t))return"Webos";if(Kl(t))return"Safari";if((t.includes("chrome/")||op(t))&&!t.includes("edge/"))return"Chrome";if(ap(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ip(e=ue()){return/firefox\//i.test(e)}function Kl(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function op(e=ue()){return/crios\//i.test(e)}function sp(e=ue()){return/iemobile/i.test(e)}function ap(e=ue()){return/android/i.test(e)}function lp(e=ue()){return/blackberry/i.test(e)}function up(e=ue()){return/webos/i.test(e)}function jo(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function S_(e=ue()){var t;return jo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function E_(){return vy()&&document.documentMode===10}function cp(e=ue()){return jo(e)||ap(e)||up(e)||lp(e)||/windows phone/i.test(e)||sp(e)}function I_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dp(e,t=[]){let n;switch(e){case"Browser":n=Uc(ue());break;case"Worker":n=`${Uc(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Uo}/${r}`}/**
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
 */class k_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class T_{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new k_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await po(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=o_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ht(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&it(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bo(e){return ht(e)}class Fc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Iy(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function C_(e,t,n){const r=Bo(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=fp(t),{host:s,port:a}=R_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||P_()}function fp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function R_(e){const t=fp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:zc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:zc(s)}}}function zc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function P_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class hp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}/**
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
 */async function $n(e,t){return u_(e,"POST","/v1/accounts:signInWithIdp",l_(e,t))}/**
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
 */const N_="http://localhost";class dn extends hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=bl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new dn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:N_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zr(n)}return t}}/**
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
 */class Gl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ti extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class _t extends ti{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
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
 */class et extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dn._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return et.credentialFromTaggedObject(t)}static credentialFromError(t){return et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class St extends ti{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class Et extends ti{constructor(){super("twitter.com")}static credential(t,n){return dn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tn._fromIdTokenResponse(t,r,i),s=$c(r);return new Gn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=$c(r);return new Gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function $c(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class mo extends Je{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new mo(t,n,r,i)}}function pp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(e,o,t,r):o})}async function O_(e,t,n=!1){const r=await Wr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gn._forOperation(e,"link",r)}/**
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
 */async function A_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Wr(e,pp(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=Wl(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Gn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),o}}/**
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
 */async function x_(e,t,n=!1){const r="signIn",i=await pp(e,r,t),o=await Gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function D_(e,t,n,r){return ht(e).onIdTokenChanged(t,n,r)}function L_(e,t,n){return ht(e).beforeAuthStateChanged(t,n)}function M_(e,t,n,r){return ht(e).onAuthStateChanged(t,n,r)}const go="__sak";/**
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
 */class mp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function U_(){const e=ue();return Kl(e)||jo(e)}const F_=1e3,z_=10;class gp extends mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=U_()&&I_(),this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);E_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,z_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},F_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gp.type="LOCAL";const $_=gp;/**
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
 */class vp extends mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}vp.type="SESSION";const yp=vp;/**
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
 */function j_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new bo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await j_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bo.receivers=[];/**
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
 */function Ql(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class B_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Ql("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Qe(){return window}function b_(e){Qe().location.href=e}/**
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
 */function wp(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function W_(){return wp()?self:null}/**
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
 */const _p="firebaseLocalStorageDb",K_=1,vo="firebaseLocalStorage",Sp="fbase_key";class ni{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(e,t){return e.transaction([vo],t?"readwrite":"readonly").objectStore(vo)}function G_(){const e=indexedDB.deleteDatabase(_p);return new ni(e).toPromise()}function za(){const e=indexedDB.open(_p,K_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vo,{keyPath:Sp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vo)?t(r):(r.close(),await G_(),t(await za()))})})}async function jc(e,t,n){const r=Vo(e,!0).put({[Sp]:t,value:n});return new ni(r).toPromise()}async function Q_(e,t){const n=Vo(e,!1).get(t),r=await new ni(n).toPromise();return r===void 0?null:r.value}function Bc(e,t){const n=Vo(e,!0).delete(t);return new ni(n).toPromise()}const q_=800,Y_=3;class Ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await za(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Y_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bo._getInstance(W_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await za();return await jc(t,go,"1"),await Bc(t,go),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Q_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Vo(i,!1).getAll();return new ni(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ep.type="LOCAL";const J_=Ep;/**
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
 */function X_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Z_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ge("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",X_().appendChild(r)})}function e1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ei(3e4,6e4);/**
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
 */function Ip(e,t){return t?it(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ql extends hp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function t1(e){return x_(e.auth,new ql(e),e.bypassAuthState)}function n1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),A_(n,new ql(e),e.bypassAuthState)}async function r1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),O_(n,new ql(e),e.bypassAuthState)}/**
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
 */class kp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:Ye(this.auth,"internal-error")}}resolve(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new ei(2e3,1e4);async function mS(e,t,n){const r=Bo(e);e_(e,t,Gl);const i=Ip(r,n);return new Jt(r,"signInViaPopup",t,i).executeNotNull()}class Jt extends kp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const t=Ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,i1.get())};t()}}Jt.currentPopupAction=null;/**
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
 */const o1="pendingRedirect",Fi=new Map;class s1 extends kp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Fi.get(this.auth._key());if(!t){try{const r=await a1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Fi.set(this.auth._key(),t)}return this.bypassAuthState||Fi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(e,t){const n=c1(t),r=u1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function l1(e,t){Fi.set(e._key(),t)}function u1(e){return it(e._redirectPersistence)}function c1(e){return Ui(o1,e.config.apiKey,e.name)}async function d1(e,t,n=!1){const r=Bo(e),i=Ip(r,t),s=await new s1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const f1=10*60*1e3;class h1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!p1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Tp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=f1&&this.cachedEventUids.clear(),this.cachedEventUids.has(bc(t))}saveEventToCache(t){this.cachedEventUids.add(bc(t)),this.lastProcessedEventTime=Date.now()}}function bc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Tp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function p1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tp(e);default:return!1}}/**
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
 */async function m1(e,t={}){return $o(e,"GET","/v1/projects",t)}/**
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
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v1=/^https?/;async function y1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await m1(e);for(const n of t)try{if(w1(n))return}catch{}Ye(e,"unauthorized-domain")}function w1(e){const t=Fa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!v1.test(n))return!1;if(g1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _1=new ei(3e4,6e4);function Vc(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function S1(e){return new Promise((t,n)=>{var r,i,o;function s(){Vc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vc(),n(Ge(e,"network-request-failed"))},timeout:_1.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)s();else{const a=e1("iframefcb");return Qe()[a]=()=>{gapi.load?s():n(Ge(e,"network-request-failed"))},Z_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw zi=null,t})}let zi=null;function E1(e){return zi=zi||S1(e),zi}/**
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
 */const I1=new ei(5e3,15e3),k1="__/auth/iframe",T1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P1(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Hl(t,T1):`https://${e.config.authDomain}/${k1}`,r={apiKey:t.apiKey,appName:e.name,v:Uo},i=R1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Zr(r).slice(1)}`}async function N1(e){const t=await E1(e),n=Qe().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:P1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ge(e,"network-request-failed"),a=Qe().setTimeout(()=>{o(s)},I1.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const O1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A1=500,x1=600,D1="_blank",L1="http://localhost";class Hc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(e,t,n,r=A1,i=x1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=op(u)?D1:n),ip(u)&&(t=t||L1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(S_(u)&&a!=="_self")return U1(t||"",a),new Hc(null);const h=window.open(t||"",a,d);N(h,e,"popup-blocked");try{h.focus()}catch{}return new Hc(h)}function U1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const F1="__/auth/handler",z1="emulator/auth/handler";function Wc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Uo,eventId:i};if(t instanceof Gl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ey(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ti){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${$1(e)}?${Zr(a).slice(1)}`}function $1({config:e}){return e.emulator?Hl(e,z1):`https://${e.authDomain}/${F1}`}/**
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
 */const Os="webStorageSupport";class j1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yp,this._completeRedirectFn=d1,this._overrideRedirectResult=l1}async _openPopup(t,n,r,i){var o;dt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Wc(t,n,r,Fa(),i);return M1(t,s,Ql())}async _openRedirect(t,n,r,i){return await this._originValidation(t),b_(Wc(t,n,r,Fa(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await N1(t),r=new h1(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Os,{type:Os},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Os];s!==void 0&&n(!!s),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return cp()||Kl()||jo()}}const B1=j1;var Kc="@firebase/auth",Gc="0.21.4";/**
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
 */class b1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function H1(e){ct(new qe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(e)},d=new T_(a,l,u);return n_(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ct(new qe("auth-internal",t=>{const n=Bo(t.getProvider("auth").getImmediate());return(r=>new b1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(Kc,Gc,V1(e)),Ke(Kc,Gc,"esm2017")}/**
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
 */const W1=5*60,K1=gh("authIdTokenMaxAge")||W1;let Qc=null;const G1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K1)return;const i=n==null?void 0:n.token;Qc!==i&&(Qc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q1(e=kh()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=t_(e,{popupRedirectResolver:B1,persistence:[J_,$_,yp]}),r=gh("authTokenSyncURL");if(r){const o=G1(r);L_(n,o,()=>o(n.currentUser)),D_(n,s=>o(s))}const i=fy("auth");return i&&C_(n,`http://${i}`),n}H1("Browser");const q1={apiKey:"AIzaSyBQW8BHrhweij93RP-jif7FB0BJmWWe6yI",authDomain:"online-shop-25.firebaseapp.com",projectId:"online-shop-25",storageBucket:"online-shop-25.appspot.com",messagingSenderId:"445130183188",appId:"1:445130183188:web:ab69f3361f833528eecd01",measurementId:"G-T93XCFM44G"},Y1=Ih(q1);qw(Y1);const Cp=Q1();Cp.currentUser;const gS=new et;/*! *****************************************************************************
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
***************************************************************************** */function J1(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(d){try{u(r.next(d))}catch(h){s(h)}}function l(d){try{u(r.throw(d))}catch(h){s(h)}}function u(d){d.done?o(d.value):i(d.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function X1(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var An=function(){return An=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},An.apply(this,arguments)},Rp=function(e){return{loading:e==null,value:e}},Z1=function(){return function(e,t){switch(t.type){case"error":return An(An({},e),{error:t.error,loading:!1,value:void 0});case"reset":return Rp(t.defaultValue);case"value":return An(An({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},eS=function(e){var t=e?e():void 0,n=k.useReducer(Z1(),Rp(t)),r=n[0],i=n[1],o=k.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),s=k.useCallback(function(l){i({type:"error",error:l})},[]),a=k.useCallback(function(l){i({type:"value",value:l})},[]);return k.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},tS=function(e,t){var n=eS(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return k.useEffect(function(){var l=M_(e,function(u){return J1(void 0,void 0,void 0,function(){var d;return X1(this,function(h){switch(h.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return d=h.sent(),o(d),[3,4];case 4:return s(u),[2]}})})},o);return function(){l()}},[e]),[a,i,r]};const nS="/online-shop/assets/logedOutProfileIcon-d865a437.png",rS="/online-shop/assets/logedInProfileIcon-59f87b6b.png",iS="/online-shop/assets/companyLogo-a2d24ab5.png",oS="/online-shop/assets/cartIcon-440718d0.png";let As=!1;function sS(){let e=Kv();const[t]=tS(Cp);let n=nS;return t&&(n=rS),Kt("div",{className:"Navbar",children:[Kt("button",{className:"menuButton",onClick:()=>{As?(As=!1,document.querySelector(".menuContainer").classList.remove("open")):(As=!0,document.querySelector(".menuContainer").classList.add("open"))},children:[M("div",{className:"menuButtonRow1"}),M("div",{className:"menuButtonRow2"}),M("div",{className:"menuButtonRow3"})]}),M("div",{className:"menuContainer"}),M("div",{className:"companyLogo",children:M("button",{onClick:()=>{e("/")},children:M("img",{src:iS})})}),Kt("div",{className:"navBtns",children:[M("div",{className:"accountBtn",children:M("button",{onClick:()=>{t||e("/login"),t&&e("/account")},children:M("img",{src:n})})}),M("div",{className:"cartBtn",children:Kt("button",{onClick:()=>{e("/cart")},children:[M("p",{className:"navCartNotification",children:JSON.parse(localStorage.getItem("cartProducts")).length}),M("img",{src:oS})]})})]})]})}function aS(){return M("footer",{className:"footer",children:"© 2023 dalVin"})}const lS=k.lazy(()=>Xr(()=>import("./homepage-6ff3f440.js"),["assets/homepage-6ff3f440.js","assets/filter-8d223ecb.js","assets/homepage-99cc71cb.css"])),uS=k.lazy(()=>Xr(()=>import("./loginpage-38121fbe.js"),["assets/loginpage-38121fbe.js","assets/loginpage-694f2afc.css"])),cS=k.lazy(()=>Xr(()=>import("./accountpage-c3f04593.js"),["assets/accountpage-c3f04593.js","assets/accountpage-a6302aac.css"])),dS=k.lazy(()=>Xr(()=>import("./cartpage-4b6e7da1.js"),["assets/cartpage-4b6e7da1.js","assets/cartpage-33687834.css"])),fS=k.lazy(()=>Xr(()=>import("./ProductScreen-e61008c0.js"),["assets/ProductScreen-e61008c0.js","assets/filter-8d223ecb.js","assets/ProductScreen-2a4a5270.css"]));function hS(){return Kt(em,{children:[M(sS,{}),Kt(ry,{children:[M(yn,{path:"/",element:M(vn.Suspense,{fallback:"Loading...",children:M(lS,{})})}),M(yn,{path:"/login",element:Kt(vn.Suspense,{fallback:"Loading...",children:[M(uS,{})," "]})}),M(yn,{path:"/account",element:M(vn.Suspense,{fallback:"Loading...",children:M(cS,{})})}),M(yn,{path:"/cart",element:M(vn.Suspense,{fallback:"Loading...",children:M(dS,{})})}),M(yn,{path:"/product/:id",element:M(vn.Suspense,{fallback:"Loading...",children:M(fS,{})})})]}),M(aS,{})]})}Ds.createRoot(document.getElementById("root")).render(M(iy,{children:M(hS,{})}));export{em as F,Kt as a,Cp as b,tS as c,pS as d,M as j,gS as p,k as r,mS as s,Kv as u};
