webpackJsonp([2],{"1lCJ":function(e,t,n){"use strict";function a(e){n("ArxV")}var s=n("Rs6q"),i=n("ZrYC"),o=n("VU/8"),r=a,l=o(s.a,i.a,r,null,null);t.a=l.exports},"9siZ":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".panel{margin-bottom:10px!important}","",{version:3,sources:["/Users/sulieman/code/vue2/src/components/CollectionField.vue"],names:[],mappings:"AACA,OACE,4BAA+B,CAChC",file:"CollectionField.vue",sourcesContent:["\n.panel {\n  margin-bottom: 10px !important;\n}\n"],sourceRoot:""}])},AKNe:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"padding"},[n("transition",{attrs:{name:"page",mode:"out-in"}},[n("div",{key:e.$route.params.blockIndex},[n("button",{staticClass:"delete is-medium is-pulled-right",on:{click:e.backToPage}}),e._v(" "),n("strong",{staticClass:"is-size-5"},[e._v("\n        Edit block\n      ")]),e._v(" "),n("div",[e._v(e._s(e.block.name))]),e._v(" "),n("hr"),e._v(" "),e._l(e.block.fields,function(t){return n("div",{staticClass:"field"},[n(t.type+"-field",{tag:"component",attrs:{field:t,level:0,options:e.options}})],1)})],2)])],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},ArxV:function(e,t,n){var a=n("9siZ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("85be85bc",a,!0)},B2rj:function(e,t,n){"use strict";function a(e){n("qMb7")}var s=n("Kiv3"),i=n("pgIR"),o=n("VU/8"),r=a,l=o(s.a,i.a,r,null,null);t.a=l.exports},Douy:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"TextField.vue",sourceRoot:""}])},"F3/a":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"TextareaField.vue",sourceRoot:""}])},"FZ+f":function(e,t){function n(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var i=a(s);return[n].concat(s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(a[i]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},Kiv3:function(e,t,n){"use strict";t.a={props:["field","level","options"]}},LQyf:function(e,t,n){var a=n("Wk6S");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("27487044",a,!0)},PPHZ:function(e,t,n){"use strict";function a(e){n("ae+Q")}var s=n("U9h6"),i=n("nYaP"),o=n("VU/8"),r=a,l=o(s.a,i.a,r,null,null);t.a=l.exports},Rs6q:function(e,t,n){"use strict";var a=n("PPHZ"),s=n("B2rj"),i=n("1lCJ");t.a={props:["field","level","options"],data:function(){return{}},methods:{addItem:function(){this.options.activeLevel++},cancel:function(){this.options.activeLevel--}},components:{"text-field":a.a,"textarea-field":s.a,"collection-field":i.a}}},T3b1:function(e,t,n){"use strict";var a=n("PPHZ"),s=n("B2rj"),i=n("1lCJ");t.a={name:"block",data:function(){return{block:{},options:{activeLevel:0}}},created:function(){this.block=data.pages[this.$route.params.pageIndex].blocks[this.$route.params.blockIndex]},beforeRouteUpdate:function(e,t,n){this.block=data.pages[e.params.pageIndex].blocks[e.params.blockIndex],n()},methods:{backToPage:function(){this.$router.push("/websites/1/build/pages/"+this.$route.params.pageIndex)}},components:{"text-field":a.a,"textarea-field":s.a,"collection-field":i.a}}},U9h6:function(e,t,n){"use strict";t.a={props:["field","level","options"]}},Wk6S:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".padding[data-v-92e37268]{padding:10px 30px}","",{version:3,sources:["/Users/sulieman/code/vue2/src/views/Block.vue"],names:[],mappings:"AACA,0BACE,iBAAmB,CACpB",file:"Block.vue",sourcesContent:["\n.padding[data-v-92e37268] {\n  padding: 10px 30px;\n}\n"],sourceRoot:""}])},ZrYC:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.options.activeLevel==e.level,expression:"options.activeLevel == level"}]},[n("label",{staticClass:"label"},[e._v(e._s(e.field.label))]),e._v(" "),n("nav",{staticClass:"panel"},e._l(e.field.value,function(t,a){return n("a",{staticClass:"panel-block",attrs:{href:a}},[e._m(0,!0),e._v("\n\n          "+e._s(t[Object.keys(t)[0]].value)+" \n        ")])})),e._v(" "),n("a",{staticClass:"button is-info is-small add-item",on:{click:e.addItem}},[e._v("\n        Add item\n      ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.options.activeLevel==e.level+1,expression:"options.activeLevel == level + 1"}]},[e._l(e.field.fields,function(t){return n("div",{staticClass:"field"},[n(t.type+"-field",{tag:"component",attrs:{level:e.level+1,field:t,options:e.options}})],1)}),e._v(" "),n("a",{staticClass:"button is-info is-small add-item"},[e._v("\n        Save item\n      ")]),e._v(" "),n("a",{staticClass:"button is-info is-small add-item",on:{click:e.cancel}},[e._v("\n        Cancel\n      ")])],2)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"panel-icon"},[n("i",{staticClass:"fa fa-book"})])}],i={render:a,staticRenderFns:s};t.a=i},"ae+Q":function(e,t,n){var a=n("Douy");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("e8ff344c",a,!0)},"mSQ/":function(e,t,n){"use strict";function a(e){n("LQyf")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("T3b1"),i=n("AKNe"),o=n("VU/8"),r=a,l=o(s.a,i.a,r,"data-v-92e37268",null);t.default=l.exports},nYaP:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.options.activeLevel==e.level,expression:"options.activeLevel == level"}]},[n("label",{staticClass:"label"},[e._v(e._s(e.field.label))]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.field.value,expression:"field.value"}],staticClass:"input",attrs:{type:"text",placeholder:e.field.label},domProps:{value:e.field.value},on:{input:function(t){t.target.composing||(e.field.value=t.target.value)}}})])])},s=[],i={render:a,staticRenderFns:s};t.a=i},pgIR:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.options.activeLevel==e.level,expression:"options.activeLevel == level"}]},[n("label",{staticClass:"label"},[e._v(e._s(e.field.label))]),e._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.field.value,expression:"field.value"}],staticClass:"textarea",attrs:{rows:"2",placeholder:e.field.label},domProps:{value:e.field.value},on:{input:function(t){t.target.composing||(e.field.value=t.target.value)}}})])])},s=[],i={render:a,staticRenderFns:s};t.a=i},qMb7:function(e,t,n){var a=n("F3/a");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("6a67f994",a,!0)},rjj0:function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=u[n.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(i(n.parts[s]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(i(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:o}}}}function s(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(f)return m;a.parentNode.removeChild(a)}if(h){var i=p++;a=v||(v=s()),t=o.bind(null,a,i,!1),n=o.bind(null,a,i,!0)}else a=s(),t=r.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function o(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function r(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n("tTVk"),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),v=null,p=0,f=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var s=c(e,t);return a(s),function(t){for(var n=[],i=0;i<s.length;i++){var o=s[i],r=u[o.id];r.refs--,n.push(r)}t?(s=c(e,t),a(s)):s=[];for(var i=0;i<n.length;i++){var r=n[i];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete u[r.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},tTVk:function(e,t){e.exports=function(e,t){for(var n=[],a={},s=0;s<t.length;s++){var i=t[s],o=i[0],r=i[1],l=i[2],c=i[3],u={id:e+":"+s,css:r,media:l,sourceMap:c};a[o]?a[o].parts.push(u):n.push(a[o]={id:o,parts:[u]})}return n}}});
//# sourceMappingURL=2.baae903b3fd7ec1b34e0.js.map