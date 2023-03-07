import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='login'>
      <Row gutter={16}>

        <Col lg={16} style={{position: "relative"}}>

          <img src="https://images.wallpaperscraft.com/image/single/lights_car_dark_128635_1366x768.jpg" height="100%" width="100%"/>
        </Col>
        <Col lg={8} className='text-left p-5'>
          <Form layout='vertical' className='login-form p-5'>
        <h1>Register</h1>
        <hr/>
            <Form.Item name="username" label="Username" rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name="cpassword" label="Confirm Password" rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <button className='btn1 mt-2 mh-5'>Register</button>
            <hr/>
            <Link to="/login">Click here to login</Link>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Register