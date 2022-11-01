import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const A=JSON.parse('{"title":"lsmod","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/lsmod.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/lsmod.md"},e=l(`<h1 id="lsmod" tabindex="-1">lsmod <a class="header-anchor" href="#lsmod" aria-hidden="true">#</a></h1><p>\u663E\u793A\u5DF2\u8F7D\u5165\u7CFB\u7EDF\u7684\u6A21\u5757</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>lsmod\u547D\u4EE4</strong> \u7528\u4E8E\u663E\u793A\u5DF2\u7ECF\u52A0\u8F7D\u5230\u5185\u6838\u4E2D\u7684\u6A21\u5757\u7684\u72B6\u6001\u4FE1\u606F\u3002\u6267\u884Clsmod\u547D\u4EE4\u540E\u4F1A\u5217\u51FA\u6240\u6709\u5DF2\u8F7D\u5165\u7CFB\u7EDF\u7684\u6A21\u5757\u3002Linux\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6838\u5FC3\u5177\u6709\u6A21\u5757\u5316\u7684\u7279\u6027\uFF0C\u5E94\u6B64\u5728\u7F16\u8BD1\u6838\u5FC3\u65F6\uFF0C\u52A1\u987B\u628A\u5168\u90E8\u7684\u529F\u80FD\u90FD\u653E\u5165\u6838\u5FC3\u3002\u60A8\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u529F\u80FD\u7F16\u8BD1\u6210\u4E00\u4E2A\u4E2A\u5355\u72EC\u7684\u6A21\u5757\uFF0C\u5F85\u9700\u8981\u65F6\u518D\u5206\u522B\u8F7D\u5165\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lsmod</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@LinServ-1 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># lsmod</span></span>
<span class="line"><span style="color:#A6ACCD;">Module                  Size  Used by</span></span>
<span class="line"><span style="color:#A6ACCD;">ipv6                  272801  15</span></span>
<span class="line"><span style="color:#A6ACCD;">xfrm_nalgo             13381  1 ipv6</span></span>
<span class="line"><span style="color:#A6ACCD;">crypto_api             12609  1 xfrm_nalgo</span></span>
<span class="line"><span style="color:#A6ACCD;">ip_conntrack_ftp       11569  0</span></span>
<span class="line"><span style="color:#A6ACCD;">xt_limit                6721  2</span></span>
<span class="line"><span style="color:#A6ACCD;">xt_state                6209  2</span></span>
<span class="line"><span style="color:#A6ACCD;">ip_conntrack           53665  2 ip_conntrack_ftp,xt_state</span></span>
<span class="line"><span style="color:#A6ACCD;">nfnetlink              10713  1 ip_conntrack</span></span>
<span class="line"><span style="color:#A6ACCD;">xt_tcpudp               7105  6</span></span>
<span class="line"><span style="color:#A6ACCD;">xt_multiport            7233  1</span></span>
<span class="line"><span style="color:#A6ACCD;">iptable_filter          7105  1</span></span>
<span class="line"><span style="color:#A6ACCD;">ip_tables              17029  1 iptable_filter</span></span>
<span class="line"><span style="color:#A6ACCD;">x_tables               17349  5 xt_limit,xt_state,xt_tcpudp,xt_multiport,ip_tables</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_mirror              24393  0</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_multipath           27213  0</span></span>
<span class="line"><span style="color:#A6ACCD;">scsi_dh                12481  1 dm_multipath</span></span>
<span class="line"><span style="color:#A6ACCD;">video                  21193  0</span></span>
<span class="line"><span style="color:#A6ACCD;">backlight              10049  1 video</span></span>
<span class="line"><span style="color:#A6ACCD;">sbs                    18533  0</span></span>
<span class="line"><span style="color:#A6ACCD;">power_meter            16461  0</span></span>
<span class="line"><span style="color:#A6ACCD;">hwmon                   7365  1 power_meter</span></span>
<span class="line"><span style="color:#A6ACCD;">i2c_ec                  9025  1 sbs</span></span>
<span class="line"><span style="color:#A6ACCD;">dell_wmi                8401  0</span></span>
<span class="line"><span style="color:#A6ACCD;">wmi                    12137  1 dell_wmi</span></span>
<span class="line"><span style="color:#A6ACCD;">button                 10705  0</span></span>
<span class="line"><span style="color:#A6ACCD;">battery                13637  0</span></span>
<span class="line"><span style="color:#A6ACCD;">asus_acpi              19289  0</span></span>
<span class="line"><span style="color:#A6ACCD;">ac                      9157  0</span></span>
<span class="line"><span style="color:#A6ACCD;">lp                     15849  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_hda_intel         401453  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_seq_dummy           7877  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_seq_oss            32577  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_seq_midi_event     11073  1 snd_seq_oss</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_seq                49585  5 snd_seq_dummy,snd_seq_oss,snd_seq_midi_event</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_seq_device         11725  3 snd_seq_dummy,snd_seq_oss,snd_seq</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_pcm_oss            42817  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_mixer_oss          19009  1 snd_pcm_oss</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_pcm                72517  2 snd_hda_intel,snd_pcm_oss</span></span>
<span class="line"><span style="color:#A6ACCD;">ide_cd                 40161  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_timer              24517  2 snd_seq,snd_pcm</span></span>
<span class="line"><span style="color:#A6ACCD;">tpm_tis                16713  0</span></span>
<span class="line"><span style="color:#A6ACCD;">r8169                  43077  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_page_alloc         14281  2 snd_hda_intel,snd_pcm</span></span>
<span class="line"><span style="color:#A6ACCD;">tpm                    19041  1 tpm_tis</span></span>
<span class="line"><span style="color:#A6ACCD;">i2c_i801               12737  0</span></span>
<span class="line"><span style="color:#A6ACCD;">mii                     9409  1 r8169</span></span>
<span class="line"><span style="color:#A6ACCD;">serio_raw              10693  0</span></span>
<span class="line"><span style="color:#A6ACCD;">i2c_core               24897  2 i2c_ec,i2c_i801</span></span>
<span class="line"><span style="color:#A6ACCD;">snd_hwdep              12869  1 snd_hda_intel</span></span>
<span class="line"><span style="color:#A6ACCD;">tpm_bios               11073  1 tpm</span></span>
<span class="line"><span style="color:#A6ACCD;">cdrom                  36577  1 ide_cd</span></span>
<span class="line"><span style="color:#A6ACCD;">pcspkr                  7105  0</span></span>
<span class="line"><span style="color:#A6ACCD;">parport_pc             29669  1</span></span>
<span class="line"><span style="color:#A6ACCD;">sg                     36973  0</span></span>
<span class="line"><span style="color:#A6ACCD;">snd                    57797  9 snd_hda_intel,snd_seq_oss,snd_seq,snd_seq_device,snd_pcm_oss,snd_mixer_oss,snd_pcm,snd_timer,snd_hwdep</span></span>
<span class="line"><span style="color:#A6ACCD;">parport                37513  2 lp,parport_pc</span></span>
<span class="line"><span style="color:#A6ACCD;">soundcore              11553  1 snd</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_raid45              67273  0</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_message              6977  1 dm_raid45</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_region_hash         15681  1 dm_raid45</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_log                 14785  3 dm_mirror,dm_raid45,dm_region_hash</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_mod                 63993  4 dm_mirror,dm_multipath,dm_raid45,dm_log</span></span>
<span class="line"><span style="color:#A6ACCD;">dm_mem_cache            9537  1 dm_raid45</span></span>
<span class="line"><span style="color:#A6ACCD;">ata_piix               23749  4</span></span>
<span class="line"><span style="color:#A6ACCD;">libata                158085  1 ata_piix</span></span>
<span class="line"><span style="color:#A6ACCD;">sd_mod                 25409  6</span></span>
<span class="line"><span style="color:#A6ACCD;">scsi_mod              144277  4 scsi_dh,sg,libata,sd_mod</span></span>
<span class="line"><span style="color:#A6ACCD;">ext3                  126281  3</span></span>
<span class="line"><span style="color:#A6ACCD;">jbd                    57705  1 ext3</span></span>
<span class="line"><span style="color:#A6ACCD;">uhci_hcd               25421  0</span></span>
<span class="line"><span style="color:#A6ACCD;">ohci_hcd               24937  0</span></span>
<span class="line"><span style="color:#A6ACCD;">ehci_hcd               34509  0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><ul><li>\u7B2C1\u5217\uFF1A\u8868\u793A\u6A21\u5757\u7684\u540D\u79F0\u3002</li><li>\u7B2C2\u5217\uFF1A\u8868\u793A\u6A21\u5757\u7684\u5927\u5C0F\u3002</li><li>\u7B2C3\u5217\uFF1A\u8868\u793A\u4F9D\u8D56\u6A21\u5757\u7684\u4E2A\u6570\u3002</li><li>\u7B2C4\u5217\uFF1A\u8868\u793A\u4F9D\u8D56\u6A21\u5757\u7684\u5185\u5BB9\u3002</li></ul><p>\u901A\u5E38\u5728\u4F7F\u7528lsmod\u547D\u4EE4\u65F6\uFF0C\u90FD\u4F1A\u91C7\u7528\u7C7B\u4F3C<code>lsmod | grep -i ext3</code>\u8FD9\u6837\u7684\u547D\u4EE4\u6765\u67E5\u8BE2\u5F53\u524D\u7CFB\u7EDF\u662F\u5426\u52A0\u8F7D\u4E86\u67D0\u4E9B\u6A21\u5757\u3002</p>`,10),r=[e];function c(i,o,t,b,m,d){return a(),n("div",null,r)}const C=s(p,[["render",c]]);export{A as __pageData,C as default};
