import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"lftp","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/lftp.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/lftp.md"},p=l(`<h1 id="lftp" tabindex="-1">lftp <a class="header-anchor" href="#lftp" aria-hidden="true">#</a></h1><p>\u4F18\u79C0\u7684\u6587\u4EF6\u5BA2\u6237\u7AEF\u7A0B\u5E8F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>lftp\u547D\u4EE4</strong> \u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u6587\u4EF6\u5BA2\u6237\u7AEF\u7A0B\u5E8F\uFF0C\u5B83\u652F\u6301ftp\u3001SETP\u3001HTTP\u548CFTPs\u7B49\u591A\u79CD\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\u3002lftp\u652F\u6301tab\u81EA\u52A8\u8865\u5168\uFF0C\u8BB0\u4E0D\u5F97\u547D\u4EE4\u53CC\u51FBtab\u952E\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u53EF\u80FD\u7684\u9009\u9879\u4E86\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lftp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u6307\u5B9Alftp\u6307\u4EE4\u8981\u6267\u884C\u7684\u811A\u672C\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u6267\u884C\u6307\u5B9A\u7684\u547D\u4EE4\u540E\u9000\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u53F7\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u7AD9\u70B9\uFF1A\u8981\u8BBF\u95EE\u7684\u7AD9\u70B9\u7684ip\u5730\u5740\u6216\u8005\u57DF\u540D\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u767B\u5F55ftp</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lftp \u7528\u6237\u540D:\u5BC6\u7801@ftp\u5730\u5740:\u4F20\u9001\u7AEF\u53E3\uFF08\u9ED8\u8BA421\uFF09</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5148\u4E0D\u5E26\u7528\u6237\u540D\u767B\u5F55\uFF0C\u7136\u540E\u5728\u63A5\u53E3\u754C\u9762\u4E0B\u7528login\u547D\u4EE4\u6765\u7528\u6307\u5B9A\u8D26\u53F7\u767B\u5F55\uFF0C\u5BC6\u7801\u4E0D\u663E\u793A\u3002</p><p><strong>\u67E5\u770B\u6587\u4EF6\u4E0E\u6539\u53D8\u76EE\u5F55</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">ls</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> \u5BF9\u5E94ftp\u76EE\u5F55</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u4E0B\u8F7D</strong></p><p>get\u5F53\u7136\u662F\u53EF\u4EE5\u7684\uFF0C\u8FD8\u53EF\u4EE5\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mget -c </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.pdf    </span><span style="color:#676E95;">#\u628A\u6240\u6709\u7684pdf\u6587\u4EF6\u4EE5\u5141\u8BB8\u65AD\u70B9\u7EED\u4F20\u7684\u65B9\u5F0F\u4E0B\u8F7D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mirror aaa/      </span><span style="color:#676E95;">#\u5C06aaa\u76EE\u5F55\u6574\u4E2A\u7684\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5B50\u76EE\u5F55\u4E5F\u4F1A\u81EA\u52A8\u590D\u5236\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">pget -c -n 10 file.dat   </span><span style="color:#676E95;">#\u4EE5\u6700\u591A10\u4E2A\u7EBF\u7A0B\u4EE5\u5141\u8BB8\u65AD\u70B9\u7EED\u4F20\u7684\u65B9\u5F0F\u4E0B\u8F7Dfile.dat\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6Epget:default-n\u7684\u503C\u800C\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u4E0A\u4F20</strong></p><p>\u540C\u6837\u7684put\u3001mput\u90FD\u662F\u5BF9\u6587\u4EF6\u7684\u64CD\u4F5C\uFF0C\u548C\u4E0B\u8F7D\u7C7B\u4F3C\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mirror -R \u672C\u5730\u76EE\u5F55\u540D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06\u672C\u5730\u76EE\u5F55\u4EE5\u8FED\u4EE3\uFF08\u5305\u62EC\u5B50\u76EE\u5F55\uFF09\u7684\u65B9\u5F0F\u53CD\u5411\u4E0A\u4F20\u5230ftp site\u3002</p><p><strong>\u6A21\u5F0F\u8BBE\u7F6E</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> ftp:charset gbk</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FDC\u7A0Bftp site\u7528gbk\u7F16\u7801\uFF0C\u5BF9\u5E94\u7684\u8981\u8BBE\u7F6E\u4E3Autf8,\u53EA\u8981\u66FF\u6362gbk\u4E3Autf8\u5373\u53EF\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> file:charset utf8</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u672C\u5730\u7684charset\u8BBE\u5B9A\u4E3Autf8,\u5982\u679C\u4F60\u662Fgbk\uFF0C\u76F8\u5E94\u6539\u6389\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> ftp:passive-mode 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u88AB\u52A8\u6A21\u5F0F\u767B\u5F55\uFF0C\u6709\u4E9Bsite\u8981\u6C42\u5FC5\u987B\u7528\u88AB\u52A8\u6A21\u5F0F\u6216\u8005\u4E3B\u52A8\u6A21\u5F0F\u624D\u53EF\u4EE5\u767B\u5F55\uFF0C\u8FD9\u4E2A\u5F00\u5173\u5C31\u662F\u8BBE\u7F6E\u8FD9\u4E2A\u7684\u30020\u4EE3\u8868\u4E0D\u7528\u88AB\u52A8\u6A21\u5F0F\u3002</p><p><strong>\u4E66\u7B7E</strong></p><p>\u5176\u5B9E\u547D\u4EE4\u884C\u4E5F\u53EF\u4EE5\u6709\u4E66\u7B7E\uFF0C\u5728lftp\u7EC8\u7AEF\u63D0\u793A\u7B26\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bookmark add ustc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C31\u53EF\u4EE5\u628A\u5F53\u524D\u6B63\u5728\u6D4F\u89C8\u7684ftp site\u7528ustc\u4F5C\u4E3A\u6807\u7B7E\u50A8\u5B58\u8D77\u6765\u3002\u4EE5\u540E\u5728shell\u7EC8\u7AEF\u4E0B\uFF0C\u76F4\u63A5<code>lftp ustc</code>\u5C31\u53EF\u4EE5\u81EA\u52A8\u586B\u597D\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u8FDB\u5165\u5BF9\u5E94\u7684\u76EE\u5F55\u4E86\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">bookmark edit</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F1A\u8C03\u7528\u7F16\u8F91\u5668\u624B\u52A8\u4FEE\u6539\u4E66\u7B7E\u3002\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A\u4E66\u7B7E\u5176\u5B9E\u5C31\u662F\u4E2A\u7B80\u5355\u7684\u6587\u672C\u6587\u4EF6\u3002\u5BC6\u7801\uFF0C\u7528\u6237\u540D\u90FD\u53EF\u4EE5\u770B\u5230\u3002</p><p><strong>\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">vim /etc/lftp.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E00\u822C\uFF0C\u6211\u4F1A\u6DFB\u52A0\u8FD9\u51E0\u884C\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> ftp:charset gbk</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> file:charset utf8</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> pget:default-n 5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u6837\uFF0C\u5C31\u4E0D\u7528\u6BCF\u6B21\u8FDB\u5165\u90FD\u8981\u6253\u547D\u4EE4\u4E86\u3002\u5176\u4ED6\u7684set\u53EF\u4EE5\u81EA\u5DF1tab\u7136\u540Ehelp\u6765\u770B\u3002</p>`,41),r=[p];function c(t,o,i,d,u,b){return a(),n("div",null,r)}const g=s(e,[["render",c]]);export{m as __pageData,g as default};