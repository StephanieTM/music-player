(self.webpackChunkfe_proj=self.webpackChunkfe_proj||[]).push([[143],{1294:function(e,n,t){"use strict";var r=t(7294),o=t(3935),c=t(1570),a=t(7484),i=t.n(a),l=(t(3852),t(5202),t(1533)),s=(t(2222),t(8674),t(1539),t(9669)),u=t.n(s),p=t(980),f=(0,p.createStandaloneToast)();var d=(0,t(8764).B)({styles:{global:{body:{fontFamily:"Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}}}),m=(t(9554),t(4747),t(1249),t(9254),t(3727)),h=t(5977),b=(t(8783),t(6992),t(3948),[{title:"Home",code:"home",children:[{title:"Hello World",link:"/",component:function(){return t.e(728).then(t.bind(t,1728))}}]},{title:"Us",code:"us",children:[{title:"The Song",link:"/us/the-song",component:function(){return t.e(349).then(t.bind(t,7349))}}]}]);function v(){return r.createElement("div",{className:"app-header"},"🥳 Happy anniversary!")}function y(){var e,n=(e=b,function n(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e).forEach((function(e){e.children?t.concat(n(e.children,t)):t.push(e)})),t}()),t=r.createElement("div",{className:"app-spinner"},r.createElement(p.Spinner,{size:"md",thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"cyan.500"}));return r.createElement(m.VK,null,r.createElement(v,null),r.createElement(r.Suspense,{fallback:t},r.createElement(h.rs,null,n.map((function(e){return e.component&&e.link?r.createElement(h.AW,{key:e.link,exact:!0,path:e.link,component:(0,r.lazy)(e.component)}):null})))))}var g=t(3391),k=t(1852),O=t(7186),E=(t(7941),t(2526),t(5003),t(9337),t(3321),t(9070),t(7042),t(8309),t(1038),t(1817),t(2165),t(9753),t(6156)),j=t(1253);t(7327),t(2772);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=0;n<e.length;n+=1){var t=e[n];if(t.link)return t.link;var r=P(t.children);if(r)return r}return""}var S=function(e){return e.filter((function(e){return e.children&&e.children.length&&!e.hideInMenu})).map((function(e){var n=e.children,t=(0,j.Z)(e,["children"]);return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,E.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({link:P(n),menus:n||[],key:t.code,code:t.code},t)}))}(b);var C=(0,O.f)((function(){var e=(0,k.useMediaQuery)({query:"(max-width: 540px)"}),n=(0,r.useState)(S[0]||{}),t=(0,g.Z)(n,2),o=t[0],c=t[1],a=(0,r.useState)(!1),i=(0,g.Z)(a,2),l=i[0],s=i[1],u=(0,r.useMemo)((function(){return o.menus||[]}),[o]);return{apps:S,menus:u,currentApp:o,setCurrentApp:c,appDrawerVisible:l,setAppDrawerVisible:s,isMobile:e}}));u().interceptors.response.use((function(e){return e.data}),(function(e){return!0!==e.response.config.headers.silent&&(404===e.response.status?f({title:"".concat(e.response.status,", ").concat(e.response.config.url," not found."),status:"error",duration:5e3,isClosable:!1}):f({title:e.response.data.message||e.response.data.error||e.response.data,status:"error",duration:5e3,isClosable:!1})),Promise.reject(e)})),i().locale("zh-cn");var D=(0,c.w)((function(){return r.createElement(C.Provider,null,r.createElement(l.x,{theme:d},r.createElement(y,null)))}));o.render(r.createElement(D,null),document.getElementById("app"))}},function(e){"use strict";var n=function(n){return e(e.s=n)};e.O(void 0,[935,256],(function(){return n(3658),n(1294)}))}]);