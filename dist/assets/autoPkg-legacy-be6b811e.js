/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var e,n={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),u=new T(r||[]);return a(i,"_invoke",{value:O(t,n,u)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",d="suspendedYield",y="executing",g="completed",v={};function m(){}function w(){}function b(){}var j={};s(j,u,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(C([])));k&&k!==r&&o.call(k,u)&&(j=k);var _=b.prototype=m.prototype=Object.create(j);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(r,a,i,u){var l=p(t[r],t,a);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,u)}))}u(l.arg)}var r;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(a,a):a()}})}function O(t,n,r){var o=h;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var u=r.delegate;if(u){var l=N(u,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=p(t,n,r);if("normal"===c.type){if(o=r.done?g:d,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function N(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=p(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function V(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(V,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},E(L.prototype),s(L.prototype,l,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new L(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),s(_,c,"Generator"),s(_,u,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},n}function e(t,e,n,r,o,a,i){try{var u=t[a](i),l=u.value}catch(c){return void n(c)}u.done?e(l):Promise.resolve(l).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function u(t){e(i,o,a,u,l,"next",t)}function l(t){e(i,o,a,u,l,"throw",t)}u(void 0)}))}}System.register(["./index-legacy-77ffdb44.js","./dialog-legacy-8fae651d.js","./overlay-legacy-f41ecf5b.js","./form-legacy-226b216b.js","./form-item-legacy-b3c86740.js","./input-legacy-49b38ae2.js","./table-column-legacy-8084bc99.js","./checkbox-legacy-a94e8b38.js","./tooltip-legacy-b3c86740.js","./popper-legacy-78a44115.js","./scrollbar-legacy-f5250367.js","./tag-legacy-bb2ff10c.js","./icon-legacy-4309e40a.js","./button-legacy-a427b180.js","./autoCode-legacy-9f14a7c9.js","./warningBar-legacy-e91d94c8.js","./doc-legacy-d4eaa869.js","./refs-legacy-54d25d6b.js","./isUndefined-legacy-9b9dfd8c.js","./castArray-legacy-674eeba8.js","./_baseClone-legacy-c3ba05ce.js","./_Uint8Array-legacy-e53c7e8a.js","./_initCloneObject-legacy-37a25bd7.js","./index-legacy-cad41cc7.js","./hasIn-legacy-94b595ef.js","./debounce-legacy-30562790.js","./index-legacy-2f12294e.js","./isEqual-legacy-fadf5600.js"],(function(e,r){"use strict";var o,a,i,u,l,c,s,f,p,h,d,y,g,v,m,w,b,j,x,k,_,E,L,O;return{setters:[function(t){o=t.a,a=t.o,i=t.c,u=t.d,l=t.b,c=t.w,s=t.g,f=t.G,p=t.cX,h=t.k,d=t.U,y=t.E,g=t.J,v=t.l},function(t){m=t.E},null,function(t){w=t.a,b=t.E},null,null,function(t){j=t.E,x=t.a},null,null,null,null,null,null,null,function(t){k=t.i,_=t.d,E=t.j},function(t){L=t.W},function(t){O=t.t},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r={class:"gva-table-box"},N={class:"gva-btn-list gap-3 flex items-center"},V={class:"dialog-footer"};e("default",Object.assign({name:"AutoPkg"},{__name:"autoPkg",setup:function(e){var P=o({packageName:"",label:"",desc:""}),T=o({packageName:[{required:!0,message:"请输入包名",trigger:"blur"},{validator:function(t,e,n){/^\d+$/.test(e[0])?n(new Error("不能够以数字开头")):n()},trigger:"blur"}]}),C=o(!1),G=function(){C.value=!1,P.value={packageName:"",label:"",desc:""}},B=o(null),F=function(){var e=n(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B.value.validate(function(){var e=n(t().mark((function e(n){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,k(P.value);case 3:0===t.sent.code&&h({type:"success",message:"添加成功",showClose:!0}),U(),G();case 7:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=o([]),U=function(){var e=n(t().mark((function e(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:0===(n=t.sent).code&&(S.value=n.data.pkgs);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=n(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.confirm("此操作仅删除数据库中的pkg存储，后端相应目录结构请自行删除与数据库保持一致！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(r);case 2:0===t.sent.code&&(h({type:"success",message:"删除成功!"}),U());case 4:case"end":return t.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return U(),function(t,e){var n=y,o=g,h=j,d=x,k=v,_=w,E=b,U=m;return a(),i("div",null,[u(L,{href:"https://www.bilibili.com/video/BV1kv4y1g7nT?p=3",title:"此功能为开发环境使用，不建议发布到生产，具体使用效果请看视频https://www.bilibili.com/video/BV1kv4y1g7nT?p=3"}),l("div",r,[l("div",N,[u(n,{type:"primary",icon:"plus",onClick:e[0]||(e[0]=function(t){C.value=!0})},{default:c((function(){return[s("新增")]})),_:1}),u(o,{class:"cursor-pointer",onClick:e[1]||(e[1]=function(t){return f(O)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=3&vd_source=f2640257c21e3b547a790461ed94875e")})},{default:c((function(){return[u(f(p))]})),_:1})]),u(d,{data:S.value},{default:c((function(){return[u(h,{align:"left",label:"id",width:"60",prop:"ID"}),u(h,{align:"left",label:"包名",width:"150",prop:"packageName"}),u(h,{align:"left",label:"展示名",width:"150",prop:"label"}),u(h,{align:"left",label:"描述","min-width":"150",prop:"desc"}),u(h,{align:"left",label:"操作",width:"200"},{default:c((function(t){return[u(n,{icon:"delete",type:"primary",link:"",onClick:function(e){return A(t.row)}},{default:c((function(){return[s("删除")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),u(U,{modelValue:C.value,"onUpdate:modelValue":e[5]||(e[5]=function(t){return C.value=t}),"before-close":G,title:"创建Package"},{footer:c((function(){return[l("div",V,[u(n,{onClick:G},{default:c((function(){return[s("取 消")]})),_:1}),u(n,{type:"primary",onClick:F},{default:c((function(){return[s("确 定")]})),_:1})])]})),default:c((function(){return[u(L,{title:"新增Pkg用于自动化代码使用"}),u(E,{ref_key:"pkgForm",ref:B,model:P.value,rules:T.value,"label-width":"80px"},{default:c((function(){return[u(_,{label:"包名",prop:"packageName"},{default:c((function(){return[u(k,{modelValue:P.value.packageName,"onUpdate:modelValue":e[2]||(e[2]=function(t){return P.value.packageName=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),u(_,{label:"展示名",prop:"label"},{default:c((function(){return[u(k,{modelValue:P.value.label,"onUpdate:modelValue":e[3]||(e[3]=function(t){return P.value.label=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),u(_,{label:"描述",prop:"desc"},{default:c((function(){return[u(k,{modelValue:P.value.desc,"onUpdate:modelValue":e[4]||(e[4]=function(t){return P.value.desc=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])])}}}))}}}))}();
