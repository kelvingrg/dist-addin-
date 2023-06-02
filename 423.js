"use strict";(self.webpackChunkoffice_addin_taskpane_react_js=self.webpackChunkoffice_addin_taskpane_react_js||[]).push([[423],{3193:function(n,e,r){r.d(e,{Bk:function(){return t},ND:function(){return a},_n:function(){return o}});var t="https://beacon-dev.hasura.app/v1/graphql",a="https://dev-be.beacon-dtx.com",o="https://kelvingrg.github.io/dist-addin-"},82423:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t=r(67294),a=r(51031),o=r(93379),A=r.n(o),l=r(7795),i=r.n(l),c=r(90569),m=r.n(c),s=r(3565),u=r.n(s),p=r(19216),d=r.n(p),g=r(44589),b=r.n(g),C=r(51667),B={};B.styleTagTransform=b(),B.setAttributes=u(),B.insert=m().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=d(),A()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals;var x=r(85656),h=r(26259),f={};f.styleTagTransform=b(),f.setAttributes=u(),f.insert=m().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),A()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var v=r(3193),I=r(21559),k=function(){var n=(0,x.v9)((function(n){return null==n?void 0:n.taskpane})).nextPage,e=(0,x.I0)(),r=(0,x.v9)((function(n){return null==n?void 0:n.action})).bomAction,a=function(){document.getElementById("bom-get-menu-box").style.display="none"};return t.createElement("div",{className:"navbar"},t.createElement("div",{className:"navbar-logo"},t.createElement("img",{src:"".concat(v._n,"/assets/beacon-without-background -logo.png ")})),"bom"===n&&t.createElement("div",{className:"navbar-option"},t.createElement("span",{className:"navbar-button ".concat("map"==r?"selectedAction":null),onClick:function(){return e((0,I.mH)("map"))}},"Map"),t.createElement("span",{className:"navbar-button bom-get-menu-button ".concat("getRegularBom"==r||"getFlatBom"==r||"getHierarchicalBom"==r?"selectedAction":null),onClick:function(){document.getElementById("bom-get-menu-box").style.display="block"}},"Get",t.createElement("ul",{className:"bom-get-menu-box",id:"bom-get-menu-box",onMouseLeave:a},t.createElement("li",{onClick:function(){a(),e((0,I.mH)("getRegularBom"))}},"Regular BOM"," "),t.createElement("li",{onClick:function(){a(),e((0,I.mH)("getFlatBom"))}},"Flat BOM"),t.createElement("li",{onClick:function(){a(),e((0,I.mH)("getHierarchicalBom"))}},"Hierarchical BOM"))),t.createElement("span",{className:"navbar-button ".concat("create"==r?"selectedAction":null),onClick:function(){return e((0,I.mH)("create"))}},"Create"),t.createElement("span",{className:"navbar-button ".concat("update"==r?"selectedAction":null),onClick:function(){return e((0,I.mH)("update"))}},"Update")))},E=t.lazy((function(){return Promise.all([r.e(617),r.e(923),r.e(515),r.e(688)]).then(r.bind(r,70515))})),w=t.lazy((function(){return Promise.all([r.e(617),r.e(923),r.e(164)]).then(r.bind(r,70164))})),y=t.lazy((function(){return Promise.all([r.e(617),r.e(923),r.e(433)]).then(r.bind(r,39433))})),Z=t.lazy((function(){return Promise.resolve().then(r.bind(r,88725))})),Y=t.lazy((function(){return Promise.all([r.e(617),r.e(923),r.e(588)]).then(r.bind(r,8588))})),N=t.lazy((function(){return Promise.all([r.e(617),r.e(923),r.e(461)]).then(r.bind(r,30461))})),F=t.lazy((function(){return Promise.all([r.e(617),r.e(923),r.e(436)]).then(r.bind(r,28436))})),S=function(){var n=(0,x.v9)((function(n){return n.action})),e=n.bomAction,r=n.uploadLoader,o=n.bomMappingDataTemp;return t.createElement(t.Fragment,null,t.createElement("div",{className:"commonContainer",id:"commonContainer"},t.createElement("div",{className:"commonNavBar"},t.createElement(k,null)),t.createElement("div",{className:"commonBody "},t.createElement("div",{className:"commonSidebarBox"},t.createElement(a.Z,null)),t.createElement("div",{className:"commonActivityArea"},"map"===e?t.createElement(t.Suspense,{fallback:t.createElement("div",null)},t.createElement(E,{mappingConfig:o,setmappingConfig:I.af,setmappingConfig2:I.Es})," "):null,"getRegularBom"===e?t.createElement(t.Suspense,{fallback:t.createElement("div",null)},t.createElement(w,null)):null,"getFlatBom"===e?t.createElement(t.Suspense,{fallback:t.createElement("div",null)}," ",t.createElement(N,null)," "):null,"getHierarchicalBom"===e?t.createElement(t.Suspense,{fallback:t.createElement("div",null)}," ",t.createElement(F,null)," "):null,"create"===e?t.createElement(t.Suspense,{fallback:t.createElement("div",null)},t.createElement(Y,null)," "):null,"update"===e?t.createElement(t.Suspense,{fallback:t.createElement("div",null)},t.createElement(y,null)," "):null))),r&&t.createElement(t.Suspense,{fallback:t.createElement("div",null)},t.createElement(Z,null)))}},26259:function(n,e,r){var t=r(87537),a=r.n(t),o=r(23645),A=r.n(o)()(a());A.push([n.id,".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding:5px 2px 5px 2px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n.bom-get-menu-button{\r\nposition: relative;\r\n}\r\n.bom-get-menu-box{\r\n    display: none;\r\n    padding: 0;\r\n    margin:0;\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 0rem;\r\n    word-break: keep-all;\r\n    width: max-content;\r\n    height:  max-content;\r\n    background-color: bisque;\r\n    list-style: none;\r\n\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    \r\n}\r\n.bom-get-menu-box li{\r\n    word-break: keep-all;\r\n    padding: .3rem;\r\n    padding-inline: 1rem;\r\n}\r\n.bom-get-menu-box li:hover{\r\nbackground-color: #FFC467;\r\n}","",{version:3,sources:["webpack://./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;;AAEA,uBAAuB;AACvB;AACA;IACI,gCAAgC;IAChC,wBAAwB;;AAE5B;AACA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;AACA;AACA,kBAAkB;AAClB;AACA;IACI,aAAa;IACb,UAAU;IACV,QAAQ;IACR,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,wBAAwB;IACxB,gBAAgB;;IAEhB,wFAAwF;;AAE5F;AACA;IACI,oBAAoB;IACpB,cAAc;IACd,oBAAoB;AACxB;AACA;AACA,yBAAyB;AACzB",sourcesContent:[".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding:5px 2px 5px 2px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n.bom-get-menu-button{\r\nposition: relative;\r\n}\r\n.bom-get-menu-box{\r\n    display: none;\r\n    padding: 0;\r\n    margin:0;\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 0rem;\r\n    word-break: keep-all;\r\n    width: max-content;\r\n    height:  max-content;\r\n    background-color: bisque;\r\n    list-style: none;\r\n\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    \r\n}\r\n.bom-get-menu-box li{\r\n    word-break: keep-all;\r\n    padding: .3rem;\r\n    padding-inline: 1rem;\r\n}\r\n.bom-get-menu-box li:hover{\r\nbackground-color: #FFC467;\r\n}"],sourceRoot:""}]),e.Z=A},51667:function(n,e,r){var t=r(87537),a=r.n(t),o=r(23645),A=r.n(o)()(a());A.push([n.id,".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    min-height: -webkit-fill-available;\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 3;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\nheight: 100%;\r\n\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}","",{version:3,sources:["webpack://./src/taskpane/pages/Bom/Bom.css"],names:[],mappings:"AAAA;IACI;uBACmB;IACnB,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;AACA,YAAY;AACZ,WAAW;AACX,eAAe;AACf,KAAK;AACL,wBAAwB;AACxB,UAAU;AACV;AACA;AACA,aAAa;AACb,gBAAgB;AAChB,YAAY;;AAEZ;AACA;AACA,WAAW;AACX,uBAAuB;AACvB,aAAa;AACb,8BAA8B;AAC9B,eAAe;AACf;AACA;AACA,YAAY;AACZ,iBAAiB;AACjB",sourcesContent:[".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    min-height: -webkit-fill-available;\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 3;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\nheight: 100%;\r\n\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}"],sourceRoot:""}]),e.Z=A}}]);
//# sourceMappingURL=423.js.map