// component/cell/cell.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    icon:{
      type: String,
      value:"http://temp.im/42x42"
    },
    link:{
      type:String,
      value:'#'
    },
    name:{
      type: String,
      value: "名字"
    },
    detail:{
      type:String,
      value: "细节描述细节描述"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {


  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
