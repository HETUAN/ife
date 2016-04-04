/*! 2016 Baidu Inc. All Rights Reserved */
define("common/cache",["require"],function(require){var e={},t="userInfo";return{setBatch:function(e){e||(e={});for(var t in e)if(e.hasOwnProperty(t))this.set(t,e[t])},set:function(t,i){return e[t]=i,this},get:function(t){return e[t]},clear:function(){return e={},this},remove:function(t){if(t)delete e[t];return this},setUserInfo:function(e){this.set(t,e||{})},getUserInfo:function(e){var i=this.get(t)||{};return e?i[e]:i},getUserGroup:function(){var e=this.getUserInfo();return{name:e.groupName,isOwner:e.isGroupOwner}},userHasGroup:function(){return!!this.getUserInfo().hasGroup},userIsGroupOwner:function(){return this.getUserInfo().isGroupOwner},setUserGroupName:function(e){this.getUserInfo().groupName=e},isUserStudent:function(){return this.getUserInfo("isStudent")}}}),define("common/page_9c1894bc",["require","bootstrap/collapse","bootstrap/dropdown","common/cache"],function(require){function e(e){var t=$(window).scrollTop()>100;e[t?"fadeIn":"fadeOut"]()}function t(){var t='<a id="gotop" style="display: none;"><span class="glyphicon glyphicon-menu-up up-icon" aria-hidden="true"></span></a>',i=$(t).appendTo(document.body);i.on("click",function(){$(document.body).stop().animate({scrollTop:0},200)}),$(window).on("scroll",$.proxy(e,this,i)),e(i)}require("bootstrap/collapse"),require("bootstrap/dropdown");var i=require("common/cache");return{init:function(e,n){i.setUserInfo(e),n&&t()}}}),function(e){function t(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i];return e}function i(){this.raw=[],this.length=0}function n(){return"___"+L++}function a(e,t){var i=new Function;i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}function r(e){return B[e]}function s(e){return'"'+e.replace(/\x5C/g,"\\\\").replace(/"/g,'\\"').replace(/\x0A/g,"\\n").replace(/\x09/g,"\\t").replace(/\x0D/g,"\\r")+'"'}function o(e){return e.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(e){return"\\"+e})}function l(e){var t=arguments;return e.replace(/\{([0-9]+)\}/g,function(e,i){return t[i-0+1]})}function u(e){return e=e.replace(/^\s*\*/,""),l('gv({0},["{1}"])',s(e),e.replace(/\[['"]?([^'"]+)['"]?\]/g,function(e,t){return"."+t}).split(".").join('","'))}function d(e,t,i,n,a,r){for(var s=i.length,o=e.split(t),l=0,u=[],d=0,c=o.length;c>d;d++){var f=o[d];if(d){var p=1;for(l++;;){var h=f.indexOf(i);if(0>h){u.push(l>1&&p?t:"",f);break}if(l=n?l-1:0,u.push(l>0&&p?t:"",f.slice(0,h),l>0?i:""),f=f.slice(h+s),p=0,0===l)break}if(0===l)a(u.join("")),r(f),u=[]}else f&&r(f)}if(l>0&&u.length>0)r(t),r(u.join(""))}function c(e,t,i){var n,a=[],r=t.options,o="",l="",f="",p="";if(i)o="ts(",l=")",f=P,p=N,n=r.defaultFilter;return d(e,r.variableOpen,r.variableClose,1,function(e){if(i&&e.indexOf("|")<0&&n)e+="|"+n;var r=e.indexOf("|"),s=(r>0?e.slice(0,r):e).replace(/^\s+/,"").replace(/\s+$/,""),d=r>0?e.slice(r+1):"",h=0===s.indexOf("*"),m=[h?"":o,u(s),h?"":l];if(d){d=c(d,t);for(var g=d.split("|"),v=0,b=g.length;b>v;v++){var y=g[v];if(/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test(y)){if(m.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3)m.push(",",RegExp.$3);m.push(")")}}}a.push(f,m.join(""),p)},function(e){a.push(f,i?s(e):e,p)}),a.join("")}function f(e,t){this.value=e,this.engine=t}function p(e,t){this.value=e,this.engine=t,this.children=[],this.cloneProps=[]}function h(e,t){var i=e.stack,n=t?i.find(function(e){return e instanceof t}):i.bottom();if(n){for(var a;(a=i.top())!==n;){if(!a.autoClose)throw new Error(a.type+" must be closed manually: "+a.value);a.autoClose(e)}n.close(e)}return n}function m(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.master=RegExp.$3,this.name=RegExp.$1,p.call(this,e,t),this.blocks={}}function g(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,p.call(this,e,t),this.cloneProps=["name"]}function v(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,p.call(this,e,t),this.cloneProps=["name","state","blocks","target"],this.blocks={}}function b(e,t){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,this.expr=RegExp.$2,p.call(this,e,t),this.cloneProps=["name","expr"]}function y(e,t){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,this.args=RegExp.$3,p.call(this,e,t),this.cloneProps=["name","args"]}function S(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,this.args=RegExp.$3,p.call(this,e,t),this.cloneProps=["name","args"]}function I(e,t){var i=new RegExp(l("^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$",o(t.options.variableOpen),o(t.options.variableClose)),"i");if(!i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,p.call(this,e,t),this.cloneProps=["list","item","index"]}function E(e,t){p.call(this,e,t)}function k(e,t){E.call(this,e,t)}function A(e,t){p.call(this,e,t)}function C(e,t){t.target=e;var i=t.engine,n=e.name;if(i.targets[n])switch(i.options.namingConflict){case"override":i.targets[n]=e,t.targets.push(n);case"ignore":break;default:throw new Error("[ETPL_TARGET_EXISTS]"+n)}else i.targets[n]=e,t.targets.push(n)}function w(e,t){j[e]=t,t.prototype.type=e}function T(e){this.options={commandOpen:"<!--",commandClose:"-->",commandSyntax:/^\s*(\/)?([a-z]*)\s*(?::([\s\S]*))?$/,variableOpen:"${",variableClose:"}",defaultFilter:"html"},this.config(e),this.targets={},this.filters=t({},M)}function R(e,t){function n(){var e;if(c.length>0&&(e=c.join(""))){var i=new f(e,t);if(i.beforeAdd(u),l.top().addChild(i),c=[],t.options.strip&&u.current instanceof p)i.value=e.replace(/^[\x20\t\r]*\n/,"");u.current=i}}var a,r=t.options.commandOpen,s=t.options.commandClose,o=t.options.commandSyntax,l=new i,u={engine:t,targets:[],stack:l,target:null},c=[];return d(e,r,s,0,function(e){var i,l=o.exec(e);if(l&&(i=l[2]||"target")&&(a=j[i.toLowerCase()])&&"function"==typeof a){n();var d=u.current;if(t.options.strip&&d instanceof f)d.value=d.value.replace(/\r?\n[\x20\t]*$/,"\n");if(l[1])d=h(u,a);else{if(d=new a(l[3],t),"function"==typeof d.beforeOpen)d.beforeOpen(u);d.open(u)}u.current=d}else if(!/^\s*\/\//.test(e))c.push(r,e,s);a=null},function(e){c.push(e)}),n(),h(u),u.targets}i.prototype={push:function(e){this.raw[this.length++]=e},pop:function(){if(this.length>0){var e=this.raw[--this.length];return this.raw.length=this.length,e}},top:function(){return this.raw[this.length-1]},bottom:function(){return this.raw[0]},find:function(e){for(var t=this.length;t--;){var i=this.raw[t];if(e(i))return i}}};var L=178245,B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},M={html:function(e){return e.replace(/[&<>"']/g,r)},url:encodeURIComponent,raw:function(e){return e}},x='var r="";',P="r+=",N=";",V="return r;";if("undefined"!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8)x="var r=[],ri=0;",P="r[ri++]=",V='return r.join("");';f.prototype={getRendererBody:function(){var e=this.value,t=this.engine.options;if(!e||t.strip&&/^\s*$/.test(e))return"";else return c(e,this.engine,1)},clone:function(){return this}},p.prototype={addChild:function(e){this.children.push(e)},open:function(e){var t=e.stack.top();t&&t.addChild(this),e.stack.push(this)},close:function(e){if(e.stack.top()===this)e.stack.pop()},getRendererBody:function(){for(var e=[],t=this.children,i=0;i<t.length;i++)e.push(t[i].getRendererBody());return e.join("")},clone:function(){for(var e=this.constructor,t=new e(this.value,this.engine),i=0,n=this.children.length;n>i;i++)t.addChild(this.children[i].clone());for(var i=0,n=this.cloneProps.length;n>i;i++){var a=this.cloneProps[i];t[a]=this[a]}return t}};var D='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';a(m,p),a(g,p),a(v,p),a(b,p),a(y,p),a(S,p),a(I,p),a(E,p),a(k,E),a(A,E);var _={READING:1,READED:2,APPLIED:3,READY:4};v.prototype.applyMaster=m.prototype.applyMaster=function(e){function t(e){var n=e.children;if(n instanceof Array)for(var a=0,r=n.length;r>a;a++){var s=n[a];if(s instanceof g&&i[s.name])s=n[a]=i[s.name];t(s)}}if(this.state>=_.APPLIED)return 1;var i=this.blocks,n=this.engine.targets[e];if(n){if(n.applyMaster(n.master))return this.children=n.clone().children,t(this),this.state=_.APPLIED,1}else if("error"===this.engine.options.missTarget)throw new Error("[ETPL_MISS_TARGET]"+e+", when extended by "+(this.target?this.target.name:this.name))},m.prototype.isReady=function(){function e(a){for(var r=0,s=a.children.length;s>r;r++){var o=a.children[r];if(o instanceof v){var l=t.targets[o.name];if(!l&&"error"===t.options.missTarget)throw new Error("[ETPL_MISS_TARGET]"+o.name+", when imported by "+i);n=n&&l&&l.isReady(t)}else if(o instanceof p)e(o)}}if(this.state>=_.READY)return 1;var t=this.engine,i=this.name,n=1;if(this.applyMaster(this.master))return e(this),n&&(this.state=_.READY),n;else return void 0},m.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var e=new Function("data","engine",[D,x,this.getRendererBody(),V].join("\n")),t=this.engine;return this.renderer=function(i){return e(i,t)},this.renderer}return null},m.prototype.open=function(e){h(e),p.prototype.open.call(this,e),this.state=_.READING,C(this,e)},b.prototype.open=S.prototype.open=function(e){e.stack.top().addChild(this)},g.prototype.open=function(e){p.prototype.open.call(this,e),e.stack.find(function(e){return e.blocks}).blocks[this.name]=this},k.prototype.open=function(e){var t=new A;t.open(e);var i=h(e,E);i.addChild(this),e.stack.push(this)},A.prototype.open=function(e){var t=h(e,E);t.addChild(this),e.stack.push(this)},v.prototype.open=function(e){this.parent=e.stack.top(),this.target=e.target,p.prototype.open.call(this,e),this.state=_.READING},S.prototype.close=b.prototype.close=function(){},v.prototype.close=function(e){p.prototype.close.call(this,e),this.state=_.READED},m.prototype.close=function(e){p.prototype.close.call(this,e),this.state=this.master?_.READED:_.APPLIED,e.target=null},v.prototype.autoClose=function(e){var t=this.parent.children;t.push.apply(t,this.children),this.children.length=0;for(var i in this.blocks)this.target.blocks[i]=this.blocks[i];this.blocks={},this.close(e)},S.prototype.beforeOpen=v.prototype.beforeOpen=b.prototype.beforeOpen=I.prototype.beforeOpen=y.prototype.beforeOpen=g.prototype.beforeOpen=E.prototype.beforeOpen=f.prototype.beforeAdd=function(e){if(!e.stack.bottom()){var t=new m(n(),e.engine);t.open(e)}},v.prototype.getRendererBody=function(){return this.applyMaster(this.name),p.prototype.getRendererBody.call(this)},S.prototype.getRendererBody=function(){return l("{0}engine.render({2},{{3}}){1}",P,N,s(this.name),c(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(e,t,i){return(t||"")+s(i)+":"}))},b.prototype.getRendererBody=function(){if(this.expr)return l("v[{0}]={1};",s(this.name),c(this.expr,this.engine));else return""},E.prototype.getRendererBody=function(){return l("if({0}){{1}}",c(this.value,this.engine),p.prototype.getRendererBody.call(this))},A.prototype.getRendererBody=function(){return l("}else{{0}",p.prototype.getRendererBody.call(this))},I.prototype.getRendererBody=function(){return l('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',n(),c(this.list,this.engine),s(this.index||n()),s(this.item),n(),n(),p.prototype.getRendererBody.call(this))},y.prototype.getRendererBody=function(){var e=this.args;return l("{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}",x,V,P,N,p.prototype.getRendererBody.call(this),s(this.name),e?","+c(e,this.engine):"")};var j={};w("target",m),w("block",g),w("import",v),w("use",S),w("var",b),w("for",I),w("if",E),w("elif",k),w("else",A),w("filter",y),T.prototype.config=function(e){t(this.options,e)},T.prototype.compile=T.prototype.parse=function(e){if(e){var t=R(e,this);if(t.length)return this.targets[t[0]].getRenderer()}return new Function('return ""')},T.prototype.getRenderer=function(e){var t=this.targets[e];if(t)return t.getRenderer();else return void 0},T.prototype.render=function(e,t){var i=this.getRenderer(e);if(i)return i(t);else return""},T.prototype.addFilter=function(e,t){if("function"==typeof t)this.filters[e]=t};var z=new T;if(z.Engine=T,z.version="3.1.0","object"==typeof exports&&"object"==typeof module)exports=module.exports=z;else if("function"==typeof define&&define.amd)define("etpl/main",[],z);else e.etpl=z}(this),define("etpl",["etpl/main"],function(e){return e}),define("common/tpl",["require","etpl"],function(require){var e=require("etpl"),exports={};return exports.createTplEngine=function(t){var i=new e.Engine;return i.compile(t),{render:function(e,t){var n=i.getRenderer(e);return n&&n(t||{})}}},exports.renderTpl=function(e,t){return e.replace(/\$\{(.+?)\}/g,function(e,i){return null==t[i]?"":t[i]})},exports}),define("common/constants",["require"],function(require){var exports={};return exports.LOADING_TPL='<div class="loading-wrap"><span class="loading glyphicon glyphicon-refresh" aria-hidden="true"></span></div>',exports}),define("task/task.tpl",[],function(){return'<!-- target: submitGroupList --><!-- if: ${error} --><div class="empty-tip text-danger">${error}</div><!-- elif: ${groupList.length} --><table class="submit-group-table"><thead><tr><td>&nbsp;</td><td class="review">提交团队</td><!--<td class="group-name">团队</td>--><td class="submit-time">提交时间</td><td class="score">得分</td></tr></thead><tbody><!-- for: ${groupList} as ${item} --><tr class="group"><td><a href="${item.reviewUrl}" class="btn btn-primary btn-xs">点击按钮进行评价</a></td><td class="review"><span class="group-name">${item.groupName}&nbsp;(<a href="${item.groupUrl}">团队详情</a>)</span></td><!--<td class="group-name">--><!--${item.groupName}<a href="${item.groupUrl}">（团队详情）</a>--><!--</td>--><td class="submit-time">${item.submitTime}</td><td class="score">${item.score}</td></tr><!-- /for --></tbody></table><!-- if: ${totalPage} > 1 --><div class="group-page-wrap"></div><!-- /if --><!-- else --><p class="empty-tip">暂无提交的团队</p><!-- /if --><!-- target: submitGroupRank --><!-- if: ${error} --><div class="empty-tip text-danger">${error}</div><!-- elif: ${groupList.length} --><table class="submit-group-rank-table"><thead><tr><td class="index">&nbsp;</td><td class="group-name">团队</td><td class="score">得分</td><td class="review">&nbsp;</td></tr></thead><tbody><!-- for: ${groupList} as ${item}, ${index} --><!--if: ${index} < 3--><tr class="group top-${index}"><!--else--><tr class="group"><!--/if--><td class="index-num"><!--var: num = ${index} + 1-->${num}</td><td class="group-name"><a href="${item.groupUrl}">${item.groupName}</a></td><td class="score">${item.score}</td><td class="review"><a href="${item.reviewUrl}" class="btn btn-primary btn-xs">查看评价</a></td></tr><!-- /for --></tbody></table><!-- else --><p class="empty-tip">暂无提交的团队</p><!-- /if -->'}),define("common/uiHelper",["require","jquery","bootstrap/modal"],function(require){function e(){if(s){r.modal("hide");var e=s;s=null,e()}}function t(){if(!r)r=n("#confirm-msg-dlg"),n(".ok-btn",r).on("click",e)}function i(){if(!a)a=n("#alert-msg-dlg")}var n=require("jquery");require("bootstrap/modal");var a,r,s,exports={};return exports.toggleBtnLoadingState=function(e,t){e.button(t?"loading":"reset")},exports.openComfirmDlg=function(e,i){t(),n(".modal-body",r).html(e),r.modal("show"),s=i},exports.openAlertDlg=function(e){i(),n(".modal-body",a).html(e),a.modal("show")},exports.toggleBtnDisableState=function(e,t,i){if(e.prop("disabled",t),i)e.siblings("button").prop("disabled",t)},exports.getInputValue=function(e,t){return e&&e.val().trim().substr(0,t||100)},exports.jqformArr2Obj=function(e){for(var t={},i=0,n=e.length;n>i;i++)t[e[i].name]=e[i].value.trim();return t},exports}),define("task/submit",["require","common/uiHelper","bootstrap/modal","bootstrap/button","bootstrapvalidator"],function(require){function e(){a.modal("show")}function t(e,t){var i=$(".submit-tip",a);i[t?"addClass":"removeClass"]("text-danger"),i[t?"removeClass":"addClass"]("text-success"),i.html(e)}function i(){if(o.validate(),o.isValid()){n.toggleBtnLoadingState(s,!0),n.toggleBtnDisableState(l,!0);var e=n.jqformArr2Obj(r.serializeArray());e.taskId=u.taskId;var i=u.isUpdate,d=i?"/task/update":"/task/submit";$.post(d,e,"json").then(function(e){n.toggleBtnLoadingState(s,!1),n.toggleBtnDisableState(l,!1);var r=0===+e.status;if(r)if(i)t("更新成功");else a.modal("hide"),l.replaceWith($('<a class="btn btn-success" href="'+e.data.reviewUrl+'">查看 review</a>')),l=null;else t(e.statusInfo||"提交失败",!0)})}}var n=require("common/uiHelper");require("bootstrap/modal"),require("bootstrap/button"),require("bootstrapvalidator");var a,r,s,o,l,u,exports={};return exports.init=function(t,n){u=t,a=$("#submit-task-dlg"),s=$(".save-btn",a).on("click",i),r=$(".submit-task-form",a),o=r.bootstrapValidator({live:"enabled",fields:{url:{validators:{notEmpty:{message:"代码地址不能为空"},uri:{message:"代码地址无效"}}},demo:{validators:{uri:{message:"demo 地址无效"}}},descr:{stringLength:{max:300,message:"描述不超过300个字"}}}}).data("bootstrapValidator"),l=n,l.on("click",e)},exports}),define("task/taskDetail_80a5f8d9",["require","jquery","common/page_9c1894bc","common/tpl","common/constants","jquery-bootpag/jquery.bootpag","./task.tpl","./submit"],function(require){function e(){if(!p)p=u.createTplEngine(require("./task.tpl"));return p}function t(){return o(".group-page-wrap",c)}function i(e,t){a(t)}function n(n,a){t().off();var r={};if(n)r={error:n};else{var s=a.pageSize;r={totalPage:s&&Math.ceil(a.total/s),groupList:a.listData||[]},o(".submit-group-count").html(a.total)}c.html(e().render("submitGroupList",r));var l=t();if(l.length)l.bootpag({total:r.totalPage,page:a.pageNo,maxVisible:10}).on("page",i)}function a(e){c.html(d),o.post("/task/getDoneGroupList",{pageNo:e||1,taskId:h.taskId},"json").then(function(e){var t=0===+e.status;n(t?null:e.statusInfo||"读取失败",e.data)})}function r(t,i){var n={};if(t)n={error:t};else n=i;f.html(e().render("submitGroupRank",n))}function s(){f.html(d),o.get("/task/getDoneGroupRank",{taskId:h.taskId},"json").then(function(e){var t=0===+e.status;r(t?null:e.statusInfo||"读取失败",e.data)})}var o=require("jquery"),l=require("common/page_9c1894bc"),u=require("common/tpl"),d=require("common/constants").LOADING_TPL;require("jquery-bootpag/jquery.bootpag");var c,f,p,h;return{init:function(e,t){l.init(e,!0),h=t,c=o(".submit-group-info"),f=o(".submit-group-rank");var i=o(".submit-task-btn");if(i.length)require("./submit").init(t,i);a(1),s()}}});