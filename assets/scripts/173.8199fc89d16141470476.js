(self.webpackChunkfe_proj=self.webpackChunkfe_proj||[]).push([[173],{7846:function(e,t,n){"use strict";e.exports=n.p+"assets/images/7c570e3e01fab65ac4d6.png"},1173:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(7294),a=n(7846),i=n(3391);var c=n(7186);n(4723),n(4916),n(9653),n(2222);function o(e){var t=e.match(/(\d+):(\d+).(\d+)/);if(t){var n=(0,i.Z)(t,4),r=(n[0],n[1]),a=n[2],c=n[3];return 60*Number(r)+Number("".concat(a,".").concat(c))}return 0}var l=(0,c.f)((function(){var e,t,n=(0,r.useRef)(null),a=(0,r.useState)(!1),c=(0,i.Z)(a,2),l=c[0],s=c[1],u=(0,r.useState)(0),f=(0,i.Z)(u,2),p=f[0],d=f[1],m=(0,r.useState)(0),v=(0,i.Z)(m,2),g=v[0],h=v[1],E=(0,r.useState)({title:"",artist:"",lyrics:[]}),y=(0,i.Z)(E,2),x=y[0],N=y[1],b=(0,r.useState)(-1),S=(0,i.Z)(b,2),I=S[0],_=S[1],R=(e=l,t=(0,r.useRef)(),(0,r.useEffect)((function(){t.current=e})),t.current);function T(){var e;null===(e=n.current)||void 0===e||e.play(),!l&&s(!0)}function C(){var e;null===(e=n.current)||void 0===e||e.pause(),l&&s(!1)}return l&&!R&&T(),!l&&R&&C(),{audioRef:n,duration:g,setDuration:h,currentTime:p,setCurrentTime:d,isPlaying:l,setIsPlaying:s,lyricJson:x,setLyricJson:N,activeLrcIndex:I,setActiveLrcIndex:_,toggleState:function(){s((function(e){return!e}))},play:T,pause:C,jump:function(e){n.current&&(n.current.currentTime="number"==typeof e?e:o(e))}}}));function s(){var e=l.useContainer().play;return r.createElement("div",{className:"land-page-container"},r.createElement("div",{className:"text-container"},"❤️"),r.createElement("div",{className:"down",onClick:function(){e(),window.scrollTo({top:window.visualViewport.height,behavior:"smooth"})}},r.createElement("img",{src:a})))}var u=n(3808);function f(e,t){if(null!=e)if((0,u.mf)(e))e(t);else try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>f(t,e)))}}var d=n(829),m=n(1180),v=n(5284),g=n(8554),h=n.n(g),E=n(4461),y=n(8500);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var[N,b]=(0,y.k)({strict:!1,name:"ButtonGroupContext"}),S=(0,m.forwardRef)(((e,t)=>{var{size:n,colorScheme:a,variant:i,className:c,spacing:o="0.5rem",isAttached:l,isDisabled:s}=e,u=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),f=(0,E.cx)("chakra-button__group",c),p=r.useMemo((()=>({size:n,colorScheme:a,variant:i,isDisabled:s})),[n,a,i,s]),d={display:"inline-flex"};return d=x({},d,l?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:o}}),r.createElement(N,{value:p},r.createElement(m.chakra.div,x({ref:t,role:"group",__css:d,className:f},u)))}));function I(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.Ts&&(S.displayName="ButtonGroup");var R=(0,m.forwardRef)(((e,t)=>{var n,a=b(),i=(0,m.useStyleConfig)("Button",_({},a,e)),c=(0,v.Lr)(e),{isDisabled:o=(null==a?void 0:a.isDisabled),isLoading:l,isActive:s,isFullWidth:u,children:f,leftIcon:d,rightIcon:g,loadingText:y,iconSpacing:x="0.5rem",type:N,spinner:S,spinnerPlacement:R="start",className:A,as:k}=c,w=I(c,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),O=h()({},null!=(n=null==i?void 0:i._focus)?n:{},{zIndex:1}),P=_({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:u?"100%":"auto"},i,!!a&&{_focus:O}),[j,D]=r.useState(!k),L=r.useCallback((e=>{e&&D("BUTTON"===e.tagName)}),[]),F=j?"button":void 0;return r.createElement(m.chakra.button,_({disabled:o||l,ref:p(t,L),as:k,type:null!=N?N:F,"data-active":(0,E.PB)(s),"data-loading":(0,E.PB)(l),__css:P,className:(0,E.cx)("chakra-button",A)},w),d&&!l&&r.createElement(T,{marginEnd:x},d),l&&"start"===R&&r.createElement(C,{label:y,placement:"start"},S),l?y||r.createElement(m.chakra.span,{opacity:0},f):f,l&&"end"===R&&r.createElement(C,{label:y,placement:"end"},S),g&&!l&&r.createElement(T,{marginStart:x},g))}));u.Ts&&(R.displayName="Button");var T=e=>{var{children:t,className:n}=e,a=I(e,["children","className"]),i=r.isValidElement(t)?r.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,E.cx)("chakra-button__icon",n);return r.createElement(m.chakra.span,_({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:c}),i)};u.Ts&&(T.displayName="ButtonIcon");var C=e=>{var{label:t,placement:n,children:a=r.createElement(d.$,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:c}=e,o=I(e,["label","placement","spacing","children","className","__css"]),l=(0,E.cx)("chakra-button__spinner",i),s=_({display:"flex",alignItems:"center",position:t?"relative":"absolute",["start"===n?"marginEnd":"marginStart"]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},c);return r.createElement(m.chakra.div,_({className:l},o,{__css:s}),a)};u.Ts&&(C.displayName="ButtonSpinner");var A={COS_DOMAIN:"https://public-1258874145.cos.ap-nanjing.myqcloud.com"},k=(n(4678),n(1249),n(9669)),w=n.n(k),O={fontSize:"".concat(1.2,"rem"),lineHeight:1.8},P={fontSize:"".concat(1.6,"rem"),lineHeight:1.8};function j(){var e=l.useContainer(),t=e.lyricJson,n=e.setLyricJson,a=e.jump,i=e.currentTime,c=e.activeLrcIndex,s=e.setActiveLrcIndex,u=t.lyrics,f=t.artist,p=t.title,d=(0,r.useRef)(null),m=parseFloat(getComputedStyle(document.documentElement).fontSize);return(0,r.useEffect)((function(){var e=!0;return e&&w().get("".concat(A.COS_DOMAIN,"/assets/the-song.json")).then((function(e){return{title:e.title,artist:e.artist,lyrics:e.lyrics.map((function(e){return{timeSec:o(e.timeTag),content:e.content}}))}})).then((function(e){n(e)})),function(){e=!1}}),[n]),(0,r.useEffect)((function(){for(var e=0;e<u.length;e+=1)if(u[e].timeSec<=i){if(!(e<u.length-1))return void s(e);if(i<u[e+1].timeSec)return void s(e)}s(-1)}),[i,u,s]),(0,r.useEffect)((function(){var e;null===(e=d.current)||void 0===e||e.scrollTo({top:1.2*c*m*1.8,behavior:"smooth"})}),[c,m]),r.createElement("div",{className:"lyric-container",ref:d},r.createElement("div",null,r.createElement("p",{className:"lyric",style:O},p),r.createElement("p",{className:"lyric",style:O},f),u.map((function(e,t){var n=e.content,i=e.timeSec,o=c===t;return r.createElement("p",{key:"".concat(i,"-").concat(t),onClick:function(){return function(e,t){s(t),a(e)}(i,t)},className:"lyric ".concat(o?"active":""),style:o?P:O},n)}))))}function D(){var e=l.useContainer(),t=e.audioRef,n=e.isPlaying,a=e.setIsPlaying,i=e.setCurrentTime,c=e.setDuration,o=e.jump,s=e.play;return(0,r.useEffect)((function(){t.current&&(t.current.src="".concat(A.COS_DOMAIN,"/assets/the-song.mp3"))}),[t]),r.createElement("div",{className:"player-container"},r.createElement(R,{style:{display:"none"},onClick:function(){return a(!n)}},n?"Pause":"Play"),r.createElement(j,null),r.createElement("audio",{ref:t,onEnded:function(){o(0),s()},onTimeUpdate:function(){var e;i((null===(e=t.current)||void 0===e?void 0:e.currentTime)||0)},onDurationChange:function(){var e;c((null===(e=t.current)||void 0===e?void 0:e.duration)||0)}}))}function L(){return r.createElement(l.Provider,null,r.createElement("div",{className:"the-song-container"},r.createElement(s,null),r.createElement(D,null)))}},1530:function(e,t,n){"use strict";var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},7007:function(e,t,n){"use strict";n(4916);var r=n(1320),a=n(7293),i=n(5112),c=n(2261),o=n(8880),l=i("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var m=i(e),v=!a((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),g=v&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return t=!0,null},n[m](""),!t}));if(!v||!g||"replace"===e&&(!s||!u||p)||"split"===e&&!d){var h=/./[m],E=n(m,""[e],(function(e,t,n,r,a){return t.exec===c?v&&!a?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=E[0],x=E[1];r(String.prototype,e,y),r(RegExp.prototype,m,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&o(RegExp.prototype[m],"sham",!0)}},9587:function(e,t,n){var r=n(111),a=n(7674);e.exports=function(e,t,n){var i,c;return a&&"function"==typeof(i=t.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&a(e,c),e}},2814:function(e,t,n){var r=n(7854),a=n(3111).trim,i=n(1361),c=r.parseFloat,o=1/c(i+"-0")!=-1/0;e.exports=o?function(e){var t=a(String(e)),n=c(t);return 0===n&&"-"==t.charAt(0)?-0:n}:c},7651:function(e,t,n){var r=n(4326),a=n(2261);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},2261:function(e,t,n){"use strict";var r,a,i=n(7066),c=n(2999),o=RegExp.prototype.exec,l=String.prototype.replace,s=o,u=(r=/a/,a=/b*/g,o.call(r,"a"),o.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(u||p||f)&&(s=function(e){var t,n,r,a,c=this,s=f&&c.sticky,d=i.call(c),m=c.source,v=0,g=e;return s&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),g=String(e).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==e[c.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,v++),n=new RegExp("^(?:"+m+")",d)),p&&(n=new RegExp("^"+m+"$(?!\\s)",d)),u&&(t=c.lastIndex),r=o.call(s?n:c,g),s?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:u&&r&&(c.lastIndex=c.global?r.index+r[0].length:t),p&&r&&r.length>1&&l.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=s},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){"use strict";var r=n(7293);function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},3111:function(e,t,n){var r=n(4488),a="["+n(1361)+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(e,t,n){"use strict";var r=n(9781),a=n(7854),i=n(4705),c=n(1320),o=n(6656),l=n(4326),s=n(9587),u=n(7593),f=n(7293),p=n(30),d=n(8006).f,m=n(1236).f,v=n(3070).f,g=n(3111).trim,h="Number",E=a.Number,y=E.prototype,x=l(p(y))==h,N=function(e){var t,n,r,a,i,c,o,l,s=u(e,!1);if("string"==typeof s&&s.length>2)if(43===(t=(s=g(s)).charCodeAt(0))||45===t){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+s}for(c=(i=s.slice(2)).length,o=0;o<c;o++)if((l=i.charCodeAt(o))<48||l>a)return NaN;return parseInt(i,r)}return+s};if(i(h,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var b,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(x?f((function(){y.valueOf.call(n)})):l(n)!=h)?s(new E(N(t)),n,S):N(t)},I=r?d(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;I.length>_;_++)o(E,b=I[_])&&!o(S,b)&&v(S,b,m(E,b));S.prototype=y,y.constructor=S,c(a,h,S)}},4678:function(e,t,n){var r=n(2109),a=n(2814);r({global:!0,forced:parseFloat!=a},{parseFloat:a})},4916:function(e,t,n){"use strict";var r=n(2109),a=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},4723:function(e,t,n){"use strict";var r=n(7007),a=n(9670),i=n(7466),c=n(4488),o=n(1530),l=n(7651);r("match",1,(function(e,t,n){return[function(t){var n=c(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var c=a(e),s=String(this);if(!c.global)return l(c,s);var u=c.unicode;c.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(c,s));){var m=String(f[0]);p[d]=m,""===m&&(c.lastIndex=o(s,i(c.lastIndex),u)),d++}return 0===d?null:p}]}))}}]);