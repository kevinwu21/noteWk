import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"ed","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]}]}],"relativePath":"linux/command/pages/ed.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/ed.md"},p=e(`<h1 id="ed" tabindex="-1">ed <a class="header-anchor" href="#ed" aria-hidden="true">#</a></h1><p>\u5355\u884C\u7EAF\u6587\u672C\u7F16\u8F91\u5668</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>ed\u547D\u4EE4</strong> \u662F\u5355\u884C\u7EAF\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u5B83\u6709\u547D\u4EE4\u6A21\u5F0F\uFF08command mode\uFF09\u548C\u8F93\u5165\u6A21\u5F0F\uFF08input mode\uFF09\u4E24\u79CD\u5DE5\u4F5C\u6A21\u5F0F\u3002ed\u547D\u4EE4\u652F\u6301\u591A\u4E2A\u5185\u7F6E\u547D\u4EE4\uFF0C\u5E38\u89C1\u5185\u7F6E\u547D\u4EE4\u5982\u4E0B\uFF1A</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">A </span><span style="color:#676E95;"># \u5207\u6362\u5230\u8F93\u5165\u6A21\u5F0F\uFF0C\u5728\u6587\u4EF6\u7684\u6700\u540E\u4E00\u884C\u4E4B\u540E\u8F93\u5165\u65B0\u7684\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">C </span><span style="color:#676E95;"># \u5207\u6362\u5230\u8F93\u5165\u6A21\u5F0F\uFF0C\u7528\u8F93\u5165\u7684\u5185\u5BB9\u66FF\u6362\u6389\u6700\u540E\u4E00\u884C\u7684\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">i </span><span style="color:#676E95;"># \u5207\u6362\u5230\u8F93\u5165\u6A21\u5F0F\uFF0C\u5728\u5F53\u524D\u884C\u4E4B\u524D\u52A0\u5165\u4E00\u4E2A\u65B0\u7684\u7A7A\u884C\u6765\u8F93\u5165\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#676E95;"># \u7528\u4E8E\u5220\u9664\u6700\u540E\u4E00\u884C\u6587\u672C\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">n </span><span style="color:#676E95;"># \u7528\u4E8E\u663E\u793A\u6700\u540E\u4E00\u884C\u7684\u884C\u53F7\u548C\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">w </span><span style="color:#676E95;"># &lt;\u6587\u4EF6\u540D&gt;\uFF1A\u4E00\u7ED9\u5B9A\u7684\u6587\u4EF6\u540D\u4FDD\u5B58\u5F53\u524D\u6B63\u5728\u7F16\u8F91\u7684\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">q </span><span style="color:#676E95;"># \u9000\u51FAed\u7F16\u8F91\u5668\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-G\u6216\u2014\u2014traditional\uFF1A\u63D0\u4F9B\u517C\u5BB9\u7684\u529F\u80FD\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-p</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9Aed\u5728command mode\u7684\u63D0\u793A\u5B57\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF0C-\uFF0C--quiet\u6216\u2014\u2014silent\uFF1A\u4E0D\u6267\u884C\u5F00\u542F\u6587\u4EF6\u65F6\u7684\u68C0\u67E5\u529F\u80FD\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u663E\u793A\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u5F85\u7F16\u8F91\u7684\u6587\u4EF6\u3002</p>`,11),r=[p];function c(o,t,i,d,h,u){return a(),n("div",null,r)}const A=s(l,[["render",c]]);export{m as __pageData,A as default};
