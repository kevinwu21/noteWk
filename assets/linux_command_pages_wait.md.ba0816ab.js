import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"wait","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/wait.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/wait.md"},p=e(`<h1 id="wait" tabindex="-1">wait <a class="header-anchor" href="#wait" aria-hidden="true">#</a></h1><p>\u7B49\u5F85\u8FDB\u7A0B\u6267\u884C\u5B8C\u540E\u8FD4\u56DE</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>wait\u547D\u4EE4</strong> \u7528\u6765\u7B49\u5F85\u6307\u4EE4\u7684\u6307\u4EE4\uFF0C\u76F4\u5230\u5176\u6267\u884C\u5B8C\u6BD5\u540E\u8FD4\u56DE\u7EC8\u7AEF\u3002\u8BE5\u6307\u4EE4\u5E38\u7528\u4E8Eshell\u811A\u672C\u7F16\u7A0B\u4E2D\uFF0C\u5F85\u6307\u5B9A\u7684\u6307\u4EE4\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u624D\u4F1A\u7EE7\u7EED\u6267\u884C\u540E\u9762\u7684\u4EFB\u52A1\u3002\u8BE5\u6307\u4EE4\u7B49\u5F85\u4F5C\u4E1A\u65F6\uFF0C\u5728\u4F5C\u4E1A\u6807\u8BC6\u53F7\u524D\u5FC5\u987B\u6DFB\u52A0\u767E\u5206\u53F7&quot;%&quot;\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u8FDB\u7A0B\u6216\u4F5C\u4E1A\u6807\u793A\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u53F7\u6216\u8005\u4F5C\u4E1A\u53F7\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u547D\u4EE4wait\u7B49\u5F85\u4F5C\u4E1A\u53F7\u4E3A1\u7684\u4F5C\u4E1A\u5B8C\u6210\u540E\u518D\u8FD4\u56DE\uFF0C\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF1A</p><p>\u8FD0\u884C\u4E00\u4E2Asleep\u8FDB\u7A0B</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sleep 10s </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 27156</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6307\u5B9A\u4F5C\u4E1A\u53F7</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">wait</span><span style="color:#A6ACCD;"> %1       </span><span style="color:#676E95;">#\u7B49\u5F85\u4F5C\u4E1A\u53F7\u4E3A1\u7684\u4F5C\u4E1A\u5B8C\u6210 </span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+  Done                    sleep 10s</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6307\u5B9A\u8FDB\u7A0B\u53F7</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">wait</span><span style="color:#A6ACCD;"> 27156</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+  Done                    sleep 10s</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8F93\u51FA\u5F53\u524D\u5B58\u5728\u4F5C\u4E1A\u53F7\u7684\u6307\u4EE4\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><a href="./jobs.html">jobs</a></p>`,18),r=[p];function o(t,c,i,d,h,u){return n(),a("div",null,r)}const D=s(l,[["render",o]]);export{m as __pageData,D as default};
