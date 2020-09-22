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


//当月新户
export function MonthNew(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,


        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ006'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}


//当月申请件
export function MonthShenqin(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
       

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ007'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}

//当年新户
export function YearsNew(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
    

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ008'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}

//当年申请件
export function YearShenqin(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
         

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ009'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}


//培训材料列表
export function TrainingMatrial(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
         

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ013'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}

//培训材料详情
export function TrainingMatrialDetail(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
         

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ015'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}



//业务通知列表
export function YewuNotice(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
         

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ014'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}

//业务通知详情
export function YewuNoticeDetail(params) {
	
	
	//var str=params.imageBase64
	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
         

        }
        
        
        
    }

    
    const operationType = 'com.xinyongka.APPFKQ016'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}




//业务通知和培训材料未读数
export function NoticeTrainingNum(params) {
	

	
	
    const requestData = {
        _requestBody: {
            userid: params.userid,
        }
    }
    
    const operationType = 'com.xinyongka.APPFKQ012'
    
  
  

    return sendRequest({ requestData, operationType, message: ' ' })
}
