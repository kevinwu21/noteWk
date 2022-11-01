import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const v=JSON.parse('{"title":"vgscan","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/vgscan.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/vgscan.md"},p=e(`<h1 id="vgscan" tabindex="-1">vgscan <a class="header-anchor" href="#vgscan" aria-hidden="true">#</a></h1><p>\u626B\u63CF\u5E76\u663E\u793A\u7CFB\u7EDF\u4E2D\u7684\u5377\u7EC4</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>vgscan\u547D\u4EE4</strong> \u67E5\u627E\u7CFB\u7EDF\u4E2D\u5B58\u5728\u7684LVM\u5377\u7EC4\uFF0C\u5E76\u663E\u793A\u627E\u5230\u7684\u5377\u7EC4\u5217\u8868\u3002vgscan\u547D\u4EE4\u4EC5\u663E\u793A\u627E\u5230\u7684\u5377\u7EC4\u7684\u540D\u79F0\u548CLVM\u5143\u6570\u636E\u7C7B\u578B\uFF0C\u8981\u5F97\u5230\u5377\u7EC4\u7684\u8BE6\u7EC6\u4FE1\u606F\u9700\u8981\u4F7F\u7528vgdisplay\u547D\u4EE4\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">vgscan</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u8C03\u8BD5\u6A21\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--ignorerlockingfailure\uFF1A\u5FFD\u7565\u9501\u5B9A\u5931\u8D25\u7684\u9519\u8BEF\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528vgscan\u547D\u4EE4\u626B\u63CF\u7CFB\u7EDF\u4E2D\u6240\u6709\u7684\u5377\u7EC4\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># vgscan     #\u626B\u63CF\u5E76\u663E\u793ALVM\u5377\u7EC4\u5217\u8868</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">Found volume group </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vg2000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> using metadata </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> lvm2  </span></span>
<span class="line"><span style="color:#A6ACCD;">Found volume group </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vg1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> using metadata </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> lvm2 </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8BF4\u660E\uFF1A\u672C\u4F8B\u4E2D\uFF0Cvgscan\u6307\u4EE4\u627E\u5230\u4E86\u4E24\u4E2ALVM2\u5377\u7EC4&quot;vg1000&quot;\u548C&quot;vg2000&quot;\u3002</p>`,14),o=[p];function c(r,t,i,d,u,h){return n(),a("div",null,o)}const m=s(l,[["render",c]]);export{v as __pageData,m as default};
