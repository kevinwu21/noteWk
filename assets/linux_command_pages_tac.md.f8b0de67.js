import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"tac","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/tac.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/tac.md"},p=l(`<h1 id="tac" tabindex="-1">tac <a class="header-anchor" href="#tac" aria-hidden="true">#</a></h1><p>\u8FDE\u63A5\u591A\u4E2A\u6587\u4EF6\u5E76\u4EE5\u884C\u4E3A\u5355\u4F4D\u53CD\u5411\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tac </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FILE</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u6309\u884C\u4E3A\u5355\u4F4D\u53CD\u5411\u663E\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709\u6587\u4EF6\u6216\u6587\u4EF6\u4E3A<code>-</code>\u5219\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u3002</li><li>\u5904\u7406\u591A\u4E2A\u6587\u4EF6\u65F6\uFF0C\u4F9D\u6B21\u5C06\u6BCF\u4E2A\u6587\u4EF6\u53CD\u5411\u663E\u793A\uFF0C\u800C\u4E0D\u662F\u5C06\u6240\u6709\u6587\u4EF6\u8FDE\u5728\u4E00\u8D77\u518D\u53CD\u5411\u663E\u793A\u3002</li></ul><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>FILE\uFF08\u53EF\u9009\uFF09\uFF1A\u8981\u5904\u7406\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4E3A\u4E00\u6216\u591A\u4E2A\u3002</p><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u957F\u9009\u9879\u4E0E\u77ED\u9009\u9879\u7B49\u4EF7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-b, --before              \u5728\u4E4B\u524D\u800C\u4E0D\u662F\u4E4B\u540E\u8FDE\u63A5\u5206\u9694\u7B26\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-r, --regex               \u5C06\u5206\u9694\u7B26\u4F5C\u4E3A\u57FA\u7840\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08BRE\uFF09\u5904\u7406\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s, --separator=STRING    \u4F7F\u7528STRING\u4F5C\u4E3A\u5206\u9694\u7B26\u4EE3\u66FF\u9ED8\u8BA4\u7684\u6362\u884C\u7B26\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--help                    \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version                 \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u72B6\u6001\u4E3A\u6210\u529F\u9664\u975E\u7ED9\u51FA\u4E86\u975E\u6CD5\u9009\u9879\u6216\u975E\u6CD5\u53C2\u6570\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u9009\u81EA\u5B98\u65B9info\u6587\u6863\u7684\u4F8B\u5B50\uFF1A</span></span>
<span class="line"><span style="color:#676E95;"># \u4E00\u4E2A\u63A5\u7740\u4E00\u4E2A\u5B57\u7B26\u7684\u53CD\u8F6C\u4E00\u4E2A\u6587\u4EF6\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">tac -r -s </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x\\|[^x]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> test.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5173\u4E8E-b\u9009\u9879\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">seq 1 3 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tac</span></span>
<span class="line"><span style="color:#676E95;"># \u8F93\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528-b\u9009\u9879\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">seq 1 3 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tac -b</span></span>
<span class="line"><span style="color:#676E95;"># \u8F93\u51FA\uFF0C\u6CE8\u610F21\u540E\u9762\u6CA1\u6709\u6362\u884C\u7B26\uFF1A</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">21</span></span>
<span class="line"><span style="color:#676E95;"># \u524D\u4E00\u4E2A\u4F8B\u5B50\u76F8\u5F53\u4E8E\u5C06 &#39;1\\n2\\n3\\n&#39; \u8F6C\u6362\u4E3A &#39;3\\n2\\n1\\n&#39;</span></span>
<span class="line"><span style="color:#676E95;"># \u524D\u4E00\u4E2A\u4F8B\u5B50\u76F8\u5F53\u4E8E\u5C06 &#39;1\\n2\\n3\\n&#39; \u8F6C\u6362\u4E3A &#39;\\n\\n3\\n21&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>man -s 1 tac</code>\u6216<code>info coreutils &#39;tac invocation&#39;</code>\u3002</li><li>\u5173\u4E8E\u57FA\u7840\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08BRE\uFF09\u7684\u5185\u5BB9\uFF0C\u8BE6\u89C1<code>man -s 1 grep</code>\u7684<code>REGULAR EXPRESSIONS</code>\u6BB5\u843D\u3002</li></ol>`,16),c=[p];function r(i,o,t,d,b,u){return a(),n("div",null,c)}const A=s(e,[["render",r]]);export{m as __pageData,A as default};
