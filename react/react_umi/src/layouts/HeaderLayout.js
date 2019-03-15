import React, { Component } from "react";
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd';
import Siderconent from "./Sider"
import styles from "./index.less"
const { Header, Footer, Sider, Content } = Layout;
export default class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapsed: false,
    };
  }
  Title = () => {
      const { pathname } = this.props.location
      return `Ant Design Pro${pathname}`
  }
  toggle = () => {
    const { collapsed } = this.state
      this.setState({
        collapsed: !collapsed,
      })
  }
  render() {
    const { children } = this.props
    const { collapsed } = this.state
    const Siderdata = {
        collapsed,
        toggle: this.toggle,
    }
    return (
        <DocumentTitle title={this.Title()}>
            <Layout className={styles.concent}>
                <Sider trigger={null} collapsible collapsed={collapsed} className={styles.Sider}>
                    <Siderconent {...Siderdata}/>
                </Sider>
                <Layout>
                    <Header className={styles.Header}>Header</Header>
                    <Content className={styles.main}>{children}</Content>
                    <Footer className={styles.Header}>Footer</Footer>
                </Layout>
            </Layout>
        </DocumentTitle>
    );
  }
}
