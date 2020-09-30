// pages/home/index.js
Component({

  /**
   * 页面的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log("在组件实例进入页面节点树时执行");
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log(" 在组件实例被从页面节点树移除时执行");
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log("页面被展示");
    },
    hide: function() {
      // 页面被隐藏
      console.log("页面被隐藏");
    },
    resize: function(size) {
      // 页面尺寸变化
       console.log("页面尺寸变化");
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})