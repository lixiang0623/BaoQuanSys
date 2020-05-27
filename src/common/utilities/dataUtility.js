export function coverPhone(phoneNum) {
  if (phoneNum) {
    return phoneNum.substring(0, 3) + "****" + phoneNum.substring(7, 11);
  }
}

export function coverName(name) {
  if (name) {
    let a = "";
    while (a.length < name.length - 1) {
      a += "*";
    }
    return name[0] + a;
  }
}

export function coverCardNo(cardNo) {
  if (cardNo) {
    return cardNo.substring(0, 4) + "********" + cardNo.substring(cardNo.length - 4);
  }
}


export function coverIDNo(idNo) {
  if (idNo) {
    return idNo.substring(0, 4) + "**********" + idNo.substring(14, 18);
  }
}


export function jumpPageWithParmas(url, parmas) {
  const _href = encodeURI(`${url}?${this.genURIParmas(parmas)}`)
  // console.log('href', _href);
  location.href = _href;
}

export function genURIParmas(parmas) {
  let str = ''
  for (let key in parmas) {
    if (str.length != 0) str += '&'
    str += `${key}=${parmas[key]}`
  }
  return str
}


export function getParmasByURI() {
  const url = decodeURI(location.search);
  let obj = {}
  if (url.indexOf("?") != -1) {
    let str = url.substr(1)
    str = str.split("&");
    for (var i = 0; i < str.length; i++) {
      // obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      obj[str[i].split("=")[0]] = str[i].split("=")[1];
    }
  }
  return obj
}

export function genRandomCode(codeLength = 4) {
  const _str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";// 随机数库
  let code = '';
  for (let i = 0; i < codeLength; i++) {
    const index = Math.floor(Math.random() * _str.length)
    code += _str[index];
  }
  return code
}

// 判断是否同一天 
export function isSameDay(timeStampA, timeStampB) {
  let dateA = new Date(timeStampA);
  let dateB = new Date(timeStampB);

  return (dateA.setHours(0, 0, 0, 0) == dateB.setHours(0, 0, 0, 0));
}

//判断是否同一周
export function isSameWeek(timeStampA, timeStampB) {
  let A = new Date(timeStampA).setHours(0, 0, 0, 0);
  let B = new Date(timeStampB).setHours(0, 0, 0, 0);
  var oneDayTime = 1000 * 60 * 60 * 24;
  var old_count = parseInt(A / oneDayTime);
  var now_other = parseInt(B / oneDayTime);
  return parseInt((old_count + 4) / 7) == parseInt((now_other + 4) / 7);
}


//判断是为月末
export function isEndOfMonth(date) {
  let a = new Date(date)
  let b = new Date()

  b.setFullYear(a.getFullYear());
  b.setMonth(a.getMonth() + 1);
  b.setDate(0);

  return a.getDate() === b.getDate()

}

/**
  * Return digits length of a number
  * @ param {*number} num Input number
  */
 export function digitLength(num) {
  // Get digit length of e
  const eSplit = num.toString().split(/[eE]/);
  const len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));
  return len > 0 ? len : 0;
}

/** 
     * 乘法函数，用来得到精确的乘法结果
     * 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     * 调用：accMul(arg1,arg2)
     * 返回值：arg1乘以 arg2的精确结果
    **/

export function _multiplication(num1, num2) {
  const num1Changed = Number(num1.toString().replace('.', ''));
  const num2Changed = Number(num2.toString().replace('.', ''));
  const baseNum = this.digitLength(num1) + this.digitLength(num2);
  return num1Changed * num2Changed / Math.pow(10, baseNum);
}

/** 
 * 除法函数，用来得到精确的除法结果
 * 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 * 调用：accDiv(arg1,arg2)
 * 返回值：arg1除以arg2的精确结果
**/
export function _divide(num1, num2) {
  const num1Changed = Number(num1.toString().replace('.', ''));
  const num2Changed = Number(num2.toString().replace('.', ''));
  return this._multiplication((num1Changed / num2Changed), Math.pow(10, this.digitLength(num2) - this.digitLength(num1)));
}

export function toDecimalNoRound(num) {
  num = parseFloat(num);
  if (isNaN(num)) return ''
  num = Math.floor(this._multiplication(num, 100)) //向下取整
  num = this._divide(num, 100)
  let value = num.toFixed(2); //toFixed ：js是二进制的 浮点数运算都会有精度问题，toFixed舍入 16.9 * 100 = 1689.9999999999998
  let xsd = value.toString().split(".");                             //浮点数的精度问题,了解下浮点数的原理就知道为什么了
  if (xsd.length == 1) {                                               //所有的实数中只有少数可以被浮点数精确表示(比如离0比较近的整数,0.25,0.125什么的),其他的数只能近似表示,所以记住0.1+0.2!=0.3
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    } else {
      value = value.toString();
    }
    return value;
  }
}






Date.prototype.Format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};



