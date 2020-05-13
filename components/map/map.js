// components/map/map.js
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
    latitude:'22.527780',
    longitude:'114.049072',
    circle:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchChange(e){
      let _this = this
      console.log(e)
      if(e.detail.value){
        wx.getLocation({
          // type:'wgs84', 
          type:'gcj02', //解决定位点不在中心问题
          success:function(res){
            console.log(res)
            _this.setData({
              latitude:res.latitude,
              longitude:res.longitude
            })
            wx.openLocation({
              latitude:res.latitude,
              longitude:res.longitude,
              success:function(address){
                console.log('address',address)
              }
            })
          }
        })
      }else{
        _this.setData({
          latitude:'22.527780',
          longitude:'114.049072'
        })
      }
    },
    getLocationName(latitude,longitude){
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success (res) {
          wx.openLocation({
            latitude:latitude,
            longitude:longitude,
            scale: 18
          })
        }
       })
    }
  }
})
