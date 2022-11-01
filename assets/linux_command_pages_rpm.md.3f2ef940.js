import{_ as s,c as n,o as a,a as p}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"rpm","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]},{"level":2,"title":"\u66F4\u591A\u5B9E\u4F8B","slug":"\u66F4\u591A\u5B9E\u4F8B","link":"#\u66F4\u591A\u5B9E\u4F8B","children":[]}],"relativePath":"linux/command/pages/rpm.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/rpm.md"},e=p(`<h1 id="rpm" tabindex="-1">rpm <a class="header-anchor" href="#rpm" aria-hidden="true">#</a></h1><p>RPM\u8F6F\u4EF6\u5305\u7684\u7BA1\u7406\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>rpm\u547D\u4EE4</strong> \u662FRPM\u8F6F\u4EF6\u5305\u7684\u7BA1\u7406\u5DE5\u5177\u3002rpm\u539F\u672C\u662FRed\xA0Hat\xA0Linux\u53D1\u884C\u7248\u4E13\u95E8\u7528\u6765\u7BA1\u7406Linux\u5404\u9879\u5957\u4EF6\u7684\u7A0B\u5E8F\uFF0C\u7531\u4E8E\u5B83\u9075\u5FAAGPL\u89C4\u5219\u4E14\u529F\u80FD\u5F3A\u5927\u65B9\u4FBF\uFF0C\u56E0\u800C\u5E7F\u53D7\u6B22\u8FCE\u3002\u9010\u6E10\u53D7\u5230\u5176\u4ED6\u53D1\u884C\u7248\u7684\u91C7\u7528\u3002RPM\u5957\u4EF6\u7BA1\u7406\u65B9\u5F0F\u7684\u51FA\u73B0\uFF0C\u8BA9Linux\u6613\u4E8E\u5B89\u88C5\uFF0C\u5347\u7EA7\uFF0C\u95F4\u63A5\u63D0\u5347\u4E86Linux\u7684\u9002\u7528\u5EA6\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u67E5\u8BE2\u6240\u6709\u5957\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-b</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B8C\u6210\u9636\u6BB5&gt;&lt;\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+\u6216-t </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B8C\u6210\u9636\u6BB5&gt;&lt;\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+\uFF1A\u8BBE\u7F6E\u5305\u88C5\u5957\u4EF6\u7684\u5B8C\u6210\u9636\u6BB5\uFF0C\u5E76\u6307\u5B9A\u5957\u4EF6\u6863\u7684\u6587\u4EF6\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u53EA\u5217\u51FA\u7EC4\u6001\u914D\u7F6E\u6587\u4EF6\uFF0C\u672C\u53C2\u6570\u9700\u914D\u5408</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u53C2\u6570\u4F7F\u7528\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u53EA\u5217\u51FA\u6587\u672C\u6587\u4EF6\uFF0C\u672C\u53C2\u6570\u9700\u914D\u5408</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u53C2\u6570\u4F7F\u7528\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-e</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--erase</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5220\u9664\u6307\u5B9A\u7684\u5957\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+\uFF1A\u67E5\u8BE2\u62E5\u6709\u6307\u5B9A\u6587\u4EF6\u7684\u5957\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-h\u6216--hash\uFF1A\u5957\u4EF6\u5B89\u88C5\u65F6\u5217\u51FA\u6807\u8BB0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-i\uFF1A\u663E\u793A\u5957\u4EF6\u7684\u76F8\u5173\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--install</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5B89\u88C5\u6307\u5B9A\u7684\u5957\u4EF6\u6863\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\uFF1A\u663E\u793A\u5957\u4EF6\u7684\u6587\u4EF6\u5217\u8868\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-p</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+\uFF1A\u67E5\u8BE2\u6307\u5B9A\u7684RPM\u5957\u4EF6\u6863\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-q\uFF1A\u4F7F\u7528\u8BE2\u95EE\u6A21\u5F0F\uFF0C\u5F53\u9047\u5230\u4EFB\u4F55\u95EE\u9898\u65F6\uFF0Crpm\u6307\u4EE4\u4F1A\u5148\u8BE2\u95EE\u7528\u6237\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R\uFF1A\u663E\u793A\u5957\u4EF6\u7684\u5173\u8054\u6027\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u663E\u793A\u6587\u4EF6\u72B6\u6001\uFF0C\u672C\u53C2\u6570\u9700\u914D\u5408</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u53C2\u6570\u4F7F\u7528\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-U</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--upgrade</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5957\u4EF6\u6863</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5347\u7EA7\u6307\u5B9A\u7684\u5957\u4EF6\u6863\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-vv\uFF1A\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF0C\u4FBF\u4E8E\u6392\u9519\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u8F6F\u4EF6\u5305\uFF1A\u6307\u5B9A\u8981\u64CD\u7EB5\u7684rpm\u8F6F\u4EF6\u5305\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u5982\u4F55\u5B89\u88C5rpm\u8F6F\u4EF6\u5305</strong></p><p>rpm\u8F6F\u4EF6\u5305\u7684\u5B89\u88C5\u53EF\u4EE5\u4F7F\u7528\u7A0B\u5E8Frpm\u6765\u5B8C\u6210\u3002\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -ivh your-package.rpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2Dyour-package.rpm\u662F\u4F60\u8981\u5B89\u88C5\u7684rpm\u5305\u7684\u6587\u4EF6\u540D\uFF0C\u4E00\u822C\u7F6E\u4E8E\u5F53\u524D\u76EE\u5F55\u4E0B\u3002</p><p>\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u51FA\u73B0\u4E0B\u9762\u7684\u8B66\u544A\u6216\u8005\u63D0\u793A\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">... conflict with ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53EF\u80FD\u662F\u8981\u5B89\u88C5\u7684\u5305\u91CC\u6709\u4E00\u4E9B\u6587\u4EF6\u53EF\u80FD\u4F1A\u8986\u76D6\u73B0\u6709\u7684\u6587\u4EF6\uFF0C\u7F3A\u7701\u65F6\u8FD9\u6837\u7684\u60C5\u51B5\u4E0B\u662F\u65E0\u6CD5\u6B63\u786E\u5B89\u88C5\u7684\u53EF\u4EE5\u7528<code>rpm --force -i</code>\u5F3A\u5236\u5B89\u88C5\u5373\u53EF</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">... is needed by ...</span></span>
<span class="line"><span style="color:#A6ACCD;">... is not installed ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u5305\u9700\u8981\u7684\u4E00\u4E9B\u8F6F\u4EF6\u4F60\u6CA1\u6709\u5B89\u88C5\u53EF\u4EE5\u7528<code>rpm --nodeps -i</code>\u6765\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u4E5F\u5C31\u662F\u8BF4<code>rpm -i --force --nodeps</code>\u53EF\u4EE5\u5FFD\u7565\u6240\u6709\u4F9D\u8D56\u5173\u7CFB\u548C\u6587\u4EF6\u95EE\u9898\uFF0C\u4EC0\u4E48\u5305\u90FD\u80FD\u5B89\u88C5\u4E0A\uFF0C\u4F46\u8FD9\u79CD\u5F3A\u5236\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u4E0D\u80FD\u4FDD\u8BC1\u5B8C\u5168\u53D1\u6325\u529F\u80FD\u3002</p><p><strong>\u5982\u4F55\u5B89\u88C5.src.rpm\u8F6F\u4EF6\u5305</strong></p><p>\u6709\u4E9B\u8F6F\u4EF6\u5305\u662F\u4EE5.src.rpm\u7ED3\u5C3E\u7684\uFF0C\u8FD9\u7C7B\u8F6F\u4EF6\u5305\u662F\u5305\u542B\u4E86\u6E90\u4EE3\u7801\u7684rpm\u5305\uFF0C\u5728\u5B89\u88C5\u65F6\u9700\u8981\u8FDB\u884C\u7F16\u8BD1\u3002\u8FD9\u7C7B\u8F6F\u4EF6\u5305\u6709\u4E24\u79CD\u5B89\u88C5\u65B9\u6CD5\uFF1A</p><p>\u65B9\u6CD5\u4E00\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -i your-package.src.rpm</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/src/redhat/SPECS</span></span>
<span class="line"><span style="color:#A6ACCD;">rpmbuild -bp your-package.specs             </span><span style="color:#676E95;">#\u4E00\u4E2A\u548C\u4F60\u7684\u8F6F\u4EF6\u5305\u540C\u540D\u7684specs\u6587\u4EF6</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/src/redhat/BUILD/your-package/      </span><span style="color:#676E95;">#\u4E00\u4E2A\u548C\u4F60\u7684\u8F6F\u4EF6\u5305\u540C\u540D\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">./configure                                 </span><span style="color:#676E95;">#\u8FD9\u4E00\u6B65\u548C\u7F16\u8BD1\u666E\u901A\u7684\u6E90\u7801\u8F6F\u4EF6\u4E00\u6837\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -i you-package.src.rpm</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/src/redhat/SPECS</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u524D\u4E24\u6B65\u548C\u65B9\u6CD5\u4E00\u76F8\u540C</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpmbuild -bb your-package.specs       </span><span style="color:#676E95;">#\u4E00\u4E2A\u548C\u4F60\u7684\u8F6F\u4EF6\u5305\u540C\u540D\u7684specs\u6587\u4EF6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u65F6\u5728<code>/usr/src/redhat/RPM/i386/</code>\uFF08\u6839\u636E\u5177\u4F53\u5305\u7684\u4E0D\u540C\uFF0C\u4E5F\u53EF\u80FD\u662Fi686,noarch\u7B49\u7B49\uFF09\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\uFF0C\u6709\u4E00\u4E2A\u65B0\u7684rpm\u5305\uFF0C\u8FD9\u4E2A\u662F\u7F16\u8BD1\u597D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002</p><p>\u6267\u884C<code>rpm -i new-package.rpm</code>\u5373\u53EF\u5B89\u88C5\u5B8C\u6210\u3002</p><p><strong>\u5982\u4F55\u5378\u8F7Drpm\u8F6F\u4EF6\u5305</strong></p><p>\u4F7F\u7528\u547D\u4EE4<code>rpm -e</code>\u5305\u540D\uFF0C\u5305\u540D\u53EF\u4EE5\u5305\u542B\u7248\u672C\u53F7\u7B49\u4FE1\u606F\uFF0C\u4F46\u662F\u4E0D\u53EF\u4EE5\u6709\u540E\u7F00.rpm\uFF0C\u6BD4\u5982\u5378\u8F7D\u8F6F\u4EF6\u5305proftpd-1.2.8-1\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u5217\u683C\u5F0F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-1.2.8-1</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-1.2.8</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e proftpd</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0D\u53EF\u4EE5\u662F\u4E0B\u5217\u683C\u5F0F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-1.2.8-1.i386.rpm</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-1.2.8-1.i386</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-1.2</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e proftpd-1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6709\u65F6\u4F1A\u51FA\u73B0\u4E00\u4E9B\u9519\u8BEF\u6216\u8005\u8B66\u544A\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">... is needed by ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u8BF4\u660E\u8FD9\u4E2A\u8F6F\u4EF6\u88AB\u5176\u4ED6\u8F6F\u4EF6\u9700\u8981\uFF0C\u4E0D\u80FD\u968F\u4FBF\u5378\u8F7D\uFF0C\u53EF\u4EE5\u7528rpm -e --nodeps\u5F3A\u5236\u5378\u8F7D</p><p><strong>\u5982\u4F55\u4E0D\u5B89\u88C5\u4F46\u662F\u83B7\u53D6rpm\u5305\u4E2D\u7684\u6587\u4EF6</strong></p><p>\u4F7F\u7528\u5DE5\u5177rpm2cpio\u548Ccpio</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm2cpio xxx.rpm </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> cpio -vi</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm2cpio xxx.rpm </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> cpio -idmv</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm2cpio xxx.rpm </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> cpio --extract --make-directories</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53C2\u6570i\u548Cextract\u76F8\u540C\uFF0C\u8868\u793A\u63D0\u53D6\u6587\u4EF6\u3002v\u8868\u793A\u6307\u793A\u6267\u884C\u8FDB\u7A0B\uFF0Cd\u548Cmake-directory\u76F8\u540C\uFF0C\u8868\u793A\u6839\u636E\u5305\u4E2D\u6587\u4EF6\u539F\u6765\u7684\u8DEF\u5F84\u5EFA\u7ACB\u76EE\u5F55\uFF0Cm\u8868\u793A\u4FDD\u6301\u6587\u4EF6\u7684\u66F4\u65B0\u65F6\u95F4\u3002</p><p><strong>\u5982\u4F55\u67E5\u770B\u4E0Erpm\u5305\u76F8\u5173\u7684\u6587\u4EF6\u548C\u5176\u4ED6\u4FE1\u606F</strong></p><p>\u4E0B\u9762\u6240\u6709\u7684\u4F8B\u5B50\u90FD\u5047\u8BBE\u4F7F\u7528\u8F6F\u4EF6\u5305mysql-3.23.54a-11</p><p>1\u3001\u6211\u7684\u7CFB\u7EDF\u4E2D\u5B89\u88C5\u4E86\u90A3\u4E9Brpm\u8F6F\u4EF6\u5305\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -qa \u8BB2\u5217\u51FA\u6240\u6709\u5B89\u88C5\u8FC7\u7684\u5305</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8981\u67E5\u627E\u6240\u6709\u5B89\u88C5\u8FC7\u7684\u5305\u542B\u67D0\u4E2A\u5B57\u7B26\u4E32sql\u7684\u8F6F\u4EF6\u5305</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -qa </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>2\u3001\u5982\u4F55\u83B7\u5F97\u67D0\u4E2A\u8F6F\u4EF6\u5305\u7684\u6587\u4EF6\u5168\u540D\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -q mysql</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u83B7\u5F97\u7CFB\u7EDF\u4E2D\u5B89\u88C5\u7684mysql\u8F6F\u4EF6\u5305\u5168\u540D\uFF0C\u4ECE\u4E2D\u53EF\u4EE5\u83B7\u5F97\u5F53\u524D\u8F6F\u4EF6\u5305\u7684\u7248\u672C\u7B49\u4FE1\u606F\u3002\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u53EF\u4EE5\u5F97\u5230\u4FE1\u606Fmysql-3.23.54a-11</p><p>3\u3001\u4E00\u4E2Arpm\u5305\u4E2D\u7684\u6587\u4EF6\u5B89\u88C5\u5230\u90A3\u91CC\u53BB\u4E86\uFF1F</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -ql \u5305\u540D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u8FD9\u91CC\u7684\u662F\u4E0D\u5305\u62EC.rpm\u540E\u7F00\u7684\u8F6F\u4EF6\u5305\u7684\u540D\u79F0\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EA\u80FD\u7528mysql\u6216\u8005mysql-3.23.54a-11\u800C\u4E0D\u662Fmysql-3.23.54a-11.rpm\u3002\u5982\u679C\u53EA\u662F\u60F3\u77E5\u9053\u53EF\u6267\u884C\u7A0B\u5E8F\u653E\u5230\u90A3\u91CC\u53BB\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u7528which\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">which mysql</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>4\u3001\u4E00\u4E2Arpm\u5305\u4E2D\u5305\u542B\u90A3\u4E9B\u6587\u4EF6\u3002</p><ul><li>\u4E00\u4E2A\u6CA1\u6709\u5B89\u88C5\u8FC7\u7684\u8F6F\u4EF6\u5305\uFF0C\u4F7F\u7528<code>rpm -qlp **** .rpm</code></li><li>\u4E00\u4E2A\u5DF2\u7ECF\u5B89\u88C5\u8FC7\u7684\u8F6F\u4EF6\u5305\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528<code>rpm -ql **** .rpm</code></li></ul><p>5\u3001\u5982\u4F55\u83B7\u53D6\u5173\u4E8E\u4E00\u4E2A\u8F6F\u4EF6\u5305\u7684\u7248\u672C\uFF0C\u7528\u9014\u7B49\u76F8\u5173\u4FE1\u606F\uFF1F</p><ul><li>\u4E00\u4E2A\u6CA1\u6709\u5B89\u88C5\u8FC7\u7684\u8F6F\u4EF6\u5305\uFF0C\u4F7F\u7528<code>rpm -qip **** .rpm</code></li><li>\u4E00\u4E2A\u5DF2\u7ECF\u5B89\u88C5\u8FC7\u7684\u8F6F\u4EF6\u5305\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528<code>rpm -qi **** .rpm</code></li></ul><p>6\u3001\u67D0\u4E2A\u7A0B\u5E8F\u662F\u54EA\u4E2A\u8F6F\u4EF6\u5305\u5B89\u88C5\u7684\uFF0C\u6216\u8005\u54EA\u4E2A\u8F6F\u4EF6\u5305\u5305\u542B\u8FD9\u4E2A\u7A0B\u5E8F\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpm -qf </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">which \u7A0B\u5E8F\u540D</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#\u8FD4\u56DE\u8F6F\u4EF6\u5305\u7684\u5168\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qif </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">which \u7A0B\u5E8F\u540D</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">#\u8FD4\u56DE\u8F6F\u4EF6\u5305\u7684\u6709\u5173\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qlf </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">which \u7A0B\u5E8F\u540D</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">#\u8FD4\u56DE\u8F6F\u4EF6\u5305\u7684\u6587\u4EF6\u5217\u8868</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u662F\u5F15\u53F7\uFF0C\u800C\u662F<code>\uFF0C\u5C31\u662F\u952E\u76D8\u5DE6\u4E0A\u89D2\u7684\u90A3\u4E2A\u952E\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528</code>rpm -qilf\`\uFF0C\u540C\u65F6\u8F93\u51FA\u8F6F\u4EF6\u5305\u4FE1\u606F\u548C\u6587\u4EF6\u5217\u8868\u3002</p><p>7\u3001\u67D0\u4E2A\u6587\u4EF6\u662F\u54EA\u4E2A\u8F6F\u4EF6\u5305\u5B89\u88C5\u7684\uFF0C\u6216\u8005\u54EA\u4E2A\u8F6F\u4EF6\u5305\u5305\u542B\u8FD9\u4E2A\u6587\u4EF6\u3002</p><p>\u6CE8\u610F\uFF0C\u524D\u4E00\u4E2A\u95EE\u9898\u4E2D\u7684\u65B9\u6CD5\uFF0C\u53EA\u9002\u7528\u4E0E\u53EF\u6267\u884C\u7684\u7A0B\u5E8F\uFF0C\u800C\u4E0B\u9762\u7684\u65B9\u6CD5\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u666E\u901A\u7684\u4EFB\u4F55\u6587\u4EF6\u3002\u524D\u63D0\u662F\u77E5\u9053\u8FD9\u4E2A\u6587\u4EF6\u540D\u3002\u9996\u5148\u83B7\u5F97\u8FD9\u4E2A\u7A0B\u5E8F\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u7528whereis\u6216\u8005which\uFF0C\u7136\u540E\u4F7F\u7528<code>rpm -qf</code>\u4F8B\u5982\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">whereis ftptop</span></span>
<span class="line"><span style="color:#A6ACCD;">ftptop: /usr/bin/ftptop /usr/share/man/man1/ftptop.1.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qf /usr/bin/ftptop</span></span>
<span class="line"><span style="color:#A6ACCD;">proftpd-1.2.8-1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qf /usr/share/doc/proftpd-1.2.8/rfc/rfc0959.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">proftpd-1.2.8-1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u66F4\u591A\u5B9E\u4F8B" tabindex="-1">\u66F4\u591A\u5B9E\u4F8B <a class="header-anchor" href="#\u66F4\u591A\u5B9E\u4F8B" aria-hidden="true">#</a></h2><blockquote><p>\u5E93\u4F9D\u8D56: <a href="http://rpmfind.net/" target="_blank" rel="noreferrer">http://rpmfind.net/</a></p></blockquote><p>\u6E90\u7801\u5305 -&gt; \u7F16\u8BD1 -&gt; \u4E8C\u8FDB\u5236\u5305(rpm \u5305 / \u7CFB\u7EDF\u9ED8\u8BA4\u5305)</p><p>rpm \u547D\u540D\u89C4\u5219: \u8F6F\u4EF6(\u8F6F\u4EF6\u540D, \u8F6F\u4EF6\u7248\u672C) + \u7CFB\u7EDF(os \u7248\u672C, os \u4F4D\u6570) rpm \u6821\u9A8C: SM5DLUGT -&gt; size modified(\u7C7B\u578B/\u6743\u9650) md5 device L(\u6587\u4EF6\u8DEF\u5F84) user group time(modified time)</p><p>yum: \u89E3\u51B3 rpm \u4F9D\u8D56\u7684\u95EE\u9898</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># rpm</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql57-community-release-el6-8.noarch.rpm </span><span style="color:#676E95;"># \u4E00\u4E2A rpm \u5305\u7684\u4F8B\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">/var/lib/rpm/ </span><span style="color:#676E95;"># \u5305\u5168\u540D -&gt; \u5305\u540D \u7684\u6570\u636E\u5E93</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rpm -Uivh --dodeps xxx </span><span style="color:#676E95;"># upgrade install verbose hash</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qilpfa</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep xxx </span><span style="color:#676E95;"># query info list(rpm\u5305\u5B89\u88C5\u540E\u7684\u6587\u4EF6\u4F4D\u7F6E) package(rpm \u5305) file(\u6587\u4EF6\u5C5E\u4E8E\u54EA\u4E2Arpm\u6587\u4EF6) all</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e </span><span style="color:#676E95;"># erase</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -V </span><span style="color:#676E95;"># verify</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm2cpio </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> cpio -idv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># rpm \u9ED8\u8BA4\u5B89\u88C5\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/           \u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/       \u53EF\u6267\u884C\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">/urs/lib/       \u7A0B\u5E8F\u4F7F\u7528\u7684\u51FD\u6570\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/doc/ \u4F7F\u7528\u624B\u518C</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/man/ manual</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,71),r=[e];function c(o,i,t,m,d,b){return a(),n("div",null,r)}const A=s(l,[["render",c]]);export{C as __pageData,A as default};
