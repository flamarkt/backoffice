(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e),t.d(e,{app:()=>yt,backoffice:()=>qt,common:()=>Tt});var n={};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}t.r(n),t.d(n,{Page:()=>U,default:()=>O});const s=flarum.core.compat["common/Application"];var i=t.n(s);const c=flarum.core.compat["common/components/Navigation"];var u=t.n(c);const l=flarum.core.compat["common/Component"];var d=t.n(l);const h=flarum.core.compat["common/utils/ItemList"];var f=t.n(h);const p=flarum.core.compat["common/helpers/listItems"];var v=t.n(p),g=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.view=function(){return m("ul.Header-controls",v()(this.items().toArray()))},n.items=function(){return new(f())},e}(d());const w=flarum.core.compat["common/components/LinkButton"];var b=t.n(w);const y=flarum.core.compat["admin/components/SessionDropdown"];var k=t.n(y),S=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.view=function(){return m("ul.Header-controls",v()(this.items().toArray()))},n.items=function(){var t=new(f());return t.add("help",b().component({href:"https://docs.flarum.org/troubleshoot",icon:"fas fa-question-circle",external:!0},yt.translator.trans("core.admin.header.get_help"))),t.add("session",k().component()),t},e}(d());const x=flarum.core.compat["admin/components/AdminNav"];var I=t.n(x);const A=flarum.core.compat["admin/components/ExtensionLinkButton"];var D=t.n(A);const R=flarum.core.compat["common/app"];var F=t.n(R),C=function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e.isActive=function(t){return m.route.get()===t.href||e.activeRoutes(t).some((function(t){var e=F().current.data.routeName;if(!e)return!1;var n=t.indexOf("*");return-1!==n?0===e.indexOf(t.substr(0,n)):e===t}))},e.activeRoutes=function(t){return t.activeRoutes?t.activeRoutes:[]},e}(b()),P=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).query="",e}a(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.query=""},n.items=function(){var t=this,e=new(f());return e.add("dashboard",b().component({href:yt.route("dashboard"),icon:"far fa-chart-bar"},yt.translator.trans("flamarkt-backoffice.backoffice.nav.dashboard")),80),yt.forum.attribute("canSearchUsers")&&e.add("users",C.component({href:yt.route("users.index"),icon:"fas fa-user",activeRoutes:["users.*"]},yt.translator.trans("flamarkt-backoffice.backoffice.nav.users")),60),e.add("search",m(".Search-input",m("input.FormControl.SearchBar",{type:"search",value:this.query,oninput:function(e){t.query=e.target.value},placeholder:yt.translator.trans("flamarkt-backoffice.backoffice.nav.searchPlaceholder")})),-10),e},n.extensions=function(){var t=[];return Object.keys(yt.data.extensions).forEach((function(e){var n=yt.data.extensions[e];n.extra["flamarkt-backoffice"]&&n.extra["flamarkt-backoffice"].showInBackoffice&&t.push(n)})),t},n.extensionItems=function(){var t=this,e=new(f());return this.extensions().map((function(n){var r=t.query.toUpperCase(),o=n.extra["flarum-extension"].title;(!r||o.toUpperCase().includes(r)||n.description.toUpperCase().includes(r))&&e.add("extension-"+n.id,D().component({href:yt.route("extension",{id:n.id}),extensionId:n.id,className:"ExtensionNavButton",title:n.description},o))})),e},e}(I());const E=flarum.core.compat["common/components/Page"];var N=t.n(E),L=function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e.prototype.view=function(){return m(".DashboardPage",m(".container",m(".DashboardWip",[m("h1","Flamarkt Backoffice"),m("p","This special admin panel gives extensions a new place for moderation tools."),m("p","It's still a work in progress. This space will accept widgets just like Flarum's admin in a future version."),b().component({className:"Button",href:"https://github.com/flamarkt/backoffice",external:!0},"Learn more on GitHub")])))},e}(N());const T=flarum.core.compat["common/utils/extractText"];var B=t.n(T),U=function(t,e,n){void 0===n&&(n={}),this.number=void 0,this.items=void 0,this.links=void 0,this.number=t,this.items=e,this.links=n||{}},O=function(){function t(t){void 0===t&&(t={}),this.params={},this.pages=[],this.loading=!0,this.moreResults=!1,this.params=t}var e=t.prototype;return e.type=function(){return""},e.limit=function(){return 20},e.requestParams=function(){var t={filter:this.params.filter||{}};return this.params.sort&&(t.sort=this.params.sort),this.params.include&&(t.include=this.params.include),this.params.q&&(t.filter.q=this.params.q),t},e.clear=function(){this.pages=[],m.redraw()},e.refresh=function(t){var e=this,n=(void 0===t?{}:t).deferClear,r=void 0!==n&&n;return this.loading=!0,r||this.clear(),this.loadResults(0).then((function(t){e.pages=[],e.parseResults(t,0)}),(function(){e.loading=!1,m.redraw()}))},e.loadResults=function(t){var e=F().preloadedApiDocument();if(e)return Promise.resolve(e);var n=this.requestParams();return n.page={offset:t},F().store.find(this.type(),n)},e.loadMore=function(){var t=this;this.loading=!0;var e=this.pages.length;this.loadResults(e*this.limit()).then((function(n){t.parseResults(n,e)}))},e.parseResults=function(t,e){return t.length&&this.pages.push(new U(e,t,t.payload.links)),this.moreResults=t.payload.links&&!!t.payload.links.next,this.loading=!1,m.redraw(),t},e.remove=function(t){this.pages.forEach((function(e){var n=e.items.indexOf(t);-1!==n&&e.items.splice(n,1)}))},e.add=function(t){this.pages.length||this.pages.push(new U(1,[])),this.pages[0].items.unshift(t)},t}(),M=function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e.prototype.type=function(){return"users"},e}(O);const j=flarum.core.compat["common/helpers/icon"];var q=t.n(j),H=function(){function t(){this.value="",this.activeValue="",this.debounce=0}var e=t.prototype;return e.oninit=function(t){this.value=t.attrs.initialValue,this.activeValue=this.value},e.view=function(t){var e=this;return m(".Search",m(".Search-input",[m("input.FormControl",{type:"search",value:this.value,oninput:function(n){e.value=n.target.value,clearTimeout(e.debounce),e.debounce=setTimeout((function(){e.activeValue=e.value,t.attrs.onchange(e.value),m.redraw()}),300)},placeholder:t.attrs.placeholder}),this.activeValue?m("button.Search-clear.Button.Button--icon.Button--link",{type:"button",onclick:function(){e.value="",e.activeValue="",t.attrs.onchange("")}},q()("fas fa-times-circle")):null]))},t}();const V=flarum.core.compat["common/components/LoadingIndicator"];var z=t.n(V);const _=flarum.core.compat["common/components/Button"];var X=t.n(_);const Y=flarum.core.compat["common/components/Placeholder"];var $=t.n(Y),W=function(t){function e(){return t.apply(this,arguments)||this}a(e,t),e.initAttrs=function(t){d().initAttrs(t),t.state&&(console.warn("AbstractListAttrs.state is deprecated, use .list"),t.list=t.state)};var n=e.prototype;return n.items=function(t){var e;return(e=[]).concat.apply(e,t.pages.map((function(t){return t.items})))},n.topRow=function(t){return null},n.bottomRowContent=function(t){return t.loading?z().component():t.moreResults?X().component({className:"Button",onclick:t.loadMore.bind(t)},yt.translator.trans("load-more")):0!==t.pages.length||t.loading?void 0:$().component({text:yt.translator.trans("empty")})},n.bottomRow=function(t){var e=this.bottomRowContent(t);return e?m("tr",m("td",{colspan:100},e)):null},n.tableClassName=function(){return""},n.view=function(t){var e=this,n=t.attrs.list;return m("table.Table.ListTable",{className:this.tableClassName()},[m("thead",m("tr",this.head().toArray())),m("tbody",[this.topRow(n),this.items(n).map((function(t){return e.row(t)})),this.bottomRow(n)])])},n.head=function(){var t=new(f());return t.add("actions",m("th","Actions"),-100),t},n.row=function(t){return m("tr",this.rowAttrs(t),this.columns(t).toArray())},n.rowAttrs=function(t){return{}},n.columns=function(t){var e=new(f());return e.add("actions",m("td",m("ul.Table-actions",v()(this.actions(t).toArray()))),-100),e},n.actions=function(t){return new(f())},e}(d()),G=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.head=function(){var e=t.prototype.head.call(this);return e.add("email",m("th",yt.translator.trans("flamarkt-backoffice.backoffice.users.head.email")),10),e},n.columns=function(e){var n=t.prototype.columns.call(this,e);return n.add("email",m("td",e.email()),10),n},n.actions=function(e){var n=t.prototype.actions.call(this,e);return n.add("edit",b().component({className:"Button Button--icon",icon:"fas fa-pen",href:yt.route.user(e)})),n},e}(W);function K(){return K=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},K.apply(this,arguments)}const J=flarum.core.compat["common/components/Dropdown"];var Q=t.n(J),Z=function(t){function e(){return t.apply(this,arguments)||this}a(e,t),e.initAttrs=function(t){t.state&&(console.warn("SortDropdownAttrs.state is deprecated, use .list"),t.list=t.state)};var n=e.prototype;return n.view=function(){var t=this,e=this.options(),n=this.activeSort();return m(Q(),{className:"SortDropdown "+this.className(),buttonClassName:"Button",label:e[n],icon:"fas fa-sort-amount-"+(this.sortIsUp(n)?"up":"down")},Object.keys(e).map((function(n){var r=e[n],o=n===t.activeSort();return m(X(),{icon:!o||"fas fa-check",onclick:function(){t.applySort(n)},active:o},r)})))},n.className=function(){return""},n.activeSort=function(){return this.attrs.list.params.sort||this.defaultSort()},n.sortIsUp=function(t){return"-"!==t.substr(0,1)},n.applySort=function(t){var e=K({},m.route.param());if(this.defaultSort()===t?(delete this.attrs.list.params.sort,delete e.sort):(this.attrs.list.params.sort=t,e.sort=t),this.attrs.updateUrl){delete e.key;var n=F().current.data.routeName;m.route.set(F().route(n,e))}else this.attrs.list.refresh()},n.defaultSort=function(){return Object.keys(this.options())[0]},e}(d()),tt=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.className=function(){return"UserSortDropdown"},n.options=function(){return{default:"Default sort","-joinedAt":"Newest",joinedAt:"Oldest","-lastSeenAt":"Seen recently",lastSeenAt:"Seen least recently",username:"Username ASC","-username":"Username DESC",commentCount:"Comment count ASC","-commentCount":"Comment count DESC",discussionCount:"Discussion count ASC","-discussionCount":"Discussion count DESC"}},e}(Z),et=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).list=void 0,e}a(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.list=this.initState(),this.list.refresh(),yt.setTitle(B()(yt.translator.trans("flamarkt-backoffice.backoffice.users.title"))),yt.setTitleCount(0)},n.initState=function(){var t=m.route.param();return new M({sort:t.sort})},n.filters=function(){var t=this,e=new(f());return e.add("sort",m(tt,{list:this.list}),100),e.add("search",m(H,{initialValue:"",onchange:function(e){t.list.params.q=e,t.list.refresh()},placeholder:B()(yt.translator.trans("flamarkt-backoffice.backoffice.users.searchPlaceholder"))}),50),e.add("separator",m(".BackofficeListFilters--separator"),-10),e.add("new",b().component({className:"Button",href:yt.route("users.show",{id:"new"}),icon:"fas fa-user-plus"},yt.translator.trans("flamarkt-backoffice.backoffice.users.new")),-100),e},n.view=function(){return m(".UserIndexPage",m(".container",[m(".BackofficeListFilters",this.filters().toArray()),m(G,{list:this.list})]))},e}(N()),nt=["exists","dirty"],rt=function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e.prototype.view=function(t){var e,n=t.attrs,r=n.exists,o=void 0!==r&&r,a=n.dirty,s=void 0===a||a,i=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(n,nt);return e=(Array.isArray(t.children)?t.children.some((function(t){return t})):t.children)?t.children:o?s?"Save":"Saved":"Create",X().component(K({type:"submit",className:"Button Button--primary",disabled:o&&!s},i),e)},e}(d());const ot=flarum.core.compat["common/Model"];var at=t.n(ot),st=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.load()},n.load=function(){var t=this,e=F().preloadedApiDocument(),n=m.route.param("id");if("new"===n){var r=this.newRecord();r&&this.show(r)}else if(e instanceof at())this.show(e);else{var o=this.requestParams();F().store.find(this.findType(),n,o).then((function(e){t.show(e),m.redraw()}))}},n.newRecord=function(){return null},n.findType=function(){return""},n.requestParams=function(){return{}},n.show=function(t){},n.saveThroughNewRecord=function(t,e){var n=this.newRecord();return n?(t&&(n.pushData({id:t}),n.exists=!0),n.save(e)):Promise.reject()},e}(N()),it=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).user=null,e.saving=!1,e.dirty=!1,e.username="",e.password="",e.email="",e}a(e,t);var n=e.prototype;return n.newRecord=function(){return yt.store.createRecord("users",{attributes:{}})},n.findType=function(){return"users"},n.show=function(t){this.user=t,this.username=t.username()||"",this.email=t.email()||"",yt.setTitle(t.email()),yt.setTitleCount(0)},n.view=function(){return this.user?m("form.UserShowPage",{onsubmit:this.onsubmit.bind(this)},m(".container.container--narrow",this.fields().toArray())):z().component()},n.fields=function(){var t=this,e=new(f());return e.add("username",m(".Form-group",[m("label",yt.translator.trans("flamarkt-backoffice.backoffice.users.field.username")),m("input.FormControl",{type:"text",value:this.username,oninput:function(e){t.username=e.target.value,t.dirty=!0},disabled:this.saving})])),e.add("email",m(".Form-group",[m("label",yt.translator.trans("flamarkt-backoffice.backoffice.users.field.email")),m("input.FormControl",{type:"email",value:this.email,oninput:function(e){t.email=e.target.value,t.dirty=!0},disabled:this.saving||yt.session.user===this.user})])),this.user.exists||e.add("password",m(".Form-group",[m("label",yt.translator.trans("flamarkt-backoffice.backoffice.users.field.password")),m("input.FormControl",{type:"password",value:this.password,oninput:function(e){t.password=e.target.value,t.dirty=!0},disabled:this.saving})])),e.add("submit",m(".Form-group",[rt.component({loading:this.saving,dirty:this.dirty,exists:this.user.exists})]),-10),e},n.data=function(){var t={username:this.username};return this.email!==this.user.email()&&(t.email=this.email),this.password&&(t.password=this.password),t},n.onsubmit=function(t){var e=this;t.preventDefault(),this.saving=!0,this.user.save(this.data()).then((function(t){e.user=t,e.saving=!1,e.dirty=!1,m.redraw(),m.route.set(yt.route.user(t))})).catch((function(t){e.saving=!1,m.redraw()}))},e}(st);const ct=flarum.core.compat["admin/components/ExtensionPage"];var ut=t.n(ct);const lt=flarum.core.compat["common/resolvers/DefaultResolver"];var dt=function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e.prototype.onmatch=function(e,n,r){return yt.extensionData.getPage(e.id)||t.prototype.onmatch.call(this,e,n,r)},e}(t.n(lt)());dt.extension=null;const ht=flarum.core.compat["admin/utils/ExtensionData"];var mt=t.n(ht);const ft=flarum.core.compat["admin/AdminApplication"];var pt=t.n(ft);const vt=flarum.core.compat["admin/app"];var gt=t.n(vt),wt=function(t){function e(){var e;return(e=t.call(this)||this).extensionData=new(mt()),e.history={canGoBack:function(){return!0},getPrevious:function(){},backUrl:function(){return"/"},back:function(){m.route.set("/")}},e.initializers=gt().initializers,e.store=gt().store,e.extensionData=gt().extensionData,e.routes=gt().routes,function(t){t.routes={dashboard:{path:"/dashboard",component:L},"users.index":{path:"/users",component:et},"users.show":{path:"/users/:id",component:it},extension:{path:"/extension/:id",component:ut(),resolverClass:dt}},t.route.user=function(e){return t.route("users.show",{id:e.id()})}}(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)),e}a(e,t);var n,o,s=e.prototype;return s.mount=function(){gt().forum=this.forum,gt().session=this.session;var e=this.forum.attribute("defaultRoute"),n="dashboard";for(var r in this.routes)this.routes[r].path===e&&(n=r);this.routes[n].path="/",m.route.prefix="/backoffice",t.prototype.mount.call(this,this.forum.attribute("basePath")),m.mount(document.getElementById("app-navigation"),{view:function(){return u().component({className:"App-backControl",drawer:!0})}}),m.mount(document.getElementById("header-navigation"),u()),m.mount(document.getElementById("header-primary"),g),m.mount(document.getElementById("header-secondary"),S),m.mount(document.getElementById("admin-navigation"),P)},s.getRequiredPermissions=function(t){return pt().prototype.getRequiredPermissions.call(this,t)},s.load=function(e){t.prototype.load.call(this,e),gt().data=e,gt().translator=this.translator},n=e,(o=[{key:"current",get:function(){return gt().current},set:function(t){gt().current=t}},{key:"previous",get:function(){return gt().previous},set:function(t){gt().previous=t}}])&&r(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}(i()),bt=new wt;window.app=bt;const yt=bt;var kt;!function(t){t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowDown=40]="ArrowDown",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowRight=39]="ArrowRight",t[t.Tab=9]="Tab",t[t.Backspace=8]="Backspace"}(kt||(kt={}));var St=function(){function t(){this.callbacks=new Map,this.whenCallback=function(t){return!0}}var e=t.prototype;return e.onUp=function(t){return this.callbacks.set(kt.ArrowUp,(function(e){e.preventDefault(),t(e)})),this},e.onDown=function(t){return this.callbacks.set(kt.ArrowDown,(function(e){e.preventDefault(),t(e)})),this},e.onSelect=function(t,e){void 0===e&&(e=!1);var n=function(e){e.preventDefault(),t(e)};return e||this.callbacks.set(kt.Tab,n),this.callbacks.set(kt.Enter,n),this},e.onTab=function(t){return this.callbacks.set(9,(function(e){e.preventDefault(),t(e)})),this},e.onCancel=function(t){return this.callbacks.set(kt.Escape,(function(e){e.stopPropagation(),e.preventDefault(),t(e)})),this},e.onRemove=function(t){return this.callbacks.set(kt.Backspace,(function(e){e instanceof KeyboardEvent&&e.target instanceof HTMLInputElement&&0===e.target.selectionStart&&0===e.target.selectionEnd&&(t(e),e.preventDefault())})),this},e.when=function(t){return this.whenCallback=t,this},e.bindTo=function(t){t[0].addEventListener("keydown",this.navigate.bind(this))},e.navigate=function(t){if(this.whenCallback(t)){var e=this.callbacks.get(t.which);e&&e(t)}},t}();const xt=flarum.core.compat["common/utils/classList"];var It=t.n(xt),At=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).searchFilter="",e.debouncedSearchFilter="",e.searchDebouncer=void 0,e.activeListIndex=0,e.inputIsFocused=!1,e.navigator=void 0,e.dropdownIsFocused=!1,e.onmousedown=void 0,e.cachedSuggestedResults=null,e.suggestedPromiseLoaded=!1,e.shouldShowSuggestions=!0,e.afterSelectionCooldown=!1,e}a(e,t);var n=e.prototype;return n.className=function(){return""},n.normalizedValue=function(){return Array.isArray(this.attrs.relationship)?this.attrs.relationship:this.attrs.relationship?[this.attrs.relationship]:[]},n.setValue=function(t){this.attrs.onchange&&(this.attrs.hasOne?this.attrs.onchange(t.length?t[0]:null):this.attrs.onchange(t))},n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.navigator=new St,this.navigator.onUp((function(){return n.setIndex(n.activeListIndex-1,!0)})).onDown((function(){return n.setIndex(n.activeListIndex+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){var t=n.normalizedValue();t.length&&n.toggleModel(t[t.length-1])})).when((function(t){return" "===t.key&&""===n.searchFilter?(t.preventDefault(),n.select(t),!1):"Tab"!==t.key}))},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.element=e.dom,this.onmousedown=function(t){var r=e.dom.querySelector(".Dropdown-menu");r&&r.contains(t.target)?n.dropdownIsFocused||(n.dropdownIsFocused=!0,m.redraw()):n.dropdownIsFocused&&(n.dropdownIsFocused=!1,m.redraw())},document.addEventListener("mousedown",this.onmousedown)},n.onremove=function(e){t.prototype.onremove.call(this,e),document.removeEventListener("mousedown",this.onmousedown)},n.indexInSelectedModels=function(t){return this.normalizedValue().findIndex((function(e){return e.id()===t.id()}))},n.addModel=function(t){if(this.attrs.hasOne)this.setValue([t]);else{var e=this.normalizedValue();e.push(t),this.setValue(e)}},n.removeModel=function(t){var e=this.indexInSelectedModels(t);if(-1!==e){var n=this.normalizedValue();n.splice(e,1),this.setValue(n)}},n.view=function(){var t=this.results(this.debouncedSearchFilter),e=this.directionUp();return e&&(null==t||t.reverse()),m(".RelationshipSelect",{className:It()(this.className(),{focused:this.inputIsFocused,disabled:this.attrs.disabled,readonly:this.attrs.readonly,"direction-up":e})},[m(".RelationshipSelect-Form",this.formItems().toArray()),this.listAvailableModels(t)])},n.formItems=function(){var t=new(f());return t.add("input",m(".RelationshipSelect-FakeInput-Wrapper",m(".RelationshipSelect-FakeInput.FormControl",{className:It()({focus:this.inputIsFocused})},this.inputItems().toArray())),20),t},n.inputItems=function(){var t=this,e=new(f());return e.add("selected",this.normalizedValue().map((function(e){return m("span.RelationshipSelect-Selected",{onclick:function(){t.attrs.disabled||t.attrs.readonly||t.toggleModel(e)}},t.item(e))})),20),e.add("control",m("input.FormControl",{placeholder:this.attrs.placeholder,value:this.searchFilter,oninput:function(e){t.searchFilter=e.target.value,t.activeListIndex=0,t.shouldShowSuggestions=!0,clearTimeout(t.searchDebouncer),t.searchDebouncer=setTimeout((function(){t.debouncedSearchFilter=t.searchFilter,t.search(t.debouncedSearchFilter)}),300)},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:this.oninputfocus.bind(this),onblur:this.oninputblur.bind(this),onclick:function(){t.shouldShowSuggestions=!0},disabled:this.attrs.disabled,readonly:this.attrs.readonly}),10),e},n.oninputfocus=function(){this.inputIsFocused=!0,this.dropdownIsFocused=!1,this.afterSelectionCooldown||(this.shouldShowSuggestions=!0),""===this.debouncedSearchFilter&&this.search(this.debouncedSearchFilter)},n.oninputblur=function(){this.inputIsFocused=!1},n.listAvailableModels=function(t){return!this.inputIsFocused&&!this.dropdownIsFocused||Array.isArray(t)&&0===t.length?null:(e=null===t?z().component():t.map(this.listAvailableModel.bind(this)),m("ul.Dropdown-menu.RelationshipSelect-Dropdown",e));var e},n.listAvailableModel=function(t,e){var n=this;return m("li.RelationshipSelect-Dropdown-Item",{"data-index":e,className:It()({selected:-1!==this.indexInSelectedModels(t),active:this.activeListIndex===e}),onmouseover:function(){return n.activeListIndex=e},onclick:this.toggleModel.bind(this,t)},m(".RelationshipSelect-Dropdown-Item-Wrap",this.item(t,this.debouncedSearchFilter)))},n.toggleModel=function(t){var e=this;-1!==this.indexInSelectedModels(t)?this.removeModel(t):this.addModel(t),this.searchFilter&&(this.searchFilter="",this.debouncedSearchFilter="",this.activeListIndex=0),this.shouldShowSuggestions=!1,this.afterSelectionCooldown=!0,setTimeout((function(){e.afterSelectionCooldown=!1}),300),setTimeout((function(){e.onready()}))},n.select=function(t){var e=this.getDomElement(this.activeListIndex);if(!e.length)return this.searchFilter="",void(this.debouncedSearchFilter="");e[0].dispatchEvent(new Event("click"))},n.getDomElement=function(t){return this.$('.RelationshipSelect-Dropdown-Item[data-index="'+t+'"]')},n.setIndex=function(t,e){var n=this.$(".RelationshipSelect-Dropdown"),r=this.$(".RelationshipSelect-Dropdown-Item").length;t<0?t=r-1:t>=r&&(t=0);var o=this.getDomElement(t);if(this.activeListIndex=t,this.shouldShowSuggestions=!0,m.redraw(),e){var a,s,i,c=n.scrollTop()||0,u=(null==(a=n.offset())?void 0:a.top)||0,l=u+(n.outerHeight()||0),d=(null==(s=o.offset())?void 0:s.top)||0,h=d+(o.outerHeight()||0);d<u?i=c-u+d-parseInt(n.css("padding-top"),10):h>l&&(i=c-l+h+parseInt(n.css("padding-bottom"),10)),void 0!==i&&n.stop(!0).animate({scrollTop:i},100)}},n.onready=function(){"ontouchstart"in document.documentElement||this.$("input").first().focus().select()},n.directionUp=function(){if(!(this.element instanceof HTMLElement))return!1;var t=this.element.getBoundingClientRect();return window.innerHeight-t.bottom<200},n.suggestedResults=function(){var t=this;return this.attrs.suggest&&this.shouldShowSuggestions?"function"==typeof this.attrs.suggest?(this.suggestedPromiseLoaded||(this.suggestedPromiseLoaded=!0,this.attrs.suggest().then((function(e){Array.isArray(e)?e.length&&(t.cachedSuggestedResults=e):e&&(t.cachedSuggestedResults=[e]),m.redraw()}))),this.cachedSuggestedResults):Array.isArray(this.attrs.suggest)?this.attrs.suggest:[this.attrs.suggest]:[]},e}(d()),Dt=function(){function t(){this.sortingIndex=null,this.showPlaceholderForIndex=0,this.dragoverenterhandler=void 0,this.drophandler=void 0}var e=t.prototype;return e.oncreate=function(t){var e=this;this.dragoverenterhandler=function(n){if(null!==e.sortingIndex){n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="move";var r=0;t.dom.childNodes.forEach((function(e){var o=parseInt(e.dataset.index||"");if(!isNaN(o)){var a=e.getBoundingClientRect();if("horizontal"===t.attrs.direction){if(!a.width)return;var s=a.left+a.width/2;n.pageX>s+window.scrollX&&(r=o+1)}else{if(!a.height)return;var i=a.top+a.height/2;n.pageY>i+window.scrollY&&(r=o+1)}}})),r!==e.showPlaceholderForIndex&&(e.showPlaceholderForIndex=r,m.redraw())}},document.addEventListener("dragover",this.dragoverenterhandler),document.addEventListener("dragenter",this.dragoverenterhandler),this.drophandler=function(n){if(null!==e.sortingIndex){n.preventDefault(),n.stopPropagation();var r=e.sortingIndex,o=e.showPlaceholderForIndex-(e.showPlaceholderForIndex>e.sortingIndex?1:0);e.sortingIndex=null,m.redraw(),o!==r&&t.attrs.onsort(r,o)}},document.addEventListener("drop",this.drophandler)},e.onremove=function(){document.removeEventListener("dragover",this.dragoverenterhandler),document.removeEventListener("dragenter",this.dragoverenterhandler),document.removeEventListener("drop",this.drophandler)},e.view=function(t){var e=this,n=[];t.children.forEach((function(r,o){null!==e.sortingIndex&&e.showPlaceholderForIndex===o&&n.push(e.placeholder(t)),o===e.sortingIndex&&(r.attrs.style||(r.attrs.style={}),r.attrs.style.display="none"),r.attrs["data-index"]=o,r.attrs.ondragstart=function(n){if(n.target&&n.dataTransfer){var r=t.attrs.handleClassName;if(void 0===r&&(r="js-handle"),r&&!n.target.classList.contains(r)||t.attrs.disabled)n.redraw=!1;else{var a=Array.from(t.dom.childNodes).find((function(t){return t.dataset.index===o+""}));if(!a)return;var s=a.getBoundingClientRect();n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",o+""),n.dataTransfer.setDragImage(a,n.pageX-s.left-window.scrollX,n.pageY-s.top-window.scrollY),e.sortingIndex=o,e.showPlaceholderForIndex=o}}},n.push(r)})),null!==this.sortingIndex&&this.showPlaceholderForIndex===t.children.length&&n.push(this.placeholder(t));var r={};return t.attrs.className&&(r.className=t.attrs.className),m(t.attrs.containerTag||"div",r,n)},e.placeholder=function(t){return m(t.attrs.placeholderTag||"div",{className:"SortablePlaceholder",key:"placeholder"},"tr"===t.attrs.placeholderTag?m("td",{colspan:100}):null)},t}(),Rt=function(){function t(){}return t.prototype.view=function(t){var e={className:(t.attrs.className?t.attrs.className+" ":"")+"js-handle"};return t.attrs.disabled?e.className+=" disabled":e.draggable="true",m(t.attrs.elementTag||"div",e,q()("fas fa-grip-lines"))},t}();const Ft=flarum.core.compat["common/helpers/username"];var Ct=t.n(Ft);const Pt=flarum.core.compat["common/helpers/highlight"];var Et=t.n(Pt);const Nt=flarum.core.compat["common/helpers/avatar"];var Lt=t.n(Nt),Tt={"components/AbstractRelationshipSelect":At,"components/AbstractSortDropdown":Z,"components/ActiveLinkButton":C,"components/Sortable":Dt,"components/SortableHandle":Rt,"components/UserRelationshipSelect":function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).resultsCache=new Map,e}a(e,t);var n=e.prototype;return n.className=function(){return"UserRelationshipSelect"},n.search=function(t){var e=this;return t?F().store.find("users",{filter:{q:t},page:{limit:5}}).then((function(n){e.resultsCache.set(t.toLowerCase(),n),m.redraw()})):(m.redraw(),Promise.resolve())},n.results=function(t){if(!t)return this.suggestedResults();t=t.toLowerCase();var e=this.resultsCache.get(t);return void 0===e?null:(e||[]).concat(F().store.all("users").filter((function(e){return[e.username(),e.displayName()].some((function(e){return e.toLowerCase().substr(0,t.length)===t}))}))).filter((function(t,e,n){return n.lastIndexOf(t)===e})).sort((function(t,e){return t.displayName().localeCompare(e.displayName())}))},n.item=function(t,e){var n=Ct()(t);return[Lt()(t),e?K({},n,{text:void 0,children:[Et()(n.text,e)]}):n]},e}(At),"pages/AbstractShowPage":st,"states/AbstractListState":n,"utils/KeyboardNavigatable":St},Bt=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).saving=!1,e}return a(e,t),e.prototype.view=function(){var t=this,e=this.attrs.model;return e.isHidden()?m(X(),{className:"Button",icon:"fas fa-trash",onclick:function(){confirm("Are you sure you want to permanently delete this record?")&&(t.saving=!0,e.delete().then((function(){t.saving=!1,m.redraw(),t.attrs.afterdelete()})).catch((function(e){throw t.saving=!1,m.redraw(),e})))}},"Delete Permanently"):null},e}(d());const Ut=flarum.core.compat["common/components/TextEditor"];var Ot=t.n(Ut),Mt=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).composer={editor:null},e}a(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),yt.composer=this.composer},n.view=function(){return m(".FormControl.FormControl--editor",Ot().component(K({composer:this.composer},this.attrs)))},e}(d()),jt=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).saving=!1,e}return a(e,t),e.prototype.view=function(){var t=this,e=this.attrs.model;return e.exists?m(X(),{className:"Button",icon:e.isHidden()?"fas fa-eye":"fas fa-eye-slash",onclick:function(){t.saving=!0,e.save({isHidden:!e.isHidden()}).then((function(){t.saving=!1,m.redraw()})).catch((function(e){throw t.saving=!1,m.redraw(),e}))}},e.isHidden()?"Restore":"Soft Delete"):null},e}(d()),qt={app:yt,"components/AbstractList":W,"components/BackofficeNav":P,"components/HeaderPrimary":g,"components/HeaderSecondary":S,"components/PermanentDeleteButton":Bt,"components/RichTextInput":Mt,"components/SearchInput":H,"components/SoftDeleteButton":jt,"components/SubmitButton":rt,"components/UserList":G,"components/UserSortDropdown":tt,"pages/DashboardPage":L,"pages/UserIndexPage":et,"pages/UserShowPage":it,"resolvers/UserListState":dt,"states/UserListState":M};const Ht=flarum.core.compat["common/extend"],Vt=flarum.core.compat["common/components/Separator"];var zt=t.n(Vt);const _t=flarum.core.compat["common/components/Switch"];var Xt=t.n(_t);yt.initializers.add("flamarkt-backoffice",(function(){(0,Ht.extend)(k().prototype,"items",(function(t){t.has("separator")||t.add("separator",zt().component(),-90),t.has("administration")||t.add("administration",b().component({icon:"fas fa-wrench",href:yt.forum.attribute("adminUrl"),external:!0},yt.translator.trans("flamarkt-backoffice.lib.header.admin_button")))})),yt.extensionData.for("flamarkt-backoffice").registerPermission({icon:"fas fa-wrench",label:yt.translator.trans("flamarkt-backoffice.backoffice.permissions.backoffice"),permission:"backoffice"},"moderate"),(0,Ht.override)(ut().prototype,"content",(function(t){return yt.forum.attribute("adminUrl")?t():yt.extensionData.getSettings(this.extension.id)?m(".ExtensionPage-settings",m(".container",m("h3.ExtensionPage-subHeader",yt.translator.trans("flamarkt-backoffice.backoffice.settingsNotAvailableForNonAdmin")))):t()})),(0,Ht.extend)(ut().prototype,"header",(function(t){yt.forum.attribute("adminUrl")||t.forEach((function(t){(t&&t.children||[]).forEach((function(t){(t&&t.children||[]).forEach((function(t){(t&&t.children||[]).forEach((function(t){t&&t.tag===Xt()&&(t.attrs.disabled=!0)}))}))}))}))}))})),F().initializers.add("flamarkt-backoffice-patch",(function(){(0,Ht.override)(at(),"getIdentifier",(function(t,e){return e?t(e):null})),(0,Ht.override)(at(),"hasOne",(function(t,e){return function(){if(this.data.relationships){var n=this.data.relationships[e];if(n&&!n.data)return null}return t(e).call(this)}})),(0,Ht.override)(at(),"getIdentifier",(function(t,e){return e?e.verbatim?(delete e.verbatim,e):t(e):null}))}),100)})(),flarum.extensions["flamarkt-backoffice"]=e})();
//# sourceMappingURL=backoffice.js.map