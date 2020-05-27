module.exports = function (e) {
	console.log(e.requestData)
	return {

		"responseCode": "GL000000",
		"responseTime": "20191115 08:40:06",
		"responseBody": {
			"totalIn": 169134.98,
			"detailList": [
				{
					"transAmount": "1700.0000",
					"transTime": "10:32",
					"acctBalance": "1707.3900",
					"transDes": "转账",
					"transDate": "2019-07-02",
					"transType": "CREDIT"
				},
				{
					"transAmount": "600.0000",
					"transTime": "10:47",
					"acctBalance": "1107.3900",
					"transDes": "网联付款",
					"transDate": "2019-07-02",
					"transType": "DEBIT"
				},
				{
					"transAmount": "1100.0000",
					"transTime": "10:48",
					"acctBalance": "7.3900",
					"transDes": "网联付款",
					"transDate": "2019-07-02",
					"transType": "DEBIT"
				},
				{
					"transAmount": "8181.0700",
					"transTime": "13:47",
					"acctBalance": "8188.4600",
					"transDes": "工资",
					"transDate": "2019-07-05",
					"transType": "CREDIT"
				},
				{
					"transAmount": "100.0000",
					"transTime": "16:08",
					"acctBalance": "8088.4600",
					"transDes": "网联付款",
					"transDate": "2019-07-05",
					"transType": "DEBIT"
				},
				{
					"transAmount": "103.0000",
					"transTime": "23:20",
					"acctBalance": "7985.4600",
					"transDes": "网联付款",
					"transDate": "2019-07-05",
					"transType": "DEBIT"
				},
				{
					"transAmount": "500.0000",
					"transTime": "07:41",
					"acctBalance": "7485.4600",
					"transDes": "网联付款",
					"transDate": "2019-07-06",
					"transType": "DEBIT"
				},
				{
					"transAmount": "500.0000",
					"transTime": "07:05",
					"acctBalance": "7985.4600",
					"transDes": "退款交易",
					"transDate": "2019-07-09",
					"transType": "CREDIT"
				},
				{
					"transAmount": "7900.0000",
					"transTime": "09:06",
					"acctBalance": "85.4600",
					"transDes": "跨行转账",
					"transDate": "2019-07-14",
					"transType": "DEBIT"
				},
				{
					"transAmount": "80.0000",
					"transTime": "17:40",
					"acctBalance": "5.4600",
					"transDes": "网联付款",
					"transDate": "2019-07-14",
					"transType": "DEBIT"
				},
				{
					"transAmount": "1700.0000",
					"transTime": "14:58",
					"acctBalance": "1705.4600",
					"transDes": "转账",
					"transDate": "2019-07-18",
					"transType": "CREDIT"
				},
				{
					"transAmount": "80.0000",
					"transTime": "20:32",
					"acctBalance": "6644.6600",
					"transDes": "网联付款",
					"transDate": "2019-08-22",
					"transType": "DEBIT"
				},
				{
					"transAmount": "6600.0000",
					"transTime": "23:23",
					"acctBalance": "44.6600",
					"transDes": "跨行转账",
					"transDate": "2019-08-22",
					"transType": "DEBIT"
				},
				{
					"transAmount": "20.0000",
					"transTime": "21:27",
					"acctBalance": "24.6600",
					"transDes": "网联付款",
					"transDate": "2019-08-24",
					"transType": "DEBIT"
				}
			],
			"totalOut": 239162,
			"monthList": [
				{
					"totalIncome": 36243.21,
					"totalExpend": 51249,
					"transDate": "2019-08"
				},
				{
					"totalIncome": 132891.77,
					"totalExpend": 187913,
					"transDate": "2019-07"
				}
			]
		},
		"responseMsg": "",
		"responseJnlNo": "1195139358791294976",
		"responseDate": "20191115"
	}
}


     // this.transList = Object.freeze(
      //   this.transList.concat(
      //     new Array(10).fill({
      //       transAmount: "1700.00",
      //       transTime: "10:32",
      //       acctBalance: "1707.30",
      //       transDes: "转账",
      //       transDate: "2019-07-02",
      //       transType: "CREDIT"
      //     })
      //   )
	  // );
	  




	// "detailList" : [
	// 	"transDate" : "2020-05-05",
	// 	"transDes" : "账户充值",
	// 	"transTime" : "16:56:10",
	// 	"state" : "I",
	// 	"transFlag" : "01",
	// 	"channel" : "GDLF",
	// 	"businessJnlno" : "eb02f510b4cb4757b53ef9edc0a399",
	// 	"payeeNo" : "",
	// 	"cardNo" : "623185009800044023",
	// 	"transAmount" : "1000.00",
	// 	"createTime" : "2020-05-05T08:56:10.000+0000",
	// 	"remark" : "",
	// 	"transType" : "01",
	// 	"userSeq" : 1254980165645524992,
	// 	"payerNo" : ""
	//  ],