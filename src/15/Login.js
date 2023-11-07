import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Logout from "./Logout";

const Login = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        setUser(localStorage.getItem("user"));
    }, []);

    return (
        <div className="container mx-auto">
            {user ? <Logout user={user} setUser={setUser} /> : <LoginForm setUser={setUser}/>}
        </div>
    )
}

export default Login
