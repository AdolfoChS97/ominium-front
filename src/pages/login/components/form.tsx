import { UnlockOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Typography } from "antd"; 
import { Props, Field } from '../dataTypes';
import { useState } from "react";

export const LoginForm = (props: Props) => {
  const {
    onFinish,
    onFinishFailed
  } = props;

  const [ isWritting, setIsWritting ] = useState(false);

  return (
    <>
      <Card title="Login" style={{ width: 600 }}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<Field>
            name="user_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <div>
                <Typography.Title level={5}>Username</Typography.Title>
                <Input 
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  size="large" 
                />
            </div>
          </Form.Item>

          <Form.Item<Field>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div>
                <Typography.Title level={5}>Password</Typography.Title>
                <Input.Password 
                  size="large"
                  prefix={isWritting ? <UnlockOutlined className="site-form-item-icon" /> : <LockOutlined className="site-form-item-icon" />}
                  onChange={(e) => {
                    const value = e.target.value;
                    if(value) setIsWritting(true)
                    else setIsWritting(false)
                  }} 
                  placeholder="****************" />
            </div>
          </Form.Item>

          <Form.Item<Field>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
