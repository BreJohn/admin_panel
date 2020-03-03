import React, { useContext, useState } from 'react'
import "./RightSideBar.css";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import User from "../../classes/classes";
import UserContext from '../../context/user-context';

const RightSideBar = (props) => {
    const userContext = useContext(UserContext);
    const foundUser = props.users.find(user => user.id === props.userSelected)
    const currentUser = foundUser ? { ...foundUser } : new User();
    const [formData, setFormData] = useState({...currentUser});

    const handleSubmit = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        const editedUser = { ...currentUser };
        editedUser[targetName] = targetValue;
        userContext.editUser(editedUser);
    }

    const handleInputChange = (event) => {
        const formData = {...currentUser};
        formData[event.target.name] = event.target.value;
        setFormData(formData)
    }

    return (
        <>
            <Form onSubmit = {handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                    />
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