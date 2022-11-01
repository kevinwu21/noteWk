import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const A=JSON.parse('{"title":"fsck","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/fsck.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/fsck.md"},p=e(`<h1 id="fsck" tabindex="-1">fsck <a class="header-anchor" href="#fsck" aria-hidden="true">#</a></h1><p>\u68C0\u67E5\u5E76\u4E14\u8BD5\u56FE\u4FEE\u590D\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7684\u9519\u8BEF</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>fsck\u547D\u4EE4</strong> \u88AB\u7528\u4E8E\u68C0\u67E5\u5E76\u4E14\u8BD5\u56FE\u4FEE\u590D\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7684\u9519\u8BEF\u3002\u5F53\u6587\u4EF6\u7CFB\u7EDF\u53D1\u751F\u9519\u8BEF\u56DB\u5316\uFF0C\u53EF\u7528fsck\u6307\u4EE4\u5C1D\u8BD5\u52A0\u4EE5\u4FEE\u590D\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">fsck</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u81EA\u52A8\u4FEE\u590D\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u4E0D\u8BE2\u95EE\u4EFB\u4F55\u95EE\u9898\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-A\uFF1A\u4F9D\u7167/etc/fstab\u914D\u7F6E\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u68C0\u67E5\u6587\u4EF6\u5185\u6240\u5217\u7684\u5168\u90E8\u6587\u4EF6\u7CFB\u7EDF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-N\uFF1A\u4E0D\u6267\u884C\u6307\u4EE4\uFF0C\u4EC5\u5217\u51FA\u5B9E\u9645\u6267\u884C\u4F1A\u8FDB\u884C\u7684\u52A8\u4F5C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-P\uFF1A\u5F53\u642D\u914D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u53C2\u6570\u4F7F\u7528\u65F6\uFF0C\u5219\u4F1A\u540C\u65F6\u68C0\u67E5\u6240\u6709\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A\u91C7\u7528\u4E92\u52A8\u6A21\u5F0F\uFF0C\u5728\u6267\u884C\u4FEE\u590D\u65F6\u8BE2\u95EE\u95EE\u9898\uFF0C\u8BA9\u7528\u6237\u5F97\u4EE5\u786E\u8BA4\u5E76\u51B3\u5B9A\u5904\u7406\u65B9\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R\uFF1A\u5F53\u642D\u914D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u53C2\u6570\u4F7F\u7528\u65F6\uFF0C\u5219\u4F1A\u7565\u8FC7/\u76EE\u5F55\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E0D\u4E88\u68C0\u67E5\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u4F9D\u5E8F\u6267\u884C\u68C0\u67E5\u4F5C\u4E1A\uFF0C\u800C\u975E\u540C\u65F6\u6267\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u8981\u68C0\u67E5\u7684\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-T\uFF1A\u6267\u884Cfsck\u6307\u4EE4\u65F6\uFF0C\u4E0D\u663E\u793A\u6807\u9898\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-V\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\u7CFB\u7EDF\uFF1A\u6307\u5B9A\u8981\u67E5\u770B\u4FE1\u606F\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>linux\u7684\u6587\u4EF6\u7CFB\u7EDF\u635F\u574F\u4F1A\u5BFC\u81F4linux\u4E0D\u6B63\u5E38\u5173\u673A\uFF0C\u51FA\u9519\u7684\u65F6\u5019\u5982\u679C\u7CFB\u7EDF\u544A\u8BC9\u4F60\u662F\u54EA\u4E00\u5757\u786C\u76D8\u7684\u5206\u533A\u6709\u95EE\u9898\uFF0C\u6BD4\u5982\u662F<code>/dev/hda2</code>\uFF0C\u63A5\u7740\u7528\u5982\u4E0B\u7684\u547D\u4EE4\u53BB\u5BF9\u4ED8\u5B83\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">fsck -y /dev/hda2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7ED3\u675F\u540E\u4F7F\u7528reboot\u547D\u4EE4\u91CD\u542F\u7CFB\u7EDF\u8FD9\u6837\u5C31\u597D\u4E86\uFF01</p><p>\u5982\u679C\u4E0D\u77E5\u9053\u65F6\u54EA\u4E2A\u5730\u65B9\u51FA\u4E86\u95EE\u9898\uFF0C\u53EF\u4EE5\u76F4\u63A5\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">fsck</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u968F\u540E\u7684\u591A\u4E2A\u786E\u8BA4\u5BF9\u8BDD\u6846\u4E2D\u8F93\u5165<code>:y</code></p><p>\u7ED3\u675F\u540E\u540C\u6837\u4F7F\u7528reboot\u547D\u4EE4\u91CD\u542F\u7CFB\u7EDF\u8FD9\u6837\u5C31\u597D\u4E86\uFF01</p>`,18),c=[p];function r(o,t,i,d,u,h){return n(),a("div",null,c)}const C=s(l,[["render",r]]);export{A as __pageData,C as default};