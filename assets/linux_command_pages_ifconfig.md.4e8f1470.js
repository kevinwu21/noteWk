import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"ifconfig","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/ifconfig.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/ifconfig.md"},e=l(`<h1 id="ifconfig" tabindex="-1">ifconfig <a class="header-anchor" href="#ifconfig" aria-hidden="true">#</a></h1><p>\u914D\u7F6E\u548C\u663E\u793ALinux\u7CFB\u7EDF\u7F51\u5361\u7684\u7F51\u7EDC\u53C2\u6570</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>ifconfig\u547D\u4EE4</strong> \u88AB\u7528\u4E8E\u914D\u7F6E\u548C\u663E\u793ALinux\u5185\u6838\u4E2D\u7F51\u7EDC\u63A5\u53E3\u7684\u7F51\u7EDC\u53C2\u6570\u3002\u7528ifconfig\u547D\u4EE4\u914D\u7F6E\u7684\u7F51\u5361\u4FE1\u606F\uFF0C\u5728\u7F51\u5361\u91CD\u542F\u540E\u673A\u5668\u91CD\u542F\u540E\uFF0C\u914D\u7F6E\u5C31\u4E0D\u5B58\u5728\u3002\u8981\u60F3\u5C06\u4E0A\u8FF0\u7684\u914D\u7F6E\u4FE1\u606F\u6C38\u8FDC\u7684\u5B58\u7684\u7535\u8111\u91CC\uFF0C\u90A3\u5C31\u8981\u4FEE\u6539\u7F51\u5361\u7684\u914D\u7F6E\u6587\u4EF6\u4E86\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907IPv6\u7684ip\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">del</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5220\u9664\u7F51\u7EDC\u8BBE\u5907IPv6\u7684IP\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">down\uFF1A\u5173\u95ED\u6307\u5B9A\u7684\u7F51\u7EDC\u8BBE\u5907\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">hw</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7F51\u7EDC\u8BBE\u5907\u7C7B\u578B&gt;&lt;\u786C\u4EF6\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u7684\u7C7B\u578B\u4E0E\u786C\u4EF6\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">io_addr</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">I/O\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u7684I/O\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">irq</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">IRQ\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u7684IRQ\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">media</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7F51\u7EDC\u5A92\u4ECB\u7C7B\u578B</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u7684\u5A92\u4ECB\u7C7B\u578B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">mem_start</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5185\u5B58\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u5728\u4E3B\u5185\u5B58\u6240\u5360\u7528\u7684\u8D77\u59CB\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">metric</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6570\u76EE</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u5728\u8BA1\u7B97\u6570\u636E\u5305\u7684\u8F6C\u9001\u6B21\u6570\u65F6\uFF0C\u6240\u8981\u52A0\u4E0A\u7684\u6570\u76EE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">mtu</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B57\u8282</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u7684MTU\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">netmask</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B50\u7F51\u63A9\u7801</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F51\u7EDC\u8BBE\u5907\u7684\u5B50\u7F51\u63A9\u7801\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">tunnel</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5EFA\u7ACBIPv4\u4E0EIPv6\u4E4B\u95F4\u7684\u96A7\u9053\u901A\u4FE1\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">up\uFF1A\u542F\u52A8\u6307\u5B9A\u7684\u7F51\u7EDC\u8BBE\u5907\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-broadcast</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u8981\u9001\u5F80\u6307\u5B9A\u5730\u5740\u7684\u6570\u636E\u5305\u5F53\u6210\u5E7F\u64AD\u6570\u636E\u5305\u6765\u5904\u7406\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-pointopoint</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5730\u5740</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4E0E\u6307\u5B9A\u5730\u5740\u7684\u7F51\u7EDC\u8BBE\u5907\u5EFA\u7ACB\u76F4\u63A5\u8FDE\u7EBF\uFF0C\u6B64\u6A21\u5F0F\u5177\u6709\u4FDD\u5BC6\u529F\u80FD\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-promisc\uFF1A\u5173\u95ED\u6216\u542F\u52A8\u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907\u7684promiscuous\u6A21\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">IP\u5730\u5740\uFF1A\u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907\u7684IP\u5730\u5740\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7F51\u7EDC\u8BBE\u5907\uFF1A\u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907\u7684\u540D\u79F0\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u663E\u793A\u7F51\u7EDC\u8BBE\u5907\u4FE1\u606F\uFF08\u6FC0\u6D3B\u72B6\u6001\u7684\uFF09\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ifconfig</span></span>
<span class="line"><span style="color:#A6ACCD;">eth0      Link encap:Ethernet  HWaddr 00:16:3E:00:1E:51  </span></span>
<span class="line"><span style="color:#A6ACCD;">          inet addr:10.160.7.81  Bcast:10.160.15.255  Mask:255.255.240.0</span></span>
<span class="line"><span style="color:#A6ACCD;">          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1</span></span>
<span class="line"><span style="color:#A6ACCD;">          RX packets:61430830 errors:0 dropped:0 overruns:0 frame:0</span></span>
<span class="line"><span style="color:#A6ACCD;">          TX packets:88534 errors:0 dropped:0 overruns:0 carrier:0</span></span>
<span class="line"><span style="color:#A6ACCD;">          collisions:0 txqueuelen:1000</span></span>
<span class="line"><span style="color:#A6ACCD;">          RX bytes:3607197869 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3.3 GiB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  TX bytes:6115042 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">5.8 MiB</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">lo        Link encap:Local Loopback  </span></span>
<span class="line"><span style="color:#A6ACCD;">          inet addr:127.0.0.1  Mask:255.0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">          UP LOOPBACK RUNNING  MTU:16436  Metric:1</span></span>
<span class="line"><span style="color:#A6ACCD;">          RX packets:56103 errors:0 dropped:0 overruns:0 frame:0</span></span>
<span class="line"><span style="color:#A6ACCD;">          TX packets:56103 errors:0 dropped:0 overruns:0 carrier:0</span></span>
<span class="line"><span style="color:#A6ACCD;">          collisions:0 txqueuelen:0</span></span>
<span class="line"><span style="color:#A6ACCD;">          RX bytes:5079451 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4.8 MiB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  TX bytes:5079451 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">4.8 MiB</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p><strong>eth0</strong> \u8868\u793A\u7B2C\u4E00\u5757\u7F51\u5361\uFF0C\u5176\u4E2D<code>HWaddr</code>\u8868\u793A\u7F51\u5361\u7684\u7269\u7406\u5730\u5740\uFF0C\u53EF\u4EE5\u770B\u5230\u76EE\u524D\u8FD9\u4E2A\u7F51\u5361\u7684\u7269\u7406\u5730\u5740(MAC\u5730\u5740\uFF09\u662F<code>00:16:3E:00:1E:51</code>\u3002</p><p><strong>inet addr</strong> \u7528\u6765\u8868\u793A\u7F51\u5361\u7684IP\u5730\u5740\uFF0C\u6B64\u7F51\u5361\u7684IP\u5730\u5740\u662F<code>10.160.7.81</code>\uFF0C\u5E7F\u64AD\u5730\u5740<code>Bcast:10.160.15.255</code>\uFF0C\u63A9\u7801\u5730\u5740<code>Mask:255.255.240.0</code>\u3002</p><p><strong>lo</strong> \u662F\u8868\u793A\u4E3B\u673A\u7684\u56DE\u574F\u5730\u5740\uFF0C\u8FD9\u4E2A\u4E00\u822C\u662F\u7528\u6765\u6D4B\u8BD5\u4E00\u4E2A\u7F51\u7EDC\u7A0B\u5E8F\uFF0C\u4F46\u53C8\u4E0D\u60F3\u8BA9\u5C40\u57DF\u7F51\u6216\u5916\u7F51\u7684\u7528\u6237\u80FD\u591F\u67E5\u770B\uFF0C\u53EA\u80FD\u5728\u6B64\u53F0\u4E3B\u673A\u4E0A\u8FD0\u884C\u548C\u67E5\u770B\u6240\u7528\u7684\u7F51\u7EDC\u63A5\u53E3\u3002\u6BD4\u5982\u628A httpd\u670D\u52A1\u5668\u7684\u6307\u5B9A\u5230\u56DE\u574F\u5730\u5740\uFF0C\u5728\u6D4F\u89C8\u5668\u8F93\u5165127.0.0.1\u5C31\u80FD\u770B\u5230\u4F60\u6240\u67B6WEB\u7F51\u7AD9\u4E86\u3002\u4F46\u53EA\u662F\u60A8\u80FD\u770B\u5F97\u5230\uFF0C\u5C40\u57DF\u7F51\u7684\u5176\u5B83\u4E3B\u673A\u6216\u7528\u6237\u65E0\u4ECE\u77E5\u9053\u3002</p><ul><li>\u7B2C\u4E00\u884C\uFF1A\u8FDE\u63A5\u7C7B\u578B\uFF1AEthernet\uFF08\u4EE5\u592A\u7F51\uFF09HWaddr\uFF08\u786C\u4EF6mac\u5730\u5740\uFF09\u3002</li><li>\u7B2C\u4E8C\u884C\uFF1A\u7F51\u5361\u7684IP\u5730\u5740\u3001\u5B50\u7F51\u3001\u63A9\u7801\u3002</li><li>\u7B2C\u4E09\u884C\uFF1AUP\uFF08\u4EE3\u8868\u7F51\u5361\u5F00\u542F\u72B6\u6001\uFF09RUNNING\uFF08\u4EE3\u8868\u7F51\u5361\u7684\u7F51\u7EBF\u88AB\u63A5\u4E0A\uFF09MULTICAST\uFF08\u652F\u6301\u7EC4\u64AD\uFF09MTU:1500\uFF08\u6700\u5927\u4F20\u8F93\u5355\u5143\uFF09\uFF1A1500\u5B57\u8282\u3002</li><li>\u7B2C\u56DB\u3001\u4E94\u884C\uFF1A\u63A5\u6536\u3001\u53D1\u9001\u6570\u636E\u5305\u60C5\u51B5\u7EDF\u8BA1\u3002</li><li>\u7B2C\u4E03\u884C\uFF1A\u63A5\u6536\u3001\u53D1\u9001\u6570\u636E\u5B57\u8282\u6570\u7EDF\u8BA1\u4FE1\u606F\u3002</li></ul><p><strong>\u542F\u52A8\u5173\u95ED\u6307\u5B9A\u7F51\u5361\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig eth0 up</span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig eth0 down</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>ifconfig eth0 up</code>\u4E3A\u542F\u52A8\u7F51\u5361eth0\uFF0C<code>ifconfig eth0 down</code>\u4E3A\u5173\u95ED\u7F51\u5361eth0\u3002ssh\u767B\u9646linux\u670D\u52A1\u5668\u64CD\u4F5C\u8981\u5C0F\u5FC3\uFF0C\u5173\u95ED\u4E86\u5C31\u4E0D\u80FD\u5F00\u542F\u4E86\uFF0C\u9664\u975E\u4F60\u6709\u591A\u7F51\u5361\u3002</p><p><strong>\u4E3A\u7F51\u5361\u914D\u7F6E\u548C\u5220\u9664IPv6\u5730\u5740\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig eth0 add 33ffe:3240:800:1005::2/64    </span><span style="color:#676E95;">#\u4E3A\u7F51\u5361eth0\u914D\u7F6EIPv6\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig eth0 del 33ffe:3240:800:1005::2/64    </span><span style="color:#676E95;">#\u4E3A\u7F51\u5361eth0\u5220\u9664IPv6\u5730\u5740</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u7528ifconfig\u4FEE\u6539MAC\u5730\u5740\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig eth0 hw ether 00:AA:BB:CC:dd:EE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u914D\u7F6EIP\u5730\u5740\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ifconfig eth0 192.168.2.10</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ifconfig eth0 192.168.2.10 netmask 255.255.255.0</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ifconfig eth0 192.168.2.10 netmask 255.255.255.0 broadcast 192.168.2.255</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u542F\u7528\u548C\u5173\u95EDarp\u534F\u8BAE\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig eth0 arp    </span><span style="color:#676E95;">#\u5F00\u542F\u7F51\u5361eth0 \u7684arp\u534F\u8BAE</span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig eth0 -arp   </span><span style="color:#676E95;">#\u5173\u95ED\u7F51\u5361eth0 \u7684arp\u534F\u8BAE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u8BBE\u7F6E\u6700\u5927\u4F20\u8F93\u5355\u5143\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig eth0 mtu 1500    </span><span style="color:#676E95;">#\u8BBE\u7F6E\u80FD\u901A\u8FC7\u7684\u6700\u5927\u6570\u636E\u5305\u5927\u5C0F\u4E3A 1500 bytes</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u5176\u5B83\u5B9E\u4F8B</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ifconfig   </span><span style="color:#676E95;">#\u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001\u7684\u7F51\u7EDC\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig -a  </span><span style="color:#676E95;">#\u6240\u6709\u914D\u7F6E\u7684\u7F51\u7EDC\u63A5\u53E3\uFF0C\u4E0D\u8BBA\u5176\u662F\u5426\u6FC0\u6D3B</span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig eth0  </span><span style="color:#676E95;">#\u663E\u793Aeth0\u7684\u7F51\u5361\u4FE1\u606F</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,31),o=[e];function r(c,t,i,A,D,C){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{y as __pageData,b as default};
