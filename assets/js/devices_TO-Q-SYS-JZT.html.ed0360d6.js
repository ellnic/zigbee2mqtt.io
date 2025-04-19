"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66670],{88349:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>r,data:()=>d});var a=t(6254);const c={},r=(0,t(15356).A)(c,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"tongou-to-q-sys-jzt",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tongou-to-q-sys-jzt"},[(0,a.Lk)("span",null,"Tongou TO-Q-SYS-JZT")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TO-Q-SYS-JZT")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Tongou"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Tongou")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Din rail smart meter")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power, current, voltage, energy, ac_frequency, power_factor, temperature, event, over_current_setting, over_current_threshold, over_voltage_setting, over_voltage_threshold, under_voltage_setting, under_voltage_threshold, temperature_setting, temperature_threshold, over_power_setting, over_power_threshold, test1, test5")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TO-Q-SYS-JZT.png",alt:"Tongou TO-Q-SYS-JZT"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>ac_frequency_calibration</code>: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>ac_frequency_precision</code>: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Instantaneous measured power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Current temperature. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="event-enum" tabindex="-1"><a class="header-anchor" href="#event-enum"><span>Event (enum)</span></a></h3><p>Last event of the device. Value can be found in the published state on the <code>event</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>over_current_trip</code>, <code>over_power_trip</code>, <code>high_temp_trip</code>, <code>over_voltage_trip</code>, <code>under_voltage_trip</code>, <code>over_current_alarm</code>, <code>over_power_alarm</code>, <code>high_temp_alarm</code>, <code>over_voltage_alarm</code>, <code>under_voltage_alarm</code>, <code>remote_on</code>, <code>remote_off</code>, <code>manual_on</code>, <code>manual_off</code>, <code>leakage_trip</code>, <code>leakage_alarm</code>, <code>restore_default</code>, <code>automatic_closing</code>, <code>electricity_shortage</code>, <code>electricity_shortage_alarm</code>, <code>timing_switch_On</code>, <code>timing_switch_off</code>.</p><h3 id="over-current-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-current-setting-enum"><span>Over current setting (enum)</span></a></h3><p>Over current setting. Value can be found in the published state on the <code>over_current_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="over-current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-current-threshold-numeric"><span>Over current threshold (numeric)</span></a></h3><p>Setup the value on the device. Value can be found in the published state on the <code>over_current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>50</code>. The unit of this value is <code>A</code>.</p><h3 id="over-voltage-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-voltage-setting-enum"><span>Over voltage setting (enum)</span></a></h3><p>Over voltage setting. Value can be found in the published state on the <code>over_voltage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric"><span>Over voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>240</code> and the maximum value is <code>295</code>. The unit of this value is <code>V</code>.</p><h3 id="under-voltage-setting-enum" tabindex="-1"><a class="header-anchor" href="#under-voltage-setting-enum"><span>Under voltage setting (enum)</span></a></h3><p>Under voltage setting. Value can be found in the published state on the <code>under_voltage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric"><span>Under voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>90</code> and the maximum value is <code>220</code>. The unit of this value is <code>V</code>.</p><h3 id="temperature-setting-enum" tabindex="-1"><a class="header-anchor" href="#temperature-setting-enum"><span>Temperature setting (enum)</span></a></h3><p>Temperature setting. Value can be found in the published state on the <code>temperature_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-threshold-numeric"><span>Temperature threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>-25</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="over-power-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-power-setting-enum"><span>Over power setting (enum)</span></a></h3><p>Over power setting. Value can be found in the published state on the <code>over_power_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_power_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="over-power-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-power-threshold-numeric"><span>Over power threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>over_power_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_power_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1000</code> and the maximum value is <code>26000</code>. The unit of this value is <code>W</code>.</p><h3 id="test1-numeric" tabindex="-1"><a class="header-anchor" href="#test1-numeric"><span>Test1 (numeric)</span></a></h3><p>Value can be found in the published state on the <code>test1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="test5-numeric" tabindex="-1"><a class="header-anchor" href="#test5-numeric"><span>Test5 (numeric)</span></a></h3><p>Value can be found in the published state on the <code>test5</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',44))])}]]),d=JSON.parse('{"path":"/devices/TO-Q-SYS-JZT.html","title":"Tongou TO-Q-SYS-JZT control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tongou TO-Q-SYS-JZT control via MQTT","description":"Integrate your Tongou TO-Q-SYS-JZT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"git":{"updatedTime":1745099445000,"contributors":[{"name":"ellnic","username":"ellnic","email":"ellnic@ymail.com","commits":1,"url":"https://github.com/ellnic"}],"changelog":[{"hash":"d6c4778378c55ea953bedca27353ab77847bab9f","time":1745099445000,"email":"ellnic@ymail.com","author":"ellnic","message":"A few more"}]},"filePathRelative":"devices/TO-Q-SYS-JZT.md"}')}}]);