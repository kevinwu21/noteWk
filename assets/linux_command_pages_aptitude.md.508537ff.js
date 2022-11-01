import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"aptitude","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/aptitude.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/aptitude.md"},p=e(`<h1 id="aptitude" tabindex="-1">aptitude <a class="header-anchor" href="#aptitude" aria-hidden="true">#</a></h1><p>Debian Linux\u7CFB\u7EDF\u4E2D\u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>aptitude\u547D\u4EE4</strong> \u4E0Eapt-get\u547D\u4EE4\u4E00\u6837\uFF0C\u90FD\u662FDebian Linux\u53CA\u5176\u884D\u751F\u7CFB\u7EDF\u4E2D\u529F\u80FD\u6781\u5176\u5F3A\u5927\u7684\u5305\u7BA1\u7406\u5DE5\u5177\u3002\u4E0Eapt-get\u4E0D\u540C\u7684\u662F\uFF0Captitude\u5728\u5904\u7406\u4F9D\u8D56\u95EE\u9898\u4E0A\u66F4\u4F73\u4E00\u4E9B\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0Captitude\u5728\u5220\u9664\u4E00\u4E2A\u5305\u65F6\uFF0C\u4F1A\u540C\u65F6\u5220\u9664\u672C\u8EAB\u6240\u4F9D\u8D56\u7684\u5305\u3002\u8FD9\u6837\uFF0C\u7CFB\u7EDF\u4E2D\u4E0D\u4F1A\u6B8B\u7559\u65E0\u7528\u7684\u5305\uFF0C\u6574\u4E2A\u7CFB\u7EDF\u66F4\u4E3A\u5E72\u51C0\u3002\u5B83\u901A\u8FC7\u6587\u672C\u64CD\u4F5C\u83DC\u5355\u548C\u547D\u4EE4\u4E24\u79CD\u65B9\u5F0F\u7BA1\u7406\u8F6F\u4EF6\u5305\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">aptitude</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-h\uFF1A\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u4EC5\u4E0B\u8F7D\u8F6F\u4EF6\u5305\uFF0C\u4E0D\u6267\u884C\u5B89\u88C5\u64CD\u4F5C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-P\uFF1A\u6BCF\u4E00\u6B65\u64CD\u4F5C\u90FD\u8981\u6C42\u786E\u8BA4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-y\uFF1A\u6240\u6709\u95EE\u9898\u90FD\u56DE\u7B54\u201Cyes\u201D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u663E\u793A\u9644\u52A0\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-u\uFF1A\u542F\u52A8\u65F6\u4E0B\u8F7D\u65B0\u7684\u8F6F\u4EF6\u5305\u5217\u8868\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u64CD\u4F5C\u547D\u4EE4\uFF1A\u7528\u6237\u7BA1\u7406\u8F6F\u4EF6\u5305\u7684\u64CD\u4F5C\u547D\u4EE4\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0B\u662F\u6211\u603B\u7ED3\u7684\u4E00\u4E9B\u5E38\u7528aptitude\u547D\u4EE4\uFF0C\u4EC5\u4F9B\u53C2\u8003\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">aptitude update            </span><span style="color:#676E95;"># \u66F4\u65B0\u53EF\u7528\u7684\u5305\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude upgrade           </span><span style="color:#676E95;"># \u5347\u7EA7\u53EF\u7528\u7684\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude dist-upgrade      </span><span style="color:#676E95;"># \u5C06\u7CFB\u7EDF\u5347\u7EA7\u5230\u65B0\u7684\u53D1\u884C\u7248</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude install pkgname   </span><span style="color:#676E95;"># \u5B89\u88C5\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude remove pkgname    </span><span style="color:#676E95;"># \u5220\u9664\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude purge pkgname     </span><span style="color:#676E95;"># \u5220\u9664\u5305\u53CA\u5176\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude search string     </span><span style="color:#676E95;"># \u641C\u7D22\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude show pkgname      </span><span style="color:#676E95;"># \u663E\u793A\u5305\u7684\u8BE6\u7EC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude clean             </span><span style="color:#676E95;"># \u5220\u9664\u4E0B\u8F7D\u7684\u5305\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">aptitude autoclean         </span><span style="color:#676E95;"># \u4EC5\u5220\u9664\u8FC7\u671F\u7684\u5305\u6587\u4EF6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u6587\u672C\u754C\u9762\u6A21\u5F0F\u4E2D\u4F7F\u7528 aptitude\u3002</p>`,14),t=[p];function r(i,c,o,d,u,h){return n(),a("div",null,t)}const A=s(l,[["render",r]]);export{m as __pageData,A as default};
