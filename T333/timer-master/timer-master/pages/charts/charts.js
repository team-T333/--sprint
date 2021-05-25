let app = getApp();
const db = wx.cloud.database();
const admin = db.collection('user_password');
const _=db.command
var date;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },
  tempData: function () {
    admin.orderBy('times','desc').get().then(res => {
      var that = this;
      let rank = res.data;
      console.log(rank);
      that.setData({
        list: rank,
      });
    })
  },
  onLoad: function () {
    this.tempData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.tempData();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  onShareAppMessage: function () {
    return {
      title: '快来打卡赢积分',
      imageUrl: '/images/daka.png'
    }
  },
})

