"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9140],{6542:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>d});var a=t(6254);const i={},c=(0,t(15356).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[11]||(o[11]=(0,a.Lk)("h1",{id:"aqara-znqbkg42lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-znqbkg42lm"},[(0,a.Lk)("span",null,"Aqara ZNQBKG42LM")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZNQBKG42LM")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Aqara")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart wall switch Z1 Pro (single rocker)")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), device_temperature, power_outage_count, power_on_behavior, operation_mode, lock_relay, energy, voltage, current, power, click_mode, action_slide_time, action_slide_speed, action_slide_relative_displacement, action_slide_time_delta, mode_switch, action")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNQBKG42LM.png",alt:"Aqara ZNQBKG42LM"})])],-1))])]),o[12]||(o[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[o[8]||(o[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,a.eW)("."))]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[10]||(o[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,a.Fv)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>previous</code>, <code>off</code>, <code>inverted</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum"><span>Operation mode (enum)</span></a></h3><p>Decoupled mode for a button. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>decoupled</code>, <code>control_relay</code>.</p><h3 id="lock-relay-binary" tabindex="-1"><a class="header-anchor" href="#lock-relay-binary"><span>Lock relay (binary)</span></a></h3><p>Locks relay and prevents it from operating. Value can be found in the published state on the <code>lock_relay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_relay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_relay&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lock relay is ON, if <code>false</code> OFF.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="click-mode-enum" tabindex="-1"><a class="header-anchor" href="#click-mode-enum"><span>Click mode (enum)</span></a></h3><p>Click mode for wireless button. fast: only supports single click but allows faster reponse time.multi: supports multiple types of clicks but is slower, because it awaits multiple clicks.. Value can be found in the published state on the <code>click_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;click_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>fast</code>, <code>multi</code>.</p><h3 id="action-slide-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-time-numeric"><span>Action slide time (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_slide_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="action-slide-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-speed-numeric"><span>Action slide speed (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_slide_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mm/s</code>.</p><h3 id="action-slide-relative-displacement-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-relative-displacement-numeric"><span>Action slide relative displacement (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_slide_relative_displacement</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-slide-time-delta-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-time-delta-numeric"><span>Action slide time delta (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_slide_time_delta</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="mode-switch-enum" tabindex="-1"><a class="header-anchor" href="#mode-switch-enum"><span>Mode switch (enum)</span></a></h3><p>Anti flicker mode can be used to solve blinking issues of some lights. Quick mode makes the device respond faster.. Value can be found in the published state on the <code>mode_switch</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode_switch&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>quick_mode</code>, <code>anti_flicker_mode</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>slider_single</code>, <code>slider_double</code>, <code>slider_hold</code>, <code>slider_up</code>, <code>slider_down</code>.</p>',38))])}]]),d=JSON.parse('{"path":"/devices/ZNQBKG42LM.html","title":"Aqara ZNQBKG42LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNQBKG42LM control via MQTT","description":"Integrate your Aqara ZNQBKG42LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/ZNQBKG42LM.md"}')}}]);