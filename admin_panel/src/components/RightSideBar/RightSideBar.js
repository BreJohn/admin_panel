import React from 'react'
import "./RightSideBar.css";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const RightSideBar = (props) => {

    const { currentUser, handleSubmit, handleReset, handleInputChange, buttonSubmitDisabled } = props;
    const cancelHidden = buttonSubmitDisabled? 'displayNone' : '' ;
    return (
        <>
            <Form onSubmit = {handleSubmit} onReset = {handleReset}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={currentUser.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                        value={currentUser.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        name="phone"
                        value={currentUser.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={currentUser.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter company"
                        name="company"
                        value={currentUser.company}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <div className="buttonsArea">
                    <Button className={`btn-cancel ${cancelHidden}`} variant="light" type="reset">
                        Cancel
                    </Button>
                    <Button className="btn-submit" disabled={buttonSubmitDisabled} variant="primary" type="submit">
                        Save
                    </Button>
                </div>
            </Form>
        </>
    )

}


export default RightSideBar;