(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{h3iQ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var b=u("pMnS"),i=u("oBZk"),e=u("ZZ/e"),a=u("SVse"),c=u("rQQX");class r{constructor(l,n,u){this.route=l,this.router=n,this.bookService=u,this.route.paramMap.subscribe(l=>{const n=l.get("id");this.bookService.findById(n).subscribe(l=>{this.book=l})})}ngOnInit(){}goToRead(l){this.router.navigate(["/book/read",l])}}var s=u("iInd"),p=t.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,0,"img",[["style","width: 100%"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){var u=n.component;l(n,0,0,null==u.book?null:u.book.images)}))}function k(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,12,"ion-header",[],null,null,null,i.F,i.j)),t.pb(1,49152,null,0,e.z,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,10,"ion-toolbar",[],null,null,null,i.R,i.v)),t.pb(3,49152,null,0,e.Ab,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.z,i.d)),t.pb(5,49152,null,0,e.j,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,3,"ion-button",[],null,null,null,i.y,i.c)),t.pb(7,49152,null,0,e.i,[t.h,t.k,t.x],null,null),(l()(),t.qb(8,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,i.G,i.k)),t.pb(9,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(10,0,null,0,2,"ion-title",[],null,null,null,i.Q,i.u)),t.pb(11,49152,null,0,e.yb,[t.h,t.k,t.x],null,null),(l()(),t.Eb(12,0,["",""])),(l()(),t.qb(13,0,null,null,55,"ion-content",[],null,null,null,i.D,i.h)),t.pb(14,49152,null,0,e.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(15,0,null,0,21,"ion-card",[],null,null,null,i.B,i.e)),t.pb(16,49152,null,0,e.k,[t.h,t.k,t.x],null,null),(l()(),t.qb(17,0,null,0,19,"ion-card-content",[["style","display: flex;flex-wrap: wrap;"]],null,null,null,i.A,i.f)),t.pb(18,49152,null,0,e.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(19,0,null,0,2,"div",[["style","width: 100px;flex-shrink: 0;flex-grow: 0;padding: 8px;"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,h)),t.pb(21,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(22,0,null,0,10,"div",[["style","display: flex;justify-content: space-between;flex-direction: column;padding: 4px 4px 4px 10px"]],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,1,"div",[["style","font-size: 16px;font-weight: 600;color: #000"]],null,null,null,null,null)),(l()(),t.Eb(24,null,[" "," "])),(l()(),t.qb(25,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(26,null,[" \u4f5c\u8005:"," "])),(l()(),t.qb(27,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(28,null,[" \u5206\u7c7b:"," "])),(l()(),t.qb(29,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(30,null,[" ","\u4e07\u5b57 "])),(l()(),t.qb(31,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(32,null,[" ","\u5206 "])),(l()(),t.qb(33,0,null,0,3,"div",[["style","width: 100%"]],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.goToRead(null==o.book?null:o.book.id)&&t),t}),i.y,i.c)),t.pb(35,49152,null,0,e.i,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Eb(-1,0,["\u5f00\u59cb\u9605\u8bfb"])),(l()(),t.qb(37,0,null,0,31,"ion-card",[["style","padding: 8px"]],null,null,null,i.B,i.e)),t.pb(38,49152,null,0,e.k,[t.h,t.k,t.x],null,null),(l()(),t.qb(39,0,null,0,29,"ion-card-content",[],null,null,null,i.A,i.f)),t.pb(40,49152,null,0,e.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(41,0,null,0,1,"div",[["style","border-bottom: 1px solid #cccccc;padding-bottom: 8px"]],null,null,null,null,null)),(l()(),t.Eb(42,null,[" "," "])),(l()(),t.qb(43,0,null,0,9,"div",[["style","padding: 8px 0;border-bottom: 1px solid #cccccc;"]],null,null,null,null,null)),(l()(),t.qb(44,0,null,null,1,"div",[["style","font-size: 14px;font-weight: 600;padding: 4px 0"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\u6807\u7b7e"])),(l()(),t.qb(46,0,null,null,2,"ion-badge",[],null,null,null,i.x,i.b)),t.pb(47,49152,null,0,e.h,[t.h,t.k,t.x],null,null),(l()(),t.Eb(48,0,["",""])),(l()(),t.Eb(-1,null,[" \xa0 "])),(l()(),t.qb(50,0,null,null,2,"ion-badge",[],null,null,null,i.x,i.b)),t.pb(51,49152,null,0,e.h,[t.h,t.k,t.x],null,null),(l()(),t.Eb(52,0,["",""])),(l()(),t.qb(53,0,null,0,15,"div",[["style","padding: 8px 0;"]],null,null,null,null,null)),(l()(),t.qb(54,0,null,null,1,"div",[["style","font-size: 14px;font-weight: 600;padding: 4px 0"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\u559c\u6b22\u672c\u4e66\u7684\u4eba\u4e5f\u559c\u6b22"])),(l()(),t.qb(56,0,null,null,12,"div",[["style","display: flex"]],null,null,null,null,null)),(l()(),t.qb(57,0,null,null,3,"div",[["style","padding: 2px"]],null,null,null,null,null)),(l()(),t.qb(58,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(59,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(60,null,["",""])),(l()(),t.qb(61,0,null,null,3,"div",[["style","padding: 2px"]],null,null,null,null,null)),(l()(),t.qb(62,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(63,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(64,null,["",""])),(l()(),t.qb(65,0,null,null,3,"div",[["style","padding: 2px"]],null,null,null,null,null)),(l()(),t.qb(66,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(67,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(68,null,["",""]))],(function(l,n){var u=n.component;l(n,9,0,"arrow-back"),l(n,21,0,null==u.book?null:u.book.images),l(n,35,0,"full")}),(function(l,n){var u=n.component;l(n,12,0,null==u.book?null:u.book.name),l(n,24,0,null==u.book?null:u.book.name),l(n,26,0,null==u.book?null:u.book.author),l(n,28,0,null==u.book?null:u.book.type),l(n,30,0,null==u.book?null:u.book.wordcount),l(n,32,0,null==u.book?null:u.book.ratings),l(n,42,0,null==u.book?null:u.book.intro),l(n,48,0,null==u.book?null:u.book.type),l(n,52,0,null==u.book?null:u.book.serialize),l(n,58,0,null==u.book?null:u.book.images),l(n,60,0,null==u.book?null:u.book.name),l(n,62,0,null==u.book?null:u.book.images),l(n,64,0,null==u.book?null:u.book.name),l(n,66,0,null==u.book?null:u.book.images),l(n,68,0,null==u.book?null:u.book.name)}))}function d(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,1,"app-book-intro",[],null,null,null,k,p)),t.pb(1,114688,null,0,r,[s.a,s.m,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.mb("app-book-intro",r,d,{},{},[]),x=u("PqYM");class q{constructor(l,n,u,t,o,b){this.bookService=l,this.router=n,this.menu=u,this.alertController=t,this.domSanitizer=o,this.route=b,this.chapterId=1,this.showOps=!1,this.route.paramMap.subscribe(l=>{this.bookId=l.get("id"),this.bookService.findTitles(this.bookId).subscribe(l=>{this.titles=l}),this.loadChapter(this.chapterId)})}ngOnInit(){}get chapterContent(){return this.domSanitizer.bypassSecurityTrustHtml(this.chapter?this.chapter.content:"")}toggleMenu(l){l&&this.menu.open("titles"),this.menu.close("titles")}loadChapter(l){this.chapterId=l,this.bookService.findChapter(this.bookId,l).subscribe(l=>{this.chapter||this.alertController.create({header:"\u63d0\u793a",message:"\u52a0\u8f7d\u7ae0\u8282\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5",buttons:["\u786e\u8ba4"]}).then(l=>l.present),this.chapter=l,this.chapter.content=this.chapter.content.split("-").map(l=>`<div class="chapter-line">${l}</div>`).join(""),this.toggleMenu(!1),this.showOps=!1,Object(x.a)(300).subscribe(()=>{this.content.fullscreen=!0,this.content.scrollToTop().then(l=>{})})})}goBack(){this.router.navigate(["/home"])}toggleOps(){this.showOps=!this.showOps}onChapterClick(l){const n=l.pageY,u=document.body.clientHeight;n>.35*u&&n<.7*u&&this.toggleOps()}}var f=u("cUpR"),g=t.ob({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.loadChapter(l.context.index+1)&&t),t}),i.H,i.l)),t.pb(1,49152,null,0,e.F,[t.h,t.k,t.x],null,null),(l()(),t.Eb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function y(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,10,"ion-toolbar",[["style","position: fixed;top: 0"]],null,null,null,i.R,i.v)),t.pb(1,49152,null,0,e.Ab,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.z,i.d)),t.pb(3,49152,null,0,e.j,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goBack()&&t),t}),i.y,i.c)),t.pb(5,49152,null,0,e.i,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,i.G,i.k)),t.pb(7,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(8,0,null,0,2,"ion-title",[],null,null,null,i.Q,i.u)),t.pb(9,49152,null,0,e.yb,[t.h,t.k,t.x],null,null),(l()(),t.Eb(10,0,["",""]))],(function(l,n){l(n,7,0,"arrow-back")}),(function(l,n){var u=n.component;l(n,10,0,null==u.chapter?null:u.chapter.bookName)}))}function I(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,2,"ion-button",[["style","width: 100%"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.loadChapter(o.chapterId-1)&&t),t}),i.y,i.c)),t.pb(1,49152,null,0,e.i,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["\u4e0a\u4e00\u7ae0"]))],null,null)}function w(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,2,"ion-button",[["style","width: 100%"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.loadChapter(o.chapterId+1)&&t),t}),i.y,i.c)),t.pb(1,49152,null,0,e.i,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,[" \u4e0b\u4e00\u7ae0 "]))],null,null)}function E(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,24,"ion-footer",[],null,null,null,i.E,i.i)),t.pb(1,49152,null,0,e.x,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,22,"ion-tab-bar",[["slot","bottom"]],null,null,null,i.O,i.s)),t.pb(3,49152,null,0,e.sb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,6,"ion-tab-button",[["tab","account"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleMenu(!0)&&t),t}),i.P,i.t)),t.pb(5,49152,null,0,e.tb,[t.h,t.k,t.x],{tab:[0,"tab"]},null),(l()(),t.qb(6,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,i.G,i.k)),t.pb(7,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(8,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),t.pb(9,49152,null,0,e.L,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["\u76ee\u5f55"])),(l()(),t.qb(11,0,null,0,6,"ion-tab-button",[["tab","contact"]],null,null,null,i.P,i.t)),t.pb(12,49152,null,0,e.tb,[t.h,t.k,t.x],{tab:[0,"tab"]},null),(l()(),t.qb(13,0,null,0,1,"ion-icon",[["name","square"]],null,null,null,i.G,i.k)),t.pb(14,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(15,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),t.pb(16,49152,null,0,e.L,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["\u5b57\u4f53"])),(l()(),t.qb(18,0,null,0,6,"ion-tab-button",[["tab","settings"]],null,null,null,i.P,i.t)),t.pb(19,49152,null,0,e.tb,[t.h,t.k,t.x],{tab:[0,"tab"]},null),(l()(),t.qb(20,0,null,0,1,"ion-icon",[["name","moon"]],null,null,null,i.G,i.k)),t.pb(21,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(22,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),t.pb(23,49152,null,0,e.L,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["\u591c\u95f4"]))],(function(l,n){l(n,5,0,"account"),l(n,7,0,"menu"),l(n,12,0,"contact"),l(n,14,0,"square"),l(n,19,0,"settings"),l(n,21,0,"moon")}),null)}function z(l){return t.Fb(0,[t.Cb(671088640,1,{content:0}),(l()(),t.qb(1,16777216,null,null,1,"ion-router-outlet",[["main",""]],null,null,null,null,null)),t.pb(2,212992,null,0,e.gb,[s.b,t.L,t.j,[8,null],[8,null],e.c,e.Hb,a.f,t.k,s.m,t.x,s.a,[3,e.gb]],null,null),(l()(),t.qb(3,0,null,null,20,"ion-menu",[["menuId","titles"],["side","start"]],null,null,null,i.K,i.o)),t.pb(4,49152,null,0,e.O,[t.h,t.k,t.x],{menuId:[0,"menuId"],side:[1,"side"]},null),(l()(),t.qb(5,0,null,0,12,"ion-header",[],null,null,null,i.F,i.j)),t.pb(6,49152,null,0,e.z,[t.h,t.k,t.x],null,null),(l()(),t.qb(7,0,null,0,10,"ion-toolbar",[],null,null,null,i.R,i.v)),t.pb(8,49152,null,0,e.Ab,[t.h,t.k,t.x],null,null),(l()(),t.qb(9,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.z,i.d)),t.pb(10,49152,null,0,e.j,[t.h,t.k,t.x],null,null),(l()(),t.qb(11,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleMenu(!1)&&t),t}),i.y,i.c)),t.pb(12,49152,null,0,e.i,[t.h,t.k,t.x],null,null),(l()(),t.qb(13,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,i.G,i.k)),t.pb(14,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(15,0,null,0,2,"ion-title",[],null,null,null,i.Q,i.u)),t.pb(16,49152,null,0,e.yb,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["\u76ee\u5f55"])),(l()(),t.qb(18,0,null,0,5,"ion-content",[],null,null,null,i.D,i.h)),t.pb(19,49152,[[1,4]],0,e.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,3,"ion-list",[],null,null,null,i.J,i.n)),t.pb(21,49152,null,0,e.M,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,v)),t.pb(23,278528,null,0,a.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.fb(16777216,null,null,1,null,y)),t.pb(25,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(26,0,null,null,10,"ion-content",[],null,null,null,i.D,i.h)),t.pb(27,49152,[[1,4]],0,e.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(28,0,[["readWrapper",1]],0,8,"div",[["class","read-wrapper default"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onChapterClick(u)&&t),t}),null,null)),(l()(),t.qb(29,0,null,null,1,"div",[["class","chapter-title"]],null,null,null,null,null)),(l()(),t.Eb(30,null,[" "," "])),(l()(),t.qb(31,0,null,null,0,"div",[["class","chapter-content"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.qb(32,0,null,null,4,"div",[["style","display: flex"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(34,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,w)),t.pb(36,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,E)),t.pb(38,16384,null,0,a.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0),l(n,4,0,"titles","start"),l(n,14,0,"arrow-back"),l(n,23,0,u.titles),l(n,25,0,u.showOps),l(n,34,0,1!==u.chapterId),l(n,36,0,u.chapterId!==(null==u.titles?null:u.titles.length)),l(n,38,0,u.showOps)}),(function(l,n){var u=n.component;l(n,30,0,null==u.chapter?null:u.chapter.title),l(n,31,0,u.chapterContent)}))}function F(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,1,"app-book-read",[],null,null,null,z,g)),t.pb(1,114688,null,0,q,[c.a,s.m,e.Fb,e.a,f.b,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.mb("app-book-read",q,F,{},{},[]),O=u("s7LF"),j=u("ADsi");u.d(n,"BookModuleNgFactory",(function(){return A}));var A=t.nb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[b.a,m,C]],[3,t.j],t.v]),t.zb(4608,a.k,a.j,[t.s,[2,a.q]]),t.zb(4608,e.b,e.b,[t.x,t.g]),t.zb(4608,e.Gb,e.Gb,[e.b,t.j,t.p]),t.zb(4608,e.Jb,e.Jb,[e.b,t.j,t.p]),t.zb(4608,O.c,O.c,[]),t.zb(1073742336,a.b,a.b,[]),t.zb(1073742336,e.Cb,e.Cb,[]),t.zb(1073742336,O.b,O.b,[]),t.zb(1073742336,O.a,O.a,[]),t.zb(1073742336,j.a,j.a,[]),t.zb(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),t.zb(1073742336,o,o,[]),t.zb(1024,s.k,(function(){return[[{path:"intro/:id",component:r},{path:"read/:id",component:q}]]}),[])])}))}}]);