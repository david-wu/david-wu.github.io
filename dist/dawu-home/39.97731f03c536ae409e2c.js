(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{mMhr:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=function(){return function(){}}(),u=l("pMnS"),r=l("ma4j"),c=l("ISaB"),i=l("Ip0R"),a=l("yGQT"),s=l("+ghK"),g=function(){function n(n){this.store=n,this.selectedImageStream$=this.store.pipe(Object(a.B)(s.b))}return n.prototype.onLabelChange=function(n,t){this.store.dispatch(s.a.updateImageStream({imageStreamId:n,patch:{label:t}}))},n.prototype.onDescriptionChange=function(n,t){this.store.dispatch(s.a.updateImageStream({imageStreamId:n,patch:{description:t}}))},n}(),d=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:1rem 1.25rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]{flex:1 1 0;padding-bottom:5rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   dwu-code-snippet[_ngcontent-%COMP%]{margin:.5rem 1rem;max-width:40rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .description-editor[_ngcontent-%COMP%]{margin-top:.5rem}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]{margin-top:.25rem}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{background-color:#eae6da;min-width:2rem;padding:.25rem .5rem;font-size:1rem;cursor:pointer;text-align:center;outline:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;display:inline-block}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#bac39f}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button.active[_ngcontent-%COMP%]:not([disabled]){background-color:#708238;color:#fcfcf9}[_nghost-%COMP%]   .control-buttons[_ngcontent-%COMP%]   .delete-button[disabled][_ngcontent-%COMP%]{pointer-events:none;opacity:.3}[_nghost-%COMP%]   .info-grid[_ngcontent-%COMP%]{margin-top:.5rem}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin:1rem 0}"]],data:{}});function b(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,16,null,null,null,null,null,null,null)),(n()(),e.sb(1,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"dwu-input-string-editor",[],null,[[null,"strChange"]],(function(n,t,l){var e=!0;return"strChange"===t&&(e=!1!==n.component.onLabelChange(n.context.ngIf.id,l)&&e),e}),r.b,r.a)),e.rb(3,114688,null,0,c.a,[],{str:[0,"str"],placeholder:[1,"placeholder"]},{strChange:"strChange"}),(n()(),e.sb(4,0,null,null,2,"div",[["class","description-editor"]],null,null,null,null,null)),(n()(),e.sb(5,0,null,null,1,"dwu-input-string-editor",[],null,[[null,"strChange"]],(function(n,t,l){var e=!0;return"strChange"===t&&(e=!1!==n.component.onDescriptionChange(n.context.ngIf.id,l)&&e),e}),r.b,r.a)),e.rb(6,114688,null,0,c.a,[],{str:[0,"str"],placeholder:[1,"placeholder"]},{strChange:"strChange"}),(n()(),e.sb(7,0,null,null,2,"div",[["class","control-buttons"]],null,null,null,null,null)),(n()(),e.sb(8,0,null,null,1,"span",[["class","delete-button"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" delete "])),(n()(),e.sb(10,0,null,null,6,"div",[["class","info-grid"]],null,null,null,null,null)),(n()(),e.sb(11,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Lb(12,null,["id: ",""])),(n()(),e.sb(13,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Lb(14,null,["mostRecentImage: ",""])),(n()(),e.sb(15,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["upload count over time"]))],(function(n,t){n(t,3,0,t.context.ngIf.label||t.context.ngIf.id,"set a stream name.."),n(t,6,0,t.context.ngIf.description||"","set a description..")}),(function(n,t){n(t,12,0,t.context.ngIf.id),n(t,14,0,t.context.ngIf)}))}function m(n){return e.Nb(0,[(n()(),e.hb(16777216,null,null,2,null,b)),e.rb(1,16384,null,0,i.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Fb(131072,i.b,[e.h])],(function(n,t){var l=t.component;n(t,1,0,e.Mb(t,1,0,e.Db(t,2).transform(l.selectedImageStream$)))}),null)}function p(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"dwu-image-stream-overview",[],null,null,null,m,d)),e.rb(1,49152,null,0,g,[a.n],null,null)],null,null)}var h=e.ob("dwu-image-stream-overview",g,p,{},{},[]),C=l("gIcY"),f=l("ZYCi"),M=function(){return function(){}}(),O=l("UnLV");l.d(t,"ImageStreamOverviewModuleNgFactory",(function(){return P}));var P=e.pb(o,[],(function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[u.a,h]],[3,e.j],e.w]),e.Bb(4608,i.o,i.n,[e.t,[2,i.A]]),e.Bb(4608,C.r,C.r,[]),e.Bb(1073742336,i.c,i.c,[]),e.Bb(1073742336,f.p,f.p,[[2,f.u],[2,f.l]]),e.Bb(1073742336,M,M,[]),e.Bb(1073742336,C.q,C.q,[]),e.Bb(1073742336,C.h,C.h,[]),e.Bb(1073742336,O.a,O.a,[]),e.Bb(1073742336,o,o,[]),e.Bb(1024,f.j,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);