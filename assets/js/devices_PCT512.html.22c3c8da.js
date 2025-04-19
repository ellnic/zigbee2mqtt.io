"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15957],{12463:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>d});var c=o(6254);const a={},i=(0,o(15356).A)(a,[["render",function(e,t){const o=(0,c.g2)("RouteLink");return(0,c.uX)(),(0,c.CE)("div",null,[t[8]||(t[8]=(0,c.Lk)("h1",{id:"owon-pct512",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#owon-pct512"},[(0,c.Lk)("span",null,"OWON PCT512")])],-1)),(0,c.Lk)("table",null,[t[6]||(t[6]=(0,c.Lk)("thead",null,[(0,c.Lk)("tr",null,[(0,c.Lk)("th"),(0,c.Lk)("th")])],-1)),(0,c.Lk)("tbody",null,[t[2]||(t[2]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Model"),(0,c.Lk)("td",null,"PCT512")],-1)),(0,c.Lk)("tr",null,[t[1]||(t[1]=(0,c.Lk)("td",null,"Vendor",-1)),(0,c.Lk)("td",null,[(0,c.bF)(o,{to:"/supported-devices/#v=OWON"},{default:(0,c.k6)((()=>t[0]||(t[0]=[(0,c.eW)("OWON")]))),_:1})])]),t[3]||(t[3]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Description"),(0,c.Lk)("td",null,"Thermostat")],-1)),t[4]||(t[4]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Exposes"),(0,c.Lk)("td",null,"climate (system_mode, local_temperature, running_state, occupied_heating_setpoint), occupancy, humidity")],-1)),t[5]||(t[5]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Picture"),(0,c.Lk)("td",null,[(0,c.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PCT512.png",alt:"OWON PCT512"})])],-1))])]),t[9]||(t[9]=(0,c.Lk)("h2",{id:"options",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#options"},[(0,c.Lk)("span",null,"Options")])],-1)),(0,c.Lk)("p",null,[(0,c.Lk)("em",null,[(0,c.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,c.k6)((()=>t[7]||(t[7]=[(0,c.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,c.Fv)('<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>local_temperature</code>, <code>running_state</code>, <code>occupied_heating_setpoint</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>heat</code>, <code>idle</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>',9))])}]]),d=JSON.parse('{"path":"/devices/PCT512.html","title":"OWON PCT512 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OWON PCT512 control via MQTT","description":"Integrate your OWON PCT512 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/PCT512.md"}')}}]);