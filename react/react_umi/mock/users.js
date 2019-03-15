// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
const sendValue = Object.assign({
  errorMessage: "操作失败!",
  data: null,
  resultCode: "0000",
  success: false,
})
const proxy = {
    "POST /api/login": (req, res) => {
        const token = "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiIxNTUyNTI2MDgwNDUwOGRlNDE5ZWVkYzlmNDdmMjgxYjU3YzA3OTNhOTIwMjciLCJzdWIiOiJ7XCJtb2JpbGVOb1wiOlwiMTM0NDQ5MzMzMzNcIixcIm5pY2tOYW1lXCI6XCLmtYvor5VfUzA5XCIsXCJ1c2VySWRcIjpcIjgxNzI3MDY0MDAyNjE5NzIwMlwiLFwidXNlck5hbWVcIjpcIua1i-ivlTMzM1wiLFwidXNlck5vXCI6XCJTMDkwXCJ9IiwiaXNzIjoiMTcyLjE2LjE3LjE0NyIsImlhdCI6MTU1MjUyNjA4MCwiZXhwIjoxNTUzMDI2MDgwfQ.f5N4V9fstfbmbmtamBZKucvgjGtqUeVylk_qSzeTWEM"
        const user = [{password: "admin", userName: "admin"}, { password: "123456", userName: "123456"}]
        const { userName, password } = req.body
        const day = user.filter((ele) => ele.userName === userName)
        if (day.length === 1 && day[0].password === password) {
          res.send({...sendValue, data: {...day[0], token }, errorMessage: "操作成功", success: true })
        } else {
          res.send({ ...sendValue })
        }
        
    },
    'POST /api/list': (req, res) => {
      const list = []
    //   res.setHeader('Access-Control-Allow-Origin', '*');
      res.send({list})
    },
}
export default proxy;