import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const F=JSON.parse('{"title":"ip","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u5BF9\u8C61","slug":"\u5BF9\u8C61","link":"#\u5BF9\u8C61","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/ip.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/ip.md"},e=l(`<h1 id="ip" tabindex="-1">ip <a class="header-anchor" href="#ip" aria-hidden="true">#</a></h1><p>\u7F51\u7EDC\u914D\u7F6E\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>ip\u547D\u4EE4</strong> \u7528\u6765\u663E\u793A\u6216\u64CD\u7EB5Linux\u4E3B\u673A\u7684\u8DEF\u7531\u3001\u7F51\u7EDC\u8BBE\u5907\u3001\u7B56\u7565\u8DEF\u7531\u548C\u96A7\u9053\uFF0C\u662FLinux\u4E0B\u8F83\u65B0\u7684\u529F\u80FD\u5F3A\u5927\u7684\u7F51\u7EDC\u914D\u7F6E\u5DE5\u5177\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ip</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u5BF9\u8C61</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">Usage: ip </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> OPTIONS </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> OBJECT </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> COMMAND </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">help</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">       ip </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-f</span><span style="color:#A6ACCD;">orce </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> -batch filename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">OBJECT := </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> link </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> address </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> addrlabel </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> route </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> rule </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> neigh </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> ntable </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">       tunnel </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tuntap </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> maddress </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> mroute </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> mrule </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> monitor </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> xfrm </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">       netns </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> l2tp </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> macsec </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tcp_metrics </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> token }</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">-V\uFF1A\u663E\u793A\u6307\u4EE4\u7248\u672C\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u8F93\u51FA\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u5F3A\u5236\u4F7F\u7528\u6307\u5B9A\u7684\u534F\u8BAE\u65CF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-4\uFF1A\u6307\u5B9A\u4F7F\u7528\u7684\u7F51\u7EDC\u5C42\u534F\u8BAE\u662FIPv4\u534F\u8BAE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-6\uFF1A\u6307\u5B9A\u4F7F\u7528\u7684\u7F51\u7EDC\u5C42\u534F\u8BAE\u662FIPv6\u534F\u8BAE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-0\uFF1A\u8F93\u51FA\u4FE1\u606F\u6BCF\u6761\u8BB0\u5F55\u8F93\u51FA\u4E00\u884C\uFF0C\u5373\u4F7F\u5185\u5BB9\u8F83\u591A\u4E5F\u4E0D\u6362\u884C\u663E\u793A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A\u663E\u793A\u4E3B\u673A\u65F6\uFF0C\u4E0D\u4F7F\u7528IP\u5730\u5740\uFF0C\u800C\u4F7F\u7528\u4E3B\u673A\u7684\u57DF\u540D\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">OPTIONS := </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> -V</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ersion</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -s</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tatistics</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -d</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">etails</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -r</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">esolve</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">        -h</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">uman-readable</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -iec </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">        -f</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">amily</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> inet </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> inet6 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> ipx </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> dnet </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bridge </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> link } </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">        -4 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -6 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -I </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -D </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -B </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -0 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">        -l</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">oops</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> maximum-addr-flush-attempts } </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">        -o</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">neline</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -t</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">imestamp</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -ts</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">hort</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -b</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">atch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">        -rc</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">vbuf</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -n</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">etns</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -a</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ll</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">\u7F51\u7EDC\u5BF9\u8C61\uFF1A\u6307\u5B9A\u8981\u7BA1\u7406\u7684\u7F51\u7EDC\u5BF9\u8C61\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5177\u4F53\u64CD\u4F5C\uFF1A\u5BF9\u6307\u5B9A\u7684\u7F51\u7EDC\u5BF9\u8C61\u5B8C\u6210\u5177\u4F53\u64CD\u4F5C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">help\uFF1A\u663E\u793A\u7F51\u7EDC\u5BF9\u8C61\u652F\u6301\u7684\u64CD\u4F5C\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ip link show                    </span><span style="color:#676E95;"># \u663E\u793A\u7F51\u7EDC\u63A5\u53E3\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> eth0 up             </span><span style="color:#676E95;"># \u5F00\u542F\u7F51\u5361</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> eth0 down            </span><span style="color:#676E95;"># \u5173\u95ED\u7F51\u5361</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> eth0 promisc on      </span><span style="color:#676E95;"># \u5F00\u542F\u7F51\u5361\u7684\u6DF7\u5408\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> eth0 promisc offi    </span><span style="color:#676E95;"># \u5173\u95ED\u7F51\u5361\u7684\u6DF7\u5408\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> eth0 txqueuelen 1200 </span><span style="color:#676E95;"># \u8BBE\u7F6E\u7F51\u5361\u961F\u5217\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> eth0 mtu 1400        </span><span style="color:#676E95;"># \u8BBE\u7F6E\u7F51\u5361\u6700\u5927\u4F20\u8F93\u5355\u5143</span></span>
<span class="line"><span style="color:#A6ACCD;">ip addr show     </span><span style="color:#676E95;"># \u663E\u793A\u7F51\u5361IP\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">ip addr add 192.168.0.1/24 dev eth0 </span><span style="color:#676E95;"># \u4E3Aeth0\u7F51\u5361\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684IP\u5730\u5740192.168.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">ip addr del 192.168.0.1/24 dev eth0 </span><span style="color:#676E95;"># \u4E3Aeth0\u7F51\u5361\u5220\u9664\u4E00\u4E2AIP\u5730\u5740192.168.0.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ip route show </span><span style="color:#676E95;"># \u663E\u793A\u7CFB\u7EDF\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route add default via 192.168.1.254   </span><span style="color:#676E95;"># \u8BBE\u7F6E\u7CFB\u7EDF\u9ED8\u8BA4\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route list                 </span><span style="color:#676E95;"># \u67E5\u770B\u8DEF\u7531\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route add 192.168.4.0/24  via  192.168.0.254 dev eth0 </span><span style="color:#676E95;"># \u8BBE\u7F6E192.168.4.0\u7F51\u6BB5\u7684\u7F51\u5173\u4E3A192.168.0.254,\u6570\u636E\u8D70eth0\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route add default via  192.168.0.254  dev eth0        </span><span style="color:#676E95;"># \u8BBE\u7F6E\u9ED8\u8BA4\u7F51\u5173\u4E3A192.168.0.254</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route del 192.168.4.0/24   </span><span style="color:#676E95;"># \u5220\u9664192.168.4.0\u7F51\u6BB5\u7684\u7F51\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route del default          </span><span style="color:#676E95;"># \u5220\u9664\u9ED8\u8BA4\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route delete 192.168.1.0/24 dev eth0 </span><span style="color:#676E95;"># \u5220\u9664\u8DEF\u7531</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>\u7528ip\u547D\u4EE4\u663E\u793A\u7F51\u7EDC\u8BBE\u5907\u7684\u8FD0\u884C\u72B6\u6001</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ip link list</span></span>
<span class="line"><span style="color:#A6ACCD;">1: lo: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">LOOPBACK,UP,LOWER_UP</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 16436 qdisc noqueue</span></span>
<span class="line"><span style="color:#A6ACCD;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#A6ACCD;">2: eth0: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500 qdisc pfifo_fast qlen 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    link/ether 00:16:3e:00:1e:51 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#A6ACCD;">3: eth1: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500 qdisc pfifo_fast qlen 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    link/ether 00:16:3e:00:1e:52 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u663E\u793A\u66F4\u52A0\u8BE6\u7EC6\u7684\u8BBE\u5907\u4FE1\u606F</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ip -s link list</span></span>
<span class="line"><span style="color:#A6ACCD;">1: lo: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">LOOPBACK,UP,LOWER_UP</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 16436 qdisc noqueue</span></span>
<span class="line"><span style="color:#A6ACCD;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#A6ACCD;">    RX: bytes  packets  errors  dropped overrun mcast   </span></span>
<span class="line"><span style="color:#A6ACCD;">    5082831    56145    0       0       0       0      </span></span>
<span class="line"><span style="color:#A6ACCD;">    TX: bytes  packets  errors  dropped carrier collsns</span></span>
<span class="line"><span style="color:#A6ACCD;">    5082831    56145    0       0       0       0      </span></span>
<span class="line"><span style="color:#A6ACCD;">2: eth0: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500 qdisc pfifo_fast qlen 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    link/ether 00:16:3e:00:1e:51 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#A6ACCD;">    RX: bytes  packets  errors  dropped overrun mcast   </span></span>
<span class="line"><span style="color:#A6ACCD;">    3641655380 62027099 0       0       0       0      </span></span>
<span class="line"><span style="color:#A6ACCD;">    TX: bytes  packets  errors  dropped carrier collsns</span></span>
<span class="line"><span style="color:#A6ACCD;">    6155236    89160    0       0       0       0      </span></span>
<span class="line"><span style="color:#A6ACCD;">3: eth1: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500 qdisc pfifo_fast qlen 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    link/ether 00:16:3e:00:1e:52 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#A6ACCD;">    RX: bytes  packets  errors  dropped overrun mcast   </span></span>
<span class="line"><span style="color:#A6ACCD;">    2562136822 488237847 0       0       0       0      </span></span>
<span class="line"><span style="color:#A6ACCD;">    TX: bytes  packets  errors  dropped carrier collsns</span></span>
<span class="line"><span style="color:#A6ACCD;">    3486617396 9691081  0       0       0       0     </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>\u663E\u793A\u6838\u5FC3\u8DEF\u7531\u8868</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ip route list </span></span>
<span class="line"><span style="color:#A6ACCD;">112.124.12.0/22 dev eth1  proto kernel  scope link  src 112.124.15.130</span></span>
<span class="line"><span style="color:#A6ACCD;">10.160.0.0/20 dev eth0  proto kernel  scope link  src 10.160.7.81</span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.0.0/16 via 10.160.15.247 dev eth0</span></span>
<span class="line"><span style="color:#A6ACCD;">172.16.0.0/12 via 10.160.15.247 dev eth0</span></span>
<span class="line"><span style="color:#A6ACCD;">10.0.0.0/8 via 10.160.15.247 dev eth0</span></span>
<span class="line"><span style="color:#A6ACCD;">default via 112.124.15.247 dev eth1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u663E\u793A\u90BB\u5C45\u8868</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># ip neigh list</span></span>
<span class="line"><span style="color:#A6ACCD;">112.124.15.247 dev eth1 lladdr 00:00:0c:9f:f3:88 REACHABLE</span></span>
<span class="line"><span style="color:#A6ACCD;">10.160.15.247 dev eth0 lladdr 00:00:0c:9f:f2:c0 STALE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u83B7\u53D6\u4E3B\u673A\u6240\u6709\u7F51\u7EDC\u63A5\u53E3</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep -E </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^[0-9]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> awk -F: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,22),o=[e];function r(c,t,D,A,i,C){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
