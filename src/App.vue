<template>
  <div id="app">
    <List
      :config="listConfig"
      :data="listData"
      default-view="card"
      @on-click="handleClick"
      @on-edit="handleEdit"
      @on-delete="handleDelete" />
  </div>
</template>

<script>
import sourceData from '../static/data.json'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  },
  data () {
    return {
      listConfig: {
        // 傳入屬性可以是 STR(直接作為key)
        image: {
          render: (params) => params.images[0].src
        },
        // 也可以傳入物件
        title: {
          key: 'name',
          align: 'left'
        },
        content: {
          render: (params) => {
            const contentText = params.introduction.length > 100
              ? params.introduction.slice(0, 100).concat('...')
              : params.introduction
            return contentText
          }
        },
        footer: [
          { name: '地區', key: 'distric' },
          { name: '類別',
            render: (params) => params.category.map(c => c.name).slice(0, 3).join('、')
          }
        ],
        event: 'id'
      },
      listData: sourceData.data
    }
  },
  methods: {
    handleEdit () {
      alert('you click edit')
    },
    handleDelete () {
      alert('you click delete')
    },
    handleClick () {
      alert('you click item')
    }
  }
}
</script>
