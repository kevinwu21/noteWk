import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"diff","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/diff.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/diff.md"},e=l(`<h1 id="diff" tabindex="-1">diff <a class="header-anchor" href="#diff" aria-hidden="true">#</a></h1><p>\u6BD4\u8F83\u7ED9\u5B9A\u7684\u4E24\u4E2A\u6587\u4EF6\u7684\u4E0D\u540C</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>diff\u547D\u4EE4</strong> \u5728\u6700\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\uFF0C\u6BD4\u8F83\u7ED9\u5B9A\u7684\u4E24\u4E2A\u6587\u4EF6\u7684\u4E0D\u540C\u3002\u5982\u679C\u4F7F\u7528\u201C-\u201D\u4EE3\u66FF\u201C\u6587\u4EF6\u201D\u53C2\u6570\uFF0C\u5219\u8981\u6BD4\u8F83\u7684\u5185\u5BB9\u5C06\u6765\u81EA\u6807\u51C6\u8F93\u5165\u3002diff\u547D\u4EE4\u662F\u4EE5\u9010\u884C\u7684\u65B9\u5F0F\uFF0C\u6BD4\u8F83\u6587\u672C\u6587\u4EF6\u7684\u5F02\u540C\u5904\u3002\u5982\u679C\u8BE5\u547D\u4EE4\u6307\u5B9A\u8FDB\u884C\u76EE\u5F55\u7684\u6BD4\u8F83\uFF0C\u5219\u5C06\u4F1A\u6BD4\u8F83\u8BE5\u76EE\u5F55\u4E2D\u5177\u6709\u76F8\u540C\u6587\u4EF6\u540D\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u5BF9\u5176\u5B50\u76EE\u5F55\u6587\u4EF6\u8FDB\u884C\u4EFB\u4F55\u6BD4\u8F83\u64CD\u4F5C\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">diff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u884C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u8981\u663E\u793A\u591A\u5C11\u884C\u7684\u6587\u672C\u3002\u6B64\u53C2\u6570\u5FC5\u987B\u4E0E-c\u6216-u\u53C2\u6570\u4E00\u5E76\u4F7F\u7528\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-a\u6216\u2014\u2014text\uFF1Adiff\u9884\u8BBE\u53EA\u4F1A\u9010\u884C\u6BD4\u8F83\u6587\u672C\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-b\u6216--ignore-space-change\uFF1A\u4E0D\u68C0\u67E5\u7A7A\u683C\u5B57\u7B26\u7684\u4E0D\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-B\u6216--ignore-blank-lines\uFF1A\u4E0D\u68C0\u67E5\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u663E\u793A\u5168\u90E8\u5185\u5BB9\uFF0C\u5E76\u6807\u51FA\u4E0D\u540C\u4E4B\u5904\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-C</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u884C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--context</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u884C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4E0E\u6267\u884C\u201C-c-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u884C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u201D\u6307\u4EE4\u76F8\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\u6216\u2014\u2014minimal\uFF1A\u4F7F\u7528\u4E0D\u540C\u7684\u6F14\u7B97\u6CD5\uFF0C\u4EE5\u5C0F\u7684\u5355\u4F4D\u6765\u505A\u6BD4\u8F83\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-D</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5DE8\u96C6\u540D\u79F0</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216ifdef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5DE8\u96C6\u540D\u79F0</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6B64\u53C2\u6570\u7684\u8F93\u51FA\u683C\u5F0F\u53EF\u7528\u4E8E\u524D\u7F6E\u5904\u7406\u5668\u5DE8\u96C6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-e\u6216\u2014\u2014ed\uFF1A\u6B64\u53C2\u6570\u7684\u8F93\u51FA\u683C\u5F0F\u53EF\u7528\u4E8Eed\u7684script\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\u6216-forward-ed\uFF1A\u8F93\u51FA\u7684\u683C\u5F0F\u7C7B\u4F3Ced\u7684script\u6587\u4EF6\uFF0C\u4F46\u6309\u7167\u539F\u6765\u6587\u4EF6\u7684\u987A\u5E8F\u6765\u663E\u793A\u4E0D\u540C\u5904\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-H\u6216--speed-large-files\uFF1A\u6BD4\u8F83\u5927\u6587\u4EF6\u65F6\uFF0C\u53EF\u52A0\u5FEB\u901F\u5EA6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B57\u7B26\u6216\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--ignore-matching-lines</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B57\u7B26\u6216\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u82E5\u4E24\u4E2A\u6587\u4EF6\u5728\u67D0\u51E0\u884C\u6709\u6240\u4E0D\u540C\uFF0C\u800C\u4E4B\u9645\u822A\u540C\u65F6\u90FD\u5305\u542B\u4E86\u9009\u9879\u4E2D\u6307\u5B9A\u7684\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\uFF0C\u5219\u4E0D\u663E\u793A\u8FD9\u4E24\u4E2A\u6587\u4EF6\u7684\u5DEE\u5F02\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-i\u6216--ignore-case\uFF1A\u4E0D\u68C0\u67E5\u5927\u5C0F\u5199\u7684\u4E0D\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\u6216\u2014\u2014paginate\uFF1A\u5C06\u7ED3\u679C\u4EA4\u7531pr\u7A0B\u5E8F\u6765\u5206\u9875\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\u6216\u2014\u2014rcs\uFF1A\u5C06\u6BD4\u8F83\u7ED3\u679C\u4EE5RCS\u7684\u683C\u5F0F\u6765\u663E\u793A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-N\u6216--new-file\uFF1A\u5728\u6BD4\u8F83\u76EE\u5F55\u65F6\uFF0C\u82E5\u6587\u4EF6A\u4EC5\u51FA\u73B0\u5728\u67D0\u4E2A\u76EE\u5F55\u4E2D\uFF0C\u9884\u8BBE\u4F1A\u663E\u793A\uFF1AOnly in\u76EE\u5F55\uFF0C\u6587\u4EF6A \u82E5\u4F7F\u7528-N\u53C2\u6570\uFF0C\u5219diff\u4F1A\u5C06\u6587\u4EF6A \u4E0E\u4E00\u4E2A\u7A7A\u767D\u7684\u6587\u4EF6\u6BD4\u8F83\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-p\uFF1A\u82E5\u6BD4\u8F83\u7684\u6587\u4EF6\u4E3AC\u8BED\u8A00\u7684\u7A0B\u5E8F\u7801\u6587\u4EF6\u65F6\uFF0C\u663E\u793A\u5DEE\u5F02\u6240\u5728\u7684\u51FD\u6570\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-P\u6216--unidirectional-new-file\uFF1A\u4E0E-N\u7C7B\u4F3C\uFF0C\u4F46\u53EA\u6709\u5F53\u7B2C\u4E8C\u4E2A\u76EE\u5F55\u5305\u542B\u4E86\u7B2C\u4E00\u4E2A\u76EE\u5F55\u6240\u6CA1\u6709\u7684\u6587\u4EF6\u65F6\uFF0C\u624D\u4F1A\u5C06\u8FD9\u4E2A\u6587\u4EF6\u4E0E\u7A7A\u767D\u7684\u6587\u4EF6\u505A\u6BD4\u8F83\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-q\u6216--brief\uFF1A\u4EC5\u663E\u793A\u6709\u65E0\u5DEE\u5F02\uFF0C\u4E0D\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\u6216\u2014\u2014recursive\uFF1A\u6BD4\u8F83\u5B50\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\u6216--report-identical-files\uFF1A\u82E5\u6CA1\u6709\u53D1\u73B0\u4EFB\u4F55\u5DEE\u5F02\uFF0C\u4ECD\u7136\u663E\u793A\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-S</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--starting-file</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5728\u6BD4\u8F83\u76EE\u5F55\u65F6\uFF0C\u4ECE\u6307\u5B9A\u7684\u6587\u4EF6\u5F00\u59CB\u6BD4\u8F83\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\u6216--expand-tabs\uFF1A\u5728\u8F93\u51FA\u65F6\uFF0C\u5C06tab\u5B57\u7B26\u5C55\u5F00\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-T\u6216--initial-tab\uFF1A\u5728\u6BCF\u884C\u524D\u9762\u52A0\u4E0Atab\u5B57\u7B26\u4EE5\u4FBF\u5BF9\u9F50\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-u\uFF0C-U</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5217\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--unified=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5217\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4EE5\u5408\u5E76\u7684\u65B9\u5F0F\u6765\u663E\u793A\u6587\u4EF6\u5185\u5BB9\u7684\u4E0D\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\u6216\u2014\u2014version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-w\u6216--ignore-all-space\uFF1A\u5FFD\u7565\u5168\u90E8\u7684\u7A7A\u683C\u5B57\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-W</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5BBD\u5EA6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--width</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5BBD\u5EA6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5728\u4F7F\u7528-y\u53C2\u6570\u65F6\uFF0C\u6307\u5B9A\u680F\u5BBD\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-x</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6\u540D\u6216\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--exclude</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6\u540D\u6216\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4E0D\u6BD4\u8F83\u9009\u9879\u4E2D\u6240\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-X</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--exclude-from</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1B\u60A8\u53EF\u4EE5\u5C06\u6587\u4EF6\u6216\u76EE\u5F55\u7C7B\u578B\u5B58\u6210\u6587\u672C\u6587\u4EF6\uFF0C\u7136\u540E\u5728=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E2D\u6307\u5B9A\u6B64\u6587\u672C\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-y\u6216--side-by-side\uFF1A\u4EE5\u5E76\u5217\u7684\u65B9\u5F0F\u663E\u793A\u6587\u4EF6\u7684\u5F02\u540C\u4E4B\u5904\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u663E\u793A\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--left-column\uFF1A\u5728\u4F7F\u7528-y\u53C2\u6570\u65F6\uFF0C\u82E5\u4E24\u4E2A\u6587\u4EF6\u67D0\u4E00\u884C\u5185\u5BB9\u76F8\u540C\uFF0C\u5219\u4EC5\u5728\u5DE6\u4FA7\u7684\u680F\u4F4D\u663E\u793A\u8BE5\u884C\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--suppress-common-lines\uFF1A\u5728\u4F7F\u7528-y\u53C2\u6570\u65F6\uFF0C\u4EC5\u663E\u793A\u4E0D\u540C\u4E4B\u5904\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u6587\u4EF61\uFF1A\u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u7B2C\u4E00\u4E2A\u6587\u4EF6\uFF1B</li><li>\u6587\u4EF62\uFF1A\u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><h4 id="\u4EE5\u6B63\u5E38\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02" tabindex="-1">\u4EE5\u6B63\u5E38\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02 <a class="header-anchor" href="#\u4EE5\u6B63\u5E38\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02" aria-hidden="true">#</a></h4><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">diff a.txt b.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h4 id="\u4EE5\u4E0A\u4E0B\u6587-context-\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02" tabindex="-1">\u4EE5\u4E0A\u4E0B\u6587 (context) \u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02 <a class="header-anchor" href="#\u4EE5\u4E0A\u4E0B\u6587-context-\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02" aria-hidden="true">#</a></h4><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">diff -c a.txt b.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u3000\u3000*** a1.txt 2012-08-29 16:45:41.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000--- a2.txt 2012-08-29 16:45:51.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000***************</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000*** 1,7 ****</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000!a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000--- 1,7 ----</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000!b</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u4EE5\u8054\u5408-unified-\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02" tabindex="-1">\u4EE5\u8054\u5408 (unified) \u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02 <a class="header-anchor" href="#\u4EE5\u8054\u5408-unified-\u6A21\u5F0F\u6BD4\u8F83\u5DEE\u5F02" aria-hidden="true">#</a></h4><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">diff -u a.txt b.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u3000\u3000--- a.txt 2012-08-29 16:45:41.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000+++ b.txt 2012-08-29 16:45:51.000000000 +0800</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000@@ -1,7 +1,7 @@</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000-a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000+b</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000 a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u591A\u6587\u4EF6\u6BD4\u8F83\u5DEE\u5F02" tabindex="-1">\u591A\u6587\u4EF6\u6BD4\u8F83\u5DEE\u5F02 <a class="header-anchor" href="#\u591A\u6587\u4EF6\u6BD4\u8F83\u5DEE\u5F02" aria-hidden="true">#</a></h4><p>\u5C06\u76EE\u5F55<code>/usr/li</code>\u4E0B\u7684\u6587\u4EF6&quot;test.txt&quot;\u4E0E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6&quot;test.txt&quot;\u8FDB\u884C\u6BD4\u8F83\uFF0C\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">diff /usr/li test.txt     </span><span style="color:#676E95;">#\u4F7F\u7528diff\u6307\u4EE4\u5BF9\u6587\u4EF6\u8FDB\u884C\u6BD4\u8F83</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u6267\u884C\u540E\uFF0C\u4F1A\u5C06\u6BD4\u8F83\u540E\u7684\u4E0D\u540C\u4E4B\u5904\u4EE5\u6307\u5B9A\u7684\u5F62\u5F0F\u5217\u51FA\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">n1 a n3,n4  </span></span>
<span class="line"><span style="color:#A6ACCD;">n1,n2 d n3  </span></span>
<span class="line"><span style="color:#A6ACCD;">n1,n2 c n3,n4 </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5176\u4E2D\uFF0C\u5B57\u6BCD&quot;a&quot;\u3001&quot;d&quot;\u3001&quot;c&quot;\u5206\u522B\u8868\u793A\u6DFB\u52A0\u3001\u5220\u9664\u53CA\u4FEE\u6539\u64CD\u4F5C\u3002\u800C&quot;n1&quot;\u3001&quot;n2&quot;\u8868\u793A\u5728\u6587\u4EF61\u4E2D\u7684\u884C\u53F7\uFF0C&quot;n3&quot;\u3001&quot;n4&quot;\u8868\u793A\u5728\u6587\u4EF62\u4E2D\u7684\u884C\u53F7\u3002</p><p>\u6CE8\u610F\uFF1A\u4EE5\u4E0A\u8BF4\u660E\u6307\u5B9A\u4E86\u4E24\u4E2A\u6587\u4EF6\u4E2D\u4E0D\u540C\u5904\u7684\u884C\u53F7\u53CA\u5176\u76F8\u5E94\u7684\u64CD\u4F5C\u3002\u5728\u8F93\u51FA\u5F62\u5F0F\u4E2D\uFF0C\u6BCF\u4E00\u884C\u540E\u9762\u5C06\u8DDF\u968F\u53D7\u5230\u5F71\u54CD\u7684\u82E5\u5E72\u884C\u3002\u5176\u4E2D\uFF0C\u4EE5&lt;\u5F00\u59CB\u7684\u884C\u5C5E\u4E8E\u6587\u4EF61\uFF0C\u4EE5&gt;\u5F00\u59CB\u7684\u884C\u5C5E\u4E8E\u6587\u4EF62\u3002</p>`,26),r=[e];function c(o,t,i,A,C,b){return a(),n("div",null,r)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
