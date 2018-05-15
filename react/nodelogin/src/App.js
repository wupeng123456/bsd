import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import './App.css'


const { Header, Content, Footer } = Layout;



class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://172.16.17.162:5000/login', true)
        // xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8")
        // const formData = new FormData()
        // formData.append('password', values.password)
        // formData.append('userName', values.userName)
        xhr.send(JSON.stringify(values))
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            console.log('通信成功')
            if (xhr.status === 200) {
              console.log(xhr.response)
              const data = JSON.parse(xhr.response)
              console.log(data)
              if (data.statis) {
                alert(data.errormessage)
              } else {
                alert('登录失败')
              }
            } else {
              // console.log()
              console.log(xhr.response)
            }
          } else {
            console.log('通信失败')
          }
        }
      }
    });
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', height: 700, padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
      </div>
    );
  }
}

export default App;
