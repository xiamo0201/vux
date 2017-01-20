<template>
  <div>
    <group>
      <x-switch title="Default popup" v-model="show"></x-switch>
      <x-switch title="Full popup" v-model="show1"></x-switch>
      <x-switch title="with a Scroller" v-model="show2"></x-switch>
      <x-switch title="Multi popup (first)" v-model="show3"></x-switch>
      <x-switch title="Mask disable" v-model="show5"></x-switch>
      <x-switch title="Popup address" v-model="show6"></x-switch>
    </group>
    
    <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
      <div class="popup0">
        <group>
          <x-switch title="Another XSwitcher" v-model="show"></x-switch>
          <x-switch title="Show Toast" v-model="showToast"></x-switch>
        </group>
      </div>
    </popup>

    <toast v-model="showToast">You did it!</toast>

    <popup v-model="show1" height="100%">
      <div class="popup1">
        <group>
          <x-switch title="Another XSwitcher" v-model="show1"></x-switch>
        </group>
      </div>
    </popup>

    <popup v-model="show2" height="200px" @on-first-show="resetScroller">
      <scroller height="100px" lock-x style="border:1px solid red;" ref="scroller">
        <div>
          <p v-for="i of 10">{{i}}</p>
        </div>
      </scroller>
    </popup>

    <popup v-model="show3">
      <div class="popup2">
        <group>
          <x-switch title="Multi Popup (first)" v-model="show3"></x-switch>
          <x-switch title="Multi Popup (second)" v-model="show4"></x-switch>
        </group>
        this is the first popup
      </div>
    </popup>

    <popup v-model="show4">
      <div class="popup2">
        <group>
          <x-switch title="Multi Popup (second)" v-model="show4"></x-switch>
        </group>
        this is the second popup
      </div>
    </popup>

    <popup v-model="show5" :hide-on-blur=false>
      <div class="popup2">
        <group>
          <x-switch title="Mask disable" v-model="show5"></x-switch>
        </group>
        The mask cannot be clicked!
      </div>
    </popup>

    <popup v-model="show6">
      <div class="popup1">
        <group>
          <x-switch title="Popup address" v-model="show6"></x-switch>
        </group>
        <group>
          <x-address :title="title6" v-model="value6" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder"></x-address>
        </group>
      </div>
    </popup>

  </div>
</template>

<script>
import Popup from '../components/popup/index.vue'
import Group from '../components/group/index.vue'
import XSwitch from '../components/x-switch/index.vue'
import Scroller from '../components/scroller/index.vue'
import Toast from '../components/toast/index.vue'
import XAddress from '../components/x-address/index.vue'
import ChinaAddressData from '../datas/china_address.json'


export default {
  components: {
    Popup,
    Group,
    XSwitch,
    Scroller,
    Toast,
    XAddress
  },
  data () {
    return {
      addressData: ChinaAddressData,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value6: [],
      showToast: false
    }
  },
  methods: {
    resetScroller () {
      this.$refs.scroller.reset()
    },
    log (str) {
      console.log(str)
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
</style>
