<template>
  <div class="c-list">
    <!-- 切換VIEW -->
    <div class="c-list__control">
      <span v-for="item in viewTypes" :key="item.name"
        class="c-list__switcher"
        :class="{ 'c-list__switcher--selected': currentViewType === item.name }"
        @click="currentViewType = item.name">
        <fa-icon :icon="item.icon" />
      </span>
    </div>
    <!-- VIEW -->
    <transition name="fade" mode="out-in">
      <component :is="currentView"
        :config="config"
        :data="data"
        :editable="editable"
        :deletable="deletable"
        @on-click="doClick"
        @on-edit="doEdit"
        @on-delete="doDelete" />
    </transition>
  </div>
</template>

<script>
import ViewCard from './ViewCard'
import ViewRow from './ViewRow'

export default {
  name: 'mvList',
  components: {
    'card': ViewCard,
    'row': ViewRow
  },
  props: {
    config: { // 使用者對欄位的設定
      type: Object,
      required: true
    },
    data: { // 傳入的原始資料
      type: Array,
      required: true
    },
    editable: { // 顯示編輯按鈕
      type: Boolean,
      default: true
    },
    deletable: { // 顯示刪除按鈕
      type: Boolean,
      default: true
    },
    defaultView: { // 預設檢視方式
      type: String,
      default: 'row'
    }
  },
  data () {
    return {
      currentViewType: '',
      viewTypes: [
        { name: 'card', icon: 'th-large' },
        { name: 'row', icon: 'list' }
      ]
    }
  },
  computed: {
    currentView () {
      return this.viewTypes.find(v => v.name === this.currentViewType).name
    }
  },
  methods: {
    /**
     * [@emit] custom action
     * @param {Object} eventReturnValue event's custom return value, default is original data.
     * @param {Number} idx original data's index of source data array
     */
    doClick (eventReturnValue, idx) {
      this.$emit('on-click', eventReturnValue, idx)
    },
    doEdit (eventReturnValue, idx) {
      this.$emit('on-edit', eventReturnValue, idx)
    },
    doDelete (eventReturnValue, idx) {
      this.$emit('on-delete', eventReturnValue, idx)
    },
  },
  created () {
    this.currentViewType = this.defaultView
  }
}
</script>

<style lang="scss">
@import "../assets/style.scss";
</style>
