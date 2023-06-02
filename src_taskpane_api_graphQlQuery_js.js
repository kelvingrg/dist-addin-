"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_api_graphQlQuery_js"],{

/***/ "./src/taskpane/api/graphQlQuery.js":
/*!******************************************!*\
  !*** ./src/taskpane/api/graphQlQuery.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAllBomItemsByBomVersionIdQuery": function() { return /* binding */ GetAllBomItemsByBomVersionIdQuery; },
/* harmony export */   "GetAllBomListByProductCodeActive": function() { return /* binding */ GetAllBomListByProductCodeActive; },
/* harmony export */   "GetAllBomListByProductCodeQuery": function() { return /* binding */ GetAllBomListByProductCodeQuery; },
/* harmony export */   "GetAllFormTemplatesQuery": function() { return /* binding */ GetAllFormTemplatesQuery; },
/* harmony export */   "GetAllFormTypeListQuery": function() { return /* binding */ GetAllFormTypeListQuery; },
/* harmony export */   "GetAllProductCodes": function() { return /* binding */ GetAllProductCodes; },
/* harmony export */   "GetAllProjectBomListQuery": function() { return /* binding */ GetAllProjectBomListQuery; },
/* harmony export */   "GetBomCurrentStateQuery": function() { return /* binding */ GetBomCurrentStateQuery; },
/* harmony export */   "GetBomMaterialMappingConfigQuery": function() { return /* binding */ GetBomMaterialMappingConfigQuery; },
/* harmony export */   "GetBomdetailsByBomId": function() { return /* binding */ GetBomdetailsByBomId; },
/* harmony export */   "GetDetailFormTemplateQuery": function() { return /* binding */ GetDetailFormTemplateQuery; },
/* harmony export */   "GetMaterialMasterDataQuery": function() { return /* binding */ GetMaterialMasterDataQuery; },
/* harmony export */   "GetMaterialMasterForBomQueryWithTagFilters": function() { return /* binding */ GetMaterialMasterForBomQueryWithTagFilters; },
/* harmony export */   "allBomAssociatedwithATenant": function() { return /* binding */ allBomAssociatedwithATenant; },
/* harmony export */   "getChildrenTagsQuery": function() { return /* binding */ getChildrenTagsQuery; },
/* harmony export */   "getMaterialTags": function() { return /* binding */ getMaterialTags; },
/* harmony export */   "getParentTags": function() { return /* binding */ getParentTags; }
/* harmony export */ });
var GetAllBomListByProductCodeQuery = "query GetAllBomListByProductCodeQuery($product_code: Int!) {\n    core_bom(where: {product_code: {_eq: $product_code}}) {\n      id\n      name\n    }\n}\n";
var allBomAssociatedwithATenant = "query allBomAssociatedwithATenant {\n  core_bom {\n    id\n    name\n  }\n}";
var GetBomdetailsByBomId = "query GetBomdetailsByBomId($bom_id: Int!, $active: Boolean!) {\n  bom_items(\n    where: {bom_id: {_eq: $bom_id}, bom_version: {active: {_eq: $active}}}\n  ) {\n    bom_id\n    bom_version_id\n    material_id\n    quantity\n    total_price\n    unit_size\n    associated_product_code_bom\n    associated_bom_version {\n      version_no\n      id\n      active\n      core_bom {\n        id\n        name\n      }\n    }\n    core_material {\n      custom_material_id\n      erp_material_id\n      gross_weight\n      id\n      inventory\n      lead_time\n      material_description\n      material_group\n      material_name\n      material_type\n      parent_id\n      plm_material_id\n      plm_record_id\n      product_code\n      quantity\n      status\n      storage_loc\n      unit_cost\n      unit_of_material\n      unit_sale_price\n      weight_unit\n      material_product_code {\n        id\n        product_code\n      }\n    }\n    core_bom {\n      state         \n      tenant_id\n    }\n  }\n}\n  ";

// export const GetAllBomItemsByBomVersionIdQuery = `query GetAllBomItemsByBomVersionIdQuery($bom_version: Int) {
//     bom_items(where: {bom_version_id: {_eq: $bom_version}}) {
//       associated_product_code_bom
//       associated_bom_version {
//         version_no
//         id
//         active
//         core_bom {
//           id
//           name
//         }
//       }
//       bom_id
//       bom_version_id
//       material_id
//       quantity
//       total_price
//       unit_size
//       core_material {
//         custom_material_id
//           erp_material_id
//           blob_reference_key
//           id
//           gross_weight
//           inventory
//           lead_time
//           material_description
//           material_group
//           material_name
//           material_type
//           others
//           parent_id
//           plm_material_id
//           plm_record_id
//           quantity
//           status
//           storage_loc
//           unit_cost
//           unit_of_material
//           unit_sale_price
//           weight_unit
//           product_code
//           material_product_code {
//             id
//             product_code
//           }
//       }
//     }
//   }`;

