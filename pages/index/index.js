//index.js
//获取应用实例

Page({
  data: {
    PageCur: 'home'
  },
  NavChange(e) {
    console.log("点击了"+ e.currentTarget.dataset.cur);
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  

 
})
