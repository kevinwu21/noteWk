import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"mke2fs","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/mke2fs.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/mke2fs.md"},p=l(`<h1 id="mke2fs" tabindex="-1">mke2fs <a class="header-anchor" href="#mke2fs" aria-hidden="true">#</a></h1><p>\u521B\u5EFA\u78C1\u76D8\u5206\u533A\u4E0A\u7684\u201Cetc2/etc3\u201D\u6587\u4EF6\u7CFB\u7EDF</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>mke2fs\u547D\u4EE4</strong> \u88AB\u7528\u4E8E\u521B\u5EFA\u78C1\u76D8\u5206\u533A\u4E0A\u7684\u201Cetc2/etc3\u201D\u6587\u4EF6\u7CFB\u7EDF\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mke2fs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-b</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u533A\u5757\u5927\u5C0F</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u533A\u5757\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1B\u68C0\u67E5\u662F\u5426\u6709\u635F\u574F\u7684\u533A\u5757\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4E0D\u8FDE\u7EED\u533A\u6BB5\u5927\u5C0F</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u4E0D\u8FDE\u7EED\u533A\u6BB5\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-F\uFF1A\u4E0D\u7BA1\u6307\u5B9A\u7684\u8BBE\u5907\u4E3A\u4F55\uFF0C\u5F3A\u5236\u6267\u884Cmke2fs\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B57\u8282</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5B57\u8282/inode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u7684\u6BD4\u4F8B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-N</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">inode\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u8981\u5EFA\u7ACB\u7684inode\u6570\u76EE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4ECE\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D\uFF0C\u8BFB\u53D6\u6587\u4EF6\u897F\u4E2D\u635F\u574F\u533A\u5757\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-L</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6807\u7B7E</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u6587\u4EF6\u7CFB\u7EDF\u7684\u6807\u7B7E\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-m</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u767E\u5206\u6BD4\u503C</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u7ED9\u7BA1\u7406\u5458\u4FDD\u7559\u533A\u5757\u7684\u6BD4\u4F8B\uFF0C\u9884\u8BBE\u4E3A5%\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-M\uFF1A\u8BB0\u5F55\u6700\u540E\u4E00\u6B21\u6302\u5165\u7684\u76EE\u5F55\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-q\uFF1A\u6267\u884C\u65F6\u4E0D\u663E\u793A\u4EFB\u4F55\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A\u6307\u5B9A\u8981\u5EFA\u7ACB\u7684ext2\u6587\u4EF6\u7CFB\u7EDF\u7248\u672C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u533A\u5757\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u78C1\u76D8\u9635\u5217\u53C2\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-S\uFF1A\u4EC5\u5199\u5165superblock\u4E0Egroup descriptors\uFF0C\u800C\u4E0D\u66F4\u6539inode able inode bitmap\u4EE5\u53CAblock bitmap\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u6267\u884C\u65F6\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-V\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u8BBE\u5907\u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u521B\u5EFA\u7684\u6587\u4EF6\u7CFB\u7EDF\u7684\u5206\u533A\u8BBE\u5907\u6587\u4EF6\u540D\uFF1B</li><li>\u5757\u6570\uFF1A\u6307\u5B9A\u8981\u521B\u5EFA\u7684\u6587\u4EF6\u7CFB\u7EDF\u7684\u78C1\u76D8\u5757\u6570\u91CF\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u6307\u5B9A\u7684ext2\u6587\u4EF6\u7CFB\u7EDF\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mke2fs -q /dev/hda1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),o=[p];function r(c,t,i,D,d,A){return a(),n("div",null,o)}const b=s(e,[["render",r]]);export{y as __pageData,b as default};
