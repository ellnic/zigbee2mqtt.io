"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85817],{9632:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>d});var o=i(6254);const a={},n=(0,i(15356).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"tuya-zg-205z-a",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#tuya-zg-205z-a"},[(0,o.Lk)("span",null,"Tuya ZG-205Z/A")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"ZG-205Z/A")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"5.8Ghz/24Ghz Human presence sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"presence, illuminance, large_motion_detection_sensitivity, large_motion_detection_distance, motion_state, fading_time, medium_motion_detection_distance, medium_motion_detection_sensitivity, indicator, small_detection_distance, small_detection_sensitivity")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-205Z-A.png",alt:"Tuya ZG-205Z/A"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To start pairing, press the button (pinhole on the side of the device) using a pin/paperclip for approx. 5 seconds. The led will turn on, then start blinking while the pairing process is in progress.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="large-motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#large-motion-detection-sensitivity-numeric"><span>Large motion detection sensitivity (numeric)</span></a></h3><p>Motion detection sensitivity. Value can be found in the published state on the <code>large_motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;large_motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="large-motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#large-motion-detection-distance-numeric"><span>Large motion detection distance (numeric)</span></a></h3><p>Motion detection distance. Value can be found in the published state on the <code>large_motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;large_motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="motion-state-enum" tabindex="-1"><a class="header-anchor" href="#motion-state-enum"><span>Motion state (enum)</span></a></h3><p>State of the motion. Value can be found in the published state on the <code>motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>huge</code>, <code>gigantic</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric"><span>Fading time (numeric)</span></a></h3><p>For how much time presence should stay true after detecting it. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>28800</code>. The unit of this value is <code>s</code>.</p><h3 id="medium-motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#medium-motion-detection-distance-numeric"><span>Medium motion detection distance (numeric)</span></a></h3><p>Medium motion detection distance. Value can be found in the published state on the <code>medium_motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;medium_motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="medium-motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#medium-motion-detection-sensitivity-numeric"><span>Medium motion detection sensitivity (numeric)</span></a></h3><p>Medium motion detection sensitivity. Value can be found in the published state on the <code>medium_motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;medium_motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="indicator-binary" tabindex="-1"><a class="header-anchor" href="#indicator-binary"><span>Indicator (binary)</span></a></h3><p>LED Indicator. Value can be found in the published state on the <code>indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> indicator is ON, if <code>OFF</code> OFF.</p><h3 id="small-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#small-detection-distance-numeric"><span>Small detection distance (numeric)</span></a></h3><p>Small detection distance. Value can be found in the published state on the <code>small_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="small-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#small-detection-sensitivity-numeric"><span>Small detection sensitivity (numeric)</span></a></h3><p>Small detection sensitivity. Value can be found in the published state on the <code>small_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p>',24))])}]]),d=JSON.parse('{"path":"/devices/ZG-205Z_A.html","title":"Tuya ZG-205Z/A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZG-205Z/A control via MQTT","description":"Integrate your Tuya ZG-205Z/A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-26T06:45:18.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/ZG-205Z_A.md"}')}}]);