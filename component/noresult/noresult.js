// component/noresult/noresult.js
Component({
  /**
   * 组件的属性列表
   */ 
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],
  properties: {
    // 结果图标
    resultIcon:{
      type: String,
      value: 'http://placeholder.qiniudn.com/226x226'
    },
    //结果简称
    resultName:{
      type: String,Number,
      value:'什么都没有哦~'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗是否显示
    isShow: false,
    resultIcon:'',
    resultName:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 公有方法

     // 隐藏无结果页
     hideNoresult(){
      this.setData({
        isShow: !this.data.isShow
      });
    },

    // 显示无结果页
    showNoresult() {
      this.setData({
        isShow: !this.data.isShow
      });
    },

  }


  
})
