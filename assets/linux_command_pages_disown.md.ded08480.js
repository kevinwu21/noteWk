import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"disown","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]},{"level":3,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5","link":"#\u53C2\u8003\u94FE\u63A5","children":[]}]}],"relativePath":"linux/command/pages/disown.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/disown.md"},e=l(`<h1 id="disown" tabindex="-1">disown <a class="header-anchor" href="#disown" aria-hidden="true">#</a></h1><p>\u4ECE\u5F53\u524D\u7684shell\u4E2D\u79FB\u9664\u4F5C\u4E1A\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">disown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-h</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-ar</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">jobspec ... </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> pid ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li><p>\u4ECE\u5F53\u524Dshell\u7684\u4F5C\u4E1A\u5217\u8868\u4E2D\u79FB\u9664\u5168\u90E8\u4F5C\u4E1A\u3002</p></li><li><p>\u4ECE\u5F53\u524Dshell\u7684\u4F5C\u4E1A\u5217\u8868\u4E2D\u79FB\u9664\u6307\u5B9A\u7684\u4E00\u5230\u591A\u4E2A\u4F5C\u4E1A\u3002</p></li><li><p>\u4ECE\u5F53\u524Dshell\u7684\u4F5C\u4E1A\u5217\u8868\u4E2D\u79FB\u9664\u6B63\u5728\u8FD0\u884C\u7684\u4F5C\u4E1A\u3002</p></li><li><p>\u6807\u8BB0\u4F5C\u4E1A\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u5728\u5F53\u524Dshell\u9000\u51FA\u540E\u4E5F\u4E0D\u4F1A\u7ED3\u675F\u3002</p></li></ul><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-h    \u6807\u8BB0\u6BCF\u4E2A\u4F5C\u4E1A\u6807\u8BC6\u7B26\uFF0C\u8FD9\u4E9B\u4F5C\u4E1A\u5C06\u4E0D\u4F1A\u5728shell\u63A5\u6536\u5230sighup\u4FE1\u53F7\u65F6\u63A5\u6536\u5230sighup\u4FE1\u53F7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-a    \u79FB\u9664\u6240\u6709\u7684\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-r    \u79FB\u9664\u8FD0\u884C\u7684\u4F5C\u4E1A\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>jobspec\uFF08\u53EF\u9009\uFF09\uFF1A\u8981\u79FB\u9664\u7684\u4F5C\u4E1A\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u662F\u4E00\u5230\u591A\u4E2A\u3002</p><p>pid\uFF08\u53EF\u9009\uFF09\uFF1A\u8981\u79FB\u9664\u7684\u4F5C\u4E1A\u5BF9\u5E94\u7684\u8FDB\u7A0BID\uFF0C\u53EF\u4EE5\u662F\u4E00\u5230\u591A\u4E2A\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6210\u529F\u9664\u975E\u672A\u5F00\u542F\u4F5C\u4E1A\u63A7\u5236\u6216\u6267\u884C\u51FA\u73B0\u9519\u8BEF\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u6F14\u793A\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ssh 192.168.1.4</span></span>
<span class="line"><span style="color:#A6ACCD;">user2@192.168.1.4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s password:</span></span>
<span class="line"><span style="color:#C3E88D;"># \u6B64\u65F6\u6309\u4E0Bctrl+z\u4F7F\u5F97\u4EA4\u4E92\u505C\u6B62\u3002</span></span>
<span class="line"><span style="color:#C3E88D;">[1]+  Stopped                 ssh 192.168.1.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">[user2@pc] ssh 192.168.1.7</span></span>
<span class="line"><span style="color:#C3E88D;">user2@192.168.1.7</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">s password:</span></span>
<span class="line"><span style="color:#676E95;"># \u6B64\u65F6\u6309\u4E0Bctrl+z\u4F7F\u5F97\u4EA4\u4E92\u505C\u6B62\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+  Stopped                 ssh 192.168.1.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> sleep 120 </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 28986</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5217\u51FA\u4F5C\u4E1A\u53CApid\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jobs</span><span style="color:#A6ACCD;"> -l</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">- 28756 Stopped                 ssh 192.168.1.4</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+ 28833 Stopped                 ssh 192.168.1.7</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  28986 Running                 sleep 120 </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u8FD0\u884C\u72B6\u6001\u7684\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">disown</span><span style="color:#A6ACCD;"> -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jobs</span><span style="color:#A6ACCD;"> -l</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">- 28756 Stopped                 ssh 192.168.1.4</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+ 28833 Stopped                 ssh 192.168.1.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610Fdisown\u53EA\u662F\u79FB\u9664\u4F5C\u4E1A\uFF0C\u5E76\u6CA1\u6709\u505C\u6B62\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> pgrep -a -u user2 -f </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sleep 120</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">28986 sleep 120</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u6307\u5B9A\u7684\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">disown</span><span style="color:#A6ACCD;"> %2</span></span>
<span class="line"><span style="color:#A6ACCD;">bash: warning: deleting stopped job 2 with process group 28833</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jobs</span><span style="color:#A6ACCD;"> -l</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">- 28756 Stopped                 ssh 192.168.1.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610Fdisown\u53EA\u662F\u79FB\u9664\u4F5C\u4E1A\uFF0C\u5E76\u6CA1\u6709\u505C\u6B62\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> pgrep -a -u user2 -f </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ssh 192.168.1.7</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">28833 ssh 192.168.1.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u5168\u90E8\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">disown</span><span style="color:#A6ACCD;"> -a</span></span>
<span class="line"><span style="color:#A6ACCD;">bash: warning: deleting stopped job 1 with process group 28756</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jobs</span><span style="color:#A6ACCD;"> -l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610Fdisown\u53EA\u662F\u79FB\u9664\u4F5C\u4E1A\uFF0C\u5E76\u6CA1\u6709\u505C\u6B62\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> pgrep -a -u user2 -f </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ssh 192.168.1.4</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">28756 ssh 192.168.1.4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u6F14\u793A-h\u9009\u9879\u7684\u4F5C\u7528\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> sleep 90 </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 109080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jobs</span><span style="color:#A6ACCD;"> -l</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+ 109080 Running                 sleep 90 </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">disown</span><span style="color:#A6ACCD;"> -h %1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6B64\u65F6\u524D\u4E00\u4E2A\u7EC8\u7AEF\u5DF2\u7ECF\u5173\u95ED\uFF0C\u73B0\u5728\u6253\u5F00\u65B0\u7EC8\u7AEF\u67E5\u627E\u8BE5\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> pgrep -a -u user2 -f </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sleep 90</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">109080 sleep 90</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li><code>bash</code>\u7684\u4F5C\u4E1A\u63A7\u5236\u547D\u4EE4\u5305\u62EC<code>bg fg kill wait disown suspend</code>\u3002</li><li>\u8BE5\u547D\u4EE4\u9700\u8981<code>set</code>\u9009\u9879<code>monitor</code>\u5904\u4E8E\u5F00\u542F\u72B6\u6001\u65F6\u624D\u80FD\u6267\u884C\uFF1B\u67E5\u770B\u4F5C\u4E1A\u63A7\u5236\u72B6\u6001\uFF1A\u8F93\u5165<code>set -o</code>\u67E5\u770B<code>monitor</code>\u884C\uFF1B\u6267\u884C<code>set -o monitor</code>\u6216<code>set -m</code>\u5F00\u542F\u8BE5\u9009\u9879\u3002</li><li>\u8BE5\u547D\u4EE4\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>help</code>\u547D\u4EE4\u3002</li></ol><h3 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h3><ul><li><a href="https://www.cyberciti.biz/faq/unix-linux-disown-command-examples-usage-syntax/" target="_blank" rel="noreferrer">disown\u7684\u7528\u6CD5</a></li></ul>`,20),o=[e];function r(c,t,i,D,y,A){return a(),n("div",null,o)}const F=s(p,[["render",r]]);export{C as __pageData,F as default};
