<template>
  <div>
    <form-preview :header-label="$t('付款金额')" header-value="¥2400.00" :bodyItems="list" :footer-buttons="buttons1"></form-preview>
    <br>
    <form-preview :header-label="$t('付款金额')" header-value="¥2400.00" :bodyItems="list" :footer-buttons="buttons2"></form-preview>
    <br>
    <form-preview :header-label="$t('付款金额')" header-value="¥2400.00" :bodyItems="list"></form-preview>
  </div>
</template>

<i18n>
付款金额:
  en: Total
标题标题:
  en: Item Title
商品:
  en: Product
很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字:
  en: Long Long Long Long Long Long Long Long Long Long Long Long Content
名字名字名字:
  en: Name Name
电动打蛋机:
  en: Item title
辅助操作:
  en: Info
操作:
  en: Action
</i18n>

<script>
import FormPreview from '../components/form-preview/index.vue'


export default {
  components: {
    FormPreview
  },
  data () {
    return {
      list: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: '操作'
      }],
      buttons2: [{
        style: 'primary',
        text: '操作'
      }]
    }
  }
}
</script>