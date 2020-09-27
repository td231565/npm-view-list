<template>
  <div class="c-list--card">
    <div v-for="(item, idx) in data" :key="`item-${idx}`"
      class="c-list__item"
      :class="{ skeleton: item.skeleton }"
      @click="doAction('click', idx)">
      <!-- 圖片 -->
      <div class="c-list__item__image" :style="`background-image: url(${item.image.value})`" v-if="item.image">
        <div class="c-list__item__image__cover" v-if="isShowAction">
          <div class="c-list__item__action">
            <fa-icon icon="edit" class="c-list__item__action__icon"
              @click="doAction('edit', idx)"
              v-if="editable" />
            <fa-icon icon="trash" class="c-list__item__action__icon"
              @click="doAction('delete', idx)"
              v-if="deletable" />
          </div>
        </div>
      </div>
      <!-- 資訊 -->
      <h3 class="c-list__item__title mt-1"
        :style="`text-align: ${item.title.align || 'left'}`"
        v-if="item.title">{{ item.title.value }}</h3>
      <div class="c-list__item__footer mt-1" v-if="item.footer">
        <span v-for="(footerItem, idx) in item.footer" :key="`foot-${idx}`"
        >{{ footerItem.value }}{{ idx !== item.footer.length - 1 ? ' | ' : '' }}</span>
      </div>
    </div>
    <!-- 用來處理最後一行卡片數量不足，約建立一行最多可能的數量 -->
    <i class="c-list--card__barrel" aria-hidden="true" v-for="num in 6" :key="num"></i>
  </div>
</template>

<script>
export default {
  name: 'ViewCard',
  props: {
    config: {
      type: Object
    },
    data: {
      type: Array
    },
    editable: { // 顯示編輯按鈕
      type: Boolean,
      default: true
    },
    deletable: { // 顯示刪除按鈕
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isShowAction: this.editable || this.deletable
    }
  },
  methods: {
    /**
     * 自訂action: 回傳 action, 被點擊的物件資料
     * @param {String} action 動作類型
     * @param {Number} index 被點擊的物件在原陣列的index
     */
    doAction (action, index) {
      this.$emit(`on-action`, action, index)
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>
