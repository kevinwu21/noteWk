import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const z=JSON.parse('{"title":"bunzip2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/bunzip2.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/bunzip2.md"},p=e(`<h1 id="bunzip2" tabindex="-1">bunzip2 <a class="header-anchor" href="#bunzip2" aria-hidden="true">#</a></h1><p>\u53EF\u89E3\u538B\u7F29.bz2\u683C\u5F0F\u7684\u538B\u7F29\u6587\u4EF6\u3002</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p>bzip2\u53EF\u4EE5\u5BF9\u6587\u4EF6\u8FDB\u884C\u538B\u7F29\u4E0E\u89E3\u538B\u7F29\u3002\u6B64\u547D\u4EE4\u7C7B\u4F3C\u4E8E\u201Cgzip/gunzip\u201D\u547D\u4EE4\uFF0C\u53EA\u80FD\u5BF9\u6587\u4EF6\u8FDB\u884C\u538B\u7F29\u3002\u5BF9\u4E8E\u76EE\u5F55\u53EA\u80FD\u538B\u7F29\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u538B\u7F29\u5B8C\u6210\u540E\uFF0C\u5728\u76EE\u5F55\u4E0B\u751F\u6210\u4EE5\u201C.bz2\u201D\u4E3A\u540E\u7F00\u7684\u538B\u7F29\u5305\u3002<strong>bunzip2\u5176\u5B9E\u662Fbzip2\u7684\u7B26\u53F7\u94FE\u63A5</strong>\uFF0C\u5373\u8F6F\u94FE\u63A5\uFF0C\u56E0\u6B64\u89E3\u538B\u90FD\u53EF\u4EE5\u901A\u8FC7bzip2 -d\u5B9E\u73B0\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bunzip2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-f\u6216--force\uFF1A\u89E3\u538B\u7F29\u65F6\uFF0C\u82E5\u8F93\u51FA\u7684\u6587\u4EF6\u4E0E\u73B0\u6709\u6587\u4EF6\u540C\u540D\u65F6\uFF0C\u9884\u8BBE\u4E0D\u4F1A\u8986\u76D6\u73B0\u6709\u7684\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-k\u6216\u2014\u2014keep\uFF1A\u5728\u89E3\u538B\u7F29\u540E\uFF0C\u9884\u8BBE\u4F1A\u5220\u9664\u539F\u6765\u7684\u538B\u7F29\u6587\u4EF6\u3002\u82E5\u8981\u4FDD\u7559\u538B\u7F29\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u6B64\u53C2\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\u6216\u2014\u2014small\uFF1A\u964D\u4F4E\u7A0B\u5E8F\u6267\u884C\u65F6\uFF0C\u5185\u5B58\u7684\u4F7F\u7528\u91CF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\u6216\u2014\u2014verbose\uFF1A\u89E3\u538B\u7F29\u6587\u4EF6\u65F6\uFF0C\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\uFF0C--license\uFF0C-V\u6216\u2014\u2014version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>.bz2\u538B\u7F29\u5305\uFF1A\u6307\u5B9A\u9700\u8981\u89E3\u538B\u7F29\u7684.bz2\u538B\u7F29\u5305\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5C06<code>/opt</code>\u76EE\u5F55\u4E0B\u7684etc.zip\u3001var.zip\u548Cbackup.zip\u8FDB\u884C\u538B\u7F29\uFF0C\u8BBE\u7F6E\u538B\u7F29\u7387\u4E3A\u6700\u9AD8\uFF0C\u540C\u65F6\u5728\u538B\u7F29\u5B8C\u6BD5\u540E\u4E0D\u5220\u9664\u539F\u59CB\u6587\u4EF6\uFF0C\u663E\u793A\u538B\u7F29\u8FC7\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -9vk /opt/etc.zip /opt/var.zip /opt/backup.zip</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u538B\u7F29\u5B8C\u6BD5\u540E\uFF0C\u5728<code>/opt</code>\u4E0B\u5C31\u4F1A\u751F\u6210\u76F8\u5E94\u7684etc.zip.bz2\u3001var.zip.bz2\u548Cbackup.zip.bz2\u6587\u4EF6\u3002</p><p>\u89E3\u538B\u7F29\uFF1A</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">bunzip2 -v /opt/etc.zip.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,16),i=[p];function r(c,t,o,d,b,u){return n(),a("div",null,i)}const m=s(l,[["render",r]]);export{z as __pageData,m as default};
