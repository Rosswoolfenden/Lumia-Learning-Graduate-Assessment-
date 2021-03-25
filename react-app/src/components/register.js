import React, {useState} from 'react';
import { Card, Form, Input, Button, Checkbox} from 'antd';
import axios from 'axios';


const { Meta } = Card;
const tailLayout = {
    wrapperCol: { offset: 22, span: 16 },
  };

// Initial user feilds to add to state
const userFeilds = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
}

// Component to register new users
function Register(props) {
    const [user, setUser] =  useState(userFeilds);

    const inputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    // todo seperate function.
    async function registerAttempt() {
        axios({
            method: 'post',
            url: "http://localhost:8080/api/users/register",
            data: {
                user
            }
        }).then(res => {
            console.log(res);
            alert('Succsesfully added new user, welcome')
            // props.refresh(true)
            props.refresh();
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
                        label="First Name"
                        name="firstname"
                        >
                        <Input name="firstName" onChange={inputChange}/>
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="lastname"
                        >
                        <Input name="lastName" onChange={inputChange}/>
                    </Form.Item>
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
                        <Button onClick={registerAttempt} className="submit" htmlType="submit"> Submit </Button>
                    </Form.Item>
                    
                </Form>
            </Card>
            
        </div>
    );
}

export default Register;