function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,_toPropertyKey(e.key),e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var l=_toPrimitive(n,"string");return"symbol"==typeof l?l:String(l)}function _toPrimitive(n,l){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,l||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(n)}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11,24],{"3A+F":function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("W61y");var e=_createClass((function n(){_classCallCheck(this,n)}))},PTyj:function(n,l,t){"use strict";var e=t("8Y7J"),u=t("SVse"),i=t("W61y"),o=t("DQLy"),r=t("trGy");t.d(l,"a",(function(){return c})),t.d(l,"c",(function(){return s})),t.d(l,"b",(function(){return b}));var c=e.qb({encapsulation:0,styles:[[".logged-in-container[_ngcontent-%COMP%]{display:flex;align-items:center}.logged-in-container[_ngcontent-%COMP%]   .display-name-container[_ngcontent-%COMP%]{min-width:2rem;padding:.25rem .5rem;font-size:1rem;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;cursor:auto}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.invisible[_ngcontent-%COMP%]{display:none}"]],data:{}});function a(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","logged-in-container"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"a",[["class","display-name-container"]],null,null,null,null,null)),(n()(),e.Lb(3,null,["",""])),(n()(),e.sb(4,0,null,null,1,"div",[["class","sign-out-button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.signOut()&&e),e}),null,null)),(n()(),e.Lb(-1,null,["Sign Out"]))],null,(function(n,l){n(l,3,0,l.context.ngIf.displayName)}))}function s(n){return e.Nb(0,[e.Jb(402653184,1,{loginRef:0}),(n()(),e.sb(1,0,null,null,2,"div",[],[[2,"invisible",null]],null,null,null,null)),e.Fb(131072,u.b,[e.h]),(n()(),e.Lb(-1,null,[" loading..\n"])),(n()(),e.sb(4,0,null,null,6,"div",[],[[2,"invisible",null]],null,null,null,null)),e.Fb(131072,u.b,[e.h]),(n()(),e.sb(6,0,[[1,0],["loginRef",1]],null,1,"div",[],[[2,"invisible",null]],null,null,null,null)),e.Fb(131072,u.b,[e.h]),(n()(),e.hb(16777216,null,null,2,null,a)),e.rb(9,16384,null,0,u.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Fb(131072,u.b,[e.h])],(function(n,l){var t=l.component;n(l,9,0,e.Mb(l,9,0,e.Db(l,10).transform(t.user$)))}),(function(n,l){var t=l.component;n(l,1,0,!e.Mb(l,1,0,e.Db(l,2).transform(t.authLoading$))),n(l,4,0,e.Mb(l,4,0,e.Db(l,5).transform(t.authLoading$))),n(l,6,0,!e.Mb(l,6,0,e.Db(l,7).transform(t.canLogin$)))}))}var b=e.ob("dwu-user-login",i.a,(function(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"dwu-user-login",[],null,null,null,s,c)),e.rb(1,114688,null,0,i.a,[o.n,e.k,r.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[])},W61y:function(n,l,t){"use strict";t.d(l,"a",(function(){return i})),t("o0su");var e=t("DQLy"),u=t("YZbJ"),i=function(){function n(l,t,i){_classCallCheck(this,n),this.store=l,this.hostEl=t,this.authService=i,this.user$=this.store.pipe(Object(e.B)(u.d)),this.authLoading$=this.store.pipe(Object(e.B)(u.b)),this.canLogin$=this.store.pipe(Object(e.B)(u.c))}return _createClass(n,[{key:"ngOnInit",value:function(){this.authService.getFirebaseAuthUI().start(this.loginRef.nativeElement,Object.assign({},this.authService.defaultUiConfig))}},{key:"signOut",value:function(){this.store.dispatch(u.a.signOut({nativeEl:this.loginRef.nativeElement}))}}]),n}()},YZbJ:function(n,l,t){"use strict";var e=t("Z0Sn"),u=(t("7sJY"),t("BaDc"),t("DQLy")),i=Object(u.v)("auth"),o=Object(u.y)(i,(function(n){return n.user})),r=Object(u.y)(o,(function(n){return void 0===n})),c=Object(u.y)(o,(function(n){return null===n}));t("Bhw0"),t.d(l,"a",(function(){return e.a})),t.d(l,"d",(function(){return o})),t.d(l,"b",(function(){return r})),t.d(l,"c",(function(){return c}))},"jG/M":function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=_createClass((function n(){_classCallCheck(this,n)}))},o0su:function(n,l,t){"use strict";t("YDhq"),t("Z2Br"),t("trGy"),t("xpxz"),t("QmNs"),t("GrFz"),t("cxyc"),t("7F6a")},xy0U:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),u=_createClass((function n(){_classCallCheck(this,n)})),i=t("pMnS"),o=t("iInd"),r=t("PTyj"),c=t("W61y"),a=t("DQLy"),s=t("trGy"),b=t("SVse"),g=t("YZbJ"),f=_createClass((function n(l){_classCallCheck(this,n),this.store=l,this.user$=this.store.pipe(Object(a.B)(g.d))})),d=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1 1 0;overflow:auto;color:#202124;background-color:#fff}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]{display:flex;background-color:#3f4038;color:#fcfcf9;height:2.5rem}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .page-title-container[_ngcontent-%COMP%]{flex:0 0 auto;padding:.5rem 1.25rem;font-size:1.25rem;display:flex;align-items:center;cursor:pointer}@media only screen and (max-width:550px){[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .page-title-container[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]{flex:1 1 0;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]{margin:0 1.5rem;display:flex;justify-content:flex-end;align-items:center}@media only screen and (max-width:550px){[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]{margin:0 .25rem;justify-content:center}}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{flex:0 1 auto;background-color:#3f4038;color:#fcfcf9;width:8rem;padding:.5rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;margin:0 .25rem;border-radius:4px 4px 0 0}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#65635f;color:#fcfcf9}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]:not([disabled]){background-color:#ddd9cf;color:#3f4038}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.login-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:2rem 4rem}.login-page[_ngcontent-%COMP%]   dwu-user-login[_ngcontent-%COMP%]{margin-top:2rem}"]],data:{}});function p(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,26,"div",[["class","nav-items-container"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,7,"div",[["class","nav-item"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,2).onClick()&&u),u}),null,null)),e.rb(2,16384,[[1,4]],0,o.m,[o.l,o.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(3,1),e.rb(4,1720320,null,2,o.n,[o.l,e.k,e.C,[2,o.m],[2,o.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Jb(603979776,1,{links:1}),e.Jb(603979776,2,{linksWithHrefs:1}),e.Eb(7,1),(n()(),e.Lb(-1,null,["Devices"])),(n()(),e.sb(9,0,null,null,7,"div",[["class","nav-item"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,10).onClick()&&u),u}),null,null)),e.rb(10,16384,[[3,4]],0,o.m,[o.l,o.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(11,1),e.rb(12,1720320,null,2,o.n,[o.l,e.k,e.C,[2,o.m],[2,o.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Jb(603979776,3,{links:1}),e.Jb(603979776,4,{linksWithHrefs:1}),e.Eb(15,1),(n()(),e.Lb(-1,null,["CamApps"])),(n()(),e.sb(17,0,null,null,7,"div",[["class","nav-item"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,18).onClick()&&u),u}),null,null)),e.rb(18,16384,[[5,4]],0,o.m,[o.l,o.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(19,1),e.rb(20,1720320,null,2,o.n,[o.l,e.k,e.C,[2,o.m],[2,o.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Jb(603979776,5,{links:1}),e.Jb(603979776,6,{linksWithHrefs:1}),e.Eb(23,1),(n()(),e.Lb(-1,null,["Sources"])),(n()(),e.sb(25,0,null,null,1,"dwu-user-login",[],null,null,null,r.c,r.a)),e.rb(26,114688,null,0,c.a,[a.n,e.k,s.a],null,null)],(function(n,l){var t=n(l,3,0,"image-streams");n(l,2,0,t);var e=n(l,7,0,"active");n(l,4,0,e);var u=n(l,11,0,"image-classifiers");n(l,10,0,u);var i=n(l,15,0,"active");n(l,12,0,i);var o=n(l,19,0,"image-sources");n(l,18,0,o);var r=n(l,23,0,"active");n(l,20,0,r),n(l,26,0)}),null)}function h(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,2,"div",[["class","main-content"]],null,null,null,null,null)),(n()(),e.sb(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.rb(2,212992,null,0,o.q,[o.b,e.O,e.j,[8,null],e.h],null,null)],(function(n,l){n(l,2,0)}),null)}function m(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,6,"div",[["class","login-page"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Welcome to the Picture Piper Platform! "])),(n()(),e.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Please sign in to continue. "])),(n()(),e.sb(5,0,null,null,1,"dwu-user-login",[],null,null,null,r.c,r.a)),e.rb(6,114688,null,0,c.a,[a.n,e.k,s.a],null,null)],(function(n,l){n(l,6,0)}),null)}function v(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,9,"div",[["class","top-nav"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","page-title-container"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,2).onClick()&&u),u}),null,null)),e.rb(2,16384,null,0,o.m,[o.l,o.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(3,1),(n()(),e.sb(4,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Picture Piper"])),(n()(),e.sb(6,0,null,null,3,"div",[["class","right-section"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,2,null,p)),e.rb(8,16384,null,0,b.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Fb(131072,b.b,[e.h]),(n()(),e.hb(16777216,null,null,2,null,h)),e.rb(11,16384,null,0,b.m,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.Fb(131072,b.b,[e.h]),(n()(),e.hb(0,[["loginTemplate",2]],null,0,null,m))],(function(n,l){var t=l.component,u=n(l,3,0,"./");n(l,2,0,u),n(l,8,0,e.Mb(l,8,0,e.Db(l,9).transform(t.user$))),n(l,11,0,e.Mb(l,11,0,e.Db(l,12).transform(t.user$)),e.Db(l,13))}),null)}var C=e.ob("dwu-picture-piper",f,(function(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"dwu-picture-piper",[],null,null,null,v,d)),e.rb(1,49152,null,0,f,[a.n],null,null)],null,null)}),{},{},[]),P=t("Z2Br"),O=t("xpxz"),_=t("5a0h"),M=t("GrFz"),k=t("cxyc"),y=t("YDhq"),w=t("dW0t"),L=t("7bNT"),x=function(){return t.e(31).then(t.bind(null,"kTsK")).then((function(n){return n.PicturePiperIntroModuleNgFactory}))},B=function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,"8oDX")).then((function(n){return n.ImageSourcesModuleNgFactory}))},j=function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,"Jl1S")).then((function(n){return n.ImageClassifiersModuleNgFactory}))},D=function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(22)]).then(t.bind(null,"3s01")).then((function(n){return n.ImageStreamsModuleNgFactory}))},N=_createClass((function n(){_classCallCheck(this,n)})),F=t("3A+F"),I=t("jG/M"),J=t("dYoV");t.d(l,"PicturePiperModuleNgFactory",(function(){return S}));var S=e.pb(u,[],(function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[i.a,C,r.b]],[3,e.j],e.v]),e.Bb(4608,b.o,b.n,[e.s,[2,b.A]]),e.Bb(4608,s.a,s.a,[P.a]),e.Bb(4608,O.a,O.a,[P.a]),e.Bb(4608,_.a,_.a,[O.a,M.a,k.a,y.a]),e.Bb(4608,w.a,w.a,[a.n,L.a,_.a]),e.Bb(1073742336,b.c,b.c,[]),e.Bb(1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),e.Bb(1073742336,N,N,[]),e.Bb(1073742336,F.a,F.a,[]),e.Bb(1073742336,I.a,I.a,[]),e.Bb(1024,a.O,(function(){return[{}]}),[]),e.Bb(1024,a.j,(function(){return[{key:"picturePiper",reducerFactory:a.s,metaReducers:[],initialState:void 0}]}),[]),e.Bb(1024,a.P,a.W,[e.p,a.O,a.j]),e.Bb(1024,a.N,(function(){return[J.a]}),[]),e.Bb(1024,a.Q,(function(n){return[n]}),[a.N]),e.Bb(1024,a.b,(function(n,l,t){return[a.X(n,l,t)]}),[e.p,a.N,a.Q]),e.Bb(1024,a.U,(function(n){return[a.H(n)]}),[a.T]),e.Bb(1073873408,a.o,a.o,[a.P,a.b,a.g,a.p,[2,a.U]]),e.Bb(1024,L.p,(function(){return[[w.a]]}),[]),e.Bb(1024,L.g,(function(){return[[]]}),[]),e.Bb(1024,L.q,(function(n,l,t){return[L.k(n,l,t)]}),[e.p,L.p,L.g]),e.Bb(1073742336,L.d,L.d,[L.e,L.q,[2,a.p],[2,a.o]]),e.Bb(1073742336,u,u,[]),e.Bb(1024,o.j,(function(){return[[{path:"",component:f,children:[{path:"intro",loadChildren:x},{path:"image-sources",loadChildren:B},{path:"image-classifiers",loadChildren:j},{path:"image-streams",loadChildren:D},{path:"",pathMatch:"full",redirectTo:"intro"}]}],[{path:"auth",component:c.a},{path:"auth-success",component:c.a}]]}),[])])}))}}]);