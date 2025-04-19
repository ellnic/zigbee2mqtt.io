"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52832],{72178:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>l,data:()=>r});var o=t(6254);const d={},l=(0,t(15356).A)(d,[["render",function(e,a){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[a[7]||(a[7]=(0,o.Lk)("h1",{id:"neo-nas-ab06b2",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#neo-nas-ab06b2"},[(0,o.Lk)("span",null,"Neo NAS-AB06B2")])],-1)),(0,o.Lk)("table",null,[a[6]||(a[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[a[2]||(a[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"NAS-AB06B2")],-1)),(0,o.Lk)("tr",null,[a[1]||(a[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=Neo"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)("Neo")]))),_:1})])]),a[3]||(a[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Outdoor solar alarm")],-1)),a[4]||(a[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"alarm_state, alarm_switch, tamper_alarm_switch, tamper_alarm, alarm_melody, alarm_mode, alarm_time, charging, battery")],-1)),a[5]||(a[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-AB06B2.png",alt:"Neo NAS-AB06B2"})])],-1))])]),a[8]||(a[8]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="alarm-state-enum" tabindex="-1"><a class="header-anchor" href="#alarm-state-enum"><span>Alarm state (enum)</span></a></h3><p>Alarm status. Value can be found in the published state on the <code>alarm_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>, <code>normal</code>.</p><h3 id="alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#alarm-switch-binary"><span>Alarm switch (binary)</span></a></h3><p>Enable alarm. Value can be found in the published state on the <code>alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id="tamper-alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#tamper-alarm-switch-binary"><span>Tamper alarm switch (binary)</span></a></h3><p>Enable tamper alarm. Value can be found in the published state on the <code>tamper_alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tamper_alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> tamper alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id="tamper-alarm-binary" tabindex="-1"><a class="header-anchor" href="#tamper-alarm-binary"><span>Tamper alarm (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> tamper alarm is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-melody-enum" tabindex="-1"><a class="header-anchor" href="#alarm-melody-enum"><span>Alarm melody (enum)</span></a></h3><p>Alarm sound effect. Value can be found in the published state on the <code>alarm_melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_melody&quot;: NEW_VALUE}</code>. The possible values are: <code>melody_1</code>, <code>melody_2</code>, <code>melody_3</code>.</p><h3 id="alarm-mode-enum" tabindex="-1"><a class="header-anchor" href="#alarm-mode-enum"><span>Alarm mode (enum)</span></a></h3><p>Alarm mode. Value can be found in the published state on the <code>alarm_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>.</p><h3 id="alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-time-numeric"><span>Alarm time (numeric)</span></a></h3><p>Alarm duration in minutes. Value can be found in the published state on the <code>alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="charging-binary" tabindex="-1"><a class="header-anchor" href="#charging-binary"><span>Charging (binary)</span></a></h3><p>Charging status. Value can be found in the published state on the <code>charging</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> charging is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',19))])}]]),r=JSON.parse('{"path":"/devices/NAS-AB06B2.html","title":"Neo NAS-AB06B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-AB06B2 control via MQTT","description":"Integrate your Neo NAS-AB06B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:46:17.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/NAS-AB06B2.md"}')}}]);