(function(t){function e(e){for(var i,o,s=e[0],l=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"ps-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToSearch,expression:"textToSearch"}],attrs:{type:"text",placeholder:"Inserisci testo...",id:"search"},domProps:{value:t.textToSearch},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filter.apply(null,arguments)},input:function(e){e.target.composing||(t.textToSearch=e.target.value)}}}),a("button",{attrs:{type:"button"},on:{click:t.filter}},[t._v("Cerca")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h3",[t._v("Movies")]),t._l(t.movies,(function(t){return a("Card",{key:t.id,attrs:{data:t}})}))],2),a("div",{staticClass:"col"},[a("h3",[t._v("Series")]),t._l(t.series,(function(t){return a("Card",{key:t.id,attrs:{data:t}})}))],2)])])},r=[],o=a("bc3a"),s=a.n(o),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",[a("li",[a("img",{staticClass:"_poster",attrs:{src:t.imgPath,alt:""}})]),a("li",[t._v(t._s(t.title))]),this.title!=this.original?a("li",[t._v(t._s(t.original))]):t._e(),a("li",[t._v(t._s(t.flagPath))])])])},u=[],c=(a("b0c0"),{props:{data:Object},computed:{imgPath:function(){var t="https://image.tmdb.org/t/p/",e="w342";return this.data.poster_path?t+e+this.data.poster_path:a("8dee")},title:function(){return this.data.title?this.data.title:this.data.name},originalTitle:function(){return this.data.original_title?this.data.original_title:this.data.original_name},flagPath:function(){return this.data.orginal_language}}}),p=c,d=a("2877"),f=Object(d["a"])(p,l,u,!1,null,null,null),h=f.exports,g={name:"App",components:{Card:h},data:function(){return{apiKey:"04ca2bb9b036573f160499e80eb6b10a",apiUrl:"https://api.themoviedb.org/3",textToSearch:"",movies:[],series:[],langFlags:{en:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",it:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/280px-Flag_of_Italy.svg.png",es:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/280px-Flag_of_Spain.svg.png",de:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/280px-Flag_of_Germany.svg.png",fr:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg/280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png"}}},methods:{searchQuery:function(t,e,a){var i=this;s.a.get(this.apiUrl+t,{params:{api_key:this.apiKey,query:e,language:"it"}}).then((function(t){i[a]=t.data.results}))},filter:function(){this.searchQuery("/search/movie",this.textToSearch,"movies"),this.searchQuery("/search/tv",this.textToSearch,"series")}},mounted:function(){}},_=g,m=(a("5c0b"),Object(d["a"])(_,n,r,!1,null,null,null)),v=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"8dee":function(t,e,a){t.exports=a.p+"img/Movie-placeholder.5b69ca15.png"},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.8578f15d.js.map