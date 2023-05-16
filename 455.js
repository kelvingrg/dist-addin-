"use strict";(self.webpackChunkoffice_addin_taskpane_react_js=self.webpackChunkoffice_addin_taskpane_react_js||[]).push([[455],{3193:function(n,e,r){r.d(e,{Bk:function(){return t},ND:function(){return a},_n:function(){return o}});var t="https://beacon-dev.hasura.app/v1/graphql",a="https://dev-be.beacon-dtx.com",o="https://excel-dev.beacon-dtx.com"},68518:function(n,e,r){r.d(e,{Z:function(){return b}});var t=r(67294),a=r(93379),o=r.n(a),i=r(7795),A=r.n(i),c=r(90569),l=r.n(c),s=r(3565),p=r.n(s),d=r(19216),u=r.n(d),m=r(44589),g=r.n(m),C=r(84637),f={};f.styleTagTransform=g(),f.setAttributes=p(),f.insert=l().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=u(),o()(C.Z,f),C.Z&&C.Z.locals&&C.Z.locals;var b=function(n){var e=n.label;return t.createElement("span",{className:"common-button"},e)}},57276:function(n,e,r){r.d(e,{Z:function(){return I}});var t=r(67294),a=r(85656),o=r(21559),i=r(93379),A=r.n(i),c=r(7795),l=r.n(c),s=r(90569),p=r.n(s),d=r(3565),u=r.n(d),m=r(19216),g=r.n(m),C=r(44589),f=r.n(C),b=r(51621),B={};B.styleTagTransform=f(),B.setAttributes=u(),B.insert=p().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=g(),A()(b.Z,B),b.Z&&b.Z.locals&&b.Z.locals;var v=r(3193),I=function(){var n=(0,a.v9)((function(n){return null==n?void 0:n.taskpane})).nextPage,e=(0,a.I0)(),r=(0,a.v9)((function(n){return null==n?void 0:n.action})).materialAction;return t.createElement("div",{className:"navbar"},t.createElement("div",{className:"navbar-logo"},t.createElement("img",{src:"".concat(v._n,"/assets/beacon-without-background -logo.png ")})),"material"===n&&t.createElement("div",{className:"navbar-option"},t.createElement("span",{className:"navbar-button ".concat("get"==r?"selectedAction":null),onClick:function(){return e((0,o.XZ)("get"))}},"Get"),t.createElement("span",{className:"navbar-button ".concat("map"==r?"selectedAction":null),onClick:function(){return e((0,o.XZ)("map"))}},"Map"),t.createElement("span",{className:"navbar-button ".concat("export"==r?"selectedAction":null),onClick:function(){return e((0,o.XZ)("export"))}},"Export"),t.createElement("span",{className:"navbar-button ".concat("update"==r?"selectedAction":null),onClick:function(){return e((0,o.XZ)("update"))}},"Update")))}},78455:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(67294),a=r(93379),o=r.n(a),i=r(7795),A=r.n(i),c=r(90569),l=r.n(c),s=r(3565),p=r.n(s),d=r(19216),u=r.n(d),m=r(44589),g=r.n(m),C=r(38932),f={};f.styleTagTransform=g(),f.setAttributes=p(),f.insert=l().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=u(),o()(C.Z,f),C.Z&&C.Z.locals&&C.Z.locals;var b=r(3193);r(57276);var B=function(){return t.createElement("header",{className:"ms-welcome__header"},t.createElement("img",{src:"".concat(b._n,"/assets/beacon-without-background -logo.png"),alt:"Beacon-India",title:"Beacon-India"}),t.createElement("p",null,"Beacon-DTX Excel plugin"))},v=r(2339),I={};I.styleTagTransform=g(),I.setAttributes=p(),I.insert=l().bind(null,"head"),I.domAPI=A(),I.insertStyleElement=u(),o()(v.Z,I),v.Z&&v.Z.locals&&v.Z.locals;var x=r(46027),h=r(85656),y=r(5274),k=r(5449),E=r(68518),w=r(21559),Z=r(88725),_=function(){var n=(0,h.I0)(),e=(0,h.v9)((function(n){return n.action})).uploadLoader;return t.createElement(t.Fragment,null,t.createElement("div",{className:"HomeLoginBody ",id:"commonContainer"},t.createElement(B,null),t.createElement("main",{id:"app-body",className:"loginHome"},t.createElement("span",{onClick:function(){k.g.dialog;try{Office.context.ui.displayDialogAsync("".concat(b._n,"/login.html"),{height:62,width:45,displayInIframe:!0},(function(n){k.g.dialog=n.value,k.g.dialog.addEventHandler(Office.EventType.DialogMessageReceived,e)}));var e=function(e){localStorage.setItem("beaconToken",e.message),n((0,w.Et)(!0)),k.g.dialog.close(),function(){try{var e=localStorage.getItem("beaconToken"),r=function(n){try{var e=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(window.atob(e).split("").map((function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)}catch(n){console.log(n)}}(e);localStorage.setItem("expiry",r.exp);var t={"Content-Type":"application/json",Authorization:"Bearer "+e};y.Z.post("".concat(b.ND,"/user/tokenExchange"),{tenantId:r["x-hasura-tenant-id"]},{headers:t}).then((function(e){var r,t;localStorage.setItem("tenantToken",null==e||null===(r=e.data)||void 0===r?void 0:r.message),localStorage.setItem("projectExchangeToken",null==e||null===(t=e.data)||void 0===t?void 0:t.message),n((0,w.Et)(!1))})).catch((function(e){console.log("tenant  login ",e),n((0,w.Et)(!1))}))}catch(n){console.log("Error:",n)}finally{n((0,w.Et)(!1))}}(),n((0,x.bs)("material"))}}catch(e){console.log(e),n((0,w.Et)(!1))}}},t.createElement(E.Z,{label:"Login"})))),e&&t.createElement(Z.default,null))}},38932:function(n,e,r){var t=r(87537),a=r.n(t),o=r(23645),i=r.n(o)()(a());i.push([n.id,"img{\r\n    width: 106px;;\r\n  height:30px;\r\n}\r\n.ms-welcome__header {\r\n    padding-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-bottom: solid 1px;\r\n }","",{version:3,sources:["webpack://./src/taskpane/commonComponents/BeaconHeader/BeaconHeader.css"],names:[],mappings:"AAAA;IACI,YAAY;EACd,WAAW;AACb;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;CAC3B",sourcesContent:["img{\r\n    width: 106px;;\r\n  height:30px;\r\n}\r\n.ms-welcome__header {\r\n    padding-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-bottom: solid 1px;\r\n }"],sourceRoot:""}]),e.Z=i},84637:function(n,e,r){var t=r(87537),a=r.n(t),o=r(23645),i=r.n(o)()(a());i.push([n.id,".common-button{\r\n    background-color: #FFC467;\r\n    padding:5px 8px 5px 8px;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-transform: capitalize;\r\n    font-size: x-small;\r\n\r\n}\r\n.common-button:active{\r\n    opacity: .5;\r\n}","",{version:3,sources:["webpack://./src/taskpane/commonComponents/Button/Button.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;;AAEtB;AACA;IACI,WAAW;AACf",sourcesContent:[".common-button{\r\n    background-color: #FFC467;\r\n    padding:5px 8px 5px 8px;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-transform: capitalize;\r\n    font-size: x-small;\r\n\r\n}\r\n.common-button:active{\r\n    opacity: .5;\r\n}"],sourceRoot:""}]),e.Z=i},51621:function(n,e,r){var t=r(87537),a=r.n(t),o=r(23645),i=r.n(o)()(a());i.push([n.id,".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding: 5px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n","",{version:3,sources:["webpack://./src/taskpane/commonComponents/Material/Navbar/NavBar.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;;AAEA,YAAY;AACZ;AACA;IACI,gCAAgC;IAChC,wBAAwB;;AAE5B;AACA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC",sourcesContent:[".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding: 5px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n"],sourceRoot:""}]),e.Z=i},2339:function(n,e,r){var t=r(87537),a=r.n(t),o=r(23645),i=r.n(o)()(a());i.push([n.id,"\r\n.HomeLoginBody{\r\n    padding: 0;\r\n    margin:0;\r\n    background-color: white;\r\n    /* height: 100vh;\r\n    width:100vw; */\r\n}\r\n\r\n.loginHome span {\r\n    color: #383332;\r\n    border-radius: 3px;\r\n    margin-top: 30px;\r\n}\r\n.loginHome{\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}","",{version:3,sources:["webpack://./src/taskpane/pages/HomeLogin/HomeLogin.css"],names:[],mappings:";AACA;IACI,UAAU;IACV,QAAQ;IACR,uBAAuB;IACvB;kBACc;AAClB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB",sourcesContent:["\r\n.HomeLoginBody{\r\n    padding: 0;\r\n    margin:0;\r\n    background-color: white;\r\n    /* height: 100vh;\r\n    width:100vw; */\r\n}\r\n\r\n.loginHome span {\r\n    color: #383332;\r\n    border-radius: 3px;\r\n    margin-top: 30px;\r\n}\r\n.loginHome{\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"],sourceRoot:""}]),e.Z=i}}]);
//# sourceMappingURL=455.js.map