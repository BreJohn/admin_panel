import React, { Component } from 'react'
import "./Layout.css"
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import {USERS} from "../../assets/user_data";
const users = [...USERS];

class Layout extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md col-3 leftSideBar">
                    <LeftSideBar users={users}></LeftSideBar>
                </div>
                <div className="col-md col-9 rightSideBar">
                    <RightSideBar users={users}></RightSideBar>
                </div>
            </div>
        )
    }
}

export default Layout;