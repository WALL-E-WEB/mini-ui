// components/banner/banner2/banner2.js
const {
  throttle
} = require('../../../utils/util')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 3,
    lastActive: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      console.log(e.detail.current)
      // this.getdom()
      this.setData({
        currentIndex: e.detail.current
      })
    },
    onTransition: throttle(function(){
      // console.log(this.data)
      if (this.data.currentIndex !== 3) {
        return
      }
     this.getdom()

    }, 100),
    getdom() {
      let _this = this
      const query = this.createSelectorQuery()
      query.select('#switem').fields({
        node: true,
        size: true,
        rect: true,
        scrollOffset: true
      }).exec(res => {
        console.log('dom', res)
        if(res[0].left<150){
          _this.setData({
            lastActive:'active'
          })
        }else{
          _this.setData({
            lastActive:''
          })
        }
      })
    }
  }
})