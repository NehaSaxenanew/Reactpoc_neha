import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Navigate } from "react-router-dom";

export default function Login() {
    const [isSuccess,setisSuccess] =  useState(false);
    const [userData, setUserData] = useState({ EmailId: "", password: "" });
      const handleChange = (key, value) => {
        setUserData({
            ...userData,
            [key]: value
        });
    }
    console.log("Insidelogin");
    const handleSubmit = async(event) => {      
        event.preventDefault();
        await axios.post(`http://localhost:59920/api/Login/LoginNonSSO`, { ...userData })
            .then(res => {
                console.log('Neha' , res.data);
                localStorage.setItem('AuthToken',res.data.token);
                setisSuccess(!isSuccess);

            })
    }
    return (
        <div>
            <div>
                <h3>Resource Management Tool</h3>
                <hr />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={userData.EmailId} onChange={(e) => handleChange("EmailId", e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e) => handleChange("password", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} disabled={!(userData.EmailId && userData.password)}>
                        Submit
  </Button>
                </Form>
                {isSuccess && <Navigate to="/dashboard" />
}
            </div>
        </div>

    )
}
