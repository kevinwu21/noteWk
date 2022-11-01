import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"cal","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/cal.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/cal.md"},p=l(`<h1 id="cal" tabindex="-1">cal <a class="header-anchor" href="#cal" aria-hidden="true">#</a></h1><p>\u663E\u793A\u5F53\u524D\u65E5\u5386\u6216\u6307\u5B9A\u65E5\u671F\u7684\u65E5\u5386</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>cal\u547D\u4EE4</strong> \u7528\u4E8E\u663E\u793A\u5F53\u524D\u65E5\u5386\uFF0C\u6216\u8005\u6307\u5B9A\u65E5\u671F\u7684\u65E5\u5386\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u53C2\u6570\uFF0C\u5219\u663E\u793A\u5F53\u524D\u6708\u4EFD\u3002</p><p>\u4E00\u4E2A\u5355\u4E00\u7684\u53C2\u6570\u6307\u5B9A\u8981\u663E\u793A\u7684\u5E74\u4EFD (1 - 9999) ; \u6CE8\u610F\u5E74\u4EFD\u5FC5\u987B\u88AB\u5B8C\u5168\u5730\u6307\u5B9A: cal 89 \u4E0D\u4F1A \u663E\u793A1989\u5E74\u7684\u65E5\u5386. \u4E24\u4E2A\u53C2\u6570\u8868\u793A\u6708\u4EFD (1 - 12) \u548C\u5E74\u4EFD. \u5982\u679C\u6CA1\u6709\u6307\u5B9A\u53C2\u6570, \u5219\u663E\u793A\u5F53\u524D\u6708\u4EFD\u7684\u65E5\u5386.</p><p>\u4E00\u5E74\u4ECEJan 1 (1 \u6708 1 \u65E5) \u5F00\u59CB.</p><p>\u683C\u91CC\u9AD8\u5229\u5386\u6CD5\u6539\u9769(Gregorian Reformation)\u88AB\u8BA4\u4E3A\u53D1\u751F\u4E8E 1752 \u5E74 9 \u6708 3 \u65E5. \u5728\u6B64\u4E4B\u524D, \u591A\u6570\u56FD\u5BB6\u5DF2\u7ECF\u8BA4\u53EF\u8FD9\u9879\u6539\u9769(\u5C3D\u7BA1\u6709\u4E00\u4E9B\u76F4\u5230 20 \u4E16\u7EAA\u521D\u624D\u8BA4\u53EF\u5B83). \u90A3\u5929\u4E4B\u540E\u7684 10 \u5929\u5728\u8FD9\u9879\u6539\u9769\u88AB\u7565\u53BB\u4E86, \u6240\u4EE5\u90A3\u4E2A\u6708\u7684\u65E5\u5386\u6709\u70B9\u4E0D\u592A\u5BFB\u5E38.</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">cal </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> -mjy </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> \u6708\u4EFD </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> \u5E74\u4EFD </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-l </span><span style="color:#676E95;"># \u663E\u793A\u5355\u6708\u8F93\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-3 </span><span style="color:#676E95;"># \u663E\u793A\u4E34\u8FD1\u4E09\u4E2A\u6708\u7684\u65E5\u5386\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s </span><span style="color:#676E95;"># \u5C06\u661F\u671F\u65E5\u4F5C\u4E3A\u6708\u7684\u7B2C\u4E00\u5929\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-m </span><span style="color:#676E95;"># \u663E\u793A\u661F\u671F\u4E00\u4F5C\u4E3A\u4E00\u5468\u7684\u7B2C\u4E00\u5929..  (\u7F3A\u7701\u4E3A\u661F\u671F\u65E5.)</span></span>
<span class="line"><span style="color:#A6ACCD;">-j </span><span style="color:#676E95;"># \u663E\u793A\u5112\u7565\u5386\u7684(Julian)\u65E5\u671F (\u4EE5 1 \u4E3A\u57FA\u7684\u5929\u6570, \u4ECE 1 \u6708 1 \u65E5\u5F00\u59CB\u8BA1\u6570) .</span></span>
<span class="line"><span style="color:#A6ACCD;">-y </span><span style="color:#676E95;"># \u663E\u793A\u5F53\u524D\u5E74\u4EFD\u7684\u65E5\u5386..</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6708\uFF1A\u6307\u5B9A\u6708\u4EFD\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E74\uFF1A\u6307\u5B9A\u5E74\u4EFD\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5355\u72EC\u6267\u884Ccal\u547D\u4EE4\u4F1A\u6253\u5370\u51FA\u65E5\u5386\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># cal</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5341\u4E8C\u6708 2013     </span></span>
<span class="line"><span style="color:#A6ACCD;">\u65E5 \u4E00 \u4E8C \u4E09 \u56DB \u4E94 \u516D</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1  2  3  4  5  6  7</span></span>
<span class="line"><span style="color:#A6ACCD;"> 8  9 10 11 12 13 14</span></span>
<span class="line"><span style="color:#A6ACCD;">15 16 17 18 19 20 21</span></span>
<span class="line"><span style="color:#A6ACCD;">22 23 24 25 26 27 28</span></span>
<span class="line"><span style="color:#A6ACCD;">29 30 31</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># cal -j</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5341\u4E8C\u6708 2013        </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u65E5   \u4E00   \u4E8C   \u4E09   \u56DB   \u4E94   \u516D</span></span>
<span class="line"><span style="color:#A6ACCD;">335 336 337 338 339 340 341</span></span>
<span class="line"><span style="color:#A6ACCD;">342 343 344 345 346 347 348</span></span>
<span class="line"><span style="color:#A6ACCD;">349 350 351 352 353 354 355</span></span>
<span class="line"><span style="color:#A6ACCD;">356 357 358 359 360 361 362</span></span>
<span class="line"><span style="color:#A6ACCD;">363 364 365</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># cal -3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      \u4E5D\u6708 2021               \u5341\u6708 2021               \u5341\u4E00\u6708 2021</span></span>
<span class="line"><span style="color:#A6ACCD;">\u65E5  \u4E00 \u4E8C  \u4E09 \u56DB \u4E94  \u516D  \u65E5 \u4E00 \u4E8C \u4E09  \u56DB  \u4E94 \u516D  \u65E5 \u4E00 \u4E8C \u4E09 \u56DB \u4E94 \u516D</span></span>
<span class="line"><span style="color:#A6ACCD;">          1  2  3  4                  1  2      1  2  3  4  5  6</span></span>
<span class="line"><span style="color:#A6ACCD;"> 5  6  7  8  9 10 11   3  4  5  6  7  8  9   7  8  9 10 11 12 13</span></span>
<span class="line"><span style="color:#A6ACCD;">12 13 14 15 16 17 18  10 11 12 13 14 15 16  14 15 16 17 18 19 20</span></span>
<span class="line"><span style="color:#A6ACCD;">19 20 21 22 23 24 25  17 18 19 20 21 22 23  21 22 23 24 25 26 27</span></span>
<span class="line"><span style="color:#A6ACCD;">26 27 28 29 30        24 25 26 27 28 29 30  28 29 30</span></span>
<span class="line"><span style="color:#A6ACCD;">                      31</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,18),c=[p];function r(o,i,t,b,d,u){return a(),n("div",null,c)}const m=s(e,[["render",r]]);export{C as __pageData,m as default};