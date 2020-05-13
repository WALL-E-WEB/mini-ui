// pages/downMenu/index.js
Page({
  data: {

  },
  btn(e){
    // console.log(e)
    let query = wx.createSelectorQuery()
    query.select('#box').fields({
      id:true,
      dataset:true,
      mark:true,
      rect:true,
      size:true,
      scrollOffset:true,
      properties:true,
      computedStyle:['color'],
      context:true,
      node:true
    }).exec((res)=>{
      console.log(res)
    })
  },
  webload(e){
    console.log('load',e)
  }

})