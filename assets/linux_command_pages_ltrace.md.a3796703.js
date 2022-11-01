import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const F=JSON.parse('{"title":"ltrace","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/ltrace.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/ltrace.md"},e=l(`<h1 id="ltrace" tabindex="-1">ltrace <a class="header-anchor" href="#ltrace" aria-hidden="true">#</a></h1><p>\u7528\u6765\u8DDF\u8E2A\u8FDB\u7A0B\u8C03\u7528\u5E93\u51FD\u6570\u7684\u60C5\u51B5</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>ltrace\u547D\u4EE4</strong> \u662F\u7528\u6765\u8DDF\u8E2A\u8FDB\u7A0B\u8C03\u7528\u5E93\u51FD\u6570\u7684\u60C5\u51B5\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ltrace </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">option ...</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">command </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">arg ...</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a \u5BF9\u9F50\u5177\u4F53\u67D0\u4E2A\u5217\u7684\u8FD4\u56DE\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-c \u8BA1\u7B97\u65F6\u95F4\u548C\u8C03\u7528\uFF0C\u5E76\u5728\u7A0B\u5E8F\u9000\u51FA\u65F6\u6253\u5370\u6458\u8981\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-C \u89E3\u7801\u4F4E\u7EA7\u522B\u540D\u79F0\uFF08\u5185\u6838\u7EA7\uFF09\u4E3A\u7528\u6237\u7EA7\u540D\u79F0\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d \u6253\u5370\u8C03\u8BD5\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-e \u6539\u53D8\u8DDF\u8E2A\u7684\u4E8B\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-f \u8DDF\u8E2A\u5B50\u8FDB\u7A0B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-h \u6253\u5370\u5E2E\u52A9\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-i \u6253\u5370\u6307\u4EE4\u6307\u9488\uFF0C\u5F53\u5E93\u8C03\u7528\u65F6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-l \u53EA\u6253\u5370\u67D0\u4E2A\u5E93\u4E2D\u7684\u8C03\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-L \u4E0D\u6253\u5370\u5E93\u8C03\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-n, --indent=NR \u5BF9\u6BCF\u4E2A\u8C03\u7528\u7EA7\u522B\u5D4C\u5957\u4EE5NR\u4E2A\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB\u8F93\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-o, --output=file \u628A\u8F93\u51FA\u5B9A\u5411\u5230\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-p PID \u9644\u7740\u5728\u503C\u4E3APID\u7684\u8FDB\u7A0B\u53F7\u4E0A\u8FDB\u884Cltrace\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-r \u6253\u5370\u76F8\u5BF9\u65F6\u95F4\u6233\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s STRLEN \u8BBE\u7F6E\u6253\u5370\u7684\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-S \u663E\u793A\u7CFB\u7EDF\u8C03\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-t, -tt, -ttt \u6253\u5370\u7EDD\u5BF9\u65F6\u95F4\u6233\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-T \u8F93\u51FA\u6BCF\u4E2A\u8C03\u7528\u8FC7\u7A0B\u7684\u65F6\u95F4\u5F00\u9500\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-u USERNAME \u4F7F\u7528\u67D0\u4E2A\u7528\u6237id\u6216\u7EC4ID\u6765\u8FD0\u884C\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-V, --version \u6253\u5370\u7248\u672C\u4FE1\u606F\uFF0C\u7136\u540E\u9000\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-x NAME treat the global NAME like a library subroutine.\uFF08\u6C42\u7FFB\u8BD1\uFF09</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u6700\u57FA\u672C\u5E94\u7528\uFF0C\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">guest@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">$ ltrace ./a.out</span></span>
<span class="line"><span style="color:#A6ACCD;">__libc_start_main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0x80484aa, 1, 0xbfc07744, 0x8048550, 0x8048540 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">unfinished ...</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no1:%d \\t no2:%d \\t diff:%d\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 10, 6, 4no1:10 no2:6 diff:4 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 24</span></span>
<span class="line"><span style="color:#A6ACCD;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no1:%d \\t no2:%d \\t diff:%d\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 9, 7, 2no1:9 no2:7 diff:2 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 23</span></span>
<span class="line"><span style="color:#A6ACCD;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no1:%d \\t no2:%d \\t diff:%d\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 8, 8, 0no1:8 no2:8 diff:0 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 23</span></span>
<span class="line"><span style="color:#A6ACCD;">--- SIGFPE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Floating point exception</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> ---</span></span>
<span class="line"><span style="color:#A6ACCD;">+++ killed by SIGFPE +++</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\u8C03\u7528\u65F6\u95F4\u5F00\u9500\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">guest@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">$ ltrace -T ./a.out</span></span>
<span class="line"><span style="color:#A6ACCD;">__libc_start_main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0x80484aa, 1, 0xbf81d394, 0x8048550, 0x8048540 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">unfinished ...</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no1:%d \\t no2:%d \\t diff:%d\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 10, 6, 4no1:10 no2:6 diff:4 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 24 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">0.</span><span style="color:#89DDFF;">000972&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no1:%d \\t no2:%d \\t diff:%d\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 9, 7, 2no1:9 no2:7 diff:2 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 23 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">0.</span><span style="color:#89DDFF;">000155&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no1:%d \\t no2:%d \\t diff:%d\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 8, 8, 0no1:8 no2:8 diff:0 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 23 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">0.</span><span style="color:#89DDFF;">000153&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">--- SIGFPE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Floating point exception</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> ---</span></span>
<span class="line"><span style="color:#A6ACCD;">+++ killed by SIGFPE +++</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u663E\u793A\u7CFB\u7EDF\u8C03\u7528\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">guest@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">$ ltrace -S ./a.out</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_brk</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NULL</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0x9e20000</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_access</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0xa4710f, 4, 0xa4afc0, 0, 0xa4b644</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/etc/ld.so.preload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 0, 02</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_fstat64</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3, 0xbfbd7a94, 0xa4afc0, -1, 3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_mmap2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0, 17, 3, 2, 3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0xb7f2a000</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/lib/libcwait.so</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 0, 00</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_read</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\177ELF\\001\\001\\001</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, 512</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 512</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_fstat64</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3, 0xbfbd76fc, 0xa4afc0, 4, 0xa4b658</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_mmap2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0, 4096, 3, 34, -1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0xb7f29000</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_mmap2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0, 5544, 5, 2050, 3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0x423000</span></span>
<span class="line"><span style="color:#A6ACCD;">SYS_mmap2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0x424000, 4096, 3, 2066, 3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> = 0x424000</span></span>
<span class="line"><span style="color:#A6ACCD;">.............\u7701\u53BB\u82E5\u5E72\u884C</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,15),o=[e];function r(c,t,D,i,C,A){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};