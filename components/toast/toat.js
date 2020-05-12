
const WToast = {}

let _compData = {
  'isHide':'false'
}

function getContext(){
  let pages = getCurrentPages()
  let curPage = pages[pages.length-1]
  let comp = curPage.selectComponent('.wtoast')
  comp.setData(_compData)
  return comp
}
WToast.show= function(data){
  let assignData = Object.assign({show:true},data)
  getContext().setData(assignData)
  setTimeout(() => {
    getContext().setData({show:false})
  }, 1700);
}
// WToast.toastHide = function(data){
//   getContext().setData({show:false})
// }
module.exports = {
  WToast
}