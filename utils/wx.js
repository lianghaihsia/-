
function setTitle(name){
  wx.setNavigationBarTitle({
    title: name,
  })
}
// module.exports 
module.exports= {
  setTitle: setTitle
}