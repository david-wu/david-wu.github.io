function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,_toPropertyKey(l.key),l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var t=_toPrimitive(n,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var l=e.call(n,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3A+F":function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("W61y");var l=_createClass((function n(){_classCallCheck(this,n)}))},PTyj:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("SVse"),u=e("W61y"),o=e("DQLy"),r=e("trGy");e.d(t,"a",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"b",(function(){return b}));var c=l.qb({encapsulation:0,styles:[[".logged-in-container[_ngcontent-%COMP%]{display:flex;align-items:center}.logged-in-container[_ngcontent-%COMP%]   .display-name-container[_ngcontent-%COMP%]{min-width:2rem;padding:.25rem .5rem;font-size:1rem;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;cursor:auto}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.invisible[_ngcontent-%COMP%]{display:none}"]],data:{}});function s(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),l.sb(1,0,null,null,4,"div",[["class","logged-in-container"]],null,null,null,null,null)),(n()(),l.sb(2,0,null,null,1,"a",[["class","display-name-container"]],null,null,null,null,null)),(n()(),l.Lb(3,null,["",""])),(n()(),l.sb(4,0,null,null,1,"div",[["class","sign-out-button"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.signOut()&&l),l}),null,null)),(n()(),l.Lb(-1,null,["Sign Out"]))],null,(function(n,t){n(t,3,0,t.context.ngIf.displayName)}))}function a(n){return l.Nb(0,[l.Jb(402653184,1,{loginRef:0}),(n()(),l.sb(1,0,null,null,2,"div",[],[[2,"invisible",null]],null,null,null,null)),l.Fb(131072,i.b,[l.h]),(n()(),l.Lb(-1,null,[" loading..\n"])),(n()(),l.sb(4,0,null,null,6,"div",[],[[2,"invisible",null]],null,null,null,null)),l.Fb(131072,i.b,[l.h]),(n()(),l.sb(6,0,[[1,0],["loginRef",1]],null,1,"div",[],[[2,"invisible",null]],null,null,null,null)),l.Fb(131072,i.b,[l.h]),(n()(),l.hb(16777216,null,null,2,null,s)),l.rb(9,16384,null,0,i.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),l.Fb(131072,i.b,[l.h])],(function(n,t){var e=t.component;n(t,9,0,l.Mb(t,9,0,l.Db(t,10).transform(e.user$)))}),(function(n,t){var e=t.component;n(t,1,0,!l.Mb(t,1,0,l.Db(t,2).transform(e.authLoading$))),n(t,4,0,l.Mb(t,4,0,l.Db(t,5).transform(e.authLoading$))),n(t,6,0,!l.Mb(t,6,0,l.Db(t,7).transform(e.canLogin$)))}))}var b=l.ob("dwu-user-login",u.a,(function(n){return l.Nb(0,[(n()(),l.sb(0,0,null,null,1,"dwu-user-login",[],null,null,null,a,c)),l.rb(1,114688,null,0,u.a,[o.n,l.k,r.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[])},W61y:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e("o0su");var l=e("DQLy"),i=e("YZbJ"),u=function(){function n(t,e,u){_classCallCheck(this,n),this.store=t,this.hostEl=e,this.authService=u,this.user$=this.store.pipe(Object(l.B)(i.d)),this.authLoading$=this.store.pipe(Object(l.B)(i.b)),this.canLogin$=this.store.pipe(Object(l.B)(i.c))}return _createClass(n,[{key:"ngOnInit",value:function(){this.authService.getFirebaseAuthUI().start(this.loginRef.nativeElement,Object.assign({},this.authService.defaultUiConfig))}},{key:"signOut",value:function(){this.store.dispatch(i.a.signOut({nativeEl:this.loginRef.nativeElement}))}}]),n}()},YZbJ:function(n,t,e){"use strict";var l=e("Z0Sn"),i=(e("7sJY"),e("BaDc"),e("DQLy")),u=Object(i.v)("auth"),o=Object(i.y)(u,(function(n){return n.user})),r=Object(i.y)(o,(function(n){return void 0===n})),c=Object(i.y)(o,(function(n){return null===n}));e("Bhw0"),e.d(t,"a",(function(){return l.a})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return c}))},"jG/M":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=_createClass((function n(){_classCallCheck(this,n)}))},o0su:function(n,t,e){"use strict";e("YDhq"),e("Z2Br"),e("trGy"),e("xpxz"),e("QmNs"),e("GrFz"),e("cxyc"),e("7F6a")}}]);