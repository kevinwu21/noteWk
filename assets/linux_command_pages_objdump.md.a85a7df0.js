import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"objdump","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/objdump.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/objdump.md"},e=l(`<h1 id="objdump" tabindex="-1">objdump <a class="header-anchor" href="#objdump" aria-hidden="true">#</a></h1><p>\u663E\u793A\u4E8C\u8FDB\u5236\u6587\u4EF6\u4FE1\u606F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>objdump\u547D\u4EE4</strong> \u662F\u7528\u67E5\u770B\u76EE\u6807\u6587\u4EF6\u6216\u8005\u53EF\u6267\u884C\u7684\u76EE\u6807\u6587\u4EF6\u7684\u6784\u6210\u7684gcc\u5DE5\u5177\u3002</p><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a --archive-headers </span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6863\u6848\u5E93\u7684\u6210\u5458\u4FE1\u606F,\u7C7B\u4F3Cls -l\u5C06lib*.a\u7684\u4FE1\u606F\u5217\u51FA\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-b bfdname --target=bfdname </span></span>
<span class="line"><span style="color:#676E95;"># \u6307\u5B9A\u76EE\u6807\u7801\u683C\u5F0F\u3002\u8FD9\u4E0D\u662F\u5FC5\u987B\u7684\uFF0Cobjdump\u80FD\u81EA\u52A8\u8BC6\u522B\u8BB8\u591A\u683C\u5F0F\uFF0C\u6BD4\u5982\uFF1A </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">objdump -b oasys -m vax -h fu.o </span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793Afu.o\u7684\u5934\u90E8\u6458\u8981\u4FE1\u606F\uFF0C\u660E\u786E\u6307\u51FA\u8BE5\u6587\u4EF6\u662FVax\u7CFB\u7EDF\u4E0B\u7528Oasys\u7F16\u8BD1\u5668\u751F\u6210\u7684\u76EE\u6807\u6587\u4EF6\u3002objdump -i\u5C06\u7ED9\u51FA\u8FD9\u91CC\u53EF\u4EE5\u6307\u5B9A\u7684\u76EE\u6807\u7801\u683C\u5F0F\u5217\u8868\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-C --demangle </span></span>
<span class="line"><span style="color:#676E95;"># \u5C06\u5E95\u5C42\u7684\u7B26\u53F7\u540D\u89E3\u7801\u6210\u7528\u6237\u7EA7\u540D\u5B57\uFF0C\u9664\u4E86\u53BB\u6389\u6240\u5F00\u5934\u7684\u4E0B\u5212\u7EBF\u4E4B\u5916\uFF0C\u8FD8\u4F7F\u5F97C++\u51FD\u6570\u540D\u4EE5\u53EF\u7406\u89E3\u7684\u65B9\u5F0F\u663E\u793A\u51FA\u6765\u3002 </span></span>
<span class="line"><span style="color:#A6ACCD;">--debugging </span></span>
<span class="line"><span style="color:#A6ACCD;">-g </span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u8C03\u8BD5\u4FE1\u606F\u3002\u4F01\u56FE\u89E3\u6790\u4FDD\u5B58\u5728\u6587\u4EF6\u4E2D\u7684\u8C03\u8BD5\u4FE1\u606F\u5E76\u4EE5C\u8BED\u8A00\u7684\u8BED\u6CD5\u663E\u793A\u51FA\u6765\u3002\u4EC5\u4EC5\u652F\u6301\u67D0\u4E9B\u7C7B\u578B\u7684\u8C03\u8BD5\u4FE1\u606F\u3002\u6709\u4E9B\u5176\u4ED6\u7684\u683C\u5F0F\u88ABreadelf -w\u652F\u6301\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-e --debugging-tags </span></span>
<span class="line"><span style="color:#676E95;"># \u7C7B\u4F3C-g\u9009\u9879\uFF0C\u4F46\u662F\u751F\u6210\u7684\u4FE1\u606F\u662F\u548Cctags\u5DE5\u5177\u76F8\u517C\u5BB9\u7684\u683C\u5F0F\u3002 </span></span>
<span class="line"><span style="color:#A6ACCD;">--disassemble </span></span>
<span class="line"><span style="color:#A6ACCD;">-d </span></span>
<span class="line"><span style="color:#676E95;"># \u4ECEobjfile\u4E2D\u53CD\u6C47\u7F16\u90A3\u4E9B\u7279\u5B9A\u6307\u4EE4\u673A\u5668\u7801\u7684section\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-D --disassemble-all </span></span>
<span class="line"><span style="color:#676E95;"># \u4E0E -d \u7C7B\u4F3C\uFF0C\u4F46\u53CD\u6C47\u7F16\u6240\u6709section. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--prefix-addresses </span></span>
<span class="line"><span style="color:#676E95;"># \u53CD\u6C47\u7F16\u7684\u65F6\u5019\uFF0C\u663E\u793A\u6BCF\u4E00\u884C\u7684\u5B8C\u6574\u5730\u5740\u3002\u8FD9\u662F\u4E00\u79CD\u6BD4\u8F83\u8001\u7684\u53CD\u6C47\u7F16\u683C\u5F0F\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-EB </span></span>
<span class="line"><span style="color:#A6ACCD;">-EL </span></span>
<span class="line"><span style="color:#A6ACCD;">--endian={big</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">little} </span></span>
<span class="line"><span style="color:#676E95;"># \u6307\u5B9A\u76EE\u6807\u6587\u4EF6\u7684\u5C0F\u7AEF\u3002\u8FD9\u4E2A\u9879\u5C06\u5F71\u54CD\u53CD\u6C47\u7F16\u51FA\u6765\u7684\u6307\u4EE4\u3002\u5728\u53CD\u6C47\u7F16\u7684\u6587\u4EF6\u6CA1\u63CF\u8FF0\u5C0F\u7AEF\u4FE1\u606F\u7684\u65F6\u5019\u7528\u3002\u4F8B\u5982S-records. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-f </span></span>
<span class="line"><span style="color:#A6ACCD;">--file-headers </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793Aobjfile\u4E2D\u6BCF\u4E2A\u6587\u4EF6\u7684\u6574\u4F53\u5934\u90E8\u6458\u8981\u4FE1\u606F\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-h </span></span>
<span class="line"><span style="color:#A6ACCD;">--section-headers </span></span>
<span class="line"><span style="color:#A6ACCD;">--headers </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u76EE\u6807\u6587\u4EF6\u5404\u4E2Asection\u7684\u5934\u90E8\u6458\u8981\u4FE1\u606F\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-H </span></span>
<span class="line"><span style="color:#A6ACCD;">--help </span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B80\u77ED\u7684\u5E2E\u52A9\u4FE1\u606F\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-i </span></span>
<span class="line"><span style="color:#A6ACCD;">--info </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u5BF9\u4E8E -b \u6216\u8005 -m \u9009\u9879\u53EF\u7528\u7684\u67B6\u6784\u548C\u76EE\u6807\u683C\u5F0F\u5217\u8868\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-j name</span></span>
<span class="line"><span style="color:#A6ACCD;">--section=name </span></span>
<span class="line"><span style="color:#A6ACCD;">\u4EC5\u4EC5\u663E\u793A\u6307\u5B9A\u540D\u79F0\u4E3Aname\u7684section\u7684\u4FE1\u606F </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-l</span></span>
<span class="line"><span style="color:#A6ACCD;">--line-numbers </span></span>
<span class="line"><span style="color:#A6ACCD;">\u7528\u6587\u4EF6\u540D\u548C\u884C\u53F7\u6807\u6CE8\u76F8\u5E94\u7684\u76EE\u6807\u4EE3\u7801\uFF0C\u4EC5\u4EC5\u548C-d\u3001-D\u6216\u8005-r\u4E00\u8D77\u4F7F\u7528\u4F7F\u7528-ld\u548C\u4F7F\u7528-d\u7684\u533A\u522B\u4E0D\u662F\u5F88\u5927\uFF0C\u5728\u6E90\u7801\u7EA7\u8C03\u8BD5\u7684\u65F6\u5019\u6709\u7528\uFF0C\u8981\u6C42\u7F16\u8BD1\u65F6\u4F7F\u7528\u4E86-g\u4E4B\u7C7B\u7684\u8C03\u8BD5\u7F16\u8BD1\u9009\u9879\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-m machine </span></span>
<span class="line"><span style="color:#A6ACCD;">--architecture=machine </span></span>
<span class="line"><span style="color:#A6ACCD;">\u6307\u5B9A\u53CD\u6C47\u7F16\u76EE\u6807\u6587\u4EF6\u65F6\u4F7F\u7528\u7684\u67B6\u6784\uFF0C\u5F53\u5F85\u53CD\u6C47\u7F16\u6587\u4EF6\u672C\u8EAB\u6CA1\u63CF\u8FF0\u67B6\u6784\u4FE1\u606F\u7684\u65F6\u5019</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u6BD4\u5982S-records</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF0C\u8FD9\u4E2A\u9009\u9879\u5F88\u6709\u7528\u3002\u53EF\u4EE5\u7528-i\u9009\u9879\u5217\u51FA\u8FD9\u91CC\u80FD\u591F\u6307\u5B9A\u7684\u67B6\u6784. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--reloc </span></span>
<span class="line"><span style="color:#A6ACCD;">-r </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6587\u4EF6\u7684\u91CD\u5B9A\u4F4D\u5165\u53E3\u3002\u5982\u679C\u548C-d\u6216\u8005-D\u4E00\u8D77\u4F7F\u7528\uFF0C\u91CD\u5B9A\u4F4D\u90E8\u5206\u4EE5\u53CD\u6C47\u7F16\u540E\u7684\u683C\u5F0F\u663E\u793A\u51FA\u6765\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--dynamic-reloc </span></span>
<span class="line"><span style="color:#A6ACCD;">-R </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6587\u4EF6\u7684\u52A8\u6001\u91CD\u5B9A\u4F4D\u5165\u53E3\uFF0C\u4EC5\u4EC5\u5BF9\u4E8E\u52A8\u6001\u76EE\u6807\u6587\u4EF6\u610F\u4E49\uFF0C\u6BD4\u5982\u67D0\u4E9B\u5171\u4EAB\u5E93\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-s </span></span>
<span class="line"><span style="color:#A6ACCD;">--full-contents </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6307\u5B9Asection\u7684\u5B8C\u6574\u5185\u5BB9\u3002\u9ED8\u8BA4\u6240\u6709\u7684\u975E\u7A7Asection\u90FD\u4F1A\u88AB\u663E\u793A\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-S </span></span>
<span class="line"><span style="color:#A6ACCD;">--source </span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C3D\u53EF\u80FD\u53CD\u6C47\u7F16\u51FA\u6E90\u4EE3\u7801\uFF0C\u5C24\u5176\u5F53\u7F16\u8BD1\u7684\u65F6\u5019\u6307\u5B9A\u4E86-g\u8FD9\u79CD\u8C03\u8BD5\u53C2\u6570\u65F6\uFF0C\u6548\u679C\u6BD4\u8F83\u660E\u663E\u3002\u9690\u542B\u4E86-d\u53C2\u6570\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--show-raw-insn </span></span>
<span class="line"><span style="color:#A6ACCD;">\u53CD\u6C47\u7F16\u7684\u65F6\u5019\uFF0C\u663E\u793A\u6BCF\u6761\u6C47\u7F16\u6307\u4EE4\u5BF9\u5E94\u7684\u673A\u5668\u7801\uFF0C\u5982\u4E0D\u6307\u5B9A--prefix-addresses\uFF0C\u8FD9\u5C06\u662F\u7F3A\u7701\u9009\u9879\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--no-show-raw-insn </span></span>
<span class="line"><span style="color:#A6ACCD;">\u53CD\u6C47\u7F16\u65F6\uFF0C\u4E0D\u663E\u793A\u6C47\u7F16\u6307\u4EE4\u7684\u673A\u5668\u7801\uFF0C\u5982\u4E0D\u6307\u5B9A--prefix-addresses\uFF0C\u8FD9\u5C06\u662F\u7F3A\u7701\u9009\u9879\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--start-address=address </span></span>
<span class="line"><span style="color:#A6ACCD;">\u4ECE\u6307\u5B9A\u5730\u5740\u5F00\u59CB\u663E\u793A\u6570\u636E\uFF0C\u8BE5\u9009\u9879\u5F71\u54CD-d\u3001-r\u548C-s\u9009\u9879\u7684\u8F93\u51FA\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--stop-address=address </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6570\u636E\u76F4\u5230\u6307\u5B9A\u5730\u5740\u4E3A\u6B62\uFF0C\u8BE5\u9879\u5F71\u54CD-d\u3001-r\u548C-s\u9009\u9879\u7684\u8F93\u51FA\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-t </span></span>
<span class="line"><span style="color:#A6ACCD;">--syms </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6587\u4EF6\u7684\u7B26\u53F7\u8868\u5165\u53E3\u3002\u7C7B\u4F3C\u4E8Enm -s\u63D0\u4F9B\u7684\u4FE1\u606F </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-T </span></span>
<span class="line"><span style="color:#A6ACCD;">--dynamic-syms </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6587\u4EF6\u7684\u52A8\u6001\u7B26\u53F7\u8868\u5165\u53E3\uFF0C\u4EC5\u4EC5\u5BF9\u52A8\u6001\u76EE\u6807\u6587\u4EF6\u610F\u4E49\uFF0C\u6BD4\u5982\u67D0\u4E9B\u5171\u4EAB\u5E93\u3002\u5B83\u663E\u793A\u7684\u4FE1\u606F\u7C7B\u4F3C\u4E8E nm -D</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">--dynamic \u663E\u793A\u7684\u4FE1\u606F\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-V </span></span>
<span class="line"><span style="color:#A6ACCD;">--version </span></span>
<span class="line"><span style="color:#A6ACCD;">\u7248\u672C\u4FE1\u606F </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--all-headers </span></span>
<span class="line"><span style="color:#A6ACCD;">-x </span></span>
<span class="line"><span style="color:#A6ACCD;">\u663E\u793A\u6240\u53EF\u7528\u7684\u5934\u4FE1\u606F\uFF0C\u5305\u62EC\u7B26\u53F7\u8868\u3001\u91CD\u5B9A\u4F4D\u5165\u53E3\u3002-x \u7B49\u4EF7\u4E8E-a -f -h -r -t \u540C\u65F6\u6307\u5B9A\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-z </span></span>
<span class="line"><span style="color:#A6ACCD;">--disassemble-zeroes </span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E00\u822C\u53CD\u6C47\u7F16\u8F93\u51FA\u5C06\u7701\u7565\u5927\u5757\u7684\u96F6\uFF0C\u8BE5\u9009\u9879\u4F7F\u5F97\u8FD9\u4E9B\u96F6\u5757\u4E5F\u88AB\u53CD\u6C47\u7F16\u3002 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">@file \u53EF\u4EE5\u5C06\u9009\u9879\u96C6\u4E2D\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u7136\u540E\u4F7F\u7528\u8FD9\u4E2A@file\u9009\u9879\u8F7D\u5165\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u9996\u5148\uFF0C\u5728\u7ED9\u51FA\u540E\u9762\u5927\u90E8\u5206\u6D4B\u8BD5\u6240\u57FA\u4E8E\u7684\u6E90\u4EE3\u7801\u4EE5\u53CA\u7F16\u8BD1\u6307\u4EE4\u3002 \u6E90\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># nl mytest.cpp </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">printTest</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    char a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">printTest2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">int a = 2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">a+=2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5BF9\u4EE5\u4E0A\u6E90\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># g++ -c -g mytest.cpp </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u751F\u6210\u7684\u6587\u4EF6\u662Fmytest.o\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u6D4B\u8BD5\u5305\u542B\u4E86\u8C03\u8BD5\u7684\u4FE1\u606F\uFF0C\u5BF9\u53EF\u6267\u884C\u6587\u4EF6\u7684\u6D4B\u8BD5\uFF0C\u663E\u793A\u7684\u7ED3\u679C\u7C7B\u4F3C\u3002</p><p>**\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684objdump\u7684\u7248\u672C\u53F7\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -V </span></span>
<span class="line"><span style="color:#A6ACCD;">GNU objdump 2.17.50.0.6-14.el5 20061020 </span></span>
<span class="line"><span style="color:#A6ACCD;">Copyright 2005 free Software Foundation, Inc. </span></span>
<span class="line"><span style="color:#A6ACCD;">This program is free software</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> you may redistribute it under the terms of </span></span>
<span class="line"><span style="color:#A6ACCD;">the GNU General Public License.  This program has absolutely no warranty. </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>**\u67E5\u770B\u6863\u6848\u5E93\u6587\u4EF6\u4E2D\u7684\u4FE1\u606F\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -a libmy2.a </span></span>
<span class="line"><span style="color:#A6ACCD;">In archive libmy2.a: </span></span>
<span class="line"><span style="color:#A6ACCD;">myfile.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">rwxrwxrwx 0/0   2724 Nov 16 16:06 2009 myfile.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">rw-r--r-- 0/0    727 Jul 13 15:32 2011 mytest.o </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>*<em>\u8FD9\u91CC\uFF0Clibmy2.a\u662F\u4E00\u4E2A\u4F7F\u7528ar\u547D\u4EE4\u5C06\u591A\u4E2A</em>.o\u76EE\u6807\u6587\u4EF6\u6253\u5305\u800C\u751F\u6210\u7684\u9759\u6001\u5E93\u3002\u547D\u4EE4\u7684\u8F93\u51FA\u7C7B\u4F3C<code>ar -tv</code>\uFF0C\u76F8\u6BD4\u8F83<code>ar -tv</code>\u8F93\u51FA\u5982\u4E0B\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># ar -tv libmy2.a </span></span>
<span class="line"><span style="color:#A6ACCD;">rwxrwxrwx 0/0   2724 Nov 16 16:06 2009 myfile.o </span></span>
<span class="line"><span style="color:#A6ACCD;">rw-r--r-- 0/0    727 Jul 13 15:32 2011 mytest.o </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u663E\u793A\u53EF\u7528\u7684\u67B6\u6784\u548C\u76EE\u6807\u7ED3\u6784\u5217\u8868\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -i </span></span>
<span class="line"><span style="color:#A6ACCD;">BFD header file version 2.17.50.0.6-14.el5 20061020 </span></span>
<span class="line"><span style="color:#A6ACCD;">elf32-i386 </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header little endian, data little endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">a.out-i386-linux </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header little endian, data little endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">efi-app-ia32 </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header little endian, data little endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">elf64-x86-64 </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header little endian, data little endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">elf64-little </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header little endian, data little endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">elf64-big </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header big endian, data big endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">elf32-little </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header little endian, data little endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">elf32-big </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header big endian, data big endian</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">srec </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header endianness unknown, data endianness unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">symbolsrec </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header endianness unknown, data endianness unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">tekhex </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header endianness unknown, data endianness unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">binary </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header endianness unknown, data endianness unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">ihex </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header endianness unknown, data endianness unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">trad-core </span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">header endianness unknown, data endianness unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              elf32-i386 a.out-i386-linux efi-app-ia32 elf64-x86-64 </span></span>
<span class="line"><span style="color:#A6ACCD;">          i386 elf32-i386 a.out-i386-linux efi-app-ia32 elf64-x86-64 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              elf64-little elf64-big elf32-little elf32-big srec symbolsrec </span></span>
<span class="line"><span style="color:#A6ACCD;">          i386 elf64-little elf64-big elf32-little elf32-big srec symbolsrec </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              tekhex binary ihex trad-core </span></span>
<span class="line"><span style="color:#A6ACCD;">          i386 tekhex binary ihex --------- </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u663E\u793A\u7684\u4FE1\u606F\u662F\u76F8\u5BF9\u4E8E -b \u6216\u8005 -m \u9009\u9879\u53EF\u7528\u7684\u67B6\u6784\u548C\u76EE\u6807\u683C\u5F0F\u5217\u8868\u3002</p><p>**\u663E\u793Amytest.o\u6587\u4EF6\u4E2D\u7684text\u6BB5\u7684\u5185\u5BB9\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump --section=.text -s mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">Contents of section .text: </span></span>
<span class="line"><span style="color:#A6ACCD;">0000 5589e583 ec10c645 ff61c9c3 5589e583  U......E.a..U... </span></span>
<span class="line"><span style="color:#A6ACCD;">0010 ec10c745 fc020000 008345fc 02c9c3    ...E......E.... </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u6CE8\u610F\uFF0C\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528-j\u6216\u8005--section\uFF0C\u4F8B\u5982<code>objdump --section=.text mytest.o</code>\u662F\u4E0D\u4F1A\u8FD0\u884C\u6210\u529F\u7684\u3002</p><p>**\u53CD\u6C47\u7F16mytest.o\u4E2D\u7684text\u6BB5\u5185\u5BB9\uFF0C\u5E76\u5C3D\u53EF\u80FD\u7528\u6E90\u4EE3\u7801\u5F62\u5F0F\u8868\u793A\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -j .text -S mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">Disassembly of section .text: </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z9printTestv</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">printTest</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   0:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   1:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   3:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        char a</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        a = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   6:   c6 45 ff 61             movb   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x61,0xffffffff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   a:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">   b:   c3                      ret    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">000000c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z10printTest2v</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">printTest2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   c:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   d:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   f:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        int a = 2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  12:   c7 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02 00 00 00    movl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        a+=2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  19:   83 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02             addl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  1d:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">  1e:   c3                      ret    </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u8FD9\u91CC\u6CE8\u610F\uFF0C\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528-j\u6216\u8005--section\uFF0C\u4F8B\u5982<code>objdump -j .text mytest.o\u662F\u4E0D\u4F1A\u8FD0\u884C\u6210\u529F\u7684</code>\u3002\u53E6\u5916-S\u547D\u4EE4\u5BF9\u4E8E\u5305\u542B\u8C03\u8BD5\u4FE1\u606F\u7684\u76EE\u6807\u6587\u4EF6\uFF0C\u663E\u793A\u7684\u6548\u679C\u6BD4\u8F83\u597D\uFF0C\u5982\u679C\u7F16\u8BD1\u65F6\u6CA1\u6709\u6307\u5B9Ag++\u7684-g\u9009\u9879\uFF0C\u90A3\u4E48\u76EE\u6807\u6587\u4EF6\u5C31\u4E0D\u5305\u542B\u8C03\u8BD5\u4FE1\u606F\uFF0C\u90A3\u4E48\u663E\u793A\u6548\u679C\u5C31\u5DEE\u591A\u4E86\u3002</p><p>**\u53CD\u6C47\u7F16\u51FAmytest.o\u7684\u6E90\u4EE3\u7801:\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -S mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Disassembly of section .text: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">00000000 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z9printTestv</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">printTest</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   0:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   1:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   3:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        char a</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        a = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   6:   c6 45 ff 61             movb   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x61,0xffffffff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   a:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">   b:   c3                      ret    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">0000000c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z10printTest2v</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">printTest2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   c:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   d:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   f:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">       int a = 2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  12:   c7 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02 00 00 00    movl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        a+=2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  19:   83 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02             addl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  1d:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">  1e:   c3                      ret    </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u5C24\u5176\u5F53\u7F16\u8BD1\u7684\u65F6\u5019\u6307\u5B9A\u4E86-g\u8FD9\u79CD\u8C03\u8BD5\u53C2\u6570\u65F6\uFF0C\u53CD\u6C47\u7F16\u7684\u6548\u679C\u6BD4\u8F83\u660E\u663E\u3002\u9690\u542B\u4E86-d\u53C2\u6570\u3002</p><p>**\u663E\u793A\u6587\u4EF6\u7684\u7B26\u53F7\u8868\u5165\u53E3:\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -t mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">SYMBOL TABLE: </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    df </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ABS</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  00000000 mytest.cpp </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .text  00000000 .text </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .data  00000000 .data </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .bss   00000000 .bss </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_abbrev  00000000 .debug_abbrev </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_info    00000000 .debug_info </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_line    00000000 .debug_line </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_frame   00000000 .debug_frame </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_loc     00000000 .debug_loc </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_pubnames        00000000 .debug_pubnames </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_aranges 00000000 .debug_aranges </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .note.GNU-stack        00000000 .note.GNU-stack </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .comment       00000000 .comment </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 g     F .text  0000000c _Z9printTestv </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000         </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">UND</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  00000000 __gxx_personality_v0 </span></span>
<span class="line"><span style="color:#A6ACCD;">0000000c g     F .text  00000013 _Z10printTest2v </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u8F93\u51FA\u7684\u4FE1\u606F\u7C7B\u4F3C<code>nm -s</code>\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u76F8\u6BD4\u8F83\u4E4B\u4E0B\uFF0Cnm\u547D\u4EE4\u7684\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># nm -s mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">0000000c T _Z10printTest2v </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 T _Z9printTestv </span></span>
<span class="line"><span style="color:#A6ACCD;">         U __gxx_personality_v0 </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>**\u663E\u793A\u6587\u4EF6\u7684\u7B26\u53F7\u8868\u5165\u53E3\uFF0C\u5C06\u5E95\u5C42\u7B26\u53F7\u89E3\u7801\u5E76\u8868\u793A\u6210\u7528\u6237\u7EA7\u522B:\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -t -C mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">SYMBOL TABLE: </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    df </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ABS</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  00000000 mytest.cpp </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .text  00000000 .text </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .data  00000000 .data </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .bss   00000000 .bss </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_abbrev  00000000 .debug_abbrev </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_info    00000000 .debug_info </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_line    00000000 .debug_line </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_frame   00000000 .debug_frame </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_loc     00000000 .debug_loc </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_pubnames        00000000 .debug_pubnames </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .debug_aranges 00000000 .debug_aranges </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .note.GNU-stack        00000000 .note.GNU-stack </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 l    d  .comment       00000000 .comment </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000 g     F .text  0000000c </span><span style="color:#82AAFF;">printTest</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">00000000         </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">UND</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  00000000 __gxx_personality_v0 </span></span>
<span class="line"><span style="color:#A6ACCD;">0000000c g     F .text  00000013 </span><span style="color:#82AAFF;">printTest2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u548C\u6CA1-C\u76F8\u6BD4\uFF0CprintTest2\u51FD\u6570\u53EF\u8BFB\u6027\u589E\u52A0\u4E86\u3002</p><p>**\u53CD\u6C47\u7F16\u76EE\u6807\u6587\u4EF6\u7684\u7279\u5B9A\u673A\u5668\u7801\u6BB5\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -d mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">Disassembly of section .text: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">00000000 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z9printTestv</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">   0:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   1:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   3:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#A6ACCD;">   6:   c6 45 ff 61             movb   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x61,0xffffffff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   a:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">  b:   c3                      ret    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">0000000c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z10printTest2v</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">   c:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   d:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   f:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#A6ACCD;">  12:   c7 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02 00 00 00    movl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  19:   83 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02             addl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  1d:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">  1e:   c3                      ret    </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u5BF9text\u6BB5\u7684\u5185\u5BB9\u8FDB\u884C\u4E86\u53CD\u6C47\u7F16\u3002</p><p>**\u53CD\u6C47\u7F16\u7279\u5B9A\u6BB5\uFF0C\u5E76\u5C06\u6C47\u7F16\u4EE3\u7801\u5BF9\u5E94\u7684\u6587\u4EF6\u540D\u79F0\u548C\u884C\u53F7\u5BF9\u5E94\u4E0A\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -d -l mytest.o</span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"><span style="color:#A6ACCD;">Disassembly of section .text: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">00000000 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z9printTestv</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#82AAFF;">_Z9printTestv</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:1 </span></span>
<span class="line"><span style="color:#A6ACCD;">   0:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   1:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   3:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:4 </span></span>
<span class="line"><span style="color:#A6ACCD;">   6:   c6 45 ff 61             movb   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x61,0xffffffff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:5 </span></span>
<span class="line"><span style="color:#A6ACCD;">   a:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">   b:   c3                      ret    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">0000000c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">_Z10printTest2v</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#82AAFF;">_Z10printTest2v</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">: </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:6 </span></span>
<span class="line"><span style="color:#A6ACCD;">   c:   55                      push   %ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   d:   89 e5                   mov    %esp,%ebp </span></span>
<span class="line"><span style="color:#A6ACCD;">   f:   83 ec 10                sub    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x10,%esp </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:8 </span></span>
<span class="line"><span style="color:#A6ACCD;">  12:   c7 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02 00 00 00    movl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:9 </span></span>
<span class="line"><span style="color:#A6ACCD;">  19:   83 45 </span><span style="color:#82AAFF;">fc</span><span style="color:#A6ACCD;"> 02             addl   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0x2,0xfffffffc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">%ebp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/test/04_libraryTest/mytest.cpp:10 </span></span>
<span class="line"><span style="color:#A6ACCD;">  1d:   c9                      leave  </span></span>
<span class="line"><span style="color:#A6ACCD;">  1e:   c3                      ret    </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u9879&quot;-d&quot;\u4ECEobjfile\u4E2D\u53CD\u6C47\u7F16\u90A3\u4E9B\u7279\u5B9A\u6307\u4EE4\u673A\u5668\u7801\u7684section\uFF0C\u800C\u4F7F\u7528&quot;-l&quot;\u6307\u5B9A\u7528\u6587\u4EF6\u540D\u548C\u884C\u53F7\u6807\u6CE8\u76F8\u5E94\u7684\u76EE\u6807\u4EE3\u7801\uFF0C\u4EC5\u4EC5\u548C-d\u3001-D\u6216\u8005-r\u4E00\u8D77\u4F7F\u7528\uFF0C\u4F7F\u7528-ld\u548C\u4F7F\u7528-d\u7684\u533A\u522B\u4E0D\u662F\u5F88\u5927\uFF0C\u5728\u6E90\u7801\u7EA7\u8C03\u8BD5\u7684\u65F6\u5019\u6709\u7528\uFF0C\u8981\u6C42\u7F16\u8BD1\u65F6\u4F7F\u7528\u4E86-g\u4E4B\u7C7B\u7684\u8C03\u8BD5\u7F16\u8BD1\u9009\u9879\u3002</p><p>**\u663E\u793A\u76EE\u6807\u6587\u4EF6\u5404\u4E2A\u6BB5\u7684\u5934\u90E8\u6458\u8981\u4FE1\u606F\uFF1A\xA0**</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost test</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># objdump -h mytest.o </span></span>
<span class="line"><span style="color:#A6ACCD;">mytest.o:     file format elf32-i386 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Sections: </span></span>
<span class="line"><span style="color:#A6ACCD;">Idx Name          Size      VMA       LMA       File off  Algn </span></span>
<span class="line"><span style="color:#A6ACCD;">  0 .text         0000001f  00000000  00000000  00000034  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">2 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, ALLOC, LOAD, readonly, CODE </span></span>
<span class="line"><span style="color:#A6ACCD;">  1 .data         00000000  00000000  00000000  00000054  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">2 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, ALLOC, LOAD, DATA </span></span>
<span class="line"><span style="color:#A6ACCD;">  2 .bss          00000000  00000000  00000000  00000054  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">2 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  ALLOC </span></span>
<span class="line"><span style="color:#A6ACCD;">  3 .debug_abbrev 00000046  00000000  00000000  00000054  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">  4 .debug_info   000000ed  00000000  00000000  0000009a  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, RELOC, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">  5 .debug_line   0000003e  00000000  00000000  00000187  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, RELOC, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">  6 .debug_frame  00000044  00000000  00000000  000001c8  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">2 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, RELOC, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">  7 .debug_loc    00000058  00000000  00000000  0000020c  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">  8 .debug_pubnames 0000002f  00000000  00000000  00000264  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, RELOC, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">  9 .debug_aranges 00000020  00000000  00000000  00000293  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, RELOC, READONLY, DEBUGGING </span></span>
<span class="line"><span style="color:#A6ACCD;">10 .comment      0000002e  00000000  00000000  000002b3  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, READONLY </span></span>
<span class="line"><span style="color:#A6ACCD;">11 .note.GNU-stack 00000000  00000000  00000000  000002e1  2</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">0 </span></span>
<span class="line"><span style="color:#A6ACCD;">                  CONTENTS, READONLY </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u66F4\u591A\u7684\u5185\u5BB9\u53C2\u89C1<code>man objdump</code>\u4E2D\u7684\u8FD9\u4E2A\u9009\u9879\u3002</p>`,47),c=[e];function r(o,t,i,b,A,C){return a(),n("div",null,c)}const m=s(p,[["render",r]]);export{y as __pageData,m as default};
