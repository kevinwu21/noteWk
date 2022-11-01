import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const D=JSON.parse('{"title":"dircolors","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/dircolors.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/dircolors.md"},e=l(`<h1 id="dircolors" tabindex="-1">dircolors <a class="header-anchor" href="#dircolors" aria-hidden="true">#</a></h1><p>\u7F6Els\u547D\u4EE4\u5728\u663E\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u65F6\u6240\u7528\u7684\u8272\u5F69</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>dircolors\u547D\u4EE4</strong> \u8BBE\u7F6Els\u547D\u4EE4\u5728\u663E\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u65F6\u6240\u7528\u7684\u8272\u5F69\u3002dircolors\u53EF\u6839\u636E[\u8272\u5F69\u914D\u7F6E\u6587\u4EF6]\u6765\u8BBE\u7F6ELS_COLORS\u73AF\u5883\u53D8\u91CF\u6216\u662F\u663E\u793A\u8BBE\u7F6ELS_COLORS\u73AF\u5883\u53D8\u91CF\u7684\u547D\u4EE4\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dircolors</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-b\u6216--sh\u6216--bourne-shell\uFF1A\u663E\u793A\u5728Boume shell\u4E2D\uFF0C\u5C06LS_COLORS\u8BBE\u4E3A\u76EE\u524D\u9884\u8BBE\u7F6E\u7684shell\u6307\u4EE4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\u6216--csh\u6216--c-shell\uFF1A\u663E\u793A\u5728C shell\u4E2D\uFF0C\u5C06LS_COLORS\u8BBE\u4E3A\u76EE\u524D\u9884\u8BBE\u7F6E\u7684shell\u6307\u4EE4\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-p\u6216--print-database\uFF1A\u663E\u793A\u9884\u8BBE\u7F6E\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-help\uFF1A\u663E\u793A\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u7528\u6765\u8BBE\u7F6E\u989C\u8272\u7684\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># dircolors -p</span></span>
<span class="line"><span style="color:#676E95;"># Configuration file for dircolors, a utility to help you set the</span></span>
<span class="line"><span style="color:#676E95;"># LS_COLORS environment variable used by GNU ls with the --color option.</span></span>
<span class="line"><span style="color:#676E95;"># The keywords COLOR, OPTIONS, and EIGHTBIT (honored by the</span></span>
<span class="line"><span style="color:#676E95;"># slackware version of dircolors) are recognized but ignored.</span></span>
<span class="line"><span style="color:#676E95;"># Below, there should be one TERM entry for each termtype that is colorizable</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM linux</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM linux-c</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM mach-color</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM console</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con132x25</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con132x30</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con132x43</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con132x60</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con80x25</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con80x28</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con80x30</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con80x43</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con80x50</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM con80x60</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM cygwin</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM dtterm</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM putty</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM xterm</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM xterm-color</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM xterm-debian</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM rxvt</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM screen</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM screen-bce</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM screen-w</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM vt100</span></span>
<span class="line"><span style="color:#A6ACCD;">TERM Eterm</span></span>
<span class="line"><span style="color:#676E95;"># Below are the color init strings for the basic file types. A color init</span></span>
<span class="line"><span style="color:#676E95;"># string consists of one or more of the following numeric codes:</span></span>
<span class="line"><span style="color:#676E95;"># Attribute codes:</span></span>
<span class="line"><span style="color:#676E95;"># 00=none 01=bold 04=underscore 05=blink 07=reverse 08=concealed</span></span>
<span class="line"><span style="color:#676E95;"># Text color codes:</span></span>
<span class="line"><span style="color:#676E95;"># 30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white</span></span>
<span class="line"><span style="color:#676E95;"># Background color codes:</span></span>
<span class="line"><span style="color:#676E95;"># 40=black 41=red 42=green 43=yellow 44=blue 45=magenta 46=cyan 47=white</span></span>
<span class="line"><span style="color:#A6ACCD;">NORMAL 00 </span><span style="color:#676E95;"># global default, although everything should be something.</span></span>
<span class="line"><span style="color:#A6ACCD;">FILE 00 </span><span style="color:#676E95;"># normal file</span></span>
<span class="line"><span style="color:#A6ACCD;">DIR 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">34 </span><span style="color:#676E95;"># directory</span></span>
<span class="line"><span style="color:#A6ACCD;">LINK 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">36 </span><span style="color:#676E95;"># symbolic link. (If you set this to &#39;target&#39; instead of a</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;"># numerical value, the color is as for the file pointed to.)</span></span>
<span class="line"><span style="color:#A6ACCD;">FIFO 40</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">33 </span><span style="color:#676E95;"># pipe</span></span>
<span class="line"><span style="color:#A6ACCD;">SOCK 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35 </span><span style="color:#676E95;"># socket</span></span>
<span class="line"><span style="color:#A6ACCD;">DOOR 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35 </span><span style="color:#676E95;"># door</span></span>
<span class="line"><span style="color:#A6ACCD;">BLK 40</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">33</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">01 </span><span style="color:#676E95;"># block device driver</span></span>
<span class="line"><span style="color:#A6ACCD;">CHR 40</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">33</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">01 </span><span style="color:#676E95;"># character device driver</span></span>
<span class="line"><span style="color:#A6ACCD;">ORPHAN 40</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">01 </span><span style="color:#676E95;"># symlink to nonexistent file</span></span>
<span class="line"><span style="color:#A6ACCD;">SETUID 37</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">41 </span><span style="color:#676E95;"># file that is setuid (u+s)</span></span>
<span class="line"><span style="color:#A6ACCD;">SETGID 30</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">43 </span><span style="color:#676E95;"># file that is setgid (g+s)</span></span>
<span class="line"><span style="color:#A6ACCD;">STICKY_OTHER_WRITABLE 30</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">42 </span><span style="color:#676E95;"># dir that is sticky and other-writable (+t,o+w)</span></span>
<span class="line"><span style="color:#A6ACCD;">OTHER_WRITABLE 34</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">42 </span><span style="color:#676E95;"># dir that is other-writable (o+w) and not sticky</span></span>
<span class="line"><span style="color:#A6ACCD;">STICKY 37</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">44 </span><span style="color:#676E95;"># dir with the sticky bit set (+t) and not other-writable</span></span>
<span class="line"><span style="color:#676E95;"># This is for files with execute permission:</span></span>
<span class="line"><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">32</span></span>
<span class="line"><span style="color:#676E95;"># List any file extensions like &#39;.gz&#39; or &#39;.tar&#39; that you would like ls</span></span>
<span class="line"><span style="color:#676E95;"># to colorize below. Put the extension, a space, and the color init string.</span></span>
<span class="line"><span style="color:#676E95;"># (and any comments you want to add after a &#39;#&#39;)</span></span>
<span class="line"><span style="color:#676E95;"># If you use DOS-style suffixes, you may want to uncomment the following:</span></span>
<span class="line"><span style="color:#676E95;">#.cmd 01;32 # executables (bright green)</span></span>
<span class="line"><span style="color:#676E95;">#.exe 01;32</span></span>
<span class="line"><span style="color:#676E95;">#.com 01;32</span></span>
<span class="line"><span style="color:#676E95;">#.btm 01;32</span></span>
<span class="line"><span style="color:#676E95;">#.bat 01;32</span></span>
<span class="line"><span style="color:#A6ACCD;">.tar 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31 </span><span style="color:#676E95;"># archives or compressed (bright red)</span></span>
<span class="line"><span style="color:#A6ACCD;">.tgz 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.arj 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.taz 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.lzh 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.zip 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.z 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.Z 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.gz 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.bz2 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.deb 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.rpm 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#A6ACCD;">.jar 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">31</span></span>
<span class="line"><span style="color:#676E95;"># image formats</span></span>
<span class="line"><span style="color:#A6ACCD;">.jpg 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.jpeg 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.gif 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.bmp 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.pbm 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.pgm 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.ppm 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.tga 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.xbm 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.xpm 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.tif 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.tiff 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.png 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.mov 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.mpg 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.mpeg 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.avi 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.fli 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.gl 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.dl 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.xcf 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.xwd 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#676E95;"># audio formats</span></span>
<span class="line"><span style="color:#A6ACCD;">.flac 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.mp3 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.mpc 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.ogg 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">.wav 01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">35</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br></div></div>`,12),o=[e];function r(c,t,i,C,A,y){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{D as __pageData,u as default};
