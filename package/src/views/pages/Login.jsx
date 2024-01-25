import { useState } from "react";

const Login = () => {
    const [data, setData] = useState();
    fetch('/test')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    return (
        <div>
            <h1>Login</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
export default Login;