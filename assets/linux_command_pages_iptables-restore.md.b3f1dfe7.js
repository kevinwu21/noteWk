import{_ as s,c as e,o as a,a as n}from"./app.f6b8b16b.js";const _=JSON.parse('{"title":"iptables-restore","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/iptables-restore.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/iptables-restore.md"},r=n(`<h1 id="iptables-restore" tabindex="-1">iptables-restore <a class="header-anchor" href="#iptables-restore" aria-hidden="true">#</a></h1><p>\u8FD8\u539Fiptables\u8868\u7684\u914D\u7F6E</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>iptables-restore\u547D\u4EE4</strong> \u7528\u6765\u8FD8\u539Fiptables-save\u547D\u4EE4\u6240\u5907\u4EFD\u7684iptables\u914D\u7F6E\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">iptables-restore</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u6307\u5B9A\u5728\u8FD8\u539Fiptables\u8868\u65F6\u5019\uFF0C\u8FD8\u539F\u5F53\u524D\u7684\u6570\u636E\u5305\u8BA1\u6570\u5668\u548C\u5B57\u8282\u8BA1\u6570\u5668\u7684\u503C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A\u6307\u5B9A\u8981\u8FD8\u539F\u8868\u7684\u540D\u79F0\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">iptables-restore </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> iptables.bak</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>iptables.bak\u662Fiptables-save\u547D\u4EE4\u6240\u5907\u4EFD\u7684\u6587\u4EF6\u3002</p>`,11),t=[r];function p(i,c,o,d,h,b){return a(),e("div",null,t)}const m=s(l,[["render",p]]);export{_ as __pageData,m as default};
