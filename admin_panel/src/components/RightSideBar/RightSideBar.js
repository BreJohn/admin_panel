import React, { useContext } from 'react'
import "./RightSideBar.css";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import User from "../../classes/classes";
import UserContext from '../../context/user-context';

const RightSideBar = (props) => {
    const userContext = useContext(UserContext);
    const foundUser = props.users.find(user => user.id === props.userSelected)
    const currentUser = foundUser ? { ...foundUser } : new User();

    const handleInputChange = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        const editedUser = { ...currentUser };
        editedUser[targetName] = targetValue;
        userContext.editUser(editedUser);
    }

    return (
        <>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={currentUser.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                        value={currentUser.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        name="phone"
                        value={currentUser.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={currentUser.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formCompany">
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