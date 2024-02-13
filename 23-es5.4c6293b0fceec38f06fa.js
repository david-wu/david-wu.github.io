function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var n,t={},e=Object.prototype,l=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",u=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{c({},"")}catch(n){c=function(n,t,e){return n[t]=e}}function s(n,t,e,l){var r=t&&t.prototype instanceof p?t:p,i=Object.create(r.prototype),u=new E(l||[]);return o(i,"_invoke",{value:M(n,e,u)}),i}function f(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var h="suspendedStart",g="executing",b="completed",d={};function p(){}function v(){}function m(){}var y={};c(y,i,(function(){return this}));var _=Object.getPrototypeOf,C=_&&_(_(j([])));C&&C!==e&&l.call(C,i)&&(y=C);var O=m.prototype=p.prototype=Object.create(y);function w(n){["next","throw","return"].forEach((function(t){c(n,t,(function(n){return this._invoke(t,n)}))}))}function P(n,t){function e(o,r,i,u){var a=f(n[o],n,r);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&l.call(s,"__await")?t.resolve(s.__await).then((function(n){e("next",n,i,u)}),(function(n){e("throw",n,i,u)})):t.resolve(s).then((function(n){c.value=n,i(c)}),(function(n){return e("throw",n,i,u)}))}u(a.arg)}var r;o(this,"_invoke",{value:function(n,l){function o(){return new t((function(t,o){e(n,l,t,o)}))}return r=r?r.then(o,o):o()}})}function M(t,e,l){var o=h;return function(r,i){if(o===g)throw new Error("Generator is already running");if(o===b){if("throw"===r)throw i;return{value:n,done:!0}}for(l.method=r,l.arg=i;;){var u=l.delegate;if(u){var a=k(u,l);if(a){if(a===d)continue;return a}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(o===h)throw o=b,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);o=g;var c=f(t,e,l);if("normal"===c.type){if(o=l.done?b:"suspendedYield",c.arg===d)continue;return{value:c.arg,done:l.done}}"throw"===c.type&&(o=b,l.method="throw",l.arg=c.arg)}}}function k(t,e){var l=e.method,o=t.iterator[l];if(o===n)return e.delegate=null,"throw"===l&&t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method)||"return"!==l&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+l+"' method")),d;var r=f(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function x(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(L,this),this.reset(!0)}function j(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){for(;++o<t.length;)if(l.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=m,o(O,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:v,configurable:!0}),v.displayName=c(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,m):(n.__proto__=m,c(n,a,"GeneratorFunction")),n.prototype=Object.create(O),n},t.awrap=function(n){return{__await:n}},w(P.prototype),c(P.prototype,u,(function(){return this})),t.AsyncIterator=P,t.async=function(n,e,l,o,r){void 0===r&&(r=Promise);var i=new P(s(n,e,l,o),r);return t.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},w(O),c(O,a,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var l in t)e.push(l);return e.reverse(),function n(){for(;e.length;){var l=e.pop();if(l in t)return n.value=l,n.done=!1,n}return n.done=!0,n}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(l,o){return u.type="throw",u.arg=t,e.next=l,o&&(e.method="next",e.arg=n),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var a=l.call(i,"catchLoc"),c=l.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===n||"continue"===n)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=n,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),d},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),x(e),d}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var l=e.completion;if("throw"===l.type){var o=l.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,l){return this.delegate={iterator:j(t),resultName:e,nextLoc:l},"next"===this.method&&(this.arg=n),d}},t}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,_toPropertyKey(l.key),l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var t=_toPrimitive(n,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var l=e.call(n,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"11eg":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=_createClass((function n(){_classCallCheck(this,n)}))},"3A+F":function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("W61y");var l=_createClass((function n(){_classCallCheck(this,n)}))},"8gYF":function(n,t,e){"use strict";var l=e("8Y7J"),o=e("SVse");e("AEbb"),e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));var r=l.qb({encapsulation:0,styles:[[".upload-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:25rem;border-radius:.25rem;padding:.25rem;background-color:#f2eee1}.upload-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .125rem;flex:0 0 auto;display:inline-block}.upload-container[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%]{flex:1 1 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}label[_ngcontent-%COMP%]{display:inline-block}.upload-button[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}.upload-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}.upload-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}.upload-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.upload-input[_ngcontent-%COMP%]{position:absolute;visibility:hidden;width:0;height:0}"]],data:{}});function i(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,7,"div",[["class","upload-container"]],null,null,null,null,null)),(n()(),l.sb(1,0,null,null,1,"div",[["class","file-label"]],null,null,null,null,null)),(n()(),l.Lb(2,null,[" "," "])),(n()(),l.sb(3,0,null,null,2,"label",[["for","select-file-button"]],null,null,null,null,null)),(n()(),l.sb(4,0,null,null,1,"div",[["class","upload-button"]],null,null,null,null,null)),(n()(),l.Lb(-1,null,[" Select File "])),(n()(),l.sb(6,0,null,null,1,"div",[["class","upload-button"]],[[1,"disabled",0]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.upload()&&l),l}),null,null)),(n()(),l.Lb(-1,null,[" Upload "]))],null,(function(n,t){var e=t.component;n(t,2,0,e.file?e.file.name:"no file selected"),n(t,6,0,!e.file||null)}))}function u(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,2,"label",[["for","select-file-button"]],null,null,null,null,null)),(n()(),l.sb(1,0,null,null,1,"div",[["class","upload-button"]],null,null,null,null,null)),(n()(),l.Lb(-1,null,[" Upload File "]))],null,null)}function a(n){return l.Nb(0,[(n()(),l.hb(16777216,null,null,1,null,i)),l.rb(1,16384,null,0,o.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.hb(16777216,null,null,1,null,u)),l.rb(3,16384,null,0,o.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.sb(4,0,null,null,0,"input",[["class","upload-input"],["id","select-file-button"],["type","file"]],[[8,"accept",0]],[[null,"change"]],(function(n,t,e){var l=!0;return"change"===t&&(l=!1!==n.component.onFileChange(e)&&l),l}),null,null))],(function(n,t){var e=t.component;n(t,1,0,e.showUploadButton),n(t,3,0,!e.showUploadButton)}),(function(n,t){n(t,4,0,t.component.acceptStr)}))}},AEbb:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("8Y7J"),o=function(){function n(){_classCallCheck(this,n),this.acceptStr="image/*",this.showUploadButton=!1,this.fileChange=new l.m,this.fileUpload=new l.m}return _createClass(n,[{key:"onFileChange",value:function(n){n.target.files&&(this.file=n.target.files[0],this.fileChange.emit(this.file))}},{key:"upload",value:function(){this.fileUpload.emit(this.file)}}]),n}()},PTyj:function(n,t,e){"use strict";var l=e("8Y7J"),o=e("SVse"),r=e("W61y"),i=e("DQLy"),u=e("trGy");e.d(t,"a",(function(){return a})),e.d(t,"c",(function(){return s})),e.d(t,"b",(function(){return f}));var a=l.qb({encapsulation:0,styles:[[".logged-in-container[_ngcontent-%COMP%]{display:flex;align-items:center}.logged-in-container[_ngcontent-%COMP%]   .display-name-container[_ngcontent-%COMP%]{min-width:2rem;padding:.25rem .5rem;font-size:1rem;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;cursor:auto}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.invisible[_ngcontent-%COMP%]{display:none}"]],data:{}});function c(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),l.sb(1,0,null,null,4,"div",[["class","logged-in-container"]],null,null,null,null,null)),(n()(),l.sb(2,0,null,null,1,"a",[["class","display-name-container"]],null,null,null,null,null)),(n()(),l.Lb(3,null,["",""])),(n()(),l.sb(4,0,null,null,1,"div",[["class","sign-out-button"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.signOut()&&l),l}),null,null)),(n()(),l.Lb(-1,null,["Sign Out"]))],null,(function(n,t){n(t,3,0,t.context.ngIf.displayName)}))}function s(n){return l.Nb(0,[l.Jb(402653184,1,{loginRef:0}),(n()(),l.sb(1,0,null,null,2,"div",[],[[2,"invisible",null]],null,null,null,null)),l.Fb(131072,o.b,[l.h]),(n()(),l.Lb(-1,null,[" loading..\n"])),(n()(),l.sb(4,0,null,null,6,"div",[],[[2,"invisible",null]],null,null,null,null)),l.Fb(131072,o.b,[l.h]),(n()(),l.sb(6,0,[[1,0],["loginRef",1]],null,1,"div",[],[[2,"invisible",null]],null,null,null,null)),l.Fb(131072,o.b,[l.h]),(n()(),l.hb(16777216,null,null,2,null,c)),l.rb(9,16384,null,0,o.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),l.Fb(131072,o.b,[l.h])],(function(n,t){var e=t.component;n(t,9,0,l.Mb(t,9,0,l.Db(t,10).transform(e.user$)))}),(function(n,t){var e=t.component;n(t,1,0,!l.Mb(t,1,0,l.Db(t,2).transform(e.authLoading$))),n(t,4,0,l.Mb(t,4,0,l.Db(t,5).transform(e.authLoading$))),n(t,6,0,!l.Mb(t,6,0,l.Db(t,7).transform(e.canLogin$)))}))}var f=l.ob("dwu-user-login",r.a,(function(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,1,"dwu-user-login",[],null,null,null,s,a)),l.rb(1,114688,null,0,r.a,[i.n,l.k,u.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[])},W61y:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e("o0su");var l=e("DQLy"),o=e("YZbJ"),r=function(){function n(t,e,r){_classCallCheck(this,n),this.store=t,this.hostEl=e,this.authService=r,this.user$=this.store.pipe(Object(l.B)(o.d)),this.authLoading$=this.store.pipe(Object(l.B)(o.b)),this.canLogin$=this.store.pipe(Object(l.B)(o.c))}return _createClass(n,[{key:"ngOnInit",value:function(){this.authService.getFirebaseAuthUI().start(this.loginRef.nativeElement,Object.assign({},this.authService.defaultUiConfig))}},{key:"signOut",value:function(){this.store.dispatch(o.a.signOut({nativeEl:this.loginRef.nativeElement}))}}]),n}()},"e/a4":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),o=_createClass((function n(){_classCallCheck(this,n)})),r=e("pMnS"),i=e("PTyj"),u=e("W61y"),a=e("DQLy"),c=e("trGy"),s=e("8gYF"),f=e("AEbb"),h=e("ozdi"),g=e("Xjb1"),b=e("ZGeo"),d=e("bMre"),p=e("SVse"),v=e("mrSG"),m=e("YZbJ"),y=e("J0zk"),_=function(){function n(t,e,l){_classCallCheck(this,n),this.store=t,this.pgs=e,this.firebaseAuthService=l,this.zoomLevel=3,this.viewingFilePicker=!0,this.user$=this.store.pipe(Object(a.B)(m.d)),this.uploadedFiles$=this.store.pipe(Object(a.B)(y.b))}return _createClass(n,[{key:"onFileChange",value:function(n,t){return v.a(this,void 0,void 0,_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.pgs.uploadFile(n,t);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){this.store.dispatch(y.a.setMyUploadsVisible({payload:!0}))}},{key:"ngOnDestroy",value:function(){this.store.dispatch(y.a.setMyUploadsVisible({payload:!1}))}},{key:"onDeleteImage",value:function(n,t){this.pgs.deleteFile(n,t)}}]),n}(),C=e("bqb4"),O=l.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{flex:1 1 0;display:flex;align-items:center}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   dwu-file-uploader[_ngcontent-%COMP%], [_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   dwu-user-login[_ngcontent-%COMP%]{margin-left:.5rem;display:block}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .file-picker-icon-container[_ngcontent-%COMP%]{display:inline-block;height:28px;padding:.125rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .file-picker-icon-container[_ngcontent-%COMP%]   .file-picker-icon[_ngcontent-%COMP%]{background-color:#eae6da;border-radius:.125rem}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .file-picker-icon-container[_ngcontent-%COMP%]   .file-picker-icon[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .file-picker-icon-container[_ngcontent-%COMP%]   .file-picker-icon.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .file-picker-icon-container[_ngcontent-%COMP%]   .file-picker-icon[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{flex:0 0 auto}[_nghost-%COMP%]   .control-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   dwu-zoom-level-picker[_ngcontent-%COMP%]{display:block;margin-right:.5rem}.login-container[_ngcontent-%COMP%]{padding:1rem}"]],data:{}});function w(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,12,null,null,null,null,null,null,null)),(n()(),l.sb(1,0,null,null,8,"div",[["class","control-bar"]],null,null,null,null,null)),(n()(),l.sb(2,0,null,null,4,"div",[["class","left-side"]],null,null,null,null,null)),(n()(),l.sb(3,0,null,null,1,"dwu-user-login",[],null,null,null,i.c,i.a)),l.rb(4,114688,null,0,u.a,[a.n,l.k,c.a],null,null),(n()(),l.sb(5,0,null,null,1,"dwu-file-uploader",[],null,[[null,"fileChange"]],(function(n,t,e){var l=!0;return"fileChange"===t&&(l=!1!==n.component.onFileChange(e,n.context.ngIf)&&l),l}),s.b,s.a)),l.rb(6,49152,null,0,f.a,[],null,{fileChange:"fileChange"}),(n()(),l.sb(7,0,null,null,2,"div",[["class","right-side"]],null,null,null,null,null)),(n()(),l.sb(8,0,null,null,1,"dwu-zoom-level-picker",[],null,[[null,"zoomLevelChange"]],(function(n,t,e){var l=!0;return"zoomLevelChange"===t&&(l=!1!==(n.component.zoomLevel=e)&&l),l}),h.b,h.a)),l.rb(9,49152,null,0,g.a,[],{zoomLevel:[0,"zoomLevel"]},{zoomLevelChange:"zoomLevelChange"}),(n()(),l.sb(10,0,null,null,2,"dwu-image-grid",[],null,[[null,"deleteImage"]],(function(n,t,e){var l=!0;return"deleteImage"===t&&(l=!1!==n.component.onDeleteImage(e,n.context.ngIf)&&l),l}),b.b,b.a)),l.rb(11,573440,null,0,d.a,[],{files:[0,"files"],zoomLevel:[1,"zoomLevel"]},{deleteImage:"deleteImage"}),l.Fb(131072,p.b,[l.h])],(function(n,t){var e=t.component;n(t,4,0),n(t,9,0,e.zoomLevel),n(t,11,0,l.Mb(t,11,0,l.Db(t,12).transform(e.uploadedFiles$)),e.zoomLevel)}),null)}function P(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,2,"div",[["class","login-container"]],null,null,null,null,null)),(n()(),l.sb(1,0,null,null,1,"dwu-user-login",[],null,null,null,i.c,i.a)),l.rb(2,114688,null,0,u.a,[a.n,l.k,c.a],null,null)],(function(n,t){n(t,2,0)}),null)}function M(n){return l.Nb(0,[(n()(),l.hb(16777216,null,null,2,null,w)),l.rb(1,16384,null,0,p.m,[l.O,l.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),l.Fb(131072,p.b,[l.h]),(n()(),l.hb(0,[["loginTemplate",2]],null,0,null,P))],(function(n,t){var e=t.component;n(t,1,0,l.Mb(t,1,0,l.Db(t,2).transform(e.user$)),l.Db(t,3))}),null)}var k=l.ob("dwu-my-uploads",_,(function(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,1,"dwu-my-uploads",[],null,null,null,M,O)),l.rb(1,245760,null,0,_,[a.n,C.a,c.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),L=e("Z2Br"),x=e("xpxz"),E=e("GrFz"),j=e("A/lh"),B=e("cxyc"),F=e("YDhq"),z=e("iInd"),I=_createClass((function n(){_classCallCheck(this,n)})),S=e("R7F0"),N=e("3A+F"),G=e("jG/M"),D=e("11eg"),A=e("SxHE"),T=e("IP0z"),U=e("/HVE"),Y=e("hOhj"),$=e("Oo1w"),J=e("Tyz4");e.d(t,"MyUploadsModuleNgFactory",(function(){return R}));var R=l.pb(o,[],(function(n){return l.Ab([l.Bb(512,l.j,l.ab,[[8,[r.a,k,i.b]],[3,l.j],l.v]),l.Bb(4608,p.o,p.n,[l.s,[2,p.A]]),l.Bb(4608,c.a,c.a,[L.a]),l.Bb(4608,x.a,x.a,[L.a]),l.Bb(4608,E.a,E.a,[L.a]),l.Bb(4608,j.a,j.a,[]),l.Bb(4608,C.a,C.a,[x.a,E.a,j.a,B.a,F.a]),l.Bb(1073742336,p.c,p.c,[]),l.Bb(1073742336,z.p,z.p,[[2,z.u],[2,z.l]]),l.Bb(1073742336,I,I,[]),l.Bb(1073742336,S.a,S.a,[]),l.Bb(1073742336,N.a,N.a,[]),l.Bb(1073742336,G.a,G.a,[]),l.Bb(1073742336,D.a,D.a,[]),l.Bb(1073742336,A.a,A.a,[]),l.Bb(1073742336,T.a,T.a,[]),l.Bb(1073742336,U.b,U.b,[]),l.Bb(1073742336,Y.h,Y.h,[]),l.Bb(1073742336,$.a,$.a,[]),l.Bb(1073742336,J.a,J.a,[]),l.Bb(1073742336,o,o,[]),l.Bb(1024,z.j,(function(){return[[{path:"",component:_}],[{path:"auth",component:u.a},{path:"auth-success",component:u.a}]]}),[])])}))},"jG/M":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=_createClass((function n(){_classCallCheck(this,n)}))},o0su:function(n,t,e){"use strict";e("YDhq"),e("Z2Br"),e("trGy"),e("xpxz"),e("QmNs"),e("GrFz"),e("cxyc"),e("7F6a")}}]);