import{_ as s,c as a,o as e,a as n}from"./app.f6b8b16b.js";const g=JSON.parse('{"title":"groups","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/groups.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/groups.md"},r=n(`<h1 id="groups" tabindex="-1">groups <a class="header-anchor" href="#groups" aria-hidden="true">#</a></h1><p>\u6253\u5370\u6307\u5B9A\u7528\u6237\u6240\u5728\u7EC4\u7684\u540D\u79F0\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">groups </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u6253\u5370\u6307\u5B9A\u7528\u6237\u6240\u5728\u7EC4\u7684\u540D\u79F0\u3002</li></ul><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">--help       \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version    \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>username\uFF08\u53EF\u9009\uFF09\uFF1A\u53EF\u4EE5\u662F\u4E00\u5230\u591A\u4E2A\uFF0C\u4E0D\u63D0\u4F9B\u65F6\u9ED8\u8BA4\u4E3A\u5F53\u524D\u7528\u6237\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE0\u8868\u793A\u6210\u529F\uFF0C\u8FD4\u56DE\u975E0\u503C\u8868\u793A\u5931\u8D25\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u663E\u793Alinux\u7528\u6237\u6240\u5C5E\u7684\u7EC4</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># groups linux</span></span>
<span class="line"><span style="color:#A6ACCD;">linux </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> linux adm dialout cdrom plugdev lpadmin admin sambashare</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li>\u8BE5\u547D\u4EE4\u7B49\u4EF7\u4E8E <code>id -Gn</code>\u3002</li><li>\u6BCF\u4E2A\u7528\u6237\u5C5E\u4E8E<code>/etc/passwd</code>\u4E2D\u6307\u5B9A\u7684\u4E00\u4E2A\u7EC4\u548C\u5728<code>/etc/group</code>\u4E2D\u6307\u5B9A\u7684\u5176\u4ED6\u7EC4\u3002</li><li>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>man -s 1 groups</code>\uFF0C<code>info coreutils &#39;groups invocation&#39;</code>\u3002</li></ol>`,17),o=[r];function p(i,c,d,t,h,u){return e(),a("div",null,o)}const b=s(l,[["render",p]]);export{g as __pageData,b as default};