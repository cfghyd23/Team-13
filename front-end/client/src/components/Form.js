// form to create requests
import React, { useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import Layout from "../Layout";
import axios from "axios";
import { useAuth } from "../context/auth.js";

const App = () => {
  const handleRequest = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const ans = await axios.post("http://localhost:8000/auth/getid", {
      email: credentials.name,
    });
    console.log(ans.data.id);
    const response = await axios.post(
      "http://localhost:8000/request/createreq",
      {
        patient: ans.data.id,
        hospital: credentials.hospital,
        quantity: credentials.quantity,
      }
    );
    const json = await response;
    console.log(json);

    if (!json.success) {
      alert(" alert about succes");
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [credentials, setCredentials] = useState({
    patient: "",
    hospital: "",
    bloodGroup: "",
    quantity: "",
    donors: "",
  });
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "100px" }}
      >
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
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              className="form-control"
              name="name"
              value={credentials.patient}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item
            label="bloodGroup"
            name="bloodGroup"
            rules={[
              {
                required: true,
                message: "Please input your bloodGroup!",
              },
            ]}
          >
            <Input
              className="form-control"
              name="bloodGroup"
              value={credentials.bloodGroup}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="quantity"
            name="quantity"
            rules={[
              {
                required: true,
                message: "Please input your required Quantity!",
              },
            ]}
          >
            <Input
              className="form-control"
              type="number"
              name="quantity"
              value={credentials.quantity}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item
            label="Location"
            name="Location"
            rules={[
              {
                required: true,
                message: "Please input your required Location!",
              },
            ]}
          >
            <Input
              className="form-control"
              name="Location"
              value={credentials.Location}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={handleRequest}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};
export default App;
