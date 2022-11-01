import{_ as a,c as s,o as l,a as e}from"./app.f6b8b16b.js";const b=JSON.parse('{"title":"tailf","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/tailf.md","lastUpdated":1666509709000}'),n={name:"linux/command/pages/tailf.md"},i=e(`<h1 id="tailf" tabindex="-1">tailf <a class="header-anchor" href="#tailf" aria-hidden="true">#</a></h1><p>\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u6307\u5B9A\u6587\u4EF6\u7684\u672B\u5C3E\u82E5\u5E72\u884C\u5185\u5BB9\uFF0C\u901A\u5E38\u7528\u4E8E\u65E5\u5FD7\u6587\u4EF6\u7684\u8DDF\u8E2A\u8F93\u51FA</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p>tailf\u547D\u4EE4\u51E0\u4E4E\u7B49\u540C\u4E8E<code>tail -f</code>\uFF0C\u4E25\u683C\u8BF4\u6765\u5E94\u8BE5\u4E0E<code>tail --follow=name</code>\u66F4\u76F8\u4F3C\u4E9B\u3002\u5F53\u6587\u4EF6\u6539\u540D\u4E4B\u540E\u5B83\u4E5F\u80FD\u7EE7\u7EED\u8DDF\u8E2A\uFF0C\u7279\u522B\u9002\u5408\u4E8E\u65E5\u5FD7\u6587\u4EF6\u7684\u8DDF\u8E2A\uFF08follow the growth of a log file\uFF09\u3002\u4E0E<code>tail -f</code>\u4E0D\u540C\u7684\u662F\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u589E\u957F\uFF0C\u5B83\u4E0D\u4F1A\u53BB\u8BBF\u95EE\u78C1\u76D8\u6587\u4EF6\u3002tailf\u7279\u522B\u9002\u5408\u90A3\u4E9B\u4FBF\u643A\u673A\u4E0A\u8DDF\u8E2A\u65E5\u5FD7\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u80FD\u7701\u7535\uFF0C\u56E0\u4E3A\u51CF\u5C11\u4E86\u78C1\u76D8\u8BBF\u95EE\u3002tailf\u547D\u4EE4\u4E0D\u662F\u4E2A\u811A\u672C\uFF0C\u800C\u662F\u4E00\u4E2A\u7528C\u4EE3\u7801\u7F16\u8BD1\u540E\u7684\u4E8C\u8FDB\u5236\u6267\u884C\u6587\u4EF6\uFF0C\u67D0\u4E9BLinux\u5B89\u88C5\u4E4B\u540E\u6CA1\u6709\u8FD9\u4E2A\u547D\u4EE4\u3002</p><p>tailf\u548Ctail -f\u7684\u533A\u522B</p><ol><li>tailf \u603B\u662F\u4ECE\u6587\u4EF6\u5F00\u5934\u4E00\u70B9\u4E00\u70B9\u7684\u8BFB\uFF0C \u800Ctail -f \u5219\u662F\u4ECE\u6587\u4EF6\u5C3E\u90E8\u5F00\u59CB\u8BFB</li><li>tailf check\u6587\u4EF6\u589E\u957F\u65F6\uFF0C\u4F7F\u7528\u7684\u662F\u6587\u4EF6\u540D\uFF0C \u7528stat\u7CFB\u7EDF\u8C03\u7528\uFF1B\u800Ctail -f \u5219\u4F7F\u7528\u7684\u662F\u5DF2\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF1B \u6CE8\uFF1Atail \u4E5F\u53EF\u4EE5\u505A\u5230\u7C7B\u4F3C\u8DDF\u8E2A\u6587\u4EF6\u540D\u7684\u6548\u679C\uFF1B \u4F46\u662Ftail\u603B\u662F\u4F7F\u7528fstat\u7CFB\u7EDF\u8C03\u7528\uFF0C\u800C\u4E0D\u662Fstat\u7CFB\u7EDF\u8C03\u7528\uFF1B\u7ED3\u679C\u5C31\u662F\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53tail\u7684\u6587\u4EF6\u88AB\u5077\u5077\u5220\u9664\u65F6\uFF0Ctail\u662F\u4E0D\u77E5\u9053\u7684\uFF0C\u800Ctailf\u662F\u77E5\u9053\u7684\u3002</li></ol><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tailf logfile </span><span style="color:#676E95;"># \u52A8\u6001\u8DDF\u8E2A\u65E5\u5FD7\u6587\u4EF6logfile\uFF0C\u6700\u521D\u7684\u65F6\u5019\u6253\u5370\u6587\u4EF6\u7684\u6700\u540E10\u884C\u5185\u5BB9\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-n, --lines NUMBER  </span><span style="color:#676E95;"># \u8F93\u51FA\u6700\u540E\u6570\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">-NUMBER             </span><span style="color:#676E95;"># \u4E0ENUMBER\u76F8\u540C \`-n NUMBER&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">-V, --version       </span><span style="color:#676E95;"># \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">-h, --help          </span><span style="color:#676E95;"># \u663E\u793A\u5E2E\u52A9\u5E76\u9000\u51FA</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u76EE\u6807\uFF1A\u6307\u5B9A\u76EE\u6807\u65E5\u5FD7\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tailf log/WEB.LOG </span></span>
<span class="line"><span style="color:#A6ACCD;">tailf -n 5 log2014.log   </span><span style="color:#676E95;"># \u663E\u793A\u6587\u4EF6\u6700\u540E5\u884C\u5185\u5BB9</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,14),t=[i];function p(r,c,o,d,h,f){return l(),s("div",null,t)}const m=a(n,[["render",p]]);export{b as __pageData,m as default};
