webpackJsonp([1],{"8/4+":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-stretch"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cyr,expression:"cyr"}],staticClass:"cyr form-control",attrs:{id:"cyr"},domProps:{value:t.cyr},on:{keyup:t.submit,input:function(a){a.target.composing||(t.cyr=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],staticClass:"lat form-control",attrs:{id:"lat"},domProps:{value:t.lat},on:{keyup:t.submit,input:function(a){a.target.composing||(t.lat=a.target.value)}}})])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("label",{staticClass:"control-label",attrs:{for:"cyr"}},[t._v("Кирил жазуы")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("label",{staticClass:"control-label",attrs:{for:"lat"}},[t._v("Latyn jazýy")])])}],r={render:s,staticRenderFns:n};a.a=r},M93x:function(t,a,e){"use strict";function s(t){e("Qq68")}var n=e("xJD8"),r=e("nBG8"),i=e("VU/8"),c=s,o=i(n.a,r.a,!1,c,null,null);a.a=o.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n=e("M93x");s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:n.a}})},Qq68:function(t,a){},f7M3:function(t,a,e){"use strict";function s(t){e("hV0u")}var n=e("m0Zy"),r=e("8/4+"),i=e("VU/8"),c=s,o=i(n.a,r.a,!1,c,"data-v-417657d6",null);a.a=o.exports},hV0u:function(t,a){},m0Zy:function(t,a,e){"use strict";var s=e("sL3H"),n=e.n(s);a.a={name:"QConvert",data:function(){return{cyr:"Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік. Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік. Ал, енді қалған өмірімізді қайтіп, не қылып өткіземіз? Соны таба алмай өзім де қайранмын.",lat:""}},mounted:function(){this.submit()},methods:{submit:function(){function t(t){return t.length>1?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t.toUpperCase()}this.lat=this.cyr.split("").map(function(a){return n.a.hasOwnProperty(a)?n.a[a]:n.a.hasOwnProperty(a.toLowerCase())?t(n.a[a.toLowerCase()]):a}).join("")}}}},nBG8:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app container-fluid",attrs:{id:"app"}},[t._m(0),t._v(" "),e("QConvert")],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"jumbotron text-center"},[e("h1",[t._v("QAlphabet")]),t._v(" "),e("p",{staticClass:"lead"},[e("span",{staticClass:"text-muted"},[t._v("Қазақша мәтінді латын нұсқасына аудару")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("Qazaqs'a ma'tіndі latyn nusqasyna ay'dary'")])]),t._v(" "),e("a",{staticClass:"btn btn-primary btn-lg",attrs:{target:"_blank",href:"mailto:contact@qalphabet.kz"}},[e("i",{staticClass:"glyphicon glyphicon-envelope"}),t._v("\n          contact@qalphabet.kz\n      ")])])}],r={render:s,staticRenderFns:n};a.a=r},xJD8:function(t,a,e){"use strict";var s=e("f7M3");a.a={name:"app",components:{QConvert:s.a}}}},["NHnr"]);
//# sourceMappingURL=app.e01359513d4ab88a7374.js.map