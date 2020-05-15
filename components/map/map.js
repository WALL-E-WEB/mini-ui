// components/map/map.js
const chooseLocation = requirePlugin('chooseLocation');
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
    latitude: '22.527780',
    longitude: '114.049072',
    circle: '',
    address:{
    },
    scale:15
  },
  //-------------------------------------组件的方法列表------------------------------- 
  methods: {

    switchChange(e) {
      let _this = this
      console.log(e)
      if (e.detail.value) {
        wx.getLocation({
          // type:'wgs84', 
          type: 'gcj02', //解决定位点不在中心问题
          success: function (res) {
            console.log(res)
            _this.setData({
              latitude: res.latitude,
              longitude: res.longitude
            })
          }
        })
      } else {
        _this.setData({
          latitude: '22.527780',
          longitude: '114.049072'
        })
      }
    },

    chooseAddress() {
      const key = 'R4DBZ-N6F3X-NNJ4X-7SZEV-H7NT6-67FXM'; //使用在腾讯位置服务申请的key
      const referer = 'walle调用调试'; //调用插件的app的名称
      const location = JSON.stringify({
        latitude: this.data.latitude,
        longitude: this.data.longitude
      });
      const category = '';

      wx.navigateTo({
        url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
      });
    },

    onSlace(e){
      console.log(e)
      this.setData({
        scale:e.detail.value
      })
    }
  },
  //-------------------------------------生命周期------------------------------- 
  pageLifetimes:{
    show(){
      const location = chooseLocation.getLocation();
      console.log('location',location)
      if(location){
        this.setData({
          address:location
        })
      }
    }
  }
})