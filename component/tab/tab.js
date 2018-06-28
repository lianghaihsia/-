// component/tab/tab.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */

  properties: {
    // len:{
    //   type: Number,
    //   value:null
    // },
    // name: {
    //   type: String,
    //   value: "列表"
    // },
    // curIndex:{
    //   type: Number,
    //   value : 0
    // },
    // func:{
    //   type: Function,
    //   value: null,
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // list: [],
    // curIndex: 0,
    // barLeft: 0,
    // barRight: 0,
    // showLoading: true,
    // func:{},
    // width: 0,
    // len: 0,
  },

  /**
   * 组件的方法列表
   */
  attached:function(){
      // var that = this;
      // var index = 0;
      // var len =  that.data.len;
      // var width = 50;
      
      // var barLeft = (750/len-width)/2 + (index == 0 ? 0 :750/len*index);
      // var barRight = 750-width-barLeft;
      
      // that.setData({
      //   barLeft : barLeft,
      //   barRight : barRight,
      //   curIndex: index
      // });

      // setTimeout(function(){
      //   that.setData({
      //     showLoading : false
      //   });
      // },800);

  },
  methods: {
  //   func:function(func){
  //     debugger;
  //     func();
  //   },
  //   getCurIndex : function(){
  //     console.log(this.data.curIndex);
  //     return this.data.curIndex
  //   },
  //   switchTab:function(e){
  //     var that = this;
  //     var index = e?e.currentTarget.dataset.index  : that.data.curIndex;
  //     var len =  that.data.list.length;
  //     var width = 50;
      
  //     var barLeft = (750/len-width)/2 + (index == 0 ? 0 :750/len*index);
  //     var barRight = 750-width-barLeft;
      
  //     that.setData({
  //       barLeft : barLeft,
  //       barRight : barRight,
  //       curIndex: index
  //     });
  //     return true;

  //   },
  //   // 加载状态提示
  //   setLoadingStatus:function(flag){
  //     var that = this;
  //     that.setData({
  //       showLoading : flag
  //     });
  // },
    
  }
})
