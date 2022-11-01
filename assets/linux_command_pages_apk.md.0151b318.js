import{_ as s,c as n,o as a,a as p}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"apk","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u5B9E\u4F8B","slug":"\u4F7F\u7528\u5B9E\u4F8B","link":"#\u4F7F\u7528\u5B9E\u4F8B","children":[{"level":3,"title":"\u5347\u7EA7","slug":"\u5347\u7EA7","link":"#\u5347\u7EA7","children":[]},{"level":3,"title":"\u641C\u7D22","slug":"\u641C\u7D22","link":"#\u641C\u7D22","children":[]},{"level":3,"title":"\u67E5\u770B\u5305\u4FE1\u606F","slug":"\u67E5\u770B\u5305\u4FE1\u606F","link":"#\u67E5\u770B\u5305\u4FE1\u606F","children":[]}]},{"level":2,"title":"\u7B14\u8BB0","slug":"\u7B14\u8BB0","link":"#\u7B14\u8BB0","children":[]}],"relativePath":"linux/command/pages/apk.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/apk.md"},e=p(`<h1 id="apk" tabindex="-1">apk <a class="header-anchor" href="#apk" aria-hidden="true">#</a></h1><p>Alpine Linux \u4E0B\u7684\u5305\u7BA1\u7406\u5DE5\u5177</p><h2 id="\u4F7F\u7528\u5B9E\u4F8B" tabindex="-1">\u4F7F\u7528\u5B9E\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u5B9E\u4F8B" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apk install xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">apk search xxx </span><span style="color:#676E95;"># \u652F\u6301\u6B63\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info xxx </span><span style="color:#676E95;"># \u67E5\u770B\u5305\u7684\u8BE6\u7EC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">apk show </span><span style="color:#676E95;"># list local package</span></span>
<span class="line"><span style="color:#676E95;"># \u5378\u8F7D\u5E76\u5220\u9664 \u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">apk del openssh openntp vim</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5347\u7EA7" tabindex="-1">\u5347\u7EA7 <a class="header-anchor" href="#\u5347\u7EA7" aria-hidden="true">#</a></h3><p>upgrade\u547D\u4EE4\u5347\u7EA7\u7CFB\u7EDF\u5DF2\u5B89\u88C5\u7684\u6240\u4EE5\u8F6F\u4EF6\u5305\uFF08\u4E00\u822C\u5305\u62EC\u5185\u6838\uFF09\uFF0C\u5F53\u7136\u4E5F\u53EF\u6307\u5B9A\u4EC5\u5347\u7EA7\u90E8\u5206\u8F6F\u4EF6\u5305\uFF08\u901A\u8FC7-u\u6216\u2013upgrade\u9009\u62E9\u6307\u5B9A\uFF09\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apk update </span><span style="color:#676E95;"># \u66F4\u65B0\u6700\u65B0\u672C\u5730\u955C\u50CF\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">apk upgrade </span><span style="color:#676E95;"># \u5347\u7EA7\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add --upgrade busybox </span><span style="color:#676E95;"># \u6307\u5B9A\u5347\u7EA7\u90E8\u5206\u8F6F\u4EF6\u5305</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u641C\u7D22" tabindex="-1">\u641C\u7D22 <a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apk search </span><span style="color:#676E95;"># \u67E5\u627E\u6240\u4EE5\u53EF\u7528\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">apk search -v </span><span style="color:#676E95;"># \u67E5\u627E\u6240\u4EE5\u53EF\u7528\u8F6F\u4EF6\u5305\u53CA\u5176\u63CF\u8FF0\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">apk search -v </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">acf*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u901A\u8FC7\u8F6F\u4EF6\u5305\u540D\u79F0\u67E5\u627E\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">apk search -v -d </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">docker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u901A\u8FC7\u63CF\u8FF0\u6587\u4EF6\u67E5\u627E\u7279\u5B9A\u7684\u8F6F\u4EF6\u5305</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u67E5\u770B\u5305\u4FE1\u606F" tabindex="-1">\u67E5\u770B\u5305\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u770B\u5305\u4FE1\u606F" aria-hidden="true">#</a></h3><p>info\u547D\u4EE4\u7528\u4E8E\u663E\u793A\u8F6F\u4EF6\u5305\u7684\u4FE1\u606F\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apk info </span><span style="color:#676E95;"># \u5217\u51FA\u6240\u6709\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info -a zlib </span><span style="color:#676E95;"># \u663E\u793A\u5B8C\u6574\u7684\u8F6F\u4EF6\u5305\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info --who-owns /sbin/lbu </span><span style="color:#676E95;"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u5C5E\u4E8E\u7684\u5305</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u7B14\u8BB0" tabindex="-1">\u7B14\u8BB0 <a class="header-anchor" href="#\u7B14\u8BB0" aria-hidden="true">#</a></h2><p>\u8FD8\u662F\u86EE\u559C\u6B22 alpine \u7684\uFF0C\u7B80\u5355\u7EAF\u7CB9</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apk add iproute2 </span><span style="color:#676E95;"># ss vs netstat</span></span>
<span class="line"><span style="color:#A6ACCD;">ss -ptl</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add drill </span><span style="color:#676E95;"># drill vs nslookup&amp;dig</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">crond </span><span style="color:#676E95;"># \u5F00\u542F cron \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -l -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">apk add xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">apk search -v xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info -a xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> -e </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://mirrors.aliyun.com/alpine/v3.6/main\\nhttp://mirrors.aliyun.com/alpine/v3.6/community</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /etc/apk/repositories</span></span>
<span class="line"><span style="color:#A6ACCD;">apk update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># storage</span></span>
<span class="line"><span style="color:#A6ACCD;">ibu </span><span style="color:#676E95;"># alpine local backup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># network</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shortname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /etc/hostname</span></span>
<span class="line"><span style="color:#A6ACCD;">hostname -F /etc/hostname</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/hosts</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/resolv.conf </span><span style="color:#676E95;"># conig DNS</span></span>
<span class="line"><span style="color:#A6ACCD;">modprobe ipv6 </span><span style="color:#676E95;"># enable ipv6</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ipv6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> /etc/modules</span></span>
<span class="line"><span style="color:#A6ACCD;">iface </span><span style="color:#676E95;"># config interface</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add iptables ip6tables iptables-doc</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/networking restart </span><span style="color:#676E95;"># activate change</span></span>
<span class="line"><span style="color:#A6ACCD;">apke add iputils </span><span style="color:#676E95;"># IPv6 traceroute</span></span>
<span class="line"><span style="color:#A6ACCD;">traceroute6 ipv6.google.com</span></span>
<span class="line"><span style="color:#A6ACCD;">awall </span><span style="color:#676E95;"># alpine wall</span></span>
<span class="line"><span style="color:#676E95;"># setup a openvpn server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># post-install</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/apk/repositories</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add cherokee --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted</span></span>
<span class="line"><span style="color:#A6ACCD;">apk search -v --description </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NTP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># show description and search from description</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info -a zlib</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info -vv</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">sort</span></span>
<span class="line"><span style="color:#A6ACCD;">apk info -r -R </span><span style="color:#676E95;"># require / depency</span></span>
<span class="line"><span style="color:#A6ACCD;">apk version -v -l </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># show available updates</span></span>
<span class="line"><span style="color:#A6ACCD;">apk upgrade -U -a</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add -u xxx </span><span style="color:#676E95;"># update xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/etc/runlevels </span><span style="color:#676E95;"># runlevel</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add openrc </span><span style="color:#676E95;"># use openrc for init system</span></span>
<span class="line"><span style="color:#A6ACCD;">rc-update add xxx </span><span style="color:#676E95;"># set to start on</span></span>
<span class="line"><span style="color:#A6ACCD;">rc-service xxx start </span><span style="color:#676E95;"># equal -&gt; /etc/init.d/xxx start</span></span>
<span class="line"><span style="color:#A6ACCD;">rc-status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">adduser xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">apk add ansible </span><span style="color:#676E95;"># server</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-keygen</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/ansible/hosts</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add python </span><span style="color:#676E95;"># node</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-copy-id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">apk add man man-pages mdocml-apropos less less-doc</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PAGER=less</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/rc.conf </span><span style="color:#676E95;"># /etc/rc.conf -&gt; funny character</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add bash bash-doc bash-completion </span><span style="color:#676E95;"># bash</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add util-linux pciutils usbutils coreutils binutils findutils grep </span><span style="color:#676E95;"># grep / awk</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add build-base gcc abuild binutils binutils-doc gcc-doc </span><span style="color:#676E95;"># compile</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add cmake cmake-doc extra-cmake-modules extra-cmake-modules-doc</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add ccache ccache-doc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">apk add docker </span><span style="color:#676E95;"># docker</span></span>
<span class="line"><span style="color:#A6ACCD;">rc-update add docker boot</span></span>
<span class="line"><span style="color:#A6ACCD;">rc-service docker start</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add py-pip</span></span>
<span class="line"><span style="color:#A6ACCD;">pip install docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;">ln -s /usr/bin/docker-compose /usr/bin/doc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># application</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add openssh </span><span style="color:#676E95;"># ssh</span></span>
<span class="line"><span style="color:#A6ACCD;">rc-update add sshd</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/sshd start</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/sshd_config</span></span>
<span class="line"><span style="color:#A6ACCD;">apk add dropbear </span><span style="color:#676E95;"># another openssh implementation</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div>`,15),c=[e];function r(o,i,t,b,u,d){return a(),n("div",null,c)}const y=s(l,[["render",r]]);export{C as __pageData,y as default};
