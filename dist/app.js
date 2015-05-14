"format register";System.register("templates/agent!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports='<h3>Client information</h3>\n<form [control-group]="form" (submit)="createTalk(form.value)" class="form-horizontal">\n    <div class="form-group">\n        <label class="col-sm-2 control-label">name</label>\n        <div class="col-sm-10">\n            <input type="text" class="form-control" control="title" placeholder="value"/>\n        </div>\n    </div>\n\n    <button class="btn btn-primary" type="submit">Create</button>\n\n</form>',n.define=r,e.exports}),System.register("npm:flux@2.0.1/lib/invariant",[],!0,function(require,t,e){var n=System.global,r=n.define;n.define=void 0;var s=function(t,e,n,r,s,i,o,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,s,i,o,a],l=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[l++]}))}throw c.framesToPop=1,c}};return e.exports=s,n.define=r,e.exports}),System.register("npm:keymirror@0.1.1/index",[],!0,function(require,t,e){var n=System.global,r=n.define;n.define=void 0;var s=function(t){var e,n={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(e in t)t.hasOwnProperty(e)&&(n[e]=e);return n};return e.exports=s,n.define=r,e.exports}),System.register("npm:events@1.0.2/events",[],!0,function(require,t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function s(t){return"number"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}var a=System.global,c=a.define;return a.define=void 0,e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!s(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,s,a,c,u;if(this._events||(this._events={}),"error"===t&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[t],o(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(s=arguments.length,a=new Array(s-1),c=1;s>c;c++)a[c-1]=arguments[c];n.apply(this,a)}else if(i(n)){for(s=arguments.length,a=new Array(s-1),c=1;s>c;c++)a[c-1]=arguments[c];for(u=n.slice(),s=u.length,c=0;s>c;c++)u[c].apply(this,a)}return!0},n.prototype.addListener=function(t,e){var s;if(!r(e))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?i(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,i(this._events[t])&&!this._events[t].warned){var s;s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[t].length>s&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),s||(s=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function");var s=!1;return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,s,o,a;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,s=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(i(n)){for(a=o;a-->0;)if(n[a]===e||n[a].listener&&n[a].listener===e){s=a;break}if(0>s)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(s,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.listenerCount=function(t,e){var n;return n=t._events&&t._events[e]?r(t._events[e])?1:t._events[e].length:0},a.define=c,e.exports}),System.register("npm:whatwg-fetch@0.7.0/fetch",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(){"use strict";function t(e){this.map={};var n=this;e instanceof t?e.forEach(function(t,e){e.forEach(function(e){n.append(t,e)})}):e&&Object.getOwnPropertyNames(e).forEach(function(t){n.append(t,e[t])})}function e(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function n(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function r(t){var e=new FileReader;return e.readAsArrayBuffer(t),n(e)}function s(t){var e=new FileReader;return e.readAsText(t),n(e)}function i(){return this.bodyUsed=!1,p.blob?(this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(p.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(p.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else{if(t)throw new Error("unsupported BodyInit type");this._bodyText=""}},this.blob=function(){var t=e(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(r)},this.text=function(){var t=e(this);if(t)return t;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):(this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(p.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else{if(t)throw new Error("unsupported BodyInit type");this._bodyText=""}},this.text=function(){var t=e(this);return t?t:Promise.resolve(this._bodyText)}),p.formData&&(this.formData=function(){return this.text().then(c)}),this.json=function(){return this.text().then(JSON.parse)},this}function o(t){var e=t.toUpperCase();return d.indexOf(e)>-1?e:t}function a(e,n){if(n=n||{},this.url=e,this.credentials=n.credentials||"omit",this.headers=new t(n.headers),this.method=o(n.method||"GET"),this.mode=n.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n.body)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n.body)}function c(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),s=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(s))}}),e}function u(e){var n=new t,r=e.getAllResponseHeaders().trim().split("\n");return r.forEach(function(t){var e=t.trim().split(":"),r=e.shift().trim(),s=e.join(":").trim();n.append(r,s)}),n}function l(t,e){e||(e={}),this._initBody(t),this.type="default",this.url=null,this.status=e.status,this.statusText=e.statusText,this.headers=e.headers,this.url=e.url||""}if(!self.fetch){t.prototype.append=function(t,e){t=t.toLowerCase();var n=this.map[t];n||(n=[],this.map[t]=n),n.push(e)},t.prototype["delete"]=function(t){delete this.map[t.toLowerCase()]},t.prototype.get=function(t){var e=this.map[t.toLowerCase()];return e?e[0]:null},t.prototype.getAll=function(t){return this.map[t.toLowerCase()]||[]},t.prototype.has=function(t){return this.map.hasOwnProperty(t.toLowerCase())},t.prototype.set=function(t,e){this.map[t.toLowerCase()]=[e]},t.prototype.forEach=function(t){var e=this;Object.getOwnPropertyNames(this.map).forEach(function(n){t(n,e.map[n])})};var p={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self},d=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];a.prototype.fetch=function(){var t=this;return new Promise(function(e,n){function r(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var s=new XMLHttpRequest;"cors"===t.credentials&&(s.withCredentials=!0),s.onload=function(){var t=1223===s.status?204:s.status;if(100>t||t>599)return void n(new TypeError("Network request failed"));var i={status:t,statusText:s.statusText,headers:u(s),url:r()},o="response"in s?s.response:s.responseText;e(new l(o,i))},s.onerror=function(){n(new TypeError("Network request failed"))},s.open(t.method,t.url,!0),"responseType"in s&&p.blob&&(s.responseType="blob"),t.headers.forEach(function(t,e){e.forEach(function(e){s.setRequestHeader(t,e)})}),s.send("undefined"==typeof t._bodyInit?null:t._bodyInit)})},i.call(a.prototype),i.call(l.prototype),self.Headers=t,self.Request=a,self.Response=l,self.fetch=function(t,e){return new a(t,e).fetch()},self.fetch.polyfill=!0}}(),n.define=r,e.exports}),System.register("templates/agents!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports='<table id="agent-list" class="table sortable">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>IP</th>\n            <th>Status</th>\n            <th>Actions</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *for="#agent of agents">\n            <td><strong>{{agent.name}}</strong></td>\n            <td>{{agent.ip}}</td>\n            <td>Running</td>\n            <td>\n                <div class="btn-group btn-group-xs" role="group" aria-label="Small button group">\n                    <button type="button" class="btn btn-primary" (click)="edit(agent.name)">Edit</button>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<rhino-agent></rhino-agent>',n.define=r,e.exports}),System.register("templates/groups!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports='<div id="group-list">\n{{greeting}}\n    <div *for="#group of groups">\n        <table class="table">\n            <tr>\n                <td><strong>{{group.name}}</strong></td>\n            </tr>\n            <tr>\n                <td>\n                    <table class="table sortable">\n                        <tbody>\n                            <tr *for="#agent of group.agents">\n                                <td><strong>{{agent.name}}</strong></td>\n                                <td>{{agent.ip}}</td>\n                                <td>Running</td>\n                                <td>\n                                    <div class="btn-group btn-group-xs" role="group" aria-label="Small button group">\n                                        <button type="button" class="btn btn-primary">Edit</button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>',n.define=r,e.exports}),System.register("templates/modal!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports='<div class="modal fade">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                <h4 class="modal-title">{{modal.title}}</h4>\n            </div>\n            <div class="modal-body">\n                <p>{{modal.body}}</p>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                <button type="button" class="btn btn-primary" (click)="save()">Save</button>\n            </div>\n        </div>\n    </div>\n</div>',n.define=r,e.exports}),System.register("templates/app!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports='<header>\n    <h1 class="logo"><span class="icon-logo"></span></h1>\n</header>\n<div class="container">\n    <div class="col-sm-6">\n        <div class="panel panel-primary">\n            <div class="panel-heading">\n                <h3 class="panel-title">Agents</h3>\n            </div>\n            <rhino-agents><div class="text-center"><img src="src/img/loader.svg"></div></rhino-agents>\n        </div>\n    </div>\n\n    <div class="col-sm-6">\n        <div class="panel panel-primary">\n            <div class="panel-heading">\n                <h3 class="panel-title">Groups</h3>\n            </div>\n            <rhino-group><div class="text-center"><img src="src/img/loader.svg"></div></rhino-group>\n        </div>\n    </div>\n</div>\n<bootstrap-modal></bootstrap-modal>',n.define=r,e.exports}),System.register("npm:flux@2.0.1/lib/Dispatcher",["npm:flux@2.0.1/lib/invariant"],!0,function(require,t,e){function n(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var r=System.global,s=r.define;r.define=void 0;var i=require("npm:flux@2.0.1/lib/invariant"),o=1,a="ID_";return n.prototype.register=function(t){var e=a+o++;return this.$Dispatcher_callbacks[e]=t,e},n.prototype.unregister=function(t){i(this.$Dispatcher_callbacks[t],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this.$Dispatcher_callbacks[t]},n.prototype.waitFor=function(t){i(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];this.$Dispatcher_isPending[n]?i(this.$Dispatcher_isHandled[n],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(i(this.$Dispatcher_callbacks[n],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this.$Dispatcher_invokeCallback(n))}},n.prototype.dispatch=function(t){i(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(t);try{for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]||this.$Dispatcher_invokeCallback(e)}finally{this.$Dispatcher_stopDispatching()}},n.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},n.prototype.$Dispatcher_invokeCallback=function(t){this.$Dispatcher_isPending[t]=!0,this.$Dispatcher_callbacks[t](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[t]=!0},n.prototype.$Dispatcher_startDispatching=function(t){for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]=!1,this.$Dispatcher_isHandled[e]=!1;this.$Dispatcher_pendingPayload=t,this.$Dispatcher_isDispatching=!0},n.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},e.exports=n,r.define=s,e.exports}),System.register("npm:keymirror@0.1.1",["npm:keymirror@0.1.1/index"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("npm:keymirror@0.1.1/index"),n.define=r,e.exports}),System.register("npm:events@1.0.2",["npm:events@1.0.2/events"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("npm:events@1.0.2/events"),n.define=r,e.exports}),System.register("npm:whatwg-fetch@0.7.0",["npm:whatwg-fetch@0.7.0/fetch"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("npm:whatwg-fetch@0.7.0/fetch"),n.define=r,e.exports}),System.register("npm:flux@2.0.1/index",["npm:flux@2.0.1/lib/Dispatcher"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports.Dispatcher=require("npm:flux@2.0.1/lib/Dispatcher"),n.define=r,e.exports}),System.register("npm:flux@2.0.1",["npm:flux@2.0.1/index"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("npm:flux@2.0.1/index"),n.define=r,e.exports}),System.register("services/sortable-service",[],function(t){"use strict";var e;return{setters:[],execute:function(){e=t("SortableService",function(){var t=function(){this.options={group:"drop",containerSelector:"table",itemPath:"> tbody",itemSelector:"tr",placeholder:'<tr class="placeholder"><td colspan="4"></td></tr>',onDragStart:function(t,e,n,r){t.css({height:t.outerHeight(!0),width:t.outerWidth(!0)}),t.addClass("dragged"),$("body").addClass("dragging")},onDrop:function(t,e,n,r){t.removeClass("dragged").removeAttr("style"),$("body").removeClass("dragging")}}};return $traceurRuntime.createClass(t,{sortable:function(t){var e=this,n=t.domElement,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,s=new r(function(t){$(n).find(".sortable").sortable(e.options)});return s.observe(n,{childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0}),this}},{})}())}}}),System.register("services/modal-service",[],function(t){"use strict";var e;return{setters:[],execute:function(){e=t("ModalService",function(){var t=function(){this.data={title:null,body:null}};return $traceurRuntime.createClass(t,{open:function(t){var e=$("bootstrap-modal").find(".modal"),n=e.find(".modal-body"),r=e.find(".modal-title");this.data=$.extend({},this.data,t),r.html(this.data.title),n.html(this.data.body),e.modal("show")}},{})}())}}}),System.register("services/agent-service",[],function(t){"use strict";var e;return{setters:[],execute:function(){e=t("AgentService",function(){var t=function(){};return $traceurRuntime.createClass(t,{getConnectedAgent:function(t){$.ajax({url:"mock/response/get_connected_agents.json",command:"get_connected_agents",success:t})}},{})}())}}}),System.register("constants/agent-constans",["npm:keymirror@0.1.1"],function(t){"use strict";var e,n;return{setters:[function(t){e=t["default"]}],execute:function(){n=t("constants",e({AGENT_CREATE:null,AGENT_CREATED:null,AGENT_UPDATE:null,AGENT_UPDATED:null,AGENT_DELETE:null,AGENT_DELETED:null,AGENT_EDIT:null,AGENT_EDITED:null,AGENT_SYNC:null}))}}}),System.register("utils/register",[],function(t){"use strict";return{setters:[],execute:function(){t("default",function(){var t=function(t){this._defaultValue=t,this._values=Object.create(null)};return $traceurRuntime.createClass(t,{register:function(t,e){this._values[t]=e},getValue:function(t){var e;return e=Object.prototype.hasOwnProperty.call(this._values,t)?this._values[t]:this._defaultValue}},{})}())}}}),System.register("services/groups-service",[],function(t){"use strict";var e;return{setters:[],execute:function(){e=t("GroupsService",function(){var t=function(){this.list=[]};return $traceurRuntime.createClass(t,{getGroups:function(t){$.ajax({url:"mock/response/get_groups.json",command:"get_groups",success:t})}},{})}())}}}),System.register("components/agent",["angular2/angular2","services/agent-service","templates/agent!github:systemjs/plugin-text@0.0.2"],function(t){"use strict";var e,n,r,s,i,o,a,c,u,l,p,d,f;return{setters:[function(t){e=t.Component,n=t.Decorator,r=t.View,s=t.If,i=t.For,o=t.EventEmitter,a=t.FormBuilder,c=t.Validators,u=t.FormDirectives,l=t.ControlGroup},function(t){p=t.AgentService},function(t){d=t["default"]}],execute:function(){f=t("Agent",function(){var t=function(t,e){this.builder=t,this.form=t.group({title:["Client name",c.required],description:"",isDraft:[!1,c.required]})};return $traceurRuntime.createClass(t,{},{})}()),Object.defineProperty(f,"annotations",{get:function(){return[new e({selector:"rhino-agent",properties:{agent:"agent"},injectables:[a,p]}),new r({template:d,directives:[u,i,s]})]}}),Object.defineProperty(f,"parameters",{get:function(){return[[a],[p]]}})}}}),System.register("components/groups",["angular2/angular2","services/groups-service","services/sortable-service","templates/groups!github:systemjs/plugin-text@0.0.2"],function(t){"use strict";var e,n,r,s,i,o,a,c;return{setters:[function(t){e=t.Component,n=t.View,r=t.For,s=t.NgElement},function(t){i=t.GroupsService},function(t){o=t.SortableService},function(t){a=t["default"]}],execute:function(){c=t("Groups",function(){var t=function(t,e,n){this.groups=[],this.groupsService=t,this.sortableService=e.sortable(n),this.getGroups()};return $traceurRuntime.createClass(t,{getGroups:function(){var t=this;this.groupsService.getGroups(function(e){t.groups=e.groups,t.command=e.command})},listGroups:function(){console.log(this.groups)}},{})}()),Object.defineProperty(c,"annotations",{get:function(){return[new e({selector:"rhino-group",injectables:[i,o]}),new n({template:a,directives:[r]})]}}),Object.defineProperty(c,"parameters",{get:function(){return[[i],[o],[s]]}})}}}),System.register("components/modal",["angular2/angular2","templates/modal!github:systemjs/plugin-text@0.0.2"],function(t){"use strict";var e,n,r,s,i,o;return{setters:[function(t){e=t.Component,n=t.View,r=t.For,s=t.NgElement},function(t){i=t["default"]}],execute:function(){o=t("Modal",function(){var t=function(t){this.modal={},this.element=t};return $traceurRuntime.createClass(t,{save:function(){var t=$(this.element.domElement).find("form:first");t&&t.submit()}},{})}()),Object.defineProperty(o,"annotations",{get:function(){return[new e({selector:"bootstrap-modal",injectables:[]}),new n({template:i,directives:[r]})]}}),Object.defineProperty(o,"parameters",{get:function(){return[[s]]}})}}}),System.register("constants/payload-constants",["npm:keymirror@0.1.1"],function(t){"use strict";var e,n;return{setters:[function(t){e=t["default"]}],execute:function(){n=t("constants",e({SERVER_ACTION:null,VIEW_ACTION:null}))}}}),System.register("utils/request",["npm:whatwg-fetch@0.7.0"],function(t){"use strict";function e(t,e){window.fetch(r,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify("string"==typeof t?{command:t}:t)}).then(function(t){if(t.status>=400)throw new Error(t.statusText);return t.json()}).then(function(t){e(t||{})})}var n,r;return{setters:[function(t){n=t["default"]}],execute:function(){r="/api",t("request",e)}}}),System.register("actions/agent-actions",["dispatcher/dispatcher","constants/agent-constans","utils/request"],function(t){"use strict";var e,n,r,s;return{setters:[function(t){e=t.dispatcher},function(t){n=t.constants},function(t){r=t.request}],execute:function(){s=t("agentActions",{sync:function(){r("get_connected_agents",function(t){e.dispatch({type:n.AGENT_SYNC,data:t.agents})})},create:function(t){e.dispatch({type:n.AGENT_CREATE,data:t})},update:function(t){e.dispatch({type:n.AGENT_UPDATE,data:t})},getClientInfo:function(t){r({command:"client_info",agent_name:t},function(t){console.log(t)})},"delete":function(t){e.dispatch({type:n.AGENT_DELETE,name:t})}})}}}),System.register("dispatcher/dispatcher",["npm:flux@2.0.1","constants/payload-constants"],function(t){"use strict";var e,n,r,s;return{setters:[function(t){e=t["default"]},function(t){n=t.constants}],execute:function(){r=function(t){var e=function r(){$traceurRuntime.superConstructor(r).call(this)};return $traceurRuntime.createClass(e,{handleServerAction:function(t){if(!t.type)throw new Error("Empty action.type: you likely mistyped the action.");this.dispatch({source:n.SERVER_ACTION,action:t})},handleViewAction:function(t){if(!t.type)throw new Error("Empty action.type: you likely mistyped the action.");this.dispatch({source:n.VIEW_ACTION,action:t})}},{},t)}(e.Dispatcher),s=t("dispatcher",new r)}}}),System.register("stores/agent-store",["dispatcher/dispatcher","constants/agent-constans","npm:events@1.0.2","utils/register"],function(t){"use strict";function e(t){l.push(t)}function n(t){l=t}function r(t){for(var e=0;e<l.length;e++)if(l[e].name=_agent.name){l[e]=agents;break}}function s(t){l.filter(function(e){return e.name!==t.name})}var i,o,a,c,u,l,p,d;return{setters:[function(t){i=t.dispatcher},function(t){o=t.constants},function(t){a=t["default"]},function(t){c=t["default"]}],execute:function(){u="change",l=[],p=t("AgentStore",function(t){var a=function p(){$traceurRuntime.superConstructor(p).call(this),this.register=new c,this.registerDispatcher()};return $traceurRuntime.createClass(a,{getAll:function(){return l},getAgentByName:function(t){return this.filter(function(e){return e.name===t})[0]},emitChange:function(){this.emit(u)},addChangeListener:function(t,e){this.on(u,t,e)},removeChangeListener:function(t){this.removeListener(u,t)},registerDispatcher:function(){var t=this;i.register(function(i){var a=i.data;t.register.register(o.AGENT_SYNC,n),t.register.register(o.AGENT_CREATE,e),t.register.register(o.AGENT_UPDATE,r),t.register.register(o.AGENT_DELETE,s),t.register.getValue(i.type)(a),t.emitChange()})}},{},t)}(a)),d=t("agentStore",new p)}}}),System.register("components/agents",["angular2/angular2","services/sortable-service","services/modal-service","components/agent","stores/agent-store","actions/agent-actions","templates/agents!github:systemjs/plugin-text@0.0.2"],function(t){"use strict";var e,n,r,s,i,o,a,c,u,l,p,d;return{setters:[function(t){e=t.Component,n=t.View,r=t.For,s=t.NgElement,i=t.bootstrap},function(t){o=t.SortableService},function(t){a=t.ModalService},function(t){c=t.Agent},function(t){u=t.agentStore},function(t){l=t.agentActions},function(t){p=t["default"]}],execute:function(){d=t("Agents",function(){var t=function(t,e,n){this.agentStore=u,this.agentActions=l,this.sortableService=t,this.modalService=e,this.agents=this.agentStore.getAll(),this.sortableService.sortable(n),this.agentActions.sync(),this.agentStore.addChangeListener(this.onChange.bind(this))};return $traceurRuntime.createClass(t,{onChange:function(){this.agents=this.agentStore.getAll()},edit:function(t){this.agentActions.getClientInfo(t)},listConnectedAgent:function(){console.log(this.agents)}},{})}()),Object.defineProperty(d,"annotations",{get:function(){return[new e({selector:"rhino-agents",injectables:[o,a]}),new n({template:p,directives:[r,c]})]}}),Object.defineProperty(d,"parameters",{get:function(){return[[o],[a],[s]]}})}}}),System.register("components/app",["angular2/angular2","components/agents","components/groups","components/modal","templates/app!github:systemjs/plugin-text@0.0.2"],function(t){"use strict";var e,n,r,s,i,o,a,c;return{setters:[function(t){e=t.Component,n=t.View,r=t.For},function(t){s=t.Agents},function(t){i=t.Groups},function(t){o=t.Modal},function(t){a=t["default"]}],execute:function(){c=t("App",function(){var t=function(){console.log("App started... :)")};return $traceurRuntime.createClass(t,{},{})}()),Object.defineProperty(c,"annotations",{get:function(){return[new e({selector:"rhino-app"}),new n({template:a,directives:[s,i,o]})]}})}}}),System.register("main",["angular2/angular2","components/app"],function(t){"use strict";var e,n;return{setters:[function(t){e=t.bootstrap},function(t){n=t.App}],execute:function(){e(n)}}});
//# sourceMappingURL=app.js.map