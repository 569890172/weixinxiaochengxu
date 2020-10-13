// pages/home/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
  },
  attached() {
    console.log("success")
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
   
    wx.hideLoading()
  },
  detached(){
    console.log('组件移除被执行');
  },
  methods: {
    
  }
})