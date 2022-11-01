import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"dpkg-deb","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/dpkg-deb.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/dpkg-deb.md"},p=e(`<h1 id="dpkg-deb" tabindex="-1">dpkg-deb <a class="header-anchor" href="#dpkg-deb" aria-hidden="true">#</a></h1><p>Debian Linux\u4E0B\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>dpkg-deb\u547D\u4EE4</strong> \u662FDebian Linux\u4E0B\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B83\u53EF\u4EE5\u5BF9\u8F6F\u4EF6\u5305\u6267\u884C\u6253\u5305\u548C\u89E3\u5305\u64CD\u4F5C\u4EE5\u53CA\u63D0\u4F9B\u8F6F\u4EF6\u5305\u4FE1\u606F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dpkg-deb</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u663E\u793A\u8F6F\u4EF6\u5305\u4E2D\u7684\u6587\u4EF6\u5217\u8868\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-e\uFF1A\u5C06\u4E3B\u63A7\u4FE1\u606F\u89E3\u538B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u628A\u5B57\u6BB5\u5185\u5BB9\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-x\uFF1A\u5C06\u8F6F\u4EF6\u5305\u4E2D\u7684\u6587\u4EF6\u91CA\u653E\u5230\u6307\u5B9A\u76EE\u5F55\u4E0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-X\uFF1A\u5C06\u8F6F\u4EF6\u5305\u4E2D\u7684\u6587\u4EF6\u91CA\u653E\u5230\u6307\u5B9A\u76EE\u5F55\u4E0B\uFF0C\u5E76\u663E\u793A\u91CA\u653E\u6587\u4EF6\u7684\u8BE6\u7EC6\u8FC7\u7A0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-w\uFF1A\u663E\u793A\u8F6F\u4EF6\u5305\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\uFF1A\u663E\u793A\u8F6F\u4EF6\u5305\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R\uFF1A\u63D0\u53D6\u63A7\u5236\u4FE1\u606F\u548C\u5B58\u6863\u7684\u6E05\u5355\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-b\uFF1A\u521B\u5EFAdebian\u8F6F\u4EF6\u5305\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u64CD\u4F5C\u7684\u201C.deb\u201D\u8F6F\u4EF6\u5305\u7684\u5168\u540D\u6216\u8F6F\u4EF6\u540D\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u89E3\u538B\u7A0B\u5E8F\u6587\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dpkg-deb -x drcom-pum_1.0-0ubuntu1~ppa1~jaunty1_i386.deb drcom</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u89E3\u538B\u63A7\u5236\u6587\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dpkg-deb -e drcom-pum_1.0-0ubuntu1~ppa1~jaunty1_i386.deb drcom/DEBIAN</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6253\u5305\u751F\u6210deb\u6587\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dpkg-deb -b drcom drcom_1.4.8.2_i386.deb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u67E5\u8BE2deb\u5305\u4E2D\u7684\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dpkg-deb -c demo.deb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,19),r=[p];function c(d,i,o,t,b,u){return a(),n("div",null,r)}const g=s(l,[["render",c]]);export{m as __pageData,g as default};
