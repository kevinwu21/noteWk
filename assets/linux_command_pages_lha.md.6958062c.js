import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const b=JSON.parse('{"title":"lha","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/lha.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/lha.md"},e=l(`<h1 id="lha" tabindex="-1">lha <a class="header-anchor" href="#lha" aria-hidden="true">#</a></h1><p>\u538B\u7F29\u6216\u89E3\u538B\u7F29lzh\u683C\u5F0F\u6587\u4EF6</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>lha\u547D\u4EE4</strong> \u662F\u4ECElharc\u6F14\u53D8\u800C\u6765\u7684\u538B\u7F29\u7A0B\u5E8F\uFF0C\u6587\u4EF6\u7ECF\u5B83\u538B\u7F29\u540E\uFF0C\u4F1A\u53E6\u5916\u4EA7\u751F\u5177\u6709<code>.lzh</code>\u6269\u5C55\u540D\u7684\u538B\u7F29\u6587\u4EF6\u3002</p><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\u6216a\uFF1A\u538B\u7F29\u6587\u4EF6\uFF0C\u5E76\u52A0\u5165\u5230\u538B\u7F29\u6587\u4EF6\u5185\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">0/1/</span><span style="color:#89DDFF;">2&gt;</span><span style="color:#A6ACCD;">/u</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/0/1/</span><span style="color:#89DDFF;">2&gt;</span><span style="color:#A6ACCD;">   \u538B\u7F29\u6587\u4EF6\u65F6\uFF0C\u91C7\u7528\u4E0D\u540C\u7684\u6587\u4EF6\u5934\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\u6216c\uFF1A\u538B\u7F29\u6587\u4EF6\uFF0C\u91CD\u65B0\u5EFA\u6784\u65B0\u7684\u538B\u7F29\u6587\u4EF6\u540E\uFF0C\u518D\u5C06\u5176\u52A0\u5165\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\u6216d\uFF1A\u4ECE\u538B\u7F29\u6587\u4EF6\u5185\u5220\u9664\u6307\u5B9A\u7684\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a/c/u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">d\u6216</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a/c/u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">d\uFF1A\u538B\u7F29\u6587\u4EF6\uFF0C\u7136\u540E\u5C06\u5176\u52A0\u5165\uFF0C\u91CD\u65B0\u5EFA\u6784\uFF0C\u66F4\u65B0\u538B\u7F29\u6587\u4EF6\u6216\uFF0C\u5220\u9664\u539F\u59CB\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u628A\u6587\u4EF6\u79FB\u5230\u538B\u7F29\u6587\u4EF6\u4E2D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-e\u6216e\uFF1A\u89E3\u5F00\u538B\u7F29\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\u6216f\uFF1A\u5F3A\u5236\u6267\u884Clha\u547D\u4EE4\uFF0C\u5728\u89E3\u538B\u65F6\u4F1A\u76F4\u63A5\u8986\u76D6\u5DF2\u6709\u7684\u6587\u4EF6\u800C\u4E0D\u52A0\u4EE5\u8BE2\u95EE\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-g\u6216g\uFF1A\u4F7F\u7528\u901A\u7528\u7684\u538B\u7F29\u683C\u5F0F\uFF0C\u4FBF\u4E8E\u89E3\u51B3\u517C\u5BB9\u6027\u7684\u95EE\u9898\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">e/x</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">i\u6216</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">e/x</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">i\uFF1A\u89E3\u5F00\u538B\u7F29\u6587\u4EF6\u65F6\uFF0C\u5FFD\u7565\u4FDD\u5B58\u5728\u538B\u7F29\u6587\u4EF6\u5185\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u76F4\u63A5\u5C06\u5176\u89E3\u538B\u540E\u5B58\u653E\u5728\u73B0\u884C\u76EE\u5F55\u4E0B\u6216\u662F\u6307\u5B9A\u7684\u76EE\u5F55\u4E2D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\u6216l\uFF1A\u5217\u51FA\u538B\u7F29\u6587\u4EF6\u7684\u76F8\u5173\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-m\u6216m\uFF1A\u6B64\u9009\u9879\u7684\u6548\u679C\u548C\u540C\u65F6\u6307\u5B9A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-ad</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\u9009\u9879\u76F8\u540C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\u6216n\uFF1A\u4E0D\u6267\u884C\u6307\u4EE4\uFF0C\u4EC5\u5217\u51FA\u5B9E\u9645\u6267\u884C\u4F1A\u8FDB\u884C\u7684\u52A8\u4F5C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a/u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">o\u6216</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a/u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">o\uFF1A\u91C7\u7528lharc\u517C\u5BB9\u683C\u5F0F\uFF0C\u5C06\u538B\u7F29\u540E\u7684\u6587\u4EF6\u52A0\u5165\uFF0C\u66F4\u65B0\u538B\u7F29\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-p\u6216p\uFF1A\u4ECE\u538B\u7F29\u6587\u4EF6\u5185\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-q\u6216q\uFF1A\u4E0D\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\u6216t\uFF1A\u68C0\u67E5\u5907\u4EFD\u6587\u4EF6\u5185\u7684\u6BCF\u4E2A\u6587\u4EF6\u662F\u5426\u6B63\u786E\u65E0\u8BEF\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-u\u6216u\uFF1A\u66F4\u6362\u8F83\u65B0\u7684\u6587\u4EF6\u5230\u538B\u7F29\u6587\u4EF6\u5185\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-u</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/0/1/</span><span style="color:#89DDFF;">2&gt;</span><span style="color:#A6ACCD;">\u6216u</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/0/1/</span><span style="color:#89DDFF;">2&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5728\u6587\u4EF6\u538B\u7F29\u65F6\u91C7\u7528\u4E0D\u540C\u7684\u6587\u4EF6\u5934\uFF0C\u7136\u540E\u66F4\u65B0\u5230\u538B\u7F29\u6587\u4EF6\u5185\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\u6216v\uFF1A\u8BE6\u7EC6\u5217\u51FA\u538B\u7F29\u6587\u4EF6\u7684\u76F8\u5173\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">e/x</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">w=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u76EE\u7684\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">e/x</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">w=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u76EE\u7684\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u89E3\u538B\u7F29\u7684\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-x\u6216x\uFF1A\u89E3\u5F00\u538B\u7F29\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a/u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">z\u6216</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a/u</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">z\uFF1A\u4E0D\u538B\u7F29\u6587\u4EF6\uFF0C\u76F4\u63A5\u628A\u5B83\u52A0\u5165\uFF0C\u66F4\u65B0\u538B\u7F29\u6587\u4EF6\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lha -a abc.lhz a.b         </span><span style="color:#676E95;">#\u538B\u7F29a.b\u6587\u4EF6\uFF0C\u538B\u7F29\u540E\u751F\u6210 abc.lhz \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">lha -a abc2 /home/hnlinux  </span><span style="color:#676E95;">#\u538B\u7F29\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">lha -xiw=agis abc          </span><span style="color:#676E95;">#\u89E3\u538B\u6587\u4EF6abc\uFF0C\u5230\u5F53\u524D\u76EE\u5F55</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,8),o=[e];function c(r,t,D,A,C,i){return a(),n("div",null,o)}const F=s(p,[["render",c]]);export{b as __pageData,F as default};
