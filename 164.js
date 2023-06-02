/*! For license information please see 164.js.LICENSE.txt */
"use strict";(self.webpackChunkoffice_addin_taskpane_react_js=self.webpackChunkoffice_addin_taskpane_react_js||[]).push([[164],{15677:function(e,n,t){t.d(n,{Ai:function(){return l},BO:function(){return y},FT:function(){return c},J6:function(){return o},Ok:function(){return s},V4:function(){return d},Y9:function(){return u},ZL:function(){return r},gh:function(){return h},kN:function(){return i},o_:function(){return m},rE:function(){return v},vZ:function(){return a},xq:function(){return f},z0:function(){return _},zG:function(){return p}});var r="query GetAllBomListByProductCodeQuery($product_code: Int!) {\n    core_bom(where: {product_code: {_eq: $product_code}}) {\n      id\n      name\n    }\n}\n",o="query allBomAssociatedwithATenant {\n  core_bom {\n    id\n    name\n  }\n}",i="query GetBomdetailsByBomId($bom_id: Int!, $active: Boolean!) {\n  bom_items(\n    where: {bom_id: {_eq: $bom_id}, bom_version: {active: {_eq: $active}}}\n  ) {\n    bom_id\n    bom_version_id\n    material_id\n    quantity\n    total_price\n    unit_size\n    associated_product_code_bom\n    associated_bom_version {\n      version_no\n      id\n      active\n      core_bom {\n        id\n        name\n      }\n    }\n    core_material {\n      custom_material_id\n      erp_material_id\n      gross_weight\n      id\n      inventory\n      lead_time\n      material_description\n      material_group\n      material_name\n      material_type\n      parent_id\n      plm_material_id\n      plm_record_id\n      product_code\n      quantity\n      status\n      storage_loc\n      unit_cost\n      unit_of_material\n      unit_sale_price\n      weight_unit\n      material_product_code {\n        id\n        product_code\n      }\n    }\n    core_bom {\n      state         \n      tenant_id\n    }\n  }\n}\n  ",a="query GetMaterialMasterDataQuery(\n    $jump: Int,\n    $perPage: Int,\n    $searchKeyword: String\n    ) {\n    core_material_master_aggregate(where: {_or: [\n      {custom_material_id: {_ilike: $searchKeyword}},\n      {erp_material_id: {_ilike: $searchKeyword}},\n      {material_description: {_ilike: $searchKeyword}},\n      {material_name: {_ilike: $searchKeyword}},\n      {material_type: {_ilike: $searchKeyword}},\n      {plm_material_id: {_ilike: $searchKeyword}},\n      {unit_of_material: {_ilike: $searchKeyword}},\n      {material_product_code: {\n        product_code: {_ilike: $searchKeyword}}\n      }\n    ]}){\n      aggregate {\n        count\n      }\n    }\n    core_material_master(\n      where: {_or: [\n        {custom_material_id: {_ilike: $searchKeyword}},\n        {erp_material_id: {_ilike: $searchKeyword}},\n        {material_description: {_ilike: $searchKeyword}},\n        {material_name: {_ilike: $searchKeyword}},\n        {material_type: {_ilike: $searchKeyword}},\n        {plm_material_id: {_ilike: $searchKeyword}},\n        {unit_of_material: {_ilike: $searchKeyword}},\n        {material_product_code: {\n          product_code: {_ilike: $searchKeyword}}\n        }\n      ]}\n      limit: $perPage\n      offset: $jump\n    ) {\n      custom_material_id\n      erp_material_id\n      blob_reference_key\n      id\n      gross_weight\n      inventory\n      lead_time\n      material_description\n      material_group\n      material_name\n      material_type\n      others\n      parent_id\n      plm_material_id\n      plm_record_id\n      quantity\n      status\n      storage_loc\n      unit_cost\n      unit_of_material\n      unit_sale_price\n      weight_unit\n      product_code\n      material_product_code {\n        id\n        product_code\n      }\n    }\n  }\n  ",l="query GetAllProductCodes {\n  product_code {\n    id\n    product_code\n  }\n}\n",c="query GetAllBomListByProductCodeActive($product_code: Int!) {\n  core_bom(where: {product_code: {_eq: $product_code}}) {\n    id\n    name\n    bom_versions(where: {active: {_eq: true}}) {\n      id\n      version_no\n      active\n    }\n  }\n}\n",u="query GetAllBomItemsByBomVersionIdQuery($bom_version: Int) {\n  bom_items(where: {bom_version_id: {_eq: $bom_version}}) {\n    associated_product_code_bom\n    associated_bom_version {\n      version_no\n      id\n      active\n      core_bom {\n        id\n        name\n      }\n    }\n    material_id\n    quantity\n    total_price\n    unit_size\n    core_material {\n      custom_material_id\n        erp_material_id\n        blob_reference_key\n        id\n        gross_weight\n        inventory\n        lead_time\n        material_description\n        material_group\n        material_name\n        material_type\n        others\n        parent_id\n        plm_material_id\n        plm_record_id\n        quantity\n        status\n        storage_loc\n        unit_cost\n        unit_of_material\n        unit_sale_price\n        weight_unit\n        product_code\n        material_product_code {\n          id\n          product_code\n        }\n       \n    }\n    core_bom {\n      name\n      id\n    }\n  }\n}",s="query GetAllProjectBomListQuery($projectId: Int!)  {\n  core_bom(where: {project_id: {_eq: $projectId}}) {\n    id\n    name\n    bom_versions(where: {active: {_eq: true}}) {\n      id\n      version_no\n      active\n    }\n    project_id\n  }\n}",d="query getParentTags($value: String!) {\n  tag(where: {name: {_iregex: $value}, parent_id: {_is_null: true}}) {\n    parent_id\n    name\n    id\n  }\n}",m="query getChildrenTagsQuery($value:String!,$parent_id:Int){\n  tag(where: {name: {_iregex: $value}, parent_id: {_eq: $parent_id}}) {\n     parent_id\n     name\n     id\n   }\n }",p="query GetMaterialMasterForBomQueryWithTagFilters(\n  $jump: Int,\n  $perPage: Int,\n  $searchKeyword: String,\n  $materialIds:[Int!]\n  ) {\n  core_material_master_aggregate(where:{_and:[\n    {_or: [\n    {custom_material_id: {_ilike: $searchKeyword}},\n    {erp_material_id: {_ilike: $searchKeyword}},\n    {material_description: {_ilike: $searchKeyword}},\n    {material_name: {_ilike: $searchKeyword}},\n    {material_type: {_ilike: $searchKeyword}},\n    {plm_material_id: {_ilike: $searchKeyword}},\n    {unit_of_material: {_ilike: $searchKeyword}},\n    {material_product_code: {\n      product_code: {_ilike: $searchKeyword}}\n    }]},\n    {id: {\n      _in: $materialIds\n    }}\n  ]}){\n    aggregate {\n      count\n    }\n  }\n  core_material_master(\n    where:{_and:[\n    {_or: [\n    {custom_material_id: {_ilike: $searchKeyword}},\n    {erp_material_id: {_ilike: $searchKeyword}},\n    {material_description: {_ilike: $searchKeyword}},\n    {material_name: {_ilike: $searchKeyword}},\n    {material_type: {_ilike: $searchKeyword}},\n    {plm_material_id: {_ilike: $searchKeyword}},\n    {unit_of_material: {_ilike: $searchKeyword}},\n    {material_product_code: {\n      product_code: {_ilike: $searchKeyword}}\n    }]},\n    {id: {\n      _in: $materialIds\n    }}\n  ]}\n    limit: $perPage\n    offset: $jump\n  ) {\n    custom_material_id\n    erp_material_id\n    id\n    lead_time\n    material_description\n    material_name\n    material_type\n    plm_material_id\n    unit_of_material\n    product_code\n    material_product_code {\n      id\n      product_code\n    }\n  }\n}\n",_="query getMaterialTags(\n  $tags:[Int!]!\n){\n  tag_material(where: {tag_id: {_in: $tags}}) {\n    material_id\n  }\n}\n",f="query GetDetailFormTemplateQuery($id: Int!) {\n  core_form_templates_by_pk(id: $id) {\n    name\n    id\n    core_form_type {\n      name\n    }\n    template_versions(where: {active: {_eq: true}}) {\n      active\n      version_id\n      id\n      template_fields {\n        autogenerated\n        caption\n        custom_list_id\n        field_id\n        field_name\n        field_type_id\n        fixed\n        required\n        template_version_id\n        form_field {\n          key\n        }\n      }\n    }\n  }\n}",h="query GetAllFormTemplatesQuery{\n  core_form_templates {\n    name\n    id\n    core_form_type {\n      name\n    }\n    template_versions(where: {active: {_eq: true}}) {\n      active\n      version_id\n    }\n  }\n}",v="query GetBomMaterialMappingConfigQuery($tenant_id: Int!) {\n  tenant_defaults(where: {tenant_id: {_eq: $tenant_id}}) {\n    bom\n    material\n  }\n}",y="query GetBomCurrentStateQuery($bom_id: Int!) {\n  core_bom(where: {id: {_eq: $bom_id}}) {\n    state\n    name\n    checked_out_by\n  }\n}"},70164:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(67294),o=t(85656),i=t(3193),a=t(68518),l=t(93379),c=t.n(l),u=t(7795),s=t.n(u),d=t(90569),m=t.n(d),p=t(3565),_=t.n(p),f=t(19216),h=t.n(f),v=t(44589),y=t.n(v),g=t(21610),b={};b.styleTagTransform=y(),b.setAttributes=_(),b.insert=m().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=h(),c()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;var A=t(15677),w=t(1833),k=t(60392),x=t(46027),I=t(19018),B=t(12961),E=t(21559),$=t(23383),C=t(58381),S=t(82702).Promise;function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(){L=function(){return e};var e={},n=Object.prototype,t=n.hasOwnProperty,r=Object.defineProperty||function(e,n,t){e[n]=t.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(e){c=function(e,n,t){return e[n]=t}}function u(e,n,t,o){var i=n&&n.prototype instanceof m?n:m,a=Object.create(i.prototype),l=new I(o||[]);return r(a,"_invoke",{value:A(e,t,l)}),a}function s(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d={};function m(){}function p(){}function _(){}var f={};c(f,i,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(B([])));v&&v!==n&&t.call(v,i)&&(f=v);var y=_.prototype=m.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function b(e,n){function o(r,i,a,l){var c=s(e[r],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==j(d)&&t.call(d,"__await")?n.resolve(d.__await).then((function(e){o("next",e,a,l)}),(function(e){o("throw",e,a,l)})):n.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return o("throw",e,a,l)}))}l(c.arg)}var i;r(this,"_invoke",{value:function(e,t){function r(){return new n((function(n,r){o(e,t,n,r)}))}return i=i?i.then(r,r):r()}})}function A(e,n,t){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var l=w(a,t);if(l){if(l===d)continue;return l}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var c=s(e,n,t);if("normal"===c.type){if(r=t.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(r="completed",t.method="throw",t.arg=c.arg)}}}function w(e,n){var t=n.method,r=e.iterator[t];if(void 0===r)return n.delegate=null,"throw"===t&&e.iterator.return&&(n.method="return",n.arg=void 0,w(e,n),"throw"===n.method)||"return"!==t&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+t+"' method")),d;var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function x(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function B(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(t.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=_,r(y,"constructor",{value:_,configurable:!0}),r(_,"constructor",{value:p,configurable:!0}),p.displayName=c(_,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(n,t,r,o,i){void 0===i&&(i=S);var a=new b(u(n,t,r,o),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=Object(e),t=[];for(var r in n)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=B,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=t.call(i,"catchLoc"),c=t.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),d},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),x(t),d}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;x(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:B(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},e}function q(e,n,t,r,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void t(e)}l.done?n(c):S.resolve(c).then(r,o)}function O(e){return function(){var n=this,t=arguments;return new S((function(r,o){var i=e.apply(n,t);function a(e){q(i,r,o,a,l,"next",e)}function l(e){q(i,r,o,a,l,"throw",e)}a(void 0)}))}}function K(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,n)||P(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,n){if(e){if("string"==typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?N(e,n):void 0}}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var G=r.lazy((function(){return t.e(266).then(t.bind(t,44220))})),M=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.taskpane})),t=n.bomMappingData,l=n.activeProject,c=(0,o.v9)((function(e){return e.action})).activeSheetId,u=T((0,r.useState)([]),2),s=u[0],d=u[1],m=T((0,r.useState)(),2),p=m[0],_=m[1],f=T((0,r.useState)([]),2),h=f[0],v=f[1],y=T((0,r.useState)(),2),g=y[0],b=y[1],S=T((0,r.useState)([]),2),j=(S[0],S[1]),q=T((0,r.useState)(!1),2),P=q[0],N=q[1],M=T((0,r.useState)(!1),2),Z=M[0],W=M[1],Q=T((0,r.useState)(!1),2),z=Q[0],F=Q[1];console.log(t,"bomMappingData"),(0,r.useEffect)((function(){if("Master"===(null==l?void 0:l.id)){W(!0);try{(0,B.V)(i.Bk,localStorage.getItem("tenantToken"),{operationName:"MyQuery",query:"query MyQuery {\n  product_code {\n    id\n    product_code\n  }\n}\n",variables:null}).then((function(n){if(n.errors)n.errors.map((function(n){null!=n&&n.message.includes(k.Ow)&&((0,I.kS)(),e((0,x.bs)("homeLogin")))}));else for(var t=function(e){d((function(t){var r,o,i,a;return[].concat(K(t),[{label:null==n||null===(r=n.data)||void 0===r||null===(o=r.product_code[e])||void 0===o?void 0:o.product_code,value:null==n||null===(i=n.data)||void 0===i||null===(a=i.product_code[e])||void 0===a?void 0:a.id}])}))},r=0;r<(null==n||null===(o=n.data)||void 0===o||null===(i=o.product_code)||void 0===i?void 0:i.length);r++){var o,i;t(r)}})).catch((function(e){console.log(e.message,"error.message")}))}catch(e){console.log(e)}finally{W(!1)}}else try{var n={operationName:"GetAllProjectBomListQuery",query:A.Ok,variables:{projectId:null==l?void 0:l.id}};(0,B.V)(i.Bk,localStorage.getItem("projectExchangeToken"),n).then((function(n){if(n.errors)n.errors.map((function(n){null!=n&&n.message.includes(k.Ow)&&((0,I.kS)(),e((0,x.bs)("homeLogin")))}));else for(var t=function(e){v((function(t){var r,o,i,a;return[].concat(K(t),[{label:null==n||null===(r=n.data)||void 0===r||null===(o=r.core_bom[e])||void 0===o?void 0:o.name,value:null==n||null===(i=n.data)||void 0===i||null===(a=i.core_bom[e])||void 0===a?void 0:a.id}])}))},r=0;r<(null==n||null===(o=n.data)||void 0===o||null===(i=o.core_bom)||void 0===i?void 0:i.length);r++){var o,i;t(r)}})).catch((function(e){console.log(e.message,"error.message")}))}catch(e){console.log(e)}}),[!0]),(0,r.useEffect)((function(){document.getElementById("mappingWarning").style.display="none"}),[]);var D=function(){var n=O(L().mark((function n(){var r,o;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.quantity&&t.total_price&&t.unit_size&&t.id&&null!=t&&t.custom_material_id&&null!=t&&t.associated_product_code_bom){e((0,E.Et)(!0)),r=localStorage.getItem("tenantToken");try{o={operationName:"GetBomdetailsByBomId",query:A.kN,variables:{bom_id:null==g?void 0:g.value,active:!0}},(0,B.V)(i.Bk,r,o).then(function(){var n=O(L().mark((function n(r){var o,i,a,l,u,s,d,m,_,f;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==r||!r.errors){n.next=4;break}r.errors.map((function(n){null!=n&&n.message.includes(k.Ow)&&((0,I.kS)(),e((0,x.bs)("homeLogin")),e((0,E.Et)(!1)))})),n.next=14;break;case 4:return j(null==r||null===(o=r.data)||void 0===o?void 0:o.bom_items),n.next=7,(0,w.Sq)(null==g?void 0:g.label,null==r||null===(i=r.data)||void 0===i||null===(a=i.bom_items[0])||void 0===a?void 0:a.bom_version_id);case 7:for(s=n.sent,(0,w.yT)(s),(0,w.TP)(c,{bomVersionId:null==r||null===(l=r.data)||void 0===l||null===(u=l.bom_items[0])||void 0===u?void 0:u.bom_version_id,productCodeId:null==p?void 0:p.value,productCodeLabel:null==p?void 0:p.label,bomId:null==g?void 0:g.value,bomLabel:null==g?void 0:g.label}),Object.entries(t).map((function(e,n){var t=T(e,2),r=t[0];t[1],V(n,r)})),d=0;d<(null==r||null===(m=r.data)||void 0===m||null===(_=m.bom_items)||void 0===_?void 0:_.length);d++)(0,w.Y3)(s,d,null==r||null===(f=r.data)||void 0===f?void 0:f.bom_items[d],t);null===k.Wi||void 0===k.Wi||k.Wi.forEach(function(){var e=O(L().mark((function e(n){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[n]){e.next=3;break}return e.next=3,(0,w.KP)(t[n].address);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e((0,E.Et)(!1));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){console.log("someThing went wrong"),e((0,E.Et)(!1))}))}catch(n){console.log(n),e((0,E.Et)(!1))}finally{e((0,E.Et)(!1))}}else document.getElementById("mappingWarning").style.display="block";case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),V=function(){var e=O(L().mark((function e(n,r){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Excel.run((function(e){var n,o,i=e.workbook.worksheets.getActiveWorksheet().getRange(String((null===(n=t[r])||void 0===n?void 0:n.address)+1));return i.values=[[null===(o=t[r])||void 0===o?void 0:o.name]],i.format.fill.color="#FFC467",i.format.autofitColumns(),e.sync()}));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement("div",{className:" bom-import-container"},r.createElement(C.Z,null),"Master"===(null==l?void 0:l.id)&&r.createElement("div",null,r.createElement($.Z,{options:s,handleChange:function(n){F(!0),v([]),b(null),_(n);var t=localStorage.getItem("tenantToken");try{var r={operationName:"GetAllBomListByProductCodeQuery",query:A.ZL,variables:{product_code:parseInt(null==n?void 0:n.value)}};fetch(i.Bk,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(n){if(n.errors)n.errors.map((function(n){null!=n&&n.message.includes(k.Ow)&&((0,I.kS)(),e((0,x.bs)("homeLogin")))}));else for(var t=function(e){v((function(t){var r,o,i,a;return[].concat(K(t),[{label:null==n||null===(r=n.data)||void 0===r||null===(o=r.core_bom[e])||void 0===o?void 0:o.name,value:null==n||null===(i=n.data)||void 0===i||null===(a=i.core_bom[e])||void 0===a?void 0:a.id}])}))},r=0;r<(null==n||null===(o=n.data)||void 0===o||null===(i=o.core_bom)||void 0===i?void 0:i.length);r++){var o,i;t(r)}})).catch((function(e){console.log(e)}))}catch(e){console.log(e)}finally{F(!1)}},value:p,label:"Selelct the Product Code",noOptionMessage:"No Product Codes availble",prodCodeLoading:Z})),r.createElement("div",null,r.createElement($.Z,{options:h,handleChange:function(e){b(e)},value:g,label:"Selelct the Bill of Material",noOptionMessage:"No  Bom data availble",isLoading:z})),r.createElement("div",{className:"bom-get-btn-container"},r.createElement("span",{className:"bom-import-button",onClick:g&&D},r.createElement(a.Z,{label:"Import"})),r.createElement("span",{className:"bom-addnewmaterial",onClick:function(){return N(!0)}},r.createElement(a.Z,{label:"Add Material"}))),P&&r.createElement(r.Suspense,{fallback:r.createElement("div",null)}," ",r.createElement(G,{setAddNewBomMaterial:N})),r.createElement("ul",{className:"mappingWarning",id:"mappingWarning"},!(null!=t&&t.id)&&r.createElement("li",null,"ID"),!(null!=t&&t.unit_size)&&r.createElement("li",null,"Unit Size (BOM)"),!(null!=t&&t.quantity)&&r.createElement("li",null,"Quantity (BOM)"),!(null!=t&&t.total_price)&&r.createElement("li",null,"Total Price (BOM)"),!(null!=t&&t.custom_material_id)&&r.createElement("li",null,"Material Id"),!(null!=t&&t.associated_product_code_bom)&&r.createElement("li",null,"Associated Product code (BOM)"),r.createElement("li",null,"you have to map given mandatory field(s)"))))}},23383:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(67294),o=t(85656),i=t(19018),a=t(58119),l=t(19617),c=t(93379),u=t.n(c),s=t(7795),d=t.n(s),m=t(90569),p=t.n(m),_=t(3565),f=t.n(_),h=t(19216),v=t.n(h),y=t(44589),g=t.n(y),b=t(20890),A={};A.styleTagTransform=g(),A.setAttributes=f(),A.insert=p().bind(null,"head"),A.domAPI=d(),A.insertStyleElement=v(),u()(b.Z,A),b.Z&&b.Z.locals&&b.Z.locals;var w=function(e){var n=e.options,t=e.handleChange,c=e.value,u=e.label,s=e.noOptionMessage,d=void 0===s?"No option available":s,m=e.isLoading,p=void 0===m||m,_=(0,o.v9)((function(e){return e.action})),f=_.sideBarOpen,h=_.uploadLoader,v=null==n?void 0:n.filter((function(e,n,t){return n===(null==t?void 0:t.findIndex((function(n){return(null==n?void 0:n.label)===(null==e?void 0:e.label)})))}));return r.createElement("div",{className:"react-select-dd"},u&&r.createElement("p",null,u),r.createElement(l.ZP,{options:v,components:{NoOptionsMessage:function(e){return r.createElement(a.c.NoOptionsMessage,e,r.createElement("span",{className:"custom-css-class"},d))}},styles:i.X2,onChange:t,value:c,className:"".concat(f?"selectType":" "),isDisabled:!!h,isLoading:p}))}},58381:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(67294),o=t(93379),i=t.n(o),a=t(7795),l=t.n(a),c=t(90569),u=t.n(c),s=t(3565),d=t.n(s),m=t(19216),p=t.n(m),_=t(44589),f=t.n(_),h=t(11234),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=u().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var y=t(85656),g=function(){var e=(0,y.v9)((function(e){return e.taskpane})).activeProject;return r.createElement("div",{className:"projectIndicator-box"},r.createElement("span",null,"...")," ",r.createElement("span",null,null==e?void 0:e.name))}},21610:function(e,n,t){var r=t(87537),o=t.n(r),i=t(23645),a=t.n(i)()(o());a.push([e.id,"\r\n.bom-get-btn-container{\r\ndisplay: flex;\r\nmargin-top: 20px;\r\ngap: 10px;\r\n}\r\n.bom-import-container{\r\n    display: flex;\r\n   align-items: center;\r\n    flex-direction: column;\r\n    height: -webkit-fill-available;\r\n}\r\n.mappingWarning li{\r\n    color: red;\r\n    font-size: x-small;\r\n}\r\n.mappingWarning li:last-child{\r\n    list-style: none;\r\n}\r\n\r\n.mappingWarning{\r\ndisplay: none;\r\n}\r\n","",{version:3,sources:["webpack://./src/taskpane/commonComponents/Bom/BomGet/BomGet.css"],names:[],mappings:";AACA;AACA,aAAa;AACb,gBAAgB;AAChB,SAAS;AACT;AACA;IACI,aAAa;GACd,mBAAmB;IAClB,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;AACA,aAAa;AACb",sourcesContent:["\r\n.bom-get-btn-container{\r\ndisplay: flex;\r\nmargin-top: 20px;\r\ngap: 10px;\r\n}\r\n.bom-import-container{\r\n    display: flex;\r\n   align-items: center;\r\n    flex-direction: column;\r\n    height: -webkit-fill-available;\r\n}\r\n.mappingWarning li{\r\n    color: red;\r\n    font-size: x-small;\r\n}\r\n.mappingWarning li:last-child{\r\n    list-style: none;\r\n}\r\n\r\n.mappingWarning{\r\ndisplay: none;\r\n}\r\n"],sourceRoot:""}]),n.Z=a},20890:function(e,n,t){var r=t(87537),o=t.n(r),i=t(23645),a=t.n(i)()(o());a.push([e.id,".react-select-dd p{\r\n    margin:10px 0px 5px 0px\r\n}","",{version:3,sources:["webpack://./src/taskpane/commonComponents/DropDown/DropDown.css"],names:[],mappings:"AAAA;IACI;AACJ",sourcesContent:[".react-select-dd p{\r\n    margin:10px 0px 5px 0px\r\n}"],sourceRoot:""}]),n.Z=a},11234:function(e,n,t){var r=t(87537),o=t.n(r),i=t(23645),a=t.n(i)()(o());a.push([e.id,".projectIndicator-box{\r\n    margin: 0;\r\n    padding:0;\r\n    padding: .08rem;\r\n    width: -webkit-fill-available;\r\n    display: grid;\r\ngrid-template-columns: 1fr 1fr;\r\npadding-right:.2rem;\r\ngrid-gap: 1px;\r\n}\r\n.projectIndicator-box span {\r\ntext-align: center;\r\nbackground-color: rgba(255, 196, 103, .6);\r\nwidth: 100%;\r\nheight: 100%;\r\nfont-size: x-small;\r\n\r\n}","",{version:3,sources:["webpack://./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,SAAS;IACT,eAAe;IACf,6BAA6B;IAC7B,aAAa;AACjB,8BAA8B;AAC9B,mBAAmB;AACnB,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,yCAAyC;AACzC,WAAW;AACX,YAAY;AACZ,kBAAkB;;AAElB",sourcesContent:[".projectIndicator-box{\r\n    margin: 0;\r\n    padding:0;\r\n    padding: .08rem;\r\n    width: -webkit-fill-available;\r\n    display: grid;\r\ngrid-template-columns: 1fr 1fr;\r\npadding-right:.2rem;\r\ngrid-gap: 1px;\r\n}\r\n.projectIndicator-box span {\r\ntext-align: center;\r\nbackground-color: rgba(255, 196, 103, .6);\r\nwidth: 100%;\r\nheight: 100%;\r\nfont-size: x-small;\r\n\r\n}"],sourceRoot:""}]),n.Z=a}}]);
//# sourceMappingURL=164.js.map