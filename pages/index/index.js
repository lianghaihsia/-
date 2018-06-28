// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    component: [
      { id: 1, name: 'card', icon:'/static/images/1.png',url:'/pages/card/card'},
      { id: 1, name: 'cell', icon:'/static/images/cell.png',url:'/pages/cell/cell'},
      { id: 1, name: 'gap', icon:'/static/images/gap2.png',url:'/pages/gap/gap'},
      
  ],
  component2:[
    { id: 1, name: 'msg', icon: '/static/images/msg.png', url: '/pages/msg/msg' },
    { id: 1, name: 'panel', icon: '/static/images/panel.png', url: '/pages/panel/panel' },
    { id: 1, name: 'tab', icon: '/static/images/tab.png', url: '/pages/tab/tab' }
  ],
  component3:[
    { id: 1, name: 'popup', icon: '/static/images/popup.png', url: '/pages/popup/popup' },
    { id: 1, name: 'noresult', icon: '/static/images/noresult.png', url: '/pages/noresult/noresult' },
    
  ]
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