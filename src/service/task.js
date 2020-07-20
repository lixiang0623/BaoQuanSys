import { sendRequest } from './request'

export function getyejiNum(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,
        
        }
    }
    const operationType = 'com.xinyongka.APPFKQ001'
    
    console.log('发送短信验证码')

    return sendRequest({ requestData, operationType, message: ' ' })
}


//我的业绩申请件查询
export function shenqinDetail(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,
            name:params.name,
            result:params.result,
            newis:params.newis,
            changeis:params.changeis,
            currentpage:params.currentpage,
            length:params.length,
            pubDateStart:params.pubDateStart,
            pubDateStop:params.pubDateStop

        }
    }
    const operationType = 'com.xinyongka.APPFKQ002'
    
    console.log('发送短信验证码')

    return sendRequest({ requestData, operationType, message: ' ' })
}

//我的业面签查询
export function faceSignDetail(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,
            name:params.name,
            facetype:params.facetype,
            changeis:params.changeis,
            currentpage:params.currentpage,
            length:params.length,
            facetimeStart:params.facetimeStart,
            facetimeStop:params.facetimeStop

        }
    }
    const operationType = 'com.xinyongka.APPFKQ003'
    
    console.log('发送短信验证码')

    return sendRequest({ requestData, operationType, message: ' ' })
}

//当月业绩查询
export function MonthyejiCheck(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,

        }
    }
    const operationType = 'com.xinyongka.APPFKQ004'
    
    console.log('发送短信验证码66666')

    return sendRequest({ requestData, operationType, message: ' ' })
}

//当年业绩查询
export function YearyejiCheck(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,

        }
    }
    const operationType = 'com.xinyongka.APPFKQ005'
    
  

    return sendRequest({ requestData, operationType, message: ' ' })
}


//权限
export function quanxian(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,

        }
    }
    const operationType = 'com.xinyongka.APPFKQ011'


    return sendRequest({ requestData, operationType, message: ' ' })
}

//权限
export function putHeadImg(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
            imageBase64:params.imageBase64

        }
        
        
        
    }
    
    
    
  //  console.log("对方水电111费水电费",requestData)


   //console.log("对方水电费水电费"+params.imageBase64)
   
   
    
    const operationType = 'com.xinyongka.APPFKJ001'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}
//员
export function getImg(params) {
    const requestData = {
        _requestBody: {
            userid: params.userid,

        }
    }
    const operationType = 'com.xinyongka.APPFKQ010'


    return sendRequest({ requestData, operationType, message: ' ' })
}


