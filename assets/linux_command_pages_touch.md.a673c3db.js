import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"touch","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/touch.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/touch.md"},p=e(`<h1 id="touch" tabindex="-1">touch <a class="header-anchor" href="#touch" aria-hidden="true">#</a></h1><p>\u521B\u5EFA\u65B0\u7684\u7A7A\u6587\u4EF6</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>touch\u547D\u4EE4</strong> \u6709\u4E24\u4E2A\u529F\u80FD\uFF1A\u4E00\u662F\u7528\u4E8E\u628A\u5DF2\u5B58\u5728\u6587\u4EF6\u7684\u65F6\u95F4\u6807\u7B7E\u66F4\u65B0\u4E3A\u7CFB\u7EDF\u5F53\u524D\u7684\u65F6\u95F4\uFF08\u9ED8\u8BA4\u65B9\u5F0F\uFF09\uFF0C\u5B83\u4EEC\u7684\u6570\u636E\u5C06\u539F\u5C01\u4E0D\u52A8\u5730\u4FDD\u7559\u4E0B\u6765\uFF1B\u4E8C\u662F\u7528\u6765\u521B\u5EFA\u65B0\u7684\u7A7A\u6587\u4EF6\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">touch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u6216--time=atime\u6216--time=access\u6216--time=use  \u53EA\u66F4\u6539\u5B58\u53D6\u65F6\u95F4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u6216--no-create  \u4E0D\u5EFA\u7ACB\u4EFB\u4F55\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u65F6\u95F4\u65E5\u671F</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u4F7F\u7528\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u800C\u975E\u73B0\u5728\u7684\u65F6\u95F4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u6B64\u53C2\u6570\u5C06\u5FFD\u7565\u4E0D\u4E88\u5904\u7406\uFF0C\u4EC5\u8D1F\u8D23\u89E3\u51B3BSD\u7248\u672Ctouch\u6307\u4EE4\u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-m\uFF1A\u6216--time=mtime\u6216--time=modify  \u53EA\u66F4\u8BE5\u53D8\u52A8\u65F6\u95F4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  \u628A\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u7EDF\u7EDF\u8BBE\u6210\u548C\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u65E5\u671F\u65F6\u95F4\u76F8\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u65E5\u671F\u65F6\u95F4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  \u4F7F\u7528\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u800C\u975E\u73B0\u5728\u7684\u65F6\u95F4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u8BBE\u7F6E\u65F6\u95F4\u5C5E\u6027\u7684\u6587\u4EF6\u5217\u8868\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">touch ex2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u5EFA\u7ACB\u4E00\u4E2A\u7A7A\u6587\u4EF6ex2\uFF0C\u7136\u540E\uFF0C\u5229\u7528<code>ls -l</code>\u547D\u4EE4\u53EF\u4EE5\u53D1\u73B0\u6587\u4EF6ex2\u7684\u5927\u5C0F\u4E3A0\uFF0C\u8868\u793A\u5B83\u662F\u7A7A\u6587\u4EF6\u3002</p><p>\u6279\u91CF\u521B\u5EFA\u6587\u4EF6</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">touch file{1..5}.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA <code>job1.md</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165 <code>job 1</code></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">job 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> job1.md</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,17),c=[p];function o(r,t,i,d,u,h){return n(),a("div",null,c)}const A=s(l,[["render",o]]);export{m as __pageData,A as default};