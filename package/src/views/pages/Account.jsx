import { useEffect, useState } from "react";
import React from "react";

//imports for the template
import Header from "../../components/header/header";
import HeaderBanner2 from "../../components/banner2/banner2";
import Footer from "../../components/footer/footer";
import { Container, Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';

const Account = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [editing, setEditing] = useState(false);

    const getUserData = async () => {
        try {
            const response = await fetch('/api/userData', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    const HandleEdit = async (event) => {
        event.preventDefault();
        const editData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
        };
        try {
            const response = await fetch('/api/editAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
            });
            if (response.status === 200) {
                setEditing(false);
                getUserData();
            } else {
                alert('An error occurred. Please try again');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

return (
    <div id="main-wrapper">
        <Header />
        <HeaderBanner2 />
            <Container>
                {editing === false && (
                    <Row>
                        <Col classname="self-align-center text-center">
                            <h2>Account Information</h2>
                            <p>First Name: {firstname}</p>
                            <p>Last Name: {lastname}</p>
                            <p>Email: {email}</p>
                            <Button onClick={() => setEditing(true)}>Edit</Button>
                        </Col>
                    </Row>
                )}
                {editing === true && (
                    <Form className="row" onSubmit={HandleEdit}>
                        <FormGroup className="align-self-center text-center col-md-12">
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
                    </Form>
                )}
            </Container>
        <Footer />
    </div>

);
}

export default Account;