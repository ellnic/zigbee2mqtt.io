"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6378],{80056:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>r,data:()=>o});var a=s(6254);const t={},r=(0,s(15356).A)(t,[["render",function(e,n){return(0,a.uX)(),(0,a.CE)("div",null,n[0]||(n[0]=[(0,a.Fv)('<h1 id="external-converters" tabindex="-1"><a class="header-anchor" href="#external-converters"><span>External converters</span></a></h1><p>Zigbee2MQTT uses <a href="https://github.com/Koenkk/zigbee-herdsman-converters" target="_blank" rel="noopener noreferrer">zigbee-herdsman-converters</a> to parse messages to and from devices.</p><p>External converters provide a way to test support for new devices, they work identically to internal converters.</p><p>External converters are stored in <code>data/external_converters</code> folder and have to export a JavaScript Object or Array of Object matching the type <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/types.ts" target="_blank" rel="noopener noreferrer"><code>DefinitionWithExtend</code></a>. Refer to <a href="https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices" target="_blank" rel="noopener noreferrer">existing converters</a> to get familiar with the framework.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Once your converter is ready, open a <a href="https://github.com/Koenkk/zigbee-herdsman-converters/pulls" target="_blank" rel="noopener noreferrer">pull request</a> so it can be integrated into Zigbee2MQTT for all to use. Once the new Zigbee2MQTT version is released, you can just delete the external converter.</p></div><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>The easiest way to develop is by using the <a href="https://github.com/Nerivec/z2m-external-converter-dev?tab=readme-ov-file#how-to-use" target="_blank" rel="noopener noreferrer">external converter development environment</a></p></div><p>Example:</p><p>File: <code>data/external_converters/my-first-converter.mjs</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>temperature<span class="token punctuation">,</span> humidity<span class="token punctuation">,</span> battery<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="more-examples" tabindex="-1"><a class="header-anchor" href="#more-examples"><span>More examples</span></a></h3><ul><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor_me.mjs" target="_blank" rel="noopener noreferrer">Sensor using modern extends</a> (same as above)</li><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor.mjs" target="_blank" rel="noopener noreferrer">Sensor using non modern extends</a></li><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.mjs" target="_blank" rel="noopener noreferrer">Bulb (light)</a></li><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.mjs" target="_blank" rel="noopener noreferrer">Plug (switch)</a></li><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs" target="_blank" rel="noopener noreferrer">Advanced example</a></li><li>Definitions of already supported devices can be found <a href="https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices" target="_blank" rel="noopener noreferrer">here</a>. It may help to look at devices from the same vendor or type.</li></ul><h3 id="using-modern-extends" tabindex="-1"><a class="header-anchor" href="#using-modern-extends"><span>Using modern extends</span></a></h3><p>The entire API can be found <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/modernExtend.ts" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="using-non-modern-extends" tabindex="-1"><a class="header-anchor" href="#using-non-modern-extends"><span>Using non modern extends</span></a></h3><p>The most common API endpoints are accessible from the following imports:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fz <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> tz <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> exposes <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> reporting <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ota <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/ota&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> utils <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/utils&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> globalStore <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/store&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// exposes.presets</span></span>\n<span class="line"><span class="token comment">// exposes.access</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To optimize imports, you can import only the required items instead. For example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>onOff<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>presets<span class="token punctuation">,</span> access<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="converters-list" tabindex="-1"><a class="header-anchor" href="#converters-list"><span>Converters list</span></a></h2><p>When Zigbee2MQTT starts it publishes <code>zigbee2mqtt/bridge/converters</code> with payload <code>[{&quot;name&quot;: &quot;my-first-converter.js&quot;: &quot;code&quot;: &lt;HERE COMES YOUR CONVERTER CODE&gt;}]</code> containing all the converters loaded from the file system. The same message is also published when a converter changes at runtime (from one of the below actions), with the appropriately updated payload.</p><h2 id="save-converter" tabindex="-1"><a class="header-anchor" href="#save-converter"><span>Save converter</span></a></h2><p>To save a converter at runtime, send a message to <code>zigbee2mqtt/bridge/request/converter/save</code> with payload <code>{&quot;name&quot;: &quot;my-first-converter.js&quot;, &quot;code&quot;: &lt;HERE COMES YOUR CONVERTER CODE&gt;}</code>. The code will be saved in <code>data/external_converters/</code> in the file with the given name.</p><h2 id="remove-converter" tabindex="-1"><a class="header-anchor" href="#remove-converter"><span>Remove converter</span></a></h2><p>To remove a converter at runtime, send a message to <code>zigbee2mqtt/bridge/request/converter/remove</code> with payload <code>{&quot;name&quot;: &quot;my-first-converter.js&quot;}</code>. The file will be deleted from <code>data/external_converters/</code>.</p>',24)]))}]]),o=JSON.parse('{"path":"/advanced/more/external_converters.html","title":"External converters","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebar":"auto"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"advanced/more/external_converters.md"}')}}]);