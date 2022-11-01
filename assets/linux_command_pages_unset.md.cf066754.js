import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"unset","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/unset.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/unset.md"},p=l(`<h1 id="unset" tabindex="-1">unset <a class="header-anchor" href="#unset" aria-hidden="true">#</a></h1><p>\u5220\u9664\u6307\u5B9A\u7684shell\u53D8\u91CF\u6216\u51FD\u6570\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-f</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-v</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-n</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">name ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u5220\u9664\u4E00\u5230\u591A\u4E2Ashell\u53D8\u91CF\uFF08\u4E0D\u5305\u62EC\u53EA\u8BFB\u53D8\u91CF\uFF09\u3002</li><li>\u5220\u9664\u4E00\u5230\u591A\u4E2Ashell\u51FD\u6570\u3002</li><li>\u5220\u9664\u4E00\u5230\u591A\u4E2A\u5177\u6709\u5F15\u7528\u5C5E\u6027\u7684\u53D8\u91CF\uFF08\u5982\u679C-n\u9009\u9879\u5B58\u5728\uFF09\u3002</li></ul><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u4EC5\u5220\u9664\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u4EC5\u5220\u9664\u53D8\u91CF\uFF08\u4E0D\u5305\u62EC\u53EA\u8BFB\u53D8\u91CF\uFF09\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u5220\u9664\u5177\u6709\u5F15\u7528\u5C5E\u6027\u7684\u53D8\u91CF\u540D\uFF08\u5982\u679C\u8BE5\u9009\u9879\u5B58\u5728\uFF09\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>name\uFF08\u53EF\u9009\uFF09\uFF1A\u8981\u5220\u9664\u7684\u53D8\u91CF\u6216\u51FD\u6570\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6210\u529F\u9664\u975E\u9009\u9879\u9519\u8BEF\u6216\u8981\u5220\u9664\u7684\u53D8\u91CF\u6216\u51FD\u6570\u6709\u53EA\u8BFB\u5C5E\u6027\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u5220\u9664\u53D8\u91CF\u3002</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> paper_size=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B5</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> -v paper_size</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u5220\u9664\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">show_result(){</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Last Command Return: $?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> -f show_result</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u5F53\u4E0D\u6307\u5B9A\u9009\u9879\u65F6\uFF0C\u4F18\u5148\u5220\u9664\u53D8\u91CF\uFF0C\u5982\u679C\u5931\u8D25\u5219\u5220\u9664\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -i aa=100</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">aa(){</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> aa</span></span>
<span class="line"><span style="color:#676E95;"># \u53D8\u91CF&#39;aa&#39;\u5DF2\u88AB\u5220\u9664\u3002</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p aa</span></span>
<span class="line"><span style="color:#676E95;"># \u51FD\u6570&#39;aa&#39;\u5B58\u5728\u3002</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -F</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep aa</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u6F14\u793Aunset\u4F7F\u7528-n\u9009\u9879\uFF0Cname\u6307\u5B9A\u4E86\u5F15\u7528\u53D8\u91CF\u65F6\u7684\u60C5\u51B5\u3002</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> a=3</span></span>
<span class="line"><span style="color:#676E95;"># \u5B9A\u4E49\u5F15\u7528\u53D8\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -n b=a</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5C5E\u6027\uFF0C\u663E\u793Adeclare -n b=&quot;a&quot;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p b</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A3</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793Aa</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${!</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"># \u6307\u5B9A-n\u9009\u9879\u65F6</span></span>
<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> -n b</span></span>
<span class="line"><span style="color:#676E95;"># \u5F15\u7528\u53D8\u91CFb\u5DF2\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p b</span></span>
<span class="line"><span style="color:#676E95;"># \u88AB\u5F15\u7528\u7684\u53D8\u91CFa\u672A\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u6F14\u793Aunset\u4E0D\u4F7F\u7528-n\u9009\u9879\uFF0Cname\u6307\u5B9A\u4E86\u5F15\u7528\u53D8\u91CF\u65F6\u7684\u60C5\u51B5\u3002</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> a=3</span></span>
<span class="line"><span style="color:#676E95;"># \u5B9A\u4E49\u5F15\u7528\u53D8\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -n b=a</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5C5E\u6027\uFF0C\u663E\u793Adeclare -n b=&quot;a&quot;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p b</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A3</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793Aa</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${!</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"># \u4E0D\u6307\u5B9A-n\u9009\u9879\u65F6</span></span>
<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#676E95;"># \u5F15\u7528\u53D8\u91CFb\u672A\u88AB\u5220\u9664\uFF0C\u663E\u793Adeclare -n b=&quot;a&quot;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p b</span></span>
<span class="line"><span style="color:#676E95;"># \u88AB\u5F15\u7528\u7684\u53D8\u91CFa\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> -p a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li>\u8BE5\u547D\u4EE4\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>help</code>\u547D\u4EE4\u3002</li></ol>`,20),r=[p];function c(o,t,i,b,A,u){return a(),n("div",null,r)}const C=s(e,[["render",c]]);export{d as __pageData,C as default};