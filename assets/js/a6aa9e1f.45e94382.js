"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7643],{1412:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var i=t(5759),a=t(9824),s=t(2373),l=t(1399),r=t(911),o=t(6083),c=t(6517),d=t(2357),u=t(2699),m=t(758);var g=t(6036),h=t(2427),p=t(8117),x=t(2644);const b={blogTags:"blogTags_GRm_",blogSticky:"blogSticky_ovlv"};var j=t(6070);function v(e){var n=e.items,t=(0,m.useState)(null),i=t[0],a=t[1],l=n.map((function(e){var n=e.content,t=n.metadata,i=n.frontMatter,a=i.title,s=i.sticky,l=t.permalink,r=t.date,o=t.tags,c=new Date(r);return{title:a,link:l,tags:o,date:c.getFullYear()+"-"+("0"+(c.getMonth()+1)).slice(-2)+"-"+("0"+c.getDate()).slice(-2),sticky:s}}));return(0,j.jsx)("div",{className:(0,s.cn)("grid grid-cols-1 py-10 sm:grid-cols-2 lg:grid-cols-3"),children:l.map((function(e,n){var t;return(0,j.jsx)("div",{className:"group relative block h-full w-full p-2",onMouseEnter:function(){return a(n)},onMouseLeave:function(){return a(null)},children:(0,j.jsxs)(g.A,{href:e.link,className:"hover:no-underline",children:[(0,j.jsx)(p.N,{children:i===n&&(0,j.jsx)(x.P.span,{className:"absolute inset-0 block h-full w-full rounded-lg bg-neutral-100 dark:bg-slate-800/[0.8]",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,j.jsxs)(f,{className:(0,s.cn)("relative bg-blog",e.sticky&&b.blogSticky),children:[(0,j.jsx)(N,{className:"transition duration-300 hover:text-primary",children:e.title}),(0,j.jsxs)(k,{className:"flex justify-between pt-4",children:[(0,j.jsx)("div",{className:(0,s.cn)(b.blogTags,"inline-flex items-center gap-1 whitespace-nowrap text-sm text-text"),children:(null==(t=e.tags)?void 0:t.length)>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,j.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"})}),e.tags.slice(0,2).map((function(e,n){var t=e.label,i=e.permalink,a=e.description;return(0,j.jsxs)(j.Fragment,{children:[0!==n&&"/",(0,j.jsx)(h.A,{label:t,description:a,permalink:i,className:"tag"},i)]})}))]})}),(0,j.jsx)("div",{className:"text-[var(--ifm-color-emphasis-600)] text-xs",children:e.date})]})]})]})},e.link)}))})}var f=function(e){var n=e.className,t=e.children;return(0,j.jsx)("div",{className:(0,s.cn)("relative z-20 h-full w-full overflow-hidden rounded-lg border border-transparent bg-background p-4 group-hover:border-slate-700 dark:border-white/[0.2]",n),children:(0,j.jsx)("div",{className:"relative z-50",children:(0,j.jsx)("div",{className:"p-2",children:t})})})},N=function(e){var n=e.className,t=e.children;return(0,j.jsx)("h4",{className:(0,s.cn)("text-text",n),children:t})},k=function(e){var n=e.className,t=e.children;return(0,j.jsx)("div",{className:n,children:t})},y=t(3727);function w(e){var n=e.metadata.blogDescription;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.be,{title:"Blog",description:n}),(0,j.jsx)(c.A,{tag:"blog_posts_list"})]})}function B(e){var n=e.viewType,t=e.toggleViewType;return(0,j.jsxs)("div",{className:"my-4 flex items-center justify-center",children:[(0,j.jsx)(u.In,{icon:"ph:list",width:"24",height:"24",onClick:function(){return t("list")},color:"list"===n?"var(--ifm-color-primary)":"#ccc",className:"cursor-pointer transition duration-500"}),(0,j.jsx)(u.In,{icon:"ph:grid-four",width:"24",height:"24",onClick:function(){return t("grid")},color:"grid"===n?"var(--ifm-color-primary)":"#ccc",className:"cursor-pointer transition duration-500"})]})}function T(e){var n=e.metadata,t=e.items,i=function(){var e=(0,m.useState)("list"),n=e[0],t=e[1];return(0,m.useEffect)((function(){t(localStorage.getItem("viewType")||"list")}),[]),{viewType:n,toggleViewType:(0,m.useCallback)((function(e){t(e),localStorage.setItem("viewType",e)}),[])}}(),a=i.viewType,s=i.toggleViewType,c="list"===a,u="grid"===a;return(0,j.jsxs)(y.A,{children:[(0,j.jsx)("h2",{className:"h2 mb-4 flex items-center justify-center text-center",children:(0,j.jsx)(d.A,{id:"theme.blog.title.new",children:"\u535a\u5ba2"})}),(0,j.jsx)("p",{className:"mb-4 text-center",children:"\u7f16\u7a0b\u662f\u4e00\u79cd\u6280\u827a\uff0c\u4e00\u79cd\u9700\u8981\u7528\u5fc3\u5b66\u4e60\u7684\u6280\u827a"}),(0,j.jsx)(B,{viewType:a,toggleViewType:s}),(0,j.jsx)("div",{className:"row",children:(0,j.jsxs)("div",{className:"col col--12",children:[(0,j.jsxs)(j.Fragment,{children:[c&&(0,j.jsx)("div",{className:"mb-4",children:(0,j.jsx)(o.A,{items:t})}),u&&(0,j.jsx)(v,{items:t})]}),(0,j.jsx)(r.A,{metadata:n})]})}),(0,j.jsx)(l.A,{})]})}function P(e){return(0,j.jsxs)(i.e3,{className:(0,s.cn)(a.G.wrapper.blogPages,a.G.page.blogListPage),children:[(0,j.jsx)(w,Object.assign({},e)),(0,j.jsx)(T,Object.assign({},e))]})}},1656:(e,n,t)=>{t.d(n,{A:()=>_});var i=t(9987),a=t(2373),s=t(2751),l=t(6070);function r(e){var n,t=e.children,r=e.className,o=(0,i.e7)(),c=o.frontMatter,d=o.assets,u=(0,s.hH)().withBaseUrl,m=null!=(n=d.image)?n:c.image;return(0,l.jsxs)("article",{className:(0,a.cn)("relative px-4 pt-4 pb-3 lg:px-4",r),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("meta",{itemProp:"image",content:u(m,{absolute:!0})}),(0,l.jsx)("div",{className:"absolute inset-0 z-1 h-[224px]",children:(0,l.jsx)("div",{className:"size-full rounded-[var(--ifm-pagination-nav-border-radius)] bg-center bg-cover bg-no-repeat",style:{WebkitMaskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",maskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",backgroundImage:'url("'+m+'")'}})}),(0,l.jsx)("div",{style:{height:"120px"}})]}),t]})}var o=t(9678),c=t(868);function d(e){var n=e.children,t=e.className,s=(0,i.e7)().isBlogPostPage;return(0,l.jsx)("div",{id:s?o.LU:void 0,className:(0,a.cn)("markdown",t),itemProp:"articleBody",style:{position:"relative"},children:(0,l.jsx)(c.A,{children:n})})}var u=t(9533),m=t(2699),g=t(5045),h=t(6036),p=t(2357),x=(t(758),["blogPostTitle"]);function b(){return(0,l.jsx)("b",{children:(0,l.jsx)(p.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function j(e){var n=e.blogPostTitle,t=(0,g.A)(e,x);return(0,l.jsxs)(h.A,Object.assign({"aria-label":(0,p.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:n}),style:{display:"flex",alignItems:"center",gap:"0.25rem"}},t,{children:[(0,l.jsx)(b,{}),(0,l.jsx)(m.In,{icon:"ri:arrow-right-line"})]}))}var v=t(2427),f=t(1850);function N(e){var n,t=e.readingTime,i=(n=(0,f.W)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,p.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,l.jsx)("span",{className:"truncate",children:i(t)})}function k(e){var n=e.date,t=e.formattedDate;return(0,l.jsx)("time",{dateTime:n,itemProp:"datePublished",className:"truncate",children:t})}function y(e){var n,t=e.className,s=(0,i.e7)().metadata,r=s.date,o=s.tags,c=s.readingTime,d=o.length>0,g=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,a.cn)("inline-flex flex-wrap gap-1.5 text-base","margin-bottom--md",t),children:[(0,l.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,l.jsx)(m.In,{icon:"ri:calendar-line"}),(0,l.jsx)(k,{date:r,formattedDate:(n=r,g.format(new Date(n)))})]}),d&&(0,l.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,l.jsx)(m.In,{icon:"ri:price-tag-3-line"}),(0,l.jsx)("div",{className:(0,a.cn)("truncate","inline-flex text-center"),children:o.slice(0,3).map((function(e,n){var t=e.label,i=e.description,a=e.permalink;return(0,l.jsxs)("div",{children:[0!==n&&"/",(0,l.jsx)(v.A,{label:t,permalink:a,className:"tag !border-0 px-0.5 py-0.5 text-text hover:text-link",description:i})]},a)}))})]}),void 0!==c&&(0,l.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,l.jsx)(m.In,{icon:"ri:time-line"}),(0,l.jsx)(N,{readingTime:c})]})]})}const w={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};function B(){var e,n=(0,i.e7)(),t=n.metadata,s=n.isBlogPostPage,r=t.tags,o=t.title,c=(t.editUrl,t.hasTruncateMarker),d=t.date,g=t.readingTime,h=t.authors,p=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),x=!s&&c,b=r.length>0;h.length;return s?(0,l.jsx)("footer",{className:(0,a.cn)("row docusaurus-mt-lg",s&&w.blogPostFooterDetailsFull),children:x&&(0,l.jsx)("div",{className:(0,a.cn)("col text--right",{"col--3":b}),children:(0,l.jsx)(j,{blogPostTitle:o,to:t.permalink})})}):(0,l.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,l.jsxs)("div",{className:w.blogPostInfo,children:[d&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.In,{icon:"ri:calendar-line"}),(0,l.jsx)("time",{dateTime:d,itemProp:"datePublished",children:(e=d,p.format(new Date(e)))})]}),b&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.In,{icon:"ri:price-tag-3-line"}),(0,l.jsx)("span",{className:w.blogPostInfoTags,children:r.map((function(e){var n=e.label,t=e.permalink,i=e.description;return(0,l.jsx)(v.A,{label:n,permalink:t,description:i},t)}))})]}),g&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.In,{icon:"ri:time-line"}),(0,l.jsx)("span",{className:(0,a.cn)(w.blogPostReadTime,"blog__readingTime"),children:(0,l.jsx)(N,{readingTime:g})})]}),x&&(0,l.jsx)("div",{className:(0,a.cn)("flex flex-1 items-center justify-end gap-0.5 font-medium text-[var(--ifm-link-color)] opacity-0 transition-opacity duration-200 group-hover/blog:opacity-100",{"col--3":b}),children:(0,l.jsx)(j,{blogPostTitle:o,to:t.permalink,className:"hover:no-underline"})})]})})}const T={titleLink:"titleLink_BX2g"};function P(e){var n=e.className,t=(0,i.e7)(),s=t.metadata,r=t.isBlogPostPage,o=s.permalink,c=s.title,d=r?"h1":"h2";return(0,l.jsx)(d,{className:(0,a.cn)(T.title,n),itemProp:"headline",children:r?c:(0,l.jsx)(h.A,{itemProp:"url",to:o,className:T.titleLink,children:c})})}function A(){var e=(0,i.e7)().isBlogPostPage;return(0,l.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,l.jsx)(P,{}),e&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y,{})})]})}function _(e){var n=e.children,t=e.className,s=(0,i.e7)().isBlogPostPage?"":"group/blog rounded-md mt-0 bg-blog mb-8 shadow-blog";return(0,l.jsxs)(r,{className:(0,a.cn)(s,t),children:[(0,l.jsx)(A,{}),(0,l.jsx)(d,{children:n}),(0,l.jsx)(B,{})]})}},6083:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(9987),a=t(1656),s=t(2644),l=t(6070),r={from:{opacity:.001,y:100},to:function(e){return{opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}}}};function o(e){var n=e.items,t=e.component,o=void 0===t?a.A:t;return(0,l.jsx)(l.Fragment,{children:n.map((function(e,n){var t=e.content;return(0,l.jsx)(i.in,{content:t,children:(0,l.jsx)(s.P.div,{initial:"from",animate:"to",custom:n,viewport:{once:!0,amount:.8},variants:r,children:(0,l.jsx)(o,{children:(0,l.jsx)(t,{})})})},t.metadata.permalink)}))})}},3803:(e,n,t)=>{t.d(n,{A:()=>W});var i=t(5045),a=t(8293),s=t(2373),l=t(7293),r=t(9824),o=t(3362),c=t(758);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(6070),m=["as"];function g(e){var n=e.as,t=(0,i.A)(e,m),a=(0,l.A)(),c=(0,o.M$)(a);return(0,u.jsx)(n,Object.assign({},t,{style:c,className:(0,s.cn)(t.className,d.codeBlockContainer,r.G.common.codeBlock)}))}const h={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){var n=e.children,t=e.className;return(0,u.jsx)(g,{as:"pre",tabIndex:0,className:(0,s.cn)(h.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:h.codeBlockLines,children:n})})}var x=t(8939),b=t(6423),j=t(2241),v=t(2699),f=t(2357),N=t(4735),k=t(4849),y=t(9057);const w={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function B(e){var n=e.code,t=e.className,i=(0,c.useState)(!1),a=i[0],l=i[1],r=(0,c.useRef)(void 0),o=(0,c.useCallback)((function(){(0,y.A)(n),l(!0),r.current=window.setTimeout((function(){l(!1)}),1e3)}),[n]);return(0,c.useEffect)((function(){return function(){return window.clearTimeout(r.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":a?(0,f.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,f.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,f.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.cn)("clean-btn",t,w.copyButton,a&&w.copyButtonCopied),onClick:o,children:(0,u.jsxs)("span",{className:w.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(N.A,{className:w.copyButtonIcon}),(0,u.jsx)(k.A,{className:w.copyButtonSuccessIcon})]})})}const T={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function P(e){var n,t=e.line,i=e.classNames,a=e.showLineNumbers,l=e.getLineProps,r=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var o=l({line:t,className:(0,s.cn)(i,a&&T.codeLine)}),c=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},r({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},o,{children:[a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:T.codeLineNumber}),(0,u.jsx)("span",{className:T.codeLineContent,children:c})]}):c,(0,u.jsx)("br",{})]}))}var A=t(1002);const _={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function C(e){var n=e.className,t=e.onClick,i=e.isEnabled,a=(0,f.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,s.cn)("clean-btn",n,i&&_.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,u.jsx)(A.A,{className:_.wordWrapButtonIcon,"aria-hidden":"true"})})}var I=t(3477);function L(e){var n,t=e.children,i=e.className,a=void 0===i?"":i,r=e.metastring,c=e.title,d=e.showLineNumbers,m=e.language,p=(0,b.p)().prism,f=p.defaultLanguage,N=p.magicComments,k=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=m?m:(0,o.Op)(a))?n:f),y=(0,l.A)(),w=(0,j.f)(),T=(0,o.wt)(r)||c,A=function(e){var n,t,i=(0,x.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),a=null!=(n=null==e||null==(t=e.match(i))||null==(t=t.groups)?void 0:t.icon)?n:"";return a?(0,u.jsx)(v.In,{icon:a,width:"16"}):null}(r),_=(0,o.Li)(t,{metastring:r,language:k,magicComments:N}),L=_.lineClassNames,F=_.code,W=null!=d?d:(0,o._u)(r);return(0,u.jsxs)(g,{as:"div",className:(0,s.cn)(a,k&&!a.includes("language-"+k)&&"language-"+k),children:[T&&(0,u.jsxs)("div",{className:h.codeBlockTitle,children:[A,T,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:k})]}),(0,u.jsxs)("div",{className:h.codeBlockContent,children:[(0,u.jsx)(I.f4,{theme:y,code:F,language:null!=k?k:"text",children:function(e){var n=e.className,t=e.style,i=e.tokens,a=e.getLineProps,l=e.getTokenProps;return(0,u.jsx)("pre",{ref:w.codeBlockRef,className:(0,s.cn)(n,h.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,s.cn)(h.codeBlockLines,W&&h.codeBlockLinesWithNumbering),children:i.map((function(e,n){return(0,u.jsx)(P,{line:e,getLineProps:a,getTokenProps:l,classNames:L[n],showLineNumbers:W},n)}))})})}}),(0,u.jsxs)("div",{className:h.buttonGroup,children:[(w.isEnabled||w.isCodeScrollable)&&(0,u.jsx)(C,{className:h.codeButton,onClick:function(){return w.toggle()},isEnabled:w.isEnabled}),(0,u.jsx)(B,{className:h.codeButton,code:F})]})]})]})}var F=["children"];function W(e){var n=e.children,t=(0,i.A)(e,F),s=(0,a.A)(),l=function(e){return c.Children.toArray(e).some((function(e){return(0,c.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),r="string"==typeof l?L:p;return(0,u.jsx)(r,Object.assign({},t,{children:l}),String(s))}},5357:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(6036),a=t(2699),s=t(6070);function l(e){var n=e.href;if(!n)return(0,s.jsx)(i.A,Object.assign({},e));var t={"github.com":"simple-icons:github","x.com":"ri:twitter-x-fill"},l=Object.keys(t).find((function(e){return new RegExp("^https?://"+e).test(n)})),r=l?t[l]:null;return r?(0,s.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[r&&(0,s.jsx)(a.In,{className:"a-icon",style:{alignSelf:"center"},icon:r,width:16,height:16}),(0,s.jsx)(i.A,Object.assign({},e,{className:"link"}))]}):(0,s.jsx)(i.A,Object.assign({},e,{className:"link"}))}},3727:(e,n,t)=>{t.d(n,{A:()=>c});var i=t(5045),a=t(5759),s=t(2373),l=t(7055),r=t(6070),o=["children","maxWidth"];function c(e){var n=e.children,t=e.maxWidth,c=(0,i.A)(e,o);return(0,r.jsxs)(l.A,Object.assign({},c,{children:[(0,r.jsx)(a.be,{title:c.title,description:c.description}),(0,r.jsx)("div",{className:"bg-background",children:(0,r.jsx)("div",{className:(0,s.cn)("mx-auto max-w-6xl px-4","margin-vert--lg"),style:t?{maxWidth:t+"px"}:{},children:(0,r.jsx)("main",{children:n})})})]}))}},6043:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(6036),a=t(2373),s=t(6070);function l(e){var n=e.permalink,t=e.title,l=e.subLabel,r=e.isNext;return(0,s.jsxs)(i.A,{className:(0,a.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},2427:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(6036),a=t(2373);t(758);const s={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var l=t(6070);function r(e){var n=e.permalink,t=e.label,r=e.count,o=e.className;return(0,l.jsxs)(i.A,{href:n,className:(0,a.cn)(s.tag,r?s.tagWithCount:s.tagRegular,o),children:[t,r&&(0,l.jsx)("span",{children:r})]})}}}]);