(self.webpackChunkfe_proj=self.webpackChunkfe_proj||[]).push([[34],{8034:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(3391),a=t(7294),l=t(3808);function i(e,n){if(null!=e)if((0,l.mf)(e))e(n);else try{e.current=n}catch(t){throw new Error("Cannot assign value '"+n+"' to ref '"+e+"'")}}function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>{n.forEach((n=>i(n,e)))}}var s=t(829),o=t(1180),u=t(5284),f=t(8554),d=t.n(f),p=t(4461),m=t(8500);function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var[h,g]=(0,m.k)({strict:!1,name:"ButtonGroupContext"}),y=(0,o.forwardRef)(((e,n)=>{var{size:t,colorScheme:r,variant:l,className:i,spacing:c="0.5rem",isAttached:s,isDisabled:u}=e,f=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=(0,p.cx)("chakra-button__group",i),m=a.useMemo((()=>({size:t,colorScheme:r,variant:l,isDisabled:u})),[t,r,l,u]),g={display:"inline-flex"};return g=v({},g,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),a.createElement(h,{value:m},a.createElement(o.chakra.div,v({ref:n,role:"group",__css:g,className:d},f)))}));function b(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}l.Ts&&(y.displayName="ButtonGroup");var k=(0,o.forwardRef)(((e,n)=>{var t,r=g(),l=(0,o.useStyleConfig)("Button",E({},r,e)),i=(0,u.Lr)(e),{isDisabled:s=(null==r?void 0:r.isDisabled),isLoading:f,isActive:m,isFullWidth:v,children:h,leftIcon:y,rightIcon:k,loadingText:N,iconSpacing:x="0.5rem",type:w,spinner:C,spinnerPlacement:O="start",className:j,as:B}=i,T=b(i,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),I=d()({},null!=(t=null==l?void 0:l._focus)?t:{},{zIndex:1}),P=E({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},l,!!r&&{_focus:I}),[R,A]=a.useState(!B),D=a.useCallback((e=>{e&&A("BUTTON"===e.tagName)}),[]),z=R?"button":void 0;return a.createElement(o.chakra.button,E({disabled:s||f,ref:c(n,D),as:B,type:null!=w?w:z,"data-active":(0,p.PB)(m),"data-loading":(0,p.PB)(f),__css:P,className:(0,p.cx)("chakra-button",j)},T),y&&!f&&a.createElement(_,{marginEnd:x},y),f&&"start"===O&&a.createElement(S,{label:N,placement:"start"},C),f?N||a.createElement(o.chakra.span,{opacity:0},h):h,f&&"end"===O&&a.createElement(S,{label:N,placement:"end"},C),k&&!f&&a.createElement(_,{marginStart:x},k))}));l.Ts&&(k.displayName="Button");var _=e=>{var{children:n,className:t}=e,r=b(e,["children","className"]),l=a.isValidElement(n)?a.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,i=(0,p.cx)("chakra-button__icon",t);return a.createElement(o.chakra.span,E({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:i}),l)};l.Ts&&(_.displayName="ButtonIcon");var S=e=>{var{label:n,placement:t,children:r=a.createElement(s.$,{color:"currentColor",width:"1em",height:"1em"}),className:l,__css:i}=e,c=b(e,["label","placement","spacing","children","className","__css"]),u=(0,p.cx)("chakra-button__spinner",l),f=E({display:"flex",alignItems:"center",position:n?"relative":"absolute",["start"===t?"marginEnd":"marginStart"]:n?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},i);return a.createElement(o.chakra.div,E({className:u},c,{__css:f}),r)};l.Ts&&(S.displayName="ButtonSpinner");t(1249),t(2222);var N=t(655);function x(e,n,t){void 0===n&&(n=[]),void 0===t&&(t={loading:!1});var r,l,i=(0,a.useRef)(0),c=(r=(0,a.useRef)(!1),l=(0,a.useCallback)((function(){return r.current}),[]),(0,a.useEffect)((function(){return r.current=!0,function(){r.current=!1}}),[]),l),s=(0,a.useState)(t),o=s[0],u=s[1];return[o,(0,a.useCallback)((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=++i.current;return u((function(e){return(0,N.pi)((0,N.pi)({},e),{loading:!0})})),e.apply(void 0,n).then((function(e){return c()&&r===i.current&&u({value:e,loading:!1}),e}),(function(e){return c()&&r===i.current&&u({error:e,loading:!1}),e}))}),n)]}var w=t(9669),C=t.n(w);function O(){var e=function(e,n){void 0===n&&(n=[]);var t=x(e,n,{loading:!0}),r=t[0],l=t[1];return(0,a.useEffect)((function(){l()}),[l]),r}((function(){return C().get("/assets/lyrics/the-song.json")}),[]).value;return a.createElement("div",null,a.createElement("h3",null,"Lyrics"),a.createElement("p",null,null==e?void 0:e.title),a.createElement("p",null,null==e?void 0:e.artist),null==e?void 0:e.lyrics.map((function(e,n){var t=e.content,r=e.timeTag;return a.createElement("p",{key:"".concat(r,"-").concat(n)},t)})))}function j(){var e=(0,a.useRef)(null),n=(0,a.useState)(!1),t=(0,r.Z)(n,2),l=t[0],i=t[1];return(0,a.useEffect)((function(){e.current&&(l?e.current.play():e.current.pause())}),[l]),a.createElement("div",null,a.createElement(k,{onClick:function(){return i(!l)}},l?"Pause":"Play"),a.createElement(O,null),a.createElement("audio",{ref:e,src:"/assets/songs/the-song.mp3",hidden:!0}))}}}]);