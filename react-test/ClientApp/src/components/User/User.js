import React from 'react';

const User = ({user, number}) => {
    const {id, name, email} = user;
    return (
        <div>
            <div className="text-center">User {number}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <hr className="separator" />
        </div>
    );
};

export default User;