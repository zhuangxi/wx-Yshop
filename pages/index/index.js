//index.js
//获取应用实例
const utils = require('../../utils/util')
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    imgUrls: [
      "http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg",
      "http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg",
      "http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg",
      "http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg"
    ],
    channel: [
      {
        id: 0,
        url: "/pages/search/index",
        name: "居家"
      },
      {
        id: 1,
        url: "/pages/search/index",
        name: "厨房"
      },
      {
        id: 2,
        url: "/pages/search/index",
        name: "配件"
      },
      {
        id: 3,
        url: "/pages/search/index",
        name: "服饰"
      },
      {
        id: 4,
        url: "/pages/search/index",
        name: "志趣"
      }
    ],
    goodList: [
      {
        id: 0,
        url: "/pages/search/index",
        picUrl: "http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg",
        intro: "快来看快来买！",
        price: "20.0元"
      }, {
        id: 2,
        url: "/pages/search/index",
        picUrl: "http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg",
        intro: "快来看快来买！",
        price: "21.0元"
      }, {
        id: 3,
        url: "/pages/search/index",
        picUrl: "http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg",
        intro: "快来看快来买！",
        price: "22.0元"
      }, {
        id: 4,
        url: "/pages/search/index",
        picUrl: "http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg",
        intro: "快来看快来买！",
        price: "24.0元"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {

  },
  getData: () => {
    let url = 'http://localhost:3000/users/1'
    let res = utils.request(url)
    console.log(res)
  }
})
