(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"+LTj":function(e,t,n){"use strict";n.r(t);var a=n("8Y7J");class s{}var o=n("pMnS"),r=n("DQLy"),c=n("+ghK"),i=n("RrDs"),l=n("lJxs");class b{constructor(e){this.store=e,this.selectedImageStream$=this.store.pipe(Object(r.B)(c.b)),this.imageSourceIds$=this.selectedImageStream$.pipe(Object(l.a)(e=>new Set(e.sourceIds))),this.classifierIds$=this.selectedImageStream$.pipe(Object(l.a)(e=>new Set(e.classifierIds)))}ngOnInit(){}onSelectedImageSourceIdsChange(e,t){const n=Array.from(t||[]).sort();console.log("sourceIds",n),this.store.dispatch(i.a.patchResourceDoc({resource:{path:"imageStreams/"+e},patch:{sourceIds:n}}))}onSelectedClassifierIdsChange(e,t){const n=Array.from(t||[]).sort();this.store.dispatch(i.a.patchResourceDoc({resource:{path:"imageStreams/"+e},patch:{classifierIds:n}}))}onSave(e,t){this.store.dispatch(i.a.patchResourceDoc({resource:{path:"imageStreams/"+e},patch:t}))}}var m=a.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:1rem 1.25rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]{flex:1 1 0;padding-bottom:5rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   dwu-code-snippet[_ngcontent-%COMP%]{margin:.5rem 1rem;max-width:40rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}"]],data:{}});function u(e){return a.Nb(0,[(e()(),a.Lb(-1,null,["Settings "]))],null,null)}function g(e){return a.Nb(0,[(e()(),a.sb(0,0,null,null,1,"dwu-image-stream-settings",[],null,null,null,u,m)),a.rb(1,114688,null,0,b,[r.n],null,null)],(function(e,t){e(t,1,0)}),null)}var h=a.ob("dwu-image-stream-settings",b,g,{},{},[]),d=n("Vxrp"),p=n("SVse"),B=n("s7LF"),O=n("0gVX"),S=n("iInd");class C{}var I=n("O0RR"),f=n("FE7n"),M=n("Rkte"),P=n("mRcA"),_=n("R7F0"),w=n("a6Df"),j=n("6TI7"),R=n("IP0z"),v=n("/HVE"),x=n("hOhj"),y=n("FdjG"),D=n("mzR0"),A=n("ntSj"),F=n("Wu5v");n.d(t,"ImageStreamSettingsModuleNgFactory",(function(){return $}));var $=a.pb(s,[],(function(e){return a.Ab([a.Bb(512,a.j,a.ab,[[8,[o.a,h,d.a]],[3,a.j],a.v]),a.Bb(4608,p.o,p.n,[a.s,[2,p.A]]),a.Bb(4608,B.r,B.r,[]),a.Bb(135680,O.a,O.a,[a.j,a.g,a.p]),a.Bb(1073742336,p.c,p.c,[]),a.Bb(1073742336,S.p,S.p,[[2,S.u],[2,S.l]]),a.Bb(1073742336,C,C,[]),a.Bb(1073742336,B.q,B.q,[]),a.Bb(1073742336,B.h,B.h,[]),a.Bb(1073742336,I.a,I.a,[]),a.Bb(1073742336,f.a,f.a,[]),a.Bb(1073742336,M.a,M.a,[]),a.Bb(1073742336,P.a,P.a,[]),a.Bb(1073742336,_.a,_.a,[]),a.Bb(1073742336,w.a,w.a,[]),a.Bb(1073742336,j.b,j.b,[]),a.Bb(1073742336,R.a,R.a,[]),a.Bb(1073742336,v.b,v.b,[]),a.Bb(1073742336,x.h,x.h,[]),a.Bb(1073742336,y.a,y.a,[]),a.Bb(1073742336,D.a,D.a,[]),a.Bb(1073742336,A.a,A.a,[]),a.Bb(1073742336,F.a,F.a,[]),a.Bb(1073742336,s,s,[]),a.Bb(1024,S.j,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);