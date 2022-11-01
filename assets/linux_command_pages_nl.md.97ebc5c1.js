import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"nl","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/nl.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/nl.md"},e=l(`<h1 id="nl" tabindex="-1">nl <a class="header-anchor" href="#nl" aria-hidden="true">#</a></h1><p>\u4E3A\u6BCF\u4E00\u4E2A\u6587\u4EF6\u6DFB\u52A0\u884C\u53F7\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">nl </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FILE</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u5C06\u6BCF\u4E00\u4E2A\u8F93\u5165\u7684\u6587\u4EF6\u6DFB\u52A0\u884C\u53F7\u540E\u53D1\u9001\u5230\u6807\u51C6\u8F93\u51FA\u3002</li><li>\u5F53\u6CA1\u6709\u6587\u4EF6\u6216\u6587\u4EF6\u4E3A<code>-</code>\u65F6\uFF0C\u8BFB\u53D6\u6807\u51C6\u8F93\u5165</li><li>\u5904\u7406\u903B\u8F91\u9875\uFF08logical page\uFF09\u3002</li></ul><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-b, --body-numbering=STYLE           \u4F7F\u7528STYLE \u4E3Abody\u90E8\u5206\u7684\u884C\u9644\u52A0\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d, --section-delimiter=CC           \u4F7F\u7528CC\u4F5C\u4E3Alogical page\u7684\u5206\u9694\u7B26\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-f, --footer-numbering=STYLE         \u4F7F\u7528STYLE \u4E3Afooter\u90E8\u5206\u7684\u884C\u9644\u52A0\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-h, --header-numbering=STYLE         \u4F7F\u7528STYLE \u4E3Aheader\u90E8\u5206\u7684\u884C\u9644\u52A0\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-i, --line-increment=NUMBER          \u884C\u53F7\u9012\u589E\u95F4\u9694\u4E3ANUMBER\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-l, --join-blank-lines=NUMBER        \u8FDE\u7EEDNUMBER\u884C\u7684\u7A7A\u884C\u4F5C\u4E3A\u4E00\u884C\u5904\u7406\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-n, --number-format=FORMAT           \u6839\u636EFORMAT\u63D2\u5165\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-p, --no-renumber                    \u4E0D\u8981\u5728\u6BCF\u4E2A\u90E8\u5206\u91CD\u7F6E\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s, --number-separator=STRING        \u5728\u884C\u53F7\u540E\u6DFB\u52A0\u5B57\u7B26\u4E32STRING\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-v, --starting-line-number=NUMBER    \u6BCF\u90E8\u5206\u7684\u8D77\u59CB\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-w, --number-width=NUMBER            \u884C\u53F7\u5BBD\u5EA6\u4E3ANUMBER\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--help                               \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version                            \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u9ED8\u8BA4\u9009\u9879\u4E3A\uFF1A-bt -d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\\:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> -fn -hn -i1 -l1 -nrn -sTAB -v1 -w6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CC\u662F\u7531\u4E24\u4E2A\u5B57\u7B26\u7EC4\u6210\u7684\uFF0C\u9ED8\u8BA4\u4E3A\\: ,\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u5982\u679C\u7F3A\u5931\u5219\u9ED8\u8BA4\u4E3A:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">STYLE\u53EF\u4EE5\u4E3A\u4E0B\u5217\u53EF\u7528\u503C\u4E4B\u4E00\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a       \u6240\u6709\u884C\u6807\u8BB0\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">t       \u4EC5\u4E3A\u975E\u7A7A\u884C\u6807\u8BB0\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">n       \u4E0D\u6807\u8BB0\u884C\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">pBRE    \u7B26\u5408\u57FA\u7840\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08BRE\uFF09\u7684\u884C\u4F1A\u6807\u8BB0\u884C\u53F7\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">FORMAT\u53EF\u4EE5\u4E3A\u4E0B\u5217\u53EF\u7528\u503C\u4E4B\u4E00\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ln    \u5DE6\u5BF9\u9F50\uFF0C\u4E0D\u4F1A\u5728\u5F00\u59CB\u90E8\u5206\u8865\u51450\u4EE5\u6EE1\u8DB3\u5BBD\u5EA6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">rn    \u53F3\u5BF9\u9F50\uFF0C\u4E0D\u4F1A\u5728\u5F00\u59CB\u90E8\u5206\u8865\u51450\u4EE5\u6EE1\u8DB3\u5BBD\u5EA6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">rz    \u53F3\u5BF9\u9F50\uFF0C\u4F1A\u5728\u5F00\u59CB\u90E8\u5206\u8865\u51450\u4EE5\u6EE1\u8DB3\u5BBD\u5EA6\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">logical page</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E09\u90E8\u5206\u7EC4\u6210\uFF08header\uFF0C body\uFF0C footer\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8D77\u59CB\u6807\u8BB0\uFF08header \\:\\:\\:\uFF0C body \\:\\:\uFF0C footer \\:\uFF09</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>FILE\uFF08\u53EF\u9009\uFF09\uFF1A\u8981\u5904\u7406\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4E3A\u4E00\u6216\u591A\u4E2A\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE0\u8868\u793A\u6210\u529F\uFF0C\u8FD4\u56DE\u975E0\u503C\u8868\u793A\u5931\u8D25\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">nl_logicalpage.txt\uFF1A\u8BE5\u6587\u4EF6\u7528\u4E8E\u8BF4\u660Enl\u547D\u4EE4\u5904\u7406\u903B\u8F91\u9875\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\\:\\:\\:</span></span>
<span class="line"><span style="color:#A6ACCD;">header_1</span></span>
<span class="line"><span style="color:#A6ACCD;">\\:\\:</span></span>
<span class="line"><span style="color:#A6ACCD;">body_1</span></span>
<span class="line"><span style="color:#A6ACCD;">\\:</span></span>
<span class="line"><span style="color:#A6ACCD;">footer_1</span></span>
<span class="line"><span style="color:#A6ACCD;">\\:\\:\\:</span></span>
<span class="line"><span style="color:#A6ACCD;">header_2</span></span>
<span class="line"><span style="color:#A6ACCD;">\\:\\:</span></span>
<span class="line"><span style="color:#A6ACCD;">body_2</span></span>
<span class="line"><span style="color:#A6ACCD;">\\:</span></span>
<span class="line"><span style="color:#A6ACCD;">footer_2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ nl nl_logicalpage.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       header_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     1	body_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       footer_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       header_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     1	body_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       footer_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ nl -v0 -fa -ha nl_logicalpage.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     0	header_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     1	body_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     2	footer_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     0	header_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     1	body_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     2	footer_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ nl -p -fa -ha nl_logicalpage.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     1	header_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     2	body_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     3	footer_1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     4	header_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     5	body_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     6	footer_2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">nl_normal.txt\uFF1A\u8BE5\u6587\u4EF6\u7528\u4E8E\u8BF4\u660Enl\u547D\u4EE4\u5904\u7406\u666E\u901A\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">ZhuangZhu-74</span></span>
<span class="line"><span style="color:#A6ACCD;">2019-11-21</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ nl nl_normal.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">     1	ZhuangZhu-74</span></span>
<span class="line"><span style="color:#A6ACCD;">     2	2019-11-21</span></span>
<span class="line"><span style="color:#A6ACCD;">     3	127.0.0.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ nl -b p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1$</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> nl_normal.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">       ZhuangZhu-74</span></span>
<span class="line"><span style="color:#A6ACCD;">     1	2019-11-21</span></span>
<span class="line"><span style="color:#A6ACCD;">     2	127.0.0.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ nl -b p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^[A-Z]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> nl_normal.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">     1	ZhuangZhu-74</span></span>
<span class="line"><span style="color:#A6ACCD;">       2019-11-21</span></span>
<span class="line"><span style="color:#A6ACCD;">       127.0.0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>man -s 1 nl</code>\uFF0C<code>info coreutils &#39;nl invocation&#39;</code>\u3002</li></ol>`,19),r=[e];function c(o,i,b,t,C,A){return a(),n("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
