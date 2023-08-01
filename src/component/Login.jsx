import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';

const LogIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleFinish = (values) => {
   
    const staticUsername = 'admin';
    const staticPassword = 'password';

    if (values.username === staticUsername && values.password === staticPassword) {
      setLoggedIn(true);
      alert("Login Successful")
      navigate("/dashboard")
     
    } else {
      notification.error({
        message: 'Login failed',
        description: 'Invalid credentials. Please try again.',
      });
    }
  };

  return (
    <div style={{width:'100%', height:'100vh'}}>
   <div  style={{ width:'600px', marginLeft:'550px', marginTop:'150px', padding:'100px', boxShadow:'5px 5px 5px 5px grey'}}>

   
      <h1 style={{textAlign:'center'}}>Login Form</h1>
     
        <Form onFinish={handleFinish} style={{marginTop:'50px'}}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item style={{marginTop:'50px', paddingLeft:'150px'}}>
            <Button type="primary" htmlType="submit" style={{justifySelf:'center', width:'100px', height:'50px'}}>
              Login
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  );
};

export default LogIn;