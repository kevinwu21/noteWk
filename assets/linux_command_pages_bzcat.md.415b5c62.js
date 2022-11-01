import{_ as a,c as e,o as s,a as n}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"bzcat","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/bzcat.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/bzcat.md"},c=n(`<h1 id="bzcat" tabindex="-1">bzcat <a class="header-anchor" href="#bzcat" aria-hidden="true">#</a></h1><p>\u4E0D\u89E3\u538B\uFF0C\u76F4\u63A5\u67E5\u770B\u6307\u5B9A\u7684.bz2\u6587\u4EF6</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>bzcat\u547D\u4EE4</strong> \u65E0\u9700\u89E3\u538B\u7F29\u6307\u5B9A\u7684.bz2\u6587\u4EF6\uFF0C\u5373\u53EF\u663E\u793A\u89E3\u538B\u7F29\u540E\u7684\u6587\u4EF6\u5185\u5BB9\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzcat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>.bz2\u538B\u7F29\u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u663E\u793A\u5185\u5BB9\u7684.bz2\u538B\u7F29\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5C06<code>/tmp/man.config</code>\u4EE5bzip2\u683C\u5F0F\u538B\u7F29\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -z man.config</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6man.config\u4F1A\u53D8\u6210man.config.bz2</p><p>\u5C06\u4E0A\u9762\u7684\u538B\u7F29\u6587\u4EF6\u5185\u5BB9\u8BFB\u51FA\u6765\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzcat man.config.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6\u5C4F\u5E55\u4E0A\u4F1A\u663E\u793A man.config.bz2 \u89E3\u538B\u7F29\u4E4B\u540E\u7684\u6587\u4EF6\u5185\u5BB9\u3002</p>`,15),p=[c];function t(i,r,o,d,h,b){return s(),e("div",null,p)}const _=a(l,[["render",t]]);export{m as __pageData,_ as default};
