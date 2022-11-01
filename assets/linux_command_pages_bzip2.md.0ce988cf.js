import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"bzip2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/bzip2.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/bzip2.md"},p=l(`<h1 id="bzip2" tabindex="-1">bzip2 <a class="header-anchor" href="#bzip2" aria-hidden="true">#</a></h1><p>\u5C06\u6587\u4EF6\u538B\u7F29\u6210bz2\u683C\u5F0F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>bzip2\u547D\u4EE4</strong> \u7528\u4E8E\u521B\u5EFA\u548C\u7BA1\u7406\uFF08\u5305\u62EC\u89E3\u538B\u7F29\uFF09\u201C.bz2\u201D\u683C\u5F0F\u7684\u538B\u7F29\u5305\u3002</p><p>bzip2 \u91C7\u7528 Burrows-Wheeler \u5757\u6392\u5E8F\u6587\u672C\u538B\u7F29\u7B97\u6CD5\u548C Huffman \u7F16\u7801\u65B9\u5F0F\u538B\u7F29\u6587\u4EF6\u3002 \u538B\u7F29\u7387\u4E00\u822C\u6BD4\u57FA\u4E8E LZ77/LZ78 \u7684\u538B\u7F29\u8F6F\u4EF6\u597D\u5F97\u591A\uFF0C\u5176\u6027\u80FD\u63A5\u8FD1 PPM \u65CF\u7EDF\u8BA1\u7C7B\u538B\u7F29\u8F6F\u4EF6\u3002</p><p>\u547D\u4EE4\u884C\u53C2\u6570\u6709\u610F\u8BBE\u8BA1\u4E3A\u975E\u5E38\u63A5\u8FD1 GNU gzip \u7684\u5F62\u5F0F\uFF0C\u4F46\u4E5F\u4E0D\u5B8C\u5168\u76F8\u540C\u3002</p><p>bzip2 \u4ECE\u547D\u4EE4\u884C\u8BFB\u5165\u6587\u4EF6\u540D\u548C\u53C2\u6570\u3002 \u6BCF\u4E2A\u6587\u4EF6\u88AB\u540D\u4E3A &quot;\u539F\u59CB\u6587\u4EF6\u540D.bz2&quot; \u7684\u538B\u7F29\u6587\u4EF6\u66FF\u6362\u3002 \u6BCF\u4E2A\u538B\u7F29\u6587\u4EF6\u5177\u6709\u4E0E\u539F\u6587\u4EF6\u76F8\u540C\u7684\u4FEE\u6539\u65F6\u95F4\u3001 \u6743\u9650\uFF0C \u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u8FD8\u5177\u6709\u76F8\u540C\u7684\u5C5E\u4E3B\uFF0C \u56E0\u6B64\u5728\u89E3\u538B\u7F29\u65F6\u8FD9\u4E9B\u7279\u6027\u5C06\u6B63\u786E\u5730\u6062\u590D\u3002 \u5728\u67D0\u4E9B\u6587\u4EF6\u7CFB\u7EDF\u4E2D\uFF0C \u6CA1\u6709\u6743\u9650\u3001 \u5C5E\u4E3B\u6216\u65F6\u95F4\u7684\u6982\u5FF5\uFF0C \u6216\u8005\u5BF9\u6587\u4EF6\u540D\u7684\u957F\u5EA6\u6709\u4E25\u683C\u9650\u5236\uFF0C \u4F8B\u5982 MSDOS\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0Cbzip2 \u6CA1\u6709\u4FDD\u6301\u539F\u6587\u4EF6\u540D\u3001 \u5C5E\u4E3B\u3001 \u6743\u9650\u4EE5\u53CA\u65F6\u95F4\u7684\u673A\u5236\uFF0C \u4ECE\u8FD9\u4E2A\u610F\u4E49\u4E0A\u8BF4\uFF0Cbzip2 \u5BF9\u6587\u4EF6\u540D\u7684\u5904\u7406\u662F\u5E7C\u7A1A\u7684\u3002</p><p>bzip2 \u548C bunzip2 \u5728\u7F3A\u7701\u60C5\u51B5\u4E0B\u4E0D\u8986\u76D6\u5DF2\u6709\u7684\u6587\u4EF6\u3002 \u5982\u679C\u60F3\u8986\u76D6\u5DF2\u6709\u7684\u6587\u4EF6\uFF0C\u8981\u6307\u5B9A -f \u9009\u9879\u3002</p><p>\u5982\u679C\u672A\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C bzip2 \u5C06\u538B\u7F29\u6765\u81EA\u6807\u51C6\u8F93\u5165\u7684\u6570\u636E\u5E76\u5199\u5F80\u6807\u51C6\u8F93\u51FA\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C bzip2 \u4F1A\u62D2\u7EDD\u5C06\u538B\u7F29\u7ED3\u679C\u5199\u5F80\u7EC8\u7AEF\uFF0C\u56E0\u4E3A\u8FD9\u5B8C\u5168\u65E0\u6CD5\u7406\u89E3\u5E76\u4E14\u662F\u6CA1\u6709\u610F\u4E49\u7684\u3002</p><p>bunzip2 (\u4EE5\u53CA bzip2 -d) \u5BF9\u6240\u6709\u6307\u5B9A\u7684\u6587\u4EF6\u8FDB\u884C\u89E3\u538B\u7F29\u5904\u7406\u3002\u4E0D\u662F\u7531 bzip2 \u4EA7\u751F\u7684\u6587\u4EF6\u5C06\u88AB\u5FFD\u7565\uFF0C\u540C\u65F6\u53D1\u51FA\u4E00\u4E2A\u8B66\u544A\u4FE1\u606F\u3002 bzip2 \u6309\u4E0B\u5217\u65B9\u5F0F\u7531\u538B\u7F29\u6587\u4EF6\u540D\u786E\u5B9A\u89E3\u538B\u540E\u7684\u6587\u4EF6\u540D\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">filename.bz2    \u89E3\u538B\u6210   filename</span></span>
<span class="line"><span style="color:#A6ACCD;">filename.bz     \u89E3\u538B\u6210   filename</span></span>
<span class="line"><span style="color:#A6ACCD;">filename.tbz2   \u89E3\u538B\u6210   filename.tar</span></span>
<span class="line"><span style="color:#A6ACCD;">filename.tbz    \u89E3\u538B\u6210   filename.tar</span></span>
<span class="line"><span style="color:#A6ACCD;">anyothername    \u89E3\u538B\u6210   anyothername.out</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u6587\u4EF6\u540D\u7684\u540E\u7F00\u4E0D\u662F\u4E0B\u5217\u4E4B\u4E00\uFF1A .bz2, .bz, .tbz2 \u6216 .tbz, .bzip2 \u5C06\u62B1\u6028\u65E0\u6CD5\u786E\u5B9A\u539F\u59CB\u6587\u4EF6\u540D\uFF0C\u5E76\u91C7\u7528\u539F\u6587\u4EF6\u540D\u52A0 .out \u4F5C\u4E3A\u89E3\u538B\u7F29\u6587\u4EF6\u540D\u3002</p><p>\u5728\u538B\u7F29\u65F6\uFF0C\u5982\u679C\u4E0D\u63D0\u4F9B\u6587\u4EF6\u540D\uFF0Cbzip2 \u5C06\u4ECE\u6807\u51C6\u8F93\u5165\u8BFB\u53D6\u6570\u636E\uFF0C\u538B\u7F29\u7ED3\u679C\u5199\u5F80\u6807\u51C6\u8F93\u51FA\u3002</p><p>bzip2 \u91C7\u7528 32 \u4F4D CRC \u6821\u9A8C\u7801\u4F5C\u81EA\u6211\u68C0\u67E5\uFF0C\u4EE5\u786E\u8BA4\u89E3\u538B\u540E\u7684\u6587\u4EF6\u4E0E\u539F\u59CB\u6587\u4EF6\u76F8\u540C\u3002 \u8FD9\u53EF\u7528\u4E8E\u68C0\u6D4B\u538B\u7F29\u6587\u4EF6\u662F\u5426\u635F\u574F\uFF0C\u5E76\u9632\u6B62 bzip2 \u4E2D\u672A\u77E5\u7684\u7F3A\u9677\uFF08\u8FD0\u6C14\u597D\u7684\u8BDD\u8FD9\u79CD\u53EF\u80FD\u6027\u975E\u5E38\u5C0F\uFF09\u3002 \u6570\u636E\u635F\u574F\u800C\u672A\u68C0\u6D4B\u5230\u7684\u51E0\u7387\u975E\u5E38\u4E4B\u5C0F\uFF0C \u5BF9\u4E8E\u6BCF\u4E2A\u88AB\u5904\u7406\u7684\u6587\u4EF6\u5927\u7EA6\u662F\u56DB\u5341\u4EBF\u5206\u4E4B\u4E00\u3002 \u68C0\u67E5\u662F\u5728\u89E3\u538B\u7F29\u65F6\u8FDB\u884C\u7684\uFF0C\u56E0\u6B64\u5B83\u53EA\u80FD\u8BF4\u660E\u67D0\u4E2A\u5730\u65B9\u51FA\u95EE\u9898\u4E86\u3002 \u5B83\u80FD\u5E2E\u52A9\u6062\u590D\u539F\u59CB\u672A\u538B\u7F29\u7684\u6570\u636E\u3002\u53EF\u4EE5\u7528 bzip2recover \u6765\u5C1D\u8BD5\u4ECE\u635F\u574F\u7684\u6587\u4EF6\u4E2D\u6062\u590D\u6570\u636E\u3002</p><p>\u8FD4\u56DE\u503C\uFF1A\u6B63\u5E38\u9000\u51FA\u8FD4\u56DE 0\uFF0C \u51FA\u73B0\u73AF\u5883\u95EE\u9898\u8FD4\u56DE 1 \uFF08\u6587\u4EF6\u672A\u627E\u5230\uFF0C\u975E\u6CD5\u7684\u9009\u9879\uFF0CI/O\u9519\u8BEF\u7B49\uFF09\uFF0C \u8FD4\u56DE 2 \u8868\u660E\u538B\u7F29\u6587\u4EF6\u635F\u574F\uFF0C\u51FA\u73B0\u5BFC\u81F4 bzip2 \u7D27\u6025\u9000\u51FA\u7684\u5185\u90E8\u4E00\u81F4\u6027\u9519\u8BEF\uFF08\u4F8B\u5982\u7F3A\u9677\uFF09\u65F6\u8FD4\u56DE 3\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-c</span><span style="color:#A6ACCD;">dfkqstvzVL123456789 </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> filenames ...  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c --stdout</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5C06\u6570\u636E\u538B\u7F29\u6216\u89E3\u538B\u7F29\u81F3\u6807\u51C6\u8F93\u51FA\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-d --decompress</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5F3A\u5236\u89E3\u538B\u7F29\u3002 bzip2, bunzip2 \u4EE5\u53CA bzcat \u5B9E\u9645\u4E0A\u662F\u540C\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u8FDB\u884C\u4F55\u79CD\u64CD\u4F5C\u5C06\u6839\u636E\u7A0B\u5E8F\u540D\u786E\u5B9A\u3002  \u6307\u5B9A\u8BE5\u9009\u9879\u540E\u5C06\u4E0D\u8003\u8651\u8FD9\u4E00\u673A\u5236\uFF0C\u5F3A\u5236 bzip2 \u8FDB\u884C\u89E3\u538B\u7F29\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-z --compress</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># -d \u9009\u9879\u7684\u8865\u5145\uFF1A\u5F3A\u5236\u8FDB\u884C\u538B\u7F29\u64CD\u4F5C\uFF0C\u800C\u4E0D\u7BA1\u6267\u884C\u7684\u662F\u54EA\u4E2A\u7A0B\u5E8F\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-t --test</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u68C0\u67E5\u6307\u5B9A\u6587\u4EF6\u7684\u5B8C\u6574\u6027\uFF0C\u4F46\u5E76\u4E0D\u5BF9\u5176\u89E3\u538B\u7F29\u3002 \u5B9E\u9645\u4E0A\u5C06\u5BF9\u6570\u636E\u8FDB\u884C\u5B9E\u9A8C\u6027\u7684\u89E3\u538B\u7F29\u64CD\u4F5C\uFF0C\u800C\u4E0D\u8F93\u51FA\u7ED3\u679C\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-f --force</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5F3A\u5236\u8986\u76D6\u8F93\u51FA\u6587\u4EF6\u3002\u901A\u5E38 bzip2 \u4E0D\u4F1A\u8986\u76D6\u5DF2\u7ECF\u5B58\u5728\u7684\u6587\u4EF6\u3002\u8BE5\u9009\u9879\u8FD8\u5F3A\u5236 bzip2 \u6253\u7834\u6587\u4EF6\u7684\u786C\u8FDE\u63A5\uFF0C\u7F3A\u7701\u60C5\u51B5\u4E0B bzip2 \u4E0D\u4F1A\u8FD9\u4E48\u505A\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-k --keep</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5728\u538B\u7F29\u6216\u89E3\u538B\u7F29\u65F6\u4FDD\u7559\u8F93\u5165\u6587\u4EF6\uFF08\u4E0D\u5220\u9664\u8FD9\u4E9B\u6587\u4EF6\uFF09\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-s --small</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5728\u538B\u7F29\u3001\u89E3\u538B\u7F29\u53CA\u68C0\u67E5\u65F6\u51CF\u5C11\u5185\u5B58\u7528\u91CF\u3002\u91C7\u7528\u4E00\u79CD\u4FEE\u6B63\u7684\u7B97\u6CD5\u8FDB\u884C\u538B\u7F29\u548C\u6D4B\u8BD5\uFF0C\u6BCF\u4E2A\u6570\u636E\u5757\u4EC5\u9700\u8981 2.5 \u4E2A\u5B57\u8282\u3002\u8FD9\u610F\u5473\u7740\u4EFB\u4F55\u6587\u4EF6\u90FD\u53EF\u4EE5\u5728 2300k</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u7684\u5185\u5B58\u4E2D\u8FDB\u884C\u89E3\u538B\u7F29\uFF0C \u5C3D\u7BA1\u901F\u5EA6\u53EA\u6709\u901A\u5E38\u60C5\u51B5\u4E0B\u7684\u4E00\u534A\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5728\u538B\u7F29\u65F6\uFF0C-s\u5C06\u9009\u5B9A 200k \u7684\u5757\u957F\u5EA6\uFF0C\u5185\u5B58\u7528\u91CF\u4E5F\u9650\u5236\u5728 200k \u5DE6\u53F3\uFF0C \u4EE3\u4EF7\u662F\u538B\u7F29\u7387\u4F1A\u964D\u4F4E\u3002 \u603B\u4E4B\uFF0C\u5982\u679C\u673A\u5668\u7684\u5185\u5B58\u8F83\u5C11\uFF088\u5146\u5B57\u8282\u6216\u66F4\u5C11\uFF09\uFF0C</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u53EF\u5BF9\u6240\u6709\u64CD\u4F5C\u90FD\u91C7\u7528-s\u9009\u9879\u3002\u53C2\u89C1\u4E0B\u9762\u7684\u5185\u5B58\u7BA1\u7406\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-q --quiet</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u538B\u5236\u4E0D\u91CD\u8981\u7684\u8B66\u544A\u4FE1\u606F\u3002\u5C5E\u4E8E I/O \u9519\u8BEF\u53CA\u5176\u5B83\u4E25\u91CD\u4E8B\u4EF6\u7684\u4FE1\u606F\u5C06\u4E0D\u4F1A\u88AB\u538B\u5236\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-v --verbose</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u8BE6\u5C3D\u6A21\u5F0F -- \u663E\u793A\u6BCF\u4E2A\u88AB\u5904\u7406\u6587\u4EF6\u7684\u538B\u7F29\u7387\u3002 \u547D\u4EE4\u884C\u4E2D\u66F4\u591A\u7684 -v \u9009\u9879\u5C06\u589E\u52A0\u8BE6\u7EC6\u7684\u7A0B\u5EA6\uFF0C \u4F7F bzip2 \u663E\u793A\u51FA\u8BB8\u591A\u4E3B\u8981\u7528\u4E8E\u8BCA\u65AD\u76EE\u7684\u4FE1\u606F\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-L --license -V --version</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u663E\u793A\u8F6F\u4EF6\u7248\u672C\uFF0C\u8BB8\u53EF\u8BC1\u6761\u6B3E\u53CA\u6761\u4EF6\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-1 to -9</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u5728\u538B\u7F29\u65F6\u5C06\u5757\u957F\u5EA6\u8BBE\u4E3A 100 k\u3001200 k ..  900 k\u3002 \u5BF9\u89E3\u538B\u7F29\u6CA1\u6709\u5F71\u54CD\u3002\u53C2\u89C1\u4E0B\u9762\u7684\u5185\u5B58\u7BA1\u7406\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-- </span><span style="color:#676E95;"># \u5C06\u6240\u6709\u540E\u9762\u7684\u547D\u4EE4\u884C\u53D8\u91CF\u770B\u4F5C\u6587\u4EF6\u540D\uFF0C\u5373\u4F7F\u8FD9\u4E9B\u53D8\u91CF\u4EE5\u51CF\u53F7&quot;-&quot;\u6253\u5934\u3002 \u53EF\u7528\u8FD9\u4E00\u9009\u9879\u5904\u7406\u4EE5\u51CF\u53F7&quot;-&quot;\u6253\u5934\u7684\u6587\u4EF6\u540D\uFF0C \u4F8B\u5982\uFF1Abzip2 -- -myfilename.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--repetitive-fast --repetitive-best</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u8FD9\u4E9B\u9009\u9879\u5728 0.9.5 \u53CA\u5176\u4EE5\u4E0A\u7248\u672C\u4E2D\u662F\u591A\u4F59\u7684\u3002 \u5728\u8F83\u65E9\u7684\u7248\u672C\u4E2D\uFF0C\u8FD9\u4E24\u4E2A\u9009\u9879\u5BF9\u6392\u5E8F\u7B97\u6CD5\u7684\u884C\u4E3A\u63D0\u4F9B\u4E86\u4E00\u4E9B\u7C97\u7CD9\u7684\u63A7\u5236\uFF0C\u6709\u4E9B\u60C5\u51B5\u4E0B\u5F88\u6709\u7528\u3002 0.9.5</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u53CA\u5176\u4EE5\u4E0A\u7248\u672C\u91C7\u7528\u4E86\u6539\u8FDB\u7684\u7B97\u6CD5\u800C\u4E0E\u8FD9\u4E9B\u9009\u9879\u65E0\u5173\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u538B\u7F29\u7684\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u538B\u7F29\u6307\u5B9A\u6587\u4EF6filename:</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 filename</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">bzip2 -z filename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u538B\u7F29\u7684\u65F6\u5019\u4E0D\u4F1A\u8F93\u51FA\uFF0C\u4F1A\u5C06\u539F\u6765\u7684\u6587\u4EF6filename\u7ED9\u5220\u9664\uFF0C\u66FF\u6362\u6210filename.bz2.\u5982\u679C\u4EE5\u524D\u6709filename.bz2\u5219\u4E0D\u4F1A\u66FF\u6362\u5E76\u63D0\u793A\u9519\u8BEF\uFF08\u5982\u679C\u60F3\u8981\u66FF\u6362\u5219\u6307\u5B9A-f\u9009\u9879\uFF0C\u4F8B\u5982<code>bzip2 -f filename</code>\uFF1B\u5982\u679Cfilename\u662F\u76EE\u5F55\u5219\u4E5F\u63D0\u9192\u9519\u8BEF\u4E0D\u505A\u4EFB\u4F55\u64CD\u4F5C\uFF1B\u5982\u679Cfilename\u5DF2\u7ECF\u662F\u538B\u8FC7\u7684\u4E86\u6709bz2\u540E\u7F00\u5C31\u63D0\u9192\u4E00\u4E0B\uFF0C\u4E0D\u518D\u538B\u7F29\uFF0C\u6CA1\u6709bz2\u540E\u7F00\u4F1A\u518D\u6B21\u538B\u7F29\u3002</p><p><strong>\u89E3\u538B\u6307\u5B9A\u7684\u6587\u4EF6filename.bz2:</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -d filename.bz2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">bunzip2 filename.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u89E3\u538B\u7684\u65F6\u5019\u6CA1\u6807\u51C6\u8F93\u51FA\uFF0C\u4F1A\u5C06\u539F\u6765\u7684\u6587\u4EF6filename.bz2\u7ED9\u66FF\u6362\u6210filename\u3002\u5982\u679C\u4EE5\u524D\u6709filename\u5219\u4E0D\u4F1A\u66FF\u6362\u5E76\u63D0\u793A\u9519\u8BEF\uFF08\u5982\u679C\u60F3\u8981\u66FF\u6362\u5219\u6307\u5B9A<code>-f</code>\u9009\u9879\uFF0C\u4F8B\u5982<code>bzip2 -df filename.bz2</code>\u3002</p><p><strong>\u538B\u7F29\u89E3\u538B\u7684\u65F6\u5019\u5C06\u7ED3\u679C\u4E5F\u8F93\u51FA\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">bzip2 -v filename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u4E4B\u540E\uFF0C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">filename:  0.119:1, 67.200 bits/byte, -740.00% saved, 5 in, 42 out.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u52A0\u4E0A<code>-v</code>\u9009\u9879\u5C31\u4F1A\u8F93\u51FA\u4E86,\u53EA\u7528\u538B\u7F29\u4E3E\u4F8B\u4E86\uFF0C\u89E3\u538B\u7684\u65F6\u5019\u540C\u7406<code>bzip2 -dv filename.bz2</code>\u4E0D\u518D\u4E3E\u4F8B\u4E86\u3002</p><p><strong>\u6A21\u62DF\u89E3\u538B\u5B9E\u9645\u5E76\u4E0D\u89E3\u538B\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -tv filename.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u4E4B\u540E\uFF0C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">filename.bz2: ok</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0C<code>-t</code>\u6307\u5B9A\u8981\u8FDB\u884C\u6A21\u62DF\u89E3\u538B\uFF0C\u4E0D\u5B9E\u9645\u751F\u6210\u7ED3\u679C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u7C7B\u4F3C\u68C0\u67E5\u6587\u4EF6,\u5F53\u7136\u5C31\u7B97\u76EE\u5F55\u4E0B\u9762\u6709filename\u4E5F\u4E0D\u4F1A\u6709\u4EC0\u4E48\u9519\u8BEF\u8F93\u51FA\u4E86\uFF0C\u56E0\u4E3A\u5B83\u6839\u672C\u4E0D\u4F1A\u771F\u7684\u89E3\u538B\u6587\u4EF6\u3002\u4E3A\u4E86\u5728\u5C4F\u5E55\u4E0A\u8F93\u51FA\uFF0C\u8FD9\u91CC\u52A0\u4E0A<code>-v</code>\u9009\u9879\u4E86,\u5982\u679C\u662F\u771F\u7684\u89E3\u538B<code>bzip2 -dv filename.bz2</code>\u5219\u8F93\u51FA\u7684\u662F\u628A&quot;ok&quot;\u66FF\u6362\u6210\u4E86&quot;done&quot;\u3002</p><p><strong>\u538B\u7F29\u89E3\u538B\u7684\u65F6\u5019\uFF0C\u9664\u4E86\u751F\u6210\u7ED3\u679C\u6587\u4EF6\uFF0C\u5C06\u539F\u6765\u7684\u6587\u4EF6\u4E5F\u4FDD\u5B58:</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -k filename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u52A0\u4E0A<code>-k</code>\u5C31\u4FDD\u5B58\u539F\u59CB\u7684\u6587\u4EF6\u4E86\uFF0C\u5426\u5219\u539F\u59CB\u6587\u4EF6\u4F1A\u88AB\u7ED3\u679C\u6587\u4EF6\u66FF\u4EE3\u3002\u53EA\u7528\u538B\u7F29\u4E3E\u4F8B\u4E86\uFF0C\u89E3\u538B\u7684\u65F6\u5019\u540C\u7406<code>$bzip2 -dk filename.bz2</code>\u4E0D\u518D\u4E3E\u4F8B\u4E86\u3002</p><p><strong>\u89E3\u538B\u5230\u6807\u51C6\u8F93\u51FA\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -dc filename.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u4E4B\u540E\uFF0C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">hahahhaahahha</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u4F7F\u7528<code>-c</code>\u6307\u5B9A\u5230\u6807\u51C6\u8F93\u51FA\uFF0C\u8F93\u51FA\u7684\u662F\u6587\u4EF6filename\u7684\u5185\u5BB9\uFF0C\u4E0D\u4F1A\u5C06filename.bz2\u5220\u9664\u3002</p><p><strong>\u538B\u7F29\u5230\u6807\u51C6\u8F93\u51FA\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -c filename</span></span>
<span class="line"><span style="color:#A6ACCD;">bzip2: I won</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t write compressed data to a terminal.</span></span>
<span class="line"><span style="color:#C3E88D;">bzip2: For help, type: \`bzip2 --help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u4F7F\u7528<code>-c</code>\u6307\u5B9A\u538B\u7F29\u5230\u6807\u51C6\u8F93\u51FA\u4E0D\u5220\u9664\u539F\u6709\u6587\u4EF6\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u538B\u7F29\u540E\u7684\u6587\u4EF6\u65E0\u6CD5\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002</p><p><strong>\u4F7F\u7528bzip2\u7684\u65F6\u5019\u5C06\u6240\u6709\u540E\u9762\u7684\u770B\u4F5C\u6587\u4EF6(\u5373\u4F7F\u6587\u4EF6\u540D\u4EE5&#39;-&#39;\u5F00\u5934)\uFF1A</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bzip2 -- -myfilename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u4E3A\u4E86\u9632\u6B62\u6587\u4EF6\u540D\u4E2D<code>-</code>\u4EA7\u751F\u4EE5\u4E3A\u662F\u9009\u9879\u7684\u6B67\u4E49\u3002</p>`,52),c=[p];function r(i,o,b,t,d,u){return a(),n("div",null,c)}const D=s(e,[["render",r]]);export{y as __pageData,D as default};
