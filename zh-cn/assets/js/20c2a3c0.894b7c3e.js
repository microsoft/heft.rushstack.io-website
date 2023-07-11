"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[416],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(9122),r=n(2501),i=(n(6393),n(158)),s=["components"],o={title:"Hello world"},p=void 0,l={unversionedId:"pages/tutorials/hello_world",id:"pages/tutorials/hello_world",title:"Hello world",description:"This walkthrough will get you started with Heft by creating a basic Node.js console project from scratch,",source:"@site/docs/pages/tutorials/hello_world.md",sourceDirName:"pages/tutorials",slug:"/pages/tutorials/hello_world",permalink:"/zh-cn/pages/tutorials/hello_world",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/tutorials/hello_world.md",tags:[],version:"current",frontMatter:{title:"Hello world"},sidebar:"docsSidebar",previous:{title:"Heft command line",permalink:"/zh-cn/pages/intro/cli"},next:{title:"Adding more tasks",permalink:"/zh-cn/pages/tutorials/adding_tasks"}},c={},m=[],u={toc:m},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This walkthrough will get you started with Heft by creating a basic Node.js console project from scratch,\nadding each task step by step. In practice, ",(0,i.kt)("strong",{parentName:"p"},"you would probably want to use a readymade rig instead."),"\nThis tutorial's goal is to illustrate the fundamental concepts and architecture of Heft. With this foundation,\nyou can more easily understand complex configurations and troubleshoot any problems that arise."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},'"Show me the code!"'))),(0,i.kt)("p",{parentName:"blockquote"},"If you're in a hurry, the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-basic-tutorial"},"heft-node-basic-tutorial"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-webpack-basic-tutorial"},"heft-webpack-basic-tutorial"),"\nfolders illustrate a fully worked out example of a simple project that builds using Heft."),(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-rig-tutorial"},"heft-node-rig-tutorial"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-web-rig-app-tutorial"},"heft-web-rig-app-tutorial"),"\nfolders show how to accomplish the same result by using Rush Stack rigs, rather than a manual Heft configuration.\nRigs enable many projects to share a standard configuration, which greatly reduces maintenance cost of upgrades.")),(0,i.kt)("p",null,"We'll begin by creating a simple standalone project without Rush. (Later, the ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/tutorials/heft_and_rush"},"Interfacing with Rush")," tutorial will examine what's different when using Heft in a monorepo.)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We'll use the ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.js.org/"},"PNPM package manager")," for this demo. Its command line is very similar to NPM, so you could substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," in these steps. There are ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"various ways")," to install PNPM, but the simplest is like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global pnpm\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new folder ",(0,i.kt)("strong",{parentName:"p"},"my-app")," with a ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file for our project, like this:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"my-app/package.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "description": "A Heft tutorial project",\n  "license": "MIT",\n  "main": "lib/start.js",\n  "typings": "lib/start.d.ts",\n  "scripts": {\n    "start": "node lib/start.js"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a TypeScript source file that we'll compile."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"my-app/src/start.ts")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'console.log("Hello, world!");\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/heft"},"@rushstack/heft"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/heft-typescript-plugin"},"@rushstack/heft-typescript-plugin"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typescript"},"typescript")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependenices")," for your project:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cd my-app\npnpm install --save-dev @rushstack/heft\npnpm install --save-dev @rushstack/heft-typescript-plugin\npnpm install --save-dev typescript\n\n# Since this project will use the console.log() API, we also need to add the TypeScript\n# typings for Node.js.  Typings should always use "--save-exact" version specifiers.\npnpm install --save-dev --save-exact @types/node\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next we need to create the TypeScript ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"tsconfig.json")," file. The presence of this file causes Heft to invoke the TypeScript compiler. For now we'll create a simple standalone ",(0,i.kt)("strong",{parentName:"p"},"tsconfig.json")," file; later we'll demonstrate how to share a reusable configuration across many projects."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"my-app/tsconfig.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "http://json.schemastore.org/tsconfig",\n\n  "compilerOptions": {\n    "outDir": "lib",\n    "rootDirs": ["src/"],\n\n    "forceConsistentCasingInFileNames": true,\n    "declaration": true,\n    "sourceMap": true,\n    "declarationMap": true,\n    "inlineSources": true,\n    "experimentalDecorators": true,\n    "strict": true,\n    "useUnknownInCatchVariables": false,\n    "esModuleInterop": true,\n    "noEmitOnError": false,\n    "allowUnreachableCode": false,\n\n    "types": ["node"],\n    "module": "commonjs",\n    "target": "es2017",\n    "lib": ["es2017"]\n  },\n  "include": ["src/**/*.ts"],\n  "exclude": ["node_modules", "lib"]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},'"types": ["node"]')," references the ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/node")," package that we installed above. This is needed\nbecause Node.js is a global environment, so its typings must be loaded globally. Most other ",(0,i.kt)("inlineCode",{parentName:"p"},"@types")," packages\ncan be loaded via ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," statements in your source code."),(0,i.kt)("p",{parentName:"li"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/typescript"},"TypeScript plugin")," documentation for more background about\nTypeScript configuration with Heft.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can invoke Heft using ",(0,i.kt)("inlineCode",{parentName:"p"},"./node_modules/.bin/heft"),", but it's more convenient to also install it globally\nso that it's always available in your shell ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the Heft tool globally\nnpm install --global @rushstack/heft\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"What if the globally installed ",(0,i.kt)("inlineCode",{parentName:"p"},"heft")," binary is the wrong version?"),(0,i.kt)("p",{parentName:"blockquote"},'Just like Rush, Heft implements a "version selector" feature that will automatically\ndiscover your local ',(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"./node_modules/.bin/heft"),", ensuring\nthat the correct version is used."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Heft is config-driven, which means its behavior within a project folder is defined by data\n(config files) not code (arbitrary scripts). If you need to extend your build process with program logic,\nwe strongly encourage moving that code into a Heft plugin package, which should be developed as\nprofessional software using TypeScript, ESLint, and code reviews. This is more work, but as your\nmonorepo grows in scale, it greatly simplifies maintenance."),(0,i.kt)("p",{parentName:"li"},"Heft's main config file is ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/configs/heft_json"},"config/heft.json"),". Let's start with the\nsimplest possible file:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"config/heft.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n}\n')),(0,i.kt)("p",{parentName:"li"},"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"heft --help")," you should see output like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"usage: heft [-h] [--debug] [--unmanaged] <command> ...\n\nHeft is a pluggable build system designed for web projects.\n\nPositional arguments:\n  <command>\n    clean      Clean the project, removing temporary task folders and\n              specified clean paths.\n    run        Run a provided selection of Heft phases.\n    run-watch  Run a provided selection of Heft phases in watch mode..\n\nOptional arguments:\n  -h, --help   Show this help message and exit.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now let's expand our configuration by adding a simple phase called ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"')," that invokes\na task called ",(0,i.kt)("inlineCode",{parentName:"p"},'"typescript"')," to compile your code. (For definitions of these terms,\nrefer to the ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/intro/architecture"},"architecture")," notes.)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"config/heft.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n\n  "phasesByName": {\n    // Define a phase whose name is "build"\n    "build": {\n      "phaseDescription": "This phase compiles the project source code.",\n\n      // Before invoking the compiler, delete the "dist" and "lib" folders\n      "cleanFiles": [{ "sourcePath": "dist" }, { "sourcePath": "lib" }],\n\n      "tasksByName": {\n        // Define a task whose name is "typescript"\n        "typescript": {\n          "taskPlugin": {\n            // This task will invoke the TypeScript plugin\n            "pluginPackage": "@rushstack/heft-typescript-plugin"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"For complete descriptions of these settings, see ",(0,i.kt)("a",{parentName:"em",href:"/zh-cn/pages/configs/heft_json"},"heft.json")," template.")),(0,i.kt)("p",{parentName:"li"},"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"heft --help"),", you will now see that a ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"build-watch"),"\naction have been added to your command line, since our phase was called ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"'),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"usage: heft [-h] [--debug] [--unmanaged] <command> ...\n\nHeft is a pluggable build system designed for web projects.\n\nPositional arguments:\n  <command>\n    clean      Clean the project, removing temporary task folders and\n              specified clean paths.\n    run        Run a provided selection of Heft phases.\n    build      Runs to the build phase, including all transitive dependencies.\n    run-watch  Run a provided selection of Heft phases in watch mode..\n    build-watch\n              Runs to the build phase, including all transitive dependencies,\n                in watch mode.\n\nOptional arguments:\n  -h, --help   Show this help message and exit.\n")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},'"phaseDescription"')," is printed if you run ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build --help"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's try invoking Heft's ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/intro/cli"},"command line")," to build our project."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Make sure we\'re in your project folder\ncd my-app\n\n# View the command line help\nheft --help\nheft build --help\n\n# Build the project\nheft build\n\n# To see more detail about what Heft is doing, add you can the "--verbose" flag\nheft build --verbose\n')),(0,i.kt)("p",{parentName:"li"},"Invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build --verbose")," should produce console output like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'Project: my-app@1.0.0\nProject build folder: C:\\my-app\nHeft version: 0.56.2\nNode version: v16.15.1\n\nExecuting a maximum of 4 simultaneous tasks...\n---- lifecycle started ----\n[lifecycle:start] Applying lifecycle plugins\n---- build started ----\n[build] Applying task plugins\n[build:typescript] Loaded plugin from "C:\\my-app\\node_modules\\...\\@rushstack\\heft-typescript-plugin\\lib\\TypeScriptPlugin"\n[build:typescript] Starting task execution\n[build:typescript] Looking for tsconfig at C:/my-app/tsconfig.json\n[build:typescript] Resolved "typescript" as a direct devDependency of the project.\n[build:typescript] Using TypeScript version 5.1.6\n[build:typescript] Configure: 17.34340000152588ms\n[build:typescript] I/O Read: 16.67810034751892ms (98 files)\n[build:typescript] Parse: 491.7621006965637ms (98 files)\n[build:typescript] Program (includes Read + Parse): 581.9542999267578ms\n[build:typescript] Analyze: 1135.4448999166489ms\n[build:typescript] Bind: 189.5981993675232ms\n[build:typescript] Check: 929.5596989393234ms\n[build:typescript] Transform: 4.200200080871582ms (2 files)\n[build:typescript] Print: 12.058799982070923ms (1 files) (Includes Transform)\n[build:typescript] Emit: 12.5ms (Includes Print)\n[build:typescript] I/O Write: 0ms (0 files)\n[build:typescript] Finished task execution (1964.6486999988556ms)\n---- build finished (2.014s) ----\n---- lifecycle finished (2.018s) ----\n-------------------- Finished (2.02s) --------------------\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"NOTE: When reporting diagnostic messages such as a compile error, Heft prints file paths relative\nto the project folder. This can be customized using the\n",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/configs/environment_vars#rushstack_file_error_base_folder"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER"),"\nenvironment variable.")),(0,i.kt)("p",{parentName:"li"},"After the build finishes, confirm that it produced several output files in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," folder:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"start.js")," - the compiled JavaScript code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"start.d.ts")," - the TypeScript typings, for external libraries that might import this module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"start.js.map")," and ",(0,i.kt)("strong",{parentName:"li"},"start.d.ts.map")," - Source map files, which enable tools like debuggers to find the corresponding source code file/line, for a given item in an output file"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you recall, our ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file has a ",(0,i.kt)("inlineCode",{parentName:"p"},'"scripts"')," section that specifies ",(0,i.kt)("inlineCode",{parentName:"p"},'"start": "node lib/start.js"'),". Let's try running the compiled code using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Invoke the "start" script from package.json\npnpm run start\n\n# If you have Rush installed, you can also use this slightly shorter equivalent\nrushx start\n')),(0,i.kt)("p",{parentName:"li"},"You should see output like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"> my-app@1.0.0 start C:\\my-app\n> node lib/start.js\n\nHello, world!\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We can also add a ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"')," script to our ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"my-app/package.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "start": "node lib/start.js"\n  },\n  . . .\n}\n')),(0,i.kt)("p",{parentName:"li"},"With this change, you can also build by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run build")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"rushx build"),"). This toolchain-agnostic\nconvention makes it easier for newcomers to guess how to build your project. It will also be useful later when\nwe integrate with Rush."))))}h.isMDXComponent=!0}}]);