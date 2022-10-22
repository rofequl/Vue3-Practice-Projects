import{c as he,h as ge,F as N,i as F,p as B,r as y,o as Y,w as C,n as E,a as k,d as M,b as be,e as S,f as P,g as v,j as te,k as x,l as I,u as _,m as L,q as V,s as K,t as $,T as ye,v as ne}from"./index.c8e81ea7.js";function R(e,n,...a){if(e in n){let t=n[e];return typeof t=="function"?t(...a):t}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,R),o}var A=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(A||{}),xe=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(xe||{});function T({visible:e=!0,features:n=0,ourProps:a,theirProps:o,...t}){var s;let r=we(o,a),u=Object.assign(t,{props:r});if(e||n&2&&r.static)return W(u);if(n&1){let d=(s=r.unmount)==null||s?0:1;return R(d,{[0](){return null},[1](){return W({...t,props:{...r,hidden:!0,style:{display:"none"}}})}})}return W(u)}function W({props:e,attrs:n,slots:a,slot:o,name:t}){var s;let{as:r,...u}=_e(e,["unmount","static"]),d=(s=a.default)==null?void 0:s.call(a,o),i={};if(o){let f=!1,l=[];for(let[c,p]of Object.entries(o))typeof p=="boolean"&&(f=!0),p===!0&&l.push(c);f&&(i["data-headlessui-state"]=l.join(" "))}if(r==="template"){if(d=re(d!=null?d:[]),Object.keys(u).length>0||Object.keys(n).length>0){let[f,...l]=d!=null?d:[];if(!ke(f)||l.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(n)).sort((c,p)=>c.localeCompare(p)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));return he(f,Object.assign({},u,i))}return Array.isArray(d)&&d.length===1?d[0]:d}return ge(r,Object.assign({},u,i),d)}function re(e){return e.flatMap(n=>n.type===N?re(n.children):[n])}function we(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},a={};for(let o of e)for(let t in o)t.startsWith("on")&&typeof o[t]=="function"?(a[t]!=null||(a[t]=[]),a[t].push(o[t])):n[t]=o[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(a).map(o=>[o,void 0])));for(let o in a)Object.assign(n,{[o](t,...s){let r=a[o];for(let u of r){if(t instanceof Event&&t.defaultPrevented)return;u(t,...s)}}});return n}function _e(e,n=[]){let a=Object.assign({},e);for(let o of n)o in a&&delete a[o];return a}function ke(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ie=0;function Se(){return++Ie}function j(){return Se()}var g=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(g||{});function De(e){throw new Error("Unexpected object: "+e)}var w=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(w||{});function Pe(e,n){let a=n.resolveItems();if(a.length<=0)return null;let o=n.resolveActiveIndex(),t=o!=null?o:-1,s=(()=>{switch(e.focus){case 0:return a.findIndex(r=>!n.resolveDisabled(r));case 1:{let r=a.slice().reverse().findIndex((u,d,i)=>t!==-1&&i.length-d-1>=t?!1:!n.resolveDisabled(u));return r===-1?r:a.length-1-r}case 2:return a.findIndex((r,u)=>u<=t?!1:!n.resolveDisabled(r));case 3:{let r=a.slice().reverse().findIndex(u=>!n.resolveDisabled(u));return r===-1?r:a.length-1-r}case 4:return a.findIndex(r=>n.resolveId(r)===e.id);case 5:return null;default:De(e)}})();return s===-1?o:s}function h(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}let oe=Symbol("Context");var O=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(O||{});function le(){return F(oe,null)}function se(e){B(oe,e)}function ae(e,n){if(e)return e;let a=n!=null?n:"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function ue(e,n){let a=y(ae(e.value.type,e.value.as));return Y(()=>{a.value=ae(e.value.type,e.value.as)}),C(()=>{var o;a.value||!h(n)||h(n)instanceof HTMLButtonElement&&!((o=h(n))!=null&&o.hasAttribute("type"))&&(a.value="button")}),a}const ie=typeof window>"u"||typeof document>"u";function z(e){if(ie)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=h(e);if(n)return n.ownerDocument}return document}function Ee({container:e,accept:n,walk:a,enabled:o}){C(()=>{let t=e.value;if(!t||o!==void 0&&!o.value)return;let s=z(e);if(!s)return;let r=Object.assign(d=>n(d),{acceptNode:n}),u=s.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,r,!1);for(;u.nextNode();)a(u.currentNode)})}let J=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Q||{}),Oe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Oe||{}),Me=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Me||{});function ce(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(J))}var X=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(X||{});function Z(e,n=0){var a;return e===((a=z(e))==null?void 0:a.body)?!1:R(n,{[0](){return e.matches(J)},[1](){let o=e;for(;o!==null;){if(o.matches(J))return!0;o=o.parentElement}return!1}})}function de(e){let n=z(e);E(()=>{n&&!Z(n.activeElement,0)&&Te(e)})}function Te(e){e==null||e.focus({preventScroll:!0})}let $e=["textarea","input"].join(",");function Re(e){var n,a;return(a=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,$e))!=null?a:!1}function fe(e,n=a=>a){return e.slice().sort((a,o)=>{let t=n(a),s=n(o);if(t===null||s===null)return 0;let r=t.compareDocumentPosition(s);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ne(e,n){return Ae(ce(),n,!0,e)}function Ae(e,n,a=!0,o=null){var t;let s=(t=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?t:document,r=Array.isArray(e)?a?fe(e):e:ce(e);o=o!=null?o:s.activeElement;let u=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,r.indexOf(o))-1;if(n&4)return Math.max(0,r.indexOf(o))+1;if(n&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=n&32?{preventScroll:!0}:{},f=0,l=r.length,c;do{if(f>=l||f+l<=0)return 0;let p=d+f;if(n&16)p=(p+l)%l;else{if(p<0)return 3;if(p>=l)return 1}c=r[p],c==null||c.focus(i),f+=u}while(c!==s.activeElement);return n&6&&Re(c)&&c.select(),c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),2}function q(e,n,a){ie||C(o=>{document.addEventListener(e,n,a),o(()=>document.removeEventListener(e,n,a))})}function je(e,n,a=k(()=>!0)){function o(s,r){if(!a.value||s.defaultPrevented)return;let u=r(s);if(u===null||!u.ownerDocument.documentElement.contains(u))return;let d=function i(f){return typeof f=="function"?i(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let i of d){if(i===null)continue;let f=i instanceof HTMLElement?i:h(i);if(f!=null&&f.contains(u))return}return!Z(u,X.Loose)&&u.tabIndex!==-1&&s.preventDefault(),n(s,u)}let t=y(null);q("mousedown",s=>{var r,u;a.value&&(t.value=((u=(r=s.composedPath)==null?void 0:r.call(s))==null?void 0:u[0])||s.target)},!0),q("click",s=>{!t.value||(o(s,()=>t.value),t.value=null)},!0),q("blur",s=>o(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ce||{});let pe=Symbol("DisclosureContext");function ee(e){let n=F(pe,null);if(n===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ee),a}return n}let ve=Symbol("DisclosurePanelContext");function Le(){return F(ve,null)}let Fe=M({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:a}){let o=`headlessui-disclosure-button-${j()}`,t=`headlessui-disclosure-panel-${j()}`,s=y(e.defaultOpen?0:1),r=y(null),u=y(null),d={buttonId:o,panelId:t,disclosureState:s,panel:r,button:u,toggleDisclosure(){s.value=R(s.value,{[0]:1,[1]:0})},closeDisclosure(){s.value!==1&&(s.value=1)},close(i){d.closeDisclosure();let f=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?h(i):h(d.button):h(d.button))();f==null||f.focus()}};return B(pe,d),se(k(()=>R(s.value,{[0]:O.Open,[1]:O.Closed}))),()=>{let{defaultOpen:i,...f}=e,l={open:s.value===0,close:d.close};return T({theirProps:f,ourProps:{},slot:l,slots:n,attrs:a,name:"Disclosure"})}}}),G=M({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:n,slots:a,expose:o}){let t=ee("DisclosureButton"),s=Le(),r=s===null?!1:s===t.panelId,u=y(null);o({el:u,$el:u}),r||C(()=>{t.button.value=u.value});let d=ue(k(()=>({as:e.as,type:n.type})),u);function i(){var c;e.disabled||(r?(t.toggleDisclosure(),(c=h(t.button))==null||c.focus()):t.toggleDisclosure())}function f(c){var p;if(!e.disabled)if(r)switch(c.key){case g.Space:case g.Enter:c.preventDefault(),c.stopPropagation(),t.toggleDisclosure(),(p=h(t.button))==null||p.focus();break}else switch(c.key){case g.Space:case g.Enter:c.preventDefault(),c.stopPropagation(),t.toggleDisclosure();break}}function l(c){switch(c.key){case g.Space:c.preventDefault();break}}return()=>{let c={open:t.disclosureState.value===0},p=r?{ref:u,type:d.value,onClick:i,onKeydown:f}:{id:t.buttonId,ref:u,type:d.value,"aria-expanded":e.disabled?void 0:t.disclosureState.value===0,"aria-controls":h(t.panel)?t.panelId:void 0,disabled:e.disabled?!0:void 0,onClick:i,onKeydown:f,onKeyup:l};return T({ourProps:p,theirProps:e,slot:c,attrs:n,slots:a,name:"DisclosureButton"})}}}),Be=M({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:n,slots:a,expose:o}){let t=ee("DisclosurePanel");o({el:t.panel,$el:t.panel}),B(ve,t.panelId);let s=le(),r=k(()=>s!==null?s.value===O.Open:t.disclosureState.value===0);return()=>{let u={open:t.disclosureState.value===0,close:t.close},d={id:t.panelId,ref:t.panel};return T({ourProps:d,theirProps:e,slot:u,attrs:n,slots:a,features:A.RenderStrategy|A.Static,visible:r.value,name:"DisclosurePanel"})}}});var Ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ue||{}),He=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(He||{});function Ve(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let me=Symbol("MenuContext");function U(e){let n=F(me,null);if(n===null){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,U),a}return n}let Ke=M({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:a}){let o=y(1),t=y(null),s=y(null),r=y([]),u=y(""),d=y(null),i=y(1);function f(c=p=>p){let p=d.value!==null?r.value[d.value]:null,m=fe(c(r.value.slice()),D=>h(D.dataRef.domRef)),b=p?m.indexOf(p):null;return b===-1&&(b=null),{items:m,activeItemIndex:b}}let l={menuState:o,buttonRef:t,itemsRef:s,items:r,searchQuery:u,activeItemIndex:d,activationTrigger:i,closeMenu:()=>{o.value=1,d.value=null},openMenu:()=>o.value=0,goToItem(c,p,m){let b=f(),D=Pe(c===w.Specific?{focus:w.Specific,id:p}:{focus:c},{resolveItems:()=>b.items,resolveActiveIndex:()=>b.activeItemIndex,resolveId:H=>H.id,resolveDisabled:H=>H.dataRef.disabled});u.value="",d.value=D,i.value=m!=null?m:1,r.value=b.items},search(c){let p=u.value!==""?0:1;u.value+=c.toLowerCase();let m=(d.value!==null?r.value.slice(d.value+p).concat(r.value.slice(0,d.value+p)):r.value).find(D=>D.dataRef.textValue.startsWith(u.value)&&!D.dataRef.disabled),b=m?r.value.indexOf(m):-1;b===-1||b===d.value||(d.value=b,i.value=1)},clearSearch(){u.value=""},registerItem(c,p){let m=f(b=>[...b,{id:c,dataRef:p}]);r.value=m.items,d.value=m.activeItemIndex,i.value=1},unregisterItem(c){let p=f(m=>{let b=m.findIndex(D=>D.id===c);return b!==-1&&m.splice(b,1),m});r.value=p.items,d.value=p.activeItemIndex,i.value=1}};return je([t,s],(c,p)=>{var m;l.closeMenu(),Z(p,X.Loose)||(c.preventDefault(),(m=h(t))==null||m.focus())},k(()=>o.value===0)),B(me,l),se(k(()=>R(o.value,{[0]:O.Open,[1]:O.Closed}))),()=>{let c={open:o.value===0};return T({ourProps:{},theirProps:e,slot:c,slots:n,attrs:a,name:"Menu"})}}}),We=M({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(e,{attrs:n,slots:a,expose:o}){let t=U("MenuButton"),s=`headlessui-menu-button-${j()}`;o({el:t.buttonRef,$el:t.buttonRef});function r(f){switch(f.key){case g.Space:case g.Enter:case g.ArrowDown:f.preventDefault(),f.stopPropagation(),t.openMenu(),E(()=>{var l;(l=h(t.itemsRef))==null||l.focus({preventScroll:!0}),t.goToItem(w.First)});break;case g.ArrowUp:f.preventDefault(),f.stopPropagation(),t.openMenu(),E(()=>{var l;(l=h(t.itemsRef))==null||l.focus({preventScroll:!0}),t.goToItem(w.Last)});break}}function u(f){switch(f.key){case g.Space:f.preventDefault();break}}function d(f){e.disabled||(t.menuState.value===0?(t.closeMenu(),E(()=>{var l;return(l=h(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(f.preventDefault(),t.openMenu(),Ve(()=>{var l;return(l=h(t.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let i=ue(k(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var f;let l={open:t.menuState.value===0},c={ref:t.buttonRef,id:s,type:i.value,"aria-haspopup":!0,"aria-controls":(f=h(t.itemsRef))==null?void 0:f.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:r,onKeyup:u,onClick:d};return T({ourProps:c,theirProps:e,slot:l,attrs:n,slots:a,name:"MenuButton"})}}}),qe=M({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:n,slots:a,expose:o}){let t=U("MenuItems"),s=`headlessui-menu-items-${j()}`,r=y(null);o({el:t.itemsRef,$el:t.itemsRef}),Ee({container:k(()=>h(t.itemsRef)),enabled:k(()=>t.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function u(l){var c;switch(r.value&&clearTimeout(r.value),l.key){case g.Space:if(t.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),t.search(l.key);case g.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeItemIndex.value!==null){let p=t.items.value[t.activeItemIndex.value];(c=h(p.dataRef.domRef))==null||c.click()}t.closeMenu(),de(h(t.buttonRef));break;case g.ArrowDown:return l.preventDefault(),l.stopPropagation(),t.goToItem(w.Next);case g.ArrowUp:return l.preventDefault(),l.stopPropagation(),t.goToItem(w.Previous);case g.Home:case g.PageUp:return l.preventDefault(),l.stopPropagation(),t.goToItem(w.First);case g.End:case g.PageDown:return l.preventDefault(),l.stopPropagation(),t.goToItem(w.Last);case g.Escape:l.preventDefault(),l.stopPropagation(),t.closeMenu(),E(()=>{var p;return(p=h(t.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case g.Tab:l.preventDefault(),l.stopPropagation(),t.closeMenu(),E(()=>Ne(h(t.buttonRef),l.shiftKey?Q.Previous:Q.Next));break;default:l.key.length===1&&(t.search(l.key),r.value=setTimeout(()=>t.clearSearch(),350));break}}function d(l){switch(l.key){case g.Space:l.preventDefault();break}}let i=le(),f=k(()=>i!==null?i.value===O.Open:t.menuState.value===0);return()=>{var l,c;let p={open:t.menuState.value===0},m={"aria-activedescendant":t.activeItemIndex.value===null||(l=t.items.value[t.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(c=h(t.buttonRef))==null?void 0:c.id,id:s,onKeydown:u,onKeyup:d,role:"menu",tabIndex:0,ref:t.itemsRef};return T({ourProps:m,theirProps:e,slot:p,attrs:n,slots:a,features:A.RenderStrategy|A.Static,visible:f.value,name:"MenuItems"})}}}),Ge=M({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(e,{slots:n,attrs:a,expose:o}){let t=U("MenuItem"),s=`headlessui-menu-item-${j()}`,r=y(null);o({el:r,$el:r});let u=k(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===s:!1),d=k(()=>({disabled:e.disabled,textValue:"",domRef:r}));Y(()=>{var p,m;let b=(m=(p=h(r))==null?void 0:p.textContent)==null?void 0:m.toLowerCase().trim();b!==void 0&&(d.value.textValue=b)}),Y(()=>t.registerItem(s,d)),be(()=>t.unregisterItem(s)),C(()=>{t.menuState.value===0&&(!u.value||t.activationTrigger.value!==0&&E(()=>{var p,m;return(m=(p=h(r))==null?void 0:p.scrollIntoView)==null?void 0:m.call(p,{block:"nearest"})}))});function i(p){if(e.disabled)return p.preventDefault();t.closeMenu(),de(h(t.buttonRef))}function f(){if(e.disabled)return t.goToItem(w.Nothing);t.goToItem(w.Specific,s)}function l(){e.disabled||u.value||t.goToItem(w.Specific,s,0)}function c(){e.disabled||!u.value||t.goToItem(w.Nothing)}return()=>{let{disabled:p}=e,m={active:u.value,disabled:p};return T({ourProps:{id:s,ref:r,role:"menuitem",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,onClick:i,onFocus:f,onPointermove:l,onMousemove:l,onPointerleave:c,onMouseleave:c},theirProps:e,slot:m,attrs:a,slots:n,name:"MenuItem"})}}});function Ye(e,n){return S(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Je(e,n){return S(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"})])}function Qe(e,n){return S(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const ze={class:"flex flex-col"},Xe={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Ze={class:"flex h-16 items-center justify-between"},et={class:"flex items-center"},tt=v("div",{class:"flex-shrink-0"},[v("img",{class:"h-8 w-8",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),nt={class:"hidden md:block"},at={class:"ml-10 flex items-baseline space-x-4"},rt={class:"hidden md:block"},ot={class:"ml-4 flex items-center md:ml-6"},lt=v("span",{class:"sr-only"},"Open user menu",-1),st=["src"],ut=["href"],it={class:"-mr-2 flex md:hidden"},ct=v("span",{class:"sr-only"},"Open main menu",-1),dt={class:"space-y-1 px-2 pt-2 pb-3 sm:px-3"},ft={class:"border-t border-gray-700 pt-4 pb-3"},pt={class:"flex items-center px-5"},vt={class:"flex-shrink-0"},mt=["src"],ht={class:"ml-3"},gt={class:"text-base font-medium leading-none text-white"},bt={class:"text-sm font-medium leading-none text-gray-400"},yt={type:"button",class:"ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},xt=v("span",{class:"sr-only"},"View notifications",-1),wt={class:"mt-3 space-y-1 px-2"},_t={class:"h-screen bg-gray-50"},It={__name:"Layout",setup(e){const n={name:"Tom Cook",email:"tom@example.com",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},a=[{name:"Dashboard",href:"Home"},{name:"Chat",href:"Chat"}],o=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];return(t,s)=>{const r=te("router-link"),u=te("router-view");return S(),P("div",ze,[x(_(Fe),{as:"nav",class:"bg-gray-800 fixed w-full top-0 h-fit"},{default:I(({open:d})=>[v("div",Xe,[v("div",Ze,[v("div",et,[tt,v("div",nt,[v("div",at,[(S(),P(N,null,L(a,i=>x(r,{key:i.name,to:{name:i.href},class:V([t.$route.name===i.href?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"]),"aria-current":t.$route.name===i.href?"page":void 0},{default:I(()=>[K($(i.name),1)]),_:2},1032,["to","class","aria-current"])),64))])])]),v("div",rt,[v("div",ot,[x(_(Ke),{as:"div",class:"relative ml-3"},{default:I(()=>[v("div",null,[x(_(We),{class:"flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},{default:I(()=>[lt,v("img",{class:"h-8 w-8 rounded-full",src:n.imageUrl,alt:""},null,8,st)]),_:1})]),x(ye,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:I(()=>[x(_(qe),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:I(()=>[(S(),P(N,null,L(o,i=>x(_(Ge),{key:i.name},{default:I(({active:f})=>[v("a",{href:i.href,class:V([f?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},$(i.name),11,ut)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})])]),v("div",it,[x(_(G),{class:"inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},{default:I(()=>[ct,d?(S(),ne(_(Qe),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(S(),ne(_(Ye),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)])])]),x(_(Be),{class:"md:hidden"},{default:I(()=>[v("div",dt,[(S(),P(N,null,L(a,i=>x(_(G),{key:i.name,as:"a",href:i.href,class:V([i.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"]),"aria-current":i.current?"page":void 0},{default:I(()=>[K($(i.name),1)]),_:2},1032,["href","class","aria-current"])),64))]),v("div",ft,[v("div",pt,[v("div",vt,[v("img",{class:"h-10 w-10 rounded-full",src:n.imageUrl,alt:""},null,8,mt)]),v("div",ht,[v("div",gt,$(n.name),1),v("div",bt,$(n.email),1)]),v("button",yt,[xt,x(_(Je),{class:"h-6 w-6","aria-hidden":"true"})])]),v("div",wt,[(S(),P(N,null,L(o,i=>x(_(G),{key:i.name,as:"a",href:i.href,class:"block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"},{default:I(()=>[K($(i.name),1)]),_:2},1032,["href"])),64))])])]),_:1})]),_:1}),v("main",_t,[x(u)])])}}};export{It as default};