// export const GetBomForCopyAndInheritQuery = () => GQL`query MyQuery($id: Int!) {
//     core_bom_by_pk(id: $id) {
//       name
//       product_code
//       bom_versions(where: {active: {_eq: true}}) {
//         id
//         bom_items {
//           material_id
//           quantity
//           total_price
//           unit_size
//           associated_product_code_bom
//         }
//       }
//     }
//   }
//   `;

// Project Bom

// export const CreateProjectBomQuery = () => `mutation CreateProjectBomQuery(
//     $name: String!,
//     $items: [bomItemsArray],
//     $inherited_from_bom_id: Int,
//     $inherited_from_bom_version_id: Int
//     ) {
//     insert_bom(
//       inherited_from_bom_id: $inherited_from_bom_id,
//       inherited_from_bom_version_id: $inherited_from_bom_version_id,
//       bom_data: {
//         items: $items,
//         name: $name,
//       }) {
//       message
//     }
//   }`;
var GetMaterialMasterDataQuery = "query GetMaterialMasterDataQuery(\n    $jump: Int,\n    $perPage: Int,\n    $searchKeyword: String\n    ) {\n    core_material_master_aggregate(where: {_or: [\n      {custom_material_id: {_ilike: $searchKeyword}},\n      {erp_material_id: {_ilike: $searchKeyword}},\n      {material_description: {_ilike: $searchKeyword}},\n      {material_name: {_ilike: $searchKeyword}},\n      {material_type: {_ilike: $searchKeyword}},\n      {plm_material_id: {_ilike: $searchKeyword}},\n      {unit_of_material: {_ilike: $searchKeyword}},\n      {material_product_code: {\n        product_code: {_ilike: $searchKeyword}}\n      }\n    ]}){\n      aggregate {\n        count\n      }\n    }\n    core_material_master(\n      where: {_or: [\n        {custom_material_id: {_ilike: $searchKeyword}},\n        {erp_material_id: {_ilike: $searchKeyword}},\n        {material_description: {_ilike: $searchKeyword}},\n        {material_name: {_ilike: $searchKeyword}},\n        {material_type: {_ilike: $searchKeyword}},\n        {plm_material_id: {_ilike: $searchKeyword}},\n        {unit_of_material: {_ilike: $searchKeyword}},\n        {material_product_code: {\n          product_code: {_ilike: $searchKeyword}}\n        }\n      ]}\n      limit: $perPage\n      offset: $jump\n    ) {\n      custom_material_id\n      erp_material_id\n      blob_reference_key\n      id\n      gross_weight\n      inventory\n      lead_time\n      material_description\n      material_group\n      material_name\n      material_type\n      others\n      parent_id\n      plm_material_id\n      plm_record_id\n      quantity\n      status\n      storage_loc\n      unit_cost\n      unit_of_material\n      unit_sale_price\n      weight_unit\n      product_code\n      material_product_code {\n        id\n        product_code\n      }\n    }\n  }\n  ";
var GetAllProductCodes = "query GetAllProductCodes {\n  product_code {\n    id\n    product_code\n  }\n}\n";
var GetAllBomListByProductCodeActive = "query GetAllBomListByProductCodeActive($product_code: Int!) {\n  core_bom(where: {product_code: {_eq: $product_code}}) {\n    id\n    name\n    bom_versions(where: {active: {_eq: true}}) {\n      id\n      version_no\n      active\n    }\n  }\n}\n";
var GetAllBomItemsByBomVersionIdQuery = "query GetAllBomItemsByBomVersionIdQuery($bom_version: Int) {\n  bom_items(where: {bom_version_id: {_eq: $bom_version}}) {\n    associated_product_code_bom\n    associated_bom_version {\n      version_no\n      id\n      active\n      core_bom {\n        id\n        name\n      }\n    }\n    material_id\n    quantity\n    total_price\n    unit_size\n    core_material {\n      custom_material_id\n        erp_material_id\n        blob_reference_key\n        id\n        gross_weight\n        inventory\n        lead_time\n        material_description\n        material_group\n        material_name\n        material_type\n        others\n        parent_id\n        plm_material_id\n        plm_record_id\n        quantity\n        status\n        storage_loc\n        unit_cost\n        unit_of_material\n        unit_sale_price\n        weight_unit\n        product_code\n        material_product_code {\n          id\n          product_code\n        }\n       \n    }\n    core_bom {\n      name\n      id\n    }\n  }\n}";
var GetAllProjectBomListQuery = "query GetAllProjectBomListQuery($projectId: Int!)  {\n  core_bom(where: {project_id: {_eq: $projectId}}) {\n    id\n    name\n    bom_versions(where: {active: {_eq: true}}) {\n      id\n      version_no\n      active\n    }\n    project_id\n  }\n}";
var getParentTags = "query getParentTags($value: String!) {\n  tag(where: {name: {_iregex: $value}, parent_id: {_is_null: true}}) {\n    parent_id\n    name\n    id\n  }\n}";
var getChildrenTagsQuery = "query getChildrenTagsQuery($value:String!,$parent_id:Int){\n  tag(where: {name: {_iregex: $value}, parent_id: {_eq: $parent_id}}) {\n     parent_id\n     name\n     id\n   }\n }";
var GetMaterialMasterForBomQueryWithTagFilters = "query GetMaterialMasterForBomQueryWithTagFilters(\n  $jump: Int,\n  $perPage: Int,\n  $searchKeyword: String,\n  $materialIds:[Int!]\n  ) {\n  core_material_master_aggregate(where:{_and:[\n    {_or: [\n    {custom_material_id: {_ilike: $searchKeyword}},\n    {erp_material_id: {_ilike: $searchKeyword}},\n    {material_description: {_ilike: $searchKeyword}},\n    {material_name: {_ilike: $searchKeyword}},\n    {material_type: {_ilike: $searchKeyword}},\n    {plm_material_id: {_ilike: $searchKeyword}},\n    {unit_of_material: {_ilike: $searchKeyword}},\n    {material_product_code: {\n      product_code: {_ilike: $searchKeyword}}\n    }]},\n    {id: {\n      _in: $materialIds\n    }}\n  ]}){\n    aggregate {\n      count\n    }\n  }\n  core_material_master(\n    where:{_and:[\n    {_or: [\n    {custom_material_id: {_ilike: $searchKeyword}},\n    {erp_material_id: {_ilike: $searchKeyword}},\n    {material_description: {_ilike: $searchKeyword}},\n    {material_name: {_ilike: $searchKeyword}},\n    {material_type: {_ilike: $searchKeyword}},\n    {plm_material_id: {_ilike: $searchKeyword}},\n    {unit_of_material: {_ilike: $searchKeyword}},\n    {material_product_code: {\n      product_code: {_ilike: $searchKeyword}}\n    }]},\n    {id: {\n      _in: $materialIds\n    }}\n  ]}\n    limit: $perPage\n    offset: $jump\n  ) {\n    custom_material_id\n    erp_material_id\n    id\n    lead_time\n    material_description\n    material_name\n    material_type\n    plm_material_id\n    unit_of_material\n    product_code\n    material_product_code {\n      id\n      product_code\n    }\n  }\n}\n";
var getMaterialTags = "query getMaterialTags(\n  $tags:[Int!]!\n){\n  tag_material(where: {tag_id: {_in: $tags}}) {\n    material_id\n  }\n}\n";
var GetAllFormTypeListQuery = "query GetAllFormTypeListQuery {\n  core_form_types {\n    enabled\n    id\n    name\n  }\n}";
var GetDetailFormTemplateQuery = "query GetDetailFormTemplateQuery($id: Int!) {\n  core_form_templates_by_pk(id: $id) {\n    name\n    id\n    core_form_type {\n      name\n    }\n    template_versions(where: {active: {_eq: true}}) {\n      active\n      version_id\n      id\n      template_fields {\n        autogenerated\n        caption\n        custom_list_id\n        field_id\n        field_name\n        field_type_id\n        fixed\n        required\n        template_version_id\n        form_field {\n          key\n        }\n      }\n    }\n  }\n}";
var GetAllFormTemplatesQuery = "query GetAllFormTemplatesQuery{\n  core_form_templates {\n    name\n    id\n    core_form_type {\n      name\n    }\n    template_versions(where: {active: {_eq: true}}) {\n      active\n      version_id\n    }\n  }\n}";
var GetBomMaterialMappingConfigQuery = "query GetBomMaterialMappingConfigQuery($tenant_id: Int!) {\n  tenant_defaults(where: {tenant_id: {_eq: $tenant_id}}) {\n    bom\n    material\n  }\n}";
var GetBomCurrentStateQuery = "query GetBomCurrentStateQuery($bom_id: Int!) {\n  core_bom(where: {id: {_eq: $bom_id}}) {\n    state\n    name\n    checked_out_by\n  }\n}";

/***/ })

}]);
//# sourceMappingURL=src_taskpane_api_graphQlQuery_js.js.map