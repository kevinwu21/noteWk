import{_ as s,c as a,o as e,a as n}from"./app.f6b8b16b.js";const v=JSON.parse('{"title":"dpkg-statoverride","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/dpkg-statoverride.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/dpkg-statoverride.md"},p=n(`<h1 id="dpkg-statoverride" tabindex="-1">dpkg-statoverride <a class="header-anchor" href="#dpkg-statoverride" aria-hidden="true">#</a></h1><p>Debian Linux\u4E2D\u8986\u76D6\u6587\u4EF6\u7684\u6240\u6709\u6743\u548C\u6A21\u5F0F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>dpkg-statoverride\u547D\u4EE4</strong> \u7528\u4E8EDebian Linux\u4E2D\u8986\u76D6\u6587\u4EF6\u7684\u6240\u6709\u6743\u548C\u6A21\u5F0F\uFF0C\u8BA9dpkg\u4E8E\u5305\u5B89\u88C5\u65F6\u4F7F\u5F97\u6587\u4EF6\u6240\u6709\u6743\u4E0E\u6A21\u5F0F\u5931\u6548\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dpkg-statoverride</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-add\uFF1A\u4E3A\u6587\u4EF6\u6DFB\u52A0\u4E00\u4E2A\u6539\u5199\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--remove\uFF1A\u4E3A\u6587\u4EF6\u5220\u9664\u4E00\u4E2A\u6539\u5199\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--list\uFF1A\u663E\u793A\u6240\u6709\u6539\u5199\u5217\u8868\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--update\uFF1A\u5982\u679C\u6587\u4EF6\u5B58\u5728\uFF0C\u5219\u7ACB\u523B\u6267\u884C\u6539\u5199\u64CD\u4F5C\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4FEE\u6539\u6587\u4EF6\u5939\u7684\u6743\u9650\u5C5E\u6027\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo dpkg-statoverride --update --add nagios nagios 751 /var/lib/nagios3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5F3A\u5236\u4FEE\u6539\u6587\u4EF6\u5939\u7684\u6743\u9650\u5C5E\u6027\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo dpkg-statoverride --force --update --add root sasl 755 /var/spool/postfix/var/run/saslauthd</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06\u6587\u4EF6\u4ECE\u6570\u636E\u5E93\u4E2D\u5220\u9664\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo dpkg-statoverride --remove /usr/bin/wall</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),r=[p];function i(d,t,o,c,u,h){return e(),a("div",null,r)}const g=s(l,[["render",i]]);export{v as __pageData,g as default};