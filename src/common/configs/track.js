import utilities from "common/utilities";

async function settingTracker(){
  try{
    const config = await utilities.getAppConfig();
    window._to = {
      // server: 'https://cn-hangzhou-mas-log.cloud.alipay.com/loggw/webLog.do',
      server: config.logGW + '/loggw/webLog.do',
      appId: config.appId, //C4EADA9251424
      workspaceId: config.workspaceId, //piccdefault
      // userId: '12312323',      // 选填, 默认为空
      // h5version: '0.1.1.1',    // 选填，默认为 0.0.0
      // bizScenario: 'alipay',   // 选填，默认为空
      autoExpo: false,         // 选填，默认为 false
      mtrDebug: false,         // 选填，默认为 false
    };

    require('common/configs/mtracker');

  }catch(error){

  }

}

settingTracker() //设置埋点

  



  // console.log('埋点',Tracker);