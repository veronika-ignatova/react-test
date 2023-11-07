import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";

import './Users.css';
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users))
    }, []);
    return (
        <div className="users">
            {users.map((user, num) => <User key={user.id} user={user} number={num+1}/>)}
        </div>

    );
};

export default Users;