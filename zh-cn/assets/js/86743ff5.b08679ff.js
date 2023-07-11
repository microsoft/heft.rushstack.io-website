"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[5017],{158:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var n=o(6393);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,k=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return o?n.createElement(k,s(s({ref:t},c),{},{components:o})):n.createElement(k,s({ref:t},c))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3938:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=o(9122),r=o(2501),a=(o(6393),o(158)),s=["components"],i={title:"Storybook plugin"},l=void 0,p={unversionedId:"pages/plugins/storybook",id:"pages/plugins/storybook",title:"Storybook plugin",description:"|     |     |",source:"@site/docs/pages/plugins/storybook.md",sourceDirName:"pages/plugins",slug:"/pages/plugins/storybook",permalink:"/zh-cn/pages/plugins/storybook",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/plugins/storybook.md",tags:[],version:"current",frontMatter:{title:"Storybook plugin"},sidebar:"docsSidebar",previous:{title:"Serverless Stack plugin",permalink:"/zh-cn/pages/plugins/serverless-stack"},next:{title:"TypeScript plugin",permalink:"/zh-cn/pages/plugins/typescript"}},c={},u=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"The &quot;storykit&quot; package",id:"the-storykit-package",level:2},{value:"Configuration",id:"configuration",level:2},{value:"heft.json plugin options",id:"heftjson-plugin-options",level:2},{value:"CLI parameters",id:"cli-parameters",level:2}],h={toc:u},d="wrapper";function k(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Plugin package:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-storybook-plugin"},"@rushstack/heft-storybook-plugin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Plugin name:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-storybook-plugin/heft-plugin.json"},"storybook-plugin")," implemented by ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-storybook-plugin/src/StorybookPlugin.ts"},"StorybookPlugin.ts"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Plugin config file:")),(0,a.kt)("td",{parentName:"tr",align:null},"(none)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"heft.json options:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-storybook-plugin/src/StorybookPlugin.ts"},"IStorybookPluginOptions"))))),(0,a.kt)("p",null,"This is a Heft plugin for using the ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," framework."),(0,a.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,a.kt)("p",null,"If you've chosen Storybook as your approach for developing, testing, and documenting UI components."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This plugin was originally developed for Storybook 6. If you're trying to set it up with a newer\nversion, please see\n",(0,a.kt)("a",{parentName:"p",href:"https://rushstack.zulipchat.com/#narrow/stream/262522-heft/topic/Storybook.20v7/near/361429415"},"this Zulip thread"),"\nfor workarounds and ongoing work to improve the plugin.")),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The basic approach is for Heft to perform TypeScript compilation in the normal way, producing ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/**/*.js")," files\nwhich become the inputs to the Storybook toolchain. The Heft plugin locates the Storybook startup module\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"@storybook/react"),") and invokes the Storybook toolchain in-process. Since Storybook's toolchain implements\nits own Webpack dev server, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"--storybook")," parameter is provided, Heft's own Webpack plugin will be\nsuppressed to avoid launching two dev servers."),(0,a.kt)("h2",{id:"the-storykit-package"},'The "storykit" package'),(0,a.kt)("p",null,"The Storybook gallery is a full complex web application that gets built by the Storybook toolchain.\nThis toolchain brings along a lot of its own NPM dependencies, but since it's also trying to compile\nyour project's source code, it tries to discover and use your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," such as React,\nWebpack, and associated loaders. In practice, it is fairly awkward to for a single ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder to mix\ntogether all of the dependencies of a professional toolchain like Heft with with all the dependencies of Storybook's\ntoolchain and plugins."),(0,a.kt)("p",null,"To solve this problem, ",(0,a.kt)("inlineCode",{parentName:"p"},"storybook-plugin")," introduces a model where you create a second NPM package\ncalled ",(0,a.kt)("strong",{parentName:"p"},"storykit"),", whose ",(0,a.kt)("strong",{parentName:"p"},"package.json")," provides all the tooling dependencies for Storybook.\nIn this way, dependencies of the two toolchains are cleanly separated, and you can reuse your Storybook\nsetup easily across different app projects, similar to a rig."),(0,a.kt)("p",null,"Storybook's browser API unfortunately isn't separated into dedicated NPM packages, but instead is exported by\nthe Node.js toolchain packages such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@storybook/react"),". For an even cleaner separation, your storykit package\ncan simply reexport such APIs."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The ","[heft-storybook-react-tutorial]",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-storybook-react-tutorial"},"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-storybook-react-tutorial"),")\nsample folder illustrates a complete project setup."),(0,a.kt)("h2",{id:"heftjson-plugin-options"},"heft.json plugin options"),(0,a.kt)("p",null,"This commented template documents the available options for Heft's ",(0,a.kt)("inlineCode",{parentName:"p"},"storybook-plugin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// OPTIONS FOR storybook-plugin\n"options": {\n  /**\n   * (REQUIRED) Specifies an NPM package that will provide the Storybook dependencies for the project.\n   *\n   * Storybook\'s conventional approach is for your app project to have direct dependencies\n   * on NPM packages such as `@storybook/react` and `@storybook/addon-essentials`.  These packages have\n   * heavyweight dependencies such as Babel, Webpack, and the associated loaders and plugins needed to\n   * build the Storybook app (which is bundled completely independently from Heft).  Naively adding these\n   * dependencies to your app\'s package.json muddies the waters of two radically different toolchains,\n   * and is likely to lead to dependency conflicts, for example if Heft installs Webpack 5 but\n   * `@storybook/react` installs Webpack 4.\n   *\n   * To solve this problem, `heft-storybook-plugin` introduces the concept of a separate\n   * "storykit package".  All of your Storybook NPM packages are moved to be dependencies of the\n   * storykit.  Storybook\'s browser API unfortunately isn\'t separated into dedicated NPM packages,\n   * but instead is exported by the Node.js toolchain packages such as `@storybook/react`.  For\n   * an even cleaner separation the storykit package can simply reexport such APIs.\n   */\n  "storykitPackageName": "@my-corp/my-react-storykit",\n\n  /**\n   * The module entry point that Heft serve mode should use to launch the Storybook toolchain.\n   * Typically it is the path loaded the `start-storybook` shell script.\n   *\n   * If you are using `@storybook/react`, then the startup path would be:\n   *\n   * "startupModulePath": "@storybook/react/bin/index.js"\n   */\n  // "startupModulePath": "",\n\n  /**\n   * The module entry point that Heft non-serve mode should use to launch the Storybook toolchain.\n   * Typically it is the path loaded the `build-storybook` shell script.\n   *\n   * If you are using `@storybook/react`, then the static build path would be:\n   *\n   * "staticBuildModulePath": "@storybook/react/bin/build.js"\n   */\n  // "staticBuildModulePath": "",\n\n  /**\n   * The customized output directory for a Storybook static build.\n   * If this setting is not specified, then the Storybook default output directory will be used.\n   */\n  // "staticBuildOutputFolder": "example/path"\n}\n')),(0,a.kt)("h2",{id:"cli-parameters"},"CLI parameters"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-storybook-plugin/heft-plugin.json"},"heft-storybook-plugin/heft-plugin.json")," defines these parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  --storybook\n                        Used by the "@rushstack/heft-storybook-plugin" package to launch\n                        Storybook.\n')))}k.isMDXComponent=!0}}]);