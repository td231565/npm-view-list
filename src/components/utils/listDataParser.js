const listDataParser = (() => {
  function convertAllDataArray (config, dataArray) {
    // 第一次讀取時顯示預設畫面，避免整個畫面空白
    const skeletonItem = { image: {}, title: {}, skeleton: true }
    const defaultData = Array(10).fill(skeletonItem)
    return dataArray.length > 0 ? dataArray.map(item => parseItemData(config, item)) : defaultData
  }
  function parseItemData (config, itemData) {
    const result = {}
    Object.keys(config).forEach(area => {
      // 傳進來的參數 1.沒有被模組使用 2.沒有值 -> 跳過
      const areaList = ['image', 'title', 'content', 'footer', 'event']
      if (!areaList.includes(area) || !config[area]) { return }
      // 會接到 4 種可能型態
      const areaType = typeof config[area]
      switch (areaType) {
        case 'string': {
          // 1. STR: 對應單一 KEY 內容
          const keyName = config[area]
          if (keyName) {
            result[area] = { value: itemData[keyName] }
          }
          break
        }
        case 'object': {
          const areaConfig = config[area]
          // 傳入 null 則跳過
          if (!areaConfig) { return }
          // 2. ARR: 暫時只處理 footer area
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
            // 3. FUNC: RENDER 方法，回傳值須為字串，可以是模板字串
            const renderFunc = areaConfig.render
            result[area] = { value: renderFunc(itemData) }
          } else {
            // 4. OBJ: 包含 KEY 及設定
            const areaConfig = config[area]
            if (areaConfig.key) {
              result[area] = { ...areaConfig, value: itemData[areaConfig.key] }
            }
          }
          break
        }
        default:
          // 傳入不認識的東西
          throw new Error(`property '${area}' expected string, object but got ${areaType}`)
      }
    })
    return result
  }
  return {
    convertAllDataArray
  }
})()

export default listDataParser.convertAllDataArray
