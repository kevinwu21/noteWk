import{_ as s,c as a,o as n,a as l}from"./app.f6b8b16b.js";const u=JSON.parse('{"title":"tail","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/tail.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/tail.md"},p=l(`<h1 id="tail" tabindex="-1">tail <a class="header-anchor" href="#tail" aria-hidden="true">#</a></h1><p>\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u6307\u5B9A\u6587\u4EF6\u7684\u672B\u5C3E\u82E5\u5E72\u884C</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>tail\u547D\u4EE4</strong> \u7528\u4E8E\u8F93\u5165\u6587\u4EF6\u4E2D\u7684\u5C3E\u90E8\u5185\u5BB9\u3002</p><ul><li>\u9ED8\u8BA4\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u6307\u5B9A\u6587\u4EF6\u7684\u672B\u5C3E10\u884C\u3002</li><li>\u5904\u7406\u591A\u4E2A\u6587\u4EF6\u65F6\u4F1A\u5728\u5404\u4E2A\u6587\u4EF6\u4E4B\u524D\u9644\u52A0\u542B\u6709\u6587\u4EF6\u540D\u7684\u884C\u3002</li><li>\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u540D\u4E3A<code>-</code>\uFF0C\u5219\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u3002</li><li>\u5982\u679C\u8868\u793A\u5B57\u8282\u6216\u884C\u6570\u7684<code>NUM</code>\u503C\u4E4B\u524D\u6709\u4E00\u4E2A<code>+</code>\u53F7\uFF0C\u5219\u4ECE\u6587\u4EF6\u5F00\u5934\u7684\u7B2C<code>NUM</code>\u9879\u5F00\u59CB\u663E\u793A\uFF0C\u800C\u4E0D\u662F\u663E\u793A\u6587\u4EF6\u7684\u6700\u540E<code>NUM</code>\u9879\u3002</li><li><code>NUM</code>\u503C\u540E\u9762\u53EF\u4EE5\u6709\u540E\u7F00\uFF1A <ul><li><code>b</code> : 512</li><li><code>kB</code> : 1000</li><li><code>k </code> : 1024</li><li><code>MB</code> : 1000 * 1000</li><li><code>M </code> : 1024 * 1024</li><li><code>GB</code> : 1000 * 1000 * 1000</li><li><code>G </code> : 1024 * 1024 * 1024</li><li><code>T</code>\u3001<code>P</code>\u3001<code>E</code>\u3001<code>Z</code>\u3001<code>Y</code>\u7B49\u4EE5\u6B64\u7C7B\u63A8\u3002</li></ul></li></ul><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tail </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c, --bytes=NUM                 \u8F93\u51FA\u6587\u4EF6\u5C3E\u90E8\u7684NUM\uFF08NUM\u4E3A\u6574\u6570\uFF09\u4E2A\u5B57\u8282\u5185\u5BB9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-f, --follow</span><span style="color:#89DDFF;">[=</span><span style="color:#A6ACCD;">{name</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">descript}</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  \u663E\u793A\u6587\u4EF6\u6700\u65B0\u8FFD\u52A0\u7684\u5185\u5BB9\u3002\u201Cname\u201D\u8868\u793A\u4EE5\u6587\u4EF6\u540D\u7684\u65B9\u5F0F\u76D1\u89C6\u6587\u4EF6\u7684\u53D8\u5316\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-F                              \u4E0E \u201C--follow=name --retry\u201D \u529F\u80FD\u76F8\u540C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-n, --line=NUM                  \u8F93\u51FA\u6587\u4EF6\u7684\u5C3E\u90E8NUM\uFF08NUM\u4F4D\u6570\u5B57\uFF09\u884C\u5185\u5BB9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--pid=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u8FDB\u7A0B\u53F7</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">                  \u4E0E\u201C-f\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u5F53\u6307\u5B9A\u7684\u8FDB\u7A0B\u53F7\u7684\u8FDB\u7A0B\u7EC8\u6B62\u540E\uFF0C\u81EA\u52A8\u9000\u51FAtail\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-q, --quiet, --silent           \u5F53\u6709\u591A\u4E2A\u6587\u4EF6\u53C2\u6570\u65F6\uFF0C\u4E0D\u8F93\u51FA\u5404\u4E2A\u6587\u4EF6\u540D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--retry                         \u5373\u662F\u5728tail\u547D\u4EE4\u542F\u52A8\u65F6\uFF0C\u6587\u4EF6\u4E0D\u53EF\u8BBF\u95EE\u6216\u8005\u6587\u4EF6\u7A0D\u540E\u53D8\u5F97\u4E0D\u53EF\u8BBF\u95EE\uFF0C\u90FD\u59CB\u7EC8\u5C1D\u8BD5\u6253\u5F00\u6587\u4EF6\u3002\u4F7F\u7528\u6B64\u9009\u9879\u65F6\u9700\u8981\u4E0E\u9009\u9879\u201C--follow=name\u201D\u8FDE\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s, --sleep-interal=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u79D2\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">      \u4E0E\u201C-f\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u6307\u5B9A\u76D1\u89C6\u6587\u4EF6\u53D8\u5316\u65F6\u95F4\u9694\u7684\u79D2\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-v, --verbose                   \u5F53\u6709\u591A\u4E2A\u6587\u4EF6\u53C2\u6570\u65F6\uFF0C\u603B\u662F\u8F93\u51FA\u5404\u4E2A\u6587\u4EF6\u540D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--help                          \u663E\u793A\u6307\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version                       \u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\u5217\u8868\uFF1A\u6307\u5B9A\u8981\u663E\u793A\u5C3E\u90E8\u5185\u5BB9\u7684\u6587\u4EF6\u5217\u8868\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tail file </span><span style="color:#676E95;">#\uFF08\u663E\u793A\u6587\u4EF6file\u7684\u6700\u540E10\u884C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -n +20 file </span><span style="color:#676E95;">#\uFF08\u663E\u793A\u6587\u4EF6file\u7684\u5185\u5BB9\uFF0C\u4ECE\u7B2C20\u884C\u81F3\u6587\u4EF6\u672B\u5C3E\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -c 10 file </span><span style="color:#676E95;">#\uFF08\u663E\u793A\u6587\u4EF6file\u7684\u6700\u540E10\u4E2A\u5B57\u8282\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tail -25 mail.log </span><span style="color:#676E95;"># \u663E\u793A mail.log \u6700\u540E\u7684 25 \u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f mail.log </span><span style="color:#676E95;"># \u7B49\u540C\u4E8E--follow=descriptor\uFF0C\u6839\u636E\u6587\u4EF6\u63CF\u8FF0\u7B26\u8FDB\u884C\u8FFD\u8E2A\uFF0C\u5F53\u6587\u4EF6\u6539\u540D\u6216\u88AB\u5220\u9664\uFF0C\u8FFD\u8E2A\u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -F mail.log </span><span style="color:#676E95;"># \u7B49\u540C\u4E8E--follow=name --retry\uFF0C\u6839\u636E\u6587\u4EF6\u540D\u8FDB\u884C\u8FFD\u8E2A\uFF0C\u5E76\u4FDD\u6301\u91CD\u8BD5\uFF0C\u5373\u8BE5\u6587\u4EF6\u88AB\u5220\u9664\u6216\u6539\u540D\u540E\uFF0C\u5982\u679C\u518D\u6B21\u521B\u5EFA\u76F8\u540C\u7684\u6587\u4EF6\u540D\uFF0C\u4F1A\u7EE7\u7EED\u8FFD\u8E2A</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,13),o=[p];function c(i,r,t,d,b,A){return n(),a("div",null,o)}const h=s(e,[["render",c]]);export{u as __pageData,h as default};
