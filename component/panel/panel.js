// component/panel/panel.js
Component({
    /**
     * 组件的属性列表
     */
    options: {
        multipleSlots: true //在组件定义时的选项中启用多slot支持
    },
    properties: {
        icon: {
            type: String,
            value: ''
        },
        time:{
          type: String,
          value:'9:00'
        },
        star: {
            type: Number,
            value: 1,
        },
        name: {
            type: String,
            value: '名字',
        },
        early: {
            type: String,
            value: '0.89',
        },
        expected: {
            type: String,
            value: 7.56
        },
        publish: {
            type: String,
            value: '2018-8-8',
        },
        avatarUrl: {
            type: String,
            value: 'http://temp.im/60x60'
        },
        title: {
            type: String,
            value: '标题'
        },
        publiced:{
          type: Boolean,
          value : true
        },
        keeped:{
          type: Boolean,
          value: false,
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