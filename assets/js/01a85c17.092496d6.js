"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8209],{1660:(e,t,a)=>{a.d(t,{Q:()=>s,b:()=>r});var n=a(5247),r=function(){return(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function s(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}},3634:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(1660),r=a(8420),s=a(7775),i=a(2699),l=a(7949),c=a(9814),g=a(556),o=a(758),u=a(5192),d=a(6070);function h(e){var t=e.tags,a=(e.sidebar,(0,n.b)()),h=(0,o.useState)("list"),x=h[0],m=h[1];return(0,d.jsxs)(r.e3,{className:(0,l.cn)(s.G.wrapper.blogPages,s.G.page.blogTagsListPage),children:[(0,d.jsx)(r.be,{title:a}),(0,d.jsx)(c.A,{tag:"blog_tags_list"}),(0,d.jsxs)(u.A,{children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,d.jsx)("h1",{children:a}),(0,d.jsxs)("span",{className:"flex",children:[(0,d.jsx)(i.In,{icon:"ph:list",width:"24",height:"24",onClick:function(){return m("list")},color:"list"===x?"var(--ifm-color-primary)":"#ccc"}),(0,d.jsx)(i.In,{icon:"ph:grid-four",width:"24",height:"24",onClick:function(){return m("grid")},color:"grid"===x?"var(--ifm-color-primary)":"#ccc"})]})]}),"list"===x&&(0,d.jsx)(g.A,{tags:t}),"grid"===x&&(0,d.jsx)(g.C,{tags:t})]})]})}},5192:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(5045),r=a(8420),s=a(7949),i=a(3295),l=a(6070),c=["children","maxWidth"];function g(e){var t=e.children,a=e.maxWidth,g=(0,n.A)(e,c);return(0,l.jsxs)(i.A,Object.assign({},g,{children:[(0,l.jsx)(r.be,{title:g.title,description:g.description}),(0,l.jsx)("div",{className:"bg-background",children:(0,l.jsx)("div",{className:(0,s.cn)("mx-auto max-w-6xl px-4","margin-vert--lg"),style:a?{maxWidth:a+"px"}:{},children:(0,l.jsx)("main",{children:t})})})]}))}},2532:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(871),r=a(7949);a(758);const s={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var i=a(6070);function l(e){var t=e.permalink,a=e.label,l=e.count,c=e.className;return(0,i.jsxs)(n.A,{href:t,className:(0,r.cn)(s.tag,l?s.tagWithCount:s.tagRegular,c),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},556:(e,t,a)=>{a.d(t,{C:()=>g,A:()=>c});var n=a(1660),r=a(2532);const s={tag:"tag_Yyuv"};var i=a(6070);function l(e){var t=e.letterEntry;return(0,i.jsxs)("article",{children:[(0,i.jsx)("h2",{children:t.letter}),(0,i.jsx)("ul",{className:"padding--none mb-4",children:t.tags.map((function(e){return(0,i.jsx)("li",{className:s.tag,children:(0,i.jsx)(r.A,Object.assign({},e))},e.permalink)}))}),(0,i.jsx)("hr",{})]})}function c(e){var t=e.tags,a=(0,n.Q)(t);return(0,i.jsx)("section",{className:"margin-vert--lg",children:a.map((function(e){return(0,i.jsx)(l,{letterEntry:e},e.letter)}))})}function g(e){var t=e.tags;return(0,i.jsx)("section",{className:"margin-vert--lg",children:(0,i.jsx)("ul",{className:"padding--none",children:t.map((function(e){return(0,i.jsx)("li",{className:s.tag,children:(0,i.jsx)(r.A,Object.assign({},e))},e.permalink)}))})})}}}]);