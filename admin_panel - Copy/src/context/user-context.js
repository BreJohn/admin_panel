import React from 'react'

const userContext = React.createContext(
    {
        userSelected: '',
        selectUser: () => {},
        editUser: () => {}
    }
);

export default userContext;
