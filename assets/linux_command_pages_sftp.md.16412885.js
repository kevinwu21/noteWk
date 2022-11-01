import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"sftp","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/sftp.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/sftp.md"},p=e(`<h1 id="sftp" tabindex="-1">sftp <a class="header-anchor" href="#sftp" aria-hidden="true">#</a></h1><p>\u4EA4\u4E92\u5F0F\u7684\u6587\u4EF6\u4F20\u8F93\u7A0B\u5E8F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>sftp\u547D\u4EE4</strong> \u662F\u4E00\u6B3E\u4EA4\u4E92\u5F0F\u7684\u6587\u4EF6\u4F20\u8F93\u7A0B\u5E8F\uFF0C\u547D\u4EE4\u7684\u8FD0\u884C\u548C\u4F7F\u7528\u65B9\u5F0F\u4E0Eftp\u547D\u4EE4\u76F8\u4F3C\uFF0C\u4F46\u662F\uFF0Csftp\u547D\u4EE4\u5BF9\u4F20\u8F93\u7684\u6240\u6709\u4FE1\u606F\u4F7F\u7528ssh\u52A0\u5BC6\uFF0C\u5B83\u8FD8\u652F\u6301\u516C\u94A5\u8BA4\u8BC1\u548C\u538B\u7F29\u7B49\u529F\u80FD\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sftp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-B\uFF1A\u6307\u5B9A\u4F20\u8F93\u6587\u4EF6\u65F6\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\uFF1A\u4F7F\u7528ssh\u534F\u8BAE\u7248\u672C1\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-b\uFF1A\u6307\u5B9A\u6279\u5904\u7406\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-C\uFF1A\u4F7F\u7528\u538B\u7F29\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-o\uFF1A\u6307\u5B9Assh\u9009\u9879\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-F\uFF1A\u6307\u5B9Assh\u914D\u7F6E\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R\uFF1A\u6307\u5B9A\u4E00\u6B21\u53EF\u4EE5\u5BB9\u5FCD\u591A\u5C11\u8BF7\u6C42\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u5347\u9AD8\u65E5\u5FD7\u7B49\u7EA7\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u76EE\u6807\u4E3B\u673A\uFF1A\u6307\u5B9Asftp\u670D\u52A1\u5668ip\u5730\u5740\u6216\u8005\u4E3B\u673A\u540D\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5EFA\u7ACB\u8054\u63A5</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ sfpt username@1.1.1.1 </span><span style="color:#676E95;"># \u56DE\u8F66\u8F93\u5165\u5BC6\u7801</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u6587\u4EF6\u4E0B\u8F7D\u5230\u6307\u5B9A\u8DEF\u5F84</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sftp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> get /export/sftp/test.csv /Users/my/Downloads</span></span>
<span class="line"><span style="color:#A6ACCD;">Fetching /export/sftp/test.csv to /Users/my/Downloads/test.csv</span></span>
<span class="line"><span style="color:#A6ACCD;">/export/sftp/test.csv            100%  133     0.3KB/s   00:00</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u670D\u52A1\u5668\u6307\u5B9A\u8DEF\u5F84</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sftp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> put /Users/my/Downloads/re-produce.gif /export/sftp</span></span>
<span class="line"><span style="color:#A6ACCD;">Uploading /Users/my/Downloads/re-produce.gif to /export/sftp/re-produce.gif</span></span>
<span class="line"><span style="color:#A6ACCD;">/Users/my/Downloads/re-produce.gif            100%  257KB  86.6KB/s   00:02</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17),r=[p];function c(t,o,i,d,u,h){return a(),n("div",null,r)}const A=s(l,[["render",c]]);export{m as __pageData,A as default};