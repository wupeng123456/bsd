import React, { Component } from "react";
import withRouter from 'umi/withRouter'
import { LocaleProvider } from 'antd'
import Redirect from 'umi/redirect'
import { requireAuth } from "../utils/utils"
import HeaderLayout from "./HeaderLayout"
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import styles from "./index.less"

class Layout extends Component {
  render() {
      const { children } = this.props
      const { pathname } = this.props.location
      console.log(this.props)
      if (pathname === "/user/Login") {
        return (
            <LocaleProvider locale={zh_CN}>
                <div>
                    {children}
                </div>
            </LocaleProvider>
        )
      } else {
        if (requireAuth()) {
           return (
              <LocaleProvider locale={zh_CN}>
                  <div className={styles.concent}>
                    <HeaderLayout {...this.props} />
                  </div>
              </LocaleProvider>
           )
           } else {
             return (
                 <Redirect to="user/Login"/>
             )
           }
      }
  }
}

export default withRouter(Layout)