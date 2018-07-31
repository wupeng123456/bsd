#获取每个月的第一天
    ```
    const firstDate = new Date()
    const first = firstDate.setDate(1)
    const startDate = moment(first).format("YY-MM-DD")
    ```

#获取每月最后一天
    ```
    var endDate = new Date(firstDate);
    endDate.setMonth(firstDate.getMonth()+1);
    endDate.setDate(0);
    ```

#获取当前日期

    ```
    const timestamp = Date.parse(new Date())
    const str = moment(timestamp).format(dateFormat)
    ```
#判断函数是否存在
    ```
        isExitsFunction = (funcName) => {
        try {
            if (typeof(eval(funcName)) === "function") {
                return true;
            }
        } catch(e) {}
        return false;
    }
        console.log(this.isExitsFunction(functionName))
    ```