"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52521],{97782:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>d,data:()=>s});var i=a(6254);const o={},d=(0,a(15356).A)(o,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"tuya-ts0601-soil-2",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-soil-2"},[(0,i.Lk)("span",null,"Tuya TS0601_soil_2")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS0601_soil_2")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Soil sensor")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"soil_moisture, temperature, temperature_f, temperature_sensitivity, humidity_sensitivity, temperature_alarm, humidity_alarm, max_temperature_alarm, min_temperature_alarm, max_humidity_alarm, min_humidity_alarm, schedule_periodic, battery, battery_state")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_soil_2.png",alt:"Tuya TS0601_soil_2"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric"><span>Soil moisture (numeric)</span></a></h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Soil temperature. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-10</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-f-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-f-numeric"><span>Temperature f (numeric)</span></a></h3><p>Soil temperature. Value can be found in the published state on the <code>temperature_f</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>14</code> and the maximum value is <code>140</code>. The unit of this value is <code>°F</code>.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric"><span>Temperature sensitivity (numeric)</span></a></h3><p>Temperature sensitivity. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0.3</code> and the maximum value is <code>1</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-sensitivity-numeric"><span>Humidity sensitivity (numeric)</span></a></h3><p>Humidity sensitivity. Value can be found in the published state on the <code>humidity_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-alarm-enum" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-enum"><span>Temperature alarm (enum)</span></a></h3><p>Temperature alarm state. Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>lower_alarm</code>, <code>upper_alarm</code>, <code>cancel</code>.</p><h3 id="humidity-alarm-enum" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-enum"><span>Humidity alarm (enum)</span></a></h3><p>Humidity alarm state. Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>lower_alarm</code>, <code>upper_alarm</code>, <code>cancel</code>.</p><h3 id="max-temperature-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-alarm-numeric"><span>Max temperature alarm (numeric)</span></a></h3><p>Upper temperature limit. Value can be found in the published state on the <code>max_temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-alarm-numeric"><span>Min temperature alarm (numeric)</span></a></h3><p>Lower temperature limit. Value can be found in the published state on the <code>min_temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-humidity-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#max-humidity-alarm-numeric"><span>Max humidity alarm (numeric)</span></a></h3><p>Upper humidity limit. Value can be found in the published state on the <code>max_humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_humidity_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="min-humidity-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#min-humidity-alarm-numeric"><span>Min humidity alarm (numeric)</span></a></h3><p>Lower humidity limit. Value can be found in the published state on the <code>min_humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_humidity_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="schedule-periodic-numeric" tabindex="-1"><a class="header-anchor" href="#schedule-periodic-numeric"><span>Schedule periodic (numeric)</span></a></h3><p>Report sensitivity. Value can be found in the published state on the <code>schedule_periodic</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_periodic&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum"><span>Battery state (enum)</span></a></h3><p>State of the battery. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p>',30))])}]]),s=JSON.parse('{"path":"/devices/TS0601_soil_2.html","title":"Tuya TS0601_soil_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_soil_2 control via MQTT","description":"Integrate your Tuya TS0601_soil_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/TS0601_soil_2.md"}')}}]);