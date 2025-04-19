"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59464],{50667:(t,e,o)=>{o.r(e),o.d(e,{comp:()=>c,data:()=>d});var s=o(6254);const a={},c=(0,o(15356).A)(a,[["render",function(t,e){const o=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[e[7]||(e[7]=(0,s.Lk)("h1",{id:"tuya-ts0601-switch-8",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-switch-8"},[(0,s.Lk)("span",null,"Tuya TS0601_switch_8")])],-1)),(0,s.Lk)("table",null,[e[6]||(e[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[e[2]||(e[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"TS0601_switch_8")],-1)),(0,s.Lk)("tr",null,[e[1]||(e[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.eW)("Tuya")]))),_:1})])]),e[3]||(e[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"ZYXH 8 gang switch")],-1)),e[4]||(e[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"switch (state)")],-1)),e[5]||(e[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_switch_8.png",alt:"Tuya TS0601_switch_8"})])],-1))])]),e[8]||(e[8]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Long press any button for 5 seconds until the LED indicator starts flashing rapidly to enter pairing mode.</p><h3 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints"><span>Endpoints</span></a></h3><p>This device exposes 8 switches through endpoints l1-l8. Each switch can be controlled independently.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint"><span>Switch (l3 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint"><span>Switch (l4 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l5-endpoint"><span>Switch (l5 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l5</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l5&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l5&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l5&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l6-endpoint"><span>Switch (l6 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l6</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l6&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l6&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l6&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l7-endpoint"><span>Switch (l7 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l7</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l7&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l7&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l7&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l8-endpoint"><span>Switch (l8 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l8</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l8&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l8&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l8&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p>',22))])}]]),d=JSON.parse('{"path":"/devices/TS0601_switch_8.html","title":"Tuya TS0601_switch_8 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_switch_8 control via MQTT","description":"Integrate your Tuya TS0601_switch_8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:09:29.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/TS0601_switch_8.md"}')}}]);