// components/newGoods/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodlist: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      console.log(1)
      console.log(this.data.goodlist)
     },
    hide: function () { },
    resize: function () { },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
