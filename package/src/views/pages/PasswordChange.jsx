import React from "react";
import { useState } from "react";
import { Container, Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

//imports for template
import Header from "../../components/header/header";
import HeaderBanner2 from "../../components/banner2/banner2";
import Footer from "../../components/footer/footer";

const PasswordChange = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const HandlePasswordChange = async (event) => {
        event.preventDefault();
        if (currentPassword === '' || password === '' || passwordConfirm === '') {
            alert('Please fill in all fields');
            return;
        }
        if (password === passwordConfirm) {
            const passwordChangeData = {
                currentPassword: currentPassword,
                password: password,
            };
            try {
                const response = await fetch('/api/passwordChange', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(passwordChangeData)
                });
                if (response.status === 200) {
                    navigate('/account');
                } else if (response.status === 401) {
                    alert('Current password is incorrect.');
                } else {
                    alert('An error occurred. Please try again');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div>
            <Header />
            <HeaderBanner2 />
            <Container>
                <Row>
                    <Col>
                        <h1>Change Password</h1>
                        <Form onSubmit={HandlePasswordChange}>
                            <FormGroup>
                                <Label for="currentPassword">Current Password</Label>
                                <Input type="password" name="currentPassword" id="currentPassword" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">New Password</Label>
                                <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Input type="checkbox" onClick={togglePasswordVisibility} /> Show Password
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordConfirm">Confirm New Password</Label>
                                <Input type={showPassword ? "text" : "password"} name="passwordConfirm" id="passwordConfirm" placeholder="Confirm New Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default PasswordChange;