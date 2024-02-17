import { useEffect, useState } from "react";
import React from "react";

//imports for the template
import Header from "../../components/header/header";
import HeaderBanner2 from "../../components/banner2/banner2";
import Footer from "../../components/footer/footer";
import { Container, Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';


const AsyncAwait = (loginData) =>{
    const [data, setData] = useState([]);

    const login = async () => {
        try{
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            
            });
            const res = await response.json();
            setData(res);
        } catch (error) {
            console.log('Error:', error);
        }
    }
    useEffect(() => {
        login();
    }, );
    return data.map((data) => data.status);
}

const HandleSubmit = async (event) => {
    event.preventDefault();
    
    const loginData = {
        email: event.target.email.value,
        password: event.target.password.value
    }
    AsyncAwait(loginData);
};

const Login = () => {
    //use states for the login info
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    //data fetching functions
    //const name = data.map((data) => data.name);

    //non data related functions
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
            <HeaderBanner2 />
                <Container className="d-flex justify-content-center align-items-center vh-100" >
                    <Row>
                        <Col md="12">
                            <Form className="row" onSubmit={HandleSubmit}>
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
                                        <Col md="1" className="mx-center">
                                            <Label check>
                                                <Input type="checkbox" onChange={togglePasswordVisibility} />
                                                Show password
                                            </Label>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Col md="12" className="align-self-center text-center">
                                    <Button type="submit"  className="btn btn-success waves-effect waves-light m-r-10" >Login</Button>
                                </Col>
                                <Col md="12" className="align-self-center text-center">
                                    <Button type="submit" className="btn btn-inverse waves-effect waves-light">Forgot Password?</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
export default Login;