/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{C as e,D as o,a3 as l,ba as a,aL as n,bu as t,R as s,a as u,c4 as c,c5 as r,F as d,T as i,c6 as p,$ as f,P as y,O as v,a8 as m,au as C,b6 as b}from"./index-0efc4537.js";import{i as g}from"./isUndefined-d281c39a.js";const B=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),D={close:()=>!0},S=e({...B,appendToBody:Boolean,appendTo:{type:l(String),default:"body"},beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),F={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},x=(e,o)=>{var l;const n=m().emit,{nextZIndex:B}=t();let D="";const S=s(),F=s(),x=u(!1),I=u(!1),O=u(!1),h=u(null!=(l=e.zIndex)?l:B());let A,k;const w=c("namespace",r),L=d((()=>{const o={},l="--".concat(w.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=i(e.width))),o})),z=d((()=>e.alignCenter?{display:"flex"}:{}));function N(){null==k||k(),null==A||A(),e.openDelay&&e.openDelay>0?({stop:A}=C((()=>j()),e.openDelay)):j()}function P(){null==A||A(),null==k||k(),e.closeDelay&&e.closeDelay>0?({stop:k}=C((()=>E()),e.closeDelay)):E()}function T(){e.beforeClose?e.beforeClose((function(e){e||(I.value=!0,x.value=!1)})):P()}function j(){b&&(x.value=!0)}function E(){x.value=!1}return e.lockScroll&&p(x),f((()=>e.modelValue),(l=>{l?(I.value=!1,N(),O.value=!0,h.value=g(e.zIndex)?B():h.value++,y((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):x.value&&P()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(D=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=D)})),v((()=>{e.modelValue&&(x.value=!0,O.value=!0,N())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(O.value=!1)},beforeLeave:function(){n("close")},handleClose:T,onModalClick:function(){e.closeOnClickModal&&T()},close:P,doClose:E,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&T()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:S,bodyId:F,closed:I,style:L,overlayDialogStyle:z,rendered:O,visible:x,zIndex:h}};export{F as a,B as b,D as c,S as d,x as u};
