import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"get_module","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/get_module.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/get_module.md"},e=l(`<h1 id="get-module" tabindex="-1">get_module <a class="header-anchor" href="#get-module" aria-hidden="true">#</a></h1><p>\u83B7\u53D6Linux\u5185\u6838\u6A21\u5757\u7684\u8BE6\u7EC6\u4FE1\u606F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>get_module\u547D\u4EE4</strong> \u7528\u4E8E\u83B7\u53D6Linux\u5185\u6838\u6A21\u5757\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">get_module \u6A21\u5757\u540D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528lsmod\u547D\u4EE4\u67E5\u770B\u5185\u6838\u6A21\u5757\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lsmod </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> head -5</span></span>
<span class="line"><span style="color:#A6ACCD;">Module                  Size  Used by</span></span>
<span class="line"><span style="color:#A6ACCD;">ipv6                  272801  15</span></span>
<span class="line"><span style="color:#A6ACCD;">xfrm_nalgo             13381  1 ipv6</span></span>
<span class="line"><span style="color:#A6ACCD;">crypto_api             12609  1 xfrm_nalgo</span></span>
<span class="line"><span style="color:#A6ACCD;">ip_conntrack_ftp       11569  0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528get_module\u547D\u4EE4\u67E5\u770B\u6A21\u5757\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">get_module ipv6</span></span>
<span class="line"><span style="color:#A6ACCD;">        refcnt               </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 15</span></span>
<span class="line"><span style="color:#A6ACCD;">        srcversion           </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 8CC9C024755B4483E56C0EF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Parameters:</span></span>
<span class="line"><span style="color:#A6ACCD;">        autoconf             </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        disable              </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        disable_ipv6         </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"><span style="color:#A6ACCD;">Sections:</span></span>
<span class="line"><span style="color:#A6ACCD;">        .altinstr_replacement </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1a3cf</span></span>
<span class="line"><span style="color:#A6ACCD;">        .altinstructions     </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1d03c</span></span>
<span class="line"><span style="color:#A6ACCD;">        .bss                 </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f36000</span></span>
<span class="line"><span style="color:#A6ACCD;">        .data.read_mostly    </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f34d20</span></span>
<span class="line"><span style="color:#A6ACCD;">        .data                </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f2f7a0</span></span>
<span class="line"><span style="color:#A6ACCD;">        .exit.text           </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1a234</span></span>
<span class="line"><span style="color:#A6ACCD;">        .gnu.linkonce.this_module </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f34e00</span></span>
<span class="line"><span style="color:#A6ACCD;">        .init.data           </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8a16a60</span></span>
<span class="line"><span style="color:#A6ACCD;">        .init.text           </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8a16000</span></span>
<span class="line"><span style="color:#A6ACCD;">        .module_sig          </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f37960</span></span>
<span class="line"><span style="color:#A6ACCD;">        .rodata.str1.1       </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1ae46</span></span>
<span class="line"><span style="color:#A6ACCD;">        .rodata              </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1a420</span></span>
<span class="line"><span style="color:#A6ACCD;">        .smp_locks           </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1d150</span></span>
<span class="line"><span style="color:#A6ACCD;">        .strtab              </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f29840</span></span>
<span class="line"><span style="color:#A6ACCD;">        .symtab              </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f24000</span></span>
<span class="line"><span style="color:#A6ACCD;">        .text                </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8ef5000</span></span>
<span class="line"><span style="color:#A6ACCD;">        __kcrctab            </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1de70</span></span>
<span class="line"><span style="color:#A6ACCD;">        __kcrctab_gpl        </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1d9cc</span></span>
<span class="line"><span style="color:#A6ACCD;">        __ksymtab            </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1dd78</span></span>
<span class="line"><span style="color:#A6ACCD;">        __ksymtab_gpl        </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1d954</span></span>
<span class="line"><span style="color:#A6ACCD;">        __ksymtab_strings    </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1da44</span></span>
<span class="line"><span style="color:#A6ACCD;">        __param              </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1da08</span></span>
<span class="line"><span style="color:#A6ACCD;">        __versions           </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> 0xf8f1df00</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,11),o=[e];function r(c,t,A,i,C,y){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{d as __pageData,u as default};
