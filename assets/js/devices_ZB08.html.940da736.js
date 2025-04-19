"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7980],{21456:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>a});var c=o(6254);const i={},d=(0,o(15356).A)(i,[["render",function(e,t){const o=(0,c.g2)("RouteLink");return(0,c.uX)(),(0,c.CE)("div",null,[t[8]||(t[8]=(0,c.Lk)("h1",{id:"girier-zb08",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#girier-zb08"},[(0,c.Lk)("span",null,"Girier ZB08")])],-1)),(0,c.Lk)("table",null,[t[6]||(t[6]=(0,c.Lk)("thead",null,[(0,c.Lk)("tr",null,[(0,c.Lk)("th"),(0,c.Lk)("th")])],-1)),(0,c.Lk)("tbody",null,[t[2]||(t[2]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Model"),(0,c.Lk)("td",null,"ZB08")],-1)),(0,c.Lk)("tr",null,[t[1]||(t[1]=(0,c.Lk)("td",null,"Vendor",-1)),(0,c.Lk)("td",null,[(0,c.bF)(o,{to:"/supported-devices/#v=Girier"},{default:(0,c.k6)((()=>t[0]||(t[0]=[(0,c.eW)("Girier")]))),_:1})])]),t[3]||(t[3]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Description"),(0,c.Lk)("td",null,"3 Channel Switch Module-L - (No Neutral Wire)")],-1)),t[4]||(t[4]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Exposes"),(0,c.Lk)("td",null,"switch (state), countdown, power_on_behavior, switch_type")],-1)),t[5]||(t[5]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Picture"),(0,c.Lk)("td",null,[(0,c.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB08.png",alt:"Girier ZB08"})])],-1))])]),t[9]||(t[9]=(0,c.Lk)("h2",{id:"options",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#options"},[(0,c.Lk)("span",null,"Options")])],-1)),(0,c.Lk)("p",null,[(0,c.Lk)("em",null,[(0,c.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,c.k6)((()=>t[7]||(t[7]=[(0,c.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,c.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint"><span>Switch (left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint"><span>Switch (center endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint"><span>Switch (right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="countdown-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-left-endpoint"><span>Countdown (numeric, left endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;countdown_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_left&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="countdown-numeric-center-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-center-endpoint"><span>Countdown (numeric, center endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_center</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;countdown_center&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_center&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="countdown-numeric-right-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-right-endpoint"><span>Countdown (numeric, right endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;countdown_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_right&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="switch-type-enum" tabindex="-1"><a class="header-anchor" href="#switch-type-enum"><span>Switch type (enum)</span></a></h3><p>Type of the switch. Value can be found in the published state on the <code>switch_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>state</code>, <code>momentary</code>.</p>',18))])}]]),a=JSON.parse('{"path":"/devices/ZB08.html","title":"Girier ZB08 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Girier ZB08 control via MQTT","description":"Integrate your Girier ZB08 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:41.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/ZB08.md"}')}}]);