import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const g=JSON.parse('{"title":"vgdisplay","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/vgdisplay.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/vgdisplay.md"},p=e(`<h1 id="vgdisplay" tabindex="-1">vgdisplay <a class="header-anchor" href="#vgdisplay" aria-hidden="true">#</a></h1><p>\u663E\u793ALVM\u5377\u7EC4\u7684\u4FE1\u606F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>vgdisplay\u547D\u4EE4</strong> \u7528\u4E8E\u663E\u793ALVM\u5377\u7EC4\u7684\u4FE1\u606F\u3002\u5982\u679C\u4E0D\u6307\u5B9A&quot;\u5377\u7EC4&quot;\u53C2\u6570\uFF0C\u5219\u5206\u522B\u663E\u793A\u6240\u6709\u5377\u7EC4\u7684\u5C5E\u6027\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">vgdisplay</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-A\uFF1A\u4EC5\u663E\u793A\u6D3B\u52A8\u5377\u7EC4\u7684\u5C5E\u6027\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u4F7F\u7528\u77ED\u683C\u5F0F\u8F93\u51FA\u7684\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u5377\u7EC4\uFF1A\u8981\u663E\u793A\u5C5E\u6027\u7684\u5377\u7EC4\u540D\u79F0\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528vgdisplay\u547D\u4EE4\u663E\u793A\u5B58\u5728\u7684\u5377\u7EC4&quot;vg1000&quot;\u7684\u5C5E\u6027\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># vgdisplay vg1000     #\u663E\u793A\u5377\u7EC4&quot;vg1000&quot;\u7684\u5C5E\u6027</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">  --- Volume group ---  </span></span>
<span class="line"><span style="color:#A6ACCD;">  VG Name               vg1000  </span></span>
<span class="line"><span style="color:#A6ACCD;">......\u7701\u7565\u90E8\u5206\u8F93\u51FA\u5185\u5BB9......  </span></span>
<span class="line"><span style="color:#A6ACCD;">  free  PE / Size       50 / 200.00 MB  </span></span>
<span class="line"><span style="color:#A6ACCD;">  VG UUID  ICprwg-ZmhA-JKYF-WYuy-jNHa-AyCN-ZS5F7B</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,15),r=[p];function i(c,o,t,d,h,u){return n(),a("div",null,r)}const v=s(l,[["render",i]]);export{g as __pageData,v as default};