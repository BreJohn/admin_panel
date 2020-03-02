import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import "./LeftSideBar.css"
class LeftSideBar extends Component {

    render() {
        const users = this.props.users;
        return (
            users.map(
                (user) => (
                <div className='row leftSideDiv' key={user.id}>
                    <div className="col-12 col-md-3">
                    <Image src={user.photo} alt={`photo${user.id}`} roundedCircle className="image" />
                    </div>
                    <div className="col-md-9 userDetails">
                    <strong className="h40">{user.name}</strong>
                    <div className="h40">{user.email}</div>
                    </div>

                </div>)
            )

        )
    }
}

export default LeftSideBar;