/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{C as e,D as a,x as l,y as t,a as s,z as o,O as n,o as r,c as i,B as u,n as d,G as c,_ as p,a3 as m,a7 as f,b as v,h,w as y,I as b,J as g,t as x,a8 as _,K as k,L as j,a9 as w,F as I,H as C,u as E,m as M,a4 as S,r as $,$ as A,a0 as N,aa as O,d as V,g as B,M as L,N as q,e as z,E as U,ab as F,ac as H,P as K,W as D,a2 as R,ad as W,a1 as G,a5 as P,ae as T,a6 as J}from"./index-0efc4537.js";/* empty css                *//* empty css               */import{E as X,a as Q,b as Y}from"./dropdown-item-9e4a6efb.js";/* empty css               */import"./scrollbar-ab08f6f1.js";/* empty css             */import{a as Z,E as ee}from"./col-cb4ff1b9.js";import ae from"./index-2714e6b3.js";import le from"./history-2e62de1c.js";import te from"./search-012dd8bb.js";import se from"./bottomInfo-fc0137bf.js";import{C as oe}from"./index-e516eee5.js";import{E as ne}from"./dialog-2a3abe36.js";import"./overlay-73152bda.js";import re from"./index-812c2e94.js";import"./index-70d4cce8.js";import"./isUndefined-d281c39a.js";import"./dropdown-b49e545a.js";import"./castArray-f160d2a3.js";import"./refs-04938f0e.js";/* empty css                */import"./index-5fcc90cf.js";import"./menuItem-ccb5783a.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-5d3946cc.js";import"./index-55d5e59b.js";import"./index-4b62258d.js";import"./asyncSubmenu-01fca34f.js";import"./tab-pane-5f57c34e.js";import"./strings-a95e1d29.js";import"./index-848d4007.js";import"./image-viewer-8e1efd47.js";import"./debounce-994b39f4.js";import"./drawer-25d6170f.js";const ie=Symbol("breadcrumbKey"),ue=e({separator:{type:String,default:"/"},separatorIcon:{type:a}}),de=l({name:"ElBreadcrumb"});var ce=p(l({...de,props:ue,setup(e){const a=e,l=t("breadcrumb"),p=s();return o(ie,a),n((()=>{const e=p.value.querySelectorAll(".".concat(l.e("item")));e.length&&e[e.length-1].setAttribute("aria-current","page")})),(e,a)=>(r(),i("div",{ref_key:"breadcrumb",ref:p,class:d(c(l).b()),"aria-label":"Breadcrumb",role:"navigation"},[u(e.$slots,"default")],2))}}),[["__file","breadcrumb.vue"]]);const pe=e({to:{type:m([String,Object]),default:""},replace:{type:Boolean,default:!1}}),me=l({name:"ElBreadcrumbItem"});var fe=p(l({...me,props:pe,setup(e){const a=e,l=_(),o=f(ie,void 0),n=t("breadcrumb"),p=l.appContext.config.globalProperties.$router,m=s(),k=()=>{a.to&&p&&(a.replace?p.replace(a.to):p.push(a.to))};return(e,a)=>{var l,t;return r(),i("span",{class:d(c(n).e("item"))},[v("span",{ref_key:"link",ref:m,class:d([c(n).e("inner"),c(n).is("link",!!e.to)]),role:"link",onClick:k},[u(e.$slots,"default")],2),(null==(l=c(o))?void 0:l.separatorIcon)?(r(),h(c(g),{key:0,class:d(c(n).e("separator"))},{default:y((()=>[(r(),h(b(c(o).separatorIcon)))])),_:1},8,["class"])):(r(),i("span",{key:1,class:d(c(n).e("separator")),role:"presentation"},x(null==(t=c(o))?void 0:t.separator),3))],2)}}}),[["__file","breadcrumb-item.vue"]]);const ve=k(ce,{BreadcrumbItem:fe}),he=j(fe),ye=l({name:"ElContainer"});var be=p(l({...ye,props:{direction:{type:String}},setup(e){const a=e,l=w(),s=t("container"),o=I((()=>{if("vertical"===a.direction)return!0;if("horizontal"===a.direction)return!1;if(l&&l.default){return l.default().some((e=>{const a=e.type.name;return"ElHeader"===a||"ElFooter"===a}))}return!1}));return(e,a)=>(r(),i("section",{class:d([c(s).b(),c(s).is("vertical",c(o))])},[u(e.$slots,"default")],2))}}),[["__file","container.vue"]]);const ge=l({name:"ElAside"});var xe=p(l({...ge,props:{width:{type:String,default:null}},setup(e){const a=e,l=t("aside"),s=I((()=>a.width?l.cssVarBlock({width:a.width}):{}));return(e,a)=>(r(),i("aside",{class:d(c(l).b()),style:C(c(s))},[u(e.$slots,"default")],6))}}),[["__file","aside.vue"]]);const _e=l({name:"ElFooter"});var ke=p(l({..._e,props:{height:{type:String,default:null}},setup(e){const a=e,l=t("footer"),s=I((()=>a.height?l.cssVarBlock({height:a.height}):{}));return(e,a)=>(r(),i("footer",{class:d(c(l).b()),style:C(c(s))},[u(e.$slots,"default")],6))}}),[["__file","footer.vue"]]);const je=l({name:"ElHeader"});var we=p(l({...je,props:{height:{type:String,default:null}},setup(e){const a=e,l=t("header"),s=I((()=>a.height?l.cssVarBlock({height:a.height}):{}));return(e,a)=>(r(),i("header",{class:d(c(l).b()),style:C(c(s))},[u(e.$slots,"default")],6))}}),[["__file","header.vue"]]);const Ie=l({name:"ElMain"});var Ce=p(l({...Ie,setup(e){const a=t("main");return(e,l)=>(r(),i("main",{class:d(c(a).b())},[u(e.$slots,"default")],2))}}),[["__file","main.vue"]]);const Ee=k(be,{Aside:xe,Footer:ke,Header:we,Main:Ce}),Me=j(xe);j(ke);const Se=j(we),$e=j(Ce),Ae={key:0,class:"quick-title"},Ne=["onClick"],Oe={class:"dialog-footer"},Ve=Object.assign({name:"CommandMenu"},{__name:"index",setup(e,{expose:a}){const l=E(),t=E(),o=M(),n=S(),u=s(!1),d=s(""),c=$([]),p=e=>{const a=[];return e.forEach((e=>{e.children&&e.children.length>0?a.push(...p(e.children)):e.meta.title&&e.meta.title.indexOf(d.value)>-1&&a.push({label:e.meta.title,func:()=>b(e)})})),a},m=()=>{const e={label:"跳转",children:[]},a=p(n.asyncRouters[0].children);e.children.push(...a),c.push(e)},f=()=>{const e={label:"操作",children:[]},a=[{label:"亮色主题",func:()=>g("light")},{label:"暗色主题",func:()=>g("dark")},{label:"退出登录",func:()=>o.LoginOut()}];e.children.push(...a.filter((e=>e.label.indexOf(d.value)>-1))),c.push(e)};m(),f();const b=e=>{var a,s;const o=e.name,r={},i={};(null==(a=n.routeMap[o])?void 0:a.parameters)&&(null==(s=n.routeMap[o])||s.parameters.forEach((e=>{"query"===e.type?r[e.key]=e.value:i[e.key]=e.value}))),o!==t.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):l.push({name:o,query:r,params:i}),u.value=!1)},g=e=>{null!==e?o.changeSideMode(e):o.changeSideMode("dark")},_=()=>{u.value=!1};return a({open:()=>{u.value=!0}}),A(d,(()=>{c.length=0,m(),f()})),(e,a)=>{const l=U,t=ne;return r(),h(t,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=e=>u.value=e),width:"30%",class:"overlay","show-close":!1},{header:y((()=>[N(v("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[O,d.value]])])),footer:y((()=>[v("span",Oe,[V(l,{onClick:_},{default:y((()=>[B("关闭")])),_:1})])])),default:y((()=>[(r(!0),i(L,null,q(c,((e,a)=>(r(),i("div",{key:a},[e.children.length?(r(),i("div",Ae,x(e.label),1)):z("",!0),(r(!0),i(L,null,q(e.children,((e,l)=>(r(),i("div",{key:a+"-"+l,class:"quick-item",onClick:e.func},x(e.label),9,Ne)))),128))])))),128))])),_:1},8,["modelValue"])}}}),Be=["src"],Le={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},qe={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},ze={class:"mr-1.5 flex items-center"},Ue={class:"flex justify-center items-center h-full w-full"},Fe={class:"cursor-pointer flex justify-center items-center"},He={class:"font-bold"},Ke=v("div",null,"指令菜单",-1),De={style:{"margin-left":"8px"}},Re={class:"button"},We=v("span",{class:"button"},"K",-1),Ge={"element-loading-text":"正在加载中"},Pe=Object.assign({name:"Layout"},{__name:"index",setup(e){const a=E(),l=F(),t=S(),o=s(!1),u=s(!0),p=s(!1),m=s("");s(!1);const f=()=>{"WIN"===window.localStorage.getItem("osType")?m.value="Ctrl":m.value="⌘";window.addEventListener("keydown",(e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),k())}));const e=document.body.clientWidth;e<1e3?(p.value=!0,u.value=!1,o.value=!0):e>=1e3&&e<1200?(p.value=!1,u.value=!1,o.value=!0):(p.value=!1,u.value=!0,o.value=!1)};f();const _=s(),k=()=>{_.value.open()},j=s(!1);n((()=>{H.emit("collapse",o.value),H.emit("mobile",p.value),H.on("reload",ie),H.on("showLoading",(()=>{j.value=!0})),H.on("closeLoading",(()=>{j.value=!1})),window.onresize=()=>(f(),H.emit("collapse",o.value),void H.emit("mobile",p.value)),w.loadingInstance&&w.loadingInstance.close()}));const w=M(),$=I((()=>"dark"===w.sideMode?"#fff":"light"===w.sideMode?"#191a23":w.baseColor)),A=I((()=>"dark"===w.sideMode?"#191a23":"light"===w.sideMode?"#fff":w.sideMode)),O=I((()=>l.meta.matched)),U=s(!0);let ne=null;const ie=async()=>{ne&&window.clearTimeout(ne),ne=window.setTimeout((async()=>{if(l.meta.keepAlive)U.value=!1,await K(),U.value=!0;else{const e=l.meta.title;a.push({name:"Reload",params:{title:e}})}}),400)},ue=s(!1),de=()=>{o.value=!o.value,u.value=!o.value,ue.value=!o.value,H.emit("collapse",o.value)},ce=()=>{a.push({name:"person"})};return(e,a)=>{const s=Z,n=Me,f=ee,I=he,E=ve,M=D("arrow-down"),S=g,F=X,H=Q,K=Y,ne=Se,ie=D("router-view"),pe=$e,me=Ee,fe=J;return r(),h(me,{class:"layout-cont"},{default:y((()=>[V(me,{class:d([u.value?"openside":"hideside",p.value?"mobile":""])},{default:y((()=>[V(s,{class:d([ue.value&&p.value?"bg-black opacity-30 w-full h-full absolute top-0 left-0 z-[1001]":""]),onClick:a[0]||(a[0]=e=>(ue.value=!ue.value,u.value=!!o.value,void de()))},null,8,["class"]),V(n,{class:"main-cont gva-aside",style:C({width:p.value?o.value?"0px":"220px":o.value?"54px":"220px"})},{default:y((()=>[v("div",{class:"min-h-[60px] text-center transition-all duration-300 flex items-center justify-center gap-2",style:C({background:A.value})},[v("img",{alt:"",class:"w-9 h-9 p-1",src:e.$GIN_VUE_ADMIN.appLogo},null,8,Be),u.value?(r(),i("div",{key:0,class:"inline-flex text-white font-bold text-2xl",style:C({color:$.value})},x(e.$GIN_VUE_ADMIN.appName),5)):z("",!0)],4),V(ae,{class:"aside"})])),_:1},8,["style"]),V(pe,{class:"main-cont main-right"},{default:y((()=>[V(R,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:y((()=>[v("div",{style:C({width:"calc(100% - ".concat(p.value?"0px":o.value?"54px":"220px",")")}),class:"fixed top-0 box-border z-50"},[V(s,null,{default:y((()=>[V(f,null,{default:y((()=>[V(ne,{class:"header-cont"},{default:y((()=>[V(s,{class:"p-0 h-full"},{default:y((()=>[V(f,{xs:2,lg:1,md:1,sm:1,xl:1,class:"z-50 flex items-center pl-3"},{default:y((()=>[v("div",{class:"text-black cursor-pointer text-lg leading-5",onClick:de},[o.value?(r(),i("div",Le)):(r(),i("div",qe))])])),_:1}),V(f,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1,class:"flex items-center"},{default:y((()=>[N(V(E,{class:"breadcrumb"},{default:y((()=>[(r(!0),i(L,null,q(O.value.slice(1,O.value.length),(e=>(r(),h(I,{key:e.path},{default:y((()=>[B(x(c(W)(e.meta.title,c(l))),1)])),_:2},1024)))),128))])),_:1},512),[[G,!p.value]])])),_:1}),V(f,{xs:12,lg:9,md:9,sm:14,xl:9,class:"flex items-center justify-end"},{default:y((()=>[v("div",ze,[V(te),V(K,null,{dropdown:y((()=>[V(H,null,{default:y((()=>[V(F,null,{default:y((()=>[v("span",He," 当前角色："+x(c(w).userInfo.authority.authorityName),1)])),_:1}),c(w).userInfo.authorities?(r(!0),i(L,{key:0},q(c(w).userInfo.authorities.filter((e=>e.authorityId!==c(w).userInfo.authorityId)),(e=>(r(),h(F,{key:e.authorityId,onClick:a=>(async e=>{0===(await T({authorityId:e})).code&&(window.sessionStorage.setItem("needCloseAll","true"),window.location.reload())})(e.authorityId)},{default:y((()=>[v("span",null," 切换为："+x(e.authorityName),1)])),_:2},1032,["onClick"])))),128)):z("",!0),V(F,{icon:"avatar"},{default:y((()=>[v("div",{class:"command-box",style:{display:"flex"},onClick:k},[Ke,v("div",De,[v("span",Re,x(m.value),1),B(" + "),We])])])),_:1}),V(F,{icon:"avatar",onClick:ce},{default:y((()=>[B("个人信息")])),_:1}),V(F,{icon:"reading-lamp",onClick:c(w).LoginOut},{default:y((()=>[B("登 出")])),_:1},8,["onClick"])])),_:1})])),default:y((()=>[v("div",Ue,[v("span",Fe,[V(oe),N(v("span",{style:{"margin-left":"5px"}},x(c(w).userInfo.nickName),513),[[G,!p.value]]),V(S,null,{default:y((()=>[V(M)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),V(le,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),U.value?(r(),h(ie,{key:0,class:"admin-box"},{default:y((({Component:e})=>[N((r(),i("div",Ge,[V(R,{mode:"out-in",name:"el-fade-in-linear"},{default:y((()=>[(r(),h(P,{include:c(t).keepAliveRouters},[(r(),h(b(e)))],1032,["include"]))])),_:2},1024)])),[[fe,j.value]])])),_:1})):z("",!0),V(se),V(re),V(Ve,{ref_key:"command",ref:_},null,512)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{Pe as default};
