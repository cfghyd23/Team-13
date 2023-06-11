// form to create requests
import React, { useState } from "react";
import { Button, Form, Input, InputNumber } from 'antd';


const App = () => {
    const handleRequest = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/request/createreq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ patient: credentials.name, hospital: credentials.hospital, bloodGroup: credentials.bloodGroup, quantity: credentials.quantity, donors: credentials.donors })
        });
        const json = await response.json()
        console.log(json);
         
        if(!json.success){
            alert(" alert about succes")
        }
        }
    const onFinish = (values) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
   const [credentials, setCredentials] = useState({ patient: "", hospital: "", bloodGroup: "", quantity: "", donors: ""})
   const onChange = (event) =>{
    setCredentials({...credentials, [event.target.name]:event.target.value})
}
return(
  <Form
  onSubmit = {handleRequest}
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
      <Input className="form-control" name='name' value={credentials.name} onChange={onChange}/>
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
       <Input className="form-control" name='bloodGroup' value={credentials.bloodGroup} onChange={onChange}/>
    </Form.Item>
    <Form.Item
      label="quantity"
      name="quantity"
      rules={[
        {
          required: true,
          message: 'Please input your required Quantity!',
        },
      ]}
    >
       <Input className="form-control" type="number"  name="quantity" value={credentials.quantity} onChange={onChange}/>
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
       <Input className="form-control" name='Location' value={credentials.Location} onChange={onChange}/>
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
  </Form>)
};
export default App;
