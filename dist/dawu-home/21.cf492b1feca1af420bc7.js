(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+ghK":function(e,t,n){"use strict";var o=n("SkNx");n.d(t,"a",(function(){return o.a})),n("ZrwU"),n("wGrp");var r=n("ySLx");n.d(t,"b",(function(){return r.b})),n.d(t,"c",(function(){return r.c})),n("34je")},"34je":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={imageStreamsListVisible:!1,imageStreamsList:[],selectedImageStreamId:void 0,imagesByStreamId:{},imageStreamViewTab:void 0,isGeneratingTokenByImageStream:{},imageStreamTokensByImageStream:{}}},"3s01":function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=function(){return function(){}}(),a=n("Vxrp"),i=n("pMnS"),c=n("l0ih"),s=n("iUGO"),l=n("yGQT"),u=n("ZYCi"),d=n("6+7j"),g=n("sjqh"),b=n("648H"),f=n("Jtcz"),h=n("Ip0R"),m=n("YZbJ"),O=n("+ghK"),p=function(){function e(e,t,n){this.store=e,this.router=t,this.activatedRoute=n,this.filterStr="",this.leftSideExpanded=!1,this.imageStreamsConfig={path:"imageStreams"},this.user$=this.store.pipe(Object(l.B)(m.d)),this.selectedImageStreamId$=this.store.pipe(Object(l.B)(O.c))}return e.prototype.ngOnInit=function(){var e=this;this.loadInUrlState(this.router.url),this.sub=this.router.events.subscribe((function(t){t instanceof u.d&&e.loadInUrlState(t.url)}))},e.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},e.prototype.onSelectedImageStreamIdChange=function(e){var t=this.router.createUrlTree([e],{relativeTo:this.activatedRoute});this.store.dispatch(O.a.navigateToImageStreamView({payload:t.toString()}))},e.prototype.loadInUrlState=function(e){var t=e.split("/"),n=t.indexOf("image-streams"),o=n+1,r=t[n+2];this.store.dispatch(O.a.setSelectedImageStreamId({payload:"intro"===t[o]?void 0:t[o]})),this.store.dispatch(O.a.setImageStreamViewTab({payload:r}))},e}(),_=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:100%;width:100%}@media screen and (max-width:750px){[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{box-shadow:2px 2px 4px 0 #9d9b99;flex:0 0 auto;height:13.25rem;width:100%;max-width:none;transition:height 50ms}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side.expanded[_ngcontent-%COMP%]{height:75%}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:3.5rem;height:1rem;border:1px solid #8a9a5b;border-radius:5px 5px 0 0;text-align:center;display:flex;justify-content:center;cursor:pointer}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]   .expander-icon[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]   .expander-icon.flipped[_ngcontent-%COMP%]{transform:rotate(180deg)}}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]{flex-direction:column}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{box-shadow:2px 2px 4px 0 #9d9b99;flex:0 0 auto;height:13.25rem;width:100%;max-width:none;transition:height 50ms}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side.expanded[_ngcontent-%COMP%]{height:75%}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]{background-color:#3f4038;color:#fcfcf9;position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:3.5rem;height:1rem;border:1px solid #8a9a5b;border-radius:5px 5px 0 0;text-align:center;display:flex;justify-content:center;cursor:pointer}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#4b5320;color:#fcfcf9}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]   .expander-icon[_ngcontent-%COMP%]{font-size:16px}.narrow-mode[_nghost-%COMP%]   div.page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]   .expander-icon.flipped[_ngcontent-%COMP%]{transform:rotate(180deg)}[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]{height:100%;width:100%;display:flex}[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{position:relative;flex:1 1 0;overflow:hidden;max-width:27.5%;min-width:20rem}[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .expander[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{flex:1 1 0;overflow:auto;position:relative}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]{background-color:#ddd9cf;display:flex;flex-direction:column}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .explorer-title[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-top:.5rem}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button-container[_ngcontent-%COMP%]{flex:1 1 0}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button[_ngcontent-%COMP%]{flex:1 1 0;background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]{flex:0 0 auto;background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;height:26px;display:flex;align-items:center}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   .left-side[_ngcontent-%COMP%]   .file-explorer[_ngcontent-%COMP%]{flex:1 1 0}"]],data:{}});function C(e){return o.Nb(0,[(e()(),o.sb(0,0,null,null,21,"div",[["class","page-container"]],null,null,null,null,null)),(e()(),o.sb(1,0,null,null,17,"div",[["class","left-side"]],[[2,"expanded",null]],null,null,null,null)),(e()(),o.sb(2,0,null,null,11,"div",[["class","control-buttons"]],null,null,null,null,null)),(e()(),o.sb(3,0,null,null,1,"dwu-resource-create-button",[["class","wide-button-container"]],null,null,null,c.b,c.a)),o.rb(4,49152,null,0,s.a,[l.n],{resourceConfig:[0,"resourceConfig"],buttonLabel:[1,"buttonLabel"]},null),(e()(),o.sb(5,0,null,null,8,"div",[["class","icon-button"]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==o.Db(e,6).onClick()&&r),r}),null,null)),o.rb(6,16384,[[1,4]],0,u.m,[u.l,u.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Eb(7,1),o.rb(8,1720320,null,2,u.n,[u.l,o.k,o.D,[2,u.m],[2,u.o]],{routerLinkActive:[0,"routerLinkActive"]},null),o.Jb(603979776,1,{links:1}),o.Jb(603979776,2,{linksWithHrefs:1}),o.Eb(11,1),(e()(),o.sb(12,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(e()(),o.Lb(-1,null,["help"])),(e()(),o.sb(14,0,null,null,1,"dwu-search-input",[],null,[[null,"searchTextChange"]],(function(e,t,n){var o=!0;return"searchTextChange"===t&&(o=!1!==(e.component.filterStr=n)&&o),o}),d.b,d.a)),o.rb(15,49152,null,0,g.a,[],{searchText:[0,"searchText"],placeholder:[1,"placeholder"]},{searchTextChange:"searchTextChange"}),(e()(),o.sb(16,0,null,null,2,"dwu-resource-list-view",[],null,[[null,"selectedResourceIdChange"]],(function(e,t,n){var o=!0;return"selectedResourceIdChange"===t&&(o=!1!==e.component.onSelectedImageStreamIdChange(n)&&o),o}),b.b,b.a)),o.rb(17,704512,null,0,f.a,[l.n],{resourceConfig:[0,"resourceConfig"],filterStr:[1,"filterStr"],selectedResourceId:[2,"selectedResourceId"]},{selectedResourceIdChange:"selectedResourceIdChange"}),o.Fb(131072,h.b,[o.h]),(e()(),o.sb(19,0,null,null,2,"div",[["class","right-side"]],null,null,null,null,null)),(e()(),o.sb(20,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.rb(21,212992,null,0,u.q,[u.b,o.O,o.j,[8,null],o.h],null,null)],(function(e,t){var n=t.component;e(t,4,0,n.imageStreamsConfig,"+ New Stream");var r=e(t,7,0,"intro");e(t,6,0,r);var a=e(t,11,0,"active");e(t,8,0,a),e(t,15,0,n.filterStr,"search.."),e(t,17,0,n.imageStreamsConfig,n.filterStr,o.Mb(t,17,2,o.Db(t,18).transform(n.selectedImageStreamId$))),e(t,21,0)}),(function(e,t){e(t,1,0,t.component.leftSideExpanded)}))}function S(e){return o.Nb(0,[(e()(),o.Lb(-1,null,[" login\n"]))],null,null)}function I(e){return o.Nb(0,[(e()(),o.hb(16777216,null,null,2,null,C)),o.rb(1,16384,null,0,h.m,[o.O,o.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),o.Fb(131072,h.b,[o.h]),(e()(),o.hb(0,[["loginTemplate",2]],null,0,null,S))],(function(e,t){var n=t.component;e(t,1,0,o.Mb(t,1,0,o.Db(t,2).transform(n.user$)),o.Db(t,3))}),null)}function M(e){return o.Nb(0,[(e()(),o.sb(0,0,null,null,1,"dwu-image-streams",[],null,null,null,I,_)),o.rb(1,245760,null,0,p,[l.n,u.l,u.a],null,null)],(function(e,t){e(t,1,0)}),null)}var P=o.ob("dwu-image-streams",p,M,{},{},[]),v=n("PTyj"),T=n("gIcY"),j=n("0gVX"),y=n("trGy"),R=n("Z2Br"),E=n("xpxz"),A=n("mrSG"),w=function(){function e(e,t,n,o,r){this.firebaseFunctionsService=e,this.firestore=t,this.storage=n,this.imageProcessing=o,this.exifService=r}return e.prototype.generateImageStreamToken=function(e){return A.__awaiter(this,void 0,void 0,(function(){return A.__generator(this,(function(t){switch(t.label){case 0:return[4,this.firebaseFunctionsService.functions.httpsCallable("generateImageStreamTokenTask")({imageStreamId:e})];case 1:return[2,t.sent()]}}))}))},e.prototype.deleteFile=function(e){return A.__awaiter(this,void 0,void 0,(function(){return A.__generator(this,(function(t){switch(t.label){case 0:return[4,this.storage.deleteFile(e)];case 1:return t.sent(),[4,this.firestore.unregisterFile(e)];case 2:return[2,t.sent()]}}))}))},e.prototype.uploadImageStreamFile=function(e,t,n){return A.__awaiter(this,void 0,void 0,(function(){var o,r,a,i,c,s,l;return A.__generator(this,(function(u){switch(u.label){case 0:return[4,this.exifService.getExifData(e)];case 1:return o=u.sent(),r=this.exifService.getLocationData(o),a={userId:t.uid,fileName:e.name,isUploaded:!1,sourceId:n,locationData:A.__assign({},r)},[4,this.firestore.insertUploadDoc(a)];case 2:return i=u.sent(),c=A.__assign({},a,{id:i.id}),[4,this.imageProcessing.processImageFile(e,o)];case 3:return s=u.sent(),[4,this.storage.uploadFile(s,c.id)];case 4:return[4,u.sent().ref.getDownloadURL()];case 5:return l=u.sent(),[4,this.firestore.registerFileUploaded(c.id,{downloadUrl:l})];case 6:return[2,u.sent()]}}))}))},e.prototype.updateImageStream=function(e,t){return this.firestore.db.collection("imageStreams").doc(e).update(t)},e}(),x=n("QmNs"),B=n("GrFz"),G=n("cxyc"),F=n("YDhq"),k=n("ZrwU"),L=n("7bNT"),D=n("5a0h"),U=n("ntSj"),N=n("O0RR"),z=n("FE7n"),Y=n("Rkte"),$=n("mRcA"),V=n("R7F0"),q=n("a6Df"),J=n("s/lM"),Q=n("Fzqc"),W=n("dWZg"),K=n("qAlS"),Z=n("FdjG"),H=n("mzR0"),X=n("Wu5v"),ee=n("R3e+"),te=function(){return n.e(29).then(n.bind(null,"A/RT")).then((function(e){return e.ImageStreamsIntroModuleNgFactory}))},ne=function(){return n.e(42).then(n.bind(null,"TlF7")).then((function(e){return e.ImageStreamViewModuleNgFactory}))},oe=function(){return function(){}}(),re=n("3A+F"),ae=n("jG/M"),ie=n("wGrp"),ce=n("W61y");n.d(t,"ImageStreamsModuleNgFactory",(function(){return se}));var se=o.pb(r,[],(function(e){return o.Ab([o.Bb(512,o.j,o.ab,[[8,[a.a,i.a,P,v.b]],[3,o.j],o.w]),o.Bb(4608,h.o,h.n,[o.t,[2,h.A]]),o.Bb(4608,T.r,T.r,[]),o.Bb(135680,j.a,j.a,[o.j,o.g,o.q]),o.Bb(4608,y.a,y.a,[R.a]),o.Bb(4608,E.a,E.a,[R.a]),o.Bb(4608,w,w,[x.a,E.a,B.a,G.a,F.a]),o.Bb(4608,k.a,k.a,[l.n,L.a,E.a,w,u.l,D.a]),o.Bb(1073742336,h.c,h.c,[]),o.Bb(1073742336,T.q,T.q,[]),o.Bb(1073742336,T.h,T.h,[]),o.Bb(1073742336,U.a,U.a,[]),o.Bb(1073742336,N.a,N.a,[]),o.Bb(1073742336,z.a,z.a,[]),o.Bb(1073742336,Y.a,Y.a,[]),o.Bb(1073742336,$.a,$.a,[]),o.Bb(1073742336,V.a,V.a,[]),o.Bb(1073742336,q.a,q.a,[]),o.Bb(1073742336,J.b,J.b,[]),o.Bb(1073742336,Q.a,Q.a,[]),o.Bb(1073742336,W.b,W.b,[]),o.Bb(1073742336,K.h,K.h,[]),o.Bb(1073742336,Z.a,Z.a,[]),o.Bb(1073742336,H.a,H.a,[]),o.Bb(1073742336,X.a,X.a,[]),o.Bb(1073742336,ee.a,ee.a,[]),o.Bb(1073742336,u.p,u.p,[[2,u.u],[2,u.l]]),o.Bb(1073742336,oe,oe,[]),o.Bb(1073742336,re.a,re.a,[]),o.Bb(1073742336,ae.a,ae.a,[]),o.Bb(1024,l.O,(function(){return[{}]}),[]),o.Bb(1024,l.j,(function(){return[{key:"imageStreams",reducerFactory:l.s,metaReducers:[],initialState:void 0}]}),[]),o.Bb(1024,l.P,l.W,[o.q,l.O,l.j]),o.Bb(1024,l.N,(function(){return[ie.a]}),[]),o.Bb(1024,l.Q,(function(e){return[e]}),[l.N]),o.Bb(1024,l.b,(function(e,t,n){return[l.X(e,t,n)]}),[o.q,l.N,l.Q]),o.Bb(1024,l.U,(function(e){return[l.H(e)]}),[l.T]),o.Bb(1073873408,l.o,l.o,[l.P,l.b,l.g,l.p,[2,l.U]]),o.Bb(1024,L.p,(function(){return[[k.a]]}),[]),o.Bb(1024,L.g,(function(){return[[]]}),[]),o.Bb(1024,L.q,(function(e,t,n){return[L.k(e,t,n)]}),[o.q,L.p,L.g]),o.Bb(1073742336,L.d,L.d,[L.e,L.q,[2,l.p],[2,l.o]]),o.Bb(1073742336,r,r,[]),o.Bb(1024,u.j,(function(){return[[{path:"",component:p,children:[{path:"intro",loadChildren:te},{path:":imageStreamId",loadChildren:ne},{path:"",pathMatch:"full",redirectTo:"intro"}]}],[{path:"auth",component:ce.a},{path:"auth-success",component:ce.a}]]}),[])])}))},"648H":function(e,t,n){"use strict";var o=n("CcnG"),r=n("nPNc"),a=n("s/lM"),i=n("+J3Q"),c=n("LvDl"),s=n("5tJd"),l=function(){function e(){this.filterStr="",this.selectedResourceIdChange=new o.n,this.selectedResourceIdsChange=new o.n,this.resourceIds=new Set,this.fileGroup=s.a.createWithRoot("ROOT"),this.rootFileId="ROOT"}return e.prototype.ngOnChanges=function(e){e.resources&&this.onResourcesChanges(this.resources),e.selectedResourceId&&!this.selectedResourceIds&&(this.resourceIds=this.selectedResourceId?new Set([this.selectedResourceId]):new Set),e.selectedResourceIds&&this.selectedResourceIds&&(this.resourceIds=new Set(this.selectedResourceIds))},e.prototype.onResourcesChanges=function(e){var t=Object(c.map)(e,(function(e){return{id:e.id,label:e.label||e.id}}));this.fileGroup.setRootChildren(t)},e.prototype.onSelectedFileIdsChange=function(e){this.isMultiSelect&&this.selectedResourceIdsChange.emit(e);var t=Array.from(e||[])[0];this.selectedResourceIdChange.emit(t)},e}(),u=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;width:100%}[_nghost-%COMP%]   dwu-file-explorer[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}"]],data:{}});function d(e){return o.Nb(0,[(e()(),o.sb(0,0,null,null,2,"dwu-file-explorer",[],null,[[null,"filesByIdChange"],[null,"closedFileIdsChange"],[null,"selectedFileIdsChange"]],(function(e,t,n){var o=!0,r=e.component;return"filesByIdChange"===t&&(o=!1!==(r.fileGroup.filesById=n)&&o),"closedFileIdsChange"===t&&(o=!1!==r.fileGroup.setClosedFileIds(n)&&o),"selectedFileIdsChange"===t&&(o=!1!==r.onSelectedFileIdsChange(n)&&o),o}),r.b,r.a)),o.Ib(512,null,a.c,a.c,[[2,a.d]]),o.rb(2,4898816,null,0,i.a,[a.c,o.k],{rootFileId:[0,"rootFileId"],fuzzFilterString:[1,"fuzzFilterString"],filesById:[2,"filesById"],closedFileIds:[3,"closedFileIds"],selectedFileIds:[4,"selectedFileIds"],perfMode:[5,"perfMode"],multiFileSelect:[6,"multiFileSelect"]},{filesByIdChange:"filesByIdChange",closedFileIdsChange:"closedFileIdsChange",selectedFileIdsChange:"selectedFileIdsChange"})],(function(e,t){var n=t.component;e(t,2,0,n.fileGroup.rootFileId,n.filterStr,n.fileGroup.filesById,n.fileGroup.closedFileIds,n.resourceIds,!0,n.isMultiSelect)}),null)}var g=n("Ip0R");n("Jtcz"),n("yGQT"),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var b=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;width:100%}"]],data:{}});function f(e){return o.Nb(0,[(e()(),o.sb(0,0,null,null,2,"dwu-resource-selector",[["class","file-explorer"]],null,[[null,"selectedResourceIdChange"],[null,"selectedResourceIdsChange"]],(function(e,t,n){var o=!0,r=e.component;return"selectedResourceIdChange"===t&&(o=!1!==r.onSelectedImageSourceIdChange(n)&&o),"selectedResourceIdsChange"===t&&(o=!1!==r.onSelectedResourceIdsChange(n)&&o),o}),d,u)),o.rb(1,573440,null,0,l,[],{resources:[0,"resources"],filterStr:[1,"filterStr"],selectedResourceId:[2,"selectedResourceId"],isMultiSelect:[3,"isMultiSelect"],selectedResourceIds:[4,"selectedResourceIds"]},{selectedResourceIdChange:"selectedResourceIdChange",selectedResourceIdsChange:"selectedResourceIdsChange"}),o.Fb(131072,g.b,[o.h])],(function(e,t){var n=t.component;e(t,1,0,o.Mb(t,1,0,o.Db(t,2).transform(n.resourceList$)),n.filterStr,n.selectedResourceId,n.isMultiSelect,n.selectedResourceIds)}),null)}},Jtcz:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("CcnG"),r=n("26FU"),a=n("15JJ"),i=n("67Y/"),c=n("yGQT"),s=n("RrDs"),l=function(){function e(e){var t=this;this.store=e,this.filterStr="",this.selectedResourceIdChange=new o.n,this.selectedResourceIdsChange=new o.n,this.resourceConfig$=new r.a(void 0),this.resourceList$=this.resourceConfig$.pipe(Object(a.a)((function(e){return t.store.pipe(Object(c.B)(s.b),Object(i.a)((function(t){return t&&t[e.path]})))})))}return e.prototype.ngOnChanges=function(e){if(e.resourceConfig){this.resourceConfig$.next(this.resourceConfig);var t=e.resourceConfig,n=t.currentValue,o=t.previousValue;n&&this.store.dispatch(s.a.addVisibleResourceList({resource:n})),o&&this.store.dispatch(s.a.removeVisibleResourceList({resource:o}))}},e.prototype.ngOnDestroy=function(){this.resourceConfig&&this.store.dispatch(s.a.removeVisibleResourceList({resource:this.resourceConfig}))},e.prototype.onSelectedImageSourceIdChange=function(e){this.selectedResourceIdChange.emit(e)},e.prototype.onSelectedResourceIdsChange=function(e){this.selectedResourceIdsChange.emit(e)},e}()},"R3e+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){return function(){}}()},RrDs:function(e,t,n){"use strict";var o=n("yLDM");n.d(t,"a",(function(){return o.a})),n("dW0t"),n("dYoV");var r=n("rUW/");n.d(t,"b",(function(){return r.a})),n("iKuT")},SkNx:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("yGQT"),r=function(){function e(){}return e.CATEGORY="[IMAGE_STREAMS]",e.setSelectedImageStreamId=Object(o.u)(e.CATEGORY+" SET_SELECTED_IMAGE_STREAM_ID",Object(o.A)()),e.loadImagesByStreamId=Object(o.u)(e.CATEGORY+" LOAD_IMAGES_BY_STREAM_ID",Object(o.A)()),e.addImagesByStreamId=Object(o.u)(e.CATEGORY+" ADD_IMAGES_BY_STREAM_ID",Object(o.A)()),e.uploadImageStreamFile=Object(o.u)(e.CATEGORY+" UPLOAD_IMAGE_STREAM_FILE",Object(o.A)()),e.uploadImageStreamFileSuccess=Object(o.u)(e.CATEGORY+" UPLOAD_IMAGE_STREAM_FILE_SUCCESS",Object(o.A)()),e.uploadImageStreamFileFailure=Object(o.u)(e.CATEGORY+" UPLOAD_IMAGE_STREAM_FILE_FAILURE",Object(o.A)()),e.deleteUpload=Object(o.u)(e.CATEGORY+" DELETE_UPLOAD",Object(o.A)()),e.deleteUploadSuccess=Object(o.u)(e.CATEGORY+" DELETE_UPLOAD_SUCCESS",Object(o.A)()),e.deleteUploadFailure=Object(o.u)(e.CATEGORY+" DELETE_UPLOAD_FAILURE",Object(o.A)()),e.setImageStreamViewTab=Object(o.u)(e.CATEGORY+" SET_IMAGE_STREAM_VIEW_TAB",Object(o.A)()),e.navigateToImageStreamView=Object(o.u)(e.CATEGORY+" NAVIGATE_TO_IMAGE_STREAM_VIEW",Object(o.A)()),e.updateImageStream=Object(o.u)(e.CATEGORY+" UPDATE_IMAGE_STREAM",Object(o.A)()),e.updateImageStreamSuccess=Object(o.u)(e.CATEGORY+" UPDATE_IMAGE_STREAM_SUCCESS",Object(o.A)()),e.updateImageStreamFailure=Object(o.u)(e.CATEGORY+" UPDATE_IMAGE_STREAM_FAILURE",Object(o.A)()),e.generateImageStreamToken=Object(o.u)(e.CATEGORY+" GENERATE_IMAGE_STREAM_TOKEN",Object(o.A)()),e.generateImageStreamTokenSuccess=Object(o.u)(e.CATEGORY+" GENERATE_IMAGE_STREAM_TOKEN_SUCCESS",Object(o.A)()),e.generateImageStreamTokenFailure=Object(o.u)(e.CATEGORY+" GENERATE_IMAGE_STREAM_TOKEN_FAILURE",Object(o.A)()),e.loadImageStreamTokens=Object(o.u)(e.CATEGORY+" LOAD_IMAGE_STREAM_TOKENS",Object(o.A)()),e.loadImageStreamTokensSuccess=Object(o.u)(e.CATEGORY+" LOAD_IMAGE_STREAM_TOKENS_SUCCESS",Object(o.A)()),e.loadImageStreamTokensFailure=Object(o.u)(e.CATEGORY+" LOAD_IMAGE_STREAM_TOKENS_FAILURE",Object(o.A)()),e}()},Wu5v:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){return function(){}}()},ZrwU:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("mrSG"),r=n("7bNT"),a=n("yGQT"),i=n("F/XL"),c=n("0/uQ"),s=n("/PH2"),l=n("15JJ"),u=n("67Y/"),d=n("SkNx"),g=n("ySLx"),b=n("YZbJ"),f=function(){return function(e,t,n,f,h,m){var O=this;this.store$=e,this.actions$=t,this.firestore=n,this.imageStreamsService=f,this.router=h,this.ppService=m,this.loadImagesByStreamId$=Object(r.h)((function(){return O.actions$.pipe(Object(r.j)(d.a.loadImagesByStreamId),Object(s.a)(O.store$.pipe(Object(a.B)(b.d))),Object(l.a)((function(e){var t=o.__read(e,2),n=t[0].payload;return n&&t[1]?O.firestore.getFilesForStream$(n).pipe(Object(u.a)((function(e){var t;return d.a.addImagesByStreamId({payload:(t={},t[n]=e,t)})}))):Object(i.a)(d.a.addImagesByStreamId({payload:{}}))})))})),this.uploadImageStreamFile$=Object(r.h)((function(){return O.actions$.pipe(Object(r.j)(d.a.uploadImageStreamFile),Object(s.a)(O.store$.pipe(Object(a.B)(b.d))),Object(l.a)((function(e){var t=o.__read(e,2),n=t[0],r=t[1],a=n.selectedImageStreamId,s=n.file;return a&&r?Object(c.a)(O.imageStreamsService.uploadImageStreamFile(s,r,a)).pipe(Object(u.a)((function(e){return d.a.uploadImageStreamFileSuccess({selectedImageStreamId:a})}))):Object(i.a)(d.a.uploadImageStreamFileFailure({payload:"no user or stream"}))})))})),this.deleteUpload$=Object(r.h)((function(){return O.actions$.pipe(Object(r.j)(d.a.deleteUpload),Object(l.a)((function(e){var t=e.payload;return t?Object(c.a)(O.imageStreamsService.deleteFile(t)).pipe(Object(u.a)((function(e){return d.a.deleteUploadSuccess({payload:t})}))):Object(i.a)(d.a.deleteUploadFailure({payload:"no uploadId"}))})))})),this.navigateToImageStreamView$=Object(r.h)((function(){return O.actions$.pipe(Object(r.j)(d.a.navigateToImageStreamView),Object(s.a)(O.store$.pipe(Object(a.B)(g.a))),Object(u.a)((function(e){var t=o.__read(e,2),n=t[1];return O.router.navigate(o.__spread([t[0].payload],n?[n]:[]))})))}),{dispatch:!1}),this.updateImageStream$=Object(r.h)((function(){return O.actions$.pipe(Object(r.j)(d.a.updateImageStream),Object(l.a)((function(e){var t=e.imageStreamId,n=e.patch;return Object(c.a)(O.imageStreamsService.updateImageStream(t,n)).pipe(Object(u.a)((function(e){return d.a.updateImageStreamSuccess({imageStreamId:t,patch:n})})))})))}))}}()},iUGO:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("RrDs"),r=function(){function e(e){this.store=e,this.buttonLabel="++"}return e.prototype.onCreateResource=function(){this.store.dispatch(o.a.createResourceDoc({resource:this.resourceConfig,patch:{}}))},e}()},l0ih:function(e,t,n){"use strict";var o=n("CcnG");n("iUGO"),n("yGQT"),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;width:100%}[_nghost-%COMP%]   .wide-button[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .wide-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .wide-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .wide-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}"]],data:{}});function a(e){return o.Nb(0,[(e()(),o.sb(0,0,null,null,1,"div",[["class","wide-button"]],null,[[null,"click"]],(function(e,t,n){var o=!0;return"click"===t&&(o=!1!==e.component.onCreateResource()&&o),o}),null,null)),(e()(),o.Lb(1,null,[" ","\n"]))],null,(function(e,t){e(t,1,0,t.component.buttonLabel)}))}},mzR0:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){return function(){}}()},wGrp:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("mrSG"),r=n("yGQT"),a=n("SkNx"),i=n("34je"),c=Object(r.w)(i.a,Object(r.z)(a.a.setSelectedImageStreamId,(function(e,t){return o.__assign({},e,{selectedImageStreamId:t.payload})})),Object(r.z)(a.a.addImagesByStreamId,(function(e,t){return o.__assign({},e,{imagesByStreamId:o.__assign({},e,t.payload)})})),Object(r.z)(a.a.setImageStreamViewTab,(function(e,t){return o.__assign({},e,{imageStreamViewTab:t.payload})})),Object(r.z)(a.a.generateImageStreamToken,(function(e,t){var n;return o.__assign({},e,{isGeneratingTokenByImageStream:o.__assign({},e.isGeneratingTokenByImageStream,(n={},n[t.payload]=!0,n))})})),Object(r.z)(a.a.generateImageStreamTokenSuccess,(function(e,t){var n;return o.__assign({},e,{isGeneratingTokenByImageStream:o.__assign({},e.isGeneratingTokenByImageStream,(n={},n[t.payload]=!1,n))})})),Object(r.z)(a.a.generateImageStreamTokenFailure,(function(e,t){var n;return o.__assign({},e,{isGeneratingTokenByImageStream:o.__assign({},e.isGeneratingTokenByImageStream,(n={},n[t.payload]=!1,n))})})),Object(r.z)(a.a.loadImageStreamTokensSuccess,(function(e,t){var n;return o.__assign({},e,{imageStreamTokensByImageStream:o.__assign({},e.imageStreamTokensByImageStream,(n={},n[t.imageStreamId]=t.imageStreamTokens,n))})})));function s(e,t){return c(e,t)}},ySLx:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var o=n("yGQT"),r=n("LvDl"),a=n("RrDs"),i=Object(o.v)("imageStreams"),c=(Object(o.y)(i,(function(e){return e.imageStreamsListVisible})),Object(o.y)(i,(function(e){return e.imageStreamsList})),Object(o.y)(a.b,(function(e){return Object(r.keyBy)(e.imageStreams,"id")}))),s=Object(o.y)(i,(function(e){return e.selectedImageStreamId})),l=Object(o.y)(c,s,(function(e,t){return e[t]})),u=(Object(o.y)(i,(function(e){return e.imagesByStreamId})),Object(o.y)(i,(function(e){return e.imageStreamViewTab}))),d=Object(o.y)(i,(function(e){return e.isGeneratingTokenByImageStream}));Object(o.y)(s,d,(function(e,t){return t[e]})),Object(o.y)(i,(function(e){return e.imageStreamTokensByImageStream}))}}]);