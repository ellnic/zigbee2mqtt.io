"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55002],{81361:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>s});var a=o(6254);const i={},d=(0,o(15356).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"efekta-efekta-eth-pow-e-lr",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-eth-pow-e-lr"},[(0,a.Lk)("span",null,"EFEKTA EFEKTA_eTH_POW_E_LR")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EFEKTA_eTH_POW_E_LR")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=EFEKTA"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature and humidity smart sensor with with e-ink display")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"temperature, humidity, mains_voltage, battery, battery_low, reading_interval, tx_radio_power, comparison_previous_data, invert, fastmode")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_eTH_POW_E_LR.png",alt:"EFEKTA EFEKTA_eTH_POW_E_LR"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="mains-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#mains-voltage-numeric"><span>Mains voltage (numeric)</span></a></h3><p>Mains voltage. Value can be found in the published state on the <code>mains_voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Empty battery indicator. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="reading-interval-numeric" tabindex="-1"><a class="header-anchor" href="#reading-interval-numeric"><span>Reading interval (numeric)</span></a></h3><p>Setting the sensor reading interval in seconds, by default 40 seconds. Value can be found in the published state on the <code>reading_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reading_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>300</code>. The unit of this value is <code>sec</code>.</p><h3 id="tx-radio-power-enum" tabindex="-1"><a class="header-anchor" href="#tx-radio-power-enum"><span>Tx radio power (enum)</span></a></h3><p>Set TX Radio Power, dbm. Value can be found in the published state on the <code>tx_radio_power</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tx_radio_power&quot;: NEW_VALUE}</code>. The possible values are: <code>4dbm</code>, <code>19dbm</code>.</p><h3 id="comparison-previous-data-binary" tabindex="-1"><a class="header-anchor" href="#comparison-previous-data-binary"><span>Comparison previous data (binary)</span></a></h3><p>Enable сontrol of comparison with previous data. Value can be found in the published state on the <code>comparison_previous_data</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comparison_previous_data&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> comparison previous data is ON, if <code>OFF</code> OFF.</p><h3 id="invert-enum" tabindex="-1"><a class="header-anchor" href="#invert-enum"><span>Invert (enum)</span></a></h3><p>Invert display color. Value can be found in the published state on the <code>invert</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert&quot;: NEW_VALUE}</code>. The possible values are: <code>BW</code>, <code>WB</code>.</p><h3 id="fastmode-enum" tabindex="-1"><a class="header-anchor" href="#fastmode-enum"><span>Fastmode (enum)</span></a></h3><p>Display refresh mode. Value can be found in the published state on the <code>fastmode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fastmode&quot;: NEW_VALUE}</code>. The possible values are: <code>Fast</code>, <code>Ultra Fast</code>.</p>',22))])}]]),s=JSON.parse('{"path":"/devices/EFEKTA_eTH_POW_E_LR.html","title":"EFEKTA EFEKTA_eTH_POW_E_LR control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_eTH_POW_E_LR control via MQTT","description":"Integrate your EFEKTA EFEKTA_eTH_POW_E_LR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-18T14:54:46.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/EFEKTA_eTH_POW_E_LR.md"}')}}]);