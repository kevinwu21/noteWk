import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const b=JSON.parse('{"title":"e2fsck","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/e2fsck.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/e2fsck.md"},p=l(`<h1 id="e2fsck" tabindex="-1">e2fsck <a class="header-anchor" href="#e2fsck" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u68C0\u67E5\u7B2C\u4E8C\u6269\u5C55\u6587\u4EF6\u7CFB\u7EDF\u7684\u5B8C\u6574\u6027</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>e2fsck\u547D\u4EE4</strong> \u7528\u4E8E\u68C0\u67E5\u7B2C\u4E8C\u6269\u5C55\u6587\u4EF6\u7CFB\u7EDF\u7684\u5B8C\u6574\u6027\uFF0C\u901A\u8FC7\u9002\u5F53\u7684\u9009\u9879\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u590D\u51FA\u73B0\u7684\u9519\u8BEF\u3002</p><p>e2fsck\u6267\u884C\u540E\u7684\u4F20\u56DE\u503C\u53CA\u4EE3\u8868\u610F\u4E49\u5982\u4E0B\uFF1A</p><ul><li>0 \u6CA1\u6709\u4EFB\u4F55\u9519\u8BEF\u53D1\u751F\u3002</li><li>1 \u6587\u4EF6\u7CFB\u7EDF\u53D1\u751F\u9519\u8BEF\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u4FEE\u6B63\u3002</li><li>2 \u6587\u4EF6\u7CFB\u7EDF\u53D1\u751F\u9519\u8BEF\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u4FEE\u6B63\u3002</li><li>4 \u6587\u4EF6\u7CFB\u7EDF\u53D1\u751F\u9519\u8BEF\uFF0C\u4F46\u6CA1\u6709\u4FEE\u6B63\u3002</li><li>8 \u8FD0\u4F5C\u65F6\u53D1\u751F\u9519\u8BEF\u3002</li><li>16 \u4F7F\u7528\u7684\u8BED\u6CD5\u53D1\u751F\u9519\u8BEF\u3002</li><li>128 \u5171\u4EAB\u7684\u51FD\u6570\u5E93\u53D1\u751F\u9519\u8BEF\u3002</li></ul><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">e2fsck</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u4E0D\u8BE2\u95EE\u4F7F\u7528\u8005\u610F\u89C1\uFF0C\u4FBF\u81EA\u52A8\u4FEE\u590D\u6587\u4EF6\u7CFB\u7EDF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-b</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">superblock</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9Asuperblock\uFF0C\u800C\u4E0D\u4F7F\u7528\u9884\u8BBE\u7684superblock\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-B</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u533A\u5757\u5927\u5C0F</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u533A\u5757\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u4E00\u5E76\u6267\u884Cbadblocks\uFF0C\u4EE5\u6807\u793A\u635F\u574F\u7684\u533A\u5757\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-C\uFF1A\u5C06\u68C0\u67E5\u8FC7\u7A0B\u7684\u4FE1\u606F\u5B8C\u6574\u8BB0\u5F55\u5728file descriptor\u4E2D\uFF0C\u4F7F\u5F97\u6574\u4E2A\u68C0\u67E5\u8FC7\u7A0B\u90FD\u80FD\u5B8C\u6574\u76D1\u63A7\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u663E\u793A\u6392\u9519\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u5373\u4F7F\u6587\u4EF6\u7CFB\u7EDF\u6CA1\u6709\u9519\u8BEF\u8FF9\u8C61\uFF0C\u4ECD\u5F3A\u5236\u5730\u68C0\u67E5\u6B63\u786E\u6027\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-F\uFF1A\u6267\u884C\u524D\u5148\u6E05\u9664\u8BBE\u5907\u7684\u7F13\u51B2\u533A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u533A\u5757\u52A0\u5230\u635F\u574F\u533A\u5757\u5217\u8868\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-L</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5148\u6E05\u9664\u635F\u574F\u533A\u5757\u5217\u8868\uFF0C\u518D\u5C06\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u533A\u5757\u52A0\u5230\u635F\u574F\u533A\u5757\u5217\u8868\u3002\u56E0\u6B64\u635F\u574F\u533A\u5757\u5217\u8868\u7684\u533A\u5757\u8DDF\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u533A\u5757\u662F\u4E00\u6837\u7684\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u4EE5\u53EA\u8BFB\u6A21\u5F0F\u5F00\u542F\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5E76\u91C7\u53D6\u975E\u4E92\u52A8\u65B9\u5F0F\u6267\u884C\uFF0C\u6240\u6709\u7684\u95EE\u9898\u5BF9\u8BDD\u5747\u8BBE\u7F6E\u4EE5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u56DE\u7B54\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-p\uFF1A\u4E0D\u8BE2\u95EE\u4F7F\u7528\u8005\u610F\u89C1\uFF0C\u4FBF\u81EA\u52A8\u4FEE\u590D\u6587\u4EF6\u7CFB\u7EDF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A\u6B64\u53C2\u6570\u53EA\u4E3A\u4E86\u517C\u5BB9\u6027\u800C\u5B58\u5728\uFF0C\u5E76\u65E0\u5B9E\u9645\u4F5C\u7528\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u5982\u679C\u6587\u4EF6\u7CFB\u7EDF\u7684\u5B57\u8282\u987A\u5E8F\u4E0D\u9002\u5F53\uFF0C\u5C31\u4EA4\u6362\u5B57\u8282\u987A\u5E8F\uFF0C\u5426\u5219\u4E0D\u505A\u4EFB\u4F55\u52A8\u4F5C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-S\uFF1A\u4E0D\u7BA1\u6587\u4EF6\u7CFB\u7EDF\u7684\u5B57\u8282\u987A\u5E8F\uFF0C\u4E00\u5F8B\u4EA4\u6362\u5B57\u8282\u987A\u5E8F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A\u663E\u793A\u65F6\u95F4\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u6267\u884C\u65F6\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-V\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-y\uFF1A\u91C7\u53D6\u975E\u4E92\u52A8\u65B9\u5F0F\u6267\u884C\uFF0C\u6240\u6709\u7684\u95EE\u9898\u5747\u8BBE\u7F6E\u4EE5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u56DE\u7B54\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\u7CFB\u7EDF\u6216\u8005\u5206\u533A\uFF1A\u6307\u5B9A\u6587\u4EF6\u7CFB\u7EDF\u6216\u8005\u5206\u533A\u6240\u5BF9\u5E94\u7684\u8BBE\u5907\u6587\u4EF6\u540D\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u68C0\u67E5<code>/dev/sda1</code>\u662F\u5426\u6709\u95EE\u9898\uFF0C\u5982\u53D1\u73B0\u95EE\u9898\u4FBF\u81EA\u52A8\u4FEE\u590D\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">e2fsck -a -y /dev/sda1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6267\u884Ce2fsck\u6216fsck\u524D\u8BF7\u5148umount partition\uFF0C\u5426\u5219\u6709\u673A\u4F1A\u4EE4\u6863\u6848\u7CFB\u7EDF\u6BC1\u635F\u3002\u5982\u679C\u9700\u8981\u5BF9\u6839\u76EE\u5F55<code>/</code>\u8FDB\u884C\u68C0\u67E5\u53CA\u4FEE\u590D\uFF0C\u4FBF\u9700\u8981\u8FDB\u5165singal user mode\u6267\u884C\u3002</p>`,16),c=[p];function r(o,t,i,d,C,A){return a(),n("div",null,c)}const u=s(e,[["render",r]]);export{b as __pageData,u as default};
