import React from 'react'
import "./LeftSideBar.css"
import Users from './Users/Users';

const LeftSideBar = (props) => {
    const userData = props.userData;

    return (
        <Users userData={userData}></Users>
    )
}

export default LeftSideBar;