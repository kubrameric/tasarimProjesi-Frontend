import { Form, Input, Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/AuthService";

const Home = () => {
  const [credentials, setCredentials] = useState({});
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
    const response = AuthService.signin(credentials);
    if (response) {
      history.push("/RoboticArm");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className="loginBody">
      <Form
        className="loginForm"
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1>Login</h1>
        <Form.Item
          className="item"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input
            onChange={handleChange}
            name="username"
            value={credentials.username}
          />
        </Form.Item>

        <Form.Item
          className="item"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password
            onChange={handleChange}
            name="password"
            value={credentials.password}
          />
        </Form.Item>

        <Form.Item className="item">
          <Button type="submit" htmlType="submit" className="inputButton">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
