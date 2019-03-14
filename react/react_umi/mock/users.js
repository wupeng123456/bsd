// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
    "/api/login": (req, res) => {
        const token = "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiIxNTUyNTI2MDgwNDUwOGRlNDE5ZWVkYzlmNDdmMjgxYjU3YzA3OTNhOTIwMjciLCJzdWIiOiJ7XCJtb2JpbGVOb1wiOlwiMTM0NDQ5MzMzMzNcIixcIm5pY2tOYW1lXCI6XCLmtYvor5VfUzA5XCIsXCJ1c2VySWRcIjpcIjgxNzI3MDY0MDAyNjE5NzIwMlwiLFwidXNlck5hbWVcIjpcIua1i-ivlTMzM1wiLFwidXNlck5vXCI6XCJTMDkwXCJ9IiwiaXNzIjoiMTcyLjE2LjE3LjE0NyIsImlhdCI6MTU1MjUyNjA4MCwiZXhwIjoxNTUzMDI2MDgwfQ.f5N4V9fstfbmbmtamBZKucvgjGtqUeVylk_qSzeTWEM"
        const user = [{password: "123456", userNo: "admin"}, { password: "123456", userNo: "123456"}]
        console.log(req)
    },
    'POST /api/list': (req, res) => {
      const list = []
    //   res.setHeader('Access-Control-Allow-Origin', '*');
      res.send({list})
    },
}
export default proxy;