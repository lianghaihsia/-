// component/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],
  properties: {
    title:{
      type: String,
      value: '标题'
    },
    icon: {
      type: String,
      value: 'http://placeholder.qiniudn.com/202x202'
    },
    desc: {
      type: String,
      value: '描述'
    },
    cancelTxt: {
      type: String,
      value: '取消'
    },
    confirmTxt: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modelShow: true,
    icon: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
