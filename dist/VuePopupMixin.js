!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require(void 0)):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.VuePopupMixin=t(require("vue")):e.VuePopupMixin=t(e.Vue)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.overlay=void 0;var i=n(2);Object.defineProperty(t,"overlay",{enumerable:!0,get:function(){return o(i)["default"]}});var r=n(3),s=o(r);t["default"]={props:{show:{type:Boolean,"default":!1},overlay:{type:Boolean,"default":!0},overlayOpacity:{type:Number,"default":.4},overlayColor:{type:String,"default":"#000"}},attached:function(){this.show&&this.overlay&&s["default"].open(this)},detached:function(){s["default"].close(this)},watch:{show:function(e){e&&this.overlay?s["default"].open(this):s["default"].close(this)}},beforeDestroy:function(){s["default"].close(this)}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=20141223;t.getZIndex=function(){return n++},t.getDOM=function o(e){return 3===e.nodeType&&(e=e.nextElementSibling||e.nextSibling,o(e)),e}},function(e,t,n){var o,i;n(5),o=n(4),i=n(6),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),r=o(i),s=n(2),l=o(s),a=n(1),c=r["default"].extend(l["default"]),u={instances:[],overlay:!1,open:function(e){if(e&&this.instances.indexOf(e)===-1){0===this.instances.length&&this.showOverlay(e.overlayColor,e.overlayOpacity),this.instances.push(e),this.changeOverlayStyle();var t=(0,a.getDOM)(e.$el);t.style.zIndex=(0,a.getZIndex)()}},close:function(e){var t=this,n=this.instances.indexOf(e);n!==-1&&r["default"].nextTick(function(){t.instances.splice(n,1),0===t.instances.length&&t.closeOverlay(),t.changeOverlayStyle()})},showOverlay:function(e,t){var n=this.overlay=new c({el:document.createElement("div")});n.fixed=!0,n.color=e,n.opacity=t,n.onClick=this.handlerOverlayClick.bind(this),n.$appendTo(document.body),this.bodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"},closeOverlay:function(){if(this.overlay){document.body.style.overflow=this.bodyOverflow;var e=this.overlay;this.overlay=null,e.$remove(function(){e.$destroy()})}},changeOverlayStyle:function(){if(this.overlay&&0!==this.instances.length){var e=this.instances[this.instances.length-1];this.overlay.color=e.overlayColor,this.overlay.opacity=e.overlayOpacity}},handlerOverlayClick:function(){if(0!==this.instances.length){var e=this.instances[this.instances.length-1];e.overlayClick&&e.overlayClick()}}};window.addEventListener("keydown",function(e){if(27===e.keyCode&&u.instances.length>0){var t=u.instances[u.instances.length-1];if(!t)return;t.escPress&&t.escPress()}}),t["default"]=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t["default"]={props:{fixed:{type:Boolean,"default":!1},onClick:{type:Function},opacity:{type:Number,"default":.4},color:{type:String,"default":"#000"}},data:function(){return{zIndex:(0,o.getZIndex)()}},computed:{style:function(){return{opacity:this.opacity,"background-color":this.color,position:this.fixed?"fixed":"","z-index":this.zIndex}}},methods:{prevent:function(e){e.preventDefault(),e.stopPropagation()},handlerClick:function(){this.onClick&&this.onClick()}}}},function(e,t){},function(e,t){e.exports=" <div class=overlay @click=handlerClick @touchmove=prevent :style=style transition=overlay-fade></div> "},function(t,n){t.exports=e}])});