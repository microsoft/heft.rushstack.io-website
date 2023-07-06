"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[662],{158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(9122),r=n(2501),i=(n(6393),n(158)),o=["components"],s={title:"Everyday Heft commands"},l=void 0,c={unversionedId:"pages/tutorials/everyday_commands",id:"pages/tutorials/everyday_commands",title:"Everyday Heft commands",description:"The Getting started with Heft tutorial introduced the heft build and heft test command-line actions. In this section, we'll call out a few everyday commands that are particularly useful to know about. Refer to the Heft command line reference for a full listing of actions and parameters.",source:"@site/docs/pages/tutorials/everyday_commands.md",sourceDirName:"pages/tutorials",slug:"/pages/tutorials/everyday_commands",permalink:"/pages/tutorials/everyday_commands",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/tutorials/everyday_commands.md",tags:[],version:"current",frontMatter:{title:"Everyday Heft commands"},sidebar:"docsSidebar",previous:{title:"Adding more tasks",permalink:"/pages/tutorials/adding_tasks"},next:{title:"Interfacing with Rush",permalink:"/pages/tutorials/heft_and_rush"}},u={},d=[{value:"Investigating problems",id:"investigating-problems",level:2},{value:"Building with --watch",id:"building-with---watch",level:2},{value:"Jest interactive shell",id:"jest-interactive-shell",level:2}],p={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/pages/tutorials/getting_started"},"Getting started with Heft")," tutorial introduced the ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test")," command-line actions. In this section, we'll call out a few everyday commands that are particularly useful to know about. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages/intro/cli"},"Heft command line")," reference for a full listing of actions and parameters."),(0,i.kt)("h2",{id:"investigating-problems"},"Investigating problems"),(0,i.kt)("p",null,"If you're diagnosing problems with the Heft build, there are a couple useful parameters to be aware of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--verbose"),": For example, instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"heft build"),", you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"heft build --verbose")," to see more details about how the tasks are invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--debug"),": For even more detail, you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"heft --debug build")," to see call stacks and additional trace information. Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"--debug")," is a global parameter, so it must precede the ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," action name.")),(0,i.kt)("h2",{id:"building-with---watch"},"Building with -","-watch"),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build --watch"),", the TypeScript compiler will continue running and wait for changes to source files. Whenever a file is changed, Heft will rebuild only the affected files, as a minimal incremental update that can be very fast."),(0,i.kt)("p",null,"When using Webpack, ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start")," invokes a localhost dev server (see ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/"},"DevServer"),") that uses this mode to automatically reload the web browser with the recompiled code, every time a source file is saved. This can save a lot of time when tuning UI layouts! The ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," parameter is not needed with ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start"),", because watch mode is always enabled for that action."),(0,i.kt)("h2",{id:"jest-interactive-shell"},"Jest interactive shell"),(0,i.kt)("p",null,"For tests, you can also do ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test --watch")," which invokes Jest's interactive shell. It shows a menu like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"No tests found related to files changed since last commit.\nPress `a` to run all tests, or run Jest with `--watchAll`.\n\nRun start. 0 test suites\n\nTests finished:\n  Successes: 0\n  Failures: 0\n  Total: 0\n\nWatch Usage\n \u203a Press a to run all tests.\n \u203a Press f to run only failed tests.\n \u203a Press p to filter by a filename regex pattern.\n \u203a Press t to filter by a test name regex pattern.\n \u203a Press q to quit watch mode.\n \u203a Press Enter to trigger a test run.\n")),(0,i.kt)("p",null,"Whenever you save a change to a source file, Heft will automatically recompile the project, and then Jest will rerun any affected tests, updating the report."))}f.isMDXComponent=!0}}]);