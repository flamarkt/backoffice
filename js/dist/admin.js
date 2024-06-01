(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e),t.d(e,{common:()=>et});var n={};t.r(n),t.d(n,{Page:()=>Z,default:()=>tt});const r=flarum.core.compat["admin/app"];var o=t.n(r);const s=flarum.core.compat["common/extend"],i=flarum.core.compat["admin/components/ExtensionPage"];var a=t.n(i);const c=flarum.core.compat["admin/components/SessionDropdown"];var l=t.n(c);const u=flarum.core.compat["common/components/LinkButton"];var d=t.n(u);const h=flarum.core.compat["common/components/Separator"];var f=t.n(h);function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function v(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e)}const g=flarum.core.compat["common/Component"];var w,b=t.n(g);!function(t){t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowDown=40]="ArrowDown",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowRight=39]="ArrowRight",t[t.Tab=9]="Tab",t[t.Backspace=8]="Backspace"}(w||(w={}));var y=function(){function t(){this.callbacks=new Map,this.whenCallback=function(t){return!0}}var e=t.prototype;return e.onUp=function(t){return this.callbacks.set(w.ArrowUp,(function(e){e.preventDefault(),t(e)})),this},e.onDown=function(t){return this.callbacks.set(w.ArrowDown,(function(e){e.preventDefault(),t(e)})),this},e.onSelect=function(t,e){void 0===e&&(e=!1);var n=function(e){e.preventDefault(),t(e)};return e||this.callbacks.set(w.Tab,n),this.callbacks.set(w.Enter,n),this},e.onTab=function(t){return this.callbacks.set(9,(function(e){e.preventDefault(),t(e)})),this},e.onCancel=function(t){return this.callbacks.set(w.Escape,(function(e){e.stopPropagation(),e.preventDefault(),t(e)})),this},e.onRemove=function(t){return this.callbacks.set(w.Backspace,(function(e){e instanceof KeyboardEvent&&e.target instanceof HTMLInputElement&&0===e.target.selectionStart&&0===e.target.selectionEnd&&(t(e),e.preventDefault())})),this},e.when=function(t){return this.whenCallback=t,this},e.bindTo=function(t){t[0].addEventListener("keydown",this.navigate.bind(this))},e.navigate=function(t){if(this.whenCallback(t)){var e=this.callbacks.get(t.which);e&&e(t)}},t}();const S=flarum.core.compat["common/components/LoadingIndicator"];var I=t.n(S);const x=flarum.core.compat["common/utils/classList"];var k=t.n(x);const F=flarum.core.compat["common/utils/ItemList"];var R=t.n(F),A=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).searchFilter="",e.debouncedSearchFilter="",e.searchDebouncer=void 0,e.activeListIndex=0,e.inputIsFocused=!1,e.navigator=void 0,e.dropdownIsFocused=!1,e.onmousedown=void 0,e.cachedSuggestedResults=null,e.suggestedPromiseLoaded=!1,e.shouldShowSuggestions=!0,e.afterSelectionCooldown=!1,e}v(e,t);var n=e.prototype;return n.className=function(){return""},n.normalizedValue=function(){return Array.isArray(this.attrs.relationship)?this.attrs.relationship:this.attrs.relationship?[this.attrs.relationship]:[]},n.setValue=function(t){this.attrs.onchange&&(this.attrs.hasOne?this.attrs.onchange(t.length?t[0]:null):this.attrs.onchange(t))},n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.navigator=new y,this.navigator.onUp((function(){return n.setIndex(n.activeListIndex-1,!0)})).onDown((function(){return n.setIndex(n.activeListIndex+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){var t=n.normalizedValue();t.length&&n.toggleModel(t[t.length-1])})).when((function(t){return" "===t.key&&""===n.searchFilter?(t.preventDefault(),n.select(t),!1):"Tab"!==t.key}))},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.element=e.dom,this.onmousedown=function(t){var r=e.dom.querySelector(".Dropdown-menu");r&&r.contains(t.target)?n.dropdownIsFocused||(n.dropdownIsFocused=!0,m.redraw()):n.dropdownIsFocused&&(n.dropdownIsFocused=!1,m.redraw())},document.addEventListener("mousedown",this.onmousedown)},n.onremove=function(e){t.prototype.onremove.call(this,e),document.removeEventListener("mousedown",this.onmousedown)},n.indexInSelectedModels=function(t){return this.normalizedValue().findIndex((function(e){return e.id()===t.id()}))},n.addModel=function(t){if(this.attrs.hasOne)this.setValue([t]);else{var e=this.normalizedValue();e.push(t),this.setValue(e)}},n.removeModel=function(t){var e=this.indexInSelectedModels(t);if(-1!==e){var n=this.normalizedValue();n.splice(e,1),this.setValue(n)}},n.view=function(){var t=this.results(this.debouncedSearchFilter),e=this.directionUp();return e&&(null==t||t.reverse()),m(".RelationshipSelect",{className:k()(this.className(),{focused:this.inputIsFocused,disabled:this.attrs.disabled,readonly:this.attrs.readonly,"direction-up":e})},[m(".RelationshipSelect-Form",this.formItems().toArray()),this.listAvailableModels(t)])},n.formItems=function(){var t=new(R());return t.add("input",m(".RelationshipSelect-FakeInput-Wrapper",m(".RelationshipSelect-FakeInput.FormControl",{className:k()({focus:this.inputIsFocused})},this.inputItems().toArray())),20),t},n.inputItems=function(){var t=this,e=new(R());return e.add("selected",this.normalizedValue().map((function(e){return m("span.RelationshipSelect-Selected",{onclick:function(){t.attrs.disabled||t.attrs.readonly||t.toggleModel(e)}},t.item(e))})),20),e.add("control",m("input.FormControl",{placeholder:this.attrs.placeholder,value:this.searchFilter,oninput:function(e){t.searchFilter=e.target.value,t.activeListIndex=0,t.shouldShowSuggestions=!0,clearTimeout(t.searchDebouncer),t.searchDebouncer=setTimeout((function(){t.debouncedSearchFilter=t.searchFilter,t.search(t.debouncedSearchFilter)}),300)},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:this.oninputfocus.bind(this),onblur:this.oninputblur.bind(this),onclick:function(){t.shouldShowSuggestions=!0},disabled:this.attrs.disabled,readonly:this.attrs.readonly}),10),e},n.oninputfocus=function(){this.inputIsFocused=!0,this.dropdownIsFocused=!1,this.afterSelectionCooldown||(this.shouldShowSuggestions=!0),""===this.debouncedSearchFilter&&this.search(this.debouncedSearchFilter)},n.oninputblur=function(){this.inputIsFocused=!1},n.listAvailableModels=function(t){return!this.inputIsFocused&&!this.dropdownIsFocused||Array.isArray(t)&&0===t.length?null:(e=null===t?I().component():t.map(this.listAvailableModel.bind(this)),m("ul.Dropdown-menu.RelationshipSelect-Dropdown",e));var e},n.listAvailableModel=function(t,e){var n=this;return m("li.RelationshipSelect-Dropdown-Item",{"data-index":e,className:k()({selected:-1!==this.indexInSelectedModels(t),active:this.activeListIndex===e}),onmouseover:function(){return n.activeListIndex=e},onclick:this.toggleModel.bind(this,t)},m(".RelationshipSelect-Dropdown-Item-Wrap",this.item(t,this.debouncedSearchFilter)))},n.toggleModel=function(t){var e=this;-1!==this.indexInSelectedModels(t)?this.removeModel(t):this.addModel(t),this.searchFilter&&(this.searchFilter="",this.debouncedSearchFilter="",this.activeListIndex=0),this.shouldShowSuggestions=!1,this.afterSelectionCooldown=!0,setTimeout((function(){e.afterSelectionCooldown=!1}),300),setTimeout((function(){e.onready()}))},n.select=function(t){var e=this.getDomElement(this.activeListIndex);if(!e.length)return this.searchFilter="",void(this.debouncedSearchFilter="");e[0].dispatchEvent(new Event("click"))},n.getDomElement=function(t){return this.$('.RelationshipSelect-Dropdown-Item[data-index="'+t+'"]')},n.setIndex=function(t,e){var n=this.$(".RelationshipSelect-Dropdown"),r=this.$(".RelationshipSelect-Dropdown-Item").length;t<0?t=r-1:t>=r&&(t=0);var o=this.getDomElement(t);if(this.activeListIndex=t,this.shouldShowSuggestions=!0,m.redraw(),e){var s,i,a,c=n.scrollTop()||0,l=(null==(s=n.offset())?void 0:s.top)||0,u=l+(n.outerHeight()||0),d=(null==(i=o.offset())?void 0:i.top)||0,h=d+(o.outerHeight()||0);d<l?a=c-l+d-parseInt(n.css("padding-top"),10):h>u&&(a=c-u+h+parseInt(n.css("padding-bottom"),10)),void 0!==a&&n.stop(!0).animate({scrollTop:a},100)}},n.onready=function(){"ontouchstart"in document.documentElement||this.$("input").first().focus().select()},n.directionUp=function(){if(!(this.element instanceof HTMLElement))return!1;var t=this.element.getBoundingClientRect();return window.innerHeight-t.bottom<200},n.suggestedResults=function(){var t=this;return this.attrs.suggest&&this.shouldShowSuggestions?"function"==typeof this.attrs.suggest?(this.suggestedPromiseLoaded||(this.suggestedPromiseLoaded=!0,this.attrs.suggest().then((function(e){Array.isArray(e)?e.length&&(t.cachedSuggestedResults=e):e&&(t.cachedSuggestedResults=[e]),m.redraw()}))),this.cachedSuggestedResults):Array.isArray(this.attrs.suggest)?this.attrs.suggest:[this.attrs.suggest]:[]},e}(b());function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D.apply(this,arguments)}const L=flarum.core.compat["common/app"];var P=t.n(L);const E=flarum.core.compat["common/components/Dropdown"];var N=t.n(E);const T=flarum.core.compat["common/components/Button"];var M=t.n(T),C=function(t){function e(){return t.apply(this,arguments)||this}v(e,t),e.initAttrs=function(t){t.state&&(console.warn("SortDropdownAttrs.state is deprecated, use .list"),t.list=t.state)};var n=e.prototype;return n.view=function(){var t=this,e=this.options(),n=this.activeSort();return m(N(),{className:"SortDropdown "+this.className(),buttonClassName:"Button",label:e[n],icon:"fas fa-sort-amount-"+(this.sortIsUp(n)?"up":"down")},Object.keys(e).map((function(n){var r=e[n],o=n===t.activeSort();return m(M(),{icon:!o||"fas fa-check",onclick:function(){t.applySort(n)},active:o},r)})))},n.className=function(){return""},n.activeSort=function(){return this.attrs.list.params.sort||this.defaultSort()},n.sortIsUp=function(t){return"-"!==t.substr(0,1)},n.applySort=function(t){var e=D({},m.route.param());if(this.defaultSort()===t?(delete this.attrs.list.params.sort,delete e.sort):(this.attrs.list.params.sort=t,e.sort=t),this.attrs.updateUrl){delete e.key;var n=P().current.data.routeName;m.route.set(P().route(n,e))}else this.attrs.list.refresh()},n.defaultSort=function(){return Object.keys(this.options())[0]},e}(b()),O=function(t){function e(){return t.apply(this,arguments)||this}return v(e,t),e.isActive=function(t){return m.route.get()===t.href||e.activeRoutes(t).some((function(t){var e=P().current.data.routeName;if(!e)return!1;var n=t.indexOf("*");return-1!==n?0===e.indexOf(t.substr(0,n)):e===t}))},e.activeRoutes=function(t){return t.activeRoutes?t.activeRoutes:[]},e}(d()),j=function(){function t(){this.sortingIndex=null,this.showPlaceholderForIndex=0,this.dragoverenterhandler=void 0,this.drophandler=void 0}var e=t.prototype;return e.oncreate=function(t){var e=this;this.dragoverenterhandler=function(n){if(null!==e.sortingIndex){n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="move";var r=0;t.dom.childNodes.forEach((function(e){var o=parseInt(e.dataset.index||"");if(!isNaN(o)){var s=e.getBoundingClientRect();if("horizontal"===t.attrs.direction){if(!s.width)return;var i=s.left+s.width/2;n.pageX>i+window.scrollX&&(r=o+1)}else{if(!s.height)return;var a=s.top+s.height/2;n.pageY>a+window.scrollY&&(r=o+1)}}})),r!==e.showPlaceholderForIndex&&(e.showPlaceholderForIndex=r,m.redraw())}},document.addEventListener("dragover",this.dragoverenterhandler),document.addEventListener("dragenter",this.dragoverenterhandler),this.drophandler=function(n){if(null!==e.sortingIndex){n.preventDefault(),n.stopPropagation();var r=e.sortingIndex,o=e.showPlaceholderForIndex-(e.showPlaceholderForIndex>e.sortingIndex?1:0);e.sortingIndex=null,m.redraw(),o!==r&&t.attrs.onsort(r,o)}},document.addEventListener("drop",this.drophandler)},e.onremove=function(){document.removeEventListener("dragover",this.dragoverenterhandler),document.removeEventListener("dragenter",this.dragoverenterhandler),document.removeEventListener("drop",this.drophandler)},e.view=function(t){var e=this,n=[];t.children.forEach((function(r,o){null!==e.sortingIndex&&e.showPlaceholderForIndex===o&&n.push(e.placeholder(t)),o===e.sortingIndex&&(r.attrs.style||(r.attrs.style={}),r.attrs.style.display="none"),r.attrs["data-index"]=o,r.attrs.ondragstart=function(n){if(n.target&&n.dataTransfer){var r=t.attrs.handleClassName;if(void 0===r&&(r="js-handle"),r&&!n.target.classList.contains(r)||t.attrs.disabled)n.redraw=!1;else{var s=Array.from(t.dom.childNodes).find((function(t){return t.dataset.index===o+""}));if(!s)return;var i=s.getBoundingClientRect();n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",o+""),n.dataTransfer.setDragImage(s,n.pageX-i.left-window.scrollX,n.pageY-i.top-window.scrollY),e.sortingIndex=o,e.showPlaceholderForIndex=o}}},n.push(r)})),null!==this.sortingIndex&&this.showPlaceholderForIndex===t.children.length&&n.push(this.placeholder(t));var r={};return t.attrs.className&&(r.className=t.attrs.className),m(t.attrs.containerTag||"div",r,n)},e.placeholder=function(t){return m(t.attrs.placeholderTag||"div",{className:"SortablePlaceholder",key:"placeholder"},"tr"===t.attrs.placeholderTag?m("td",{colspan:100}):null)},t}();const U=flarum.core.compat["common/helpers/icon"];var B=t.n(U),V=function(){function t(){}return t.prototype.view=function(t){var e={className:(t.attrs.className?t.attrs.className+" ":"")+"js-handle"};return t.attrs.disabled?e.className+=" disabled":e.draggable="true",m(t.attrs.elementTag||"div",e,B()("fas fa-grip-lines"))},t}();const q=flarum.core.compat["common/helpers/username"];var z=t.n(q);const _=flarum.core.compat["common/helpers/highlight"];var H=t.n(_);const X=flarum.core.compat["common/helpers/avatar"];var Y=t.n(X),$=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).resultsCache=new Map,e}v(e,t);var n=e.prototype;return n.className=function(){return"UserRelationshipSelect"},n.search=function(t){var e=this;return t?P().store.find("users",{filter:{q:t},page:{limit:5}}).then((function(n){e.resultsCache.set(t.toLowerCase(),n),m.redraw()})):(m.redraw(),Promise.resolve())},n.results=function(t){if(!t)return this.suggestedResults();t=t.toLowerCase();var e=this.resultsCache.get(t);return void 0===e?null:(e||[]).concat(P().store.all("users").filter((function(e){return[e.username(),e.displayName()].some((function(e){return e.toLowerCase().substr(0,t.length)===t}))}))).filter((function(t,e,n){return n.lastIndexOf(t)===e})).sort((function(t,e){return t.displayName().localeCompare(e.displayName())}))},n.item=function(t,e){var n=z()(t);return[Y()(t),e?D({},n,{text:void 0,children:[H()(n.text,e)]}):n]},e}(A);const K=flarum.core.compat["common/components/Page"];var W=t.n(K);const G=flarum.core.compat["common/Model"];var J=t.n(G),Q=function(t){function e(){return t.apply(this,arguments)||this}v(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.load()},n.load=function(){var t=this,e=P().preloadedApiDocument(),n=m.route.param("id");if("new"===n){var r=this.newRecord();r&&this.show(r)}else if(e instanceof J())this.show(e);else{var o=this.requestParams();P().store.find(this.findType(),n,o).then((function(e){t.show(e),m.redraw()}))}},n.newRecord=function(){return null},n.findType=function(){return""},n.requestParams=function(){return{}},n.show=function(t){},n.saveThroughNewRecord=function(t,e){var n=this.newRecord();return n?(t&&(n.pushData({id:t}),n.exists=!0),n.save(e)):Promise.reject()},e}(W()),Z=function(t,e,n){void 0===n&&(n={}),this.number=void 0,this.items=void 0,this.links=void 0,this.number=t,this.items=e,this.links=n||{}},tt=function(){function t(t){void 0===t&&(t={}),this.params={},this.pages=[],this.loading=!0,this.moreResults=!1,this.params=t}var e=t.prototype;return e.type=function(){return""},e.limit=function(){return 20},e.requestParams=function(){var t={filter:this.params.filter||{}};return this.params.sort&&(t.sort=this.params.sort),this.params.include&&(t.include=this.params.include),this.params.q&&(t.filter.q=this.params.q),t},e.clear=function(){this.pages=[],m.redraw()},e.refresh=function(t){var e=this,n=(void 0===t?{}:t).deferClear,r=void 0!==n&&n;return this.loading=!0,r||this.clear(),this.loadResults(0).then((function(t){e.pages=[],e.parseResults(t,0)}),(function(){e.loading=!1,m.redraw()}))},e.loadResults=function(t){var e=P().preloadedApiDocument();if(e)return Promise.resolve(e);var n=this.requestParams();return n.page={offset:t},P().store.find(this.type(),n)},e.loadMore=function(){var t=this;this.loading=!0;var e=this.pages.length;this.loadResults(e*this.limit()).then((function(n){t.parseResults(n,e)}))},e.parseResults=function(t,e){return t.length&&this.pages.push(new Z(e,t,t.payload.links)),this.moreResults=t.payload.links&&!!t.payload.links.next,this.loading=!1,m.redraw(),t},e.remove=function(t){this.pages.forEach((function(e){var n=e.items.indexOf(t);-1!==n&&e.items.splice(n,1)}))},e.add=function(t){this.pages.length||this.pages.push(new Z(1,[])),this.pages[0].items.unshift(t)},t}(),et={"components/AbstractRelationshipSelect":A,"components/AbstractSortDropdown":C,"components/ActiveLinkButton":O,"components/Sortable":j,"components/SortableHandle":V,"components/UserRelationshipSelect":$,"pages/AbstractShowPage":Q,"states/AbstractListState":n,"utils/KeyboardNavigatable":y};o().initializers.add("flamarkt-backoffice",(function(){(0,s.override)(a().prototype,"content",(function(t){return this.extension.extra["flamarkt-backoffice"]&&this.extension.extra["flamarkt-backoffice"].settingsInBackoffice?m(".ExtensionPage-settings",m(".container",m(".Form-group",m("a.Button",{href:o().forum.attribute("backofficeUrl")+"/extension/"+this.extension.id},o().translator.trans("flamarkt-backoffice.admin.settingsInBackoffice"))))):t()})),(0,s.extend)(l().prototype,"items",(function(t){t.add("flamarkt-backoffice",d().component({icon:"fas fa-tachometer-alt",href:o().forum.attribute("backofficeUrl"),external:!0},o().translator.trans("flamarkt-backoffice.lib.header.backoffice_button"))),t.has("separator")||t.add("separator",f().component(),-90)}))})),P().initializers.add("flamarkt-backoffice-patch",(function(){(0,s.override)(J(),"getIdentifier",(function(t,e){return e?t(e):null})),(0,s.override)(J(),"hasOne",(function(t,e){return function(){if(this.data.relationships){var n=this.data.relationships[e];if(n&&!n.data)return null}return t(e).call(this)}})),(0,s.override)(J(),"getIdentifier",(function(t,e){return e?e.verbatim?(delete e.verbatim,e):t(e):null}))}),100)})(),module.exports=e})();
//# sourceMappingURL=admin.js.map