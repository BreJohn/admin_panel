import React, { Component } from 'react'
import "./Layout.css"
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import {USERS} from "../../assets/user_data";

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [...USERS]};
      }
    
    userSelected = (id) => {
        this.setState({userSelected: id});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md col-3 leftSideBar">
                    <LeftSideBar users={this.state.users} onUserSelection = {this.userSelected}> </LeftSideBar>
                </div>
                <div className="col-md col-9 rightSideBar">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        )
    }
}

export default Layout;