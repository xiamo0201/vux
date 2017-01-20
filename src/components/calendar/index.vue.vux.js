<template>
  <div>
    <cell :title="title" primary="content" :value="currentValue" @click.native="onClick" is-link></cell>
    <popup v-model="show">
      <inline-calendar
      v-model="currentValue"
      @on-change="onSelect"
      :render-month="renderMonth"
      :start-date="startDate"
      :end-date="endDate"
      :show-last-month="showLastMonth"
      :show-next-month="showNextMonth"
      :highlight-weekend="highlightWeekend"
      :return-six-rows="returnSixRows"
      :hide-header="hideHeader"
      :hide-week-list="hideWeekList"
      :replace-text-list="replaceTextList"
      :weeks-list="weeksList"
      :custom-slot-fn="customSlotFn"
      :render-on-value-change="renderOnValueChange"
      :disable-past="disablePast"
      :disable-future="disableFuture"
      ></inline-calendar>
    </popup>
  </div>
</template>

<script>
import InlineCalendar from '../inline-calendar'
import Popup from '../popup'
import Cell from '../cell'
import props from '../inline-calendar/props'

const Props = props()
Props.title = {
  type: String,
  required: true
}

export default {
  components: {
    InlineCalendar,
    Popup,
    Cell
  },
  created () {
    this.currentValue = this.value
  },
  props: Props,
  methods: {
    onClick () {
      this.show = true
    },
    onSelect (val) {
      this.show = false
      this.currentValue = val
      this.$emit('on-change', val)
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  data () {
    return {
      show: false,
      currentValue: ''
    }
  }
}
</script>