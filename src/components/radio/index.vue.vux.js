<template>
  <div class="weui_cells_radio">
    <label class="weui_cell weui_cell_radio weui_check_label" :for="`radio_${uuid}_${index}`" v-for="(one, index) in options">
      <div class="weui_cell_bd weui_cell_primary">
        <p>{{one | getValue}}</p>
      </div>
      <div class="weui_cell_ft">
        <input type="radio" class="weui_check" v-model="currentValue" :id="`radio_${uuid}_${index}`" :value="getKey(one)">
        <span class="weui_icon_checked"></span>
      </div>
    </label>
    <div class="weui_cell" v-show="fillMode">
      <div class="weui_cell_hd"><label for="" class="weui_label">{{fillLabel}}</label></div>
      <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input needsclick" type="text" v-model="fillValue" :placeholder="fillPlaceholder" @blur="isFocus=false" @focus="onFocus()">
      </div>
      <div class="weui_cell_ft" v-show="value==='' && !isFocus">
        <i class="weui_icon_warn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'
import { getValue, getKey } from '../checklist/object-filter'

export default {
  mixins: [Base],
  filters: {
    getValue,
    getKey
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: String,
    fillMode: {
      type: Boolean,
      default: false
    },
    fillPlaceholder: {
      type: String,
      default: '其他'
    },
    fillLabel: {
      type: String,
      default: '其他'
    }
  },
  mounted () {
    this.handleChangeEvent = true
  },
  methods: {
    getKey,
    onFocus () {
      this.currentValue = this.fillValue || ''
      this.isFocus = true
    }
  },
  watch: {
    currentValue (newVal) {
      var isOption = contains(this.options, newVal)
      if (newVal !== '' && isOption) {
        this.fillValue = ''
      }
      this.$emit('on-change', newVal)
      this.$emit('input', newVal)
    },
    fillValue (newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal
      }
    }
  },
  data () {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value
    }
  }
}

function contains (a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_check';
@import '../../styles/weui/widget/weui_cell/weui_form/weui_form_common';
@import '../../styles/weui/icon/weui_icon_font';
.weui_cell_radio > * {
  pointer-events: none;
}
</style>
