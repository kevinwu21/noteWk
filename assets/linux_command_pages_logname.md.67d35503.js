import{_ as e,c as a,o as s,a as n}from"./app.f6b8b16b.js";const g=JSON.parse('{"title":"logname","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/logname.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/logname.md"},o=n(`<h1 id="logname" tabindex="-1">logname <a class="header-anchor" href="#logname" aria-hidden="true">#</a></h1><p>\u6253\u5370\u5F53\u524D\u7EC8\u7AEF\u767B\u5F55\u7528\u6237\u7684\u540D\u79F0\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">logname </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u6253\u5370\u5F53\u524D\u7EC8\u7AEF\u767B\u5F55\u7528\u6237\u7684\u540D\u79F0\u3002</li></ul><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">--help       \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version    \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE0\u8868\u793A\u6210\u529F\uFF0C\u8FD4\u56DE\u975E0\u503C\u8868\u793A\u5931\u8D25\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># logname</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li><p>\u6CE8\u610F\u533A\u5206 <code>whoami</code> \u548C <code>logname</code> \u8FD9\u4E24\u4E2A\u547D\u4EE4\uFF1B\u6BD4\u5982\u6211\u4EEC\u4EE5\u7528\u6237 <code>root</code> \u6253\u5F00\u7684\u7EC8\u7AEF\uFF0C\u7136\u540E\u5207\u6362\u5230\u4E86\u7528\u6237 <code>user2</code>\u3002\u6B64\u65F6\uFF0C <code>whoami</code>\u8FD4\u56DE\u7684\u662F\u5F53\u524D\u7528\u6237 <code>user2</code>, <code>logname</code> \u8FD4\u56DE\u7684\u662F <code>root</code>\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u884C\u5B9E\u8DF5\u9A8C\u8BC1\u4E00\u4E0B\u3002</p></li><li><p>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>man -s 1 logname</code>\uFF0C<code>info coreutils &#39;logname invocation&#39;</code>\u3002</p></li></ol>`,14),c=[o];function r(i,d,p,t,h,u){return s(),a("div",null,c)}const b=e(l,[["render",r]]);export{g as __pageData,b as default};
