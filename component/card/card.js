// component/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    name:{
      type: String,
      value:'商品名',
    },
    img:{
      type: String,
      value:'http://placeholder.qiniudn.com/750x400'
    },
    buy:{
      type: Number,
      value: 0,
    },
    keep:{
      type: Number,
      value : 0,
    },
    price:{
      type: Number,
      value: 0
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'',
    buy:0,
    keep:0,
    price: 0,
    img:'http://img5.imgtn.bdimg.com/it/u=2899094415,1723704372&fm=27&gp=0.jpg',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
