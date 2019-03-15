import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styles from "./index.less"
import { connect } from "dva"

@Form.create()
@connect((state) => ({
  login: state.login,
}))
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 登录表单提交事件
  handleSubmit = e => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props
        dispatch({ type: "login/login", payload: {...values}})
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 25 },
    }
    return (
      <div className={styles.main}>
      <div className={styles.login}>
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <Form.Item {...formItemLayout}>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "请输入用户名!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>
          <br/>
          <Form.Item {...formItemLayout}>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "请输入密码!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="请输入密码"
              />
            )}
          </Form.Item>
          <br/>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>是否保持登录</Checkbox>)}
            <a className={styles.forgot} href="">
              忘记密码
            </a>
            <Button type="primary" htmlType="submit" className={styles.button}>登录</Button>
            <a href="">注册用户</a>
          </Form.Item>
        </Form>
      </div>
      </div>
    );
  }
}
