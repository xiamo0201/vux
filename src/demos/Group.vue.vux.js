<template>
  <div>
    <group label-width="4em" label-margin-right="2em" label-align="right">
      <x-input title="上报人" v-model="value1"></x-input>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>
      <x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>
      <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
      <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
    </group>
  </div>
</template>

<script>
import Group from '../components/group/index.vue'
import Cell from '../components/cell/index.vue'
import XInput from '../components/x-input/index.vue'
import Selector from '../components/selector/index.vue'
import PopupPicker from '../components/popup-picker/index.vue'


export default {
  components: {
    Group,
    Cell,
    XInput,
    Selector,
    PopupPicker
  },
  data () {
    return {
      value1: '张三',
      value2: '工艺技术',
      value3: '',
      value4: '',
      value5: ['A'],
      list: [['A', 'B', 'C']]
    }
  }
}
</script>