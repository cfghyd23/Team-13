import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="bloodGroup"
      name="bloodGroup"
      rules={[
        {
          required: true,
          message: 'Please input your bloodGroup!',
        },
      ]}
    >
       <Input />
    </Form.Item>

    <Form.Item
      label="Quantity"
      name="Quantity"
      rules={[
        {
          required: true,
          message: 'Please input your required Quantity!',
        },
      ]}
    >
       <InputNumber />
    </Form.Item>

    <Form.Item
      label="Location"
      name="Location"
      rules={[
        {
          required: true,
          message: 'Please input your required Location!',
        },
      ]}
    >
       <Input />
    </Form.Item>

    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
