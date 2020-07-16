export function getUserId() {

	return new Promise((resolve, reject) => {

		let that = this;
		let u = window.navigator.userAgent;
		let app = window.navigator.appVersion;
		let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
		let isIOS = !!u.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/);
		if(isAndroid) {
			AlipayJSBridge.call('getAPDataStorage', {
				type: 'common',
				business: 'com.bosc.shanghang.e.cn_preferences',
				key: 'empId'
			}, function(result) {
				resolve(result.data)
			});
		}
		if(isIOS) {
			AlipayJSBridge.call('getAPDataStorage', {
				type: 'common',
				business: 'EMOP',
				key: 'empUserId'
			}, function(result) {

				resolve(result.data)
			});
		}
	})

}

export function getHeadImg() {

	return new Promise((resolve, reject) => {

		AlipayJSBridge.call('choosePhotos', {
			maxCnt: 3
		}, function(result) {

			resolve(result)

		});

	})

}

export function pushHtml(urlhtml) {

	AlipayJSBridge.call('pushWindow', {
		url: urlhtml, // 要打开页面的 URL
		// 打开页面的配置参数

	});

}

export function hideNaviBar(urlhtml) {

	AlipayJSBridge.call('hideNaviBar', {
			type: '1',
		},
		() => {

			console.log("影藏导航栏")

		})
}
export function ShouNav(urlhtml) {

	AlipayJSBridge.call('hideNaviBar', {
			type: '0',
		},
		() => {

			

		})
}

//			
//			
//			);