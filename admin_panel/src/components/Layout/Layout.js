import React, { Component } from 'react'
import "./Layout.css"
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import { USERS } from "../../assets/user_data";
import UserContext from '../../context/user-context';
import User from '../../classes/classes';

class Layout extends Component {

    constructor(props) {
        super(props);
        const users = USERS.reduce(
            (acc, curr) => {
                acc[curr.id] = curr
                return acc;
            }, {}
        )
        this.state = { 
            users: users, 
            userSelected: '', 
            currentUser: new User(), 
            submitDisabled: true };
    }

    userSelect = (id) => {
        this.setState({ userSelected: id, currentUser: this.state.users[id] });
    }

    submit = (event) => {
        // const formData = event.target.value;
        event.preventDefault();
        const edittedUser = { ...this.state.currentUser };
        Object.keys(edittedUser).filter(key => key !== 'id' && key !== 'photo').map(
            (key) => {
                return edittedUser[key] = event.target.elements[key].value
            }
        )
        const newUsers = { ...this.state.users };
        newUsers[this.state.userSelected] = edittedUser;
        this.setState({ users: newUsers });
    }
    reset = () => {
        this.setState({
            currentUser:this.state.users[this.state.userSelected],
            submitDisabled: true
        });
        
    }

    inputChange = (event) => {
        this.setState({submitDisabled: false});
        const user = { ...this.state.currentUser }
        user[event.target.name] = event.target.value;
        this.setState({ currentUser: user });
    }

    render() {
        return (

            <div className="row">
                <div className="col-md col-3 leftSideBar">
                    <UserContext.Provider value={
                        {
                            userSelected: this.state.userSelected,
                            selectUser: this.userSelect,
                        }}>
                        <LeftSideBar
                            users={this.state.users}
                            onUserSelection={this.userSelect}> </LeftSideBar>
                    </UserContext.Provider>
                </div>
                <div className="col-md col-9 rightSideBar">
                    <RightSideBar
                        currentUser={this.state.currentUser}
                        handleSubmit={this.submit}
                        handleReset={this.reset}
                        handleInputChange={this.inputChange}
                        buttonSubmitDisabled = {this.state.submitDisabled}                        
                    ></RightSideBar>
                </div>
            </div>

        )
    }
}

export default Layout;