import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import './header.scss';

const Header = () => {

    const history = useHistory();
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        setCurrentUser(localStorage.getItem("user"))
    }, [])

    const onHandleLogout = () => {
        localStorage.removeItem("user");
        history.push("/login");
    }
    
    return (
        <div className="header">
            <div className="header__logo">STARWARS</div>
            <div className="header__message">
                Hello! <span>{currentUser}</span>

                <button onClick={onHandleLogout}>Logout</button> 
            </div>
        </div>
    )
}

export default Header;
