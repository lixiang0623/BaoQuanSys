export const showToast = (msg) => {
  AlipayJSBridge.call("showToast", { content: msg });
}

export const showToastByMpaas = (msg, callback) => {
  if (msg instanceof Error) msg = msg.message;
  const config = {
    content: msg,
  }
  if (window.AlipayJSBridge) {
    AlipayJSBridge.call("toast", config, callback);
  } else {
    alert(msg)
  }
}





export const showAlert = (msg, callback) => {
  if (window.AlipayJSBridge) {
    AlipayJSBridge.call("alert",
      {
        title: '',
        message: msg,
        button: '确定'
      },
      () => {
        callback && callback()
      })
  } else {
    alert(msg)
  }
}

export const showConfirmByMpaas = (msg, confirmCallback, cancelCallback, okButton = "确认", cancelButton = "取消") => {
  if (window.AlipayJSBridge) {
    AlipayJSBridge.call("confirm",
      {
        title: '',
        message: msg,
        okButton: okButton,
        cancelButton: cancelButton
      },
      (e) => {
        const { ok } = e
        if (ok) {
          confirmCallback && confirmCallback()
        } else {
          cancelCallback && cancelCallback()
        }

      })
  } else {
    if (confirm(msg)) {
      confirmCallback && confirmCallback()
    } else {
      cancelCallback && cancelCallback()
    }
  }
}


export const showConfirm = (msg, confirmCallback, cancelCallback, { title = "温馨提示", okButton = "确认", cancelButton = "取消" } = {}) => {
  AlipayJSBridge.call(
    "nativeAlert",
    { title, msg, options: [cancelButton, okButton] },
    result => {
      if (result.index === '1') {
        confirmCallback && confirmCallback()
      } else if (result.index === '0') {
        cancelCallback && cancelCallback()
      }
    }
  );
}


export const showLoading = (msg) => {
  // AlipayJSBridge.call('showLoading', {
  //   text: msg,
  // });

  AlipayJSBridge.call('nativeLoading', { show: true })
}

export const hideLoading = (msg) => {
  // AlipayJSBridge.call('hideLoading');
  AlipayJSBridge.call('nativeLoading', { show: false })
}


// 身份证件识别结果
// result：{
//   "kCardItem3" : "汉",
//   "kCardItem2" : "男",
//   "kIDCardColorImage" : 1,
//   "kCardItem1" : "胡**",
//   "kCardItem0" : "*********X",
//   "kIDCardImageCompletenessType" : -1,
//   "kCardItem5" : "湖北省*********",
//   "kCardItem4" : "1997年*****"
//  }


export const scanIDCard = () => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call('scanIDCard', {}, function (result) {
      resolve(result)
    })
  })

}



//  银行卡识别结果
//  result：{
//   "kCreditCardType" : 0,
//   "kBankName" : "上海银行",
//   "kHolderName" : "SHANGHAI",
//   "kOpenSDKCardResultTypeImage" : <UIImage: 0x280d7d500>, {1248, 800},
//   "kBankCardType" : 2,
//   "kHolderNameImage" : <UIImage: 0x280d7ddc0>, {301, 62},
//   "kOpenSDKCardResultTypeCardRotate" : 0,
//   "kCardNumberRect" : NSRect: {{116.48, 457.14285714285711}, {994.24000000000001, 97.354497354497354}},
//   "kBankID" : "04012900",
//   "kOpenSDKCardResultTypeOriginImage" : <UIImage: 0x280d7dff0>, {1920, 1080},
//   "kCardNumber" : "62***20 0101 39***71", //注意有空格
//   "kCardNumberOriginalBorderPoints" : [
//    NSPoint: {431, 590},
//    NSPoint: {1431, 585},
//    NSPoint: {1435, 679},
//    NSPoint: {428, 685}
//   ],
//   "kExpiryDateImage" : <UIImage: 0x280d7d570>, {299, 61},
//   "kExpiryDate" : "07/28",
//   "kCardNumberImage" : <UIImage: 0x280d7e3e0>, {994, 97}
//  }

export const scanBankCard = () => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call('scanBankCard', {}, function (result) {
      resolve(result)
    })
  })

}


export const setTitle = (title) => {
  AlipayJSBridge.call("setTitle", { title });
}


export const setOptionMenu = (data) => {
  AlipayJSBridge.call("setOptionMenu", data);
  AlipayJSBridge.call("showOptionMenu"); //setOptionMenu 后如果效果不对，请调用一次 showOptionMenu。
}


export const getAPDataStorage = ({ type, business, key }) => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call(
      "getAPDataStorage",
      {
        type,
        business,
        key,
      },
      function (result) {
        resolve(result)
      }
    );
  })

}

export const getUserInfoByAPDataStorage = () => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call(
      "getAPDataStorage",
      {
        type: "common",
        business: "MeiHao",
        key: "mz_user_information"
      },
      function (result) {
        if (result.success === true) {
          if (typeof result.data === 'string') { //在android 为json string 而ios为object
            resolve(JSON.parse(result.data))
          } else {
            resolve(result.data)
          }
        } else {
          reject('getUserInfoFail')
        }

      }
    );
  })

}

export const getLocalPhone = () => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call(
      "getAPDataStorage",
      {
        type: "common",
        business: "MeiHao",
        key: "mz_phone_number"
      },
      function (result) {
        if (result.success === true) {
          resolve(result.data)
        } else {
          reject('getLocalPhoneFail')
        }
      }
    );
  })

}

export const modifyLocalPhone = (phone) => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call(
      "setAPDataStorage",
      {
        type: "common",
        business: "MeiHao",
        key: "mz_phone_number",
        value: phone,//  // 13205899586
      },
      function (result) {
        if (result.success === true) {
          resolve('success')
        } else {
          reject('fail')
        }
      }
    );
  })

}


export const log = (data) => {
  AlipayJSBridge.call('nativeLog', { myLog: data })
}


//复制到剪贴板
export const copyToPasteBoard = (text) => {
  AlipayJSBridge.call('copyToPasteBoard', { text })
}


//跳转页面
export const nativePushWindow = ({ type, appId, url }) => {

  // type: NATIVE(原生)/H5(离线包)/OUT(外链)
  // appId: 原生、离线包需要传
  // url: 离线包、外链需要传
  AlipayJSBridge.call(
    "nativePushWindow",
    {
      type, // "H5",
      appId,// "19920506",
      url, //"www/my-bankcard.html"
    },
    function (result) {
      // alert(JSON.stringify(result));
    }
  );
}





export const getHeader = () => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call(
      "getHeader",
      function (result) {
        resolve(result)
      }
    );
  })

}
export const getAppConfig = () => {
  return new Promise((resolve, reject) => {
    AlipayJSBridge.call(
      "getAppConfig",
      function (result) {
        resolve(result)
      }
    );
  })

}



export const clickTracker = (seedname) => {
  try {
    Tracker.click(seedname); //点击埋点
  } catch (error) {
    // console.log(error)
  }

}


export const setBackTracker = (seedname) => {
  document.addEventListener(
    "back",
    function (e) {
      //如果在事件的处理函数中调用了 event.preventDefault()，容器将忽略 backBehaviour，JS 需要负责回退或做其他操作。
      // e.preventDefault();
      // AlipayJSBridge.call("popWindow");
      clickTracker(seedname); //返回埋点
    },
    false
  );
}














