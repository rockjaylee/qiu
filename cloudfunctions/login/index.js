// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV,
});

// 云函数入口函数
exports.main = async (event) => {
	const { avatarUrl, nickName } = event;
	const { OPENID } = cloud.getWXContext();

	const db = cloud.database();
	const userInfo = db.collection('userInfo');

	const { data } = await userInfo
		.where({
			_openid: OPENID,
		})
		.get();

	// 如果用户是首次登录
	if (data.length === 0) {
		// 注册 向数据库添加用户数据 并获取其 _id
		const { _id } = await userInfo.add({
			data: {
				avatarUrl,
				nickName,
				_openid: OPENID,
				statistics: {
					gameCount: 0,
					winRate: 0,
					income: 0,
					gameRecord: [],
				},
				room: '',
			},
		});

		// 通过 _id 查询到用户数据并返回
		const user = await userInfo.doc(_id).get();
		return { data: user.data };

	} else {
		// 否则登录 直接返回查询到的用户数据
		return {
			data: data[0],
		};
	}
};
