(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{q5qS:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var i=e("pMnS"),u=e("ma4j"),s=e("ISaB"),r=e("ZGeo"),a=e("bMre"),c=e("SVse"),g=e("DQLy"),b=e("f7YR"),d=e("LRne"),h=e("eIep");class m{constructor(n,l){this.store=n,this.ppService=l,this.selectedImageClassifier$=this.store.pipe(Object(g.B)(b.b)),this.classifierImages$=this.selectedImageClassifier$.pipe(Object(h.a)(n=>(console.log("imageClassifier",n),n?this.ppService.getImagesForClassifier$(n.id):Object(d.a)([])))),this.classifierImages$.subscribe(console.log)}onLabelChange(n,l){this.store.dispatch(b.a.updateImageClassifier({imageClassifierId:n,patch:{label:l}}))}onDescriptionChange(n,l){this.store.dispatch(b.a.updateImageClassifier({imageClassifierId:n,patch:{description:l}}))}}var p=e("5a0h"),C=t.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:1rem 1.25rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]{flex:1 1 0;padding-bottom:5rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   dwu-code-snippet[_ngcontent-%COMP%]{margin:.5rem 1rem;max-width:40rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .description-editor[_ngcontent-%COMP%]{margin-top:.5rem}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]{margin-top:.25rem}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;display:inline-block}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .info-grid[_ngcontent-%COMP%]{margin-top:.5rem}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin:1rem 0}.grid-container[_ngcontent-%COMP%]{display:flex;width:100%;height:500px;flex-direction:column}.grid-container[_ngcontent-%COMP%]   dwu-image-grid[_ngcontent-%COMP%]{flex:1 1 0}"]],data:{}});function f(n){return t.Nb(0,[(n()(),t.sb(0,0,null,null,20,null,null,null,null,null,null,null)),(n()(),t.sb(1,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,1,"dwu-input-string-editor",[],null,[[null,"strChange"]],(function(n,l,e){var t=!0;return"strChange"===l&&(t=!1!==n.component.onLabelChange(n.context.ngIf.id,e)&&t),t}),u.b,u.a)),t.rb(3,114688,null,0,s.a,[],{str:[0,"str"],placeholder:[1,"placeholder"]},{strChange:"strChange"}),(n()(),t.sb(4,0,null,null,2,"div",[["class","description-editor"]],null,null,null,null,null)),(n()(),t.sb(5,0,null,null,1,"dwu-input-string-editor",[],null,[[null,"strChange"]],(function(n,l,e){var t=!0;return"strChange"===l&&(t=!1!==n.component.onDescriptionChange(n.context.ngIf.id,e)&&t),t}),u.b,u.a)),t.rb(6,114688,null,0,s.a,[],{str:[0,"str"],placeholder:[1,"placeholder"]},{strChange:"strChange"}),(n()(),t.sb(7,0,null,null,2,"div",[["class","control-buttons"]],null,null,null,null,null)),(n()(),t.sb(8,0,null,null,1,"span",[["class","delete-button"]],null,null,null,null,null)),(n()(),t.Lb(-1,null,[" delete "])),(n()(),t.sb(10,0,null,null,6,"div",[["class","info-grid"]],null,null,null,null,null)),(n()(),t.sb(11,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Lb(12,null,["id: ",""])),(n()(),t.sb(13,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Lb(14,null,["mostRecentImage: ",""])),(n()(),t.sb(15,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Lb(-1,null,["upload count over time"])),(n()(),t.sb(17,0,null,null,3,"div",[["class","grid-container"]],null,null,null,null,null)),(n()(),t.sb(18,0,null,null,2,"dwu-image-grid",[],null,null,null,r.b,r.a)),t.rb(19,573440,null,0,a.a,[],{files:[0,"files"]},null),t.Fb(131072,c.b,[t.h])],(function(n,l){var e=l.component;n(l,3,0,l.context.ngIf.label||l.context.ngIf.id,"set a classifier name.."),n(l,6,0,l.context.ngIf.description||"","set a description.."),n(l,19,0,t.Mb(l,19,0,t.Db(l,20).transform(e.classifierImages$)))}),(function(n,l){n(l,12,0,l.context.ngIf.id),n(l,14,0,l.context.ngIf)}))}function O(n){return t.Nb(0,[(n()(),t.hb(16777216,null,null,2,null,f)),t.rb(1,16384,null,0,c.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),t.Fb(131072,c.b,[t.h])],(function(n,l){var e=l.component;n(l,1,0,t.Mb(l,1,0,t.Db(l,2).transform(e.selectedImageClassifier$)))}),null)}function M(n){return t.Nb(0,[(n()(),t.sb(0,0,null,null,1,"dwu-image-classifier-overview",[],null,null,null,O,C)),t.rb(1,49152,null,0,m,[g.n,p.a],null,null)],null,null)}var P=t.ob("dwu-image-classifier-overview",m,M,{},{},[]),_=e("s7LF"),v=e("SxHE"),I=e("IP0z"),w=e("/HVE"),B=e("hOhj"),x=e("Oo1w"),L=e("Tyz4"),j=e("iInd");class y{}var k=e("UnLV");e.d(l,"ImageClassifierOverviewModuleNgFactory",(function(){return S}));var S=t.pb(o,[],(function(n){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[i.a,P]],[3,t.j],t.v]),t.Bb(4608,c.o,c.n,[t.s,[2,c.A]]),t.Bb(4608,_.r,_.r,[]),t.Bb(1073742336,c.c,c.c,[]),t.Bb(1073742336,v.a,v.a,[]),t.Bb(1073742336,I.a,I.a,[]),t.Bb(1073742336,w.b,w.b,[]),t.Bb(1073742336,B.h,B.h,[]),t.Bb(1073742336,x.a,x.a,[]),t.Bb(1073742336,L.a,L.a,[]),t.Bb(1073742336,j.p,j.p,[[2,j.u],[2,j.l]]),t.Bb(1073742336,y,y,[]),t.Bb(1073742336,_.q,_.q,[]),t.Bb(1073742336,_.h,_.h,[]),t.Bb(1073742336,k.a,k.a,[]),t.Bb(1073742336,o,o,[]),t.Bb(1024,j.j,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);