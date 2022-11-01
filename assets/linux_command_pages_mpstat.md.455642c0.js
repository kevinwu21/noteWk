import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const D=JSON.parse('{"title":"mpstat","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8868\u5934\u542B\u4E49","slug":"\u8868\u5934\u542B\u4E49","link":"#\u8868\u5934\u542B\u4E49","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/mpstat.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/mpstat.md"},e=l(`<h1 id="mpstat" tabindex="-1">mpstat <a class="header-anchor" href="#mpstat" aria-hidden="true">#</a></h1><p>\u663E\u793A\u5404\u4E2A\u53EF\u7528CPU\u7684\u72B6\u6001</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>mpstat\u547D\u4EE4</strong> \u4E3B\u8981\u7528\u4E8E\u591ACPU\u73AF\u5883\u4E0B\uFF0C\u5B83\u663E\u793A\u5404\u4E2A\u53EF\u7528CPU\u7684\u72B6\u6001\u4FE1\u606F\u3002\u8FD9\u4E9B\u4FE1\u606F\u5B58\u653E\u5728<code>/proc/stat</code>\u6587\u4EF6\u4E2D\u3002\u5728\u591ACPUs\u7CFB\u7EDF\u91CC\uFF0C\u5176\u4E0D\u4F46\u80FD\u67E5\u770B\u6240\u6709CPU\u7684\u5E73\u5747\u72B6\u51B5\u4FE1\u606F\uFF0C\u800C\u4E14\u80FD\u591F\u67E5\u770B\u7279\u5B9ACPU\u7684\u4FE1\u606F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mpstat </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[&lt;</span><span style="color:#A6ACCD;">\u95F4\u9694\u65F6\u95F4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[&lt;</span><span style="color:#A6ACCD;">\u6B21\u6570</span><span style="color:#89DDFF;">&gt;]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-P\uFF1A\u6307\u5B9ACPU\u7F16\u53F7\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u95F4\u9694\u65F6\u95F4\uFF1A\u6BCF\u6B21\u62A5\u544A\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u79D2\uFF09\uFF1B</li><li>\u6B21\u6570\uFF1A\u663E\u793A\u62A5\u544A\u7684\u6B21\u6570\u3002</li></ul><h3 id="\u8868\u5934\u542B\u4E49" tabindex="-1">\u8868\u5934\u542B\u4E49 <a class="header-anchor" href="#\u8868\u5934\u542B\u4E49" aria-hidden="true">#</a></h3><ul><li>%user\uFF1A\u8868\u793A\u5904\u7406\u7528\u6237\u8FDB\u7A0B\u6240\u4F7F\u7528CPU\u7684\u767E\u5206\u6BD4\u3002</li><li>%nice\uFF1A\u8868\u793A\u5728\u7528\u6237\u7EA7\u522B\u5904\u7406\u7ECFnice\u964D\u7EA7\u7684\u7A0B\u5E8F\u6240\u4F7F\u7528CPU\u7684\u767E\u5206\u6BD4\u3002</li><li>%system\uFF1A\u8868\u793A\u5185\u6838\u8FDB\u7A0B\u4F7F\u7528\u7684CPU\u767E\u5206\u6BD4\u3002</li><li>%iowait\uFF1A\u8868\u793A\u7B49\u5F85\u8FDB\u884CI/O\u6240\u5360\u7528CPU\u65F6\u95F4\u767E\u5206\u6BD4\u3002</li><li>%irq\uFF1A\u8868\u793A\u7528\u4E8E\u5904\u7406\u7CFB\u7EDF\u4E2D\u65AD\u7684CPU\u767E\u5206\u6BD4\u3002</li><li>%soft\uFF1A\u8868\u793A\u7528\u4E8E\u5904\u7406\u8F6F\u4EF6\u4E2D\u65AD\u7684CPU\u767E\u5206\u6BD4\u3002</li><li>%steal\uFF1A\u5728\u7BA1\u7406\u7A0B\u5E8F\u4E3A\u53E6\u4E00\u4E2A\u865A\u62DF\u5904\u7406\u5668\u670D\u52A1\u65F6\uFF0C\u663E\u793A\u865A\u62DF\u7684\u4E00\u4E2A\u6216\u591A\u4E2ACPU\u5728\u975E\u81EA\u613F\u7B49\u5F85\u4E2D\u82B1\u8D39\u7684\u65F6\u95F4\u7684\u767E\u5206\u6BD4\u3002</li><li>%guest\uFF1A\u8868\u793A\u4E00\u4E2A\u6216\u591A\u4E2ACPU\u5728\u8FD0\u884C\u865A\u62DF\u5904\u7406\u5668\u65F6\u6240\u82B1\u8D39\u7684\u65F6\u95F4\u767E\u5206\u6BD4\u3002</li><li>%gnice\uFF1A\u8868\u793A\u4E00\u4E2A\u6216\u591A\u4E2ACPU\u5728\u8FD0\u884C\u7ECFnice\u964D\u7EA7\u540E\u7684\u865A\u62DF\u5904\u7406\u5668\u65F6\u6240\u82B1\u8D39\u7684\u65F6\u95F4\u767E\u5206\u6BD4\u3002</li><li>%idle\uFF1ACPU\u7684\u7A7A\u95F2\u65F6\u95F4\u767E\u5206\u6BD4\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5F53mpstat\u4E0D\u5E26\u53C2\u6570\u65F6\uFF0C\u8F93\u51FA\u4E3A\u4ECE\u7CFB\u7EDF\u542F\u52A8\u4EE5\u6765\u7684\u5E73\u5747\u503C\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mpstat</span></span>
<span class="line"><span style="color:#A6ACCD;">Linux 3.10.0-1160.71.1.el7.x86_64 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">centos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      08/14/2022      _x86_64_        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4 CPU</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">04:28:36 PM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">04:28:36 PM  all    0.03    0.00    0.07    0.00    0.00    0.01    0.00    0.00    0.00   99.89</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u6BCF2\u79D2\u4EA7\u751F\u4E86\u5168\u90E8\u5904\u7406\u5668\u7684\u7EDF\u8BA1\u6570\u636E\u62A5\u544A\uFF1A</strong></p><p>\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u6BCF2\u79D2\u4EA7\u751F\u5168\u90E8\u5904\u7406\u5668\u7684\u7EDF\u8BA1\u6570\u636E\u62A5\u544A\uFF0C\u4E00\u5171\u4EA7\u751F\u4E09\u4E2Ainterval\u7684\u4FE1\u606F\uFF0C\u6700\u540E\u518D\u7ED9\u51FA\u8FD9\u4E09\u4E2Ainterval\u7684\u5E73\u5747\u4FE1\u606F\u3002\u9ED8\u8BA4\u65F6\uFF0C\u8F93\u51FA\u662F\u6309\u7167CPU\u53F7\u6392\u5E8F\u3002\u7B2C\u4E00\u4E2A\u884C\u7ED9\u51FA\u4E862\u79D2\u5185\u6240\u6709\u5904\u7406\u5668\u4F7F\u7528\u60C5\u51B5\u3002\u63A5\u4E0B\u6765\u6BCF\u884C\u5BF9\u5E94\u4E00\u4E2A\u5904\u7406\u5668\u4F7F\u7528\u60C5\u51B5\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mpstat -P ALL 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Linux 3.10.0-1160.71.1.el7.x86_64 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">centos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      08/15/2022      _x86_64_        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4 CPU</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">09:32:43 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:45 AM  all    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:45 AM    0    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:45 AM    1    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:45 AM    2    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:45 AM    3    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">09:32:45 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:47 AM  all    0.00    0.00    0.12    0.00    0.00    0.12    0.00    0.00    0.00   99.75</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:47 AM    0    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:47 AM    1    0.00    0.00    0.50    0.00    0.00    0.00    0.00    0.00    0.00   99.50</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:47 AM    2    0.00    0.00    0.00    0.00    0.00    0.50    0.00    0.00    0.00   99.50</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:47 AM    3    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">09:32:47 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:49 AM  all    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:49 AM    0    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:49 AM    1    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:49 AM    2    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">09:32:49 AM    3    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Average:     CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">Average:     all    0.00    0.00    0.04    0.00    0.00    0.04    0.00    0.00    0.00   99.92</span></span>
<span class="line"><span style="color:#A6ACCD;">Average:       0    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"><span style="color:#A6ACCD;">Average:       1    0.00    0.00    0.17    0.00    0.00    0.00    0.00    0.00    0.00   99.83</span></span>
<span class="line"><span style="color:#A6ACCD;">Average:       2    0.00    0.00    0.00    0.00    0.00    0.17    0.00    0.00    0.00   99.83</span></span>
<span class="line"><span style="color:#A6ACCD;">Average:       3    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>\u6BD4\u8F83\u5E26\u53C2\u6570\u548C\u4E0D\u5E26\u53C2\u6570\u7684mpstat\u7684\u7ED3\u679C\uFF1A</strong></p><p>\u5BF9localhost\u8FDB\u884C\u538B\u529B\u6D4B\u8BD5</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ping -f localhost</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5728\u53E6\u4E00\u4E2A\u7EC8\u7AEF\u8FD0\u884Cmpstat\u547D\u4EE4</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mpstat</span></span>
<span class="line"><span style="color:#A6ACCD;">Linux 3.10.0-1160.71.1.el7.x86_64 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">centos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      08/15/2022      _x86_64_        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4 CPU</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">09:34:20 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">09:34:20 AM  all    0.03    0.00    0.07    0.00    0.00    0.02    0.00    0.00    0.00   99.88</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u6587\u8BF4\u5230\uFF1A\u5F53mpstat\u4E0D\u5E26\u53C2\u6570\u65F6\uFF0C\u8F93\u51FA\u4E3A\u4ECE\u7CFB\u7EDF\u542F\u52A8\u4EE5\u6765\u7684\u5E73\u5747\u503C\uFF0C\u6240\u4EE5\u8FD9\u770B\u4E0D\u51FA\u4EC0\u4E48\u53D8\u5316\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mpstat</span></span>
<span class="line"><span style="color:#A6ACCD;">Linux 3.10.0-1160.71.1.el7.x86_64 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">centos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      08/15/2022      _x86_64_        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4 CPU</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">09:34:40 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">09:34:40 AM  all    0.03    0.00    0.07    0.00    0.00    0.02    0.00    0.00    0.00   99.88</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u53EA\u6709\u52A0\u4E0A\u95F4\u9694\u65F6\u95F4\u624D\u80FD\u663E\u793A\u67D0\u4E00\u6BB5\u65F6\u95F4CPU\u7684\u4F7F\u7528\u60C5\u51B5</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mpstat 3 10</span></span>
<span class="line"><span style="color:#A6ACCD;">Linux 3.10.0-1160.71.1.el7.x86_64 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">centos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      08/15/2022      _x86_64_        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4 CPU</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">09:36:21 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:24 AM  all    1.81    0.00    7.03    0.00    0.00    6.37    0.00    0.00    0.00   84.79</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:27 AM  all    1.82    0.00    6.88    0.00    0.00    5.83    0.00    0.00    0.00   85.47</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:30 AM  all    1.95    0.00    5.86    0.00    0.00    4.98    0.00    0.00    0.00   87.21</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:33 AM  all    3.95    0.00    6.50    0.00    0.00    5.46    0.00    0.00    0.00   84.09</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:36 AM  all    4.05    0.00    6.21    0.00    0.00    5.64    0.00    0.00    0.00   84.10</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:39 AM  all    4.21    0.00    6.92    0.00    0.00    5.33    0.00    0.00    0.00   83.54</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:42 AM  all    3.72    0.00    7.17    0.00    0.00    6.05    0.00    0.00    0.00   83.05</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:45 AM  all    3.97    0.00    6.93    0.00    0.00    6.65    0.00    0.00    0.00   82.46</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:48 AM  all    4.30    0.00    9.55    0.00    0.00    9.55    0.00    0.00    0.00   76.59</span></span>
<span class="line"><span style="color:#A6ACCD;">09:36:51 AM  all    4.35    0.00    9.31    0.00    0.00    8.79    0.00    0.00    0.00   77.55</span></span>
<span class="line"><span style="color:#A6ACCD;">Average:     all    3.44    0.00    7.28    0.00    0.00    6.52    0.00    0.00    0.00   82.76</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4E0A\u4E24\u8868\u663E\u793A\u51FA\u5F53\u8981\u6B63\u786E\u53CD\u6620\u7CFB\u7EDF\u7684\u60C5\u51B5\uFF0C\u9700\u8981\u6B63\u786E\u4F7F\u7528\u547D\u4EE4\u7684\u53C2\u6570\u3002vmstat \u548Ciostat \u4E5F\u9700\u8981\u6CE8\u610F\u8FD9\u4E00\u95EE\u9898\u3002</p>`,28),r=[e];function c(i,o,t,A,C,b){return a(),n("div",null,r)}const d=s(p,[["render",c]]);export{D as __pageData,d as default};
