/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
import{a,o as s,c as e,d as t,b as o,w as l,g as r,k as u,l as i,E as n}from"./index-0efc4537.js";/* empty css               *//* empty css              */import{W as m}from"./warningBar-5328b630.js";import{l as p}from"./autoCode-a45db78d.js";/* empty css             */const c={class:"p-5 bg-white"},d={class:"flex items-center gap-3"},g={__name:"pubPlug",setup(g){const f=a(""),j=async()=>{const a=await p({plugName:f.value});0===a.code&&u.success(a.msg)};return(a,u)=>{const p=i,g=n;return s(),e("div",c,[t(m,{title:"目前只支持标准插件（通过插件模板生成的标准目录插件），非标准插件请自行打包"}),o("div",d,[t(p,{modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=a=>f.value=a),placeholder:"插件模板处填写的【插件名】"},null,8,["modelValue"]),t(g,{type:"primary",onClick:j},{default:l((()=>[r("打包插件")])),_:1})])])}}};export{g as default};
