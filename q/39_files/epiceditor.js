/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){function i(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]}function n(e,t){for(var i in t)if(t.hasOwnProperty(i))e.style[i]=t[i]}function r(t,i){var n=t,r=null;if(e.getComputedStyle)r=document.defaultView.getComputedStyle(n,null).getPropertyValue(i);else if(n.currentStyle)r=n.currentStyle[i];return r}function s(e,t,i){var s,o={};if("save"===t){for(s in i)if(i.hasOwnProperty(s))o[s]=r(e,s);n(e,i)}else if("apply"===t)n(e,i);return o}function o(e){var t,i=parseInt(r(e,"border-left-width"),10)+parseInt(r(e,"border-right-width"),10),n=parseInt(r(e,"padding-left"),10)+parseInt(r(e,"padding-right"),10),s=e.offsetWidth;if(isNaN(i))i=0;return t=i+n+s}function l(e){var t,i=parseInt(r(e,"border-top-width"),10)+parseInt(r(e,"border-bottom-width"),10),n=parseInt(r(e,"padding-top"),10)+parseInt(r(e,"padding-bottom"),10),s=parseInt(r(e,"height"),10);if(isNaN(i))i=0;return t=i+n+s}function a(e,t,n){n=n||"";var r=t.getElementsByTagName("head")[0],s=t.createElement("link");i(s,{type:"text/css",id:n,rel:"stylesheet",href:e,name:e,media:"screen"}),r.appendChild(s)}function f(e,t,i){e.className=e.className.replace(t,i)}function u(e){return e.contentDocument||e.contentWindow.document}function c(e){var t;if("string"==typeof document.body.innerText)t=e.innerText;else t=e.innerHTML.replace(/<br>/gi,"\n"),t=t.replace(/<(?:.|\n)*?>/gm,""),t=t.replace(/&lt;/gi,"<"),t=t.replace(/&gt;/gi,">");return t}function p(e,t){return t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/\n/g,"<br>"),t=t.replace(/<br>\s/g,"<br>&nbsp;"),t=t.replace(/\s\s\s/g,"&nbsp; &nbsp;"),t=t.replace(/\s\s/g,"&nbsp; "),t=t.replace(/^ /,"&nbsp;"),e.innerHTML=t,!0}function h(e){return e.replace(/\u00a0/g," ").replace(/&nbsp;/g," ")}function d(){var e,t=-1,i=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName)if(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/,null!=e.exec(i))t=parseFloat(RegExp.$1,10);return t}function g(){var t=e.navigator;return t.userAgent.indexOf("Safari")>-1&&-1==t.userAgent.indexOf("Chrome")}function m(){var t=e.navigator;return t.userAgent.indexOf("Firefox")>-1&&-1==t.userAgent.indexOf("Seamonkey")}function v(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function b(){var e,i,n,r,s=arguments[0]||{},o=1,l=arguments.length,a=!1;if("boolean"==typeof s)a=s,s=arguments[1]||{},o=2;if("object"!=typeof s&&!v(s))s={};if(l===o)s=this,--o;for(;l>o;o++)if(null!=(e=arguments[o]))for(i in e)if(e.hasOwnProperty(i)){if(n=s[i],r=e[i],s===r)continue;if(a&&r&&"object"==typeof r&&!r.nodeType)s[i]=b(a,n||(null!=r.length?[]:{}),r);else if(r!==t)s[i]=r}return s}function y(e){var i,n,r=this,s=e||{},o={container:"epiceditor",basePath:"epiceditor",textarea:t,clientSideStorage:!0,localStorageName:"epiceditor",useNativeFullscreen:!0,file:{name:null,defaultContent:"",autoSave:100},theme:{base:"/themes/base/epiceditor.css",preview:"/themes/preview/github.css",editor:"/themes/editor/epic-dark.css"},focusOnLoad:!1,shortcut:{modifier:18,fullscreen:70,preview:80},string:{togglePreview:"Toggle Preview Mode",toggleEdit:"Toggle Edit Mode",toggleFullscreen:"Enter Fullscreen"},parser:"function"==typeof marked?marked:null,autogrow:!1,button:{fullscreen:!0,preview:!0,bar:"auto"}},l={minHeight:80,maxHeight:!1,scroll:!0};r.settings=b(!0,o,s);var a=r.settings.button;if(r._fullscreenEnabled="object"==typeof a?"undefined"==typeof a.fullscreen||a.fullscreen:a===!0,r._editEnabled="object"==typeof a?"undefined"==typeof a.edit||a.edit:a===!0,r._previewEnabled="object"==typeof a?"undefined"==typeof a.preview||a.preview:a===!0,"function"!=typeof r.settings.parser||"string"!=typeof r.settings.parser("TEST"))r.settings.parser=function(e){return e};if(r.settings.autogrow){if(r.settings.autogrow===!0)r.settings.autogrow=l;else r.settings.autogrow=b(!0,l,r.settings.autogrow);r._oldHeight=-1}if(!r.settings.theme.preview.match(/^https?:\/\//))r.settings.theme.preview=r.settings.basePath+r.settings.theme.preview;if(!r.settings.theme.editor.match(/^https?:\/\//))r.settings.theme.editor=r.settings.basePath+r.settings.theme.editor;if(!r.settings.theme.base.match(/^https?:\/\//))r.settings.theme.base=r.settings.basePath+r.settings.theme.base;if("string"==typeof r.settings.container)r.element=document.getElementById(r.settings.container);else if("object"==typeof r.settings.container)r.element=r.settings.container;if(!r.settings.file.name)if("string"==typeof r.settings.container)r.settings.file.name=r.settings.container;else if("object"==typeof r.settings.container)if(r.element.id)r.settings.file.name=r.element.id;else{if(!y._data.unnamedEditors)y._data.unnamedEditors=[];y._data.unnamedEditors.push(r),r.settings.file.name="__epiceditor-untitled-"+y._data.unnamedEditors.length}if("show"===r.settings.button.bar)r.settings.button.bar=!0;if("hide"===r.settings.button.bar)r.settings.button.bar=!1;if(r._instanceId="epiceditor-"+Math.round(1e5*Math.random()),r._storage={},r._canSave=!0,r._defaultFileSchema=function(){return{content:r.settings.file.defaultContent,created:new Date,modified:new Date}},localStorage&&r.settings.clientSideStorage)if(this._storage=localStorage,this._storage[r.settings.localStorageName]&&r.getFiles(r.settings.file.name)===t)i=r._defaultFileSchema(),i.content=r.settings.file.defaultContent;if(!this._storage[r.settings.localStorageName])n={},n[r.settings.file.name]=r._defaultFileSchema(),n=JSON.stringify(n),this._storage[r.settings.localStorageName]=n;if(r._previewDraftLocation="__draft-",r._storage[r._previewDraftLocation+r.settings.localStorageName]=r._storage[r.settings.localStorageName],r._eeState={fullscreen:!1,preview:!1,edit:!1,loaded:!1,unloaded:!1},!r.events)r.events={};return this}y.prototype.load=function(t){function i(t){if("auto"===E.settings.button.bar){if(Math.abs(F.y-t.pageY)>=5||Math.abs(F.x-t.pageX)>=5){if(v.style.display="block",b)clearTimeout(b);b=e.setTimeout(function(){v.style.display="none"},1e3)}F={y:t.pageY,x:t.pageX}}}function o(e){if(e.keyCode==E.settings.shortcut.modifier)O=!0;if(17==e.keyCode)C=!0;if(O===!0&&e.keyCode==E.settings.shortcut.preview&&!E.is("fullscreen"))if(e.preventDefault(),E.is("edit")&&E._previewEnabled)E.preview();else if(E._editEnabled)E.edit();if(O===!0&&e.keyCode==E.settings.shortcut.fullscreen&&E._fullscreenEnabled)e.preventDefault(),E._goFullscreen(x);if(O===!0&&e.keyCode!==E.settings.shortcut.modifier)O=!1;if(27==e.keyCode&&E.is("fullscreen"))E._exitFullscreen(x);if(C===!0&&83==e.keyCode)E.save(),e.preventDefault(),C=!1;if(e.metaKey&&83==e.keyCode)E.save(),e.preventDefault()}function l(e){if(e.keyCode==E.settings.shortcut.modifier)O=!1;if(17==e.keyCode)C=!1}function f(t){var i;if(t.clipboardData)t.preventDefault(),i=t.clipboardData.getData("text/plain"),E.editorIframeDocument.execCommand("insertText",!1,i);else if(e.clipboardData)t.preventDefault(),i=e.clipboardData.getData("Text"),i=i.replace(/</g,"&lt;"),i=i.replace(/>/g,"&gt;"),i=i.replace(/\n/g,"<br>"),i=i.replace(/\r/g,""),i=i.replace(/<br>\s/g,"<br>&nbsp;"),i=i.replace(/\s\s\s/g,"&nbsp; &nbsp;"),i=i.replace(/\s\s/g,"&nbsp; "),E.editorIframeDocument.selection.createRange().pasteHTML(i)}if(this.is("loaded"))return this;var c,p,h,m,v,b,y,w,_,x,k,S,I,E=this,F={y:-1,x:-1},D=!1,L=!1,T=!1,N=!1,O=!1,C=!1;if(E._eeState.startup=!0,E.settings.useNativeFullscreen)L=document.body.webkitRequestFullScreen?!0:!1,T=document.body.mozRequestFullScreen?!0:!1,N=document.body.requestFullscreen?!0:!1,D=L||T||N;if(g())D=!1,L=!1;if(!E.is("edit")&&!E.is("preview"))E._eeState.edit=!0;if(t=t||function(){},c={chrome:'<div id="epiceditor-wrapper" class="epiceditor-edit-mode"><iframe frameborder="0" id="epiceditor-editor-frame"></iframe><iframe frameborder="0" id="epiceditor-previewer-frame"></iframe><div id="epiceditor-utilbar">'+(E._previewEnabled?'<button title="'+this.settings.string.togglePreview+'" class="epiceditor-toggle-btn epiceditor-toggle-preview-btn"></button> ':"")+(E._editEnabled?'<button title="'+this.settings.string.toggleEdit+'" class="epiceditor-toggle-btn epiceditor-toggle-edit-btn"></button> ':"")+(E._fullscreenEnabled?'<button title="'+this.settings.string.toggleFullscreen+'" class="epiceditor-fullscreen-btn"></button>':"")+"</div></div>",previewer:'<div id="epiceditor-preview"></div>',editor:"<!doctype HTML>"},E.element.innerHTML='<iframe scrolling="no" frameborder="0" id= "'+E._instanceId+'"></iframe>',E.element.style.height=E.element.offsetHeight+"px",p=document.getElementById(E._instanceId),E.iframeElement=p,E.iframe=u(p),E.iframe.open(),E.iframe.write(c.chrome),E.editorIframe=E.iframe.getElementById("epiceditor-editor-frame"),E.previewerIframe=E.iframe.getElementById("epiceditor-previewer-frame"),E.editorIframeDocument=u(E.editorIframe),E.editorIframeDocument.open(),E.editorIframeDocument.write(c.editor),E.editorIframeDocument.close(),E.previewerIframeDocument=u(E.previewerIframe),E.previewerIframeDocument.open(),E.previewerIframeDocument.write(c.previewer),h=E.previewerIframeDocument.createElement("base"),h.target="_blank",E.previewerIframeDocument.getElementsByTagName("head")[0].appendChild(h),E.previewerIframeDocument.close(),E.reflow(),a(E.settings.theme.base,E.iframe,"theme"),a(E.settings.theme.editor,E.editorIframeDocument,"theme"),a(E.settings.theme.preview,E.previewerIframeDocument,"theme"),E.iframe.getElementById("epiceditor-wrapper").style.position="relative",E.editorIframe.style.position="absolute",E.previewerIframe.style.position="absolute",E.editor=E.editorIframeDocument.body,E.previewer=E.previewerIframeDocument.getElementById("epiceditor-preview"),E.editor.contentEditable=!0,E.iframe.body.style.height=this.element.offsetHeight+"px",E.previewerIframe.style.left="-999999px",this.editorIframeDocument.body.style.wordWrap="break-word",d()>-1)this.previewer.style.height=parseInt(r(this.previewer,"height"),10)+2;if(this.open(E.settings.file.name),E.settings.focusOnLoad)E.iframe.addEventListener("readystatechange",function(){if("complete"==E.iframe.readyState)E.focus()});if(E.previewerIframeDocument.addEventListener("click",function(t){var i=t.target,n=E.previewerIframeDocument.body;if("A"==i.nodeName)if(i.hash&&i.hostname==e.location.hostname)if(t.preventDefault(),i.target="_self",n.querySelector(i.hash))n.scrollTop=n.querySelector(i.hash).offsetTop}),m=E.iframe.getElementById("epiceditor-utilbar"),w={},E._goFullscreen=function(t){if(this._fixScrollbars("auto"),E.is("fullscreen"))return void E._exitFullscreen(t);if(D)if(L)t.webkitRequestFullScreen();else if(T)t.mozRequestFullScreen();else if(N)t.requestFullscreen();_=E.is("edit"),E._eeState.fullscreen=!0,E._eeState.edit=!0,E._eeState.preview=!0;var i=(e.innerWidth,e.innerHeight),n=e.outerWidth,o=e.outerHeight;if(!D)o=e.innerHeight;if(w.editorIframe=s(E.editorIframe,"save",{width:n/2+"px",height:o+"px","float":"left",cssFloat:"left",styleFloat:"left",display:"block",position:"static",left:""}),w.previewerIframe=s(E.previewerIframe,"save",{width:n/2+"px",height:o+"px","float":"right",cssFloat:"right",styleFloat:"right",display:"block",position:"static",left:""}),w.element=s(E.element,"save",{position:"fixed",top:"0",left:"0",width:"100%","z-index":"9999",zIndex:"9999",border:"none",margin:"0",background:r(E.editor,"background-color"),height:i+"px"}),w.iframeElement=s(E.iframeElement,"save",{width:n+"px",height:i+"px"}),m.style.visibility="hidden",!D)document.body.style.overflow="hidden";E.preview(),E.focus(),E.emit("fullscreenenter")},E._exitFullscreen=function(e){if(this._fixScrollbars(),s(E.element,"apply",w.element),s(E.iframeElement,"apply",w.iframeElement),s(E.editorIframe,"apply",w.editorIframe),s(E.previewerIframe,"apply",w.previewerIframe),E.element.style.width=E._eeState.reflowWidth?E._eeState.reflowWidth:"",E.element.style.height=E._eeState.reflowHeight?E._eeState.reflowHeight:"",m.style.visibility="visible",E._eeState.fullscreen=!1,!D)document.body.style.overflow="auto";else if(L)document.webkitCancelFullScreen();else if(T)document.mozCancelFullScreen();else if(N)document.exitFullscreen();if(_)E.edit();else E.preview();E.reflow(),E.emit("fullscreenexit")},E.editor.addEventListener("keyup",function(){if(y)e.clearTimeout(y);y=e.setTimeout(function(){if(E.is("fullscreen"))E.preview()},250)}),x=E.iframeElement,m.addEventListener("click",function(e){var t=e.target.className;if(t.indexOf("epiceditor-toggle-preview-btn")>-1)E.preview();else if(t.indexOf("epiceditor-toggle-edit-btn")>-1)E.edit();else if(t.indexOf("epiceditor-fullscreen-btn")>-1)E._goFullscreen(x)}),L)document.addEventListener("webkitfullscreenchange",function(){if(!document.webkitIsFullScreen&&E._eeState.fullscreen)E._exitFullscreen(x)},!1);else if(T)document.addEventListener("mozfullscreenchange",function(){if(!document.mozFullScreen&&E._eeState.fullscreen)E._exitFullscreen(x)},!1);else if(N)document.addEventListener("fullscreenchange",function(){if(null==document.fullscreenElement&&E._eeState.fullscreen)E._exitFullscreen(x)},!1);if(v=E.iframe.getElementById("epiceditor-utilbar"),E.settings.button.bar!==!0)v.style.display="none";for(v.addEventListener("mouseover",function(){if(b)clearTimeout(b)}),k=[E.previewerIframeDocument,E.editorIframeDocument],S=0;S<k.length;S++)k[S].addEventListener("mousemove",function(e){i(e)}),k[S].addEventListener("scroll",function(e){i(e)}),k[S].addEventListener("keyup",function(e){l(e)}),k[S].addEventListener("keydown",function(e){o(e)}),k[S].addEventListener("paste",function(e){f(e)});if(E.settings.file.autoSave)E._saveIntervalTimer=e.setInterval(function(){if(E._canSave)E.save(!1,!0)},E.settings.file.autoSave);if(E.settings.textarea)E._setupTextareaSync();if(e.addEventListener("resize",function(){if(E.is("fullscreen"))n(E.iframeElement,{width:e.outerWidth+"px",height:e.innerHeight+"px"}),n(E.element,{height:e.innerHeight+"px"}),n(E.previewerIframe,{width:e.outerWidth/2+"px",height:e.innerHeight+"px"}),n(E.editorIframe,{width:e.outerWidth/2+"px",height:e.innerHeight+"px"});else if(!E.is("fullscreen"))E.reflow()}),E._eeState.loaded=!0,E._eeState.unloaded=!1,E.is("preview"))E.preview();else E.edit();if(E.iframe.close(),E._eeState.startup=!1,E.settings.autogrow)E._fixScrollbars(),I=function(){setTimeout(function(){E._autogrow()},1)},["keydown","keyup","paste","cut"].forEach(function(e){E.getElement("editor").addEventListener(e,I)}),E.on("__update",I),E.on("edit",function(){setTimeout(I,50)}),E.on("preview",function(){setTimeout(I,50)}),setTimeout(I,50),I();return t.call(this),this.emit("load"),this},y.prototype._setupTextareaSync=function(){var t,i=this,n=i.settings.file.name;if(i._textareaSaveTimer=e.setInterval(function(){if(i._canSave)i.save(!0)},100),t=function(){i._textareaElement.value=i.exportFile(n,"text",!0)||i.settings.file.defaultContent},"string"==typeof i.settings.textarea)i._textareaElement=document.getElementById(i.settings.textarea);else if("object"==typeof i.settings.textarea)i._textareaElement=i.settings.textarea;if(""!==i._textareaElement.value)i.importFile(n,i._textareaElement.value),i.save(!0);t(),i.on("__update",t)},y.prototype._focusExceptOnLoad=function(){var e=this;if(e._eeState.startup&&e.settings.focusOnLoad||!e._eeState.startup)e.focus()},y.prototype.unload=function(t){if(this.is("unloaded"))throw new Error("Editor isn't loaded");var i=this,n=e.parent.document.getElementById(i._instanceId);if(n.parentNode.removeChild(n),i._eeState.loaded=!1,i._eeState.unloaded=!0,t=t||function(){},i.settings.textarea)i._textareaElement.value="",i.removeListener("__update");if(i._saveIntervalTimer)e.clearInterval(i._saveIntervalTimer);if(i._textareaSaveTimer)e.clearInterval(i._textareaSaveTimer);return t.call(this),i.emit("unload"),i},y.prototype.reflow=function(e,t){var i,n,r=this,s=o(r.element)-r.element.offsetWidth,a=l(r.element)-r.element.offsetHeight,f=[r.iframeElement,r.editorIframe,r.previewerIframe],u={};if("function"==typeof e)t=e,e=null;if(!t)t=function(){};for(var c=0;c<f.length;c++){if(!e||"width"==e)i=r.element.offsetWidth-s+"px",f[c].style.width=i,r._eeState.reflowWidth=i,u.width=i;if(!e||"height"==e)n=r.element.offsetHeight-a+"px",f[c].style.height=n,r._eeState.reflowHeight=n,u.height=n}return r.emit("reflow",u),t.call(this,u),r},y.prototype.preview=function(){var e=this,t=e.settings.theme.preview;if(f(e.getElement("wrapper"),"epiceditor-edit-mode","epiceditor-preview-mode"),!e.previewerIframeDocument.getElementById("theme"))a(t,e.previewerIframeDocument,"theme");else if(e.previewerIframeDocument.getElementById("theme").name!==t)e.previewerIframeDocument.getElementById("theme").href=t;if(e.save(!0),e.previewer.innerHTML=e.exportFile(null,"html",!0),!e.is("fullscreen"))e.editorIframe.style.left="-999999px",e.previewerIframe.style.left="",e._eeState.preview=!0,e._eeState.edit=!1,e._focusExceptOnLoad();return e.emit("preview"),e},y.prototype.focus=function(e){var t=this,i=t.is("preview"),n=i?t.previewerIframeDocument.body:t.editorIframeDocument.body;if(m()&&i)n=t.previewerIframe;return n.focus(),this},y.prototype.enterFullscreen=function(){if(this.is("fullscreen"))return this;else return this._goFullscreen(this.iframeElement),this},y.prototype.exitFullscreen=function(){if(!this.is("fullscreen"))return this;else return this._exitFullscreen(this.iframeElement),this},y.prototype.edit=function(){var e=this;return f(e.getElement("wrapper"),"epiceditor-preview-mode","epiceditor-edit-mode"),e._eeState.preview=!1,e._eeState.edit=!0,e.editorIframe.style.left="",e.previewerIframe.style.left="-999999px",e._focusExceptOnLoad(),e.emit("edit"),this},y.prototype.getElement=function(e){var t={container:this.element,wrapper:this.iframe.getElementById("epiceditor-wrapper"),wrapperIframe:this.iframeElement,editor:this.editorIframeDocument,editorIframe:this.editorIframe,previewer:this.previewerIframeDocument,previewerIframe:this.previewerIframe};if(!t[e]||this.is("unloaded"))return null;else return t[e]},y.prototype.is=function(e){var t=this;switch(e){case"loaded":return t._eeState.loaded;case"unloaded":return t._eeState.unloaded;case"preview":return t._eeState.preview;case"edit":return t._eeState.edit;case"fullscreen":return t._eeState.fullscreen;default:return!1}},y.prototype.open=function(e){var i,n=this,r=n.settings.file.defaultContent;if(e=e||n.settings.file.name,n.settings.file.name=e,this._storage[n.settings.localStorageName]){if(i=n.exportFile(e),i!==t)p(n.editor,i),n.emit("read");else p(n.editor,r),n.save(),n.emit("create");n.previewer.innerHTML=n.exportFile(null,"html"),n.emit("open")}return this},y.prototype.save=function(e,i){var n,r=this,s=!1,o=r.settings.file.name,l="",a=this._storage[l+r.settings.localStorageName],f=c(this.editor);if(e)l=r._previewDraftLocation;if(this._canSave=!0,a){if(n=JSON.parse(this._storage[l+r.settings.localStorageName]),n[o]===t)n[o]=r._defaultFileSchema();else if(f!==n[o].content)n[o].modified=new Date,s=!0;else if(i)return;if(n[o].content=f,this._storage[l+r.settings.localStorageName]=JSON.stringify(n),s)r.emit("update"),r.emit("__update");if(i)this.emit("autosave");else if(!e)this.emit("save")}return this},y.prototype.remove=function(e){var t,i=this;if(e=e||i.settings.file.name,e==i.settings.file.name)i._canSave=!1;return t=JSON.parse(this._storage[i.settings.localStorageName]),delete t[e],this._storage[i.settings.localStorageName]=JSON.stringify(t),this.emit("remove"),this},y.prototype.rename=function(e,t){var i=this,n=JSON.parse(this._storage[i.settings.localStorageName]);return n[t]=n[e],delete n[e],this._storage[i.settings.localStorageName]=JSON.stringify(n),i.open(t),this},y.prototype.importFile=function(e,i,n,r){var s=this,o=!1;if(e=e||s.settings.file.name,i=i||"",n=n||"md",r=r||{},JSON.parse(this._storage[s.settings.localStorageName])[e]===t)o=!0;if(s.settings.file.name=e,p(s.editor,i),o)s.emit("create");if(s.save(),s.is("fullscreen"))s.preview();if(s.settings.autogrow)setTimeout(function(){s._autogrow()},50);return this},y.prototype._getFileStore=function(e,t){var i,n="";if(t)n=this._previewDraftLocation;if(i=JSON.parse(this._storage[n+this.settings.localStorageName]),e)return i[e];else return i},y.prototype.exportFile=function(e,i,n){var r,s,o=this;if(e=e||o.settings.file.name,i=i||"text",r=o._getFileStore(e,n),r!==t)switch(s=r.content,i){case"html":return s=h(s),o.settings.parser(s);case"text":return h(s);case"json":return r.content=h(r.content),JSON.stringify(r);case"raw":return s;default:return s}},y.prototype.getFiles=function(e,i){var n,r=this._getFileStore(e);if(e){if(r!==t)if(i)delete r.content;else r.content=h(r.content);return r}else{for(n in r)if(r.hasOwnProperty(n))if(i)delete r[n].content;else r[n].content=h(r[n].content);return r}},y.prototype.on=function(e,t){var i=this;if(!this.events[e])this.events[e]=[];return this.events[e].push(t),i},y.prototype.emit=function(e,t){function i(e){e.call(r,t)}var n,r=this;if(t=t||r.getFiles(r.settings.file.name),this.events[e]){for(n=0;n<r.events[e].length;n++)i(r.events[e][n]);return r}},y.prototype.removeListener=function(e,t){var i=this;if(!t)return this.events[e]=[],i;if(!this.events[e])return i;else return this.events[e].splice(this.events[e].indexOf(t),1),i},y.prototype._autogrow=function(){var t,i,n,r,s,o=!1;if(!this.is("fullscreen")){if(this.is("edit"))s=this.getElement("editor").documentElement;else s=this.getElement("previewer").documentElement;if(t=l(s),i=t,n=this.settings.autogrow.minHeight,"function"==typeof n)n=n(this);if(n&&n>i)i=n;if(r=this.settings.autogrow.maxHeight,"function"==typeof r)r=r(this);if(r&&i>r)i=r,o=!0;if(o)this._fixScrollbars("auto");else this._fixScrollbars("hidden");if(i!=this.oldHeight){if(this.getElement("container").style.height=i+"px",this.reflow(),this.settings.autogrow.scroll)e.scrollBy(0,i-this.oldHeight);this.oldHeight=i}}},y.prototype._fixScrollbars=function(e){var t;if(this.settings.autogrow)t="hidden";else t="auto";t=e||t,this.getElement("editor").documentElement.style.overflow=t,this.getElement("previewer").documentElement.style.overflow=t},y.version="0.2.2",y._data={},e.EpicEditor=y}(window),function(){function e(e){if(this.tokens=[],this.tokens.links={},this.options=e||l.defaults,this.rules=a.normal,this.options.gfm)if(this.options.tables)this.rules=a.tables;else this.rules=a.gfm}function t(e,t){if(this.options=t||l.defaults,this.links=e,this.rules=f.normal,!this.links)throw new Error("Tokens array requires a `links` property.");if(this.options.gfm)if(this.options.breaks)this.rules=f.breaks;else this.rules=f.gfm;else if(this.options.pedantic)this.rules=f.pedantic}function i(e){this.tokens=[],this.token=null,this.options=e||l.defaults}function n(e,t){return e.replace(!t?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function r(e,t){return e=e.source,t=t||"",function i(n,r){if(!n)return new RegExp(e,t);else return r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(n,r),i}}function s(){}function o(e){for(var t,i,n=1;n<arguments.length;n++){t=arguments[n];for(i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e}function l(t,n){try{return i.parse(e.lex(t,n),n)}catch(r){if(r.message+="\nPlease report this to https://github.com/chjj/marked.",(n||l.defaults).silent)return"An error occured:\n"+r.message;throw r}}var a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:s,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:s,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:s,paragraph:/^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,text:/^[^\n]+/};a.bullet=/(?:[*+-]|\d+\.)/,a.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,a.item=r(a.item,"gm")(/bull/g,a.bullet)(),a.list=r(a.list)(/bull/g,a.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),a._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b",a.html=r(a.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,a._tag)(),a.paragraph=r(a.paragraph)("hr",a.hr)("heading",a.heading)("lheading",a.lheading)("blockquote",a.blockquote)("tag","<"+a._tag)("def",a.def)(),a.normal=o({},a),a.gfm=o({},a.normal,{fences:/^ *(`{3,}|~{3,}) *(\w+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),a.gfm.paragraph=r(a.paragraph)("(?!","(?!"+a.gfm.fences.source.replace("\\1","\\2")+"|")(),a.tables=o({},a.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=a,e.lex=function(t,i){var n=new e(i);return n.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t){for(var i,n,r,s,o,l,a,e=e.replace(/^ +$/gm,"");e;){if(r=this.rules.newline.exec(e))if(e=e.substring(r[0].length),r[0].length>1)this.tokens.push({type:"space"});if(!(r=this.rules.code.exec(e)))if(!(r=this.rules.fences.exec(e)))if(!(r=this.rules.heading.exec(e)))if(!t||!(r=this.rules.nptable.exec(e)))if(!(r=this.rules.lheading.exec(e)))if(!(r=this.rules.hr.exec(e)))if(!(r=this.rules.blockquote.exec(e)))if(!(r=this.rules.list.exec(e)))if(!(r=this.rules.html.exec(e)))if(!t||!(r=this.rules.def.exec(e)))if(!t||!(r=this.rules.table.exec(e)))if(!t||!(r=this.rules.paragraph.exec(e)))if(!(r=this.rules.text.exec(e))){if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:r[0]});else{for(e=e.substring(r[0].length),s={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")},l=0;l<s.align.length;l++)if(/^ *-+: *$/.test(s.align[l]))s.align[l]="right";else if(/^ *:-+: *$/.test(s.align[l]))s.align[l]="center";else if(/^ *:-+ *$/.test(s.align[l]))s.align[l]="left";else s.align[l]=null;for(l=0;l<s.cells.length;l++)s.cells[l]=s.cells[l].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(s)}else e=e.substring(r[0].length),this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===r[1],text:r[0]});else{for(e=e.substring(r[0].length),this.tokens.push({type:"list_start",ordered:isFinite(r[2])}),r=r[0].match(this.rules.item),i=!1,a=r.length,l=0;a>l;l++){if(s=r[l],o=s.length,s=s.replace(/^ *([*+-]|\d+\.) +/,""),~s.indexOf("\n "))o-=s.length,s=!this.options.pedantic?s.replace(new RegExp("^ {1,"+o+"}","gm"),""):s.replace(/^ {1,4}/gm,"");if(n=i||/\n\n(?!\s*$)/.test(s),l!==a-1)if(i="\n"===s[s.length-1],!n)n=i;this.tokens.push({type:n?"loose_item_start":"list_item_start"}),this.token(s,!1),this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"})}else e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t),this.tokens.push({type:"blockquote_end"});else e=e.substring(r[0].length),this.tokens.push({type:"hr"});else e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2]?1:2,text:r[1]});else{for(e=e.substring(r[0].length),s={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")},l=0;l<s.align.length;l++)if(/^ *-+: *$/.test(s.align[l]))s.align[l]="right";else if(/^ *:-+: *$/.test(s.align[l]))s.align[l]="center";else if(/^ *:-+ *$/.test(s.align[l]))s.align[l]="left";else s.align[l]=null;for(l=0;l<s.cells.length;l++)s.cells[l]=s.cells[l].split(/ *\| */);this.tokens.push(s)}else e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2],text:r[3]});else e=e.substring(r[0].length),r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:!this.options.pedantic?r.replace(/\n+$/,""):r})}return this.tokens};var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>|])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:s,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:s,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};if(f._inside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,f._href=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,f.link=r(f.link)("inside",f._inside)("href",f._href)(),f.reflink=r(f.reflink)("inside",f._inside)(),f.normal=o({},f),f.pedantic=o({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=o({},f.normal,{escape:r(f.escape)("])","~])")(),url:/^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,del:/^~{2,}([\s\S]+?)~{2,}/,text:r(f.text)("]|","~]|")("|","|https?://|")()}),f.breaks=o({},f.gfm,{br:r(f.br)("{2,}","*")(),text:r(f.gfm.text)("{2,}","*")()}),t.rules=f,t.output=function(e,i,n){var r=new t(i,n);return r.output(e)},t.prototype.output=function(e){for(var t,i,r,s,o="";e;)if(!(s=this.rules.escape.exec(e)))if(!(s=this.rules.autolink.exec(e)))if(!(s=this.rules.url.exec(e)))if(!(s=this.rules.tag.exec(e)))if(!(s=this.rules.link.exec(e)))if(!(s=this.rules.reflink.exec(e))&&!(s=this.rules.nolink.exec(e)))if(!(s=this.rules.strong.exec(e)))if(!(s=this.rules.em.exec(e)))if(!(s=this.rules.code.exec(e)))if(!(s=this.rules.br.exec(e)))if(!(s=this.rules.del.exec(e)))if(!(s=this.rules.text.exec(e))){if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),o+=n(s[0]);else e=e.substring(s[0].length),o+="<del>"+this.output(s[1])+"</del>";else e=e.substring(s[0].length),o+="<br>";else e=e.substring(s[0].length),o+="<code>"+n(s[2],!0)+"</code>";else e=e.substring(s[0].length),o+="<em>"+this.output(s[2]||s[1])+"</em>";else e=e.substring(s[0].length),o+="<strong>"+this.output(s[2]||s[1])+"</strong>";else{if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){o+=s[0][0],e=s[0].substring(1)+e;continue}o+=this.outputLink(s,t)}else e=e.substring(s[0].length),o+=this.outputLink(s,{href:s[2],title:s[3]});else e=e.substring(s[0].length),o+=this.options.sanitize?n(s[0]):s[0];else e=e.substring(s[0].length),i=n(s[1]),r=i,o+='<a href="'+r+'">'+i+"</a>";else{if(e=e.substring(s[0].length),"@"===s[2])i=":"===s[1][6]?this.mangle(s[1].substring(7)):this.mangle(s[1]),r=this.mangle("mailto:")+i;else i=n(s[1]),r=i;o+='<a href="'+r+'">'+i+"</a>"}else e=e.substring(s[0].length),o+=s[1];return o},t.prototype.outputLink=function(e,t){if("!"!==e[0][0])return'<a href="'+n(t.href)+'"'+(t.title?' title="'+n(t.title)+'"':"")+">"+this.output(e[1])+"</a>";else return'<img src="'+n(t.href)+'" alt="'+n(e[1])+'"'+(t.title?' title="'+n(t.title)+'"':"")+">"},t.prototype.mangle=function(e){for(var t,i="",n=e.length,r=0;n>r;r++){if(t=e.charCodeAt(r),Math.random()>.5)t="x"+t.toString(16);i+="&#"+t+";"}return i},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){this.inline=new t(e.links,this.options),this.tokens=e.reverse();for(var i="";this.next();)i+=this.tok();return i},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+this.token.depth+">"+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n";
case"code":if(this.options.highlight){var e=this.options.highlight(this.token.text,this.token.lang);if(null!=e&&e!==this.token.text)this.token.escaped=!0,this.token.text=e}if(!this.token.escaped)this.token.text=n(this.token.text,!0);return"<pre><code"+(this.token.lang?' class="lang-'+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n";case"table":var t,i,r,s,o,l="";for(l+="<thead>\n<tr>\n",i=0;i<this.token.header.length;i++)t=this.inline.output(this.token.header[i]),l+=this.token.align[i]?'<th align="'+this.token.align[i]+'">'+t+"</th>\n":"<th>"+t+"</th>\n";for(l+="</tr>\n</thead>\n",l+="<tbody>\n",i=0;i<this.token.cells.length;i++){for(r=this.token.cells[i],l+="<tr>\n",o=0;o<r.length;o++)s=this.inline.output(r[o]),l+=this.token.align[o]?'<td align="'+this.token.align[o]+'">'+s+"</td>\n":"<td>"+s+"</td>\n";l+="</tr>\n"}return l+="</tbody>\n","<table>\n"+l+"</table>\n";case"blockquote_start":for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();return"<blockquote>\n"+l+"</blockquote>\n";case"list_start":for(var a=this.token.ordered?"ol":"ul",l="";"list_end"!==this.next().type;)l+=this.tok();return"<"+a+">\n"+l+"</"+a+">\n";case"list_item_start":for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();return"<li>"+l+"</li>\n";case"loose_item_start":for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();return"<li>"+l+"</li>\n";case"html":return!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;case"paragraph":return"<p>"+this.inline.output(this.token.text)+"</p>\n";case"text":return"<p>"+this.parseText()+"</p>\n"}},s.exec=s,l.options=l.setOptions=function(e){return l.defaults=e,l},l.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,silent:!1,highlight:null},l.Parser=i,l.parser=i.parse,l.Lexer=e,l.lexer=e.lex,l.InlineLexer=t,l.inlineLexer=t.output,l.parse=l,"undefined"!=typeof module)module.exports=l;else if("function"==typeof define&&define.amd)define([],function(){return l});else this.marked=l}.call(function(){return this||("undefined"!=typeof window?window:global)}());