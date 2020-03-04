import "./LeftSideBar.css"
import React, { useContext } from 'react'
import User from "../User/User";
import UserContext from '../../context/user-context';

function LeftSideBar(props) {
    const users = props.users;
    const userContext = useContext(UserContext);
    const selectedUser = userContext.userSelected

    // const [bgColorSelected, setBgColor] = useState('bgColorDefault');

    // const  = bgColor === 'bgColorDefault'? 'bgColorSelected' : 'bgColorDefault'; 
    return (
        Object.keys(users).map(
            (index) => {
                let bgColor = 'bgColorDefault';
                if (selectedUser === index) {
                    bgColor = 'bgColorSelected'
                }
                return <User key={index} user={users[index]} bgColor={bgColor}></User>
            }
        )
    )

}

export default LeftSideBar;