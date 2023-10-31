// src/SignIn.js

import React, {useState, useEffect} from 'react';

function SignIn() {

    const [loginUrl, setLoginUrl] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/auth', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong!');
                
            })
            .then((data) => setLoginUrl( data.url ))
            .catch((error) => console.error(error));
    }, []);




    return (
        <div style={{ height:'100px', margin: "100px", width: "250px" }}>
            {/* {loginUrl != null && ( */}
                <a href={loginUrl}>Google Sign In</a>
            {/* )} */}
        </div>
    );
}

export default SignIn;