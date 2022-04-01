module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n(2),s=n.n(a);e.a=function(){o.a.initializers.add("flamarkt-backoffice-patch",(function(){Object(i.override)(s.a,"getIdentifier",(function(t,e){return e?t(e):null})),Object(i.override)(s.a,"hasOne",(function(t,e){return function(){if(this.data.relationships){var n=this.data.relationships[e];if(n&&!n.data)return null}return t(e).call(this)}})),Object(i.override)(s.a,"getIdentifier",(function(t,e){return e?e.verbatim?(delete e.verbatim,e):t(e):null}))}),100)}},function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["forum/components/SessionDropdown"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/helpers/username"]},function(t,e){t.exports=flarum.core.compat["common/helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/components/Page"]},,,,function(t,e,n){"use strict";n.r(e),n.d(e,"common",(function(){return Q}));var r={};n.r(r),n.d(r,"Page",(function(){return G})),n.d(r,"default",(function(){return J}));var o=n(5),i=n.n(o),a=n(1),s=n(9),c=n.n(s),l=n(3),u=n.n(l);function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}var f,p=n(7),v=n.n(p);!function(t){t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowDown=40]="ArrowDown",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowRight=39]="ArrowRight",t[t.Tab=9]="Tab",t[t.Backspace=8]="Backspace"}(f||(f={}));var g=function(){function t(){this.callbacks=new Map,this.whenCallback=function(t){return!0}}var e=t.prototype;return e.onUp=function(t){return this.callbacks.set(f.ArrowUp,(function(e){e.preventDefault(),t(e)})),this},e.onDown=function(t){return this.callbacks.set(f.ArrowDown,(function(e){e.preventDefault(),t(e)})),this},e.onSelect=function(t,e){void 0===e&&(e=!1);var n=function(e){e.preventDefault(),t(e)};return e||this.callbacks.set(f.Tab,n),this.callbacks.set(f.Enter,n),this},e.onTab=function(t){return this.callbacks.set(9,(function(e){e.preventDefault(),t(e)})),this},e.onCancel=function(t){return this.callbacks.set(f.Escape,(function(e){e.stopPropagation(),e.preventDefault(),t(e)})),this},e.onRemove=function(t){return this.callbacks.set(f.Backspace,(function(e){e instanceof KeyboardEvent&&e.target instanceof HTMLInputElement&&0===e.target.selectionStart&&0===e.target.selectionEnd&&(t(e),e.preventDefault())})),this},e.when=function(t){return this.whenCallback=t,this},e.bindTo=function(t){t[0].addEventListener("keydown",this.navigate.bind(this))},e.navigate=function(t){if(this.whenCallback(t)){var e=this.callbacks.get(t.which);e&&e(t)}},t}(),w=n(10),b=n.n(w),y=n(11),x=n.n(y),I=n(8),S=n.n(I),k=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).searchFilter="",e.debouncedSearchFilter="",e.searchDebouncer=void 0,e.activeListIndex=0,e.inputIsFocused=!1,e.navigator=void 0,e.dropdownIsFocused=!1,e.onmousedown=void 0,e}h(e,t);var n=e.prototype;return n.className=function(){return""},n.normalizedValue=function(){return Array.isArray(this.attrs.relationship)?this.attrs.relationship:this.attrs.relationship?[this.attrs.relationship]:[]},n.setValue=function(t){this.attrs.hasOne?this.attrs.onchange(t.length?t[0]:null):this.attrs.onchange(t)},n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.navigator=new g,this.navigator.onUp((function(){return n.setIndex(n.activeListIndex-1,!0)})).onDown((function(){return n.setIndex(n.activeListIndex+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){var t=n.normalizedValue();t.length&&n.toggleModel(t[t.length-1])})).when((function(t){return" "===t.key&&""===n.searchFilter?(t.preventDefault(),n.select(t),!1):"Tab"!==t.key}))},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.element=e.dom,this.onmousedown=function(t){var r=e.dom.querySelector(".Dropdown-menu");r&&r.contains(t.target)?n.dropdownIsFocused||(n.dropdownIsFocused=!0,m.redraw()):n.dropdownIsFocused&&(n.dropdownIsFocused=!1,m.redraw())},document.addEventListener("mousedown",this.onmousedown)},n.onremove=function(e){t.prototype.onremove.call(this,e),document.removeEventListener("mousedown",this.onmousedown)},n.indexInSelectedModels=function(t){return this.normalizedValue().findIndex((function(e){return e.id()===t.id()}))},n.addModel=function(t){if(this.attrs.hasOne)this.setValue([t]);else{var e=this.normalizedValue();e.push(t),this.setValue(e)}},n.removeModel=function(t){var e=this.indexInSelectedModels(t);if(-1!==e){var n=this.normalizedValue();n.splice(e,1),this.setValue(n)}},n.view=function(){return m(".RelationshipSelect",{className:this.className()},[m(".RelationshipSelect-Form",this.formItems().toArray()),this.listAvailableModels(this.results(this.debouncedSearchFilter))])},n.formItems=function(){var t=new S.a;return t.add("input",m(".RelationshipSelect-FakeInput-Wrapper",m(".RelationshipSelect-FakeInput.FormControl",{className:this.inputIsFocused?"focus":""},this.inputItems().toArray())),20),t},n.inputItems=function(){var t=this,e=new S.a;return e.add("selected",this.normalizedValue().map((function(e){return m("span.RelationshipSelect-Selected",{onclick:function(){t.toggleModel(e),t.onready()}},t.item(e))})),20),e.add("control",m("input.FormControl",{placeholder:this.attrs.placeholder,value:this.searchFilter,oninput:function(e){t.searchFilter=e.target.value,t.activeListIndex=0,clearTimeout(t.searchDebouncer),t.searchDebouncer=setTimeout((function(){t.debouncedSearchFilter=t.searchFilter,t.search(t.debouncedSearchFilter)}),300)},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:this.oninputfocus.bind(this),onblur:this.oninputblur.bind(this)}),10),e},n.oninputfocus=function(){this.inputIsFocused=!0,""===this.debouncedSearchFilter&&this.search(this.debouncedSearchFilter)},n.oninputblur=function(){this.inputIsFocused=!1},n.listAvailableModels=function(t){return!this.inputIsFocused&&!this.dropdownIsFocused||Array.isArray(t)&&0===t.length?null:(e=null===t?b.a.component():t.map(this.listAvailableModel.bind(this)),m("ul.Dropdown-menu.RelationshipSelect-Dropdown",e));var e},n.listAvailableModel=function(t,e){var n=this;return m("li.RelationshipSelect-Dropdown-Item",{"data-index":e,className:x()({selected:-1!==this.indexInSelectedModels(t),active:this.activeListIndex===e}),onmouseover:function(){return n.activeListIndex=e},onclick:this.toggleModel.bind(this,t)},m(".RelationshipSelect-Dropdown-Item-Wrap",this.item(t,this.debouncedSearchFilter)))},n.toggleModel=function(t){var e=this;-1!==this.indexInSelectedModels(t)?this.removeModel(t):this.addModel(t),this.searchFilter&&(this.searchFilter="",this.debouncedSearchFilter="",this.activeListIndex=0),setTimeout((function(){e.onready()}))},n.select=function(t){var e=this.getDomElement(this.activeListIndex);if(!e.length)return this.searchFilter="",void(this.debouncedSearchFilter="");e[0].dispatchEvent(new Event("click"))},n.getDomElement=function(t){return this.$('.RelationshipSelect-Dropdown-Item[data-index="'+t+'"]')},n.setIndex=function(t,e){var n=this.$(".RelationshipSelect-Dropdown"),r=this.$(".RelationshipSelect-Dropdown-Item").length;t<0?t=r-1:t>=r&&(t=0);var o=this.getDomElement(t);if(this.activeListIndex=t,m.redraw(),e){var i,a,s,c=n.scrollTop()||0,l=(null==(i=n.offset())?void 0:i.top)||0,u=l+(n.outerHeight()||0),d=(null==(a=o.offset())?void 0:a.top)||0,h=d+(o.outerHeight()||0);d<l?s=c-l+d-parseInt(n.css("padding-top"),10):h>u&&(s=c-u+h+parseInt(n.css("padding-bottom"),10)),void 0!==s&&n.stop(!0).animate({scrollTop:s},100)}},n.onready=function(){this.$("input").first().focus().select()},e}(v.a);function F(){return(F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var D=n(0),R=n.n(D),A=n(12),L=n.n(A),N=n(13),P=n.n(N),E=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.view=function(){var t=this,e=this.options(),n=this.activeSort();return m(L.a,{className:"SortDropdown "+this.className(),buttonClassName:"Button",label:e[n]},Object.keys(e).map((function(n){var r=e[n],o=n===t.activeSort();return m(P.a,{icon:!o||"fas fa-check",onclick:function(){t.applySort(n)},active:o},r)})))},n.className=function(){return""},n.activeSort=function(){return this.attrs.state.params.sort||this.defaultSort()},n.applySort=function(t){var e=F({},m.route.param());if(this.defaultSort()===t?(delete this.attrs.state.params.sort,delete e.sort):(this.attrs.state.params.sort=t,e.sort=t),this.attrs.updateUrl){delete e.key;var n=R.a.current.data.routeName;m.route.set(R.a.route(n,e))}else this.attrs.state.refresh()},n.defaultSort=function(){return Object.keys(this.options())[0]},e}(v.a),O=function(t){function e(){return t.apply(this,arguments)||this}return h(e,t),e.isActive=function(t){return m.route.get()===t.href||e.activeRoutes(t).some((function(t){var e=R.a.current.data.routeName;if(!e)return!1;var n=t.indexOf("*");return-1!==n?0===e.indexOf(t.substr(0,n)):e===t}))},e.activeRoutes=function(t){return t.activeRoutes?t.activeRoutes:[]},e}(u.a),T=function(){function t(){this.sortingIndex=null,this.showPlaceholderForIndex=0,this.dragoverenterhandler=void 0,this.drophandler=void 0}var e=t.prototype;return e.oncreate=function(t){var e=this;this.dragoverenterhandler=function(n){if(null!==e.sortingIndex){n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="move";var r=0;t.dom.childNodes.forEach((function(e){var o=parseInt(e.dataset.index||"");if(!isNaN(o)){var i=e.getBoundingClientRect();if("horizontal"===t.attrs.direction){if(!i.width)return;var a=i.left+i.width/2;n.pageX>a+window.scrollX&&(r=o+1)}else{if(!i.height)return;var s=i.top+i.height/2;n.pageY>s+window.scrollY&&(r=o+1)}}})),r!==e.showPlaceholderForIndex&&(e.showPlaceholderForIndex=r,m.redraw())}},document.addEventListener("dragover",this.dragoverenterhandler),document.addEventListener("dragenter",this.dragoverenterhandler),this.drophandler=function(n){if(null!==e.sortingIndex){n.preventDefault(),n.stopPropagation();var r=e.sortingIndex,o=e.showPlaceholderForIndex-(e.showPlaceholderForIndex>e.sortingIndex?1:0);e.sortingIndex=null,m.redraw(),o!==r&&t.attrs.onsort(r,o)}},document.addEventListener("drop",this.drophandler)},e.onremove=function(){document.removeEventListener("dragover",this.dragoverenterhandler),document.removeEventListener("dragenter",this.dragoverenterhandler),document.removeEventListener("drop",this.drophandler)},e.view=function(t){var e=this,n=[];t.children.forEach((function(r,o){null!==e.sortingIndex&&e.showPlaceholderForIndex===o&&n.push(e.placeholder(t)),o===e.sortingIndex&&(r.attrs.style||(r.attrs.style={}),r.attrs.style.display="none"),r.attrs["data-index"]=o,r.attrs.ondragstart=function(n){if(n.target&&n.dataTransfer){var r=t.attrs.handleClassName;if(void 0===r&&(r="js-handle"),r&&!n.target.classList.contains(r)||t.attrs.disabled)n.redraw=!1;else{var i=Array.from(t.dom.childNodes).find((function(t){return t.dataset.index===o+""}));if(!i)return;var a=i.getBoundingClientRect();n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",o+""),n.dataTransfer.setDragImage(i,n.pageX-a.left-window.scrollX,n.pageY-a.top-window.scrollY),e.sortingIndex=o,e.showPlaceholderForIndex=o}}},n.push(r)})),null!==this.sortingIndex&&this.showPlaceholderForIndex===t.children.length&&n.push(this.placeholder(t));var r={};return t.attrs.className&&(r.className=t.attrs.className),m(t.attrs.containerTag||"div",r,n)},e.placeholder=function(t){return m(t.attrs.placeholderTag||"div",{className:"SortablePlaceholder",key:"placeholder"},"tr"===t.attrs.placeholderTag?m("td",{colspan:100}):null)},t}(),M=n(14),j=n.n(M),C=function(){function t(){}return t.prototype.view=function(t){var e={className:(t.attrs.className?t.attrs.className+" ":"")+"js-handle"};return t.attrs.disabled?e.className+=" disabled":e.draggable="true",m(t.attrs.elementTag||"div",e,j()("fas fa-grip-lines"))},t}(),_=n(15),U=n.n(_),V=n(16),q=n.n(V),z=n(17),B=n.n(z),H=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).resultsCache=new Map,e}h(e,t);var n=e.prototype;return n.className=function(){return"UserRelationshipSelect"},n.search=function(t){var e=this;return t?R.a.store.find("users",{filter:{q:t},page:{limit:5}}).then((function(n){e.resultsCache.set(t,n),m.redraw()})):(m.redraw(),Promise.resolve())},n.results=function(t){if(!t)return[];t=t.toLowerCase();var e=this.resultsCache.get(t);return void 0===e?null:(e||[]).concat(R.a.store.all("users").filter((function(e){return[e.username(),e.displayName()].some((function(e){return e.toLowerCase().substr(0,t.length)===t}))}))).filter((function(t,e,n){return n.lastIndexOf(t)===e})).sort((function(t,e){return t.displayName().localeCompare(e.displayName())}))},n.item=function(t,e){var n=U()(t);return[B()(t),e?F({},n,{text:void 0,children:[q()(n.text,e)]}):n]},e}(k),X=n(18),Y=n.n(X),$=n(2),K=n.n($),W=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.load()},n.load=function(){var t=this,e=R.a.preloadedApiDocument(),n=m.route.param("id");if("new"===n){var r=this.newRecord();r&&this.show(r)}else if(e instanceof K.a)this.show(e);else{var o=this.requestParams();R.a.store.find(this.findType(),n,o).then((function(e){t.show(e),m.redraw()}))}},n.newRecord=function(){return null},n.findType=function(){return""},n.requestParams=function(){return{}},n.show=function(t){},n.saveThroughNewRecord=function(t,e){var n=this.newRecord();return n?(t&&(n.pushData({id:t}),n.exists=!0),n.save(e)):Promise.reject()},e}(Y.a),G=function(t,e,n){void 0===n&&(n={}),this.number=void 0,this.items=void 0,this.links=void 0,this.number=t,this.items=e,this.links=n||{}},J=function(){function t(t){void 0===t&&(t={}),this.params={},this.pages=[],this.loading=!0,this.moreResults=!1,this.params=t}var e=t.prototype;return e.type=function(){return""},e.limit=function(){return 20},e.requestParams=function(){var t={filter:this.params.filter||{}};return this.params.sort&&(t.sort=this.params.sort),this.params.include&&(t.include=this.params.include),this.params.q&&(t.filter.q=this.params.q),t},e.clear=function(){this.pages=[],m.redraw()},e.refresh=function(t){var e=this,n=(void 0===t?{}:t).deferClear,r=void 0!==n&&n;return this.loading=!0,r||this.clear(),this.loadResults(0).then((function(t){e.pages=[],e.parseResults(t,0)}),(function(){e.loading=!1,m.redraw()}))},e.loadResults=function(t){var e=R.a.preloadedApiDocument();if(e)return Promise.resolve(e);var n=this.requestParams();return n.page={offset:t},R.a.store.find(this.type(),n)},e.loadMore=function(){var t=this;this.loading=!0;var e=this.pages.length;this.loadResults(e*this.limit()).then((function(n){t.parseResults(n,e)}))},e.parseResults=function(t,e){return t.length&&this.pages.push(new G(e,t,t.payload.links)),this.moreResults=t.payload.links&&!!t.payload.links.next,this.loading=!1,m.redraw(),t},e.remove=function(t){this.pages.forEach((function(e){var n=e.items.indexOf(t);-1!==n&&e.items.splice(n,1)}))},e.add=function(t){this.pages.length||this.pages.push(new G(1,[])),this.pages[0].items.unshift(t)},t}(),Q={"components/AbstractRelationshipSelect":k,"components/AbstractSortDropdown":E,"components/ActiveLinkButton":O,"components/Sortable":T,"components/SortableHandle":C,"components/UserRelationshipSelect":H,"pages/AbstractShowPage":W,"states/AbstractListState":r,"utils/KeyboardNavigatable":g},Z=n(4);i.a.initializers.add("flamarkt-backoffice",(function(){Object(a.extend)(c.a.prototype,"items",(function(t){i.a.forum.attribute("backofficeUrl")&&t.add("flamarkt-backoffice",u.a.component({icon:"fas fa-tachometer-alt",href:i.a.forum.attribute("backofficeUrl"),target:"_blank"},i.a.translator.trans("flamarkt-backoffice.lib.header.backoffice_button")))}))})),Object(Z.a)()}]);
//# sourceMappingURL=forum.js.map