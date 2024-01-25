import { useEffect, useState } from "react";
import React from "react";

const AsyncAwait = () =>{
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('/api/test');
        const res = await response.json();
        setData(res);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return data;
}

const Login = () => {
    const data = AsyncAwait();
    const name = data.map((data) => data.name);
    return (
        <div>
            <h1>Login Page</h1>
            <p>Welcome, {name}</p>
        </div>
    );
}
export default Login;