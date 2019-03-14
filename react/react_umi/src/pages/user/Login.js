import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styles from "./index.less"

@Form.create()
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
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.login}>
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className={styles.forgot} href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.button}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
