(this["webpackJsonppoint-slider"]=this["webpackJsonppoint-slider"]||[]).push([[0],{10:function(e,t,n){e.exports={RangeSlider:"RangeSlider_RangeSlider__3rhPY",RangeDataList:"RangeSlider_RangeDataList__28uVc"}},21:function(e,t,n){e.exports={NavigateSlider:"NavigateSlider_NavigateSlider__36RG7"}},29:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),c=n.n(r),l=n(3),o=n.n(l),s=n(4),u=n(7),d=n(1);function j(e){var t=e.className,n=e.children,a=Object(u.a)(e,["className","children"]);return Object(d.jsx)("div",Object(s.a)(Object(s.a)({className:t},a),{},{children:n}))}var h=n(6),f=n(2),b=n(10),v=n.n(b);function O(e){var t=e.data,n=void 0===t?[]:t,a=e.id;return Object(d.jsx)("datalist",{id:a,className:v.a.RangeDataList,children:n.map((function(e,t){var i=e.title;return Object(d.jsx)("option",{value:100*t/(n.length-1),children:i||null},"dataListOpt".concat(a).concat(t))}))})}var S,g=n(16),_=n(17);function m(e){return[e[0]?e[0]:"#e7bf16",e[1]?e[1]:e[0]?e[0]:"#ffffff"]}var x=_.a.input(S||(S=Object(g.a)(["\n\t\n\t&::-webkit-slider-runnable-track {\n      background: linear-gradient(\n      \t90deg, \n      \t",", \n      \t"," ","%, \n      \t"," ","%, \n      \t",");\n    }\n"])),(function(e){return m(e.colors)[0]}),(function(e){return m(e.colors)[0]}),(function(e){return e.value}),(function(e){return m(e.colors)[1]}),(function(e){return e.value}),(function(e){return m(e.colors)[1]}));function N(e){var t=e.className,n=e.currentDotIndex,i=e.onChange,r=e.dataList,c=void 0===r?[]:r,l=e.classes,j=void 0===l?{}:l,h=e.colors,b=void 0===h?[]:h,S=Object(u.a)(e,["className","currentDotIndex","onChange","dataList","classes","colors"]),g=Object(a.useState)(!1),_=Object(f.a)(g,2),m=_[0],N=_[1],p=Object(a.useState)(c[n].dot),w=Object(f.a)(p,2),y=w[0],C=w[1],M=Object(a.useMemo)((function(){return Math.random()}),[]);return Object(a.useEffect)((function(){m||c.findIndex((function(e){var t=e.range;return y<=t}))!==n&&C(c[n].dot)}),[n,y,m,c]),Object(d.jsxs)("div",{className:t,children:[Object(d.jsx)(x,Object(s.a)({type:"range",list:M,value:y,className:o()(v.a.RangeSlider,j.input),onChange:function(e){var t=e.target,n=Number(t.value);C(n);var a=c.findIndex((function(e){var t=e.range;return n<=t}));i(n,a)},colors:b,onMouseDown:function(){return N(!0)},onMouseUp:function(){return N(!1)},onTouchStart:function(){return N(!0)},onTouchEnd:function(){return N(!1)}},S)),c.length?Object(d.jsx)(O,{data:c,id:M}):null]})}var p=n(21),w=n.n(p);function y(e){var t=e.elements,n=e.onChange,i=e.externalControlIndex,r=Object(a.useMemo)((function(){return a.Children.map(t,(function(e,n){var a=100/t.length*(n+1),i=100*n/(t.length-1);return Object(s.a)(Object(s.a)({},e.props.rangeOptions),{},{range:a,dot:i})})).filter((function(e){return e}))}),[t]);return Object(d.jsx)(N,{currentDotIndex:i,className:w.a.NavigateSlider,dataList:r,onChange:function(e,t){return n(t)}})}var C=n(8),M=n.n(C);function I(e){var t=e.className,n=e.onClick;return Object(d.jsx)("div",{onClick:n,className:o()(M.a.Dot,t)})}function D(e){var t=e.size,n=e.activeIndex,a=e.onDotSelect;return Object(d.jsx)("div",{className:M.a.DotNavigation,children:Array(t).fill(null).map((function(e,t){return Object(d.jsx)(I,{className:o()(Object(h.a)({},M.a.Active,n===t)),onClick:function(){return a(t)}},"dot-navigation".concat(t))}))})}function W(e,t,n){var i,r;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),n=Object(f.a)(t,2),i=n[0],r=n[1];Object(a.useEffect)((function(){function t(){r({width:window.innerWidth,height:window.innerHeight}),e&&e(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[e])}();var c=Object(a.useState)({height:0,width:0}),l=Object(f.a)(c,2),o=l[0],s=l[1],u=n?{margin:"marginLeft",param:"width"}:{margin:"marginTop",param:"height"},d=null===e||void 0===e||null===(i=e.current)||void 0===i?void 0:i.clientHeight,j=null===e||void 0===e||null===(r=e.current)||void 0===r?void 0:r.clientWidth,b=Object(h.a)({},u.margin,"".concat(-(o[u.param]+Number(!n))*t,"px"));return Object(a.useEffect)((function(){d&&j&&s({height:d,width:j})}),[d,j]),b}var B=n(9),k=n.n(B);function L(e){var t,n=e.children,i=e.className,r=e.horizontal,c=e.useWheelScroll,l=e.useNavigateSlider,j=e.useDotNavigation,b=e.useParallaxBackground,v=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(a.useState)(0),i=Object(f.a)(n,2),r=i[0],c=i[1];function l(e){c((function(t){return s(t+e)}))}function o(e){r!==e&&c(s(e))}function s(n){return n>=0&&n<=e?n:t?n<0?e:0:n<0?0:e}return{currentIndex:r,setNextIndex:l,setIndex:o}}(n.length-1),O=v.currentIndex,S=v.setNextIndex,g=v.setIndex,_=function(e,t){var n=Object(a.useState)(0),i=Object(f.a)(n,2),r=i[0],c=i[1],l=Object(a.useState)(!1),o=Object(f.a)(l,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){if(0!==r&&!s){u(!0);var e=setTimeout((function(){c(0),u(!1)}),200);return function(){return clearTimeout(e)}}}),[r,s]),Object(a.useEffect)((function(){Math.abs(r)>=t&&(e(Math.sign(r)),c(0))}),[r,e,t]),function(e){var t=Math.sign(e.deltaY);r&&t===Math.sign(r)?c((function(e){return e+t})):c(t)}}(S,4),m=Object(a.useRef)(null),x=W(m,O,r),N=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=n?"clientX":"clientY",c=Object(a.useState)({clientX:0,clientY:0}),l=Object(f.a)(c,2),o=l[0],s=l[1],u=Object(a.useState)(null),d=Object(f.a)(u,2),j=d[0],b=d[1];function v(e){if(!i||i(e)){var t=e.touches[0][r];s(Object(h.a)({},r,t))}}function O(e){if(!i||i(e)){var n=e.touches[0][r]-o[r];Math.abs(n)>t&&b(-Math.sign(n))}}function S(){j&&(b(null),e(j))}return{onTouchStart:v,onTouchMove:O,onTouchEnd:S}}(S,100,r,(function(e){return"INPUT"!==e.target.nodeName})),p={};return b&&(p.backgroundPosition="center ".concat(20*O,"%")),Object(d.jsxs)("div",Object(s.a)(Object(s.a)({ref:m,className:o()(i,k.a.FullPageSlider,(t={},Object(h.a)(t,k.a.Vertical,!r),Object(h.a)(t,k.a.Horizontal,r),t)),onWheel:c?_:null,style:p},N),{},{children:[a.Children.map(n,(function(e,t){var n=e.props,a=(n.rangeOptions,Object(u.a)(n,["rangeOptions"]));return Object(d.jsx)(e.type,Object(s.a)(Object(s.a)({},a),{},{className:o()(e.props.className,k.a.Slide),style:0===t?x:null}))})),l?Object(d.jsx)(y,{externalControlIndex:O,elements:n,onChange:g}):null,j?Object(d.jsx)(D,{size:n.length,activeIndex:O,onDotSelect:g}):null]}))}var P=n(5),E=n.n(P),F=[{name:"BMW 3/15PS",title:"1928"},{name:"BMW 335",title:"1940"},{name:"BMW 507",title:"1960"},{name:"BMW E30",title:"1980"},{name:"BMW M3 2021",title:"2021"}];function H(){return Object(d.jsxs)(L,{useWheelScroll:!0,useDotNavigation:!0,useParallaxBackground:!0,className:E.a.MainSlider,children:[Object(d.jsx)(j,{className:o()(E.a.FirstSlide,E.a.Slide),children:Object(d.jsx)("h2",{children:"Welcome to BMW"})}),Object(d.jsx)(j,{className:o()(E.a.SecondSlide,E.a.Slide),children:Object(d.jsx)(L,{useNavigateSlider:!0,horizontal:!0,children:F.map((function(e,t){var n=e.title,a=e.name;return Object(d.jsx)(j,{className:o()(E.a["CarSlide".concat(t+1)],E.a.HistoryInnerSlide),rangeOptions:{title:n},children:Object(d.jsx)("div",{className:E.a.Overlay,children:Object(d.jsx)("h3",{children:a})})},"historySlide".concat(t))}))})}),Object(d.jsx)(j,{className:E.a.Slide,children:Object(d.jsx)("span",{className:E.a.Intro,children:"Here..."})}),Object(d.jsxs)(j,{className:E.a.Slide,children:[Object(d.jsx)("span",{className:E.a.Intro,children:"What you need NOW"}),Object(d.jsx)("h3",{children:"BMW M3 2021"})]})]})}c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={MainSlider:"Styles_MainSlider__uJQyw",Slide:"Styles_Slide__90rLt",FirstSlide:"Styles_FirstSlide__2W9Lz",Intro:"Styles_Intro__2B1mx",SecondSlide:"Styles_SecondSlide__3wRW_",HistoryInnerSlide:"Styles_HistoryInnerSlide__B88xQ",CarSlide1:"Styles_CarSlide1__13--J",CarSlide2:"Styles_CarSlide2__2j5G3",CarSlide3:"Styles_CarSlide3__2dpZB",CarSlide4:"Styles_CarSlide4__2Z7yF",CarSlide5:"Styles_CarSlide5__3dGUe",Overlay:"Styles_Overlay__lw-LJ"}},8:function(e,t,n){e.exports={DotNavigation:"DotNavigation_DotNavigation__gOO-B",Dot:"DotNavigation_Dot__3Ykmp",Active:"DotNavigation_Active__Utokr"}},9:function(e,t,n){e.exports={FullPageSlider:"FullPageSlider_FullPageSlider__3t3Tq",Vertical:"FullPageSlider_Vertical__2uCDb",Slide:"FullPageSlider_Slide__1ox_S",Horizontal:"FullPageSlider_Horizontal__1v4Wn"}}},[[29,1,2]]]);
//# sourceMappingURL=main.e6b0914e.chunk.js.map