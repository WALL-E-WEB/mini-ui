// components/addPhone/addPhone.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    btn(e){
      wx.addPhoneContact({
        firstName: 'firstName',
        mobilePhoneNumber:1395439587,
        success:function(e){
          console.log(e)
        }
      })
    },

    onSubmit(e){
      console.log(e)
    }
  }
})
