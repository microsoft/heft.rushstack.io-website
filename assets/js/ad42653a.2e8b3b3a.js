"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[449],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),u=a,f=g["".concat(l,".").concat(u)]||g[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var n=r(9122),a=r(2501),o=(r(6393),r(158)),i=["components"],s={title:"rig.json"},l=void 0,p={unversionedId:"pages/configs/rig_json",id:"version-0.50.0/pages/configs/rig_json",title:"rig.json",description:"|                                           |                                            |",source:"@site/versioned_docs/version-0.50.0/pages/configs/rig_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/rig_json",permalink:"/0.50.0/pages/configs/rig_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/versioned_docs/version-0.50.0/pages/configs/rig_json.md",tags:[],version:"0.50.0",frontMatter:{title:"rig.json"},sidebar:"docsSidebar",previous:{title:"node-service.json",permalink:"/0.50.0/pages/configs/node-service_json"},next:{title:"sass.json",permalink:"/0.50.0/pages/configs/sass_json"}},c={},g=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],m={toc:g},u="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/rig.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/0.50.0/pages/intro/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// The "rig.json" file directs tools to look for their config files in an external package.\n// Documentation for this system: https://www.npmjs.com/package/@rushstack/rig-package\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",\n\n  /**\n   * (Required) The name of the rig package to inherit from.\n   * It should be an NPM package name with the "-rig" suffix.\n   */\n  "rigPackageName": "example-rig",\n  /**\n   * (Optional) Selects a config profile from the rig package.  The name must consist of\n   * lowercase alphanumeric words separated by hyphens, for example "sample-profile".\n   * If omitted, then the "default" profile will be used."\n   */\n  "rigProfile": "web-library"\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.50.0/pages/intro/rig_packages"},"Using rig packages")," with Heft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," documentation")))}f.isMDXComponent=!0}}]);