//
///*
// * 验证短信验证码
// */
//export function checkMsgTask(params) {
//  const requestData = {
//      _requestBody: {
//          mobilePhone: params.mobilePhone, //手机号
//          msgCode: params.msgCode, //短信验证码
//          challengeValue: params.challengeValue, //挑战值
//          checkCode: params.checkCode, //校验码
//      }
//  }
//
//  const operationType = 'com.GLMobile.Customer.CheckMsg'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///*
// * 身份信息认证
// */
//export function identityInfoCheckTask(params) {
//  const requestData = {
//      _requestBody: {
//          idType: params.idType, //证件类型
//          idNo: params.idNo, //证件号   
//          userName: params.userName, //用户姓名
//      }
//  }
//
//  const operationType = 'com.GLMobile.Customer.IdentityInfoCheck'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///*
// * 接口代码:CheckMsgForUserInfo 
// * 接口名称:验证短信验证码获取客户信息
// * 交易功能描述:验短信验证码的同时，获取客户的部分信息
// */
//export function checkMsgForUserInfoTask(params) {
//  const requestData = {
//      _requestBody: {
//          mobilePhone: params.mobilePhone, //手机号
//          msgCode: params.msgCode, //短信验证码
//          challengeValue: params.challengeValue, //挑战值  1351234123457a2fcccb8404992bca8a70adcda8fcc
//          checkCode: params.checkCode, //校验码 135
//          cardSeq: params.cardSeq, //卡序列号 用于获取卡号  1196632900436410368
//      }
//  }
//
//  const operationType = 'com.GLMobile.Customer.CheckMsgForUserInfo'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///* 
// * 登录密码认证
// */
//export function loginPwdCheckTask(params) {
//  const requestData = {
//      _requestBody: {
//          mobilePhone: params.mobilePhone,
//          idNo: params.idNo,
//          idType: params.idType,
//          loginPwd: params.loginPwd,
//          checkChannel: params.checkChannel,
//          pwdType: "P",//密码类型
//
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.LoginPwdCheck'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
//
///*
// *  银行卡加挂
// */
//export function addCardTask(params) {
//  const requestData = {
//      _requestBody: {
//          cardNo: params.cardNo, //卡号
//          transPwd: params.transPwd, //交易密码 添加借记卡必输
//          cardCvv2: params.cardCvv2, // 信用卡CVV2 添加信用卡必输
//          validateDate: params.validateDate, //信用卡有效期 添加信用卡必输
//          idNo: params.idNo, //证件号
//          idType: params.idType, //证件类型
//          userName: params.userName, //用户姓名
//          cardType: params.cardType,//卡类型
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.AddCard'
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///*
// *  银行卡删除
// */
//export function delCardTask(params) {
//  const requestData = {
//      _requestBody: {
//          cardSeq: params.cardSeq,
//          cardNo: params.cardNo,
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.DelCard'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///*
// *  卡列表查询
// */
//export function cardListQryTask(params) {
//
//  const requestData = {
//      _requestBody: {
//          qryCardType: params.qryCardType,
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.CardListQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///*
// *  还可加挂的银行卡列表查询
// */
//export function cardListQryCanAddTask() {
//  const requestData = {
//      _requestBody: {
//          // cardQryType: 'A'
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.CardListQryCanAdd'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///* 
// * 卡片验证
// */
//export function cardCheckTask(params) {
//
//  const requestData = {
//      _requestBody: {
//          cardNo: params.cardNo,
//          cardSeq: params.cardSeq,
//          cardType: params.cardType,
//          transPwd: params.transPwd,
//          cardCvv2: params.cardCvv2,
//          validateDate: params.validateDate,
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.CardCheck'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///*
// *  卡bin查询
// */
//export function cardBinQryTask(params) {
//  const requestData = {
//      _requestBody: {
//          cardNo: params.cardNo
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.CardBinQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///*
// *  修改手机号
// */
//export function modifyMobilePhoneTask(params) {
//  const requestData = {
//      _requestBody: {
//          newMobilePhone: params.newMobilePhone,
//          idType: params.idType,
//          idNo: params.idNo,
//          userName: params.userName,
//          loginPwd: params.loginPwd,
//          msgCode: params.msgCode, //短信验证码
//          challengeValue: params.challengeValue, //挑战值
//          checkCode: params.checkCode, //校验码
//          validateCode: params.validateCode,//图形验证码
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.ModifyMobilePhone'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
//
///*
// *  修改银行卡
// */
//export function modifyCardTask(params) {
//  const requestData = {
//      _requestBody: {
//          cardNo: params.cardNo,
//          cardSeq: params.cardSeq,
//          payFlag: params.payFlag,
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.ModifyCard'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
//
//
///*
// *  快捷支付设置 (免密开关)
// */
//export function fastPayModifyTask(params) {
//  const requestData = {
//      _requestBody: {
//          noPwdPayFlag: params.noPwdPayFlag
//      }
//  }
//  const operationType = 'com.GLMobile.Customer.FastPayModify'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
//
///* 
// * 用户详细信息查询
// */
//export function userDetailInfoQryTask() {
//  const requestData = {
//      _requestBody: {}
//  }
//  const operationType = 'com.GLMobile.Customer.UserDetailInfoQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///* 
// * 交易明细查询
// */
//export function transDetailQryTask(params) {
//  const requestData = {
//      _requestBody: {
//          acctType: params.acctType, //账户类型
//          // cardNo: params.cardNo, //卡号
//          cardSeq: params.cardSeq, //卡序列号 
//          currencyCode: params.currencyCode, //币种代码
//          CRFlag: params.CRFlag, //钞汇标志
//          beginDate: params.beginDate, //开始日期  YYYY-MM-DD
//          endDate: params.endDate, // 结束日期 YYYY-MM-DD
//          transFlag: params.transFlag, //交易标识 Q-查询 P-分页" 
//          qryNum: params.qryNum, //查询记录数    
//          startCount: params.startCount, //开始编号    
//
//
//      }
//  }
//  const operationType = 'com.GLMobile.Finance.TransDetailQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///* 
// * 订单列表查询
// */
//export function orderListQryTask(params) {
//  const requestData = {
//      _requestBody: {
//          orderStatus: params.orderStatus, //订单状态
//          qryNum: params.qryNum, //查询记录数
//          startCount: params.startCount, //开始编号 
//      }
//  }
//  const operationType = 'com.GLMobile.O2O.OrderListQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
///* 
// * 订单退款信息查询
// */
//export function refundInfoQryTask(params) {
//  const requestData = {
//      _requestBody: {
//          orderNo: params.orderNo, //订单号
//      }
//  }
//  const operationType = 'com.GLMobile.O2O.RefundInfoQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///* 
// * 礼券列表查询
// */
//export function giftVoucherListQryTask(params) {
//  const requestData = {
//      _requestBody: {
//          flag: params.flag, //全部-"" 未使用-"UNUSED" 已使用-"USED" 已过期-"OUT"
//      }
//  }
//  const operationType = 'com.GLMobile.O2O.GiftVoucherListQry'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
//
///* 
// * 字典查询
// */
//export function getDictsByTypeTask(params) {
//  const requestData = {
//      _requestBody: {
//          dictType: params.dictType, //'ID_TYPE'
//      }
//
//  }
//  const operationType = 'com.GLMobile.Customer.GetDictsByType'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
//
//
///* 
// * 图形验证码
// */
//export function getValidateCodeTask() {
//  const requestData = {
//      _requestBody: {}
//  }
//  const operationType = 'com.GLMobile.Customer.ValidateCode'
//
//  return sendRequest({ requestData, operationType, message: ' ' })
//}
















