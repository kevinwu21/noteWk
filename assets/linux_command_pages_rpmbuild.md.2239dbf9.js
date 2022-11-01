import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"rpmbuild","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/rpmbuild.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/rpmbuild.md"},r=e(`<h1 id="rpmbuild" tabindex="-1">rpmbuild <a class="header-anchor" href="#rpmbuild" aria-hidden="true">#</a></h1><p>\u521B\u5EFARPM\u7684\u4E8C\u8FDB\u5236\u8F6F\u4EF6\u5305\u548C\u6E90\u7801\u8F6F\u4EF6\u5305</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>rpmbuild\u547D\u4EE4</strong> \u88AB\u7528\u4E8E\u521B\u5EFArpm\u7684\u4E8C\u8FDB\u5236\u8F6F\u4EF6\u5305\u548C\u6E90\u7801\u8F6F\u4EF6\u5305\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpmbuild</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">--initdb\uFF1A\u521D\u59CB\u5316RPM\u6570\u636E\u5E93\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--rebuilddb\uFF1A\u4ECE\u5DF2\u5B89\u88C5\u7684\u5305\u5934\u6587\u4EF6\uFF0C\u65B9\u5411\u91CD\u5EFARPM\u6570\u636E\u5E93\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ba\uFF1A\u521B\u5EFA\u4E8C\u8FDB\u5236\u548C\u6E90\u4EE3\u7801\u5305\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bb\uFF1A\u521B\u5EFA\u4E8C\u8FDB\u5236\u4EE3\u7801\u5305\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bs\uFF1A\u521B\u5EFA\u6E90\u4EE3\u7801\u5305\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">rpmbuild -ba </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">spec\u6587\u4EF6\u8DEF\u5F84</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>build\u5B8C\u540E\uFF0C\u53EF\u4EE5\u5728<code>/usr/src/redhat/RPMS/</code>\u4E0B\u627E\u5230\u4E8C\u8FDB\u5236rpm\u5305\uFF0Crpm\u5305\u6309\u7167\u5176\u5BF9\u5E94\u7684cpu\u4F53\u7CFB\u7ED3\u6784\u5206\u7C7B\uFF0C\u901A\u5E38\u5728<code>/usr/src/redhat/RPMS/i386</code>\u76EE\u5F55\u4E0B\u3002<code>/usr/src/redhat/SRPMS/</code>\u4E0B\u627E\u5230\u6E90\u7801rpm\u5305\uFF0C\u6B64\u65F6\u7531\u4E8E\u662F\u6E90\u4EE3\u7801\uFF0C\u6240\u4EE5\u65E0\u987B\u6309\u4F53\u7CFB\u7ED3\u6784\u5206\u7C7B\u3002</p>`,11),p=[r];function c(i,d,t,o,u,b){return n(),a("div",null,p)}const _=s(l,[["render",c]]);export{m as __pageData,_ as default};
