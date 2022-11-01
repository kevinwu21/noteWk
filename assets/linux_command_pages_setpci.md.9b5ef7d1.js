import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const h=JSON.parse('{"title":"setpci","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/setpci.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/setpci.md"},p=l(`<h1 id="setpci" tabindex="-1">setpci <a class="header-anchor" href="#setpci" aria-hidden="true">#</a></h1><p>\u67E5\u8BE2\u548C\u914D\u7F6EPCI\u8BBE\u5907\u7684\u4F7F\u7528\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>setpci\u547D\u4EE4</strong> \u662F\u4E00\u4E2A\u67E5\u8BE2\u548C\u914D\u7F6EPCI\u8BBE\u5907\u7684\u4F7F\u7528\u5DE5\u5177\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">setpci</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u7684\u7EC6\u8282\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u5F53\u6CA1\u6709\u4EFB\u4F55\u64CD\u4F5C\u9700\u8981\u5B8C\u6210\u65F6\uFF0C\u4E0D\u663E\u793A\u4EFB\u4F55\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-D\uFF1A\u6D4B\u8BD5\u6A21\u5F0F\uFF0C\u5E76\u4E0D\u771F\u6B63\u5C06\u914D\u7F6E\u4FE1\u606F\u5199\u5165\u5BC4\u5B58\u5668\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u4EC5\u663E\u793A\u7ED9\u5B9A\u5382\u5546\u548C\u8BBE\u5907\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u4EC5\u663E\u793A\u6307\u5B9A\u603B\u7EBF\u3001\u63D2\u69FD\u4E0A\u7684\u8BBE\u5907\u6216\u8BBE\u5907\u4E0A\u7684\u529F\u80FD\u5757\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>PCI\u8BBE\u5907\uFF1A\u6307\u5B9A\u8981\u914D\u7F6E\u7684PCI\u8BBE\u5907\uFF1B</li><li>\u64CD\u4F5C\uFF1A\u6307\u5B9A\u8981\u5B8C\u6210\u7684\u914D\u7F6E\u64CD\u4F5C\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>Linux\u4E0B\u8C03\u8282\u7B14\u8BB0\u672C\u5C4F\u5E55\u4EAE\u5EA6\u65B9\u6CD5\uFF1A</p><p>\u9996\u5148\u8FDB\u5165\u7EC8\u7AEF\u8F93\u5165lspci\u547D\u4EE4\uFF0C\u5217\u51FA\u5404\u79CD\u8BBE\u5907\u7684\u5730\u5740\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lspci</span></span>
<span class="line"><span style="color:#A6ACCD;">00:00.0 host bridge: Intel Corporation Mobile 945GM/PM/GMS, 943/940GML and 945GT Express Memory Controller Hub </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rev 03</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">00:02.0 VGA compatible controller: Intel Corporation Mobile 945GM/GMS, 943/940GML Express Integrated Graphics Controller </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rev 03</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">00:02.1 Display controller: Intel Corporation Mobile 945GM/GMS/GME, 943/940GML Express Integrated Graphics Controller </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rev 03</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">00:1b.0 Audio device: Intel Corporation N10/ICH 7 Family High Definition Audio Controller </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rev 02</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">00:1c.0 PCI bridge: Intel Corporation N10/ICH 7 Family PCI Express Port 1 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rev 02</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">00:1c.1 PCI bridge: Intel Corporation N10/ICH 7 Family PCI Express Port 2 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rev 02</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">......</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53D1\u73B000:02.0\u662FVGA\u8BBE\u5907\uFF0C\u4E8E\u662F\u6211\u4EEC\u4FEE\u6539\u5B83\u7684\u5C5E\u6027\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo setpci -s 00:02.0 F4.B=FF</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u89E3\u91CA\u4E00\u4E0B\uFF1A</p><ul><li><strong>setpci</strong> \u662F\u4FEE\u6539\u8BBE\u5907\u5C5E\u6027\u7684\u547D\u4EE4\u3002</li><li><strong>-s</strong> \u8868\u793A\u63A5\u4E0B\u6765\u8F93\u5165\u7684\u662F\u8BBE\u5907\u7684\u5730\u5740\u3002</li><li><strong>00:02.0</strong> VGA\u8BBE\u5907\u5730\u5740\uFF08&lt;\u603B\u7EBF&gt;:&lt;\u63A5\u53E3&gt;.&lt;\u529F\u80FD&gt;\uFF09\u3002</li><li><strong>F4</strong> \u8981\u4FEE\u6539\u7684\u5C5E\u6027\u7684\u5730\u5740\uFF0C\u8FD9\u91CC\u5E94\u8BE5\u8868\u793A\u201C\u4EAE\u5EA6\u201D\u3002</li><li><strong>.B</strong> \u4FEE\u6539\u7684\u957F\u5EA6\uFF08B\u5E94\u8BE5\u662F\u5B57\u8282\uFF08Byte\uFF09\uFF0C\u8FD8\u6709w\uFF08\u5E94\u8BE5\u662FWord\uFF0C\u4E24\u4E2A\u5B57\u8282\uFF09\u3001L\uFF08\u5E94\u8BE5\u662FLong\uFF0C4\u4E2A\u5B57\u8282\uFF09\uFF09\u3002</li><li><strong>=FF</strong> \u8981\u4FEE\u6539\u7684\u503C\uFF08\u53EF\u4EE5\u6539\uFF09\u3002</li></ul><p>\u6211\u8FD9\u91CC00\u662F\u6700\u6697\uFF0CFF\u662F\u6700\u4EAE\uFF0C\u4E0D\u540C\u7684\u7535\u8111\u53EF\u80FD\u4E0D\u4E00\u6837\u3002\u6BD4\u5982\u8BF4\u6211\u5ACCFF\u592A\u95EA\u773C\u4E86\uFF0C\u6211\u5C31\u53EF\u4EE5\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo setpci -s 00:02.0 F4.B=CC</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,20),r=[p];function o(i,t,c,d,C,u){return a(),n("div",null,r)}const D=s(e,[["render",o]]);export{h as __pageData,D as default};