// components/downMenu/index.js
Component({
  /*** 组件的属性列表*/
  properties: {
    menu:{
      type:Array,
      value:['全部','筛选']
    },
    group:{
      type:Array,
      value:[{text:'全新',value:0},{text:'全2',value:1},{text:'全2',value:1}]
    },
    show:Boolean
  },

  /*** 组件的初始数据*/
  data: {

  },

  /*** 组件的方法列表*/
  methods: {
    onMenu(){
      this.setData({
        show:!this.data.show
      })
    },
    noop(){}
  }
})
