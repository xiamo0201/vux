<template>
  <div>
    <br>
    <x-progress :percent="percent1"></x-progress>
    <br>
    <box gap="10px">
      <x-progress :percent="percent2" :show-cancel="false"></x-progress>
    </box>
  </div>
</template>

<script>
import XProgress from '../components/x-progress/index.vue'
import Box from '../components/box/index.vue'


export default {
  components: {
    XProgress,
    Box
  },
  data () {
    return {
      percent1: 30,
      percent2: 60
    }
  }
}
</script>
