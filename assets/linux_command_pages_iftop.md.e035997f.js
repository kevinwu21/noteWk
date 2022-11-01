import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const D=JSON.parse('{"title":"iftop","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u754C\u9762\u8BF4\u660E","slug":"\u754C\u9762\u8BF4\u660E","link":"#\u754C\u9762\u8BF4\u660E","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/iftop.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/iftop.md"},p=l(`<h1 id="iftop" tabindex="-1">iftop <a class="header-anchor" href="#iftop" aria-hidden="true">#</a></h1><p>\u4E00\u6B3E\u5B9E\u65F6\u6D41\u91CF\u76D1\u63A7\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>iftop\u547D\u4EE4</strong> \u662F\u4E00\u6B3E\u5B9E\u65F6\u6D41\u91CF\u76D1\u63A7\u5DE5\u5177\uFF0C\u76D1\u63A7TCP/IP\u8FDE\u63A5\u7B49\uFF0C\u7F3A\u70B9\u5C31\u662F\u65E0\u62A5\u8868\u529F\u80FD\u3002\u5FC5\u987B\u4EE5root\u8EAB\u4EFD\u624D\u80FD\u8FD0\u884C\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">iftop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">iftop: display bandwidth usage on an interface by host</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Synopsis: iftop -h </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-npblNBP</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-i interface</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-f filter code</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-F net/mask</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-G net6/mask6</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   -h                  display this message</span></span>
<span class="line"><span style="color:#A6ACCD;">   -n                  don</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t do hostname lookups</span></span>
<span class="line"><span style="color:#C3E88D;">   -N                  don</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">t convert port numbers to services</span></span>
<span class="line"><span style="color:#A6ACCD;">   -p                  run </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> promiscuous mode </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">show traffic between other</span></span>
<span class="line"><span style="color:#A6ACCD;">                       hosts on the same network segment</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   -b                  don</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t display a bar graph of traffic</span></span>
<span class="line"><span style="color:#C3E88D;">   -B                  Display bandwidth in bytes</span></span>
<span class="line"><span style="color:#C3E88D;">   -i interface        listen on named interface</span></span>
<span class="line"><span style="color:#C3E88D;">   -f filter code      use filter code to select packets to count</span></span>
<span class="line"><span style="color:#C3E88D;">                      (default: none, but only IP packets are counted)</span></span>
<span class="line"><span style="color:#C3E88D;">   -F net/mask         show traffic flows in/out of IPv4 network</span></span>
<span class="line"><span style="color:#C3E88D;">   -G net6/mask6       show traffic flows in/out of IPv6 network</span></span>
<span class="line"><span style="color:#C3E88D;">   -l                  display and count link-local IPv6 traffic (default: off)</span></span>
<span class="line"><span style="color:#C3E88D;">   -P                  show ports as well as hosts</span></span>
<span class="line"><span style="color:#C3E88D;">   -m limit            sets the upper limit for the bandwidth scale</span></span>
<span class="line"><span style="color:#C3E88D;">   -c config file      specifies an alternative configuration file</span></span>
<span class="line"><span style="color:#C3E88D;">   -t                  use text interface without ncurses</span></span>
<span class="line"><span style="color:#C3E88D;">   </span></span>
<span class="line"><span style="color:#C3E88D;">   Sorting orders:</span></span>
<span class="line"><span style="color:#C3E88D;">   -o 2s                Sort by first column (2s traffic average)</span></span>
<span class="line"><span style="color:#C3E88D;">   -o 10s               Sort by second column (10s traffic average) [default]</span></span>
<span class="line"><span style="color:#C3E88D;">   -o 40s               Sort by third column (40s traffic average)</span></span>
<span class="line"><span style="color:#C3E88D;">   -o source            Sort by source address</span></span>
<span class="line"><span style="color:#C3E88D;">   -o destination       Sort by destination address</span></span>
<span class="line"><span style="color:#C3E88D;">   </span></span>
<span class="line"><span style="color:#C3E88D;">   The following options are only available in combination with -t</span></span>
<span class="line"><span style="color:#C3E88D;">   -s num              print one single text output afer num seconds, then quit</span></span>
<span class="line"><span style="color:#C3E88D;">   -L num              number of lines to print</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="\u754C\u9762\u8BF4\u660E" tabindex="-1">\u754C\u9762\u8BF4\u660E <a class="header-anchor" href="#\u754C\u9762\u8BF4\u660E" aria-hidden="true">#</a></h3><blockquote><p>\u7B2C\u4E00\u884C\u4E3A\u5E26\u5BBD\uFF0C\u8FD9\u91CC\u4E3A1Mbit,\u4E0D\u662F\u5B57\u8282\u54E6. \u8FDE\u63A5\u5217\u8868\uFF0C\u6700\u540E\u4E09\u5217\u5206\u522B\u662F2\u79D2\uFF0C10\u79D2\u548C40\u79D2\u7684\u5E73\u5747\u6D41\u91CF <code>=&gt;</code> \u4EE3\u8868\u53D1\u9001<br><code>&lt;=</code> \u4EE3\u8868\u63A5\u6536 \u6700\u540E\u4E09\u884C\u8868\u793A\u53D1\u9001\uFF0C\u63A5\u6536\u548C\u5168\u90E8\u7684\u6D41\u91CF\uFF0C \u7B2C\u4E8C\u5217\u4E3A\u4F60\u8FD0\u884Ciftop\u5230\u76EE\u524D\u6D41\u91CF\uFF0C\u7B2C\u4E09\u5217\u4E3A\u9AD8\u5CF0\u503C\uFF0C\u7B2C\u56DB\u5217\u4E3A\u5E73\u5747\u503C\u3002</p></blockquote><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">iftop           </span><span style="color:#676E95;"># \u9ED8\u8BA4\u662F\u76D1\u63A7\u7B2C\u4E00\u5757\u7F51\u5361\u7684\u6D41\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">iftop -i eth1   </span><span style="color:#676E95;"># \u76D1\u63A7eth1</span></span>
<span class="line"><span style="color:#A6ACCD;">iftop -n        </span><span style="color:#676E95;"># \u76F4\u63A5\u663E\u793AIP, \u4E0D\u8FDB\u884CDNS\u53CD\u89E3\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">iftop -N        </span><span style="color:#676E95;"># \u76F4\u63A5\u663E\u793A\u8FDE\u63A5\u57E0\u7F16\u53F7, \u4E0D\u663E\u793A\u670D\u52A1\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">iftop -F 192.168.1.0/24 or 192.168.1.0/255.255.255.0  </span><span style="color:#676E95;"># \u663E\u793A\u67D0\u4E2A\u7F51\u6BB5\u8FDB\u51FA\u5C01\u5305\u6D41\u91CF</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,12),o=[p];function r(t,c,i,b,d,u){return a(),n("div",null,o)}const m=s(e,[["render",r]]);export{D as __pageData,m as default};
