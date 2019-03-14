import React, { Component } from "react";
import withRouter from 'umi/withRouter'
import { LocaleProvider } from 'antd'
import Redirect from 'umi/redirect'
import { requireAuth } from "../utils/utils"
import zh_CN from 'antd/lib/locale-provider/zh_CN'

class Layout extends Component {
  render() {
      const { children } = this.props
      if (requireAuth()) {
       <LocaleProvider locale={zh_CN}>
             <div>
                 {children}
             </div>
         </LocaleProvider>
      } else {
        return (
            <LocaleProvider locale={zh_CN}>
             <div>
                 {children}
             </div>
         </LocaleProvider>
        )
      }
  }
}

export default withRouter(Layout)