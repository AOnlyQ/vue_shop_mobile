<template>
  <div class="popup">
    <van-search
      v-model="searchVal"
      show-action
      :placeholder="placeholderValue"
      @search="onSearch"
      @cancel="onCancel"
      @input="onInput"
    />
    <HistoryHot
      v-if="blockShow === 1"
      :searchHistoryData="searchHistoryData"
      :searchHotData="searchHotData"
    />
    <SearchTipsList
      v-else-if="blockShow === 2"
      :searchTipsArr="searchTipsArr"
    />
    <SearchProducts
      v-else
      :filterCategory="filterCategory"
      :goodsList="goodsList"
    />
  </div>
</template>
<script>
import HistoryHot from '@/components/HistoryHot'
import SearchTipsList from '@/components/SearchTipsList'
import SearchProducts from '@/components/SearchProducts'
import {
  GetPopupData,
  GetSearchTipsListData,
  GetSearchData
} from '@/request/api.js'
export default {
  components: { HistoryHot, SearchTipsList, SearchProducts },
  data () {
    return {
      searchVal: '',
      /*  blockShow决定区块展示，
            如果是1，展示历史记录和热门搜索 HistoryHot
            如果是2，展示搜索提示列表 SearchTipsList
            如果是3，展示搜索出来内容
        */
      blockShow: 1,
      placeholderValue: 'mo',
      searchHistoryData: [],
      searchHotData: [],
      searchTipsArr: [],
      // 搜索商品列表的数据
      goodsList: [],
      // 分类数据
      filterCategory: []
    }
  },
  created () {
    GetPopupData().then((res) => {
      if (res.errno === 0) {
        this.placeholderValue = res.data.defaultKeyword.keyword
        console.log('GetPopupData', res)
        this.searchHistoryData = res.data.historyKeywordList
        this.searchHotData = res.data.hotKeywordList
      }
    })
  },
  methods: {
    onSearch (val) {
      this.blockShow = 3
      GetSearchData({ keyword: val }).then((res) => {
        console.log('res', res)
        if (res.errno === 0) {
          this.goodsList = res.data.data
          let arr = res.data.filterCategory
          arr = JSON.parse(
            JSON.stringify(arr).replace(/name/g, 'text').replace(/id/g, 'value')
          )
          this.filterCategory = arr
        }
        console.log('this.filterCategory', this.filterCategory)
      })
    },
    onCancel () {
      this.$router.go(-1)
    },
    onInput (val) {
      this.blockShow = 2
      GetSearchTipsListData({ keyword: val }).then((res) => {
        // console.log('GetSearchTipsListData中res', res)
        if (res.errno === 0) {
          this.searchTipsArr = res.data
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  // background-color: #ccc;
  background-color: #efefef;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
