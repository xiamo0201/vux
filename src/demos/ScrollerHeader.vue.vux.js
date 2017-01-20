<template>
  <div class="vux-scroller-header-box">
    <div style="height:46px;">
     <x-header class="vux-scroller-header">I'm header</x-header>
    </div>
    <scroller lock-x ref="scroller" :height="-108+'px'">
      <div class="box2">
        <p v-for="i in 80">placeholder {{i}}</p>
      </div>
    </scroller>
  </div>
</template>

<script>
import Scroller from '../components/scroller/index.vue'
import XHeader from '../components/x-header/index.vue'


export default {
  components: {
    Scroller,
    XHeader
  },
  ready () {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
    })
  }
}
</script>
