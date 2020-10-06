<template>
  <div class="c-list--list">
    <div v-for="(item, idx) in modifiedData" :key="`item-${idx}`"
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
              @click.stop="doAction('edit', idx)" v-if="editable" />
            <fa-icon icon="trash" class="c-list__item__action__icon"
              @click.stop="doAction('delete', idx)" v-if="deletable" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import parseFunc from './utils/listDataParser'

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
