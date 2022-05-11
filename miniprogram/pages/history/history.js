// pages/history/history.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		careerRecord: [
			{
				time: '2020-03-12 19:00',
				roomNumber: 's3m4',
				friends: [
					'kendrick',
					'kanye',
					'jcole',
					'lalala',
					'kanye',
					'jcole',
					'lalala',
					'kanye',
					'jcole',
					'lalala',
					'kendrick',
					'kanye',
					'jcole',
					'lalala',
					'kanye',
					'jcole',
					'lalala',
					'kanye',
					'jcole',
					'lalala',
				],
				result: 'win',
				money: 100,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: 'aadd',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'lose',
				money: 800,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: '3e3c',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'win',
				money: 100,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: 'cc33',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'tie',
				money: 0,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: '3643',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'win',
				money: 100,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: 'chdf',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'lose',
				money: 800,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: '7erg',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'win',
				money: 100,
			},
			{
				time: '2020-03-12 19:00',
				roomNumber: '234h',
				friends: ['kendrick', 'kanye', 'jcole', 'lalala'],
				result: 'lose',
				money: 800,
			},
		],
		list: Array.from({ length: 50 }, (v, i) => i),
		activeName: '',
	},

	onChange(event) {
		this.setData({
			activeName: event.detail,
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
