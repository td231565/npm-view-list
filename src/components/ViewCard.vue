<template>
  <div class="c-list--card">
    <div v-for="(item, idx) in modifiedData" :key="`item-${idx}`"
      class="c-list__item"
      :class="{ skeleton: item.skeleton }"
      @click="doAction('click', idx)">
      <!-- 圖片 -->
      <div class="c-list__item__image" :style="`background-image: url(${item.image.value})`" v-if="item.image">
        <div class="c-list__item__image__cover" v-if="isShowAction">
          <div class="c-list__item__action">
            <fa-icon icon="edit" class="c-list__item__action__icon"
              @click.stop="doAction('edit', idx)"
              v-if="editable" />
            <fa-icon icon="trash" class="c-list__item__action__icon"
              @click.stop="doAction('delete', idx)"
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
    <i class="c-list--card__barrel" aria-hidden="true" v-for="num in 8" :key="num"></i>
  </div>
</template>

<script>
import parseFunc from './utils/listDataParser'

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
  computed: {
    modifiedData () {
      return parseFunc(this.config, this.data)
    }
  },
  methods: {
    /**
     * 自訂action
     * @param {String} action 觸發的行為
     * @param {Number} idx 被點擊物件在原陣列的索引
     */
    doAction (action, idx) {
      const returnValue = this.modifiedData[idx].event
        ? this.modifiedData[idx].event.value
        : this.data[idx]
      this.$emit(`on-${action}`, returnValue, idx)
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>
