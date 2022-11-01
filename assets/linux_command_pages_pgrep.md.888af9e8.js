import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"pgrep","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/pgrep.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/pgrep.md"},e=l(`<h1 id="pgrep" tabindex="-1">pgrep <a class="header-anchor" href="#pgrep" aria-hidden="true">#</a></h1><p>\u6839\u636E\u7528\u6237\u7ED9\u51FA\u7684\u4FE1\u606F\u5728\u5F53\u524D\u8FD0\u884C\u8FDB\u7A0B\u4E2D\u67E5\u627E\u5E76\u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u8FDB\u7A0BID\uFF08PID\uFF09</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>pgrep\u547D\u4EE4</strong> \u4EE5\u540D\u79F0\u4E3A\u4F9D\u636E\u4ECE\u8FD0\u884C\u8FDB\u7A0B\u961F\u5217\u4E2D\u67E5\u627E\u8FDB\u7A0B\uFF0C\u5E76\u663E\u793A\u67E5\u627E\u5230\u7684\u8FDB\u7A0Bid\u3002\u6BCF\u4E00\u4E2A\u8FDB\u7A0BID\u4EE5\u4E00\u4E2A\u5341\u8FDB\u5236\u6570\u8868\u793A\uFF0C\u901A\u8FC7\u4E00\u4E2A\u5206\u5272\u5B57\u7B26\u4E32\u548C\u4E0B\u4E00\u4E2AID\u5206\u5F00\uFF0C\u9ED8\u8BA4\u7684\u5206\u5272\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u65B0\u884C\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u5C5E\u6027\u9009\u9879\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E0A\u6307\u5B9A\u4E00\u4E2A\u4EE5\u9017\u53F7\u5206\u5272\u7684\u53EF\u80FD\u503C\u7684\u96C6\u5408\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">pgrep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-o\uFF1A\u4EC5\u663E\u793A\u627E\u5230\u7684\u6700\u5C0F\uFF08\u8D77\u59CB\uFF09\u8FDB\u7A0B\u53F7\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u4EC5\u663E\u793A\u627E\u5230\u7684\u6700\u5927\uFF08\u7ED3\u675F\uFF09\u8FDB\u7A0B\u53F7\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\uFF1A\u663E\u793A\u8FDB\u7A0B\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-P\uFF1A\u6307\u5B9A\u7236\u8FDB\u7A0B\u53F7\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-g\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7EC4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A\u6307\u5B9A\u5F00\u542F\u8FDB\u7A0B\u7684\u7EC8\u7AEF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-u\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7684\u6709\u6548\u7528\u6237ID\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u8FDB\u7A0B\u540D\u79F0\uFF1A\u6307\u5B9A\u8981\u67E5\u627E\u7684\u8FDB\u7A0B\u540D\u79F0\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u7C7B\u4F3Cgrep\u6307\u4EE4\u4E2D\u7684\u5339\u914D\u6A21\u5F0F\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">pgrep -lo httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4557 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># pgrep -ln httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4566 httpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># pgrep -l httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4557 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4560 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4561 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4562 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4563 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4564 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4565 httpd</span></span>
<span class="line"><span style="color:#A6ACCD;">4566 httpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># pgrep httpd 4557</span></span>
<span class="line"><span style="color:#A6ACCD;">4560</span></span>
<span class="line"><span style="color:#A6ACCD;">4561</span></span>
<span class="line"><span style="color:#A6ACCD;">4562</span></span>
<span class="line"><span style="color:#A6ACCD;">4563</span></span>
<span class="line"><span style="color:#A6ACCD;">4564</span></span>
<span class="line"><span style="color:#A6ACCD;">4565</span></span>
<span class="line"><span style="color:#A6ACCD;">4566</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,12),r=[e];function c(o,t,i,d,b,h){return a(),n("div",null,r)}const u=s(p,[["render",c]]);export{C as __pageData,u as default};
