(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ADsi:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));class s{}},rQQX:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r("Dg1/"),n=r("lJxs"),o=r("8Y7J");let c=(()=>{class e{findChapter(e,t){return Object(s.e)().url("/ionic-reader/assets/mock/book.mock.json").get()}findList(){return Object(s.e)().url("/ionic-reader/assets/mock/book-list.mock.json").get()}findById(e){return this.findList().pipe(Object(n.a)(e=>e[Math.floor(Math.random()*e.length)]))}findTitles(e){return Object(s.e)().url("/ionic-reader/assets/mock/book-title.mock.json").extra(s.b.IGNORE_LOAD).get().pipe(Object(n.a)(e=>e&&e.titles?e.titles.split("-"):e))}}return e.ngInjectableDef=o.Ib({factory:function(){return new e},token:e,providedIn:"root"}),e})()},s7LF:function(e,t,r){"use strict";var s=r("8Y7J");r("cUpR"),r("HDdC"),r("DH7j"),r("lJxs"),r("XoHu"),r("Cfvw"),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i}));let n=(()=>(class{constructor(){this._accessors=[]}add(e,t){this._accessors.push([e,t])}remove(e){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e)return void this._accessors.splice(t,1)}select(e){this._accessors.forEach(t=>{this._isSameGroup(t,e)&&t[1]!==e&&t[1].fireUncheck(e.value)})}_isSameGroup(e,t){return!!e[0].control&&e[0]._parent===t._control._parent&&e[1].name===t.name}}))();const o=new s.o("NgFormSelectorWarning");let c=(()=>(class{}))(),i=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:o,useValue:t.warnOnDeprecatedNgFormSelector}]}}}return e})()}}]);