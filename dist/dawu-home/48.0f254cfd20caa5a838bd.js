(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"61Ac":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),i=e("Vxrp"),o=e("pMnS"),a=e("gIcY"),s=e("iWpE"),r=e("Zu2T"),c=e("LvDl"),d=function(){function l(){this.maxColumns=3,this.tileIds=Object(c.times)(5e3,(function(l){return l+"_"+Math.floor(5*Math.random())})),this.alwaysUseMaxColumns=!1,this.tileOptions=[{maxWidth:80,aspectRatio:4/3},{maxWidth:160,aspectRatio:4/3},{maxWidth:320,aspectRatio:4/3},{maxWidth:640,aspectRatio:4/3},{maxWidth:1080,aspectRatio:4/3}],this.images=["assets/images/grid-demo-pics/1","assets/images/grid-demo-pics/2","assets/images/grid-demo-pics/3","assets/images/grid-demo-pics/4","assets/images/grid-demo-pics/5"],this.suffixByMaxWidth={80:"_xs.jpg",160:"_ss.jpg",320:"_sm.jpg",640:"_md.jpg",1080:"_lg.jpg"}}return l.prototype.getImgSrc=function(l,n){var e=Number(l.split("_")[1]);return this.images[e]+this.suffixByMaxWidth[n]},l}(),g=u.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:1rem 1.25rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]{flex:1 1 0;padding-bottom:5rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   dwu-code-snippet[_ngcontent-%COMP%]{margin:.5rem 1rem;max-width:40rem}[_nghost-%COMP%]   .demo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .scroll-demo-container[_ngcontent-%COMP%]{width:100%;height:35rem;max-height:35rem;margin-bottom:1.5rem}[_nghost-%COMP%]   .input-section[_ngcontent-%COMP%]{margin:1rem}.tile[_ngcontent-%COMP%]{padding:1px;position:relative}.tile[_ngcontent-%COMP%]   .tile-id[_ngcontent-%COMP%]{background-color:#fff;position:absolute;top:0;left:0}.tile[_ngcontent-%COMP%]   .img-size[_ngcontent-%COMP%]{background-color:#fff;position:absolute;bottom:0;right:0}.tile[_ngcontent-%COMP%]   .grid-image[_ngcontent-%COMP%]{display:block;width:100%;height:100%;cursor:pointer}.tile[_ngcontent-%COMP%]   .grid-image[_ngcontent-%COMP%]:hover{opacity:.85}"]],data:{}});function m(l){return u.Nb(0,[(l()(),u.sb(0,0,null,null,5,"div",[["class","tile"]],[[4,"width",null],[4,"height",null]],[[null,"click"]],(function(l,n,e){var u=!0,t=l.component;return"click"===n&&(t.centeredTileId=l.context.tileId,u=!1!==(t.maxColumns=1)&&u),u}),null,null)),(l()(),u.sb(1,0,null,null,0,"img",[["class","grid-image"]],[[8,"src",4]],null,null,null,null)),(l()(),u.sb(2,0,null,null,1,"div",[["class","tile-id"]],null,null,null,null,null)),(l()(),u.Lb(3,null,["",""])),(l()(),u.sb(4,0,null,null,1,"div",[["class","img-size"]],null,null,null,null,null)),(l()(),u.Lb(5,null,["","px"]))],null,(function(l,n){var e=n.component;l(n,0,0,n.context.scaledImageWidthStr,n.context.scaledImageHeightStr),l(n,1,0,e.getImgSrc(n.context.tileId,n.context.targetTileOption.maxWidth)),l(n,3,0,n.context.tileId),l(n,5,0,n.context.targetTileOption.maxWidth)}))}function b(l){return u.Nb(0,[(l()(),u.sb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Virtual Scroll Grid Demo"])),(l()(),u.sb(2,0,null,null,33,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" VirtualScrollGrid is useful for displaying a large number of tiles. Tile elements are not mounted onto the DOM until they are scrolled into the viewport. This allows for lazy loading of resources and improves render times. "])),(l()(),u.sb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" The width and height of the tiles automatically adjusted to fill the virtualScrollGridComponent's area. This can be used to load lower resolution images when higher resolution images are not required. "])),(l()(),u.sb(7,0,null,null,10,"div",[["class","input-section"]],null,null,null,null,null)),(l()(),u.sb(8,0,null,null,9,"label",[],null,null,null,null,null)),(l()(),u.sb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["maxColumns:"])),(l()(),u.sb(11,0,null,null,6,"input",[["min","1"],["step","1"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,e){var t=!0,i=l.component;return"input"===n&&(t=!1!==u.Db(l,12)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u.Db(l,12).onTouched()&&t),"compositionstart"===n&&(t=!1!==u.Db(l,12)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u.Db(l,12)._compositionEnd(e.target.value)&&t),"change"===n&&(t=!1!==u.Db(l,13).onChange(e.target.value)&&t),"input"===n&&(t=!1!==u.Db(l,13).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u.Db(l,13).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.maxColumns=e)&&t),t}),null,null)),u.rb(12,16384,null,0,a.d,[u.D,u.k,[2,a.a]],null,null),u.rb(13,16384,null,0,a.n,[u.D,u.k],null,null),u.Ib(1024,null,a.i,(function(l,n){return[l,n]}),[a.d,a.n]),u.rb(15,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ib(2048,null,a.j,null,[a.m]),u.rb(17,16384,null,0,a.k,[[4,a.j]],null,null),(l()(),u.sb(18,0,null,null,9,"div",[["class","input-section"]],null,null,null,null,null)),(l()(),u.sb(19,0,null,null,8,"label",[],null,null,null,null,null)),(l()(),u.sb(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["alwaysUseMaxColumns:"])),(l()(),u.sb(22,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,e){var t=!0,i=l.component;return"change"===n&&(t=!1!==u.Db(l,23).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u.Db(l,23).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.alwaysUseMaxColumns=e)&&t),t}),null,null)),u.rb(23,16384,null,0,a.b,[u.D,u.k],null,null),u.Ib(1024,null,a.i,(function(l){return[l]}),[a.b]),u.rb(25,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ib(2048,null,a.j,null,[a.m]),u.rb(27,16384,null,0,a.k,[[4,a.j]],null,null),(l()(),u.sb(28,0,null,null,2,"div",[["class","input-section"]],null,null,null,null,null)),(l()(),u.sb(29,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Lb(30,null,["centeredTileId: ",""])),(l()(),u.sb(31,0,null,null,2,"div",[["class","scroll-demo-container"]],null,null,null,null,null)),(l()(),u.sb(32,0,null,null,1,"dwu-virtual-scroll-grid",[],null,[[null,"alwaysUseMaxColumnsChange"],[null,"centeredTileIdChange"]],(function(l,n,e){var u=!0,t=l.component;return"alwaysUseMaxColumnsChange"===n&&(u=!1!==(t.alwaysUseMaxColumns=e)&&u),"centeredTileIdChange"===n&&(u=!1!==(t.centeredTileId=e)&&u),u}),s.b,s.a)),u.rb(33,770048,null,0,r.a,[u.k],{tileIds:[0,"tileIds"],maxColumns:[1,"maxColumns"],alwaysUseMaxColumns:[2,"alwaysUseMaxColumns"],centeredTileId:[3,"centeredTileId"],tileTemplate:[4,"tileTemplate"],tileOptions:[5,"tileOptions"]},{centeredTileIdChange:"centeredTileIdChange"}),(l()(),u.sb(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Usage"])),(l()(),u.hb(0,[["tileTemplate",2]],null,0,null,m))],(function(l,n){var e=n.component;l(n,15,0,e.maxColumns),l(n,25,0,e.alwaysUseMaxColumns),l(n,33,0,e.tileIds,e.maxColumns,e.alwaysUseMaxColumns,e.centeredTileId,u.Db(n,36),e.tileOptions)}),(function(l,n){var e=n.component;l(n,11,0,u.Db(n,17).ngClassUntouched,u.Db(n,17).ngClassTouched,u.Db(n,17).ngClassPristine,u.Db(n,17).ngClassDirty,u.Db(n,17).ngClassValid,u.Db(n,17).ngClassInvalid,u.Db(n,17).ngClassPending),l(n,22,0,u.Db(n,27).ngClassUntouched,u.Db(n,27).ngClassTouched,u.Db(n,27).ngClassPristine,u.Db(n,27).ngClassDirty,u.Db(n,27).ngClassValid,u.Db(n,27).ngClassInvalid,u.Db(n,27).ngClassPending),l(n,30,0,e.centeredTileId)}))}function h(l){return u.Nb(0,[(l()(),u.sb(0,0,null,null,1,"dwu-virtual-scroll-grid-demo",[],null,null,null,b,g)),u.rb(1,49152,null,0,d,[],null,null)],null,null)}var p=u.ob("dwu-virtual-scroll-grid-demo",d,h,{},{},[]),C=e("Ip0R"),M=e("0gVX"),x=e("Fzqc"),f=e("dWZg"),v=e("qAlS"),_=e("Oo1w"),O=e("mRcA"),w=e("ZYCi"),D=function(){return function(){}}(),P=e("kxb1");e.d(n,"VirtualScrollGridDemoModuleNgFactory",(function(){return I}));var I=u.pb(t,[],(function(l){return u.Ab([u.Bb(512,u.j,u.ab,[[8,[i.a,o.a,p]],[3,u.j],u.w]),u.Bb(4608,C.o,C.n,[u.t,[2,C.A]]),u.Bb(135680,M.a,M.a,[u.j,u.g,u.q]),u.Bb(4608,a.r,a.r,[]),u.Bb(1073742336,C.c,C.c,[]),u.Bb(1073742336,x.a,x.a,[]),u.Bb(1073742336,f.b,f.b,[]),u.Bb(1073742336,v.h,v.h,[]),u.Bb(1073742336,_.a,_.a,[]),u.Bb(1073742336,O.a,O.a,[]),u.Bb(1073742336,w.p,w.p,[[2,w.u],[2,w.l]]),u.Bb(1073742336,D,D,[]),u.Bb(1073742336,a.q,a.q,[]),u.Bb(1073742336,a.h,a.h,[]),u.Bb(1073742336,P.a,P.a,[]),u.Bb(1073742336,t,t,[]),u.Bb(1024,w.j,(function(){return[[{path:"",component:d},{path:"**",redirectTo:""}]]}),[])])}))}}]);