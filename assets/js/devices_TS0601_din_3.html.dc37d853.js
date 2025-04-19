"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98142],{44216:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>r,data:()=>n});var a=o(6254);const d={},r=(0,o(15356).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[9]||(t[9]=(0,a.Lk)("h1",{id:"tuya-ts0601-din-3",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-din-3"},[(0,a.Lk)("span",null,"Tuya TS0601_din_3")])],-1)),(0,a.Lk)("table",null,[t[7]||(t[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TS0601_din_3")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee DIN energy meter")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), energy, produced_energy, power, voltage, current, fault, threshold_1, threshold_1_protection, threshold_1_value, threshold_2, threshold_2_protection, threshold_2_value, clear_fault, meter_id")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_din_3.png",alt:"Tuya TS0601_din_3"})])],-1)),t[6]||(t[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"XOCA DAC2161C")],-1))])]),t[10]||(t[10]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,a.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Sum of produced energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="fault-enum" tabindex="-1"><a class="header-anchor" href="#fault-enum"><span>Fault (enum)</span></a></h3><p>Fault status of the device (clear = nothing). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>clear</code>, <code>over_current_threshold</code>, <code>over_power_threshold</code>, <code>over_voltage threshold</code>, <code>wrong_frequency_threshold</code>.</p><h3 id="threshold-1-enum" tabindex="-1"><a class="header-anchor" href="#threshold-1-enum"><span>Threshold 1 (enum)</span></a></h3><p>State of threshold_1. Value can be found in the published state on the <code>threshold_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_set</code>, <code>over_current_threshold</code>, <code>over_voltage_threshold</code>.</p><h3 id="threshold-1-protection-binary" tabindex="-1"><a class="header-anchor" href="#threshold-1-protection-binary"><span>Threshold 1 protection (binary)</span></a></h3><p>OFF - alarm only, ON - relay will be off when threshold reached. Value can be found in the published state on the <code>threshold_1_protection</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> threshold 1 protection is ON, if <code>OFF</code> OFF.</p><h3 id="threshold-1-value-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-1-value-numeric"><span>Threshold 1 value (numeric)</span></a></h3><p>Can be in Volt or Ampere depending on threshold setting. Setup the value on the device. Value can be found in the published state on the <code>threshold_1_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="threshold-2-enum" tabindex="-1"><a class="header-anchor" href="#threshold-2-enum"><span>Threshold 2 (enum)</span></a></h3><p>State of threshold_2. Value can be found in the published state on the <code>threshold_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_set</code>, <code>over_current_threshold</code>, <code>over_voltage_threshold</code>.</p><h3 id="threshold-2-protection-binary" tabindex="-1"><a class="header-anchor" href="#threshold-2-protection-binary"><span>Threshold 2 protection (binary)</span></a></h3><p>OFF - alarm only, ON - relay will be off when threshold reached. Value can be found in the published state on the <code>threshold_2_protection</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> threshold 2 protection is ON, if <code>OFF</code> OFF.</p><h3 id="threshold-2-value-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-2-value-numeric"><span>Threshold 2 value (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>threshold_2_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="clear-fault-binary" tabindex="-1"><a class="header-anchor" href="#clear-fault-binary"><span>Clear fault (binary)</span></a></h3><p>Turn ON to clear last the fault. Value can be found in the published state on the <code>clear_fault</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_fault&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> clear fault is ON, if <code>OFF</code> OFF.</p><h3 id="meter-id-text" tabindex="-1"><a class="header-anchor" href="#meter-id-text"><span>Meter id (text)</span></a></h3><p>Meter ID (ID of device). Value can be found in the published state on the <code>meter_id</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',32))])}]]),n=JSON.parse('{"path":"/devices/TS0601_din_3.html","title":"Tuya TS0601_din_3 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_din_3 control via MQTT","description":"Integrate your Tuya TS0601_din_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-01T15:36:38.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/TS0601_din_3.md"}')}}]);