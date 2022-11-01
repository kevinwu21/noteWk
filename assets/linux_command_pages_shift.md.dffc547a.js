import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const D=JSON.parse('{"title":"shift","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/shift.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/shift.md"},p=e(`<h1 id="shift" tabindex="-1">shift <a class="header-anchor" href="#shift" aria-hidden="true">#</a></h1><p>\u79FB\u52A8\u4F4D\u7F6E\u53C2\u6570\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u5C06\u4F4D\u7F6E\u53C2\u6570<code>$n, $n+1...</code>\u91CD\u547D\u540D\u4E3A<code>$1, $2...</code>\u3002</li></ul><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>n\uFF08\u53EF\u9009\uFF09\uFF1A\u5927\u4E8E\u7B49\u4E8E1\u4E14\u5C0F\u4E8E\u7B49\u4E8E\u53C2\u6570\u4E2A\u6570\u7684\u6574\u6570\uFF0C\u9ED8\u8BA4\u4E3A1\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6210\u529F\u9664\u975En\u5927\u4E8E\u53C2\u6570\u4E2A\u6570\u6216n\u5C0F\u4E8E1\u4EE5\u53CA\u5176\u4ED6\u975E\u6CD5\u503C\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u6211\u4EEC\u7684\u811A\u672C\u6587\u4EF6\uFF08<a href="http://test.sh" target="_blank" rel="noreferrer">test.sh</a>\uFF09\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env bash</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u524D\u4E09\u4E2A\u4F4D\u7F6E\u53C2\u6570\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">1</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">2</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># \u79FB\u9664\u524D\u4E24\u4E2A\u4F4D\u7F6E\u53C2\u6570\uFF0C\u5E76\u5C06$3\u91CD\u547D\u540D\u4E3A$1\uFF0C\u4E4B\u540E\u7684\u4EE5\u6B64\u7C7B\u63A8\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">shift</span><span style="color:#A6ACCD;"> 2</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">1</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">2</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u7EC8\u7AEF\u6267\u884C\u8BE5\u811A\u672C\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sh test.sh q w e r t</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD4\u56DE\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">q w e</span></span>
<span class="line"><span style="color:#A6ACCD;">e r t</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li>\u8BE5\u547D\u4EE4\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>help</code>\u547D\u4EE4\u3002</li></ol>`,19),r=[p];function o(c,t,i,d,h,u){return n(),a("div",null,r)}const y=s(l,[["render",o]]);export{D as __pageData,y as default};
