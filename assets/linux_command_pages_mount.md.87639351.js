import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"mount","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/mount.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/mount.md"},p=l(`<h1 id="mount" tabindex="-1">mount <a class="header-anchor" href="#mount" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u6302\u8F7DLinux\u7CFB\u7EDF\u5916\u7684\u6587\u4EF6</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>mount\u547D\u4EE4</strong> Linux mount\u547D\u4EE4\u662F\u7ECF\u5E38\u4F1A\u4F7F\u7528\u5230\u7684\u547D\u4EE4\uFF0C\u5B83\u7528\u4E8E\u6302\u8F7DLinux\u7CFB\u7EDF\u5916\u7684\u6587\u4EF6\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mount </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-hV</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">mount -a </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-fFnrsvw</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-t vfstype</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">mount </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-fnrsvw</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-o options </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">,...</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> device </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> dir</span></span>
<span class="line"><span style="color:#A6ACCD;">mount </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-fnrsvw</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-t vfstype</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-o options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> device dir</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-V\uFF1A\u663E\u793A\u7A0B\u5E8F\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">-h\uFF1A\u663E\u793A\u8F85\u52A9\u8BAF\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u663E\u793A\u8F83\u8BAF\u606F\uFF0C\u901A\u5E38\u548C -f \u7528\u6765\u9664\u9519\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u5C06 /etc/fstab \u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u6863\u6848\u7CFB\u7EDF\u6302\u4E0A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-F\uFF1A\u8FD9\u4E2A\u547D\u4EE4\u901A\u5E38\u548C -a \u4E00\u8D77\u4F7F\u7528\uFF0C\u5B83\u4F1A\u4E3A\u6BCF\u4E00\u4E2A mount \u7684\u52A8\u4F5C\u4EA7\u751F\u4E00\u4E2A\u884C\u7A0B\u8D1F\u8D23\u6267\u884C\u3002\u5728\u7CFB\u7EDF\u9700\u8981\u6302\u4E0A\u5927\u91CF NFS \u6863\u6848\u7CFB\u7EDF\u65F6\u53EF\u4EE5\u52A0\u5FEB\u6302\u4E0A\u7684\u52A8\u4F5C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u901A\u5E38\u7528\u5728\u9664\u9519\u7684\u7528\u9014\u3002\u5B83\u4F1A\u4F7F mount \u5E76\u4E0D\u6267\u884C\u5B9E\u9645\u6302\u4E0A\u7684\u52A8\u4F5C\uFF0C\u800C\u662F\u6A21\u62DF\u6574\u4E2A\u6302\u4E0A\u7684\u8FC7\u7A0B\u3002\u901A\u5E38\u4F1A\u548C -v \u4E00\u8D77\u4F7F\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u4E00\u822C\u800C\u8A00\uFF0Cmount \u5728\u6302\u4E0A\u540E\u4F1A\u5728 /etc/mtab \u4E2D\u5199\u5165\u4E00\u7B14\u8D44\u6599\u3002\u4F46\u5728\u7CFB\u7EDF\u4E2D\u6CA1\u6709\u53EF\u5199\u5165\u6863\u6848\u7CFB\u7EDF\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u7528\u8FD9\u4E2A\u9009\u9879\u53D6\u6D88\u8FD9\u4E2A\u52A8\u4F5C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s-r\uFF1A\u7B49\u4E8E -o ro</span></span>
<span class="line"><span style="color:#A6ACCD;">-w\uFF1A\u7B49\u4E8E -o rw</span></span>
<span class="line"><span style="color:#A6ACCD;">-L\uFF1A\u5C06\u542B\u6709\u7279\u5B9A\u6807\u7B7E\u7684\u786C\u76D8\u5206\u5272\u6302\u4E0A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-U\uFF1A\u5C06\u6863\u6848\u5206\u5272\u5E8F\u53F7\u4E3A \u7684\u6863\u6848\u7CFB\u7EDF\u6302\u4E0B\u3002-L \u548C -U \u5FC5\u987B\u5728/proc/partition \u8FD9\u79CD\u6863\u6848\u5B58\u5728\u65F6\u624D\u6709\u610F\u4E49\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A\u6307\u5B9A\u6863\u6848\u7CFB\u7EDF\u7684\u578B\u6001\uFF0C\u901A\u5E38\u4E0D\u5FC5\u6307\u5B9A\u3002mount \u4F1A\u81EA\u52A8\u9009\u62E9\u6B63\u786E\u7684\u578B\u6001\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o async\uFF1A\u6253\u5F00\u975E\u540C\u6B65\u6A21\u5F0F\uFF0C\u6240\u6709\u7684\u6863\u6848\u8BFB\u5199\u52A8\u4F5C\u90FD\u4F1A\u7528\u975E\u540C\u6B65\u6A21\u5F0F\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o sync\uFF1A\u5728\u540C\u6B65\u6A21\u5F0F\u4E0B\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o atime\u3001-o noatime\uFF1A\u5F53 atime \u6253\u5F00\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u5728\u6BCF\u6B21\u8BFB\u53D6\u6863\u6848\u65F6\u66F4\u65B0\u6863\u6848\u7684\u300E\u4E0A\u4E00\u6B21\u8C03\u7528\u65F6\u95F4\u300F\u3002\u5F53\u6211\u4EEC\u4F7F\u7528 flash \u6863\u6848\u7CFB\u7EDF\u65F6\u53EF\u80FD\u4F1A\u9009\u9879\u628A\u8FD9\u4E2A\u9009\u9879\u5173\u95ED\u4EE5\u51CF\u5C11\u5199\u5165\u7684\u6B21\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o auto\u3001-o noauto\uFF1A\u6253\u5F00/\u5173\u95ED\u81EA\u52A8\u6302\u4E0A\u6A21\u5F0F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o defaults:\u4F7F\u7528\u9884\u8BBE\u7684\u9009\u9879 rw, suid, dev, exec, auto, nouser, and async.</span></span>
<span class="line"><span style="color:#A6ACCD;">-o dev\u3001-o nodev-o exec\u3001-o noexec\u5141\u8BB8\u6267\u884C\u6863\u88AB\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o suid\u3001-o nosuid\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5141\u8BB8\u6267\u884C\u6863\u5728 root \u6743\u9650\u4E0B\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o user\u3001-o nouser\uFF1A\u4F7F\u7528\u8005\u53EF\u4EE5\u6267\u884C mount/umount \u7684\u52A8\u4F5C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o remount\uFF1A\u5C06\u4E00\u4E2A\u5DF2\u7ECF\u6302\u4E0B\u7684\u6863\u6848\u7CFB\u7EDF\u91CD\u65B0\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\u6302\u4E0A\u3002\u4F8B\u5982\u539F\u5148\u662F\u552F\u8BFB\u7684\u7CFB\u7EDF\uFF0C\u73B0\u5728\u7528\u53EF\u8BFB\u5199\u7684\u6A21\u5F0F\u91CD\u65B0\u6302\u4E0A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o ro\uFF1A\u7528\u552F\u8BFB\u6A21\u5F0F\u6302\u4E0A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o rw\uFF1A\u7528\u53EF\u8BFB\u5199\u6A21\u5F0F\u6302\u4E0A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o loop=\uFF1A\u4F7F\u7528 loop \u6A21\u5F0F\u7528\u6765\u5C06\u4E00\u4E2A\u6863\u6848\u5F53\u6210\u786C\u76D8\u5206\u5272\u6302\u4E0A\u7CFB\u7EDF\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5C06 <code>/dev/hda1</code> \u6302\u5728 <code>/mnt</code> \u4E4B\u4E0B\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#mount /dev/hda1 /mnt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06 <code>/dev/hda1</code> \u7528\u552F\u8BFB\u6A21\u5F0F\u6302\u5728 <code>/mnt</code> \u4E4B\u4E0B\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#mount -o ro /dev/hda1 /mnt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06 <code>/tmp/image.iso</code> \u8FD9\u4E2A\u5149\u789F\u7684 <code>image</code> \u6863\u4F7F\u7528 <code>loop</code> \u6A21\u5F0F\u6302\u5728 <code>/mnt/cdrom</code> \u4E4B\u4E0B\u3002\u7528\u8FD9\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5C06\u4E00\u822C\u7F51\u7EDC\u4E0A\u53EF\u4EE5\u627E\u5230\u7684 <code>Linux</code> \u5149 \u789F ISO \u6863\u5728\u4E0D\u70E7\u5F55\u6210\u5149\u789F\u7684\u60C5\u51B5\u4E0B\u68C0\u89C6\u5176\u5185\u5BB9\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#mount -o loop /tmp/image.iso /mnt/cdrom</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),o=[p];function c(r,t,i,d,u,m){return a(),n("div",null,o)}const b=s(e,[["render",c]]);export{C as __pageData,b as default};
