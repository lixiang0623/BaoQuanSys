import utilities from 'common/utilities'
/*
    发送请求 
    headers - 通过原生方法获取
*/
export async function sendRequest({
	requestData,
	operationType,
	message
}) {
	const {
		getHeader,
		getAppConfig,
		showLoading,
		hideLoading
	} = utilities;
	message && showLoading(message)
	const header = await getHeader();
	// header.devModel = "finance-ty";
	const config = await getAppConfig();

	//console.log('通过原生方法获取requestData' + JSON.stringify(requestData))
	console.log('通过原生方法获取operationType' + operationType)
	AlipayJSBridge.call('showLoading', {
		text: '正在加载中',
	});

	return new Promise((resolve, reject) => {
		AlipayJSBridge.call('rpc', {
			operationType: operationType,
			requestData: [requestData],
		}, function(response) {

//			console.log('返回数值' + JSON.stringify(response))

			AlipayJSBridge.call('hideLoading');
			resolve(response)

			//          if (response.responseCode) {
			//              if (response.responseCode === 'MS100000' || response.responseCode === 'MS100008') {
			//                  document.addEventListener("resume", () => { location.reload() }); //重新登陆回来 页面重新加载
			//                  AlipayJSBridge.call('logout', {
			//                      msg: response.responseMsg
			//                  });
			//                  reject("LOGIN OUT")
			//              } else if (response.responseCode.includes('000000')) {
			//                  //成功 responseCode GL000000
			//                  resolve(response)
			//              } else if (response.responseMsg) {
			//                  //成功 responseCode 其他
			//                  AlipayJSBridge.call('nativeAlert', {
			//                      title: response.responseCode,
			//                      msg: response.responseMsg,
			//                      options: ['确认']
			//                  });
			//                  resolve(response)
			//              } else {
			//                  AlipayJSBridge.call('nativeAlert', {
			//                      title: response.responseCode,
			//                      msg: '',
			//                      options: ['确认']
			//                  });

			//              }
			//
			//          } else {
			//              //错误
			//              AlipayJSBridge.call('nativeAlert', {
			//                  title: 'MP999999', //统一叫MP999999
			//                  msg: `${response.error ? response.error : ""} ${response.errorMessage ? response.errorMessage : ""}`,
			//                  options: ['确认']
			//              });
			//
			//              reject(response)
			//
			//              // if (response.error && response.errorMessage) {
			//              //     AlipayJSBridge.call('nativeAlert', {
			//              //         title: `MP${response.error}`,
			//              //         msg: response.errorMessage,
			//              //         options: ['确认']
			//              //     });
			//              //     reject(response.errorMessage)
			//              // } else {
			//              //     AlipayJSBridge.call('nativeAlert', {
			//              //         title: 'MP999999',
			//              //         msg: '服务器响应异常',
			//              //         options: ['确认']
			//              //     });
			//              //     reject("服务器响应异常")
			//              // }
			//          }
		});
	})
}

/*
    发送请求通过 mpass内置 rpc
*/
export function sendRequestByRpc({
	requestData,
	operationType,
	message
}) {
	message && showLoading(message)
	return new Promise((resolve, reject) => {
		AlipayJSBridge.call('rpc', {
			operationType,
			requestData,
			headers: {}
		}, function(response) {
			message && hideLoading()
			// alert(JSON.stringify(response))
			if(response.responseCode) {
				resolve(response)
			} else if(response.error) {
				reject(response.errorMessage)
			} else {
				reject('响应异常')
			}

		});
	})
}

// parma:{
// 	"headers" : {
// 		"lastClickSpm" : "",
// 		"pagets" : "-__MxeTuTj_",
// 		"latitude" : "37.785834",
// 		"longitude" : "-122.406417",
// 		"srcSpm" : ""
// 	},
// 	"requestData" : [
// 		{
// 			"_requestBody" : {
// 				"orderStatus" : "W",
// 				"startCount" : "1",
// 				"qryNum" : "10"
// 			}
// 		}
// 	],
// 	"operationType" : "com.GLMobile.O2O.OrderListQry"
// }

//'GL110010' 手机号为空，请重新输入!