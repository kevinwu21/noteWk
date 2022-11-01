import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"quotacheck","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/quotacheck.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/quotacheck.md"},p=e(`<h1 id="quotacheck" tabindex="-1">quotacheck <a class="header-anchor" href="#quotacheck" aria-hidden="true">#</a></h1><p>\u68C0\u67E5\u78C1\u76D8\u7684\u4F7F\u7528\u7A7A\u95F4\u4E0E\u9650\u5236</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>quotacheck\u547D\u4EE4</strong> \u901A\u8FC7\u626B\u63CF\u6307\u5B9A\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u83B7\u53D6\u78C1\u76D8\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u521B\u5EFA\u3001\u68C0\u67E5\u548C\u4FEE\u590D\u78C1\u76D8\u914D\u989D\uFF08quota\uFF09\u6587\u4EF6\u3002\u6267\u884Cquotacheck\u6307\u4EE4\uFF0C\u626B\u63CF\u6302\u5165\u7CFB\u7EDF\u7684\u5206\u533A\uFF0C\u5E76\u5728\u5404\u5206\u533A\u7684\u6587\u4EF6\u7CFB\u7EDF\u6839\u76EE\u5F55\u4E0B\u4EA7\u751Fquota.user\u548Cquota.group\u6587\u4EF6\uFF0C\u8BBE\u7F6E\u7528\u6237\u548C\u7FA4\u7EC4\u7684\u78C1\u76D8\u7A7A\u95F4\u9650\u5236\u3002</p><p>\u5982\u679C\u5728\u6267\u884Cquotacheck\u547D\u4EE4\u65F6\u51FA\u73B0\u4E86\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">quotacheck: Your kernel probably supports journaled quota but you are not using it. Consider switching to journaled quota to avoid running quotacheck after an unclean shutdown. </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u8003\u8651\u5C06\u4E4B\u524D\u5728\u6587\u4EF6\u7CFB\u7EDF\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u7684quota\u76F8\u5173\u5B57\u6BB5\u4FEE\u6539\u4E3A\uFF1A<code>usrjquota=aquota.user,grpjquota=aquota.group,jqfmt=vfsv1</code>\uFF0C\u7136\u540E\u91CD\u65B0\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF\uFF1A<code>mount -vo remount \u6302\u8F7D\u76EE\u5F55</code>\uFF08\u6CE8\u610F\uFF0C\u5982\u679C\u8FD9\u4E00\u6B65\u64CD\u4F5C\u51FA\u73B0\u4E86\u4EFB\u4F55\u95EE\u9898\uFF0C\u5343\u4E07\u4E0D\u8981\u8BD5\u56FE\u901A\u8FC7\u91CD\u542F\u89E3\u51B3\uFF01\u5C06\u914D\u7F6E\u6587\u4EF6\u6062\u590D\u539F\u72B6\u662F\u4E00\u4E2A\u597D\u7684\u9009\u62E9\uFF09</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">quotacheck</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u626B\u63CF\u5728/etc/fstab\u6587\u4EF6\u91CC\uFF0C\u6709\u52A0\u5165quota\u8BBE\u7F6E\u7684\u5206\u533A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u5BF9\u76EE\u6807\u6587\u4EF6\u7CFB\u7EDF\u8FDB\u884C\u4E00\u6B21\u65B0\u7684\u626B\u63CF\uFF0C\u5E76\u521B\u5EFA\u65B0\u7684quota\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF0C\u4FBF\u4E8E\u6392\u9519\u6216\u4E86\u89E3\u7A0B\u5E8F\u6267\u884C\u7684\u60C5\u5F62\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-g\uFF1A\u626B\u63CF\u78C1\u76D8\u7A7A\u95F4\u65F6\uFF0C\u8BA1\u7B97\u6BCF\u4E2A\u7FA4\u7EC4\u8BC6\u522B\u7801\u6240\u5360\u7528\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u6570\u76EE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R\uFF1A\u6392\u9664\u6839\u76EE\u5F55\u6240\u5728\u7684\u5206\u533A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-u\uFF1A\u626B\u63CF\u78C1\u76D8\u7A7A\u95F4\u65F6\uFF0C\u8BA1\u7B97\u6BCF\u4E2A\u7528\u6237\u8BC6\u522B\u7801\u6240\u5360\u7528\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u6570\u76EE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\u7CFB\u7EDF\uFF1A\u6307\u5B9A\u8981\u626B\u63CF\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5C06\u6240\u6709\u7684\u5728<code>/etc/mtab</code>\u5185\uFF0C\u542B\u6709quota\u652F\u6301\u7684partition\u8FDB\u884C\u626B\u63CF\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@linux </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># quotacheck -avug</span></span>
<span class="line"><span style="color:#A6ACCD;">quotacheck: Scanning /dev/hdb1 </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">/disk2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">done</span></span>
<span class="line"><span style="color:#A6ACCD;">quotacheck: Checked 3 directories and 4 files</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5F3A\u5236\u626B\u63CF\u5DF2\u6302\u8F7D\u7684filesystem\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@linux </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># quotacheck -avug -m</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u626B\u63CF\u6307\u5B9A\u7684filesystem\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@linux </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># quotacheck -cvug /disk2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,20),c=[p];function o(r,t,i,u,d,h){return n(),a("div",null,c)}const D=s(l,[["render",o]]);export{m as __pageData,D as default};
