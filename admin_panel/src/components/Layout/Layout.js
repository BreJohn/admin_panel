import React, { Component } from 'react'
import "./Layout.css"
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import { USERS } from "../../assets/user_data";
import UserContext from '../../context/user-context';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [...USERS], userSelected: '',  };        
    }

    userSelect = (id) => {
        this.setState({ userSelected: id });
    }
    
    userEdit = (user) => {
        let userIndex = this.state.users.findIndex(
            (user) => user.id === this.state.userSelected
        ); 
        const newUsers = [...this.state.users];
        newUsers[userIndex] = user;
        this.setState({ users: newUsers });
    }

    render() {
        return (
            <UserContext.Provider value={
                {
                    userSelected: this.state.userSelected, 
                    selectUser: this.userSelect, 
                    editUser: this.userEdit }}>
                <div className="row">
                    <div className="col-md col-3 leftSideBar">
                        <LeftSideBar 
                        users={this.state.users} 
                        onUserSelection={this.userSelect}> </LeftSideBar>
                    </div>
                    <div className="col-md col-9 rightSideBar">
                        <RightSideBar 
                        users={this.state.users}  
                        userSelected= {this.state.userSelected}
                        onUserEdit = {this.userEdit}></RightSideBar>
                    </div>
                </div>
            </UserContext.Provider>
        )
    }
}

export default Layout;