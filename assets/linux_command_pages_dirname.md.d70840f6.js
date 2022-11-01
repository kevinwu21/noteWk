import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const u=JSON.parse('{"title":"dirname","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/dirname.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/dirname.md"},p=e(`<h1 id="dirname" tabindex="-1">dirname <a class="header-anchor" href="#dirname" aria-hidden="true">#</a></h1><p>\u53BB\u9664\u6587\u4EF6\u540D\u4E2D\u7684\u975E\u76EE\u5F55\u90E8\u5206</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>dirname\u547D\u4EE4</strong> \u53BB\u9664\u6587\u4EF6\u540D\u4E2D\u7684\u975E\u76EE\u5F55\u90E8\u5206\uFF0C\u4EC5\u663E\u793A\u4E0E\u76EE\u5F55\u6709\u5173\u7684\u5185\u5BB9\u3002dirname\u547D\u4EE4\u8BFB\u53D6\u6307\u5B9A\u8DEF\u5F84\u540D\u4FDD\u7559\u6700\u540E\u4E00\u4E2A<code>/</code>\u53CA\u5176\u540E\u9762\u7684\u5B57\u7B26\uFF0C\u5220\u9664\u5176\u4ED6\u90E8\u5206\uFF0C\u5E76\u5199\u7ED3\u679C\u5230\u6807\u51C6\u8F93\u51FA\u3002\u5982\u679C\u6700\u540E\u4E00\u4E2A<code>/</code>\u540E\u65E0\u5B57\u7B26\uFF0Cdirname \u547D\u4EE4\u4F7F\u7528\u5012\u6570\u7B2C\u4E8C\u4E2A<code>/</code>\uFF0C\u5E76\u5FFD\u7565\u5176\u540E\u7684\u6240\u6709\u5B57\u7B26\u3002dirname \u548C basename \u901A\u5E38\u5728 shell \u5185\u90E8\u547D\u4EE4\u66FF\u6362\u4F7F\u7528\uFF0C\u4EE5\u6307\u5B9A\u4E00\u4E2A\u4E0E\u6307\u5B9A\u8F93\u5165\u6587\u4EF6\u540D\u7565\u6709\u5DEE\u5F02\u7684\u8F93\u51FA\u6587\u4EF6\u540D\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dirname</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u663E\u793A\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u53F7\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dirname //</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7ED3\u679C\u4E3A /</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dirname /a/b/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7ED3\u679C\u4E3A\uFF1A/a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dirname a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7ED3\u679C\u4E3A </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dirname a/b</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7ED3\u679C\u4E3A\u8DEF\u5F84\u540D a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,10),r=[p];function i(c,o,d,t,m,b){return a(),n("div",null,r)}const A=s(l,[["render",i]]);export{u as __pageData,A as default};
