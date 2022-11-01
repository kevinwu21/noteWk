import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"ntpdate","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]}]}],"relativePath":"linux/command/pages/ntpdate.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/ntpdate.md"},e=l(`<h1 id="ntpdate" tabindex="-1">ntpdate <a class="header-anchor" href="#ntpdate" aria-hidden="true">#</a></h1><p>\u4F7F\u7528\u7F51\u7EDC\u8BA1\u65F6\u534F\u8BAE\uFF08NTP\uFF09\u8BBE\u7F6E\u65E5\u671F\u548C\u65F6\u95F4</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>ntpdate\u547D\u4EE4</strong> \u662F\u7528\u6765\u8BBE\u7F6E\u672C\u5730\u65E5\u671F\u548C\u65F6\u95F4\u3002\u5B83\u4ECE\u6307\u5B9A\u7684\u6BCF\u4E2A\u670D\u52A1\u5668\u83B7\u5F97\u4E86\u4E00\u4E9B\u6837\u672C\uFF0C\u5E76\u5E94\u7528\u6807\u51C6 NTP \u65F6\u949F\u8FC7\u6EE4\u5668\u548C\u9009\u62E9\u7B97\u6CD5\u6765\u9009\u62E9\u6700\u597D\u7684\u6837\u672C\u3002</p><p>\u6B64 ntpdate \u547D\u4EE4\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\u8FDB\u884C\u65F6\u95F4\u8C03\u6574\uFF1A</p><ul><li>\u5982\u679C\u5B83\u786E\u5B9A\u65F6\u949F\u504F\u5DEE\u8D85\u8FC7 0.5 \u79D2\uFF0C\u5B83\u901A\u8FC7\u8C03\u7528 settimeofday \u5B50\u4F8B\u7A0B\u8BBE\u7F6E\u65F6\u949F\u65F6\u95F4\u3002\u5728\u5F15\u5BFC\u65F6\u95F4\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9996\u9009\u7684\u65B9\u6CD5\u3002</li><li>\u5982 \u679C\u5B83\u786E\u5B9A\u65F6\u949F\u504F\u5DEE\u5C0F\u4E8E 0.5 \u79D2\uFF0C\u5B83\u901A\u8FC7\u8C03\u7528 adjtime \u5B50\u4F8B\u7A0B\u548C\u504F\u79FB\u91CF\u6765\u8C03\u6574\u65F6\u949F\u65F6\u95F4\u3002\u6B64\u65B9\u6CD5\u503E\u5411\u4E8E\u7528\u727A\u7272\u4E00\u4E9B\u7A33\u5B9A\u6027\u6765\u4FDD\u6301\u6F02\u79FB\u65F6\u949F\u66F4\u52A0\u51C6\u786E\u3002 \u5F53\u4E0D\u662F\u901A\u8FC7\u8FD0\u884C\u4E00\u4E2A\u5B88\u62A4\u7A0B\u5E8F\u800C\u662F\u4ECE cron \u547D\u4EE4\u6709\u89C4\u5219\u7684\u8FD0\u884Cntpdate \u547D\u4EE4\u65F6\uFF0C\u6BCF\u4E00\u5C0F\u65F6\u6216\u4E24\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u53EF\u4EE5\u4FDD\u8BC1\u8DB3\u591F\u7684\u8D70\u65F6\u7CBE\u5EA6\uFF0C\u4ECE\u800C\u907F\u514D\u8C03\u6574\u65F6\u949F\u3002</li></ul><p>\u4F7F\u7528\u5F88\u591A\u670D\u52A1\u5668\u53EF\u4EE5\u5927\u5E45\u5EA6\u6539\u5584 ntpdate \u547D\u4EE4\u7684\u53EF\u9760\u6027\u4E0E\u7CBE\u5EA6\u3002\u5C3D\u7BA1\u80FD\u4F7F\u7528\u5355\u4E00\u670D\u52A1\u5668\uFF0C\u4F46\u60A8\u80FD\u901A\u8FC7\u63D0\u4F9B\u81F3\u5C11\u4E09\u4E2A\u6216\u56DB\u4E2A\u670D\u52A1\u5668\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u7C7B\u4F3C xntpd \u5B88\u62A4\u7A0B\u5E8F\u7684 NTP \u670D\u52A1\u5668\u5B88\u62A4\u7A0B\u5E8F\u6B63\u5728\u540C\u4E00\u4E3B\u673A\u4E0A\u8FD0\u884C\uFF0C\u547D\u4EE4\u5C06\u62D2\u7EDDntpdate \u8BBE\u7F6E\u65E5\u671F\u3002</p><p>\u4F60\u5FC5\u987B\u6709 root \u6743\u9650\u624D\u80FD\u5728\u4E3B\u673A\u4E0A\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ntpdate </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-b]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-s]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-u]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-a</span><span style="color:#A6ACCD;">Keyid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-e</span><span style="color:#A6ACCD;">AuthenticationDelay</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-k</span><span style="color:#A6ACCD;">KeyFile</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-o</span><span style="color:#A6ACCD;">Version</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-p</span><span style="color:#A6ACCD;">Samples</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-t</span><span style="color:#A6ACCD;">TimeOut</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Server...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-aKeyid               </span><span style="color:#676E95;"># \u4F7F\u7528 Keyid \u6765\u8BA4\u8BC1\u5168\u90E8\u6570\u636E\u5305\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-b                    </span><span style="color:#676E95;"># \u901A\u8FC7\u8C03\u7528 settimeofday \u5B50\u4F8B\u7A0B\u6765\u589E\u52A0\u65F6\u949F\u7684\u65F6\u95F4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d                    </span><span style="color:#676E95;"># \u6307\u5B9A\u8C03\u8BD5\u65B9\u5F0F\u3002\u5224\u65AD ntpdate \u547D\u4EE4\u4F1A\u4EA7\u751F\u4EC0\u4E48\u7ED3\u679C\uFF08\u4E0D\u4EA7\u751F\u5B9E\u9645\u7684\u7ED3\u679C\uFF09\u3002\u7ED3\u679C\u518D\u73B0\u5728\u5C4F\u5E55\u4E0A\u3002\u8FD9\u4E2A\u6807\u5FD7\u4F7F\u7528\u65E0\u7279\u6743\u7684\u7AEF\u53E3\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-eAuthenticationDelay </span><span style="color:#676E95;"># \u6307\u5B9A\u5EF6\u8FDF\u8BA4\u8BC1\u5904\u7406\u7684\u65F6\u95F4\u79D2\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-kKeyFile             </span><span style="color:#676E95;"># \u5F53\u4E0D\u4F7F\u7528\u7F3A\u7701\u503C /etc/ntp.keys \u6587\u4EF6\u65F6\uFF0C\u4E3A\u5305\u542B\u5BC6\u94A5\u7684\u6587\u4EF6\u6307\u5B9A\u4E00\u4E2A\u4E0D\u540C\u7684\u540D\u79F0\u3002 \u8BF7\u53C2\u9605\u6587\u4EF6KeyFile\u7684\u63CF\u8FF0\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-oVersion             </span><span style="color:#676E95;"># \u5F53\u8F6E\u8BE2\u5B83\u7684\u53D1\u51FA\u6570\u636E\u5305\u65F6\uFF0C\u6307\u5B9A\u4F7F\u7528\u7684 NTP \u7248\u672C\u5B9E\u73B0\u3002 Version \u7684\u503C\u53EF\u4EE5\u662F 1\uFF0C2\uFF0C3\u3002\u7F3A\u7701\u503C\u662F 3\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-pSamples             </span><span style="color:#676E95;"># \u6307\u5B9A\u4ECE\u6BCF\u4E2A\u670D\u52A1\u5668\u83B7\u53D6\u7684\u6837\u672C\u7684\u6570\u76EE\u3002 Samples \u7684\u503C\u5728 1 \u548C 8 \u4E4B\u95F4\uFF0C\u5E76\u5305\u62EC 1 \u548C 8\u3002\u5B83\u7684\u7F3A\u7701\u503C\u662F 4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s                    </span><span style="color:#676E95;"># \u6307\u5B9A\u65E5\u5FD7\u64CD\u4F5C syslog \u8BBE\u65BD\u7684\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u6807\u51C6\u8F93\u51FA\u3002 \u5F53\u8FD0\u884C ntpdate \u547D\u4EE4\u548C cron\u547D\u4EE4\u65F6\uFF0C\u5B83\u662F\u5F88\u6709\u7528\u7684\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-tTimeOut             </span><span style="color:#676E95;"># \u6307\u5B9A\u7B49\u5F85\u54CD\u5E94\u7684\u65F6\u95F4\u3002\u7ED9\u5B9A TimeOut \u7684\u503C\u56DB\u820D\u4E94\u5165\u4E3A 0.2 \u79D2\u7684\u500D\u6570\u3002\u7F3A\u7701\u503C\u662F 1 \u79D2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-u                    </span><span style="color:#676E95;"># \u6307\u5B9A\u4F7F\u7528\u65E0\u7279\u6743\u7684\u7AEF\u53E3\u53D1\u9001\u6570\u636E\u5305\u3002 \u5F53\u5728\u4E00\u4E2A\u5BF9\u7279\u6743\u7AEF\u53E3\u7684\u8F93\u5165\u6D41\u91CF\u8FDB\u884C\u963B\u62E6\u7684\u9632\u706B\u5899\u540E\u662F\u5F88\u6709\u76CA\u7684\uFF0C \u5E76\u5E0C\u671B\u5728\u9632\u706B\u5899\u4E4B\u5916\u548C\u4E3B\u673A\u540C\u6B65\u3002\u9632\u706B\u5899\u662F\u4E00\u4E2A\u7CFB\u7EDF\u6216\u8005\u8BA1\u7B97\u673A\uFF0C\u5B83\u63A7\u5236\u4ECE\u5916\u7F51\u5BF9\u4E13\u7528\u7F51\u7684\u8BBF\u95EE\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,13),o=[e];function t(r,c,i,D,y,A){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{C as __pageData,F as default};
