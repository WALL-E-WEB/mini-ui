// pages/toast/toast.js
import {WToast} from "../../components/toast/toat"
Page({
  data: {

  },
  onShow(){
  },
  btn(){
    console.log('aa')
    WToast.show({
      type:'success',
      text:'我们的胜利了!'
    })
  },
  btn2(){
    console.log('aa')
    WToast.show({
      type:'warning',
      text:'警告警告!'
    })
  },

})