import{_ as s,c as e,o as a,a as n}from"./app.f6b8b16b.js";const _=JSON.parse('{"title":"findfs","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/findfs.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/findfs.md"},i=n(`<h1 id="findfs" tabindex="-1">findfs <a class="header-anchor" href="#findfs" aria-hidden="true">#</a></h1><p>\u6807\u7B7E\u6216UUID\u67E5\u627E\u6587\u4EF6\u7CFB\u7EDF</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>findfs\u547D\u4EE4</strong> \u4F9D\u636E\u5377\u6807\uFF08Label\uFF09\u548CUUID\u67E5\u627E\u6587\u4EF6\u7CFB\u7EDF\u6240\u5BF9\u5E94\u7684\u8BBE\u5907\u6587\u4EF6\u3002findfs\u547D\u4EE4\u4F1A\u641C\u7D22\u6574\u4E2A\u78C1\u76D8\uFF0C\u770B\u662F\u5426\u6709\u5339\u914D\u7684\u6807\u7B7E\u6216\u8005UUID\u6CA1\u6709\uFF0C\u5982\u679C\u6709\u5219\u6253\u5370\u5230\u6807\u6CE8\u8F93\u51FA\u4E0A\u3002findfs\u547D\u4EE4\u4E5F\u662Fe2fsprogs\u9879\u76EE\u7684\u4E00\u90E8\u5206\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">findfs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p><code>LABEL=&lt;\u5377\u6807&gt;</code>\u6216\u8005<code>UUID=&lt;UUID&gt;</code>\uFF1A\u6309\u7167\u5377\u6807\u6216\u8005UUID\u67E5\u8BE2\u6587\u4EF6\u7CFB\u7EDF\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5377\u6807\u540D\u67E5\u627E\u5BF9\u5E94\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">findfs LABEL=/boot</span></span>
<span class="line"><span style="color:#A6ACCD;">/dev/hda1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11),d=[i];function r(t,c,p,o,h,f){return a(),e("div",null,d)}const b=s(l,[["render",r]]);export{_ as __pageData,b as default};