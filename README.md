# @Multi-view-list/vue
[Demo Page](https://td231565.github.io/npm-view-list/)

## Dependency
* Font-Awesome 5

## UI
There are 2 view mode: row, card.

## Install
```
npm install mv-list
```

## Usage
``` javascript
// main.js

import 'mv-list/dist/multi-view-list.css'
import mvlist from 'mv-list'

Vue.use(mvlist)
```
``` javascript
// your-page.vue

<template>
  <mvList
    :config="listConfig"
    :data="listData"
    default-view="card"
    switch-view="true"
    @on-click="handleClick"
    @on-edit="handleEdit"
    @on-delete="handleDelete" />
</template>

<script>
export default {
  data () {
    return {
      listConfig: {
        // config
      },
      listData: [
        // source
      ]
    }
  }
}
</script>
```

#### List Props

Property        | Type    | Description              | Default | R/O  
--------------- | ------- | ------------------------ | ------- | --------  
config          | Object  |       User custom config |         | Required  
data            | Array   |              source data |         | Required  
editable        | Boolean |           show edit icon |  true   |  
deletable       | Boolean |         show delete icon |  true   |  
switch-view     | Boolean |       show view switcher |  true   |  
default-view    | String  | define initial view mode |  'list' |  

#### List Item Events
Event will return item's source data and it's index from source data array.

Event Name      | Description              | Return Value  
--------------- | ------------------------ | -------------  
on-click        |          click list item | Object, Number   
on-edit         |          click edit icon | Object, Number   
on-delete       |        click delete icon | Object, Number   

## Config
``` javascript
config: {  
    title: {  
        key: 'keyname', // refer to item data's key  
        align: 'left' // text-align: `left`, `center`,  `right`. default: left  
    },   
    image: 'keyname', // refer to item data's key  
    content: {  
        // if you set render function, ignore other attribute.  
        render: (params) => { // `params` is item data
          // do something   
          return `your result ${params.custom.attribute}` // need to be string or es6 template string   
        }  
    },  
    footer: [ // only footer use array. Name is the title for each value.   
        { name: 'Area', key: 'area' },  
        { name: 'Category',  
          render: (params) => params.category.join(', ')  
        }  
    ]  
}  
```
