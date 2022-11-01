import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const g=JSON.parse('{"title":"chroot","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/chroot.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/chroot.md"},p=l(`<h1 id="chroot" tabindex="-1">chroot <a class="header-anchor" href="#chroot" aria-hidden="true">#</a></h1><p>\u628A\u6839\u76EE\u5F55\u6362\u6210\u6307\u5B9A\u7684\u76EE\u7684\u76EE\u5F55</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>chroot\u547D\u4EE4</strong> \u7528\u6765\u5728\u6307\u5B9A\u7684\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C\u6307\u4EE4\u3002chroot\uFF0C\u5373 change root directory \uFF08\u66F4\u6539 root \u76EE\u5F55\uFF09\u3002\u5728 linux \u7CFB\u7EDF\u4E2D\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u76EE\u5F55\u7ED3\u6784\u90FD\u662F\u4EE5<code>/</code>\uFF0C\u5373\u662F\u4EE5\u6839 (root) \u5F00\u59CB\u7684\u3002\u800C\u5728\u4F7F\u7528 chroot \u4E4B\u540E\uFF0C\u7CFB\u7EDF\u7684\u76EE\u5F55\u7ED3\u6784\u5C06\u4EE5\u6307\u5B9A\u7684\u4F4D\u7F6E\u4F5C\u4E3A<code>/</code>\u4F4D\u7F6E\u3002</p><p>\u5728\u7ECF\u8FC7 chroot \u547D\u4EE4\u4E4B\u540E\uFF0C\u7CFB\u7EDF\u8BFB\u53D6\u5230\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u5C06\u4E0D\u5728\u662F\u65E7\u7CFB\u7EDF\u6839\u4E0B\u7684\u800C\u662F\u65B0\u6839\u4E0B\uFF08\u5373\u88AB\u6307\u5B9A\u7684\u65B0\u7684\u4F4D\u7F6E\uFF09\u7684\u76EE\u5F55\u7ED3\u6784\u548C\u6587\u4EF6\uFF0C\u56E0\u6B64\u5B83\u5E26\u6765\u7684\u597D\u5904\u5927\u81F4\u6709\u4EE5\u4E0B3\u4E2A\uFF1A</p><p><strong>\u589E\u52A0\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\uFF0C\u9650\u5236\u4E86\u7528\u6237\u7684\u6743\u529B\uFF1A</strong></p><p>\u5728\u7ECF\u8FC7 chroot \u4E4B\u540E\uFF0C\u5728\u65B0\u6839\u4E0B\u5C06\u8BBF\u95EE\u4E0D\u5230\u65E7\u7CFB\u7EDF\u7684\u6839\u76EE\u5F55\u7ED3\u6784\u548C\u6587\u4EF6\uFF0C\u8FD9\u6837\u5C31\u589E\u5F3A\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002\u8FD9\u4E2A\u4E00\u822C\u662F\u5728\u767B\u5F55 (login) \u524D\u4F7F\u7528 chroot\uFF0C\u4EE5\u6B64\u8FBE\u5230\u7528\u6237\u4E0D\u80FD\u8BBF\u95EE\u4E00\u4E9B\u7279\u5B9A\u7684\u6587\u4EF6\u3002</p><p><strong>\u5EFA\u7ACB\u4E00\u4E2A\u4E0E\u539F\u7CFB\u7EDF\u9694\u79BB\u7684\u7CFB\u7EDF\u76EE\u5F55\u7ED3\u6784\uFF0C\u65B9\u4FBF\u7528\u6237\u7684\u5F00\u53D1\uFF1A</strong></p><p>\u4F7F\u7528 chroot \u540E\uFF0C\u7CFB\u7EDF\u8BFB\u53D6\u7684\u662F\u65B0\u6839\u4E0B\u7684\u76EE\u5F55\u548C\u6587\u4EF6\uFF0C\u8FD9\u662F\u4E00\u4E2A\u4E0E\u539F\u7CFB\u7EDF\u6839\u4E0B\u6587\u4EF6\u4E0D\u76F8\u5173\u7684\u76EE\u5F55\u7ED3\u6784\u3002\u5728\u8FD9\u4E2A\u65B0\u7684\u73AF\u5883\u4E2D\uFF0C\u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5\u8F6F\u4EF6\u7684\u9759\u6001\u7F16\u8BD1\u4EE5\u53CA\u4E00\u4E9B\u4E0E\u7CFB\u7EDF\u4E0D\u76F8\u5173\u7684\u72EC\u7ACB\u5F00\u53D1\u3002</p><p><strong>\u5207\u6362\u7CFB\u7EDF\u7684\u6839\u76EE\u5F55\u4F4D\u7F6E\uFF0C\u5F15\u5BFC Linux \u7CFB\u7EDF\u542F\u52A8\u4EE5\u53CA\u6025\u6551\u7CFB\u7EDF\u7B49\uFF1A</strong></p><p>chroot \u7684\u4F5C\u7528\u5C31\u662F\u5207\u6362\u7CFB\u7EDF\u7684\u6839\u4F4D\u7F6E\uFF0C\u800C\u8FD9\u4E2A\u4F5C\u7528\u6700\u4E3A\u660E\u663E\u7684\u662F\u5728\u7CFB\u7EDF\u521D\u59CB\u5F15\u5BFC\u78C1\u76D8\u7684\u5904\u7406\u8FC7\u7A0B\u4E2D\u4F7F\u7528\uFF0C\u4ECE\u521D\u59CB RAM \u78C1\u76D8 (initrd) \u5207\u6362\u7CFB\u7EDF\u7684\u6839\u4F4D\u7F6E\u5E76\u6267\u884C\u771F\u6B63\u7684 init\u3002\u53E6\u5916\uFF0C\u5F53\u7CFB\u7EDF\u51FA\u73B0\u4E00\u4E9B\u95EE\u9898\u65F6\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 chroot \u6765\u5207\u6362\u5230\u4E00\u4E2A\u4E34\u65F6\u7684\u7CFB\u7EDF\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chroot</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u76EE\u5F55\uFF1A\u6307\u5B9A\u65B0\u7684\u6839\u76EE\u5F55\uFF1B</li><li>\u6307\u4EE4\uFF1A\u6307\u5B9A\u8981\u6267\u884C\u7684\u6307\u4EE4\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u5C06target\u4F5C\u4E3A\u6839\u76EE\u5F55\uFF08\u8FD0\u884C\u5176\u4E2D\u7684<code>/bin/sh</code>\uFF09:</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chroot target /bin/sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC,target\u662Fbusybox\u5B89\u88C5\u597D\u7684\u8DEF\u5F84\uFF0C\u7C7B\u4F3C\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\u5305\u542B\u4E86\u8BB8\u591A\u5DE5\u5177\u3002\u8FD9\u6837\uFF0C\u5C06\u4F1A\u8FDB\u5165\u4E00\u4E2Ashell\u754C\u9762\uFF0C\u8FD9\u4E2Ashell\u4EE5target\u4E3A\u6839\u3002\u8FD0\u884Cexit\u9000\u51FA\u8BE5shell\u53C8\u8FD4\u56DE\u539F\u6765\u7684\u672C\u673A\u73AF\u5883\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528Ctrl+D\u3002</p><p>\u6CE8\u610F\uFF1A</p><ul><li>\u6839\u7528\u6237\u624D\u884C</li><li>\u5982\u679C\u76F4\u63A5chroot target\u9ED8\u8BA4\u5BFB\u627Etarget\u7684/bin/bash.\u8FD9\u4F1A\u4EE5target\u4F5C\u4E3A\u6839\u76EE\u5F55</li></ul><p>\u5C06target\u4F5C\u4E3A\u6839\u76EE\u5F55(\u8FD0\u884C\u5176\u4E2D\u7684<code>/bin/ls</code>):</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chroot target /bin/ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0Ctarget\u662Fbusybox\u5B89\u88C5\u597D\u7684\u8DEF\u5F84\uFF0C\u7C7B\u4F3C\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\u5305\u542B\u4E86\u8BB8\u591A\u5DE5\u5177\u3002\u8FD9\u6837\u8FD0\u884C\u7684\u662Ftarget\u4E2D\u7684ls\uFF08\u4E0D\u662F\u672C\u673A\u7684<code>/bin/ls</code>\uFF09\uFF0C\u7136\u540E\u8FD4\u56DE\u7ACB\u5373\u672C\u673A\u7684\u76EE\u5F55\u73AF\u5883\u3002</p><p>\u6CE8\u610F\uFF0C\u81EA\u5DF1\u5728\u672C\u5730\u7F16\u8BD1\u4E00\u4E2A\u7A0B\u5E8F\u751F\u6210a.out\u4E4B\u540E\uFF0C\u62F7\u8FDB<code>target/bin/</code>\u4E2D\u8FD9\u6837\u8FD0\u884C\u5374\u4E0D\u884C,\u56E0\u4E3A\u5B83\u5305\u542B\u4E86\u52A8\u6001\u8FDE\u63A5\u7684\u5E93\uFF0C\u9700\u8981\u7528ldd\u67E5\u770Ba.out\u9700\u8981\u90A3\u4E9B\u52A8\u6001\u5E93\uFF0C\u5C06\u8FD9\u4E9B\u5E93\u62F7\u8D1D\u5230\u65B0\u6839\u7684\u5BF9\u5E94\u8DEF\u5F84\u4E0B\u624D\u80FD\u6267\u884C\u3002</p><p><strong>\u7528chroot\u8FD0\u884C\u81EA\u5DF1\u7F16\u8BD1\u7684\u4E00\u4E2A\u7A0B\u5E8F\uFF1A</strong></p><p>\u51C6\u5907chroot\u7684\u6839\u76EE\u5F55\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir newRoot</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7F16\u8BD1\u81EA\u5DF1\u7684\u7A0B\u5E8F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">gcc main.c</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CCmain.c\u751F\u6210a.out\uFF0C\u529F\u80FD\u662F\u8F93\u51FAhello\u3002</p><p>\u67E5\u770B\u7A0B\u5E8F\u9700\u8981\u7684\u5E93\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ldd a.out</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u4E4B\u540E\uFF0C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">linux-gate.so.1 = </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">gt</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0xb8034000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">libc.so.6 = </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">gt</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> /lib/tls/i686/cmov/libc.so.6 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0xb7eab000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">/lib/ld-linux.so.2 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0xb801a000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u7A0B\u5E8F\u9700\u8981\u7684\u5E93\u548C\u7A0B\u5E8F\u62F7\u8D1D\u5230\u65B0\u6839\u76EE\u5F55\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">cp a.out newRoot</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir newRoot/lib</span></span>
<span class="line"><span style="color:#A6ACCD;">cp /lib/tls/i686/cmov/libc.so.6 newRoot/lib</span></span>
<span class="line"><span style="color:#A6ACCD;">cp /lib/ld-linux.so.2 newRoot/lib</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u91CCnewRoot\u5185\u5BB9\u5C06\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">a.out lib/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528chroot\u8FD0\u884C\u81EA\u5DF1\u7684\u7A0B\u5E8F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">su</span></span>
<span class="line"><span style="color:#A6ACCD;">chroot newRoot /a.out</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u6837\u5C31\u80FD\u591F\u6B63\u786E\u8FD0\u884Ca.out\u4E86\uFF0C\u56E0\u4E3Aa.out\u4F7F\u7528\u5230\u4E86\u5176\u4ED6\u7684\u52A8\u6001\u8FDE\u63A5\u5E93\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u5E93\u62F7\u8D1D\u5230newRoot\u4E2D\uFF0C\u5982\u679C\u6CA1\u6709\u5176\u4ED6\u5E93\u90A3\u4E48\u76F4\u63A5\u62F7\u8D1Da.out\u5C31\u80FD\u8FD0\u884C\u3002\u4F8B\u5982\u9759\u6001\u7F16\u8BD1\u540E\u7684busybox\uFF0C\u5176\u5B89\u88C5\u76EE\u5F55\u4E2D\u7684<code>/bin/busybox</code>\u5C31\u6CA1\u6709\u4F9D\u8D56\u5176\u4ED6\u5E93\u3002</p>`,44),o=[p];function c(r,t,i,d,b,u){return a(),n("div",null,o)}const m=s(e,[["render",c]]);export{g as __pageData,m as default};
