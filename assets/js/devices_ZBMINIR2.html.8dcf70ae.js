"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57519],{39127:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>c});var a=t(6254);const d={},i=(0,t(15356).A)(d,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[11]||(o[11]=(0,a.Lk)("h1",{id:"sonoff-zbminir2",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sonoff-zbminir2"},[(0,a.Lk)("span",null,"SONOFF ZBMINIR2")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZBMINIR2")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=SONOFF"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("SONOFF")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee smart switch")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power_on_behavior, network_indicator, turbo_mode, delayed_power_on_state, delayed_power_on_time, detach_relay_mode, external_trigger_mode, inching_control_set, action")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBMINIR2.png",alt:"SONOFF ZBMINIR2"})])],-1))])]),o[12]||(o[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="re-pair-starting-pairing-mode-again" tabindex="-1"><a class="header-anchor" href="#re-pair-starting-pairing-mode-again"><span>Re-pair / starting pairing mode again</span></a></h3><p>Quickly press rocker switch 10 times.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,a.Lk)("p",null,[o[8]||(o[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,a.eW)("."))]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[10]||(o[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,a.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="network-indicator-binary" tabindex="-1"><a class="header-anchor" href="#network-indicator-binary"><span>Network indicator (binary)</span></a></h3><p>Network indicator Settings, turn off/turn on the online network indicator.. Value can be found in the published state on the <code>network_indicator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;network_indicator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;network_indicator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> network indicator is ON, if <code>false</code> OFF.</p><h3 id="turbo-mode-binary" tabindex="-1"><a class="header-anchor" href="#turbo-mode-binary"><span>Turbo mode (binary)</span></a></h3><p>Enable/disable Radio power turbo mode. Value can be found in the published state on the <code>turbo_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;turbo_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;turbo_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> turbo mode is ON, if <code>false</code> OFF.</p><h3 id="delayed-power-on-state-binary" tabindex="-1"><a class="header-anchor" href="#delayed-power-on-state-binary"><span>Delayed power on state (binary)</span></a></h3><p>Delayed Power-on State. Value can be found in the published state on the <code>delayed_power_on_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;delayed_power_on_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delayed_power_on_state&quot;: NEW_VALUE}</code>. If value equals <code>true</code> delayed power on state is ON, if <code>false</code> OFF.</p><h3 id="delayed-power-on-time-numeric" tabindex="-1"><a class="header-anchor" href="#delayed-power-on-time-numeric"><span>Delayed power on time (numeric)</span></a></h3><p>Delayed Power-on time. Value can be found in the published state on the <code>delayed_power_on_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;delayed_power_on_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delayed_power_on_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>3599.5</code>. The unit of this value is <code>seconds</code>.</p><h3 id="detach-relay-mode-binary" tabindex="-1"><a class="header-anchor" href="#detach-relay-mode-binary"><span>Detach relay mode (binary)</span></a></h3><p>Enable/Disable detach relay mode. Value can be found in the published state on the <code>detach_relay_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detach_relay_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detach_relay_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> detach relay mode is ON, if <code>false</code> OFF.</p><h3 id="external-trigger-mode-enum" tabindex="-1"><a class="header-anchor" href="#external-trigger-mode-enum"><span>External trigger mode (enum)</span></a></h3><p>External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience.. Value can be found in the published state on the <code>external_trigger_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;external_trigger_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;external_trigger_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>edge</code>, <code>pulse</code>, <code>following(off)</code>, <code>following(on)</code>.</p><h3 id="inching-control-set-composite" tabindex="-1"><a class="header-anchor" href="#inching-control-set-composite"><span>Inching control set (composite)</span></a></h3><p>Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;inching_control_set&quot;: {&quot;inching_control&quot;: VALUE, &quot;inching_time&quot;: VALUE, &quot;inching_mode&quot;: VALUE}}</code></p><ul><li><code>inching_control</code> (binary): Enable/disable inching function. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>inching_time</code> (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds</li><li><code>inching_mode</code> (binary): Set inching off or inching on mode. allowed values: <code>ON</code> or <code>OFF</code></li></ul><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>.</p>',25))])}]]),c=JSON.parse('{"path":"/devices/ZBMINIR2.html","title":"SONOFF ZBMINIR2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBMINIR2 control via MQTT","description":"Integrate your SONOFF ZBMINIR2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-01T08:47:20.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/ZBMINIR2.md"}')}}]);