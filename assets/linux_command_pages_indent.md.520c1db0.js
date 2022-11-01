import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"indent","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/indent.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/indent.md"},e=l(`<h1 id="indent" tabindex="-1">indent <a class="header-anchor" href="#indent" aria-hidden="true">#</a></h1><p>\u683C\u5F0F\u5316C\u8BED\u8A00\u7684\u6E90\u6587\u4EF6</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>indent\u547D\u4EE4</strong> \u53EF\u8FA8\u8BC6C\u7684\u539F\u59CB\u4EE3\u7801\u6587\u4EF6\uFF0C\u5E76\u52A0\u4EE5\u683C\u5F0F\u5316\uFF0C\u4EE5\u65B9\u4FBF\u7A0B\u5E8F\u5458\u9605\u8BFB\u3001\u4FEE\u6539\u7B49\u64CD\u4F5C\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">indent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u6E90\u6587\u4EF6</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">indent\uFF08\u9009\u9879)</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u6E90\u6587\u4EF6</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">-o \u76EE\u6807\u6587\u4EF6</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-bad\uFF1A\u5728\u58F0\u660E\u533A\u52A0\u4E0A\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bap\uFF1A\u6DFB\u52A0\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bbb\uFF1A\u5728\u6CE8\u91CA\u540E\u9762\u6DFB\u52A0\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bc\uFF1A\u5728\u58F0\u660E\u6BB5\u4E2D\uFF0C\u5982\u679C\u51FA\u73B0\u9017\u53F7\u5C31\u6362\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bl\uFF1Aif\uFF08\u6216\u662Felse\u3001for\u7B49\uFF09\u4E0E\u540E\u9762\u6267\u884C\u533A\u6BB5\u7684\u201C{\u201D\u4E0D\u540C\u884C\uFF0C\u4E14\u201C}\u201D\u81EA\u6210\u4E00\u884C-bli</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7F29\u6392\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8BBE\u7F6E{}\u7F29\u6392\u7684\u683C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-br\uFF1Aif\uFF08\u6216\u662Felse\u3001for\u7B49\uFF09\u4E0E\u540E\u9762\u6267\u884C\u533A\u6BB5\u7684\u201C{\u201D\u540C\u884C\uFF0C\u4E14\u201C}\u201D\u81EA\u6210\u4E00\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-bs\uFF1A\u5728sizeof\u4E4B\u540E\u7A7A\u4E00\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u680F\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u6CE8\u91CA\u7F6E\u4E8E\u7A0B\u5E8F\u53F3\u4FA7\u6307\u5B9A\u7684\u680F\u4F4D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-cd</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u680F\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u6CE8\u91CA\u7F6E\u4E8E\u58F0\u660E\u53F3\u4FA7\u6307\u5B9A\u7684\u680F\u4F4D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-cdb\uFF1A\u6CE8\u91CA\u7B26\u53F7\u81EA\u6210\u4E00\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ce\uFF1A\u5C06else\u7F6E\u4E8E\u201C}\u201D\uFF08if\u6267\u884C\u533A\u6BB5\u7684\u7ED3\u5C3E\uFF09\u4E4B\u540E\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ci\uFF1A</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7F29\u6392\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u53D9\u8FF0\u8FC7\u957F\u800C\u6362\u884C\u65F6\uFF0C\u6307\u5B9A\u6362\u884C\u540E\u7F29\u6392\u7684\u683C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-cli</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7F29\u6392\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u4F7F\u7528case\u65F6\uFF0Cswitch\u7F29\u6392\u7684\u683C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-cp</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u680F\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u6CE8\u91CA\u7F6E\u4E8Eelse\u4E0Eelseif\u53D9\u8FF0\u53F3\u4FA7\u6307\u5B9A\u7684\u680F\u4F4D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-cs\uFF1A\u5728case\u4E4B\u540E\u7A7A\u4E00\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u7F29\u6392\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u9488\u5BF9\u4E0D\u662F\u653E\u5728\u7A0B\u5E8F\u7801\u53F3\u4FA7\u7684\u6CE8\u91CA\uFF0C\u8BBE\u7F6E\u5176\u7F29\u6392\u683C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-di</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u680F\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u58F0\u660E\u533A\u6BB5\u7684\u53D8\u91CF\u7F6E\u4E8E\u6307\u5B9A\u7684\u680F\u4F4D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-fc1\uFF1A\u9488\u5BF9\u653E\u5728\u6BCF\u884C\u6700\u524D\u7AEF\u7684\u6CE8\u91CA\uFF0C\u8BBE\u7F6E\u5176\u683C\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-fca\uFF1A\u8BBE\u7F6E\u6240\u6709\u6CE8\u91CA\u7684\u683C\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-gnu\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684GNU\u683C\u5F0F\uFF0C\u8BE5\u53C2\u6570\u4E3A\u9ED8\u8BA4\u503C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u7F29\u6392\u7684\u683C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ip</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6E\u53C2\u6570\u7684\u7F29\u6392\u683C\u6570\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-kr\uFF1A\u6307\u5B9A\u4F7F\u7528Kernighan</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Ritchie\u7684\u683C\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-lp\uFF1A\u53D9\u8FF0\u8FC7\u957F\u800C\u6362\u884C\uFF0C\u4E14\u53D9\u8FF0\u4E2D\u5305\u542B\u4E86\u62EC\u53F7\u65F6\uFF0C\u5C06\u62EC\u53F7\u4E2D\u7684\u6BCF\u884C\u8D77\u59CB\u680F\u4F4D\u5185\u5BB9\u5782\u76F4\u5BF9\u5176\u6392\u5217\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nbad\uFF1A\u5728\u58F0\u660E\u533A\u6BB5\u540E\u4E0D\u8981\u52A0\u4E0A\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nbap\uFF1A\u5728\u7A0B\u5E8F\u540E\u9762\u4E0D\u6DFB\u52A0\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nbbb\uFF1A\u5728\u6CE8\u91CA\u6BB5\u540E\u9762\u4E0D\u6DFB\u52A0\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nbc\uFF1A\u5728\u58F0\u660E\u6BB5\u4E2D\uFF0C\u5373\u4F7F\u51FA\u73B0\u9017\u53F7\uFF0C\u4E5F\u4E0D\u6362\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ncdb\uFF1A\u6CE8\u91CA\u7B26\u53F7\u4E0D\u81EA\u6210\u4E00\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nce\uFF1A\u4E0D\u5C06else\u7F6E\u4E8E\u201C}\u201D\u540E\u9762\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ncs\uFF1A\u4E0D\u5728case\u540E\u9762\u7A7A\u4E00\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nfc1\uFF1A\u4E0D\u8981\u683C\u5F0F\u5316\u653E\u5728\u6BCF\u884C\u6700\u524D\u7AEF\u7684\u6CE8\u91CA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nfca\uFF1A\u4E0D\u7528\u683C\u5F0F\u5316\u4EFB\u4F55\u7684\u6CE8\u91CA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nip\uFF1A\u53C2\u6570\u4E0D\u8981\u7F29\u6392\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nlp\uFF1A\u53D9\u8FF0\u8FC7\u957F\u800C\u6362\u884C\uFF0C\u4E14\u53D9\u8FF0\u4E2D\u5305\u542B\u4E86\u62EC\u53F7\u65F6\uFF0C\u4E0D\u7528\u5C06\u62EC\u53F7\u4E2D\u7684\u6BCF\u884C\u8D77\u59CB\u680F\u4F4D\u5782\u76F4\u5BF9\u5176\u6392\u5217\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-npcs\uFF1A\u5728\u8C03\u7528\u51FD\u6570\u540D\u4E4B\u540E\uFF0C\u4E0D\u8981\u6DFB\u52A0\u7A7A\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-npro\uFF1A\u4E0D\u8981\u8BFB\u53D6indent\u7684\u914D\u7F6E\u6587\u4EF6\u201C.indent.pro\u201D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-npsl\uFF1A\u7A0B\u5E8F\u7C7B\u578B\u4E0E\u7A0B\u5E8F\u540D\u79F0\u653E\u5728\u540C\u4E00\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nsc\uFF1A\u6CE8\u91CA\u5DE6\u4FA7\u4E0D\u8981\u6DFB\u52A0\u661F\u53F7\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nsob\uFF1A\u4E0D\u7528\u5904\u7406\u591A\u4F59\u7684\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nss\uFF1A\u82E5for\u6216while\u533A\u6BB5\u4EC5\u6709\u4E00\u884C\u65F6\uFF0C\u5728\u5206\u53F7\u524D\u4E0D\u52A0\u7A7A\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-nv\uFF1A\u4E0D\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-orig\uFF1A\u4F7F\u7528berkeley\u683C\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-pcs\uFF1A\u5728\u8C03\u7528\u51FD\u6570\u540D\u4E0E\u201C{\u201D\u4E4B\u95F4\u6DFB\u52A0\u7A7A\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-psl\uFF1A\u7A0B\u5E8F\u7C7B\u578B\u7F6E\u4E8E\u7A0B\u5E8F\u540D\u79F0\u7684\u524D\u4E00\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-sc\uFF1A\u5728\u6BCF\u884C\u6CE8\u91CA\u5DE6\u4FA7\u6DFB\u52A0\u661F\u53F7\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-sob\uFF1A\u5220\u9664\u591A\u4F59\u7684\u7A7A\u767D\u884C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ss\uFF1A\u82E5for\u6216swile\u533A\u6BB5\u4EC5\u6709\u4E00\u884C\u65F6\uFF0C\u5728\u5206\u53F7\u524D\u52A0\u4E0A\u7A7A\u683C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-st\uFF1A\u5C06\u7ED3\u679C\u663E\u793A\u5728\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u4E0A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-T\uFF1A\u6570\u636E\u7C7B\u578B\u540D\u79F0\u7F29\u6392\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-ts</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u683C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u8BBE\u7F6Etab\u7684\u957F\u5EA6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u663E\u793A\u8BE6\u7EC6\u7684\u6267\u884C\u8FC7\u7A0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528indent\u547D\u4EE4\u5C06C\u8BED\u8A00\u6E90\u6587\u4EF6&quot;test.c&quot;\u4E2D\u6240\u6709\u7684sizeof\u540E\u9762\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u683C\uFF0C\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">indent -bs /home/rootlocal/\u684C\u9762/test.c</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\uFF0C\u7528\u6237\u53EF\u4EE5\u6253\u5F00\u6307\u5B9A\u7684\u6E90\u6587\u4EF6\u67E5\u770B\u5728sizeof\u540E\u9762\u662F\u5426\u90FD\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7A7A\u683C\u3002\u7531\u4E8E\u8BE5\u547D\u4EE4\u7684\u53C2\u6570\u975E\u5E38\u591A\uFF0C\u6240\u4EE5\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u8981\u9009\u62E9\u9002\u5408\u7684\u53C2\u6570\u8FDB\u884C\u4F7F\u7528\u5373\u53EF\u3002</p>`,12),c=[e];function r(o,t,i,C,A,b){return a(),n("div",null,c)}const u=s(p,[["render",r]]);export{y as __pageData,u as default};
