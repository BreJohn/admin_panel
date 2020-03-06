import React, { useContext } from 'react';
import User from './User/User/User';
import UserContext from '../../../context/user-context';

const Users = (props) => {
    const userContext = useContext(UserContext);
    const selectedUser = userContext.userSelected;
    return (
        <>
            {
                Object.keys(props.userData).map(
                    (index) => {
                        let bgColor = 'bgColorDefault';
                        if (selectedUser === index) {
                            bgColor = 'bgColorSelected'
                        }
                        return <User key={index} user={props.userData[index]} bgColor={bgColor}></User>
                    }
                )
            }
        </>

    )
}

export default Users;