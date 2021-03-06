<template>
  <div>
    <grid>
      <grid-item :label="$t('Grid')" v-for="i in 9">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
  </div>
</template>

<i18n>
Grid:
  zh-CN: 九宫格
</i18n>

<script>
import Grid from '../components/grid/grid.vue'
import GridItem from '../components/grid/grid-item.vue'


export default {
  components: {
    Grid,
    GridItem
  }
}
</script>
