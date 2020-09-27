<template>
  <div class="c-list">
    <!-- 切換VIEW -->
    <div class="c-list__control" v-if="switchView">
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
        :data="modifiedData"
        :editable="editable"
        :deletable="deletable"
        @on-action="doAction" />
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
    switchView: { // 顯示切換檢視按鈕
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
    },
    modifiedData () {
      // 第一次讀取時顯示預設畫面，避免整個畫面空白
      const skeletonItem = { image: { value: ' ' }, title: { value: ' ' }, skeleton: true }
      const defaultData = Array(10).fill(skeletonItem)
      return this.data.length > 0 ? this.data.map(item => this.parseConfig(this.config, item)) : defaultData
    }
  },
  methods: {
    /**
     * 分析使用者設定檔並產生對應資料
     * @param {Object} config 使用者設定檔
     * @param {Object} itemData 子項目物件資料
     */
    parseConfig (config, itemData) {
      const result = {}
      Object.keys(config).forEach(area => {
        const areaType = typeof config[area]
        // 會接到 4 種可能型態
        switch (areaType) {
          case 'string': {
            // STR: 對應單一 KEY 內容
            const keyName = config[area]
            result[area] = { value: itemData[keyName] }
            break
          }
          case 'object': {
            const areaConfig = config[area]
            // ARR: 暫時只處理 footer area
            if (Array.isArray(areaConfig)) {
              if (area !== 'footer') { return }
              const itemList = config[area]
              result[area] = itemList.map(item => {
                const renderFunc = item.render
                return {
                  name: item.name,
                  value: renderFunc ? renderFunc(itemData) : itemData[item.key]
                }
              })
            } else if (areaConfig.render) {
              // FUNC: RENDER 方法，回傳值須為字串，可以是模板字串
              const renderFunc = areaConfig.render
              result[area] = { value: renderFunc(itemData) }
            } else {
              // OBJ: 包含 KEY 及設定
              const areaConfig = config[area]
              result[area] = { ...areaConfig, value: itemData[areaConfig.key] }
            }
            break
          }
          default:
            // 傳入不認識的東西
            throw new Error(`property ${area} got invalid value`)
        }
      })
      // 整理後的物件資料
      return { ...result, data: itemData }
    },
    /**
     * [@emit] 自訂action: 回傳 action, 被點擊的物件資料
     * @param {String} action 動作類型
     * @param {Number} index 被點擊的物件在原陣列的index
     */
    doAction (action, index) {
      this.$emit(`on-${action}`, this.data[index], index)
    }
  },
  created () {
    this.currentViewType = this.defaultView
  }
}
</script>

<style lang="scss">
@import "../assets/style.scss";
</style>
