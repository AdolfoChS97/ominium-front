import { FormProps } from "antd/lib";
import { LoginForm } from "./components/form";
import { Row, Col, notification } from "antd";
import { LoginFormData } from "./dataTypes";
import { useLogin } from "@refinedev/core";
import { CheckOutlined } from "@ant-design/icons";


export const Login = () => {
  const { mutate: login } = useLogin<LoginFormData>();

  const onFinish = (values: FormProps['onFinish']) => {    
    const formData = values as unknown as LoginFormData;
    login({...formData}, {});
  };
  
  const onFinishFailed = (errorInfo: FormProps['onFinishFailed']) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
      <Row style={{ height: '100vh', width: '100vw' }} align="middle" justify="center">
        <Col>
            <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Col>
    </Row>
    </>
  );
};
