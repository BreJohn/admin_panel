import React from 'react'
import "./RightSideBar.css";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function RightSideBar(){

        return (
            <>
                <Form>
                <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email address" />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone" />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                    <Form.Group controlId="formCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Enter company"/>
                    </Form.Group>
                    <div className="buttonsArea">
                    <Button className="btn-cancel" variant="light" type="reset">
                        Cancel
                    </Button>
                    <Button className="btn-submit" variant="primary" type="submit">
                        Save
                    </Button>
                    </div>
                </Form>
            </>
        )
    
}

export default RightSideBar;