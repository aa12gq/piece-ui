/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{a as e,o as a,h as l,w as t,d as i,b as o,g as r,c as s,M as u,N as n,G as d,t as m,U as p,k as c,l as v,E as g,J as h,$ as y,e as f,d1 as b,d2 as w,d3 as j,d4 as I,d5 as k,P as V,d6 as _}from"./index-0efc4537.js";import{E as C}from"./dialog-2a3abe36.js";import"./overlay-73152bda.js";import{a as x,E as U}from"./form-150c0e00.js";/* empty css                  *//* empty css              */import{E as N}from"./pagination-956e76f8.js";import"./tag-c095386a.js";import"./select-59043028.js";import"./scrollbar-ab08f6f1.js";/* empty css               */import{E as z,a as S}from"./table-column-ce6481a3.js";import"./checkbox-aefa5e2d.js";/* empty css                */import{E}from"./popover-a0fd8f33.js";import{E as D}from"./switch-a6225e04.js";import{E as O}from"./cascader-panel-8d54ab04.js";import"./radio-86f43203.js";/* empty css               */import{g as J}from"./authority-0dff6ed3.js";import{C as T}from"./index-e516eee5.js";import{E as q}from"./drawer-25d6170f.js";import{E as B}from"./image-viewer-8e1efd47.js";/* empty css             */import{_ as A,U as F,a as P,g as K,e as M}from"./common-cedd4c68.js";import{W as R}from"./warningBar-5328b630.js";import"./refs-04938f0e.js";import"./isUndefined-d281c39a.js";import"./castArray-f160d2a3.js";import"./_baseClone-9af99e91.js";import"./_Uint8Array-4999d338.js";import"./_initCloneObject-b273bb42.js";import"./isEqual-aa7e7ef2.js";import"./hasIn-deea815f.js";import"./index-70d4cce8.js";import"./index-c5b62cef.js";import"./strings-a95e1d29.js";import"./debounce-994b39f4.js";import"./index-4b62258d.js";import"./dropdown-b49e545a.js";import"./rand-099990c4.js";import"./cloneDeep-585751f1.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./upload-276f24ce.js";import"./progress-6c49b316.js";const $={class:"gva-btn-list"},G={class:"media"},H={class:"header-img-box-list"},L={class:"header-img-box-list"},Q=o("picture",null,null,-1),W=["onClick"],Z={__name:"index",props:{target:{type:Object,default:null},targetKey:{type:String,default:""}},emits:["enterImg"],setup(y,{expose:f,emit:b}){const w=e(""),j=e(""),I=e({}),k=e(1),V=e(0),_=e(20),C=e=>{_.value=e,O()},z=e=>{k.value=e,O()},S=b,E=e(!1),D=e([]),O=async()=>{const e=await K({page:k.value,pageSize:_.value,...I.value});0===e.code&&(D.value=e.data.list,V.value=e.data.total,k.value=e.data.page,_.value=e.data.pageSize,E.value=!0)};return f({open:O}),(e,f)=>{const b=v,J=x,T=g,K=U,Z=h,X=B,Y=N,ee=q;return a(),l(ee,{modelValue:E.value,"onUpdate:modelValue":f[3]||(f[3]=e=>E.value=e),title:"媒体库",size:"650px"},{default:t((()=>[i(R,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),o("div",$,[i(A,{imageCommon:j.value,"onUpdate:imageCommon":f[0]||(f[0]=e=>j.value=e),class:"upload-btn-media-library",onOnSuccess:O},null,8,["imageCommon"]),i(F,{imageUrl:w.value,"onUpdate:imageUrl":f[1]||(f[1]=e=>w.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn-media-library",onOnSuccess:O},null,8,["imageUrl"]),i(K,{ref:"searchForm",inline:!0,model:I.value},{default:t((()=>[i(J,{label:""},{default:t((()=>[i(b,{modelValue:I.value.keyword,"onUpdate:modelValue":f[2]||(f[2]=e=>I.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),i(J,null,{default:t((()=>[i(T,{type:"primary",icon:"search",onClick:O},{default:t((()=>[r("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),o("div",G,[(a(!0),s(u,null,n(D.value,((e,r)=>(a(),s("div",{key:r,class:"media-box"},[o("div",H,[(a(),l(X,{key:r,src:d(P)(e.url),onClick:a=>{return l=e.url,t=y.target,i=y.targetKey,t&&i&&(t[i]=l),S("enterImg",l),void(E.value=!1);var l,t,i}},{error:t((()=>[o("div",L,[i(Z,null,{default:t((()=>[Q])),_:1})])])),_:2},1032,["src","onClick"]))]),o("div",{class:"img-title",onClick:a=>(async e=>{p.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await M(e)).code&&(c({type:"success",message:"编辑成功!"}),O())})).catch((()=>{c({type:"info",message:"取消修改"})}))})(e)},m(e.name),9,W)])))),128))]),i(Y,{"current-page":k.value,"page-size":_.value,total:V.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:z,onSizeChange:C},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])}}},X={class:"gva-table-box"},Y={class:"gva-btn-list"},ee=o("p",null,"确定要删除此用户吗",-1),ae={style:{"text-align":"right","margin-top":"8px"}},le={class:"gva-pagination"},te={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},ie=["src"],oe={key:1,class:"header-img-box"},re={class:"dialog-footer"},se=Object.assign({name:"User"},{__name:"user",setup(u){const n=e("/api/"),d=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};d(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},m=e(1),h=e(0),q=e(10),B=e([]),A=e=>{q.value=e,P()},F=e=>{m.value=e,P()},P=async()=>{const e=await b({page:m.value,pageSize:q.value});0===e.code&&(B.value=e.data.list,h.value=e.data.total,m.value=e.data.page,q.value=e.data.pageSize)};y((()=>B.value),(()=>{K()}));(async()=>{P();const e=await J({page:1,pageSize:999});H(e.data.list)})();const K=()=>{B.value&&B.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},M=e(null),$=()=>{M.value.open()},G=e([]),H=e=>{G.value=[],d(e,G.value)},L=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),Q=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),W=e(null),se=async()=>{L.value.authorityId=L.value.authorityIds[0],W.value.validate((async e=>{if(e){const e={...L.value};if("add"===de.value){0===(await I(e)).code&&(c({type:"success",message:"创建成功"}),await P(),ne())}if("edit"===de.value){0===(await k(e)).code&&(c({type:"success",message:"编辑成功"}),await P(),ne())}}}))},ue=e(!1),ne=()=>{W.value.resetFields(),L.value.headerImg="",L.value.authorityIds=[],ue.value=!1},de=e("add"),me=()=>{de.value="add",ue.value=!0},pe={},ce=async(e,a,l)=>{if(a)return void(l||(pe[e.ID]=[...e.authorityIds]));await V();0===(await _({ID:e.ID,authorityIds:e.authorityIds})).code?c({type:"success",message:"角色设置成功"}):l?e.authorityIds=[l,...e.authorityIds]:(e.authorityIds=[...pe[e.ID]],delete pe[e.ID])};return(e,u)=>{const d=g,y=z,b=O,I=D,_=E,J=S,K=N,H=v,pe=x,ve=U,ge=C;return a(),s("div",null,[i(R,{title:"注：右上角头像下拉可切换角色"}),o("div",X,[o("div",Y,[i(d,{type:"primary",icon:"plus",onClick:me},{default:t((()=>[r("新增用户")])),_:1})]),i(J,{data:B.value,"row-key":"ID"},{default:t((()=>[i(y,{align:"left",label:"头像","min-width":"75"},{default:t((e=>[i(T,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),i(y,{align:"left",label:"ID","min-width":"50",prop:"ID"}),i(y,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),i(y,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),i(y,{align:"left",label:"并发数限制","min-width":"150",prop:"concurrencyLimit"}),i(y,{align:"left",label:"当前并发数","min-width":"150",prop:"currentConcurrency"}),i(y,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),i(y,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),i(y,{align:"left",label:"用户角色","min-width":"200"},{default:t((e=>[i(b,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:G.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ce(e.row,a,0)},onRemoveTag:a=>{ce(e.row,!1,a)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),i(y,{align:"left",label:"启用","min-width":"150"},{default:t((e=>[i(I,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{(async e=>{L.value=JSON.parse(JSON.stringify(e)),await V();const a={...L.value};0===(await k(a)).code&&(c({type:"success",message:"".concat(2===a.enable?"禁用":"启用","成功")}),await P(),L.value.headerImg="",L.value.authorityIds=[])})(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(y,{label:"操作","min-width":"250",fixed:"right"},{default:t((e=>[i(_,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:t((()=>[i(d,{type:"primary",link:"",icon:"delete"},{default:t((()=>[r("删除")])),_:1})])),default:t((()=>[ee,o("div",ae,[i(d,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:t((()=>[r("取消")])),_:2},1032,["onClick"]),i(d,{type:"primary",onClick:a=>(async e=>{0===(await j({id:e.ID})).code&&(c.success("删除成功"),e.visible=!1,await P())})(e.row)},{default:t((()=>[r("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"]),i(d,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,de.value="edit",L.value=JSON.parse(JSON.stringify(l)),void(ue.value=!0);var l}},{default:t((()=>[r("编辑")])),_:2},1032,["onClick"]),i(d,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void p.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await w({ID:l.ID});0===e.code?c({type:"success",message:e.msg}):c({type:"error",message:e.msg})}));var l}},{default:t((()=>[r("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o("div",le,[i(K,{"current-page":m.value,"page-size":q.value,"page-sizes":[10,30,50,100],total:h.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:F,onSizeChange:A},null,8,["current-page","page-size","total"])])]),i(ge,{modelValue:ue.value,"onUpdate:modelValue":u[7]||(u[7]=e=>ue.value=e),title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:t((()=>[o("div",re,[i(d,{onClick:ne},{default:t((()=>[r("取 消")])),_:1}),i(d,{type:"primary",onClick:se},{default:t((()=>[r("确 定")])),_:1})])])),default:t((()=>[o("div",te,[i(ve,{ref_key:"userForm",ref:W,rules:Q.value,model:L.value,"label-width":"80px"},{default:t((()=>["add"===de.value?(a(),l(pe,{key:0,label:"用户名",prop:"userName"},{default:t((()=>[i(H,{modelValue:L.value.userName,"onUpdate:modelValue":u[0]||(u[0]=e=>L.value.userName=e)},null,8,["modelValue"])])),_:1})):f("",!0),"add"===de.value?(a(),l(pe,{key:1,label:"密码",prop:"password"},{default:t((()=>[i(H,{modelValue:L.value.password,"onUpdate:modelValue":u[1]||(u[1]=e=>L.value.password=e)},null,8,["modelValue"])])),_:1})):f("",!0),i(pe,{label:"昵称",prop:"nickName"},{default:t((()=>[i(H,{modelValue:L.value.nickName,"onUpdate:modelValue":u[2]||(u[2]=e=>L.value.nickName=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"手机号",prop:"phone"},{default:t((()=>[i(H,{modelValue:L.value.phone,"onUpdate:modelValue":u[3]||(u[3]=e=>L.value.phone=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"邮箱",prop:"email"},{default:t((()=>[i(H,{modelValue:L.value.email,"onUpdate:modelValue":u[4]||(u[4]=e=>L.value.email=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"用户角色",prop:"authorityId"},{default:t((()=>[i(b,{modelValue:L.value.authorityIds,"onUpdate:modelValue":u[5]||(u[5]=e=>L.value.authorityIds=e),style:{width:"100%"},options:G.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),i(pe,{label:"启用",prop:"disabled"},{default:t((()=>[i(I,{modelValue:L.value.enable,"onUpdate:modelValue":u[6]||(u[6]=e=>L.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),i(pe,{label:"头像","label-width":"80px"},{default:t((()=>[o("div",{style:{display:"inline-block"},onClick:$},[L.value.headerImg?(a(),s("img",{key:0,alt:"头像",class:"header-img-box",src:L.value.headerImg&&"http"!==L.value.headerImg.slice(0,4)?n.value+L.value.headerImg:L.value.headerImg},null,8,ie)):(a(),s("div",oe,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),i(Z,{ref_key:"chooseImg",ref:M,target:L.value,"target-key":"headerImg"},null,8,["target"])])}}});export{se as default};
