import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"jwhois","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/jwhois.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/jwhois.md"},p=e(`<h1 id="jwhois" tabindex="-1">jwhois <a class="header-anchor" href="#jwhois" aria-hidden="true">#</a></h1><p>whois \u5BA2\u6237\u7AEF\u670D\u52A1</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>jwhois</strong> searches Whois servers for the object on the command line.The host to query is taken from a global configuration file, a configuration file specified on the command line, or selected directly on the command line.</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">jwhois </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">--version                  display version number and patch level</span></span>
<span class="line"><span style="color:#A6ACCD;">--help                     display this </span><span style="color:#82AAFF;">help</span></span>
<span class="line"><span style="color:#A6ACCD;">-v, --verbose              verbose debug output</span></span>
<span class="line"><span style="color:#A6ACCD;">-c FILE, --config=FILE     use FILE as configuration file</span></span>
<span class="line"><span style="color:#A6ACCD;">-h HOST, --host=HOST       explicitly query HOST</span></span>
<span class="line"><span style="color:#A6ACCD;">-n, --no-redirect          disable content redirection</span></span>
<span class="line"><span style="color:#A6ACCD;">-s, --no-whoisservers      disable whois-servers.net service support</span></span>
<span class="line"><span style="color:#A6ACCD;">-a, --raw                  disable reformatting of the query</span></span>
<span class="line"><span style="color:#A6ACCD;">-i, --display-redirections display all redirects instead of hiding them</span></span>
<span class="line"><span style="color:#A6ACCD;">-p PORT, --port=PORT       use port number PORT </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in conjunction with HOST</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">-r, --rwhois               force an rwhois query to be made</span></span>
<span class="line"><span style="color:#A6ACCD;">--rwhois-display=DISPLAY   sets the display option </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> rwhois queries</span></span>
<span class="line"><span style="color:#A6ACCD;">--rwhois-limit=LIMIT       sets the maximum number of matches to </span><span style="color:#89DDFF;">return</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u6CE8\uFF1A\u4EE5\u4E0A\u82F1\u6587\u90E8\u5206\u5BFB\u6C42\u7F51\u53CB\u534F\u52A9\u7FFB\u8BD1\uFF0C\u7FFB\u8BD1\u7ED3\u679C\u53EF\u53D1\u9001\u81F3 sa(at)<a href="http://linuxde.net" target="_blank" rel="noreferrer">linuxde.net</a>\uFF0C\u8C22\u8C22\uFF01</p></blockquote><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u663E\u793A\u6307\u5B9A\u7528\u6237\u4FE1\u606F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;"> jwhois root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u627Eroot\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67E5\u8BE2\u57DF\u540D\u4FE1\u606F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;"> jwhois linuxde.net</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Querying whois.verisign-grs.com</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Redirected to whois.west263.com</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Querying whois.west263.com</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">whois.west263.com</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">Domain Name: linuxde.net\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">Registry Domain id: whois protect</span></span>
<span class="line"><span style="color:#A6ACCD;">Registrar WHOIS Server: whois.west263.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">...\u7701\u7565\u90E8\u5206\u5185\u5BB9</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,14),r=[p];function o(i,c,t,d,h,u){return a(),n("div",null,r)}const y=s(l,[["render",o]]);export{m as __pageData,y as default};
