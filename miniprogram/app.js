// app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'quanqiuren-6gue4sn6bd1b994e',
      traceUser: true,
    });

    this.globalData = {};
    wx.getSystemInfo({
      success: (result) => {console.log(result)},
    })
    
  }
});
