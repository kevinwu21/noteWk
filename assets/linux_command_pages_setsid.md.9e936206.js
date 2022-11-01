import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"setsid","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/setsid.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/setsid.md"},p=e(`<h1 id="setsid" tabindex="-1">setsid <a class="header-anchor" href="#setsid" aria-hidden="true">#</a></h1><p>\u5728\u65B0\u7684\u4F1A\u8BDD\u4E2D\u8FD0\u884C\u7A0B\u5E8F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>setsid\u547D\u4EE4</strong> \u5B50\u8FDB\u7A0B\u4ECE\u7236\u8FDB\u7A0B\u7EE7\u627F\u4E86\uFF1ASessionID\u3001\u8FDB\u7A0B\u7EC4ID\u548C\u6253\u5F00\u7684\u7EC8\u7AEF\u3002\u5B50\u8FDB\u7A0B\u5982\u679C\u8981\u8131\u79BB\u8FD9\u4E9B\uFF0C\u4EE3\u7801\u4E2D\u53EF\u901A\u8FC7\u8C03\u7528setsid\u6765\u5B9E\u73B0\u3002\uFF0C\u800C\u547D\u4EE4\u884C\u6216\u811A\u672C\u4E2D\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u547D\u4EE4setsid\u6765\u8FD0\u884C\u7A0B\u5E8F\u5B9E\u73B0\u3002setsid\u5E2E\u52A9\u4E00\u4E2A\u8FDB\u7A0B\u8131\u79BB\u4ECE\u7236\u8FDB\u7A0B\u7EE7\u627F\u800C\u6765\u7684\u5DF2\u6253\u5F00\u7684\u7EC8\u7AEF\u3001\u96B6\u5C5E\u8FDB\u7A0B\u7EC4\u548C\u96B6\u5C5E\u7684\u4F1A\u8BDD\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">setsid</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">program</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">arguments ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c, --ctty   \u5C06\u63A7\u5236\u7EC8\u7AEF\u8BBE\u7F6E\u4E3A\u5F53\u524D\u63A7\u5236\u7EC8\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">-f, --fork   \u603B\u662F fork</span></span>
<span class="line"><span style="color:#A6ACCD;">-w, --wait   \u7B49\u5F85\u7A0B\u5E8F\u9000\u51FA\uFF0C\u5E76\u4F7F\u7528\u76F8\u540C\u7684\u8FD4\u56DE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u53EF\u89C1 setsid \u7684\u4F7F\u7528\u4E5F\u662F\u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u4E5F\u53EA\u9700\u5728\u8981\u5904\u7406\u7684\u547D\u4EE4\u524D\u52A0\u4E0A setsid \u5373\u53EF</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@root </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># setsid ping www.ibm.com</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@root </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ps -ef |grep www.ibm.com</span></span>
<span class="line"><span style="color:#A6ACCD;">root 31094 1 0 07:28 </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> 00:00:00 ping www.ibm.com</span></span>
<span class="line"><span style="color:#A6ACCD;">root 31102 29217 0 07:29 pts/4 00:00:00 grep www.ibm.com</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@root </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;">#</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11),o=[p];function r(t,c,i,d,h,D){return n(),a("div",null,o)}const b=s(l,[["render",r]]);export{m as __pageData,b as default};
