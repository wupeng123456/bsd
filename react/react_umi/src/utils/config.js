let APIV1= '';
let FRURL= '';
console.log(process.env.USE_COMMA)
if(process.env.USE_COMMA === 'local'){
    // APIV1 = "http://172.16.17.147:8085";
    // APIV1 = 'http://172.16.17.57:8080'  //王帆
    // APIV1 = 'http://172.16.17.65:8080'
    // APIV1 = 'http://172.16.17.74:8084' // 测试地址，勿删
    // APIV1 = 'http://172.16.17.82:8080' //陈稳至
    //  APIV1 = 'http://172.16.17.78:8080' //闻名刚
    //  APIV1 = 'http://172.16.17.185:8080'  //王沙沙
    //  APIV1 = 'http://localhost:18081' // cxj
    // APIV1 = 'http://172.16.17.129:8094/bsdyun-dfm'
    APIV1 = 'http://10.101.4.168:8080' // 测试环境地址，勿删
    FRURL = 'http://10.101.4.57:8080'   // 帆软报表地址
} else if(process.env.USE_COMMA === 'beta'){
    APIV1 = 'http://dfmhdb.bsdits.com:8282/bsdyun-dfm' // beta环境地址，勿删
    FRURL = 'http://report.bsdits.com:61021'   //帆软正式地址，勿删
} else if(process.env.USE_COMMA === 'prod'){
} else if (process.env.USE_COMMA === 'test'){
    APIV1 = 'http://10.101.4.168:8080' // 测试环境地址，勿删
    FRURL = 'http://10.101.4.57:8080'   // 帆软测试环境地址，勿删
}
module.exports = {
    name: "财务分销",
    version: "beta-1.1.7",
    prefix: "dfm",
    footerText: "波司登国际服饰（中国）有限公司 保留所有权利 版权所有",
    logo: "/logo.png",
    iconFontCSS: "/iconfont.css",
    iconFontJS: "/iconfont.js",
    CORS: [],
    openPages: ["/login"],
    apiPrefix: "/api",
    APIV1,
    FRURL,
    InputSize: "small",
}
