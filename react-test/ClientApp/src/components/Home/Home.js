import React, {useState} from 'react';
import {homeService} from "../../services/home.service";

const Home = () => {

    const [message, setMessage] = useState("");

    homeService.getHello().then(value => setMessage(value))

    return (
        <div>
            {message}
        </div>
    );
};

export default Home;