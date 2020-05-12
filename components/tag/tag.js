// components/tag/tag.js
Component({
  options:{
    // addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"标题"
    },
    path:{
      type:String,
      value:''
    },
    path:{
      type:String,
      value:'/pages/banner/banner'
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
    onTagTo(){
      if(!this.data.path){
        return
      }
      wx:wx.navigateTo({
        url: this.data.path,
      })
    }
  }
})
