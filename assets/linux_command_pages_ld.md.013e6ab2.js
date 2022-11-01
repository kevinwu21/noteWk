import{_ as s,c as a,o as e,a as l}from"./app.f6b8b16b.js";const D=JSON.parse('{"title":"ld","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/ld.md","lastUpdated":1666509709000}'),n={name:"linux/command/pages/ld.md"},p=l(`<h1 id="ld" tabindex="-1">ld <a class="header-anchor" href="#ld" aria-hidden="true">#</a></h1><p>\u5C06\u76EE\u6807\u6587\u4EF6\u8FDE\u63A5\u4E3A\u53EF\u6267\u884C\u7A0B\u5E8F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>ld\u547D\u4EE4</strong> \u662FGNU\u7684\u8FDE\u63A5\u5668\uFF0C\u5C06\u76EE\u6807\u6587\u4EF6\u8FDE\u63A5\u4E3A\u53EF\u6267\u884C\u7A0B\u5E8F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ld</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ld </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> objfile ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-o\uFF1A\u6307\u5B9A\u8F93\u51FA\u6587\u4EF6\u540D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-e\uFF1A\u6307\u5B9A\u7A0B\u5E8F\u7684\u5165\u53E3\u7B26\u53F7\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u76EE\u6807\u6587\u4EF6\uFF1A\u6307\u5B9A\u9700\u8981\u8FDE\u63A5\u7684\u76EE\u6807\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u8FD9\u544A\u8BC9ld\u901A\u8FC7\u5C06\u6587\u4EF6 <code>/lib/crt0.o</code> \u4E0E <code>hello.o</code> \u548C\u5E93 <code>libc.a</code> \u94FE\u63A5\u8D77\u6765\uFF0C\u751F\u6210\u4E00\u4E2A\u540D\u4E3A <code>output</code> \u7684\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u5C06\u6765\u81EA\u6807\u51C6\u641C\u7D22\u76EE\u5F55\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ld -o </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">output</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /lib/crt0.o hello.o -lc</span></span>
<span class="line"><span style="color:#A6ACCD;">ld -o output /lib/crt0.o hello.o -lc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),o=[p];function r(c,t,d,i,h,u){return e(),a("div",null,o)}const m=s(n,[["render",r]]);export{D as __pageData,m as default};
