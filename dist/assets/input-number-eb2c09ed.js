/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{aQ as e,C as a,bd as l,b8 as t,bc as n,cT as r,aB as u,ba as s,x as i,S as o,y as d,a as c,r as m,b3 as b,F as p,b7 as v,aM as f,b_ as N,$ as y,O as V,aS as h,o as I,c as x,a0 as g,G as S,n as E,q as w,d as F,w as A,h as _,aq as k,cV as B,J as K,e as T,bW as M,aE as O,af as C,l as z,_ as P,ap as q,at as G,aN as L,K as W}from"./index-0efc4537.js";const Y=100,j=600,D={beforeMount(a,l){const t=l.value,{interval:n=Y,delay:r=j}=e(t)?{}:t;let u,s;const i=()=>e(t)?t():t.handler(),o=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(o(),i(),document.addEventListener("mouseup",(()=>o()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{i()}),n)}),r))}))}},J=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:l,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||t(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt("".concat(e),10)},validateEvent:{type:Boolean,default:!0}}),Q={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[r]:e=>t(e)||u(e),[s]:e=>t(e)||u(e)},$=["aria-label","onKeydown"],H=["aria-label","onKeydown"],R=i({name:"ElInputNumber"});const U=W(P(i({...R,props:J,emits:Q,setup(e,{expose:a,emit:l}){const i=e,{t:P}=o(),W=d("input-number"),Y=c(),j=m({currentValue:i.modelValue,userInput:null}),{formItem:J}=b(),Q=p((()=>t(i.modelValue)&&i.modelValue<=i.min)),R=p((()=>t(i.modelValue)&&i.modelValue>=i.max)),U=p((()=>{const e=te(i.step);return v(i.precision)?Math.max(te(i.modelValue),e):(i.precision,i.precision)})),X=p((()=>i.controls&&"right"===i.controlsPosition)),Z=f(),ee=N(),ae=p((()=>{if(null!==j.userInput)return j.userInput;let e=j.currentValue;if(u(e))return"";if(t(e)){if(Number.isNaN(e))return"";v(i.precision)||(e=e.toFixed(i.precision))}return e})),le=(e,a)=>{if(v(a)&&(a=U.value),0===a)return Math.round(e);let l=String(e);const t=l.indexOf(".");if(-1===t)return e;if(!l.replace(".","").split("")[t+a])return e;const n=l.length;return"5"===l.charAt(n-1)&&(l="".concat(l.slice(0,Math.max(0,n-1)),"6")),Number.parseFloat(Number(l).toFixed(a))},te=e=>{if(u(e))return 0;const a=e.toString(),l=a.indexOf(".");let t=0;return-1!==l&&(t=a.length-l-1),t},ne=(e,a=1)=>t(e)?le(e+i.step*a):j.currentValue,re=()=>{if(i.readonly||ee.value||R.value)return;const e=Number(ae.value)||0,a=ne(e);ie(a),l(r,j.currentValue),be()},ue=()=>{if(i.readonly||ee.value||Q.value)return;const e=Number(ae.value)||0,a=ne(e,-1);ie(a),l(r,j.currentValue),be()},se=(e,a)=>{const{max:t,min:n,step:r,precision:o,stepStrictly:d,valueOnClear:c}=i;t<n&&q("InputNumber","min should not be greater than max.");let m=Number(e);if(u(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=G(c)?{min:n,max:t}[c]:c}return d&&(m=le(Math.round(m/r)*r,o)),v(o)||(m=le(m,o)),(m>t||m<n)&&(m=m>t?t:n,a&&l(s,m)),m},ie=(e,a=!0)=>{var t;const r=j.currentValue,u=se(e);a?r!==u&&(j.userInput=null,l(s,u),l(n,u,r),i.validateEvent&&(null==(t=null==J?void 0:J.validate)||t.call(J,"change").catch((e=>L()))),j.currentValue=u):l(s,u)},oe=e=>{j.userInput=e;const a=""===e?null:Number(e);l(r,a),ie(a,!1)},de=e=>{const a=""!==e?Number(e):"";(t(a)&&!Number.isNaN(a)||""===e)&&ie(a),be(),j.userInput=null},ce=e=>{l("focus",e)},me=e=>{var a;j.userInput=null,l("blur",e),i.validateEvent&&(null==(a=null==J?void 0:J.validate)||a.call(J,"blur").catch((e=>L())))},be=()=>{j.currentValue!==i.modelValue&&(j.currentValue=i.modelValue)};return y((()=>i.modelValue),((e,a)=>{const l=se(e,!0);null===j.userInput&&l!==a&&(j.currentValue=l)}),{immediate:!0}),V((()=>{var e;const{min:a,max:n,modelValue:r}=i,u=null==(e=Y.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(n)?u.setAttribute("aria-valuemax",String(n)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",j.currentValue||0===j.currentValue?String(j.currentValue):""),u.setAttribute("aria-disabled",String(ee.value)),!t(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),l(s,e)}})),h((()=>{var e,a;const l=null==(e=Y.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow","".concat(null!=(a=j.currentValue)?a:""))})),a({focus:()=>{var e,a;null==(a=null==(e=Y.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=Y.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(I(),x("div",{class:E([S(W).b(),S(W).m(S(Z)),S(W).is("disabled",S(ee)),S(W).is("without-controls",!e.controls),S(W).is("controls-right",S(X))]),onDragstart:a[1]||(a[1]=C((()=>{}),["prevent"]))},[e.controls?g((I(),x("span",{key:0,role:"button","aria-label":S(P)("el.inputNumber.decrease"),class:E([S(W).e("decrease"),S(W).is("disabled",S(Q))]),onKeydown:w(ue,["enter"])},[F(S(K),null,{default:A((()=>[S(X)?(I(),_(S(k),{key:0})):(I(),_(S(B),{key:1}))])),_:1})],42,$)),[[S(D),ue]]):T("v-if",!0),e.controls?g((I(),x("span",{key:1,role:"button","aria-label":S(P)("el.inputNumber.increase"),class:E([S(W).e("increase"),S(W).is("disabled",S(R))]),onKeydown:w(re,["enter"])},[F(S(K),null,{default:A((()=>[S(X)?(I(),_(S(M),{key:0})):(I(),_(S(O),{key:1}))])),_:1})],42,H)),[[S(D),re]]):T("v-if",!0),F(S(z),{id:e.id,ref_key:"input",ref:Y,type:"number",step:e.step,"model-value":S(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:S(ee),size:S(Z),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=C((()=>{}),["prevent"])),onKeydown:[w(C(re,["prevent"]),["up"]),w(C(ue,["prevent"]),["down"])],onBlur:me,onFocus:ce,onInput:oe,onChange:de},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","input-number.vue"]]));export{U as E};
