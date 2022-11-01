import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const u=JSON.parse('{"title":"telnet","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/telnet.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/telnet.md"},p=l(`<h1 id="telnet" tabindex="-1">telnet <a class="header-anchor" href="#telnet" aria-hidden="true">#</a></h1><p>\u767B\u5F55\u8FDC\u7A0B\u4E3B\u673A\u548C\u7BA1\u7406(\u6D4B\u8BD5ip\u7AEF\u53E3\u662F\u5426\u8FDE\u901A)</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>telnet\u547D\u4EE4</strong> \u7528\u4E8E\u767B\u5F55\u8FDC\u7A0B\u4E3B\u673A\uFF0C\u5BF9\u8FDC\u7A0B\u4E3B\u673A\u8FDB\u884C\u7BA1\u7406\u3002telnet\u56E0\u4E3A\u91C7\u7528\u660E\u6587\u4F20\u9001\u62A5\u6587\uFF0C\u5B89\u5168\u6027\u4E0D\u597D\uFF0C\u5F88\u591ALinux\u670D\u52A1\u5668\u90FD\u4E0D\u5F00\u653Etelnet\u670D\u52A1\uFF0C\u800C\u6539\u7528\u66F4\u5B89\u5168\u7684ssh\u65B9\u5F0F\u4E86\u3002\u4F46\u4ECD\u7136\u6709\u5F88\u591A\u522B\u7684\u7CFB\u7EDF\u53EF\u80FD\u91C7\u7528\u4E86telnet\u65B9\u5F0F\u6765\u63D0\u4F9B\u8FDC\u7A0B\u767B\u5F55\uFF0C\u56E0\u6B64\u5F04\u6E05\u695Atelnet\u5BA2\u6237\u7AEF\u7684\u4F7F\u7528\u65B9\u5F0F\u4ECD\u662F\u5F88\u6709\u5FC5\u8981\u7684\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">telnet</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-8\uFF1A\u5141\u8BB8\u4F7F\u75288\u4F4D\u5B57\u7B26\u8D44\u6599\uFF0C\u5305\u62EC\u8F93\u5165\u4E0E\u8F93\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u5C1D\u8BD5\u81EA\u52A8\u767B\u5165\u8FDC\u7AEF\u7CFB\u7EDF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-b</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4E3B\u673A\u522B\u540D</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4F7F\u7528\u522B\u540D\u6307\u5B9A\u8FDC\u7AEF\u4E3B\u673A\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u4E0D\u8BFB\u53D6\u7528\u6237\u4E13\u5C5E\u76EE\u5F55\u91CC\u7684.telnetrc\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u542F\u52A8\u6392\u9519\u6A21\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-e</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u8131\u79BB\u5B57\u7B26</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u8131\u79BB\u5B57\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-E\uFF1A\u6EE4\u9664\u8131\u79BB\u5B57\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u53C2\u6570\u76F8\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-F\uFF1A\u4F7F\u7528Kerberos V5\u8BA4\u8BC1\u65F6\uFF0C\u52A0\u4E0A\u6B64\u53C2\u6570\u53EF\u628A\u672C\u5730\u4E3B\u673A\u7684\u8BA4\u8BC1\u6570\u636E\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4E3B\u673A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-k</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u57DF\u540D</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4F7F\u7528Kerberos\u8BA4\u8BC1\u65F6\uFF0C\u52A0\u4E0A\u6B64\u53C2\u6570\u8BA9\u8FDC\u7AEF\u4E3B\u673A\u91C7\u7528\u6307\u5B9A\u7684\u9886\u57DF\u540D\uFF0C\u800C\u975E\u8BE5\u4E3B\u673A\u7684\u57DF\u540D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-K\uFF1A\u4E0D\u81EA\u52A8\u767B\u5165\u8FDC\u7AEF\u4E3B\u673A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7528\u6237\u540D\u79F0</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u8981\u767B\u5165\u8FDC\u7AEF\u4E3B\u673A\u7684\u7528\u6237\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-L\uFF1A\u5141\u8BB8\u8F93\u51FA8\u4F4D\u5B57\u7B26\u8D44\u6599\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-n</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u8BB0\u5F55\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u6587\u4EF6\u8BB0\u5F55\u76F8\u5173\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A\u4F7F\u7528\u7C7B\u4F3Crlogin\u6307\u4EE4\u7684\u7528\u6237\u754C\u9762\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-S</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u670D\u52A1\u7C7B\u578B</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6Etelnet\u8FDE\u7EBF\u6240\u9700\u7684ip TOS\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-x\uFF1A\u5047\u8BBE\u4E3B\u673A\u6709\u652F\u6301\u6570\u636E\u52A0\u5BC6\u7684\u529F\u80FD\uFF0C\u5C31\u4F7F\u7528\u5B83\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-X</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u8BA4\u8BC1\u5F62\u6001</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5173\u95ED\u6307\u5B9A\u7684\u8BA4\u8BC1\u5F62\u6001\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u8FDC\u7A0B\u4E3B\u673A\uFF1A\u6307\u5B9A\u8981\u767B\u5F55\u8FDB\u884C\u7BA1\u7406\u7684\u8FDC\u7A0B\u4E3B\u673A\uFF1B</li><li>\u7AEF\u53E3\uFF1A\u6307\u5B9ATELNET\u534F\u8BAE\u4F7F\u7528\u7684\u7AEF\u53E3\u53F7\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ telnet 192.168.2.10</span></span>
<span class="line"><span style="color:#A6ACCD;">Trying 192.168.2.10...</span></span>
<span class="line"><span style="color:#A6ACCD;">Connected to 192.168.2.10 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">192.168.2.10</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Escape character is </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    localhost </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Linux release 2.6.18-274.18.1.el5 </span><span style="color:#676E95;">#1 SMP Thu Feb 9 12:45:44 EST 2012) (1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">login: root</span></span>
<span class="line"><span style="color:#A6ACCD;">Password:</span></span>
<span class="line"><span style="color:#A6ACCD;">Login incorrect</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5141\u8BB8root\u4ECE\u8FDC\u7A0B\u767B\u5F55\uFF0C\u53EF\u4EE5\u5148\u7528\u666E\u901A\u8D26\u53F7\u767B\u5F55\uFF0C\u7136\u540E\u518D\u7528su -\u5207\u5230root\u7528\u6237\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ telnet 192.168.188.132</span></span>
<span class="line"><span style="color:#A6ACCD;">Trying 192.168.188.132...</span></span>
<span class="line"><span style="color:#A6ACCD;">telnet: connect to address 192.168.188.132: Connection refused</span></span>
<span class="line"><span style="color:#A6ACCD;">telnet: Unable to connect to remote host</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5904\u7406\u8FD9\u79CD\u60C5\u51B5\u65B9\u6CD5\uFF1A</p><ol><li>\u786E\u8BA4ip\u5730\u5740\u662F\u5426\u6B63\u786E\uFF1F</li><li>\u786E\u8BA4ip\u5730\u5740\u5BF9\u5E94\u7684\u4E3B\u673A\u662F\u5426\u5DF2\u7ECF\u5F00\u673A\uFF1F</li><li>\u5982\u679C\u4E3B\u673A\u5DF2\u7ECF\u542F\u52A8\uFF0C\u786E\u8BA4\u8DEF\u7531\u8BBE\u7F6E\u662F\u5426\u8BBE\u7F6E\u6B63\u786E\uFF1F\uFF08\u4F7F\u7528route\u547D\u4EE4\u67E5\u770B\uFF09</li><li>\u5982\u679C\u4E3B\u673A\u5DF2\u7ECF\u542F\u52A8\uFF0C\u786E\u8BA4\u4E3B\u673A\u4E0A\u662F\u5426\u5F00\u542F\u4E86telnet\u670D\u52A1\uFF1F\uFF08\u4F7F\u7528netstat\u547D\u4EE4\u67E5\u770B\uFF0CTCP\u768423\u7AEF\u53E3\u662F\u5426\u6709LISTEN\u72B6\u6001\u7684\u884C\uFF09</li><li>\u5982\u679C\u4E3B\u673A\u5DF2\u7ECF\u542F\u52A8telnet\u670D\u52A1\uFF0C\u786E\u8BA4\u9632\u706B\u5899\u662F\u5426\u653E\u5F00\u4E8623\u7AEF\u53E3\u7684\u8BBF\u95EE\uFF1F\uFF08\u4F7F\u7528iptables-save\u67E5\u770B\uFF09</li></ol><p><strong>\u542F\u52A8telnet\u670D\u52A1</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">service xinetd restart</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u53C2\u6570\uFF0C\u901A\u5E38\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">service telnet</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    disable = no </span><span style="color:#676E95;">#\u542F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    flags = REUSE </span><span style="color:#676E95;">#socket\u53EF\u91CD\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    socket_type = stream </span><span style="color:#676E95;">#\u8FDE\u63A5\u65B9\u5F0F\u4E3ATCP</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">wait</span><span style="color:#A6ACCD;"> = no </span><span style="color:#676E95;">#\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    user = root </span><span style="color:#676E95;">#\u542F\u52A8\u670D\u52A1\u7684\u7528\u6237\u4E3Aroot</span></span>
<span class="line"><span style="color:#A6ACCD;">    server = /usr/sbin/in.telnetd </span><span style="color:#676E95;">#\u8981\u6FC0\u6D3B\u7684\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    log_on_failure += USERID </span><span style="color:#676E95;">#\u767B\u5F55\u5931\u8D25\u65F6\u8BB0\u5F55\u767B\u5F55\u7528\u6237\u540D</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5982\u679C\u8981\u914D\u7F6E\u5141\u8BB8\u767B\u5F55\u7684\u5BA2\u6237\u7AEF\u5217\u8868\uFF0C\u52A0\u5165</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">only_from = 192.168.0.2 #\u53EA\u5141\u8BB8192.168.0.2\u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8981\u914D\u7F6E\u7981\u6B62\u767B\u5F55\u7684\u5BA2\u6237\u7AEF\u5217\u8868\uFF0C\u52A0\u5165</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">no_access = 192.168.0.{2,3,4} #\u7981\u6B62192.168.0.2\u3001192.168.0.3\u3001192.168.0.4\u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8981\u8BBE\u7F6E\u5F00\u653E\u65F6\u6BB5\uFF0C\u52A0\u5165</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">access_times = 9:00-12:00 13:00-17:00 # \u6BCF\u5929\u53EA\u6709\u8FD9\u4E24\u4E2A\u65F6\u6BB5\u5F00\u653E\u670D\u52A1\uFF08\u6211\u4EEC\u7684\u4E0A\u73ED\u65F6\u95F4\uFF1AP\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4F60\u6709\u4E24\u4E2AIP\u5730\u5740\uFF0C\u4E00\u4E2A\u662F\u79C1\u7F51\u7684IP\u5730\u5740\u5982192.168.0.2\uFF0C\u4E00\u4E2A\u662F\u516C\u7F51\u7684IP\u5730\u5740\u5982218.75.74.83\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u7528\u6237\u53EA\u80FD\u4ECE\u79C1\u7F51\u6765\u767B\u5F55telnet\u670D\u52A1\uFF0C\u90A3\u4E48\u52A0\u5165</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">bind = 192.168.0.2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5404\u914D\u7F6E\u9879\u5177\u4F53\u7684\u542B\u4E49\u548C\u8BED\u6CD5\u53EF\u53C2\u8003xined\u914D\u7F6E\u6587\u4EF6\u5C5E\u6027\u8BF4\u660E\uFF08man xinetd.conf\uFF09</p><p>\u914D\u7F6E\u7AEF\u53E3\uFF0C\u4FEE\u6539services\u6587\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># vi /etc/services</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u627E\u5230\u4EE5\u4E0B\u4E24\u53E5</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">telnet 23/tcp</span></span>
<span class="line"><span style="color:#A6ACCD;">telnet 23/udp</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u524D\u9762\u6709#\u5B57\u7B26\uFF0C\u5C31\u53BB\u6389\u5B83\u3002telnet\u7684\u9ED8\u8BA4\u7AEF\u53E3\u662F23\uFF0C\u8FD9\u4E2A\u7AEF\u53E3\u4E5F\u662F\u9ED1\u5BA2\u7AEF\u53E3\u626B\u63CF\u7684\u4E3B\u8981\u5BF9\u8C61\uFF0C\u56E0\u6B64\u6700\u597D\u5C06\u8FD9\u4E2A\u7AEF\u53E3\u4FEE\u6539\u6389\uFF0C\u4FEE\u6539\u7684\u65B9\u6CD5\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5C0623\u8FD9\u4E2A\u6570\u5B57\u4FEE\u6539\u6389\uFF0C\u6539\u6210\u5927\u4E00\u70B9\u7684\u6570\u5B57\uFF0C\u6BD4\u598261123\u3002\u6CE8\u610F\uFF0C1024\u4EE5\u4E0B\u7684\u7AEF\u53E3\u53F7\u662Finternet\u4FDD\u7559\u7684\u7AEF\u53E3\u53F7\uFF0C\u56E0\u6B64\u6700\u597D\u4E0D\u8981\u7528\uFF0C\u8FD8\u5E94\u8BE5\u6CE8\u610F\u4E0D\u8981\u4E0E\u5176\u5B83\u670D\u52A1\u7684\u7AEF\u53E3\u51B2\u7A81\u3002</p><p>\u542F\u52A8\u670D\u52A1\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">service xinetd restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,36),r=[p];function c(o,t,i,b,d,C){return a(),n("div",null,r)}const D=s(e,[["render",c]]);export{u as __pageData,D as default};