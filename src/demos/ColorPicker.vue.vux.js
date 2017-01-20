<template>
  <div>
    <div style="padding: 15px;">
      <color-picker :colors="colors1" v-model="color1"></color-picker>
      <br>
      <color-picker :colors="colors1" v-model="color1" size="middle"></color-picker>
    </div>
    <group title="as a cell's content">
      <cell :title="'Color:' + color1">
        <color-picker slot="value" :colors="colors1" v-model="color1" size="small"></color-picker>
      </cell>
    </group>
    <group title="a cell without title">
      <cell primary="content">
        <color-picker slot="value" :colors="colors1" v-model="color1" size="middle"></color-picker>
      </cell>
    </group>
  </div>
</template>

<script>
import ColorPicker from '../components/color-picker/index.vue'
import Group from '../components/group/index.vue'
import Cell from '../components/cell/index.vue'


export default {
  components: {
    ColorPicker,
    Group,
    Cell
  },
  data () {
    return {
      color1: '#FFEF7D',
      colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff']
    }
  }
}
</script>
