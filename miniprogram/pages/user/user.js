// pages/user/user.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: null,
		win: 20,
		lose: 10,
		tie: 0,
	},

	gotoCareer() {
		wx.switchTab({
			url: '/pages/history/history',
		});
	},

	async getUserProfile() {
		// 通过 wx.getUserProfile 获取用户昵称和头像
		const {
			userInfo: { avatarUrl, nickName },
		} = await wx.getUserProfile({
			desc: 'complete userProfile',
		});

		// 触发云函数 将刚刚拿到的昵称和头像传给云函数 login
		const {
			result: { data },
		} = await wx.cloud.callFunction({
			name: 'login',
			data: {
				avatarUrl,
				nickName,
			},
		});
		console.log(data);

		// 更新 userInfo
		this.setData({
			userInfo: data,
    });
    
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {},
});
