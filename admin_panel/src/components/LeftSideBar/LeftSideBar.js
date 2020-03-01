import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import "./LeftSideBar.css"
class LeftSideBar extends Component {

    render() {
        const users = this.props.users;
        return (
            users.map(
                (user) => (<div className='row leftSideDiv'>
                    <Image src={user.photo} alt={`photo${user.id}`} roundedCircle className="image" />
                </div>)
            )

        )
    }
}

export default LeftSideBar;