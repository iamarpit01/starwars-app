import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

import './login.scss';

const Login = () => {
    const [userlist, setUserlist] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("user")){
            history.push("/dashboard")
        }
        else{
            Axios.get("https://swapi.dev/api/people")
            .then(response => {
                setUserlist(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => console.log(error.message))
        }

    }, []);

    const onLogin = (event) => {
        event.preventDefault();
        if(username === ""){
            alert("Please enter username.")
        }
        else if(password === ""){
            alert("Please enter password.")
        }
        else{
            let hasUsername = userlist.some(user => user.name === username);
            let hasPassword = userlist.some(user => user.birth_year === password)
            if(hasUsername && hasPassword){
                localStorage.setItem("user", username);
                history.push("/dashboard");
            }
            else{
                alert("Username or Password doesn't match.")
            }
        }
    }

    return (
        <div className="login-wrapper">
            <h1>Welcome to STAR WARS!</h1>

            <div className="login-form">
            <h3>Login</h3>
                <form onSubmit={onLogin}>
                    <div className="login-form__control">
                        <label>Username</label>
                        <input type="text" value={username} name="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="login-form__control">
                        <label>Password</label>
                        <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;