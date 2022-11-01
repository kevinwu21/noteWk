import{_ as s,c as a,o as n,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"watch","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/watch.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/watch.md"},p=l(`<h1 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u5C06\u547D\u4EE4\u7684\u8F93\u51FA\u7ED3\u679C\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF0C\u591A\u7528\u4E8E\u5468\u671F\u6027\u6267\u884C\u547D\u4EE4/\u5B9A\u65F6\u6267\u884C\u547D\u4EE4</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>watch\u547D\u4EE4</strong> \u4EE5\u5468\u671F\u6027\u7684\u65B9\u5F0F\u6267\u884C\u7ED9\u5B9A\u7684\u6307\u4EE4\uFF0C\u6307\u4EE4\u8F93\u51FA\u4EE5\u5168\u5C4F\u65B9\u5F0F\u663E\u793A\u3002watch\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u547D\u4EE4\uFF0C\u57FA\u672C\u6240\u6709\u7684Linux\u53D1\u884C\u7248\u90FD\u5E26\u6709\u8FD9\u4E2A\u5C0F\u5DE5\u5177\uFF0C\u5982\u540C\u540D\u5B57\u4E00\u6837\uFF0Cwatch\u53EF\u4EE5\u5E2E\u4F60\u76D1\u6D4B\u4E00\u4E2A\u547D\u4EE4\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u7701\u5F97\u4F60\u4E00\u904D\u904D\u7684\u624B\u52A8\u8FD0\u884C\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">watch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-n </span><span style="color:#676E95;"># \u6216--interval  watch\u7F3A\u7701\u6BCF2\u79D2\u8FD0\u884C\u4E00\u4E0B\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u7528-n\u6216-interval\u6765\u6307\u5B9A\u95F4\u9694\u7684\u65F6\u95F4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d </span><span style="color:#676E95;"># \u6216--differences  \u7528-d\u6216--differences \u9009\u9879watch \u4F1A\u9AD8\u4EAE\u663E\u793A\u53D8\u5316\u7684\u533A\u57DF\u3002 \u800C-d=cumulative\u9009\u9879\u4F1A\u628A\u53D8\u52A8\u8FC7\u7684\u5730\u65B9(\u4E0D\u7BA1\u6700\u8FD1\u7684\u90A3\u6B21\u6709\u6CA1\u6709\u53D8\u52A8)\u90FD\u9AD8\u4EAE\u663E\u793A\u51FA\u6765\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-t </span><span style="color:#676E95;"># \u6216-no-title  \u4F1A\u5173\u95EDwatch\u547D\u4EE4\u5728\u9876\u90E8\u7684\u65F6\u95F4\u95F4\u9694,\u547D\u4EE4\uFF0C\u5F53\u524D\u65F6\u95F4\u7684\u8F93\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-h, --help </span><span style="color:#676E95;"># \u67E5\u770B\u5E2E\u52A9\u6587\u6863</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6307\u4EE4\uFF1A\u9700\u8981\u5468\u671F\u6027\u6267\u884C\u7684\u6307\u4EE4\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">watch -n 1 -d netstat -ant \xA0 \xA0 \xA0 </span><span style="color:#676E95;"># \u547D\u4EE4\uFF1A\u6BCF\u9694\u4E00\u79D2\u9AD8\u4EAE\u663E\u793A\u7F51\u7EDC\u94FE\u63A5\u6570\u7684\u53D8\u5316\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -n 1 -d </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pstree|grep http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u6BCF\u9694\u4E00\u79D2\u9AD8\u4EAE\u663E\u793Ahttp\u94FE\u63A5\u6570\u7684\u53D8\u5316\u60C5\u51B5\u3002 \u540E\u9762\u63A5\u7684\u547D\u4EE4\u82E5\u5E26\u6709\u7BA1\u9053\u7B26\uFF0C\u9700\u8981\u52A0&#39;&#39;\u5C06\u547D\u4EE4\u533A\u57DF\u5F52\u6574\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">watch </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">netstat -an | grep:21 | \\ grep&lt;\u6A21\u62DF\u653B\u51FB\u5BA2\u6237\u673A\u7684IP&gt;| wc -l</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u5B9E\u65F6\u67E5\u770B\u6A21\u62DF\u653B\u51FB\u5BA2\u6237\u673A\u5EFA\u7ACB\u8D77\u6765\u7684\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -d </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -l|grep scf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;"># \u76D1\u6D4B\u5F53\u524D\u76EE\u5F55\u4E2D scf&#39; \u7684\u6587\u4EF6\u7684\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -n 10 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cat /proc/loadavg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 10\u79D2\u4E00\u6B21\u8F93\u51FA\u7CFB\u7EDF\u7684\u5E73\u5747\u8D1F\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">watch uptime</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -t uptime</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -d -n 1 netstat -ntlp</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -d </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -l | fgrep goface</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;"># \u76D1\u6D4Bgoface\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -t -differences=cumulative uptime</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -n 60 from            </span><span style="color:#676E95;"># \u76D1\u63A7mail</span></span>
<span class="line"><span style="color:#A6ACCD;">watch -n 1 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">df -i;df</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;"># \u76D1\u6D4B\u78C1\u76D8inode\u548Cblock\u6570\u76EE\u53D8\u5316\u60C5\u51B5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>FreeBSD\u548CLinux\u4E0Bwatch\u547D\u4EE4\u7684\u4E0D\u540C\uFF0C\u5728Linux\u4E0B\uFF0Cwatch\u662F\u5468\u671F\u6027\u7684\u6267\u884C\u4E0B\u4E2A\u7A0B\u5E8F\uFF0C\u5E76\u5168\u5C4F\u663E\u793A\u6267\u884C\u7ED3\u679C\uFF0C\u5982\uFF1A<code>watch -n 1 -d netstat -ant</code>\uFF0C\u800C\u5728FreeBSD\u4E0B\u7684watch\u547D\u4EE4\u662F\u67E5\u770B\u5176\u5B83\u7528\u6237\u7684\u6B63\u5728\u8FD0\u884C\u7684\u64CD\u4F5C\uFF0Cwatch\u5141\u8BB8\u4F60\u5077\u770B\u5176\u5B83terminal\u6B63\u5728\u505A\u4EC0\u4E48\uFF0C\u8BE5\u547D\u4EE4\u53EA\u80FD\u8BA9\u8D85\u7EA7\u7528\u6237\u4F7F\u7528\u3002</p>`,13),c=[p];function t(r,o,i,d,h,D){return n(),a("div",null,c)}const C=s(e,[["render",t]]);export{y as __pageData,C as default};