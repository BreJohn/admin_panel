import React, { Component } from 'react'
import "./Container.css"
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import { USERS } from "../../assets/user_data";
import UserContext from '../../context/user-context';
import User from '../../classes/classes';

class Layout extends Component {

    constructor(props) {
        super(props);
        const users = USERS? USERS.reduce(
            (acc, curr) => {
                acc[curr.id] = curr
                return acc;
            }, {}
        ) : [];
        this.state = {
            userData: users,
            userSelected: '',
            currentUser: new User(),
            submitDisabled: true
        };
    }

    userSelect = (id) => {
        this.setState({ userSelected: id, currentUser: this.state.userData[id] });
    }

    submit = (event) => {
        event.preventDefault();
        if(!this.state.currentUser) {
            console.error('No User Selected!');
            return;        } 
        const edittedUser = { ...this.state.currentUser };
        Object.keys(edittedUser).filter(key => key !== 'id' && key !== 'photo').map(
            (key) => {
                return edittedUser[key] = event.target.elements[key].value
            }
        )
        const newUsers = { ...this.state.users };
        newUsers[this.state.userSelected] = edittedUser;
        this.setState({ users: newUsers, submitDisabled: true });
    }
    reset = () => {
        if(!this.state.userSelected) {
            console.error('No User Selected!');
            return;
        }
        this.setState({
            currentUser: this.state.userData[this.state.userSelected],
            submitDisabled: true
        });

    }

    inputChange = (event) => {
        this.setState({ submitDisabled: false });
        const user = { ...this.state.currentUser }
        user[event.target.name] = event.target.value;
        this.setState({ currentUser: user });
    }

    render() {
        if (!USERS && USERS.length < 1) {
            console.error('NO USERS FOUND!');
            return (<></>)
        }
        return (

            <div className="row">
                <div className="col-md col-3 leftSideBar">
                    <UserContext.Provider value={
                        {
                            userSelected: this.state.userSelected,
                            selectUser: this.userSelect,
                        }}>
                        <LeftSideBar
                            userData={this.state.userData}
                            onUserSelection={this.userSelect}> </LeftSideBar>
                    </UserContext.Provider>
                </div>
                <div className="col-md col-9 rightSideBar">
                    <RightSideBar
                        currentUser={this.state.currentUser}
                        handleSubmit={this.submit}
                        handleReset={this.reset}
                        handleInputChange={this.inputChange}
                        buttonSubmitDisabled={this.state.submitDisabled}
                    ></RightSideBar>
                </div>
            </div>

        )
    }
}

export default Layout;