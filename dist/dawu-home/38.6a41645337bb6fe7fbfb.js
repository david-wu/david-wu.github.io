(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"4QUZ":function(n,e,t){"use strict";t.r(e);var o=t("CcnG"),l=function(){return function(){}}(),r=t("pMnS"),c=t("Ip0R"),i=t("6+7j"),s=t("sjqh"),a=t("648H"),u=t("Jtcz"),g=t("yGQT"),d=function(){function n(n){this.store=n,this.onSave=new o.n,this.imageSourcesFilterStr="",this.classifiersFilterStr="",this.selectedImageSourceIds=new Set,this.selectedClassifierIds=new Set,this.editImageSourceIds=new Set,this.editClassifierIds=new Set,this.isEditing=!1,this.imageSourcesConfig={path:"imageSources"},this.classifiersConfig={path:"imageClassifiers"}}return n.prototype.ngOnChanges=function(n){n.imageStream&&(this.stopEdit(),n.imageStream.firstChange||this.unwatchData(),this.watchData(),this.selectedImageSourceIds=new Set(this.imageStream.sourceIds||[]),this.selectedClassifierIds=new Set(this.imageStream.classifierIds||[]))},n.prototype.startEdit=function(){this.isEditing=!0,this.editImageSourceIds=new Set(this.selectedImageSourceIds),this.editClassifierIds=new Set(this.selectedClassifierIds)},n.prototype.save=function(){this.isEditing=!1,new Set,new Set,this.onSave.emit({sourceIds:Array.from(this.editImageSourceIds||[]).sort(),classifierIds:Array.from(this.editClassifierIds||[]).sort()})},n.prototype.stopEdit=function(){this.isEditing=!1,this.editImageSourceIds=new Set(this.selectedImageSourceIds),this.editClassifierIds=new Set(this.selectedClassifierIds)},n.prototype.watchData=function(){},n.prototype.unwatchData=function(){},n.prototype.onSelectedImageSourceIdsChange=function(n){this.editImageSourceIds=n},n.prototype.onSelectedClassifierIdsChange=function(n){this.editClassifierIds=n},n}(),b=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:1rem 1.25rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]{flex:1 1 0;padding-bottom:5rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   dwu-code-snippet[_ngcontent-%COMP%]{margin:.5rem 1rem;max-width:40rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]{display:flex;align-items:center;height:25rem;max-width:30rem}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]{background-color:#ddd9cf;display:flex;flex-direction:column;height:100%;width:100%}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .explorer-title[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-top:.5rem}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button-container[_ngcontent-%COMP%]{flex:1 1 0}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .control-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button[_ngcontent-%COMP%]{flex:1 1 0;background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .wide-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]{flex:0 0 auto;background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;height:26px;display:flex;align-items:center}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .file-explorer[_ngcontent-%COMP%]{flex:1 1 0}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #8a9a5b}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .view-tab[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem 1rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .view-tab[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .view-tab.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .join-table[_ngcontent-%COMP%]   .file-explorer-container[_ngcontent-%COMP%]   .view-tab[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}"]],data:{}});function C(n){return o.Nb(0,[(n()(),o.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o.sb(1,0,null,null,1,"button",[["class","control-button"]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.startEdit()&&o),o}),null,null)),(n()(),o.Lb(-1,null,["Edit"]))],null,null)}function h(n){return o.Nb(0,[(n()(),o.sb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),o.sb(1,0,null,null,1,"button",[["class","control-button"]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.save()&&o),o}),null,null)),(n()(),o.Lb(-1,null,["Save"])),(n()(),o.sb(3,0,null,null,1,"button",[["class","control-button"]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.stopEdit()&&o),o}),null,null)),(n()(),o.Lb(-1,null,["Cancel"]))],null,null)}function f(n){return o.Nb(0,[(n()(),o.sb(0,0,null,null,4,"div",[["class","control-buttons"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,C)),o.rb(2,16384,null,0,c.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,null,1,null,h)),o.rb(4,16384,null,0,c.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.sb(5,0,null,null,7,"div",[["class","join-table"]],null,null,null,null,null)),(n()(),o.sb(6,0,null,null,6,"div",[["class","file-explorer-container"]],null,null,null,null,null)),(n()(),o.sb(7,0,null,null,1,"div",[["class","explorer-title"]],null,null,null,null,null)),(n()(),o.Lb(-1,null,["Classifiers"])),(n()(),o.sb(9,0,null,null,1,"dwu-search-input",[],null,[[null,"searchTextChange"]],(function(n,e,t){var o=!0;return"searchTextChange"===e&&(o=!1!==(n.component.classifiersFilterStr=t)&&o),o}),i.b,i.a)),o.rb(10,49152,null,0,s.a,[],{searchText:[0,"searchText"]},{searchTextChange:"searchTextChange"}),(n()(),o.sb(11,0,null,null,1,"dwu-resource-list-view",[],null,[[null,"selectedResourceIdsChange"]],(function(n,e,t){var o=!0;return"selectedResourceIdsChange"===e&&(o=!1!==n.component.onSelectedClassifierIdsChange(t)&&o),o}),a.b,a.a)),o.rb(12,704512,null,0,u.a,[g.n],{resourceConfig:[0,"resourceConfig"],filterStr:[1,"filterStr"],isMultiSelect:[2,"isMultiSelect"],selectedResourceIds:[3,"selectedResourceIds"]},{selectedResourceIdsChange:"selectedResourceIdsChange"})],(function(n,e){var t=e.component;n(e,2,0,!t.isEditing),n(e,4,0,t.isEditing),n(e,10,0,t.classifiersFilterStr),n(e,12,0,t.classifiersConfig,t.classifiersFilterStr,t.isEditing,t.isEditing?t.editClassifierIds:t.selectedClassifierIds)}),null)}var m=t("+ghK"),O=t("RrDs"),M=t("67Y/"),p=function(){function n(n){this.store=n,this.selectedImageStream$=this.store.pipe(Object(g.B)(m.b)),this.imageSourceIds$=this.selectedImageStream$.pipe(Object(M.a)((function(n){return new Set(n.sourceIds)}))),this.classifierIds$=this.selectedImageStream$.pipe(Object(M.a)((function(n){return new Set(n.classifierIds)})))}return n.prototype.ngOnInit=function(){},n.prototype.onSelectedImageSourceIdsChange=function(n,e){var t=Array.from(e||[]).sort();console.log("sourceIds",t),this.store.dispatch(O.a.patchResourceDoc({resource:{path:"imageStreams/"+n},patch:{sourceIds:t}}))},n.prototype.onSelectedClassifierIdsChange=function(n,e){var t=Array.from(e||[]).sort();this.store.dispatch(O.a.patchResourceDoc({resource:{path:"imageStreams/"+n},patch:{classifierIds:t}}))},n.prototype.onSave=function(n,e){this.store.dispatch(O.a.patchResourceDoc({resource:{path:"imageStreams/"+n},patch:e}))},n}(),P=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:1rem 1.25rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]{flex:1 1 0;padding-bottom:5rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   dwu-code-snippet[_ngcontent-%COMP%]{margin:.5rem 1rem;max-width:40rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}"]],data:{}});function _(n){return o.Nb(0,[(n()(),o.sb(0,0,null,null,1,"dwu-image-stream-classifiers-editor",[],null,[[null,"onSave"]],(function(n,e,t){var o=!0;return"onSave"===e&&(o=!1!==n.component.onSave(n.context.ngIf.id,t)&&o),o}),f,b)),o.rb(1,573440,null,0,d,[g.n],{imageStream:[0,"imageStream"]},{onSave:"onSave"})],(function(n,e){n(e,1,0,e.context.ngIf)}),null)}function w(n){return o.Nb(0,[(n()(),o.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Lb(-1,null,[" Run your stream through the selected classifiers\n"])),(n()(),o.hb(16777216,null,null,2,null,_)),o.rb(3,16384,null,0,c.m,[o.O,o.L],{ngIf:[0,"ngIf"]},null),o.Fb(131072,c.b,[o.h])],(function(n,e){var t=e.component;n(e,3,0,o.Mb(e,3,0,o.Db(e,4).transform(t.selectedImageStream$)))}),null)}function I(n){return o.Nb(0,[(n()(),o.sb(0,0,null,null,1,"dwu-image-stream-classifiers",[],null,null,null,w,P)),o.rb(1,114688,null,0,p,[g.n],null,null)],(function(n,e){n(e,1,0)}),null)}var S=o.ob("dwu-image-stream-classifiers",p,I,{},{},[]),x=t("Vxrp"),v=t("gIcY"),j=t("0gVX"),y=t("ZYCi"),k=function(){return function(){}}(),B=t("O0RR"),R=t("FE7n"),z=t("Rkte"),E=t("mRcA"),F=t("R7F0"),D=t("a6Df"),q=t("s/lM"),A=t("Fzqc"),L=t("dWZg"),N=t("qAlS"),T=t("FdjG"),$=t("mzR0"),G=t("ntSj"),J=t("Wu5v");t.d(e,"ImageStreamClassifiersModuleNgFactory",(function(){return Y}));var Y=o.pb(l,[],(function(n){return o.Ab([o.Bb(512,o.j,o.ab,[[8,[r.a,S,x.a]],[3,o.j],o.w]),o.Bb(4608,c.o,c.n,[o.t,[2,c.A]]),o.Bb(4608,v.r,v.r,[]),o.Bb(135680,j.a,j.a,[o.j,o.g,o.q]),o.Bb(1073742336,c.c,c.c,[]),o.Bb(1073742336,y.p,y.p,[[2,y.u],[2,y.l]]),o.Bb(1073742336,k,k,[]),o.Bb(1073742336,v.q,v.q,[]),o.Bb(1073742336,v.h,v.h,[]),o.Bb(1073742336,B.a,B.a,[]),o.Bb(1073742336,R.a,R.a,[]),o.Bb(1073742336,z.a,z.a,[]),o.Bb(1073742336,E.a,E.a,[]),o.Bb(1073742336,F.a,F.a,[]),o.Bb(1073742336,D.a,D.a,[]),o.Bb(1073742336,q.b,q.b,[]),o.Bb(1073742336,A.a,A.a,[]),o.Bb(1073742336,L.b,L.b,[]),o.Bb(1073742336,N.h,N.h,[]),o.Bb(1073742336,T.a,T.a,[]),o.Bb(1073742336,$.a,$.a,[]),o.Bb(1073742336,G.a,G.a,[]),o.Bb(1073742336,J.a,J.a,[]),o.Bb(1073742336,l,l,[]),o.Bb(1024,y.j,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);