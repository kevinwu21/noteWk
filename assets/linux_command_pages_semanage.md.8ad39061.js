import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const b=JSON.parse('{"title":"semanage","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/semanage.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/semanage.md"},p=l(`<h1 id="semanage" tabindex="-1">semanage <a class="header-anchor" href="#semanage" aria-hidden="true">#</a></h1><p>\u9ED8\u8BA4\u76EE\u5F55\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u67E5\u8BE2\u4E0E\u4FEE\u6539</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>semanage\u547D\u4EE4</strong> \u662F\u7528\u6765\u67E5\u8BE2\u4E0E\u4FEE\u6539SELinux\u9ED8\u8BA4\u76EE\u5F55\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002SELinux\u7684\u7B56\u7565\u4E0E\u89C4\u5219\u7BA1\u7406\u76F8\u5173\u547D\u4EE4\uFF1Aseinfo\u547D\u4EE4\u3001sesearch\u547D\u4EE4\u3001getsebool\u547D\u4EE4\u3001setsebool\u547D\u4EE4\u3001semanage\u547D\u4EE4\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">semanage {login</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">interface</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">fcontext</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">translation} -l</span></span>
<span class="line"><span style="color:#A6ACCD;">semanage fcontext -{a</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">m} </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-frst</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> file_spec</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-l\uFF1A\u67E5\u8BE2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">fcontext\uFF1A\u4E3B\u8981\u7528\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u65B9\u9762\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u589E\u52A0\uFF0C\u4F60\u53EF\u4EE5\u589E\u52A0\u4E00\u4E9B\u76EE\u5F55\u7684\u9ED8\u8BA4\u5B89\u5168\u4E0A\u4E0B\u6587\u7C7B\u578B\u8BBE\u7F6E\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-m\uFF1A\u4FEE\u6539\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u5220\u9664\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u67E5\u8BE2\u4E00\u4E0B<code>/var/www/html</code>\u7684\u9ED8\u8BA4\u5B89\u5168\u6027\u672C\u6587\u7684\u8BBE\u7F6E\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">semanage fcontext -l</span></span>
<span class="line"><span style="color:#A6ACCD;">SELinux fcontext    </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;">          Context</span></span>
<span class="line"><span style="color:#A6ACCD;">....</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u524D\u9762\u7701\u7565</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">/var/www</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">      all files     system_u:object_r:httpd_sys_content_t:s0</span></span>
<span class="line"><span style="color:#A6ACCD;">....</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u5F8C\u9762\u7701\u7565</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">....</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u4E0A\u9762\u4F8B\u5B50\u6240\u793A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u8BE2\u7684\u5230\u6BCF\u4E2A\u76EE\u5F55\u7684\u5B89\u5168\u6027\u672C\u6587\uFF01\u800C\u76EE\u5F55\u7684\u8BBE\u5B9A\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u53BB\u6307\u5B9A\u4E00\u4E2A\u8303\u56F4\u3002\u90A3\u4E48\u5982\u679C\u6211\u4EEC\u60F3\u8981\u589E\u52A0\u67D0\u4E9B\u81EA\u5B9A\u4E49\u76EE\u5F55\u7684\u5B89\u5168\u6027\u672C\u6587\u5462\uFF1F\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u6211\u60F3\u8981\u8272\u8BBE\u7F6E<code>/srv/samba</code>\u6210\u4E3A <code>public_content_t</code>\u7684\u7C7B\u578B\u65F6\uFF0C\u5E94\u8BE5\u5982\u4F55\u8BBE\u7F6E\u5462\uFF1F</p><p>\u7528semanage\u547D\u4EE4\u8BBE\u7F6E<code>/srv/samba</code>\u76EE\u5F55\u7684\u9ED8\u8BA4\u5B89\u5168\u6027\u672C\u6587\u4E3A<code>public_content_t</code>\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir /srv/samba</span></span>
<span class="line"><span style="color:#A6ACCD;">ll -Zd /srv/samba</span></span>
<span class="line"><span style="color:#A6ACCD;">drwxr-xr-x  root root root:object_r:var_t    /srv/samba</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u4E0A\u6240\u793A\uFF0C\u9ED8\u8BA4\u7684\u60C5\u51B5\u5E94\u8BE5\u662F<code>var_t</code>\u8FD9\u4E2A\u549A\u549A\u7684\uFF01</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">semanage fcontext -l </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/srv</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">                     all files   system_u:object_r:var_t:s0</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">)?</span><span style="color:#A6ACCD;">ftp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">     all files   system_u:object_r:public_content_t:s0</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">)?</span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">     all files   system_u:object_r:httpd_sys_content_t:s0</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">)?</span><span style="color:#A6ACCD;">rsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">   all files   system_u:object_r:public_content_t:s0</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/gallery2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">         all files   system_u:object_r:httpd_sys_content_t:s0</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv                        directory   system_u:object_r:var_t:s0   //\u770B\u8FD9\u91CC\uFF01</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u5219\u662F\u9ED8\u8BA4\u7684<code>/srv</code>\u5E95\u4E0B\u7684\u5B89\u5168\u6027\u672C\u6587\u8D44\u6599\uFF0C\u4E0D\u8FC7\uFF0C\u5E76\u6CA1\u6709\u6307\u5B9A\u5230<code>/srv/samba</code>\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">semanage fcontext -a -t public_content_t </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/srv/samba(/.*)?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">semanage fcontext -l </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/srv/samba</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/samba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">            all files   system_u:object_r:public_content_t:s0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">cat /etc/selinux/targeted/contexts/files/file_contexts.local</span></span>
<span class="line"><span style="color:#676E95;"># This file is auto-generated by libsemanage</span></span>
<span class="line"><span style="color:#676E95;"># Please use the semanage command to make changes</span></span>
<span class="line"><span style="color:#A6ACCD;">/srv/samba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">*)?</span><span style="color:#A6ACCD;">    system_u:object_r:public_content_t:s0  </span><span style="color:#676E95;">#\u5199\u5165\u8FD9\u4E2A\u6863\u6848</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">restorecon -Rv /srv/samba</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u5C1D\u8BD5\u6062\u590D\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">ll -Zd /srv/samba</span></span>
<span class="line"><span style="color:#A6ACCD;">drwxr-xr-x  root root system_u:object_r:public_content_t /srv/samba/  </span><span style="color:#676E95;">#\u6709\u9ED8\u8BA4\u503C\uFF0C\u4EE5\u540E\u7528restorecon\u547D\u4EE4\u6765\u4FEE\u6539\u6BD4\u8F83\u7B80\u5355\uFF01</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>semanage\u547D\u4EE4\u7684\u529F\u80FD\u5F88\u591A\uFF0C\u8FD9\u91CC\u4E3B\u8981\u7528\u5230\u7684\u4EC5\u6709fcontext\u8FD9\u4E2A\u9009\u9879\u7684\u7528\u6CD5\u800C\u5DF2\u3002\u5982\u4E0A\u6240\u793A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528semanage\u6765\u67E5\u8BE2\u6240\u6709\u7684\u76EE\u5F55\u9ED8\u8BA4\u503C\uFF0C\u4E5F\u80FD\u591F\u4F7F\u7528\u5B83\u6765\u589E\u52A0\u9ED8\u8BA4\u503C\u7684\u8BBE\u7F6E\uFF01</p>`,21),o=[p];function c(r,t,i,D,y,C){return a(),n("div",null,o)}const d=s(e,[["render",c]]);export{b as __pageData,d as default};
