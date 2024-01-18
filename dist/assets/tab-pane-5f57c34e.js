/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{X as e,az as a,cB as t,C as l,a3 as s,av as o,x as n,a7 as r,ap as i,y as u,a as c,$ as d,P as v,ay as b,o as p,c as m,n as f,G as h,H as y,_ as g,a8 as C,cC as x,cD as P,F as N,O as w,aS as T,d as k,J as B,ci as S,ar as E,bA as R,ah as A,ao as F,z as _,B as K,aE as L,ba as z,b7 as V,at as j,b8 as q,a9 as H,cE as I,r as M,Y as O,a0 as X,a1 as Y,e as $,K as D,L as G}from"./index-0efc4537.js";import{c as J}from"./strings-a95e1d29.js";const U=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},W=Symbol("tabsRootContextKey"),Q=l({tabs:{type:s(Array),default:()=>o([])}}),Z="ElTabBar",ee=n({name:Z});var ae=g(n({...ee,props:Q,setup(e,{expose:a}){const t=e,l=C(),s=r(W);s||i(Z,"<el-tabs><el-tab-bar /></el-tabs>");const o=u("tabs"),n=c(),g=c(),x=()=>g.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i["tab-".concat(s.uid)];if(!u)return!1;if(!s.active)return!0;e=u["offset".concat(J(r))],a=u["client".concat(J(o))];const c=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(c.paddingLeft)+Number.parseFloat(c.paddingRight)),e+=Number.parseFloat(c.paddingLeft)),!1})),{[o]:"".concat(a,"px"),transform:"translate".concat(J(n),"(").concat(e,"px)")}})();return d((()=>t.tabs),(async()=>{await v(),x()}),{immediate:!0}),b(n,(()=>x())),a({ref:n,update:x}),(e,a)=>(p(),m("div",{ref_key:"barRef",ref:n,class:f([h(o).e("active-bar"),h(o).is(h(s).props.tabPosition)]),style:y(g.value)},null,6))}}),[["__file","tab-bar.vue"]]);const te=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=n({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=C(),s=r(W);s||i(le,"<el-tabs><tab-nav /></el-tabs>");const o=u("tabs"),n=x(),p=P(),m=c(),f=c(),h=c(),y=c(),g=c(!1),F=c(0),_=c(!1),K=c(!0),L=N((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),z=N((()=>{const e="width"===L.value?"X":"Y";return{transform:"translate".concat(e,"(-").concat(F.value,"px)")}})),V=()=>{if(!m.value)return;const e=m.value["offset".concat(J(L.value))],a=F.value;if(!a)return;const t=a>e?a-e:0;F.value=t},j=()=>{if(!m.value||!f.value)return;const e=f.value["offset".concat(J(L.value))],a=m.value["offset".concat(J(L.value))],t=F.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;F.value=l},q=async()=>{const e=f.value;if(!(g.value&&h.value&&m.value&&e))return;await v();const a=h.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=F.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),F.value=Math.min(u,r)},H=()=>{var a;if(!f.value||!m.value)return;e.stretch&&(null==(a=y.value)||a.update());const t=f.value["offset".concat(J(L.value))],l=m.value["offset".concat(J(L.value))],s=F.value;l<t?(g.value=g.value||{},g.value.prev=s,g.value.next=s+l<t,t-s<l&&(F.value=t-l)):(g.value=!1,s>0&&(F.value=0))},I=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=A;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),M()},M=()=>{K.value&&(_.value=!0)},O=()=>_.value=!1;return d(n,(e=>{"hidden"===e?K.value=!1:"visible"===e&&setTimeout((()=>K.value=!0),50)})),d(p,(e=>{e?setTimeout((()=>K.value=!0),50):K.value=!1})),b(h,H),w((()=>setTimeout((()=>q()),0))),T((()=>H())),a({scrollToActiveTab:q,removeFocus:O}),d((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=g.value?[k("span",{class:[o.e("nav-prev"),o.is("disabled",!g.value.prev)],onClick:V},[k(B,null,{default:()=>[k(S,null,null)]})]),k("span",{class:[o.e("nav-next"),o.is("disabled",!g.value.next)],onClick:j},[k(B,null,{default:()=>[k(E,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const c=a.uid,d=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:"".concat(l),b=!d&&(a.isClosable||e.editable);a.index="".concat(l);const p=b?k(B,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[k(R,null,null)]}):null,m=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,f=!d&&a.active?0:-1;return k("div",{ref:"tab-".concat(c),class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",d),o.is("closable",b),o.is("focus",_.value)],id:"tab-".concat(v),key:"tab-".concat(c),"aria-controls":"pane-".concat(v),role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>M(),onBlur:()=>O(),onClick:e=>{O(),t("tabClick",a,v,e)},onKeydown:e=>{!b||e.code!==A.delete&&e.code!==A.backspace||t("tabRemove",a,e)}},[m,p])}));return k("div",{ref:h,class:[o.e("nav-wrap"),o.is("scrollable",!!g.value),o.is(s.props.tabPosition)]},[a,k("div",{class:o.e("nav-scroll"),ref:m},[k("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:f,style:z.value,role:"tablist",onKeydown:I},[e.type?null:k(ae,{ref:y,tabs:[...e.panes]},null),l])])])}}}),oe=l({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),ne=e=>j(e)||q(e),re=n({name:"ElTabs",props:oe,emits:{[z]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const n=u("tabs"),{children:r,addChild:i,removeChild:b}=U(C(),"ElTabPane"),p=c(),m=c(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),f=async(t,l=!1)=>{var s,o,n;if(m.value!==t&&!V(t))try{!1!==await(null==(s=e.beforeLeave)?void 0:s.call(e,t,m.value))&&(m.value=t,l&&(a(z,t),a("tabChange",t)),null==(n=null==(o=p.value)?void 0:o.removeFocus)||n.call(o))}catch(r){}},h=(e,t,l)=>{e.props.disabled||(f(t,!0),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||V(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return F({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},N((()=>!!e.activeName))),d((()=>e.activeName),(e=>f(e))),d((()=>e.modelValue),(e=>f(e))),d(m,(async()=>{var e;await v(),null==(e=p.value)||e.scrollToActiveTab()})),_(W,{props:e,currentName:m,registerPane:i,unregisterPane:b}),l({currentName:m}),()=>{const a=t.addIcon,l=e.editable||e.addable?k("span",{class:n.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===A.enter&&g()}},[a?K(t,"addIcon"):k(B,{class:n.is("icon-plus")},{default:()=>[k(L,null,null)]})]):null,s=k("div",{class:[n.e("header"),n.is(e.tabPosition)]},[l,k(se,{ref:p,currentName:m.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),o=k("div",{class:n.e("content")},[K(t,"default")]);return k("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[s,o]:[o,s]])}}}),ie=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],ce="ElTabPane",de=n({name:ce});var ve=g(n({...de,props:ie,setup(e){const a=e,t=C(),l=H(),s=r(W);s||i(ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=u("tab-pane"),n=c(),v=N((()=>a.closable||s.props.closable)),b=I((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),y=c(b.value),g=N((()=>{var e;return null!=(e=a.name)?e:n.value})),x=I((()=>!a.lazy||y.value||b.value));d(b,(e=>{e&&(y.value=!0)}));const P=M({uid:t.uid,slots:l,props:a,paneName:g,active:b,index:n,isClosable:v});return w((()=>{s.registerPane(P)})),O((()=>{s.unregisterPane(P.uid)})),(e,a)=>h(x)?X((p(),m("div",{key:0,id:"pane-".concat(h(g)),class:f(h(o).b()),role:"tabpanel","aria-hidden":!h(b),"aria-labelledby":"tab-".concat(h(g))},[K(e.$slots,"default")],10,ue)),[[Y,h(b)]]):$("v-if",!0)}}),[["__file","tab-pane.vue"]]);const be=D(re,{TabPane:ve}),pe=G(ve);export{pe as E,be as a};
