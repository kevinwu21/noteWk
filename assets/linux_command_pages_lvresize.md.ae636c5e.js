import{_ as s,c as e,o as a,a as l}from"./app.f6b8b16b.js";const b=JSON.parse('{"title":"lvresize","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/lvresize.md","lastUpdated":1666509709000}'),n={name:"linux/command/pages/lvresize.md"},r=l(`<h1 id="lvresize" tabindex="-1">lvresize <a class="header-anchor" href="#lvresize" aria-hidden="true">#</a></h1><p>\u8C03\u6574\u903B\u8F91\u5377\u7A7A\u95F4\u5927\u5C0F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>lvresize\u547D\u4EE4</strong> \u7528\u4E8E\u8C03\u6574LVM\u903B\u8F91\u5377\u7684\u7A7A\u95F4\u5927\u5C0F\uFF0C\u53EF\u4EE5\u589E\u5927\u7A7A\u95F4\u548C\u7F29\u5C0F\u7A7A\u95F4\u3002\u4F7F\u7528lvresize\u547D\u4EE4\u8C03\u6574\u903B\u8F91\u5377\u7A7A\u95F4\u5927\u5C0F\u548C\u7F29\u5C0F\u7A7A\u95F4\u65F6\u9700\u8981\u8C28\u614E\uFF0C\u56E0\u4E3A\u5B83\u6709\u53EF\u80FD\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lvresize</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-L\uFF1A\u6307\u5B9A\u903B\u8F91\u5377\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u201CkKmMgGtT\u201D\u5B57\u8282\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\uFF1A\u6307\u5B9A\u903B\u8F91\u5377\u7684\u5927\u5C0F\uFF08LE\u6570\uFF09\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u903B\u8F91\u5377\uFF1A\u6307\u5B9A\u8981\u5220\u9664\u7684\u903B\u8F91\u5377\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528lvresize\u547D\u4EE4\u8C03\u6574\u6700\u5927\u7684\u903B\u8F91\u5377\u5927\u5C0F\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># lvresize -L +200M /dev/vg1000/lvol0     #\u5C06\u903B\u8F91\u5377\u7A7A\u95F4\u589E\u52A0200M</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">Extending logical volume lvol0 to 280.00 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">Logical volume lvol0 successfully resized</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),p=[r];function i(c,o,t,d,h,u){return a(),e("div",null,p)}const m=s(n,[["render",i]]);export{b as __pageData,m as default};
