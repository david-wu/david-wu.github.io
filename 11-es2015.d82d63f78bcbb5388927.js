(window.webpackJsonp=window.webpackJsonp||[]).push([[11,24],{"3A+F":function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("W61y");class e{}},PTyj:function(n,l,t){"use strict";var e=t("8Y7J"),u=t("SVse"),o=t("W61y"),i=t("DQLy"),r=t("trGy");t.d(l,"a",(function(){return c})),t.d(l,"c",(function(){return s})),t.d(l,"b",(function(){return g}));var c=e.qb({encapsulation:0,styles:[[".logged-in-container[_ngcontent-%COMP%]{display:flex;align-items:center}.logged-in-container[_ngcontent-%COMP%]   .display-name-container[_ngcontent-%COMP%]{min-width:2rem;padding:.25rem .5rem;font-size:1rem;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;cursor:auto}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}.logged-in-container[_ngcontent-%COMP%]   .sign-out-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.invisible[_ngcontent-%COMP%]{display:none}"]],data:{}});function a(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","logged-in-container"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"a",[["class","display-name-container"]],null,null,null,null,null)),(n()(),e.Lb(3,null,["",""])),(n()(),e.sb(4,0,null,null,1,"div",[["class","sign-out-button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.signOut()&&e),e}),null,null)),(n()(),e.Lb(-1,null,["Sign Out"]))],null,(function(n,l){n(l,3,0,l.context.ngIf.displayName)}))}function s(n){return e.Nb(0,[e.Jb(402653184,1,{loginRef:0}),(n()(),e.sb(1,0,null,null,2,"div",[],[[2,"invisible",null]],null,null,null,null)),e.Fb(131072,u.b,[e.h]),(n()(),e.Lb(-1,null,[" loading..\n"])),(n()(),e.sb(4,0,null,null,6,"div",[],[[2,"invisible",null]],null,null,null,null)),e.Fb(131072,u.b,[e.h]),(n()(),e.sb(6,0,[[1,0],["loginRef",1]],null,1,"div",[],[[2,"invisible",null]],null,null,null,null)),e.Fb(131072,u.b,[e.h]),(n()(),e.hb(16777216,null,null,2,null,a)),e.rb(9,16384,null,0,u.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Fb(131072,u.b,[e.h])],(function(n,l){var t=l.component;n(l,9,0,e.Mb(l,9,0,e.Db(l,10).transform(t.user$)))}),(function(n,l){var t=l.component;n(l,1,0,!e.Mb(l,1,0,e.Db(l,2).transform(t.authLoading$))),n(l,4,0,e.Mb(l,4,0,e.Db(l,5).transform(t.authLoading$))),n(l,6,0,!e.Mb(l,6,0,e.Db(l,7).transform(t.canLogin$)))}))}function b(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"dwu-user-login",[],null,null,null,s,c)),e.rb(1,114688,null,0,o.a,[i.n,e.k,r.a],null,null)],(function(n,l){n(l,1,0)}),null)}var g=e.ob("dwu-user-login",o.a,b,{},{},[])},W61y:function(n,l,t){"use strict";t.d(l,"a",(function(){return o})),t("o0su");var e=t("DQLy"),u=t("YZbJ");class o{constructor(n,l,t){this.store=n,this.hostEl=l,this.authService=t,this.user$=this.store.pipe(Object(e.B)(u.d)),this.authLoading$=this.store.pipe(Object(e.B)(u.b)),this.canLogin$=this.store.pipe(Object(e.B)(u.c))}ngOnInit(){this.authService.getFirebaseAuthUI().start(this.loginRef.nativeElement,Object.assign({},this.authService.defaultUiConfig))}signOut(){this.store.dispatch(u.a.signOut({nativeEl:this.loginRef.nativeElement}))}}},YZbJ:function(n,l,t){"use strict";var e=t("Z0Sn"),u=(t("7sJY"),t("BaDc"),t("DQLy"));const o=Object(u.v)("auth"),i=Object(u.y)(o,n=>n.user),r=Object(u.y)(i,n=>void 0===n),c=Object(u.y)(i,n=>null===n);t("Bhw0"),t.d(l,"a",(function(){return e.a})),t.d(l,"d",(function(){return i})),t.d(l,"b",(function(){return r})),t.d(l,"c",(function(){return c}))},"jG/M":function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{}},o0su:function(n,l,t){"use strict";t("YDhq"),t("Z2Br"),t("trGy"),t("xpxz"),t("QmNs"),t("GrFz"),t("cxyc"),t("7F6a")},xy0U:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("iInd"),r=t("PTyj"),c=t("W61y"),a=t("DQLy"),s=t("trGy"),b=t("SVse"),g=t("YZbJ");class d{constructor(n){this.store=n,this.user$=this.store.pipe(Object(a.B)(g.d))}}var f=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1 1 0;overflow:auto;color:#202124;background-color:#fff}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]{display:flex;background-color:#3f4038;color:#fcfcf9;height:2.5rem}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .page-title-container[_ngcontent-%COMP%]{flex:0 0 auto;padding:.5rem 1.25rem;font-size:1.25rem;display:flex;align-items:center;cursor:pointer}@media only screen and (max-width:550px){[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .page-title-container[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]{flex:1 1 0;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]{margin:0 1.5rem;display:flex;justify-content:flex-end;align-items:center}@media only screen and (max-width:550px){[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]{margin:0 .25rem;justify-content:center}}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{flex:0 1 auto;background-color:#3f4038;color:#fcfcf9;width:8rem;padding:.5rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;margin:0 .25rem;border-radius:4px 4px 0 0}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#65635f;color:#fcfcf9}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]:not([disabled]){background-color:#ddd9cf;color:#3f4038}[_nghost-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   .nav-items-container[_ngcontent-%COMP%]   .nav-item[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.login-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:2rem 4rem}.login-page[_ngcontent-%COMP%]   dwu-user-login[_ngcontent-%COMP%]{margin-top:2rem}"]],data:{}});function p(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,26,"div",[["class","nav-items-container"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,7,"div",[["class","nav-item"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,2).onClick()&&u),u}),null,null)),e.rb(2,16384,[[1,4]],0,i.m,[i.l,i.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(3,1),e.rb(4,1720320,null,2,i.n,[i.l,e.k,e.C,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Jb(603979776,1,{links:1}),e.Jb(603979776,2,{linksWithHrefs:1}),e.Eb(7,1),(n()(),e.Lb(-1,null,["Devices"])),(n()(),e.sb(9,0,null,null,7,"div",[["class","nav-item"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,10).onClick()&&u),u}),null,null)),e.rb(10,16384,[[3,4]],0,i.m,[i.l,i.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(11,1),e.rb(12,1720320,null,2,i.n,[i.l,e.k,e.C,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Jb(603979776,3,{links:1}),e.Jb(603979776,4,{linksWithHrefs:1}),e.Eb(15,1),(n()(),e.Lb(-1,null,["CamApps"])),(n()(),e.sb(17,0,null,null,7,"div",[["class","nav-item"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,18).onClick()&&u),u}),null,null)),e.rb(18,16384,[[5,4]],0,i.m,[i.l,i.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(19,1),e.rb(20,1720320,null,2,i.n,[i.l,e.k,e.C,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Jb(603979776,5,{links:1}),e.Jb(603979776,6,{linksWithHrefs:1}),e.Eb(23,1),(n()(),e.Lb(-1,null,["Sources"])),(n()(),e.sb(25,0,null,null,1,"dwu-user-login",[],null,null,null,r.c,r.a)),e.rb(26,114688,null,0,c.a,[a.n,e.k,s.a],null,null)],(function(n,l){var t=n(l,3,0,"image-streams");n(l,2,0,t);var e=n(l,7,0,"active");n(l,4,0,e);var u=n(l,11,0,"image-classifiers");n(l,10,0,u);var o=n(l,15,0,"active");n(l,12,0,o);var i=n(l,19,0,"image-sources");n(l,18,0,i);var r=n(l,23,0,"active");n(l,20,0,r),n(l,26,0)}),null)}function h(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,2,"div",[["class","main-content"]],null,null,null,null,null)),(n()(),e.sb(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.rb(2,212992,null,0,i.q,[i.b,e.O,e.j,[8,null],e.h],null,null)],(function(n,l){n(l,2,0)}),null)}function m(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,6,"div",[["class","login-page"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Welcome to the Picture Piper Platform! "])),(n()(),e.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Please sign in to continue. "])),(n()(),e.sb(5,0,null,null,1,"dwu-user-login",[],null,null,null,r.c,r.a)),e.rb(6,114688,null,0,c.a,[a.n,e.k,s.a],null,null)],(function(n,l){n(l,6,0)}),null)}function v(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,9,"div",[["class","top-nav"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","page-title-container"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Db(n,2).onClick()&&u),u}),null,null)),e.rb(2,16384,null,0,i.m,[i.l,i.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(3,1),(n()(),e.sb(4,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Picture Piper"])),(n()(),e.sb(6,0,null,null,3,"div",[["class","right-section"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,2,null,p)),e.rb(8,16384,null,0,b.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Fb(131072,b.b,[e.h]),(n()(),e.hb(16777216,null,null,2,null,h)),e.rb(11,16384,null,0,b.m,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.Fb(131072,b.b,[e.h]),(n()(),e.hb(0,[["loginTemplate",2]],null,0,null,m))],(function(n,l){var t=l.component,u=n(l,3,0,"./");n(l,2,0,u),n(l,8,0,e.Mb(l,8,0,e.Db(l,9).transform(t.user$))),n(l,11,0,e.Mb(l,11,0,e.Db(l,12).transform(t.user$)),e.Db(l,13))}),null)}function O(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"dwu-picture-piper",[],null,null,null,v,f)),e.rb(1,49152,null,0,d,[a.n],null,null)],null,null)}var C=e.ob("dwu-picture-piper",d,O,{},{},[]),P=t("Z2Br"),M=t("xpxz"),k=t("5a0h"),_=t("GrFz"),y=t("cxyc"),L=t("YDhq"),x=t("dW0t"),B=t("7bNT");const w=()=>t.e(31).then(t.bind(null,"kTsK")).then(n=>n.PicturePiperIntroModuleNgFactory),j=()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,"8oDX")).then(n=>n.ImageSourcesModuleNgFactory),D=()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,"Jl1S")).then(n=>n.ImageClassifiersModuleNgFactory),N=()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(22)]).then(t.bind(null,"3s01")).then(n=>n.ImageStreamsModuleNgFactory);class F{}var I=t("3A+F"),J=t("jG/M"),E=t("dYoV");t.d(l,"PicturePiperModuleNgFactory",(function(){return S}));var S=e.pb(u,[],(function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[o.a,C,r.b]],[3,e.j],e.v]),e.Bb(4608,b.o,b.n,[e.s,[2,b.A]]),e.Bb(4608,s.a,s.a,[P.a]),e.Bb(4608,M.a,M.a,[P.a]),e.Bb(4608,k.a,k.a,[M.a,_.a,y.a,L.a]),e.Bb(4608,x.a,x.a,[a.n,B.a,k.a]),e.Bb(1073742336,b.c,b.c,[]),e.Bb(1073742336,i.p,i.p,[[2,i.u],[2,i.l]]),e.Bb(1073742336,F,F,[]),e.Bb(1073742336,I.a,I.a,[]),e.Bb(1073742336,J.a,J.a,[]),e.Bb(1024,a.O,(function(){return[{}]}),[]),e.Bb(1024,a.j,(function(){return[{key:"picturePiper",reducerFactory:a.s,metaReducers:[],initialState:void 0}]}),[]),e.Bb(1024,a.P,a.W,[e.p,a.O,a.j]),e.Bb(1024,a.N,(function(){return[E.a]}),[]),e.Bb(1024,a.Q,(function(n){return[n]}),[a.N]),e.Bb(1024,a.b,(function(n,l,t){return[a.X(n,l,t)]}),[e.p,a.N,a.Q]),e.Bb(1024,a.U,(function(n){return[a.H(n)]}),[a.T]),e.Bb(1073873408,a.o,a.o,[a.P,a.b,a.g,a.p,[2,a.U]]),e.Bb(1024,B.p,(function(){return[[x.a]]}),[]),e.Bb(1024,B.g,(function(){return[[]]}),[]),e.Bb(1024,B.q,(function(n,l,t){return[B.k(n,l,t)]}),[e.p,B.p,B.g]),e.Bb(1073742336,B.d,B.d,[B.e,B.q,[2,a.p],[2,a.o]]),e.Bb(1073742336,u,u,[]),e.Bb(1024,i.j,(function(){return[[{path:"",component:d,children:[{path:"intro",loadChildren:w},{path:"image-sources",loadChildren:j},{path:"image-classifiers",loadChildren:D},{path:"image-streams",loadChildren:N},{path:"",pathMatch:"full",redirectTo:"intro"}]}],[{path:"auth",component:c.a},{path:"auth-success",component:c.a}]]}),[])])}))}}]);