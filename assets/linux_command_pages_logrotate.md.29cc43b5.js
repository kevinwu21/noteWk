import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"logrotate","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]},{"level":3,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879","link":"#\u6CE8\u610F\u4E8B\u9879","children":[]}]}],"relativePath":"linux/command/pages/logrotate.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/logrotate.md"},p=l(`<h1 id="logrotate" tabindex="-1">logrotate <a class="header-anchor" href="#logrotate" aria-hidden="true">#</a></h1><p>\u7CFB\u7EDF\u65E5\u5FD7\u8FDB\u884C\u8F6E\u8F6C\u3001\u538B\u7F29\u548C\u5220\u9664</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>logrotate\u547D\u4EE4</strong> \u7528\u4E8E\u5BF9\u7CFB\u7EDF\u65E5\u5FD7\u8FDB\u884C\u8F6E\u8F6C\u3001\u538B\u7F29\u548C\u5220\u9664\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u65E5\u5FD7\u53D1\u9001\u5230\u6307\u5B9A\u90AE\u7BB1\u3002\u4F7F\u7528logrotate\u6307\u4EE4\uFF0C\u53EF\u8BA9\u4F60\u8F7B\u677E\u7BA1\u7406\u7CFB\u7EDF\u6240\u4EA7\u751F\u7684\u8BB0\u5F55\u6587\u4EF6\u3002\u6BCF\u4E2A\u8BB0\u5F55\u6587\u4EF6\u90FD\u53EF\u88AB\u8BBE\u7F6E\u6210\u6BCF\u65E5\uFF0C\u6BCF\u5468\u6216\u6BCF\u6708\u5904\u7406\uFF0C\u4E5F\u80FD\u5728\u6587\u4EF6\u592A\u5927\u65F6\u7ACB\u5373\u5904\u7406\u3002\u60A8\u5FC5\u987B\u81EA\u884C\u7F16\u8F91\uFF0C\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF0C\u9884\u8BBE\u7684\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u5728<code>/etc/logrotate.conf</code>\u6587\u4EF6\u4E2D\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">logrotate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">\u6216--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\u6216--debug\uFF1A\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF0C\u4FBF\u4E8E\u6392\u9519\u6216\u4E86\u89E3\u7A0B\u5E8F\u6267\u884C\u7684\u60C5\u51B5\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\u6216--force \uFF1A\u5F3A\u884C\u542F\u52A8\u8BB0\u5F55\u6587\u4EF6\u7EF4\u62A4\u64CD\u4F5C\uFF0C\u7EB5\u4F7Flogrotate\u6307\u4EE4\u8BA4\u4E3A\u6CA1\u6709\u9700\u8981\u4EA6\u7136\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u72B6\u6001\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--state=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u72B6\u6001\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u72B6\u6001\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\u6216--version\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-usage\uFF1A\u663E\u793A\u6307\u4EE4\u57FA\u672C\u7528\u6CD5\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u914D\u7F6E\u6587\u4EF6\uFF1A\u6307\u5B9Alograote\u6307\u4EE4\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>crontab \u4F1A\u5B9A\u65F6\u8C03\u7528logrotate\u547D\u4EE4 \u5728 <code>/etc/cron.daily/logrotate</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u4F7F\u7528</p><p>logrotate\u7684\u914D\u7F6E\u6587\u4EF6<code>/etc/logrotate.conf</code> \u5B9A\u4E49\u5F15\u7528<code>/etc/logrotate.d</code>\u76EE\u5F55\u4E0B\u7684\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684log\u914D\u7F6E</p><p>\u5728<code>/etc/logrotate.d</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u4EFB\u610F\u540E\u7F00\u540D\u7684\u6587\u4EF6,\u5373\u53EF\u4F7F\u7528\u5BF9\u65E5\u5FD7\u8FDB\u884C\u8F6E\u8F6C</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">/tmp/log/log.txt</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    copytruncate</span></span>
<span class="line"><span style="color:#A6ACCD;">    daily</span></span>
<span class="line"><span style="color:#A6ACCD;">    rotate 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    missingok</span></span>
<span class="line"><span style="color:#A6ACCD;">    ifempty</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress</span></span>
<span class="line"><span style="color:#A6ACCD;">    noolddir</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4EE3\u8868\u7684\u610F\u601D\u662F\u5C06<code>/tmp/log/log.txt</code>\u6587\u4EF6 \u8FDB\u884C\u8F6E\u8F6C\u538B\u7F29</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">compress                 \u901A\u8FC7gzip \u538B\u7F29\u8F6C\u50A8\u4EE5\u540E\u7684\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">nocompress               \u4E0D\u505Agzip\u538B\u7F29\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">copytruncate             \u7528\u4E8E\u8FD8\u5728\u6253\u5F00\u4E2D\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u628A\u5F53\u524D\u65E5\u5FD7\u5907\u4EFD\u5E76\u622A\u65AD\uFF1B\u662F\u5148\u62F7\u8D1D\u518D\u6E05\u7A7A\u7684\u65B9\u5F0F\uFF0C\u62F7\u8D1D\u548C\u6E05\u7A7A\u4E4B\u95F4\u6709\u4E00\u4E2A\u65F6\u95F4\u5DEE\uFF0C\u53EF\u80FD\u4F1A\u4E22\u5931\u90E8\u5206\u65E5\u5FD7\u6570\u636E\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">nocopytruncate \u5907\u4EFD\u65E5\u5FD7\u6587\u4EF6\u4E0D\u8FC7\u4E0D\u622A\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">create mode owner group  \u8F6E\u8F6C\u65F6\u6307\u5B9A\u521B\u5EFA\u65B0\u6587\u4EF6\u7684\u5C5E\u6027\uFF0C\u5982create 0777 nobody nobody</span></span>
<span class="line"><span style="color:#A6ACCD;">nocreate                 \u4E0D\u5EFA\u7ACB\u65B0\u7684\u65E5\u5FD7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">delaycompress            \u548Ccompress \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u8F6C\u50A8\u7684\u65E5\u5FD7\u6587\u4EF6\u5230\u4E0B\u4E00\u6B21\u8F6C\u50A8\u65F6\u624D\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">nodelaycompress          \u8986\u76D6 delaycompress \u9009\u9879\uFF0C\u8F6C\u50A8\u540C\u65F6\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">missingok                \u5982\u679C\u65E5\u5FD7\u4E22\u5931\uFF0C\u4E0D\u62A5\u9519\u7EE7\u7EED\u6EDA\u52A8\u4E0B\u4E00\u4E2A\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">errors address           \u4E13\u50A8\u65F6\u7684\u9519\u8BEF\u4FE1\u606F\u53D1\u9001\u5230\u6307\u5B9A\u7684Email \u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">ifempty                  \u5373\u4F7F\u65E5\u5FD7\u6587\u4EF6\u4E3A\u7A7A\u6587\u4EF6\u4E5F\u505A\u8F6E\u8F6C\uFF0C\u8FD9\u4E2A\u662Flogrotate\u7684\u7F3A\u7701\u9009\u9879\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">notifempty               \u5F53\u65E5\u5FD7\u6587\u4EF6\u4E3A\u7A7A\u65F6\uFF0C\u4E0D\u8FDB\u884C\u8F6E\u8F6C</span></span>
<span class="line"><span style="color:#A6ACCD;">mail address             \u628A\u8F6C\u50A8\u7684\u65E5\u5FD7\u6587\u4EF6\u53D1\u9001\u5230\u6307\u5B9A\u7684E-mail \u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">nomail                   \u8F6C\u50A8\u65F6\u4E0D\u53D1\u9001\u65E5\u5FD7\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">olddir directory         \u8F6C\u50A8\u540E\u7684\u65E5\u5FD7\u6587\u4EF6\u653E\u5165\u6307\u5B9A\u7684\u76EE\u5F55\uFF0C\u5FC5\u987B\u548C\u5F53\u524D\u65E5\u5FD7\u6587\u4EF6\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#A6ACCD;">noolddir                 \u8F6C\u50A8\u540E\u7684\u65E5\u5FD7\u6587\u4EF6\u548C\u5F53\u524D\u65E5\u5FD7\u6587\u4EF6\u653E\u5728\u540C\u4E00\u4E2A\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">sharedscripts            \u8FD0\u884Cpostrotate\u811A\u672C\uFF0C\u4F5C\u7528\u662F\u5728\u6240\u6709\u65E5\u5FD7\u90FD\u8F6E\u8F6C\u540E\u7EDF\u4E00\u6267\u884C\u4E00\u6B21\u811A\u672C\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u8FD9\u4E2A\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u65E5\u5FD7\u8F6E\u8F6C\u540E\u90FD\u4F1A\u6267\u884C\u4E00\u6B21\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">prerotate                \u5728logrotate\u8F6C\u50A8\u4E4B\u524D\u9700\u8981\u6267\u884C\u7684\u6307\u4EE4\uFF0C\u4F8B\u5982\u4FEE\u6539\u6587\u4EF6\u7684\u5C5E\u6027\u7B49\u52A8\u4F5C\uFF1B\u5FC5\u987B\u72EC\u7ACB\u6210\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">postrotate               \u5728logrotate\u8F6C\u50A8\u4E4B\u540E\u9700\u8981\u6267\u884C\u7684\u6307\u4EE4\uFF0C\u4F8B\u5982\u91CD\u65B0\u542F\u52A8 (kill -HUP) \u67D0\u4E2A\u670D\u52A1\uFF01\u5FC5\u987B\u72EC\u7ACB\u6210\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">daily                    \u6307\u5B9A\u8F6C\u50A8\u5468\u671F\u4E3A\u6BCF\u5929</span></span>
<span class="line"><span style="color:#A6ACCD;">weekly                   \u6307\u5B9A\u8F6C\u50A8\u5468\u671F\u4E3A\u6BCF\u5468</span></span>
<span class="line"><span style="color:#A6ACCD;">monthly                  \u6307\u5B9A\u8F6C\u50A8\u5468\u671F\u4E3A\u6BCF\u6708</span></span>
<span class="line"><span style="color:#A6ACCD;">rotate count             \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u5220\u9664\u4E4B\u524D\u8F6C\u50A8\u7684\u6B21\u6570\uFF0C0 \u6307\u6CA1\u6709\u5907\u4EFD\uFF0C5 \u6307\u4FDD\u75595 \u4E2A\u5907\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">dateext                  \u4F7F\u7528\u5F53\u671F\u65E5\u671F\u4F5C\u4E3A\u547D\u540D\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">dateformat .%s           \u914D\u5408dateext\u4F7F\u7528\uFF0C\u7D27\u8DDF\u5728\u4E0B\u4E00\u884C\u51FA\u73B0\uFF0C\u5B9A\u4E49\u6587\u4EF6\u5207\u5272\u540E\u7684\u6587\u4EF6\u540D\uFF0C\u5FC5\u987B\u914D\u5408dateext\u4F7F\u7528\uFF0C\u53EA\u652F\u6301 %Y %m %d %s \u8FD9\u56DB\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">size(\u6216minsize) log-size \u5F53\u65E5\u5FD7\u6587\u4EF6\u5230\u8FBE\u6307\u5B9A\u7684\u5927\u5C0F\u65F6\u624D\u8F6C\u50A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><p>\u5728<code>/etc/logrotate.d</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u4EFB\u610F\u540E\u7F00\u540D\u7684\u6587\u4EF6</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">/tmp/log/log</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    copytruncate</span></span>
<span class="line"><span style="color:#A6ACCD;">    daily</span></span>
<span class="line"><span style="color:#A6ACCD;">    rotate 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    missingok</span></span>
<span class="line"><span style="color:#A6ACCD;">    ifempty</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress</span></span>
<span class="line"><span style="color:#A6ACCD;">    noolddir</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u5C06\u8F6E\u8F6C\u8FC7\u7684log\u518D\u91CD\u65B0\u8F6E\u8F6C,\u56E0\u4E3A\u8F6E\u8F6C\u8FC7\u540E\u7684\u6587\u4EF6\u540D\u4E5F\u662F\u5DF2log\u5F00\u5934\u7684</p>`,21),r=[p];function o(c,t,i,d,b,A){return a(),n("div",null,r)}const u=s(e,[["render",o]]);export{m as __pageData,u as default};
