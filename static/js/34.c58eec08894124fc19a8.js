webpackJsonp([34],{241:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(310),l=t(378),r=t(26),i=r(s.a,l.a,!1,null,null,null);a.default=i.exports},310:function(e,a,t){"use strict";a.a={name:"client-form",props:{client:Object},data:function(){return{params:{name:"",gst_number:"",address_line_1:"",address_line_2:"",email:"",contact_number:""}}},computed:{clientParams:{get:function(){return this.client||this.params}}},methods:{valid:function(){return this.$validator.validateAll()}}}},378:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("form",{attrs:{method:"post",novalidate:""}},[t("div",[t("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:e.errors.has("name")}},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_spaces|min:3",expression:"'required|alpha_spaces|min:3'"},{name:"model",rawName:"v-model",value:e.clientParams.name,expression:"clientParams.name"}],staticClass:"mdl-textfield__input",attrs:{name:"name",id:"name"},domProps:{value:e.clientParams.name},on:{input:function(a){a.target.composing||e.$set(e.clientParams,"name",a.target.value)}}}),e._v(" "),t("label",{staticClass:"mdl-textfield__label",attrs:{for:"name"}},[e._v("Name")]),e._v(" "),t("span",{staticClass:"mdl-textfield__error"},[e._v(e._s(e.errors.first("name")))])])]),e._v(" "),t("div",[t("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:e.errors.has("gst_number")}},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:15",expression:"'required|alpha_num|min:15'"},{name:"model",rawName:"v-model",value:e.clientParams.gst_number,expression:"clientParams.gst_number"}],staticClass:"mdl-textfield__input",attrs:{name:"gst_number",id:"gst_number"},domProps:{value:e.clientParams.gst_number},on:{input:function(a){a.target.composing||e.$set(e.clientParams,"gst_number",a.target.value)}}}),e._v(" "),t("label",{staticClass:"mdl-textfield__label",attrs:{for:"gst_number"}},[e._v("GSTIN")]),e._v(" "),t("span",{staticClass:"mdl-textfield__error"},[e._v(e._s(e.errors.first("gst_number")))])])]),e._v(" "),t("div",[t("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:e.errors.has("address_line_1")}},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3|max:254",expression:"'required|min:3|max:254'"},{name:"model",rawName:"v-model",value:e.clientParams.address_line_1,expression:"clientParams.address_line_1"}],staticClass:"mdl-textfield__input",attrs:{name:"address_line_1"},domProps:{value:e.clientParams.address_line_1},on:{input:function(a){a.target.composing||e.$set(e.clientParams,"address_line_1",a.target.value)}}}),e._v(" "),t("label",{staticClass:"mdl-textfield__label",attrs:{for:"address_line_1"}},[e._v("Address Line 1")]),e._v(" "),t("span",{staticClass:"mdl-textfield__error"},[e._v(e._s(e.errors.first("address_line_1")))])])]),e._v(" "),t("div",[t("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:e.errors.has("address_line_2")}},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"min:3|max:254",expression:"'min:3|max:254'"},{name:"model",rawName:"v-model",value:e.clientParams.address_line_2,expression:"clientParams.address_line_2"}],staticClass:"mdl-textfield__input",attrs:{name:"address_line_2"},domProps:{value:e.clientParams.address_line_2},on:{input:function(a){a.target.composing||e.$set(e.clientParams,"address_line_2",a.target.value)}}}),e._v(" "),t("label",{staticClass:"mdl-textfield__label",attrs:{for:"address_line_2"}},[e._v("Address Line 2")]),e._v(" "),t("span",{staticClass:"mdl-textfield__error"},[e._v(e._s(e.errors.first("address_line_2")))])])]),e._v(" "),t("div",[t("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:e.errors.has("email")}},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"email",expression:"'email'"},{name:"model",rawName:"v-model",value:e.clientParams.email,expression:"clientParams.email"}],staticClass:"mdl-textfield__input",attrs:{name:"email"},domProps:{value:e.clientParams.email},on:{input:function(a){a.target.composing||e.$set(e.clientParams,"email",a.target.value)}}}),e._v(" "),t("label",{staticClass:"mdl-textfield__label",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),t("span",{staticClass:"mdl-textfield__error"},[e._v(e._s(e.errors.first("email")))])])]),e._v(" "),t("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label",class:{errors:e.errors.has("contact_number")}},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:10|max:15",expression:"'required|min:10|max:15'"},{name:"model",rawName:"v-model",value:e.clientParams.contact_number,expression:"clientParams.contact_number"}],staticClass:"mdl-textfield__input",attrs:{name:"contact_number"},domProps:{value:e.clientParams.contact_number},on:{input:function(a){a.target.composing||e.$set(e.clientParams,"contact_number",a.target.value)}}}),e._v(" "),t("label",{staticClass:"mdl-textfield__label",attrs:{for:"contact_number"}},[e._v("Contact Number")]),e._v(" "),t("span",{staticClass:"mdl-textfield__error"},[e._v(e._s(e.errors.first("contact_number")))])])])])},l=[],r={render:s,staticRenderFns:l};a.a=r}});
//# sourceMappingURL=34.c58eec08894124fc19a8.js.map