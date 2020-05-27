export const errorHandler = ({ title, error, confirmCallback, cancelCallback }) => {
  const msg = error instanceof Error ? error.message : error;
  // const msg = typeof error === 'object' ? error.message : error;
  const retryMsg = `\n是否重试？`;
  if (window.AlipayJSBridge) {
    AlipayJSBridge.call("confirm",
      {
        title: title,
        message: msg + retryMsg,
        okButton: '是',
        cancelButton: '否'
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
    if (confirm(msg + retryMsg)) {
      confirmCallback && confirmCallback()
    } else {
      cancelCallback && cancelCallback()
    }
  }
}


// export const yyyyy = (response,successAction,failAction) => {
//   const {errorMessage,responseBody} = response;
//   if (errorMessage) {
//     errorHandler({
//       title: "",
//       error: errorMessage,
//       confirmCallback: failAction
//     });
//   } else {
//     successAction && successAction(responseBody)
//   }
// }





   // utilities.errorHandler({
        //   title: "获取卡列表失败",
        //   error,
        //   confirmCallback: this.queryCardList,
        //   cancelCallback: () => {
        //     //返回首页
        //   }
        // });     