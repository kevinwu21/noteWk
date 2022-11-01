import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"cd","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/cd.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/cd.md"},p=l(`<h1 id="cd" tabindex="-1">cd <a class="header-anchor" href="#cd" aria-hidden="true">#</a></h1><p>\u5207\u6362\u7528\u6237\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-L</span><span style="color:#89DDFF;">|[</span><span style="color:#A6ACCD;">-P </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-e</span><span style="color:#89DDFF;">]]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55\u81F3<code>dir</code>\u3002\u5176\u4E2D<code>dir</code>\u7684\u8868\u793A\u6CD5\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\u3002</li><li>\u82E5\u53C2\u6570<code>dir</code>\u7701\u7565\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u4F7F\u7528\u8005\u7684shell\u53D8\u91CF<code>HOME</code>\u3002</li><li>\u5982\u679C<code>dir</code>\u6307\u5B9A\u4E3A<code>~</code>\u65F6\u8868\u793A\u4E3A\u4F7F\u7528\u8005\u7684shell\u53D8\u91CF<code>HOME</code>\uFF0C<code>.</code>\u8868\u793A\u5F53\u524D\u76EE\u5F55\uFF0C<code>..</code>\u8868\u793A\u5F53\u524D\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7\u76EE\u5F55\u3002</li><li>\u73AF\u5883\u53D8\u91CF<code>CDPATH</code>\u662F\u7531\u5192\u53F7\u5206\u5272\u7684\u4E00\u5230\u591A\u4E2A\u76EE\u5F55\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5E38\u53BB\u7684\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7\u52A0\u5165\u5230<code>CDPATH</code>\u4EE5\u4FBF\u65B9\u4FBF\u8BBF\u95EE\u5B83\u4EEC\uFF1B\u5982\u679C<code>dir</code>\u4EE5<code>/</code>\u5F00\u5934\u90A3\u4E48<code>CDPATH</code>\u4E0D\u4F1A\u88AB\u4F7F\u7528\u3002</li><li>\u5F53<code>shopt</code>\u9009\u9879<code>cdable_vars</code>\u6253\u5F00\u65F6\uFF0C\u5982\u679C<code>dir</code>\u5728<code>CDPATH</code>\u53CA\u5F53\u524D\u76EE\u5F55\u4E0B\u5747\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u4F1A\u628A\u5B83\u5F53\u4F5C\u53D8\u91CF\uFF0C\u8BFB\u53D6\u5B83\u7684\u503C\u4F5C\u4E3A\u8981\u8FDB\u5165\u7684\u76EE\u5F55\u3002</li></ul><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>dir\uFF08\u53EF\u9009\uFF09\uFF1A\u6307\u5B9A\u8981\u5207\u6362\u5230\u7684\u76EE\u5F55\u3002</p><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-L \uFF08\u9ED8\u8BA4\u503C\uFF09\u5982\u679C\u8981\u5207\u6362\u5230\u7684\u76EE\u6807\u76EE\u5F55\u662F\u4E00\u4E2A\u7B26\u53F7\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5207\u6362\u5230\u7B26\u53F7\u8FDE\u63A5\u7684\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-P \u5982\u679C\u8981\u5207\u6362\u5230\u7684\u76EE\u6807\u76EE\u5F55\u662F\u4E00\u4E2A\u7B26\u53F7\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5207\u6362\u5230\u5B83\u6307\u5411\u7684\u7269\u7406\u4F4D\u7F6E\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-  \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u5C06\u88AB\u5207\u6362\u5230\u73AF\u5883\u53D8\u91CFOLDPWD\u6240\u8868\u793A\u7684\u76EE\u5F55\uFF0C\u4E5F\u5C31\u662F\u524D\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u72B6\u6001\u4E3A\u6210\u529F\u9664\u975E\u65E0\u6CD5\u8FDB\u5165\u6307\u5B9A\u7684\u76EE\u5F55\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u8FDB\u5165\u7528\u6237\u4E3B\u76EE\u5F55\uFF1B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /  </span><span style="color:#676E95;"># \u8FDB\u5165\u6839\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u8FDB\u5165\u7528\u6237\u4E3B\u76EE\u5F55\uFF1B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ..  </span><span style="color:#676E95;"># \u8FD4\u56DE\u4E0A\u7EA7\u76EE\u5F55\uFF08\u82E5\u5F53\u524D\u76EE\u5F55\u4E3A\u201C/\u201C\uFF0C\u5219\u6267\u884C\u5B8C\u540E\u8FD8\u5728\u201C/&quot;\uFF1B&quot;..&quot;\u4E3A\u4E0A\u7EA7\u76EE\u5F55\u7684\u610F\u601D\uFF09\uFF1B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ../..  </span><span style="color:#676E95;"># \u8FD4\u56DE\u4E0A\u4E24\u7EA7\u76EE\u5F55\uFF1B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">$  </span><span style="color:#676E95;"># \u628A\u4E0A\u4E2A\u547D\u4EE4\u7684\u53C2\u6570\u4F5C\u4E3Acd\u53C2\u6570\u4F7F\u7528\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5173\u4E8E\u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55\u7684\u8BF4\u660E</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> -</span></span>
<span class="line"><span style="color:#676E95;"># \u547D\u4EE4\u4F1A\u9996\u5148\u663E\u793A\u8981\u5207\u6362\u5230\u7684\u76EE\u6807\u76EE\u5F55\uFF0C\u7136\u540E\u518D\u8FDB\u5165\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">OLDPWD</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"># \u547D\u4EE4\u4F1A\u76F4\u63A5\u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5173\u4E8E<code>CDPATH</code></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u684C\u9762\u6587\u4EF6\u5939\u4F5C\u4E3ACDPATH\u7684\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">CDPATH=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~/Desktop</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;"># \u5047\u8BBE\u6211\u4EEC\u63A5\u4E0B\u6765\u8981\u6F14\u793A\u6D89\u53CA\u5230\u7684\u8DEF\u5F84~\u548C~/Desktop\u4E0B\u6CA1\u6709test3\u6587\u4EF6\u5939\uFF0C\u73B0\u5728\u65B0\u5EFA\u5B83\u4EEC\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/test3</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Desktop/test3</span></span>
<span class="line"><span style="color:#676E95;"># \u8FDB\u5165~\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span></span>
<span class="line"><span style="color:#676E95;"># \u8FDB\u5165test3\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> test3</span></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u540E\u663E\u793A~/Desktop/test3\u5E76\u8FDB\u5165\u8BE5\u76EE\u5F55\uFF0C\u800C\u4E0D\u662F~\u76EE\u5F55\u7684test3\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679CCDPATH\u5B58\u5728\u503C\uFF0C\u90A3\u4E48\u4F18\u5148\u5728CDPATH\u4E2D\u67E5\u627E\u5E76\u8FDB\u5165\u7B2C\u4E00\u4E2A\u5339\u914D\u6210\u529F\u7684\uFF0C\u5982\u679C\u5168\u90E8\u5931\u8D25\u90A3\u4E48\u6700\u540E\u5C1D\u8BD5\u5F53\u524D\u76EE\u5F55\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5173\u4E8E<code>cdable_vars</code></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u6253\u5F00\u9009\u9879\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">shopt</span><span style="color:#A6ACCD;"> -s cdable_vars</span></span>
<span class="line"><span style="color:#676E95;"># \u5047\u8BBE\u5F53\u524D\u8DEF\u5F84\u4EE5\u53CACDPATH\u6CA1\u6709\u540D\u4E3Anew_var\u7684\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">new_var=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~/Desktop</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;"># \u5C1D\u8BD5\u8FDB\u5165\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> new_var</span></span>
<span class="line"><span style="color:#676E95;"># \u5173\u95ED\u9009\u9879\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">shopt</span><span style="color:#A6ACCD;"> -u cdable_vars</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li><p>\u8BE5\u547D\u4EE4\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>help</code>\u547D\u4EE4\u3002</p></li><li><p>\u5EFA\u8BAE\u60A8\u5728\u7F16\u5199\u811A\u672C\u7684\u8FC7\u7A0B\u4E2D\u5982\u6709\u5FC5\u8981\u4F7F\u7528<code>cd</code>\u547D\u4EE4\u65F6\uFF0C\u8BF7\u589E\u52A0\u5FC5\u8981\u7684\u6CE8\u91CA\u4EE5\u7528\u4E8E\u63D0\u9192\u9605\u8BFB\u8005\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4EE5\u514D\u51FA\u73B0\u8BF8\u5982<code>\u627E\u4E0D\u5230\u6587\u4EF6</code>\u8FD9\u7C7B\u95EE\u9898\u7684\u53D1\u751F\u3002</p></li></ol>`,22),c=[p];function o(r,i,t,d,b,A){return a(),n("div",null,c)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
