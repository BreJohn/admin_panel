import React from 'react'

const userContext = React.createContext(
    {
        userSelected: '',
        selectUser: (id) => {},
    }
);

export default userContext;
