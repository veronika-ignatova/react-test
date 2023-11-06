import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;