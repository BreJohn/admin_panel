import React, { useContext } from 'react'
import { Image } from 'react-bootstrap';
import "./User.css"
import UserContext from './../../../../../context/user-context';
import UserContainer from './UserStyles';
const User = (props) => {

    const userContext = useContext(UserContext);
    const bgColor = props.bgColor === 'bgColorSelected' ? '#1b68b3' : '#e8e8e8';
    
    const handleClick = () => {
        userContext.selectUser(props.user.id);
    }

    return (
        <UserContainer color = {bgColor} className={`row leftSideDiv ${props.bgColor}`} key={props.user.id} onClick={handleClick}>
            <div className="col-12 col-md-3">
                <Image src={props.user.photo} alt={`photo${props.user.id}`} roundedCircle className="image" />
            </div>
            <div className="col-md-9 userDetails">
                <strong className="h40">{props.user.name}</strong>
                <div className="h40">{props.user.email}</div>
            </div>
        </UserContainer>
    )

}

export default User;