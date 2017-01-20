<template>
  <div>
    <p style="padding:15px;">
      <span>Normal Usage</span>
      <clocker :time="time1"></clocker>
    </p>

    <group title="Use in cell">
      <cell title="Date:0801">
        <clocker time="2017-08-01" slot="value"></clocker>
      </cell>
    </group>

    <group title="custom template">
      <cell title="Date:0801">
        <clocker time="2017-08-01" slot="value">
          <span style="color:red">%D 天</span>
          <span style="color:green">%H 小时</span>
          <span style="color:blue">%M 分 %S 秒</span>
        </clocker>
      </cell>
      <cell title="20180808">
        <clocker time="2018-08-08" slot="value">
          <span class="day">%_D1</span>
          <span class="day">%_D2</span>天
          <span class="day">%_H1</span>
          <span class="day">%_H2</span>时
          <span class="day">%_M1</span>
          <span class="day">%_M2</span>分
          <span class="day">%_S1</span>
          <span class="day">%_S2</span>秒
        </clocker>
      </cell>
    </group>

  </div>
</template>

<script>
import Clocker from '../components/clocker/index.vue'
import Cell from '../components/cell/index.vue'
import Group from '../components/group/index.vue'


export default {
  components: {
    Clocker,
    Cell,
    Group
  },
  ready () {
    setTimeout(() => {
      this.time1 = '2017-08-13 22:54'
    }, 5000)
  },
  data () {
    return {
      time1: '2017-07-13 21:54'
    }
  }
}
</script>

<style scoped>
.day {
  background-color:#000;
  color:#fff;
  text-align:center;
  display:inline-block;
  padding:0 3px;
  border-radius:3px;
}
</style>
