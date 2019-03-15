import React, { Component } from "react";
import { Button, Menu, Icon } from 'antd';
import style from "./index.less"
const { SubMenu } = Menu;
export default class Siderconent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  toggleCollapsed = () => {
    this.props.toggle()
  }
  render() {
    const { collapsed } = this.props
    return (
        <div className={style.logo}>
          <div className={style.button}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginLeft: 16 }}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}  defaultOpenKeys={['sub1']} inlineCollapsed={collapsed}>
        <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
      </Menu>
        </div>
    );
  }
}
