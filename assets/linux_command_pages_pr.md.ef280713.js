import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const i=JSON.parse('{"title":"pr","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]}]}],"relativePath":"linux/command/pages/pr.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/pr.md"},o=l(`<h1 id="pr" tabindex="-1">pr <a class="header-anchor" href="#pr" aria-hidden="true">#</a></h1><p>\u5C06\u6587\u672C\u6587\u4EF6\u8F6C\u6362\u6210\u9002\u5408\u6253\u5370\u7684\u683C\u5F0F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>pr\u547D\u4EE4</strong> \u7528\u6765\u5C06\u6587\u672C\u6587\u4EF6\u8F6C\u6362\u6210\u9002\u5408\u6253\u5370\u7684\u683C\u5F0F\uFF0C\u5B83\u53EF\u4EE5\u628A\u8F83\u5927\u7684\u6587\u4EF6\u5206\u5272\u6210\u591A\u4E2A\u9875\u9762\u8FDB\u884C\u6253\u5370\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u9875\u9762\u6DFB\u52A0\u6807\u9898\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">pr</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-e</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5236\u8868\u7B26</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u5BBD\u5EA6</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#C3E88D;">--expand-tabs=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">\u5236\u8868\u7B26</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\u5BBD\u5EA6</span><span style="color:#89DDFF;">]&gt;)</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u5236\u8868\u7B26\uFF08\u6216\u5236\u8868\u7B26\uFF09\u8F6C\u6362\u4E3A\u7A7A\u683C.\u5982\u679C\u6307\u5B9A\u4E86\u5BBD\u5EA6\uFF0C\u5219\u5C06\u5236\u8868\u7B26\u8F6C\u6362\u4E3A\u5BBD\u5EA6\u5B57\u7B26\uFF0C\u9ED8\u8BA4\u4E3A8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">-h</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u6807\u9898</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4E3A\u9875\u6307\u5B9A\u6807\u9898\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">out-tab-char</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">out-tab-width</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">--output-tabs</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">out-tab-char</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">out-tab-width</span><span style="color:#89DDFF;">]&gt;)</span><span style="color:#A6ACCD;">\uFF1A\u5728\u8F93\u51FA\u4E2D\u7528\u5236\u8868\u7B26\u66FF\u6362\u7A7A\u683C\uFF0C\u53EF\u4EE5\u6307\u5B9A\u66FF\u4EE3\u5236\u8868\u7B26</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9ED8\u8BA4\u4E3A\u5236\u8868\u7B26</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\u548C\u5BBD\u5EA6</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9ED8\u8BA4\u4E3A8</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u884C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u6BCF\u9875\u7684\u884C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-n&lt;</span><span style="color:#A6ACCD;">\u5206\u9694\u7B26</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u6570\u5B57</span><span style="color:#89DDFF;">]&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5BF9\u5217\u8FDB\u884C\u7F16\u53F7\uFF0C\u6216\u8005\u4F7F\u7528 -m \u9009\u9879\u5BF9\u884C\u8FDB\u884C\u7F16\u53F7\uFF0C\u5C06\u5206\u9694\u7B26\u9644\u52A0\u5230\u6BCF\u4E2A\u6570\u5B57\u9ED8\u8BA4\u4E3A\u5236\u8868\u7B26\u5E76\u9650\u5236\u6570\u5B57\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A5\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-o&lt;</span><span style="color:#A6ACCD;">\u5BBD\u5EA6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4E3A\u5DE6\u8FB9\u8DDD\u8BBE\u7F6E\u5BBD\u5EA6\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-s&lt;</span><span style="color:#A6ACCD;">\u5206\u9694\u7B26</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">--separator</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5206\u9694\u7B26</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;">\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u4E3A\u5236\u8868\u7B26\uFF09\u800C\u4E0D\u662F\u7A7A\u683C\u5206\u9694\u5217\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-S&lt;</span><span style="color:#A6ACCD;">\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">--sep-string</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;">\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\uFF08\u9ED8\u8BA4\u4E3A-J\u7684\u5236\u8868\u7B26\uFF09\u6216\u8005\u662F\u4E00\u4E2A\u7A7A\u683C\u5206\u9694\u5217\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-w&lt;</span><span style="color:#A6ACCD;">\u9875\u9762\u5BBD\u5EA6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u9875\u9762\u5BBD\u5EA6\u4EE5\u8FDB\u884C\u591A\u5217\u8F93\u51FA\uFF0C\u9ED8\u8BA4\u4E3A72\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-W</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u9875\u9762\u5BBD\u5EA6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u9875\u9762\u5BBD\u5EA6\u4E3A\u56FA\u5B9A\u503C\uFF0C\u9ED8\u8BA4\u4E3A72\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-J</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--join-lines</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u5408\u5E76\u6574\u884C\uFF0C\u5FFD\u7565 -W \u5982\u679C\u8BBE\u7F6E</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">-n</span><span style="color:#A6ACCD;">um_cols\uFF1Anum_cols\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u4E3A\u4E00\u9875\u6709n\u884C\u7684\u6587\u4EF6\u6253\u5370\u6307\u5B9Anum_cols\u5217\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-m</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--merge</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u6253\u5370\u6240\u6709\u6587\u4EF6\uFF0C\u6BCF\u5217\u4E00\u4E2A\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">-f(</span><span style="color:#A6ACCD;">-F</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">--form-feed</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u7528\u6362\u9875\u7B26\u66FF\u4EE3\u6362\u884C\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-r(</span><span style="color:#A6ACCD;">--no-file-warnings</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u65E0\u6CD5\u6253\u5F00\u8F93\u5165\u6587\u4EF6\u65F6\u9759\u9ED8\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-t</span><span style="color:#A6ACCD;">\uFF1A\u9650\u5236\u9875\u7709,\u9875\u811A\u4E0E\u9875\u5C3E\u7684\u586B\u5145\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-T</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--omit-pagination</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u7C7B\u4F3C\u4E8E-t,\u4F46\u4E5F\u9650\u5236\u6362\u9875\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--show-non-printing</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u4E0D\u53EF\u6253\u5370\u7684\u5B57\u7B26\u8F6C\u6362\u4E3A\u516B\u8FDB\u5236\u53CD\u659C\u6760\u683C\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;">\uFF1A\u53CC\u500D\u884C\u8DDD\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-a(</span><span style="color:#A6ACCD;">--across</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u4EA4\u9519\u6253\u5370\uFF0C\u5373\u6C34\u5E73\u6253\u5370\uFF0C\u800C\u975E\u7EB5\u5411\u6253\u5370\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">-c(</span><span style="color:#A6ACCD;">--show-control-chars</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u63A7\u5236\u5B57\u7B26\u8F6C\u6362\u4E3A\u5E3D\u5B50\u7B26\u53F7\uFF08\u4F8B\u5982 ^C\uFF09\uFF0C\u5C06\u5176\u4ED6\u4E0D\u53EF\u6253\u5370\u7684\u5B57\u7B26\u8F6C\u6362\u4E3A\u516B\u8FDB\u5236\u53CD\u659C\u6760\u683C\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u6253\u5370\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u6253\u5370\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u9700\u8981\u8F6C\u6362\u683C\u5F0F\u7684\u6587\u4EF6\u3002</p>`,10),e=[o];function r(c,t,D,C,A,y){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};