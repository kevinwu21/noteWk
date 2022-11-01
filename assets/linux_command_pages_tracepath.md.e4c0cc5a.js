import{_ as s,c as a,o as n,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"tracepath","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/tracepath.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/tracepath.md"},e=l(`<h1 id="tracepath" tabindex="-1">tracepath <a class="header-anchor" href="#tracepath" aria-hidden="true">#</a></h1><p>\u8FFD\u8E2A\u76EE\u7684\u4E3B\u673A\u7ECF\u8FC7\u7684\u8DEF\u7531\u4FE1\u606F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>tracepath\u547D\u4EE4</strong> \u7528\u6765\u8FFD\u8E2A\u5E76\u663E\u793A\u62A5\u6587\u5230\u8FBE\u76EE\u7684\u4E3B\u673A\u6240\u7ECF\u8FC7\u7684\u8DEF\u7531\u4FE1\u606F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tracepath</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u76EE\u7684\u4E3B\u673A\uFF1A\u6307\u5B9A\u8FFD\u8E2A\u8DEF\u7531\u4FE1\u606F\u7684\u76EE\u7684\u4E3B\u673A\uFF1B</li><li>\u7AEF\u53E3\uFF1A\u6307\u5B9A\u4F7F\u7528\u7684UDP\u7AEF\u53E3\u53F7\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">tracepath www.58.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1:  192.168.2.10 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">192.168.2.10</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                           20.150ms pmtu 1500</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1:  unknown </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">192.168.2.1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                                  9.343ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 2:  221.6.45.33 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">221.6.45.33</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                             34.430ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 3:  221.6.9.81 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">221.6.9.81</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                               19.263ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 4:  122.96.66.37 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">122.96.66.37</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                           54.372ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 5:  219.158.96.149 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">219.158.96.149</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                      asymm  6 128.526ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 6:  123.126.0.66 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">123.126.0.66</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                          138.281ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 7:  124.65.57.26 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">124.65.57.26</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                          166.244ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 8:  61.148.154.98 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">61.148.154.98</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                        103.723ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> 9:  202.106.42.102 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">202.106.42.102</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                      asymm 10  78.099ms</span></span>
<span class="line"><span style="color:#A6ACCD;">10:  210.77.139.150 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">210.77.139.150</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                      asymm  9 199.930ms</span></span>
<span class="line"><span style="color:#A6ACCD;">11:  211.151.104.6 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">211.151.104.6</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                        asymm 10 121.965ms</span></span>
<span class="line"><span style="color:#A6ACCD;">12:  no reply</span></span>
<span class="line"><span style="color:#A6ACCD;">13:  211.151.111.30 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">211.151.111.30</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                      asymm 12 118.989ms reached</span></span>
<span class="line"><span style="color:#A6ACCD;">     Resume: pmtu 1500 hops 13 back 12</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10),o=[e];function r(c,t,D,i,A,C){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{m as __pageData,d as default};
