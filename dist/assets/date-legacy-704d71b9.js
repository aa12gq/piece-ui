/*! 
 Build based on gin-vue-admin 
 Time : 1705585352000 */
System.register([],(function(t,e){"use strict";return{execute:function(){t("f",(function(t,e){if(!t)return"";var r=new Date(t).Format("yyyy-MM-dd hh:mm:ss");return e&&(r=new Date(t).Format(e)),r.toLocaleString()})),Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t}}}}));
