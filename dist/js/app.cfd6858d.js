(function(t){function e(e){for(var n,i,c=e[0],r=e[1],l=e[2],d=0,m=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04be":function(t,e,a){},"061e":function(t,e,a){"use strict";var n=a("205a"),o=a.n(n);o.a},"088b":function(t,e,a){t.exports=a.p+"img/circle.5ef7e2a4.png"},"109e":function(t,e,a){"use strict";var n=a("527f"),o=a.n(n);o.a},1658:function(t,e,a){t.exports=a.p+"img/AnimaiPhone.f884e727.png"},"1e60":function(t,e,a){},"1eb2":function(t,e,a){},"1edf":function(t,e,a){},"205a":function(t,e,a){},"266e":function(t,e,a){t.exports=a.p+"img/Anima1.a27c7bd2.png"},"2e7a":function(t,e,a){},"304b":function(t,e,a){t.exports=a.p+"img/aboutmac.107f8698.png"},"32cd":function(t,e,a){},"4c9b":function(t,e,a){t.exports=a.p+"img/iPhonewomz.1f3a4648.png"},"4df5":function(t,e,a){},5146:function(t,e,a){"use strict";var n=a("1edf"),o=a.n(n);o.a},"527f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"cursor"}),a("div",{staticClass:"cursor-follower"}),a("div",{staticClass:"Menu-icon",on:{click:function(e){return t.ShowHideMenu()}}},[t.isMenu?a("i",{staticClass:"fas fa-times"}):a("i",{staticClass:"fas fa-bars"})]),a("Menu"),a("router-view")],1)},s=[],i=a("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isMenu?a("div",{staticClass:"menu"},[a("div",{staticClass:"Menu"},[a("div",{staticClass:"Menu-list"},[a("router-link",{attrs:{id:"Home",to:"/"},on:{click:function(e){return t.ShowHideMenu()}}},[t._v("Home")]),a("router-link",{attrs:{to:"/about"},on:{click:function(e){return t.ShowHideMenu()}}},[t._v("About")]),a("router-link",{attrs:{to:"/work"},on:{click:function(e){return t.ShowHideMenu()}}},[t._v("Projects")])],1)])]):t._e()},r=[],l=a("2f62"),u={computed:Object(i["a"])({},Object(l["c"])(["isMenu"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["b"])(["ShowMenu","HideMenu"])),Object(l["d"])([])),{},{ShowHideMenu:function(){var t=this;!1===this.isMenu?this.ShowMenu().then((function(){gsap.from(".menu",{x:-500,duration:.3})})):gsap.to(".menu",{x:-500,opacity:0,duration:.2}).then((function(){t.HideMenu()}))}})},d=u,m=(a("e4b4"),a("2877")),p=Object(m["a"])(d,c,r,!1,null,"2764d150",null),f=p.exports,v={components:{Menu:f},computed:Object(i["a"])({},Object(l["c"])(["isMenu"])),mounted:function(){var t=document.querySelector(".cursor"),e=(document.querySelector(".cursor-follower"),function(e){var a=e.clientX,n=e.clientY;t.style.left=a+"px",t.style.top=n+"px",gsap.to(".cursor-follower",{css:{left:a-20,top:n-20}})});window.addEventListener("mousemove",e)},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["b"])(["ShowMenu","HideMenu"])),Object(l["d"])([])),{},{ShowHideMenu:function(){var t=this;!1===this.isMenu?this.ShowMenu().then((function(){gsap.from(".menu",{x:500,duration:.3})})):gsap.to(".menu",{x:500,opacity:0,duration:.2}).then((function(){t.HideMenu()}))}})},b=v,h=(a("5c0b"),Object(m["a"])(b,o,s,!1,null,null,null)),g=h.exports,_=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Projects",attrs:{id:"projects"}},[a("pictures"),a("anima"),a("womz"),a("artesano"),a("router-view")],1)},C=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Womz"},[a("h1",{staticClass:"hover",on:{click:function(e){return t.$router.push("womz")}}},[t._v("Womz")])])},O=[],y={computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])([])),{},{cursorover:function(){var t=document.querySelector(".cursor"),e=document.querySelector(".cursor-follower");t.classList.toggle("active"),e.classList.toggle("active")}})},M=y,x=(a("f64b"),Object(m["a"])(M,j,O,!1,null,"0a1343f4",null)),A=x.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Anima"},[a("h1",{staticClass:"hover",on:{click:function(e){return t.$router.push("anima")}}},[t._v("Anima")])])},H=[],k={computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])([])),{},{cursorover:function(){var t=document.querySelector(".cursor"),e=document.querySelector(".cursor-follower");t.classList.toggle("active"),e.classList.toggle("active")}})},P=k,E=(a("6180"),Object(m["a"])(P,S,H,!1,null,"0975980e",null)),$=E.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"artesano"},[a("h1",{staticClass:"hover"},[t._v("artesano"),a("br"),t._v("graphic")])])}],T={computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])([])),{},{cursorover:function(){var t=document.querySelector(".cursor"),e=document.querySelector(".cursor-follower");t.classList.toggle("active"),e.classList.toggle("active")}})},I=T,q=(a("5146"),Object(m["a"])(I,z,L,!1,null,"5bcc263b",null)),B=q.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pictures"},[t.anima?n("div",{staticClass:"pictures_anima"},[n("img",{staticClass:"mac",attrs:{"data-depth":"0.6",src:a("266e"),alt:""}})]):t._e(),t.womz?n("div",{staticClass:"pictures_womz",attrs:{id:"scene"}},[n("img",{staticClass:"ipad",attrs:{"data-depth":"0.6",src:a("a8b5"),alt:""}}),n("img",{staticClass:"iphone",attrs:{"data-depth":"0.6",src:a("4c9b"),alt:""}})]):t._e(),t.arte?n("div",{staticClass:"pictures_artesano"},[n("img",{staticClass:"mac",attrs:{"data-depth":"0.6",src:a("f022"),alt:""}})]):t._e()])},N=[],J={data:function(){return{womz:!1,arte:!1,anima:!1}},computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])({},Object(l["b"])([])),mounted:function(){var t=this;ScrollTrigger.create({trigger:".Anima",start:"top center",end:"bottom center",onToggle:function(e){console.log("anima. active?",e.isActive),t.anima=!t.anima}}),ScrollTrigger.create({trigger:".artesano",start:"top center",end:"bottom center",onToggle:function(e){console.log("artesano. active?",e.isActive),t.arte=!t.arte}}),ScrollTrigger.create({trigger:".Womz",start:"top center",end:"bottom center",onToggle:function(e){console.log("womz. active?",e.isActive),t.womz=!t.womz}})}},R=J,W=(a("fd63"),Object(m["a"])(R,D,N,!1,null,"71a31edc",null)),F=W.exports,V={name:"Projects",components:{womz:A,anima:$,artesano:B,pictures:F},methods:Object(i["a"])({},Object(l["b"])(["HideMenu"])),mounted:function(){var t=this;gsap.to(".menu",{x:-500,opacity:0,duration:.2}).then((function(){t.HideMenu()})),window.scrollTo({top:0,behavior:"smooth"})}},G=V,U=(a("fbac"),Object(m["a"])(G,w,C,!1,null,"4a43e738",null)),X=U.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home",attrs:{id:"scene"}},[a("Fondo"),t._m(0),t._m(1)],1)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Header",attrs:{"data-depth":"0.8"}},[a("h3",{staticClass:"Header-text"},[t._v("Portfolio - 2020")]),a("h1",{staticClass:"Header-text"},[t._v("DIEGO ALBA")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"mailto:diegoalba15@icloud.com"}},[n("img",{staticClass:"circular",attrs:{src:a("088b"),alt:""}})])}],K=(a("278a"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Fondo"},[a("h1",{staticClass:"diego",attrs:{id:"text1"}},[t._v("diego alba")]),a("h1",{staticClass:"web",attrs:{id:"text2"}},[t._v("web developer")])])}],tt={computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])({},Object(l["b"])([])),mounted:function(){gsap.from("#text1",{y:-70,duration:.5,ease:Linear.easeNone,delay:1}),gsap.from("#text2",{y:130,duration:.5,ease:Linear.easeNone,delay:1})}},et=tt,at=(a("ab61"),Object(m["a"])(et,K,Z,!1,null,"2c0ca48e",null)),nt=at.exports,ot={name:"Home",components:{Fondo:nt},computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])({},Object(l["b"])(["HideMenu"])),mounted:function(){var t=this;gsap.to(".menu",{x:-500,opacity:0,duration:.2}).then((function(){t.HideMenu()})),gsap.to(".circular",{rotation:360,repeat:-1,duration:15,ease:Linear.easeNone}),window.scrollTo({top:0,behavior:"smooth"})}},st=ot,it=(a("061e"),Object(m["a"])(st,Q,Y,!1,null,"7d7ebb7a",null)),ct=it.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("div",{staticClass:"About-Header"},[n("h1",[t._v("web developer "),n("br"),t._v(" "),n("span",[t._v("& designer")])]),n("p",[t._v("Hi, my name is Diego Alba, I’m a Junior Front-end Developer and Designer currently working as a full-time freelancer and open to working for a Company. "),n("br"),n("br"),t._v(" I find passion designing and creating intuitive And interactive Web apps and pages. I incline towards modern and minimalistic design on my projects.")])]),n("div",{staticClass:"About-Mid"},[n("ul",[n("li",[t._v("Skills")]),n("li",[t._v("Vue JS")]),n("li",[t._v("Sass/Scss")]),n("li",[t._v("Javascript")]),n("li",[t._v("Photoshop")]),n("li",[t._v("Adobe XD")]),n("li",[t._v("Illustrator")])]),n("div",{staticClass:"About-Mid_img"},[n("img",{attrs:{src:a("304b"),alt:""}})])])])}],ut={name:"About",computed:Object(i["a"])({},Object(l["c"])([])),methods:Object(i["a"])({},Object(l["b"])(["HideMenu"])),mounted:function(){var t=this;gsap.to(".menu",{x:-500,opacity:0,duration:.2}).then((function(){t.HideMenu()})),window.scrollTo({top:0,behavior:"smooth"})}},dt=ut,mt=(a("f5c2"),Object(m["a"])(dt,rt,lt,!1,null,"2629b094",null)),pt=mt.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Anima"},[n("div",{staticClass:"Anima-Header"},[n("div",{staticClass:"Anima-Header__Img"},[n("img",{staticClass:"Laptop",attrs:{src:a("a8b5")}}),n("img",{staticClass:"iPhone",attrs:{src:a("4c9b"),alt:""}})]),n("div",{staticClass:"Anima-Header__Text"},[n("h1",[t._v("womnz")]),n("h3",[t._v("Shopify Store concept")]),n("h4",[t._v("personal project")]),n("a",{staticClass:"visitbtn",attrs:{href:"https://womz-4732c.firebaseapp.com",target:"_blank"}},[t._v("visit website")])])]),n("div",{staticClass:"Anima-Body"},[n("div",{staticClass:"Anima-Body__Info"},[n("div",{staticClass:"roles"},[n("h2",[t._v("Roles")]),n("p",[t._v("web design")]),n("p",[t._v("developement")])]),n("div",{staticClass:"typo"},[n("h2",[t._v("typography")]),n("p",[t._v("jost regular")])]),n("div",{staticClass:"colors"},[n("h2",[t._v("Colors")]),n("div",{staticClass:"color color1"}),n("div",{staticClass:"color color2"}),n("div",{staticClass:"color color3"})])]),n("div",{staticClass:"Anima-Body__Img"},[n("img",{staticClass:"Laptop2",attrs:{src:a("a88e"),alt:""}}),n("img",{staticClass:"iPad",attrs:{src:a("ade7"),alt:""}}),n("a",{staticClass:"visitbtn",attrs:{href:"https://womz-4732c.firebaseapp.com",target:"_blank"}},[t._v("visit website")])])])])}],bt=(a("eff3"),{}),ht=Object(m["a"])(bt,ft,vt,!1,null,"5c86ba94",null),gt=ht.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Anima"},[n("div",{staticClass:"Anima-Header"},[n("div",{staticClass:"Anima-Header__Img"},[n("img",{staticClass:"Laptop",attrs:{src:a("266e")}}),n("img",{staticClass:"iPhone",attrs:{src:a("1658"),alt:""}})]),n("div",{staticClass:"Anima-Header__Text"},[n("h1",[t._v("anima analytics")]),n("h3",[t._v("social media agency")]),n("h4",[t._v("client work")]),n("a",{staticClass:"visitbtn",attrs:{href:"https://www.animaanalytics.net",target:"_blank"}},[t._v("visit website")])])]),n("div",{staticClass:"Anima-Body"},[n("div",{staticClass:"Anima-Body__Info"},[n("div",{staticClass:"roles"},[n("h2",[t._v("Roles")]),n("p",[t._v("web design")]),n("p",[t._v("developement")])]),n("div",{staticClass:"typo"},[n("h2",[t._v("typography")]),n("p",[t._v("jost regular")])]),n("div",{staticClass:"colors"},[n("h2",[t._v("Colors")]),n("div",{staticClass:"color color1"}),n("div",{staticClass:"color color2"}),n("div",{staticClass:"color color3"})])]),n("div",{staticClass:"Anima-Body__Img"},[n("img",{staticClass:"Laptop2",attrs:{src:a("5adc"),alt:""}}),n("img",{staticClass:"iPad",attrs:{src:a("ab9f"),alt:""}}),n("a",{staticClass:"visitbtn",attrs:{href:"https://www.animaanalytics.net",target:"_blank"}},[t._v("visit website")])])])])}],Ct=(a("109e"),{}),jt=Object(m["a"])(Ct,_t,wt,!1,null,"1115ccec",null),Ot=jt.exports;n["a"].use(_["a"]);var yt=[{path:"/",name:"Home",component:ct},{path:"/work",name:"Projects",component:X},{path:"/about",name:"About",component:pt},{name:"Womz",path:"/womz",component:gt},{name:"Anima",path:"/anima",component:Ot}],Mt=new _["a"]({mode:"history",base:"/",routes:yt}),xt=Mt,At={Menu:!0},St={isMenu:function(t){return!!t.Menu}},Ht={ShowMenu:function(t){var e=t.commit;e("ShowMenu"),console.log("Menu: true")},HideMenu:function(t){var e=t.commit;e("HideMenu"),console.log("Menu: false")}},kt={ShowMenu:function(t){t.Menu=!0},HideMenu:function(t){t.Menu=!1}},Pt={state:At,getters:St,actions:Ht,mutations:kt};n["a"].use(l["a"]);var Et=new l["a"].Store({modules:{Menu:Pt}}),$t=(a("96cf"),a("1da1"),a("522d")),zt=a("efe7");n["a"].use($t["a"]);var Lt="apollo-token",Tt=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"https://womnz.myshopify.com/api/2019-07/graphql",It={httpEndpoint:Tt,wsEndpoint:null,tokenName:Lt,persisting:!1,websocketsOnly:!1,ssr:!1};function qt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(zt["createApolloClient"])(Object(i["a"])(Object(i["a"])({},It),t)),a=e.apolloClient,n=e.wsClient;a.wsClient=n;var o=new $t["a"]({defaultClient:a,defaultOptions:{$query:{}},errorHandler:function(t){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",t.message)}});return o}n["a"].config.productionTip=!1,gsap.registerPlugin(CSSRulePlugin),new n["a"]({router:xt,store:Et,apolloProvider:qt(),render:function(t){return t(g)}}).$mount("#app")},"5adc":function(t,e,a){t.exports=a.p+"img/Macbook-Pro-Mockup---16-Inch-2.8d1c51a0.png"},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},6180:function(t,e,a){"use strict";var n=a("ad4b"),o=a.n(n);o.a},"8e5d":function(t,e,a){},"9c0c":function(t,e,a){},a88e:function(t,e,a){t.exports=a.p+"img/Macbookwomz2.cf1667fb.png"},a8b5:function(t,e,a){t.exports=a.p+"img/Macbookwomz1.1896d28e.png"},ab61:function(t,e,a){"use strict";var n=a("04be"),o=a.n(n);o.a},ab9f:function(t,e,a){t.exports=a.p+"img/iPad-Pro-Mockup.6cb47294.png"},ad4b:function(t,e,a){},ade7:function(t,e,a){t.exports=a.p+"img/iPadwomz.2c400879.png"},e4b4:function(t,e,a){"use strict";var n=a("8e5d"),o=a.n(n);o.a},eff3:function(t,e,a){"use strict";var n=a("32cd"),o=a.n(n);o.a},f022:function(t,e,a){t.exports=a.p+"img/Macbook.e33a232e.png"},f5c2:function(t,e,a){"use strict";var n=a("1e60"),o=a.n(n);o.a},f64b:function(t,e,a){"use strict";var n=a("2e7a"),o=a.n(n);o.a},fbac:function(t,e,a){"use strict";var n=a("1eb2"),o=a.n(n);o.a},fd63:function(t,e,a){"use strict";var n=a("4df5"),o=a.n(n);o.a}});
//# sourceMappingURL=app.cfd6858d.js.map