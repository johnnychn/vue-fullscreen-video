!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=navigator.userAgent.indexOf("Android")>-1;t.a={name:"vue-fullscreen-video",props:{url:{type:String,default:""},align:{type:String,default:"crop"},loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},scroll:{type:Boolean,default:!1}},data:function(){return{playing:!1,video:null,parent:null,checkForAndroid:null}},methods:{playUrl:function(e){if(e!==this.url){var t=function(){try{n.video.play()}catch(e){}n.video.play()};this.video.pause(),this.url=e,this.video.load(),this.playing=!1;var n=this;setTimeout(t,100)}},play:function(){this.playing=!0,this.video.play(),this.$emit("play",this),this.updateSize()},stop:function(){this.playing=!1,this.video.pause(),this.$emit("stop",this)},updateSize:function(){var e=this.parent.clientWidth,t=this.parent.clientHeight,n=e/t,r=this.video.videoWidth,i=this.video.videoHeight,o=r/i,a=void 0,s=void 0;switch(this.align){case"crop":o>n?(s=t,a=s*o):(a=e,s=a/o);break;case"center":o>n?(a=e,s=a/o):(s=t,a=s*o)}this.video.width=a,this.video.height=s,this.video.style.marginLeft=-(a-e)/2+"px",this.video.style.marginTop=-(s-t)/2+"px"}},beforeDestroy:function(){var e=this;r&&clearInterval(e.updateSize)},mounted:function(){var e=this;this.parent=this.$refs.parent,this.video=this.$refs.video,this.video.oncanplay=function(){e.$emit("canplay"),e.updateSize(),e.autoPlay&&setTimeout(e.play,10)},this.video.onended=function(){e.$emit("onended"),!0===e.loop?e.video.play():e.stop()},r&&(e.checkForAndroid=setInterval(e.updateSize,500)),window.onresize=function(){e.updateSize()},!1===this.scroll&&this.parent.setAttribute("ontouchmove","event.preventDefault();")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n.d(t,"VueFullscreenVideo",function(){return r.a}),t.default=r.a},function(e,t,n){"use strict";function r(e){n(3)}var i=n(0),o=n(9),a=n(8),s=r,u=a(i.a,o.a,!1,s,null,null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("2847ebf7",r,!0)},function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,".IIV::-webkit-media-controls-play-button,.IIV::-webkit-media-controls-start-playback-button{opacity:0;pointer-events:none;width:5px}",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var o=f++;r=p||(p=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=d(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=l[a.id];s.refs--,n.push(s)}t?(i=d(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],u=o[2],d=o[3],l={id:e+":"+i,css:s,media:u,sourceMap:d};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):r&&(l=r),l){var c=d.functional,p=c?d.render:d.beforeCreate;c?(d._injectStyles=l,d.render=function(e,t){return l.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:s,options:d}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"parent",staticStyle:{width:"100%",height:"100%",overflow:"hidden"}},[n("video",{ref:"video",attrs:{playsinline:"",src:e.url,"x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-playsinline":"true","webkit-playsinline":"true",preload:"auto",autoplay:e.autoplay}})])},i=[],o={render:r,staticRenderFns:i};t.a=o}])});