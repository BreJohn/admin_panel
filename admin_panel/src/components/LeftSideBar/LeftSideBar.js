import "./LeftSideBar.css"
import React from 'react'
import User from "../User/User";

function LeftSideBar(props) {
    const users = props.users;
    return (
        Object.keys(users).map(
            (index) => (
                <User key={index} user={users[index]}></User>
            )
        )
    )

}

export default LeftSideBar;