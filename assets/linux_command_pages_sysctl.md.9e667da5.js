import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"sysctl","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]},{"level":3,"title":"\u914D\u7F6Esysctl","slug":"\u914D\u7F6Esysctl","link":"#\u914D\u7F6Esysctl","children":[]}]}],"relativePath":"linux/command/pages/sysctl.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/sysctl.md"},p=l(`<h1 id="sysctl" tabindex="-1">sysctl <a class="header-anchor" href="#sysctl" aria-hidden="true">#</a></h1><p>\u65F6\u52A8\u6001\u5730\u4FEE\u6539\u5185\u6838\u7684\u8FD0\u884C\u53C2\u6570</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>sysctl\u547D\u4EE4</strong> \u88AB\u7528\u4E8E\u5728\u5185\u6838\u8FD0\u884C\u65F6\u52A8\u6001\u5730\u4FEE\u6539\u5185\u6838\u7684\u8FD0\u884C\u53C2\u6570\uFF0C\u53EF\u7528\u7684\u5185\u6838\u53C2\u6570\u5728\u76EE\u5F55<code>/proc/sys</code>\u4E2D\u3002\u5B83\u5305\u542B\u4E00\u4E9BTCP/ip\u5806\u6808\u548C\u865A\u62DF\u5185\u5B58\u7CFB\u7EDF\u7684\u9AD8\u7EA7\u9009\u9879\uFF0C \u8FD9\u53EF\u4EE5\u8BA9\u6709\u7ECF\u9A8C\u7684\u7BA1\u7406\u5458\u63D0\u9AD8\u5F15\u4EBA\u6CE8\u76EE\u7684\u7CFB\u7EDF\u6027\u80FD\u3002\u7528sysctl\u53EF\u4EE5\u8BFB\u53D6\u8BBE\u7F6E\u8D85\u8FC7\u4E94\u767E\u4E2A\u7CFB\u7EDF\u53D8\u91CF\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sysctl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u6253\u5370\u503C\u65F6\u4E0D\u6253\u5370\u5173\u952E\u5B57\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-e\uFF1A\u5FFD\u7565\u672A\u77E5\u5173\u952E\u5B57\u9519\u8BEF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-N\uFF1A\u4EC5\u6253\u5370\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-w\uFF1A\u5F53\u6539\u53D8sysctl\u8BBE\u7F6E\u65F6\u4F7F\u7528\u6B64\u9879\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-p\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u201C/etc/sysctl.conf\u201D\u52A0\u8F7D\u5185\u6838\u53C2\u6570\u8BBE\u7F6E\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u6253\u5370\u5F53\u524D\u6240\u6709\u53EF\u7528\u7684\u5185\u6838\u53C2\u6570\u53D8\u91CF\u548C\u503C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-A\uFF1A\u4EE5\u8868\u683C\u65B9\u5F0F\u6253\u5370\u5F53\u524D\u6240\u6709\u53EF\u7528\u7684\u5185\u6838\u53C2\u6570\u53D8\u91CF\u548C\u503C\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u53D8\u91CF=\u503C\uFF1A\u8BBE\u7F6E\u5185\u6838\u53C2\u6570\u5BF9\u5E94\u7684\u53D8\u91CF\u503C\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u67E5\u770B\u6240\u6709\u53EF\u8BFB\u53D8\u91CF\uFF1A</p><p>sysctl -a</p><p>\u8BFB\u4E00\u4E2A\u6307\u5B9A\u7684\u53D8\u91CF\uFF0C\u4F8B\u5982<code>kern.maxproc</code>\uFF1A</p><p>sysctl kern.maxproc kern.maxproc: 1044</p><p>\u8981\u8BBE\u7F6E\u4E00\u4E2A\u6307\u5B9A\u7684\u53D8\u91CF\uFF0C\u76F4\u63A5\u7528<code>variable=value</code>\u8FD9\u6837\u7684\u8BED\u6CD5\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sysctl kern.maxfiles=5000</span></span>
<span class="line"><span style="color:#A6ACCD;">kern.maxfiles: 2088 -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 5000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u60A8\u53EF\u4EE5\u4F7F\u7528sysctl\u4FEE\u6539\u7CFB\u7EDF\u53D8\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7F16\u8F91sysctl.conf\u6587\u4EF6\u6765\u4FEE\u6539\u7CFB\u7EDF\u53D8\u91CF\u3002sysctl.conf\u770B\u8D77\u6765\u5F88\u50CFrc.conf\u3002\u5B83\u7528<code>variable=value</code>\u7684\u5F62\u5F0F\u6765\u8BBE\u5B9A\u503C\u3002\u6307\u5B9A\u7684\u503C\u5728\u7CFB\u7EDF\u8FDB\u5165\u591A\u7528\u6237\u6A21\u5F0F\u4E4B\u540E\u88AB\u8BBE\u5B9A\u3002\u5E76\u4E0D\u662F\u6240\u6709\u7684\u53D8\u91CF\u90FD\u53EF\u4EE5\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u8BBE\u5B9A\u3002</p><p>sysctl\u53D8\u91CF\u7684\u8BBE\u7F6E\u901A\u5E38\u662F\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u6216\u8005\u5E03\u5C14\u578B\u3002\uFF08\u5E03\u5C14\u578B\u7528 1 \u6765\u8868\u793A&#39;yes&#39;\uFF0C\u7528 0 \u6765\u8868\u793A&#39;no&#39;\uFF09\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sysctl -w kernel.sysrq=0</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w kernel.core_uses_pid=1</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.conf.default.accept_redirects=0</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.conf.default.accept_source_route=0</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.conf.default.rp_filter=1</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_syncookies=1</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_max_syn_backlog=2048</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_fin_timeout=30</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_synack_retries=2</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_keepalive_time=3600</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_window_scaling=1</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -w net.ipv4.tcp_sack=1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u914D\u7F6Esysctl" tabindex="-1">\u914D\u7F6Esysctl <a class="header-anchor" href="#\u914D\u7F6Esysctl" aria-hidden="true">#</a></h3><p>\u7F16\u8F91\u6B64\u6587\u4EF6\uFF1A<code>/etc/sysctl.conf</code></p><p>\u5982\u679C\u8BE5\u6587\u4EF6\u4E3A\u7A7A\uFF0C\u5219\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5426\u5219\u8BF7\u6839\u636E\u60C5\u51B5\u81EA\u5DF1\u505A\u8C03\u6574\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># Controls source route verification</span></span>
<span class="line"><span style="color:#676E95;"># Default should work for all interfaces</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.conf.default.rp_filter = 1</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.all.rp_filter = 1</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.lo.rp_filter = 1</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.eth0.rp_filter = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Disables IP source routing</span></span>
<span class="line"><span style="color:#676E95;"># Default should work for all interfaces</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.conf.default.accept_source_route = 0</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.all.accept_source_route = 0</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.lo.accept_source_route = 0</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.eth0.accept_source_route = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Controls the System Request debugging functionality of the kernel</span></span>
<span class="line"><span style="color:#A6ACCD;">kernel.sysrq = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Controls whether core dumps will append the PID to the core filename.</span></span>
<span class="line"><span style="color:#676E95;"># Useful for debugging multi-threaded applications.</span></span>
<span class="line"><span style="color:#A6ACCD;">kernel.core_uses_pid = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Increase maximum amount of memory allocated to shm</span></span>
<span class="line"><span style="color:#676E95;"># Only uncomment if needed!</span></span>
<span class="line"><span style="color:#676E95;"># kernel.shmmax = 67108864</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Disable ICMP Redirect Acceptance</span></span>
<span class="line"><span style="color:#676E95;"># Default should work for all interfaces</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.conf.default.accept_redirects = 0</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.all.accept_redirects = 0</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.lo.accept_redirects = 0</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.eth0.accept_redirects = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># enable Log Spoofed Packets, Source Routed Packets, Redirect Packets</span></span>
<span class="line"><span style="color:#676E95;"># Default should work for all interfaces</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.conf.default.log_martians = 1</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.all.log_martians = 1</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.lo.log_martians = 1</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.conf.eth0.log_martians = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Decrease the time default value for tcp_fin_timeout connection</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_fin_timeout = 25</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Decrease the time default value for tcp_keepalive_time connection</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_keepalive_time = 1200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Turn on the tcp_window_scaling</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_window_scaling = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Turn on the tcp_sack</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_sack = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># tcp_fack should be on because of sack</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_fack = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Turn on the tcp_timestamps</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_timestamps = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Enable TCP SYN Cookie Protection</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_syncookies = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Enable ignoring broadcasts request</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.icmp_echo_ignore_broadcasts = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Enable bad error message Protection</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.icmp_ignore_bogus_error_responses = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># make more local ports available</span></span>
<span class="line"><span style="color:#676E95;"># net.ipv4.ip_local_port_range = 1024 65000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># set TCP Re-Ordering value in kernel to \u20185\u2032</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_reordering = 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Lower syn retry rates</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_synack_retries = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_syn_retries = 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Set Max SYN Backlog to \u20182048\u2032</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_max_syn_backlog = 2048</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Various Settings</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.netdev_max_backlog = 1024</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Increase the maximum number of skb-heads to be cached</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.hot_list_length = 256</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Increase the tcp-time-wait buckets pool size</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_max_tw_buckets = 360000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># This will increase the amount of memory available for socket input/output queues</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.rmem_default = 65535</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.rmem_max = 8388608</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_rmem = 4096 87380 8388608</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.wmem_default = 65535</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.wmem_max = 8388608</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_wmem = 4096 65535 8388608</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.tcp_mem = 8388608 8388608 8388608</span></span>
<span class="line"><span style="color:#A6ACCD;">net.core.optmem_max = 40960</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><p>\u5982\u679C\u5E0C\u671B\u5C4F\u853D\u522B\u4EBA ping \u4F60\u7684\u4E3B\u673A\uFF0C\u5219\u52A0\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># Disable ping requests</span></span>
<span class="line"><span style="color:#A6ACCD;">net.ipv4.icmp_echo_ignore_all = 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7F16\u8F91\u5B8C\u6210\u540E\uFF0C\u8BF7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4F7F\u53D8\u52A8\u7ACB\u5373\u751F\u6548\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">/sbin/sysctl -p</span></span>
<span class="line"><span style="color:#A6ACCD;">/sbin/sysctl -w net.ipv4.route.flush=1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,28),c=[p];function r(i,t,o,b,u,m){return a(),n("div",null,c)}const C=s(e,[["render",r]]);export{d as __pageData,C as default};
