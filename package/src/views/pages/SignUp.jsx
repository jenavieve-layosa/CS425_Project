import React, { useState } from 'react';
import { Container, Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//imports for template
import Header from "../../components/header/header";
import HeaderBanner2 from "../../components/banner2/banner2";
import Footer from "../../components/footer/footer";


const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [user_type, setUserType] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const HandleSignUp = async (event) => {
        event.preventDefault();
        if (firstname === '' || lastname === '' || email === '' || password === '' || passwordConfirm === '') {
            alert('Please fill in all fields');
            return;
        }
        if (password === passwordConfirm) {
            const signUpData = {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                account_type: user_type
            };
            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signUpData)
                });
                if (response.status === 200) {
                    alert('Account created successfully');
                    Navigate('/Login');
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
            <Container className="d-flex justify-content-center align-items-center vh-100" >
                    <Row>
                        <Col md="12">
                            <Form className="row" onSubmit={HandleSignUp}>
                                <FormGroup className="align-self-center text-center col-md-12">
                                    <Row>
                                        <Col md="6" className="mx-auto">
                                            <h2>Sign Up</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6" className="mx-auto">
                                            <Label htmlFor="firstname">First Name</Label>
                                                <Input type="text" className="form-control" id="firstname" placeholder="First Name" 
                                                    value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6" className="mx-auto">
                                            <Label htmlFor="lastname">Last Name</Label>
                                                <Input type="text" className="form-control" id="lastname" placeholder="Last Name"
                                                    value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6" className="mx-auto text-center">
                                            <Label htmlFor="user_type">User Type</Label>
                                                <Input type="select" className="form-control" id="user_type" placeholder='User Type'
                                                    value={user_type} onChange={(e) => setUserType(e.target.value)}>
                                                    <option value='2'>Independent Learner</option>
                                                    <option value='0'>Student</option>
                                                    <option value='1'>Teacher</option>
                                                </Input>
                                        </Col>
                                    </Row>
                                    {user_type === '0' && (
                                        <Row>
                                            <Col md="6" className="mx-auto">
                                                <Label htmlFor="class-code">Class Code</Label>
                                                    <Input type="text" className="form-control" id="class-code" placeholder="Class Code" />
                                            </Col>
                                        </Row>
                                    )}
                                </FormGroup>
                                <FormGroup className="align-self-center text-center col-md-12">
                                    <Row>
                                        <Col md="6" className="mx-auto">
                                            <Label htmlFor="email">Email Address</Label>
                                            
                                                <Input type="email" className="form-control" id="email" placeholder="Email" 
                                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                            
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup className="align-self-center text-center col-md-12">
                                    <Row>
                                        <Col md="6" className="mx-auto">
                                            <Label htmlFor="password">Password</Label>
                                            <Input type={showPassword ? "text": "password"} className="form-control" id="password" placeholder="Password" 
                                                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                        </Col>
                                        <Col md="0">
                                            <Label check>
                                                <Input type="checkbox" onChange={togglePasswordVisibility} />
                                                Show password
                                            </Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6" className='mx-auto'>
                                            <Label htmlFor="password">Confirm Password</Label>
                                            <Input type={showPassword ? "text":"password"} className="form-control" id="password" placeholder="Confirm Password" 
                                                value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                                            <checkPassword /> 
                                            {password !== passwordConfirm && <p style={{color:"red"}}>Passwords do not match</p>}
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Col md="12" className="act-buttons align-self-center text-center">
                                    <Button type="submit"  className="btn btn-success-gradient font-14" >Create Account</Button>
                                </Col>
                                <Col md="12" className='align-self-center text-center'>
                                    <Label>Already have an account?</Label>
                                </Col>
                                <div className="act-buttons align-self-center text-center">
                                    <Link to="/Login" className="btn btn-success-gradiant font-14">Login</Link>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            <Footer />
        </div>
    );
};

export default SignUp;