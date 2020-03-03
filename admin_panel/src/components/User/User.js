import React, { useContext } from 'react'
import { Image } from 'react-bootstrap';
import "./User.css"
import UserContext from '../../context/user-context';
const User = (props) => {

    const userContext = useContext(UserContext);
    const handleClick = () => {
        userContext.selectUser(props.user.id);
    }

    return (
        <div className='row leftSideDiv' key={props.user.id} onClick={handleClick}>
            <div className="col-12 col-md-3">
                <Image src={props.user.photo} alt={`photo${props.user.id}`} roundedCircle className="image" />
            </div>
            <div className="col-md-9 userDetails">
                <strong className="h40">{props.user.name}</strong>
                <div className="h40">{props.user.email}</div>
            </div>
        </div>
    )

}

export default User;