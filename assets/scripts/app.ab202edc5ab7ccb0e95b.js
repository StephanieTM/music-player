(self.webpackChunkfe_proj=self.webpackChunkfe_proj||[]).push([[143],{1294:function(e,n,r){"use strict";var t=r(7294),o=r(3935),a=r(1570),c=r(7484),i=r.n(c),l=(r(3852),r(5202),r(1533)),s=(r(2222),r(8674),r(1539),r(9669)),u=r.n(s),p=r(980),f=(0,p.createStandaloneToast)();var d=(0,r(8764).B)({styles:{global:{body:{fontFamily:"Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}}}),m=(r(9554),r(4747),r(1249),r(9254),r(3727)),h=r(5977),v=(r(8783),r(6992),r(3948),[{title:"Home",code:"home",children:[{title:"Hello World",link:"/",component:function(){return r.e(728).then(r.bind(r,1728))}}]}]);function b(){return t.createElement("div",{className:"app-header"},"🥳 Happy anniversary!")}function y(){var e,n=(e=v,function n(){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e).forEach((function(e){e.children?r.concat(n(e.children,r)):r.push(e)})),r}()),r=t.createElement("div",{className:"app-spinner"},t.createElement(p.Spinner,{size:"md",thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"cyan.500"}));return t.createElement(m.VK,null,t.createElement(b,null),t.createElement(t.Suspense,{fallback:r},t.createElement(h.rs,null,n.map((function(e){return e.component&&e.link?t.createElement(h.AW,{key:e.link,exact:!0,path:e.link,component:(0,t.lazy)(e.component)}):null})))))}var g=r(3391),O=r(1852),k=r(7186),E=(r(7941),r(2526),r(5003),r(9337),r(3321),r(9070),r(7042),r(8309),r(1038),r(1817),r(2165),r(9753),r(6156)),j=r(1253);r(7327),r(2772);function w(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function P(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=0;n<e.length;n+=1){var r=e[n];if(r.link)return r.link;var t=P(r.children);if(t)return t}return""}var S=function(e){return e.filter((function(e){return e.children&&e.children.length&&!e.hideInMenu})).map((function(e){var n=e.children,r=(0,j.Z)(e,["children"]);return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?w(Object(r),!0).forEach((function(n){(0,E.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({link:P(n),menus:n||[],key:r.code,code:r.code},r)}))}(v);var C=(0,k.f)((function(){var e=(0,O.useMediaQuery)({query:"(max-width: 540px)"}),n=(0,t.useState)(S[0]||{}),r=(0,g.Z)(n,2),o=r[0],a=r[1],c=(0,t.useState)(!1),i=(0,g.Z)(c,2),l=i[0],s=i[1],u=(0,t.useMemo)((function(){return o.menus||[]}),[o]);return{apps:S,menus:u,currentApp:o,setCurrentApp:a,appDrawerVisible:l,setAppDrawerVisible:s,isMobile:e}}));u().interceptors.response.use((function(e){return e.data}),(function(e){return!0!==e.response.config.headers.silent&&(404===e.response.status?f({title:"".concat(e.response.status,", ").concat(e.response.config.url," not found."),status:"error",duration:5e3,isClosable:!1}):f({title:e.response.data.message||e.response.data.error||e.response.data,status:"error",duration:5e3,isClosable:!1})),Promise.reject(e)})),i().locale("zh-cn");var D=(0,a.w)((function(){return t.createElement(C.Provider,null,t.createElement(l.x,{theme:d},t.createElement(y,null)))}));o.render(t.createElement(D,null),document.getElementById("app"))}},function(e){"use strict";var n=function(n){return e(e.s=n)};e.O(void 0,[935,256],(function(){return n(3658),n(1294)}))}]);