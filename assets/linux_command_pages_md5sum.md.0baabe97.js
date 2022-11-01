import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const h=JSON.parse('{"title":"md5sum","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/md5sum.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/md5sum.md"},p=e(`<h1 id="md5sum" tabindex="-1">md5sum <a class="header-anchor" href="#md5sum" aria-hidden="true">#</a></h1><p>\u8BA1\u7B97\u548C\u6821\u9A8C\u6587\u4EF6\u62A5\u6587\u6458\u8981\u7684\u5DE5\u5177\u7A0B\u5E8F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>md5sum\u547D\u4EE4</strong> \u91C7\u7528MD5\u62A5\u6587\u6458\u8981\u7B97\u6CD5\uFF08128\u4F4D\uFF09\u8BA1\u7B97\u548C\u68C0\u67E5\u6587\u4EF6\u7684\u6821\u9A8C\u548C\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u5B89\u88C5\u4E86Linux\u540E\uFF0C\u5C31\u4F1A\u6709md5sum\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u7EC8\u7AEF\u76F4\u63A5\u8FD0\u884C\u3002</p><p>MD5\u7B97\u6CD5\u5E38\u5E38\u88AB\u7528\u6765\u9A8C\u8BC1\u7F51\u7EDC\u6587\u4EF6\u4F20\u8F93\u7684\u5B8C\u6574\u6027\uFF0C\u9632\u6B62\u6587\u4EF6\u88AB\u4EBA\u7BE1\u6539\u3002MD5 \u5168\u79F0\u662F\u62A5\u6587\u6458\u8981\u7B97\u6CD5\uFF08Message-Digest Algorithm 5\uFF09\uFF0C\u6B64\u7B97\u6CD5\u5BF9\u4EFB\u610F\u957F\u5EA6\u7684\u4FE1\u606F\u9010\u4F4D\u8FDB\u884C\u8BA1\u7B97\uFF0C\u4EA7\u751F\u4E00\u4E2A\u4E8C\u8FDB\u5236\u957F\u5EA6\u4E3A128\u4F4D\uFF08\u5341\u516D\u8FDB\u5236\u957F\u5EA6\u5C31\u662F32\u4F4D\uFF09\u7684\u201C\u6307\u7EB9\u201D\uFF08\u6216\u79F0\u201C\u62A5\u6587\u6458\u8981\u201D\uFF09\uFF0C\u4E0D\u540C\u7684\u6587\u4EF6\u4EA7\u751F\u76F8\u540C\u7684\u62A5\u6587\u6458\u8981\u7684\u53EF\u80FD\u6027\u662F\u975E\u5E38\u975E\u5E38\u4E4B\u5C0F\u7684\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">md5sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-b\uFF1A\u4E8C\u8FDB\u5236\u6A21\u5F0F\u8BFB\u53D6\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\u6216--text\uFF1A\u628A\u8F93\u5165\u7684\u6587\u4EF6\u4F5C\u4E3A\u6587\u672C\u6587\u4EF6\u770B\u5F85\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u4ECE\u6307\u5B9A\u6587\u4EF6\u4E2D\u8BFB\u53D6MD5\u6821\u9A8C\u548C\uFF0C\u5E76\u8FDB\u884C\u6821\u9A8C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--status\uFF1A\u9A8C\u8BC1\u6210\u529F\u65F6\u4E0D\u8F93\u51FA\u4EFB\u4F55\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-w\uFF1A\u5F53\u6821\u9A8C\u4E0D\u6B63\u786E\u65F6\u7ED9\u51FA\u8B66\u544A\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u4FDD\u5B58\u7740\u6587\u4EF6\u540D\u548C\u6821\u9A8C\u548C\u7684\u6587\u672C\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u4F7F\u7528 md5sum \u751F\u6210\u5BC6\u7801</strong></p><p>\u53E6\u4E00\u79CD\u83B7\u53D6\u53EF\u7528\u4F5C\u5BC6\u7801\u7684\u968F\u673A\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\u662F\u8BA1\u7B97 MD5 \u6821\u9A8C\u503C\uFF01\u6821\u9A8C\u503C\u770B\u8D77\u6765\u786E\u5B9E\u50CF\u662F\u968F\u673A\u5B57\u7B26\u4E32\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u4F5C\u5BC6\u7801\u3002\u786E\u4FDD\u4F60\u7684\u8BA1\u7B97\u6E90\u662F\u4E2A\u53D8\u91CF\uFF0C\u8FD9\u6837\u7684\u8BDD\u6BCF\u6B21\u8FD0\u884C\u547D\u4EE4\u65F6\u751F\u6210\u7684\u6821\u9A8C\u503C\u90FD\u4E0D\u4E00\u6837\u3002\u6BD4\u5982 date \uFF01date \u547D\u4EE4 \u603B\u4F1A\u751F\u6210\u4E0D\u540C\u7684\u8F93\u51FA\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># date | md5sum</span></span>
<span class="line"><span style="color:#A6ACCD;">6a43f2c246cdc3e6a3592652f831d186  -</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u751F\u6210\u4E00\u4E2A\u6587\u4EF6insert.sql\u7684md5\u503C\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># md5sum insert.sql</span></span>
<span class="line"><span style="color:#A6ACCD;">bcda6cb5c704664f989703ac5a88f112  insert.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u68C0\u67E5\u6587\u4EF6testfile\u662F\u5426\u88AB\u4FEE\u6539\u8FC7\uFF1A</strong></p><p>\u9996\u5148\u751F\u6210md5\u6587\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">md5sum testfile </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> testfile.md5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u68C0\u67E5\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">md5sum testfile -c testfile.md5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u6587\u4EF6\u6CA1\u6709\u53D8\u5316\uFF0C\u8F93\u51FA\u5E94\u8BE5\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">forsort: OK</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6\uFF0Cmd5sum\u547D\u4EE4\u8FD4\u56DE0\u3002</p><p>\u5982\u679C\u6587\u4EF6\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8F93\u51FA\u5E94\u8BE5\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">forsort: FAILED</span></span>
<span class="line"><span style="color:#A6ACCD;">md5sum: WARNING: 1 of 1 computed checksum did NOT match</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u65F6\uFF0Cmd5sum\u547D\u4EE4\u8FD4\u56DE\u975E0\u3002</p><p>\u8FD9\u91CC\uFF0C\u68C0\u67E5\u7528\u7684\u6587\u4EF6\u540D\u968F\u610F\u3002\u5982\u679C\u4E0D\u60F3\u6709\u4EFB\u4F55\u8F93\u51FA\uFF0C\u5219<code>md5sum testfile --status -c testfile.md5</code>\uFF0C\u8FD9\u65F6\u5019\u901A\u8FC7\u8FD4\u56DE\u503C\u6765\u68C0\u6D4B\u7ED3\u679C\u3002</p><p>\u68C0\u6D4B\u7684\u65F6\u5019\u5982\u679C\u68C0\u6D4B\u6587\u4EF6\u975E\u6CD5\u5219\u8F93\u51FA\u4FE1\u606F\u7684\u9009\u9879:</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">md5sum -w -c testfile.md5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4E4B\u540E\uFF0C\u6587\u4EF6\u5F02\u5E38\u8F93\u51FA\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">md5sum: testfile.md5: 1: improperly formatted MD5 checksum line</span></span>
<span class="line"><span style="color:#A6ACCD;">md5sum: testfile.md5: no properly formatted MD5 checksum lines found</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u91CC\uFF0Ctestfile.md5\u53EA\u6709\u4E00\u884C\u4FE1\u606F\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u5730\u7ED9\u5B83\u591A\u52A0\u4E86\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5BFC\u81F4\u975E\u6CD5\u3002\u5982\u679Cmd5\u6587\u4EF6\u6B63\u5E38\u90A3\u4E48<code>-w</code>\u6709\u6CA1\u6709\u90FD\u4E00\u6837\u3002</p>`,34),c=[p];function r(o,t,i,d,m,u){return a(),n("div",null,c)}const g=s(l,[["render",r]]);export{h as __pageData,g as default};
