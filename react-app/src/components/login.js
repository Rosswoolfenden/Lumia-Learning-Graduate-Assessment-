import React, {useContext, useState} from 'react';
import { Card, Form, Input, Button, Checkbox} from 'antd';
import {UserContext} from '../contexts/usercontext';
import axios from 'axios';


const { Meta } = Card;
const tailLayout = {
    wrapperCol: { offset: 22, span: 16 },
  };

const userFeilds = {
    username: "",
    password: "",
}
function Login(props) {
    const [user, setUser] =  useState(userFeilds);
    const { auth, setAuth } =  useContext(UserContext);

    const inputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    
    async function loginAttempt() {
        axios({
            method: 'post',
            url: "http://localhost:8080/api/users/",
            headers: {
                "Authorization": "Basic " + btoa(user.username + ":" + user.password),
            }
        }).then(res => {
            console.log(res);
            const userdata = res.data.User;
            userdata.password = user.password;
            setAuth(userdata);
        }).catch(err => {
            console.log(err)
            alert("Failed to log in, try again");
        })
    }
    return (
        <div>
            <Card className="login-card">
                <Meta title={"Login"} /> 
                <Form>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Enter a username!'}]}
                        >
                        <Input name="username" onChange={inputChange}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Enter your password!'}]}
                        >
                        <Input.Password name="password" onChange={inputChange}/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button onClick={loginAttempt} className="submit" htmlType="submit"> Submit </Button>
                    </Form.Item>
                    
                </Form>
            </Card>
            
        </div>
    );
}

export default Login;