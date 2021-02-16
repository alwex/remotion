(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(124)),o={title:"CLI options",id:"cli"},c={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI options",description:"The default command in package.json that powers npm run build is:",source:"@site/docs/cli.md",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/cli.md",version:"current",sidebar:"someSidebar",previous:{title:"Using randomness",permalink:"/docs/using-randomness"},next:{title:"Configuration file",permalink:"/docs/config"}},l=[{value:"Flags",id:"flags",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The default command in package.json that powers ",Object(i.b)("inlineCode",{parentName:"p"},"npm run build")," is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx remotion render <entry-file> <composition-id> <output-location>\n")),Object(i.b)("h2",{id:"flags"},"Flags"),Object(i.b)("p",null,"Besides choosing a video and output location with the command line arguments, the following flags are supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--props"),": React Props to pass to the root component of your video. Must be a serialized JSON string."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--concurrency"),": ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config#setconcurrency"}),"How many CPU threads to use.")," Minimum 1. The maximum is the amount of threads you have."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--png"),": ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config#setoutputformat"}),"Render a PNG sequence with transparency instead.")," If you use this option, the output location you pass must be a folder name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--pixel-format"),": ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config#setpixelformat"}),"Set a custom pixel format. See here for available values.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--config"),": Specify a location for the Remotion config file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--quality"),": ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config#setquality"}),"Value between 0 and 100 for JPEG rendering quality"),". Doesn't work when ",Object(i.b)("inlineCode",{parentName:"li"},"--png")," is set."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--overwrite"),": ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config#setoverwriteoutput"}),"Write to output even if file already exists."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you don't feel like passing command line flags every time, consider creating a ",Object(i.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"config"}),"config file"),"."))),Object(i.b)("h2",{id:"see-also"},"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"render"}),"Render your video")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"config"}),"Configuration file"))))}b.isMDXComponent=!0}}]);