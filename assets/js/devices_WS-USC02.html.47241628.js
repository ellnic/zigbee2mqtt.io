"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24324],{37854:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>c});var a=t(6254);const d={},i=(0,t(15356).A)(d,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[11]||(o[11]=(0,a.Lk)("h1",{id:"aqara-ws-usc02",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-ws-usc02"},[(0,a.Lk)("span",null,"Aqara WS-USC02")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"WS-USC02")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Aqara")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart wall switch (no neutral, double rocker), US")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), operation_mode, mode_switch, power_outage_count, device_temperature, flip_indicator_light, power_outage_memory, action")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WS-USC02.png",alt:"Aqara WS-USC02"})])],-1))])]),o[12]||(o[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[o[8]||(o[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,a.eW)("."))]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[10]||(o[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,a.Fv)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-top-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-endpoint"><span>Switch (top endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_top</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-endpoint"><span>Switch (bottom endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_bottom</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="operation-mode-enum-top-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-top-endpoint"><span>Operation mode (enum, top endpoint)</span></a></h3><p>Decoupled mode for top button. Value can be found in the published state on the <code>operation_mode_top</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_top&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_top&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="operation-mode-enum-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-bottom-endpoint"><span>Operation mode (enum, bottom endpoint)</span></a></h3><p>Decoupled mode for bottom button. Value can be found in the published state on the <code>operation_mode_bottom</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_bottom&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_bottom&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="mode-switch-enum" tabindex="-1"><a class="header-anchor" href="#mode-switch-enum"><span>Mode switch (enum)</span></a></h3><p>Anti flicker mode can be used to solve blinking issues of some lights. Quick mode makes the device respond faster.. Value can be found in the published state on the <code>mode_switch</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode_switch&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>anti_flicker_mode</code>, <code>quick_mode</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="flip-indicator-light-binary" tabindex="-1"><a class="header-anchor" href="#flip-indicator-light-binary"><span>Flip indicator light (binary)</span></a></h3><p>After turn on, the indicator light turns on while switch is off, and vice versa. Value can be found in the published state on the <code>flip_indicator_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;flip_indicator_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;flip_indicator_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> flip indicator light is ON, if <code>OFF</code> OFF.</p><h3 id="power-outage-memory-binary" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-binary"><span>Power outage memory (binary)</span></a></h3><p>Enable/disable the power outage memory, this recovers the on/off mode after power failure. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power outage memory is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single_top</code>, <code>single_bottom</code>, <code>single_both</code>, <code>double_top</code>, <code>double_bottom</code>, <code>double_both</code>.</p>',26))])}]]),c=JSON.parse('{"path":"/devices/WS-USC02.html","title":"Aqara WS-USC02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WS-USC02 control via MQTT","description":"Integrate your Aqara WS-USC02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/WS-USC02.md"}')}}]);