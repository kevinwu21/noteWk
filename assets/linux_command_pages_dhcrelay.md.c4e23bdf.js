import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"dhcrelay","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[]}]}],"relativePath":"linux/command/pages/dhcrelay.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/dhcrelay.md"},p=l(`<h1 id="dhcrelay" tabindex="-1">dhcrelay <a class="header-anchor" href="#dhcrelay" aria-hidden="true">#</a></h1><p>\u4F7F\u7528dhcrelay\u547D\u4EE4\u53EF\u4EE5\u63D0\u4F9B\u4E2D\u7EE7DHCP\u548CBOOTP\u8BF7\u6C42</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>dhcrelay\u547D\u4EE4</strong> \u4F7F\u7528dhcrelay\u547D\u4EE4\u53EF\u4EE5\u63D0\u4F9B\u4E2D\u7EE7DHCP\u548CBOOTP\u8BF7\u6C42\uFF0C\u4ECE\u4E00\u4E2A\u6CA1\u6709DHCP\u670D\u52A1\u5668\u7684\u5B50\u7F51\u76F4\u63A5\u8FDE\u63A5\u5230\u5176\u5B83\u5B50\u7F51\u5185\u7684\u4E00\u4E2A\u6216\u591A\u4E2ADHCP\u670D\u52A1\u5668\u3002\u8BE5\u547D\u4EE4\u5728DHCP\u4E2D\u7EE7\u670D\u52A1\u5668\u4E0A\u4F7F\u7528\uFF0C\u540C\u65F6\u652F\u6301DHCPv4/BOOTP\u548CDHCPv6\u534F\u8BAE\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dhcrelay </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">DHCP\u670D\u52A1\u5668</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u8DF3\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u5F53\u8F6C\u53D1\u6570\u636E\u5305\u65F6\uFF0Cdhcrelay\u4E22\u5F03\u5DF2\u7ECF\u8FBE\u5230\u4E00\u4E2A\u6700\u5927\u8DF3\u6570\u7684\u6570\u636E\u5305\u3002\u9ED8\u8BA4\u503C\u662F10\uFF0C\u6700\u5927\u503C\u662F255</span></span>
<span class="line"><span style="color:#A6ACCD;">-4 \u8FD0\u884Cdhcrelay\u547D\u4EE4\u4F5C\u4E3ADHCPv4/BOOTP\u4E2D\u7EE7\u4EE3\u7406\u3002\u8FD9\u662F\u9ED8\u8BA4\u64CD\u4F5C\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">-6 \u8FD0\u884Cdhcrelay\u547D\u4EE4\u4F5C\u4E3ADHCPv6\u4E2D\u7EE7\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">-q \u5B89\u9759\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7AEF\u53E3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u76D1\u542C\u548C\u53D1\u9001\u7AEF\u53E3\u3002DHCPv4/BOOTP\u9ED8\u8BA4\u7AEF\u53E3\u662F67\uFF0CDHCPv6\u9ED8\u8BA4\u7AEF\u53E3\u662F547</span></span>
<span class="line"><span style="color:#A6ACCD;">-A </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u957F\u5EA6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u6307\u5B9A\u53D1\u9001\u5230DHCP\u670D\u52A1\u5668\u7684\u6700\u5927\u6570\u636E\u5305\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">-d \u5F3A\u5236dhcrelay\u547D\u4EE4\u4F5C\u4E3A\u524D\u53F0\u8FDB\u7A0B\u8FD0\u884C</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h3><p>\u6307\u5B9ADHCP\u670D\u52A1\u5668\u7684\u4F4D\u7F6E\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># dhcrelay 192.168.0.2</span></span>
<span class="line"><span style="color:#A6ACCD;">Internet Systems Consortium DHCP Relay Agent4.1.1-P1</span></span>
<span class="line"><span style="color:#A6ACCD;">Copyright 2004-2010 Internet SystemsConsortium.</span></span>
<span class="line"><span style="color:#A6ACCD;">All rights reserved.</span></span>
<span class="line"><span style="color:#A6ACCD;">For info, please visithttps://www.isc.org/software/dhcp/</span></span>
<span class="line"><span style="color:#A6ACCD;">Listening on LPF/eth1/00:0c:29:fc:2f:ef</span></span>
<span class="line"><span style="color:#A6ACCD;">Sending on  LPF/eth1/00:0c:29:fc:2f:ef</span></span>
<span class="line"><span style="color:#A6ACCD;">Listening on LPF/eth0/00:0c:27:fc:25:ec</span></span>
<span class="line"><span style="color:#A6ACCD;">Sending on  LPF/eth0/00:0c:27:fc:25:ec</span></span>
<span class="line"><span style="color:#A6ACCD;">Sending on  Socket/fallback</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,11),r=[p];function c(o,t,i,d,C,h){return a(),n("div",null,r)}const A=s(e,[["render",c]]);export{y as __pageData,A as default};
