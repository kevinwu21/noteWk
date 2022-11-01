import{_ as s,c as t,o as e,a}from"./app.f6b8b16b.js";const u=JSON.parse('{"title":"systemctl","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/systemctl.md","lastUpdated":1666509709000}'),n={name:"linux/command/pages/systemctl.md"},l=a(`<h1 id="systemctl" tabindex="-1">systemctl <a class="header-anchor" href="#systemctl" aria-hidden="true">#</a></h1><p>\u7CFB\u7EDF\u670D\u52A1\u7BA1\u7406\u5668\u6307\u4EE4</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>systemctl\u547D\u4EE4</strong> \u662F\u7CFB\u7EDF\u670D\u52A1\u7BA1\u7406\u5668\u6307\u4EE4\uFF0C\u5B83\u5B9E\u9645\u4E0A\u5C06 service \u548C chkconfig \u8FD9\u4E24\u4E2A\u547D\u4EE4\u7EC4\u5408\u5230\u4E00\u8D77\u3002</p><table><thead><tr><th>\u4EFB\u52A1</th><th>\u65E7\u6307\u4EE4</th><th>\u65B0\u6307\u4EE4</th></tr></thead><tbody><tr><td>\u4F7F\u67D0\u670D\u52A1\u81EA\u52A8\u542F\u52A8</td><td>chkconfig --level 3 httpd on</td><td>systemctl enable httpd.service</td></tr><tr><td>\u4F7F\u67D0\u670D\u52A1\u4E0D\u81EA\u52A8\u542F\u52A8</td><td>chkconfig --level 3 httpd off</td><td>systemctl disable httpd.service</td></tr><tr><td>\u68C0\u67E5\u670D\u52A1\u72B6\u6001</td><td>service httpd status</td><td>systemctl status httpd.service \uFF08\u670D\u52A1\u8BE6\u7EC6\u4FE1\u606F\uFF09 systemctl is-active httpd.service \uFF08\u4EC5\u663E\u793A\u662F\u5426 Active)</td></tr><tr><td>\u663E\u793A\u6240\u6709\u5DF2\u542F\u52A8\u7684\u670D\u52A1</td><td>chkconfig --list</td><td>systemctl list-units --type=service</td></tr><tr><td>\u542F\u52A8\u670D\u52A1</td><td>service httpd start</td><td>systemctl start httpd.service</td></tr><tr><td>\u505C\u6B62\u670D\u52A1</td><td>service httpd stop</td><td>systemctl stop httpd.service</td></tr><tr><td>\u91CD\u542F\u670D\u52A1</td><td>service httpd restart</td><td>systemctl restart httpd.service</td></tr><tr><td>\u91CD\u8F7D\u670D\u52A1</td><td>service httpd reload</td><td>systemctl reload httpd.service</td></tr></tbody></table><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl start nfs-server.service </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u542F\u52A8nfs\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl\xA0</span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;">\xA0nfs-server.service </span><span style="color:#676E95;"># \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl\xA0disable\xA0nfs-server.service </span><span style="color:#676E95;"># \u505C\u6B62\u5F00\u673A\u81EA\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl\xA0status\xA0nfs-server.service </span><span style="color:#676E95;"># \u67E5\u770B\u670D\u52A1\u5F53\u524D\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl\xA0restart\xA0nfs-server.service </span><span style="color:#676E95;"># \u91CD\u65B0\u542F\u52A8\u67D0\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl\xA0list-units\xA0--type=service </span><span style="color:#676E95;"># \u67E5\u770B\u6240\u6709\u5DF2\u542F\u52A8\u7684\u670D\u52A1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F00\u542F\u9632\u706B\u589922\u7AEF\u53E3</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">iptables\xA0-I\xA0INPUT\xA0-p\xA0tcp\xA0--dport\xA022\xA0-j\xA0accept</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4ECD\u7136\u6709\u95EE\u9898\uFF0C\u5C31\u53EF\u80FD\u662FSELinux\u5BFC\u81F4\u7684</p><p>\u5173\u95EDSElinux\uFF1A</p><p>\u4FEE\u6539<code>/etc/selinux/config</code>\u6587\u4EF6\u4E2D\u7684<code>SELINUX=&quot;&quot;</code>\u4E3Adisabled\uFF0C\u7136\u540E\u91CD\u542F\u3002</p><p>\u5F7B\u5E95\u5173\u95ED\u9632\u706B\u5899\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo\xA0systemctl\xA0status firewalld.service</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo\xA0systemctl\xA0stop\xA0firewalld.service\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo\xA0systemctl\xA0disable\xA0firewalld.service</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),r=[l];function c(p,d,i,o,h,m){return e(),t("div",null,r)}const v=s(n,[["render",c]]);export{u as __pageData,v as default};
