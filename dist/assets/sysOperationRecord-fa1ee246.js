/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{s as e,a,W as l,o as t,c as o,b as r,d as s,w as i,g as n,t as p,G as d,h as u,k as m,l as c,E as v,J as f}from"./index-0efc4537.js";import{E as g}from"./pagination-956e76f8.js";/* empty css              */import"./tag-c095386a.js";import"./select-59043028.js";import"./scrollbar-ab08f6f1.js";/* empty css               */import{E as y,a as h}from"./table-column-ce6481a3.js";import"./checkbox-aefa5e2d.js";/* empty css                *//* empty css             */import{E as b}from"./popover-a0fd8f33.js";import{a as j,E as w}from"./form-150c0e00.js";/* empty css               *//* empty css                  */import{f as _}from"./format-16a20050.js";import{E as k}from"./index-c5b62cef.js";import"./isEqual-aa7e7ef2.js";import"./_Uint8Array-4999d338.js";import"./hasIn-deea815f.js";import"./index-70d4cce8.js";import"./isUndefined-d281c39a.js";import"./strings-a95e1d29.js";import"./debounce-994b39f4.js";import"./index-4b62258d.js";import"./_initCloneObject-b273bb42.js";import"./dropdown-b49e545a.js";import"./castArray-f160d2a3.js";import"./_baseClone-9af99e91.js";import"./date-8358c12f.js";import"./dictionary-a221ccab.js";import"./sysDictionary-871dfba3.js";const C={class:"gva-search-box"},x={class:"gva-table-box"},V={class:"gva-btn-list"},O=r("p",null,"确定要删除吗？",-1),S={style:{"text-align":"right","margin-top":"8px"}},z={class:"popover-box"},E={key:1},I={class:"popover-box"},R={key:1},U=r("p",null,"确定要删除吗？",-1),D={style:{"text-align":"right","margin-top":"8px"}},N={class:"gva-pagination"},A=Object.assign({name:"SysOperationRecord"},{__name:"sysOperationRecord",setup(A){const J=a(1),L=a(0),q=a(10),B=a([]),G=a({}),P=()=>{G.value={}},T=()=>{J.value=1,q.value=10,""===G.value.status&&(G.value.status=null),H()},W=e=>{q.value=e,H()},F=e=>{J.value=e,H()},H=async()=>{const a=await(l={page:J.value,pageSize:q.value,...G.value},e({url:"/sysOperationRecord/getSysOperationRecordList",method:"get",params:l}));var l;0===a.code&&(B.value=a.data.list,L.value=a.data.total,J.value=a.data.page,q.value=a.data.pageSize)};H();const K=a(!1),M=a([]),Q=e=>{M.value=e},X=async()=>{const a=[];M.value&&M.value.forEach((e=>{a.push(e.ID)}));var l;0===(await(l={ids:a},e({url:"/sysOperationRecord/deleteSysOperationRecordByIds",method:"delete",data:l}))).code&&(m({type:"success",message:"删除成功"}),B.value.length===a.length&&J.value>1&&J.value--,K.value=!1,H())},Y=async a=>{a.visible=!1;var l;0===(await(l={ID:a.ID},e({url:"/sysOperationRecord/deleteSysOperationRecord",method:"delete",data:l}))).code&&(m({type:"success",message:"删除成功"}),1===B.value.length&&J.value>1&&J.value--,H())},Z=e=>{try{return JSON.parse(e)}catch(a){return e}};return(e,a)=>{const m=c,A=j,H=v,$=w,ee=b,ae=y,le=k,te=l("warning"),oe=f,re=h,se=g;return t(),o("div",null,[r("div",C,[s($,{inline:!0,model:G.value},{default:i((()=>[s(A,{label:"请求方法"},{default:i((()=>[s(m,{modelValue:G.value.method,"onUpdate:modelValue":a[0]||(a[0]=e=>G.value.method=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),s(A,{label:"请求路径"},{default:i((()=>[s(m,{modelValue:G.value.path,"onUpdate:modelValue":a[1]||(a[1]=e=>G.value.path=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),s(A,{label:"结果状态码"},{default:i((()=>[s(m,{modelValue:G.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>G.value.status=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),s(A,null,{default:i((()=>[s(H,{type:"primary",icon:"search",onClick:T},{default:i((()=>[n("查询")])),_:1}),s(H,{icon:"refresh",onClick:P},{default:i((()=>[n("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),r("div",x,[r("div",V,[s(ee,{modelValue:K.value,"onUpdate:modelValue":a[5]||(a[5]=e=>K.value=e),placement:"top",width:"160"},{reference:i((()=>[s(H,{icon:"delete",style:{"margin-left":"10px"},disabled:!M.value.length,onClick:a[4]||(a[4]=e=>K.value=!0)},{default:i((()=>[n("删除")])),_:1},8,["disabled"])])),default:i((()=>[O,r("div",S,[s(H,{type:"primary",link:"",onClick:a[3]||(a[3]=e=>K.value=!1)},{default:i((()=>[n("取消")])),_:1}),s(H,{type:"primary",onClick:X},{default:i((()=>[n("确定")])),_:1})])])),_:1},8,["modelValue"])]),s(re,{ref:"multipleTable",data:B.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSelectionChange:Q},{default:i((()=>[s(ae,{align:"left",type:"selection",width:"55"}),s(ae,{align:"left",label:"操作人",width:"140"},{default:i((e=>[r("div",null,p(e.row.user.userName)+"("+p(e.row.user.nickName)+")",1)])),_:1}),s(ae,{align:"left",label:"日期",width:"180"},{default:i((e=>[n(p(d(_)(e.row.CreatedAt)),1)])),_:1}),s(ae,{align:"left",label:"状态码",prop:"status",width:"120"},{default:i((e=>[r("div",null,[s(le,{type:"success"},{default:i((()=>[n(p(e.row.status),1)])),_:2},1024)])])),_:1}),s(ae,{align:"left",label:"请求IP",prop:"ip",width:"120"}),s(ae,{align:"left",label:"请求方法",prop:"method",width:"120"}),s(ae,{align:"left",label:"请求路径",prop:"path",width:"240"}),s(ae,{align:"left",label:"请求",prop:"path",width:"80"},{default:i((e=>[r("div",null,[e.row.body?(t(),u(ee,{key:0,placement:"left-start",trigger:"click"},{reference:i((()=>[s(oe,{style:{cursor:"pointer"}},{default:i((()=>[s(te)])),_:1})])),default:i((()=>[r("div",z,[r("pre",null,p(Z(e.row.body)),1)])])),_:2},1024)):(t(),o("span",E,"无"))])])),_:1}),s(ae,{align:"left",label:"响应",prop:"path",width:"80"},{default:i((e=>[r("div",null,[e.row.resp?(t(),u(ee,{key:0,placement:"left-start",trigger:"click"},{reference:i((()=>[s(oe,{style:{cursor:"pointer"}},{default:i((()=>[s(te)])),_:1})])),default:i((()=>[r("div",I,[r("pre",null,p(Z(e.row.resp)),1)])])),_:2},1024)):(t(),o("span",R,"无"))])])),_:1}),s(ae,{align:"left",label:"操作"},{default:i((e=>[s(ee,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:i((()=>[s(H,{icon:"delete",type:"primary",link:"",onClick:a=>e.row.visible=!0},{default:i((()=>[n("删除")])),_:2},1032,["onClick"])])),default:i((()=>[U,r("div",D,[s(H,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:i((()=>[n("取消")])),_:2},1032,["onClick"]),s(H,{type:"primary",onClick:a=>Y(e.row)},{default:i((()=>[n("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),r("div",N,[s(se,{"current-page":J.value,"page-size":q.value,"page-sizes":[10,30,50,100],total:L.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:F,onSizeChange:W},null,8,["current-page","page-size","total"])])])])}}});export{A as default};
