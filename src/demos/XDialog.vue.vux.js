<template>
  <div style="height: 1000px">
    <group>
      <x-switch v-model="show" title="Toggle"></x-switch>
    </group>
    <group style="padding-top: 300px">
      <x-switch v-model="showNoScroll" title="背景不可滚动"></x-switch>
    </group>
    <x-dialog v-model="show" class="dialog-demo">
      <p class="dialog-title">I'm a bg scroll Dialog.</p>
      <div class="img-box">
        <img src="../assets/demo/dialog/01.jpg" style="max-width:100%">
      </div>
      <span class="vux-close" @click="show=false"></span>
    </x-dialog>
    <x-dialog v-model="showNoScroll" class="dialog-demo" :scroll="false">
      <p class="dialog-title">I'm a no scroll Dialog.</p>
      <div class="img-box">
        <img src="../assets/demo/dialog/01.jpg" style="max-width:100%">
      </div>
      <span class="vux-close" @click="showNoScroll=false"></span>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../components/x-dialog/index.vue'
import XButton from '../components/x-button/index.vue'
import Group from '../components/group/index.vue'
import XSwitch from '../components/x-switch/index.vue'


export default {
  components: {
    XDialog,
    XButton,
    Group,
    XSwitch
  },
  ready () {
    setTimeout(() => {
      this.show = true
    }, 10)
  },
  data () {
    return {
      show: false,
      showNoScroll: false
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close';
.dialog-demo {
  .weui_dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>
