// component/msg.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true//在组件定义时的选项中启用多slot支持
  },
  bahaviors:[],
  properties: {
    icon:{
      type: String,
      value:'http://placeholder.qiniudn.com/200x200'
    },
    title:{
      type: String,
      value:'成功'
    },
    desc:{
      type: String,
      value:'描述描述描述描述描述描述描述描述描述'
    },
    buttons:{
      type: Array,
      value:[{type:'',text:'操作一',link:''},
    {type:'',text:'操作二',link:''}]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'',
    desc:'描述',
    buttons:[],
    // [{ type: '查看详情', text: '查看详情', link: '' }, { type: '返回首页', text: '返回首页', link: '' }
  },
  observer:{
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // golink:function(link){
    //   wx.navigateTo({
    //     url: link,
    //     success: function(res){
    //       // success
    //     },
    //     fail: function() {
    //       // fail
    //       wx.switchTab({
    //         url: link,
    //         success: function(res){
    //           // success
    //           debugger
    //         },
    //         fail: function(res) {
    //           // fail
    //           debugger;
    //           wx.showToast({
    //             title:'跳转失败',
    //             icon:none
    //           });
    //         },
    //         complete: function() {
    //           // complete
    //         }
    //       })
    //     },
    //     complete: function() {
    //       // complete
    //     }
    //   })
    // }
  }
})
