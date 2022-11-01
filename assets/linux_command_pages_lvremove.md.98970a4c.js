import{_ as s,c as a,o as e,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"lvremove","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/lvremove.md","lastUpdated":1666509709000}'),n={name:"linux/command/pages/lvremove.md"},o=l(`<h1 id="lvremove" tabindex="-1">lvremove <a class="header-anchor" href="#lvremove" aria-hidden="true">#</a></h1><p>\u5220\u9664\u6307\u5B9ALVM\u903B\u8F91\u5377</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>lvremove\u547D\u4EE4</strong> \u7528\u4E8E\u5220\u9664\u6307\u5B9ALVM\u903B\u8F91\u5377\u3002\u5982\u679C\u903B\u8F91\u5377\u5DF2\u7ECF\u4F7F\u7528mount\u547D\u4EE4\u52A0\u8F7D\uFF0C\u5219\u4E0D\u80FD\u4F7F\u7528lvremove\u547D\u4EE4\u5220\u9664\u3002\u5FC5\u987B\u4F7F\u7528umount\u547D\u4EE4\u5378\u8F7D\u540E\uFF0C\u903B\u8F91\u5377\u65B9\u53EF\u88AB\u5220\u9664\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lvremove</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u5F3A\u5236\u5220\u9664\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u903B\u8F91\u5377\uFF1A\u6307\u5B9A\u8981\u5220\u9664\u7684\u903B\u8F91\u5377\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528lvremove\u547D\u4EE4\u5220\u9664\u6307\u5B9A\u7684\u903B\u8F91\u5377\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># lvremove /dev/vg1000/lvol0    #\u5220\u9664\u903B\u8F91\u5377&quot;lvol0&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">Do you really want to remove active logical </span></span>
<span class="line"><span style="color:#A6ACCD;">volume </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lvol0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">y/n</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">: y    </span><span style="color:#676E95;">#\u786E\u8BA4\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">  Logical volume </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lvol0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> successfully removed</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15),p=[o];function r(c,t,i,d,u,v){return e(),a("div",null,p)}const D=s(n,[["render",r]]);export{m as __pageData,D as default};
