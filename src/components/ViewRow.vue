<template>
  <div class="c-list--list">
    <div v-for="(item, idx) in data" :key="`item-${idx}`"
      class="c-list__item"
      :class="{ skeleton: item.skeleton }"
      @click="doAction('click', idx)">
      <!-- 圖片 -->
      <div class="c-list__item__image"
        :style="`background-image: url(${item.image.value})`"
        v-if="item.image"></div>
      <!-- 資訊 -->
      <div class="c-list__item__main ml-4">
        <div class="c-list__item__title">
          <h2 :style="`text-align: ${item.title.align || 'left'}`" v-if="item.title">{{ item.title.value }}</h2>
          <div class="mt-1" v-html="item.content.value" v-if="item.content"></div>
        </div>
        <div class="c-list__item__footer mt-1" v-if="item.footer">
          <p>
            <span v-for="(footerItem, idx) in item.footer" :key="`foot-${idx}`"
            >{{ footerItem.name }}：{{ footerItem.value }}{{ idx !== item.footer.length - 1 ? ' | ' : '' }}</span>
          </p>
          <div class="c-list__item__action" v-if="isShowAction">
            <fa-icon icon="edit" class="c-list__item__action__icon mr-1"
              @click="doAction('edit', idx)" v-if="editable" />
            <fa-icon icon="trash" class="c-list__item__action__icon"
              @click="doAction('delete', idx)" v-if="deletable" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewList',
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
