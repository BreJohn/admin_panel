import "./LeftSideBar.css"
import React from 'react'
import User from "../User/User";

function LeftSideBar(props) {
    const users = props.users;
    return (
        users.map(
            (user, index) => (
                <User key={index} user={user}></User>
            )
        )
    )

}

export default LeftSideBar;