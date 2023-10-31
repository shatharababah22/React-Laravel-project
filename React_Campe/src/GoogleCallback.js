// 


// src/GoogleCallback.js

import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";

function GoogleCallback() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [user, setUser] = useState(null);
    const location = useLocation();

    // On page load, we take "search" parameters 
    // and proxy them to /api/auth/callback on our Laravel API
    useEffect(() => {

        fetch(`http://localhost:8000/api/auth/callback${location.search}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    }, []);

    // Helper method to fetch User data for authenticated user
    // Watch out for "Authorization" header that is added to this call
    function fetchUserData() {
        fetch(`http://localhost:8000/api/user`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + data.access_token,
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
                console.log("testttttttt88888888888888888888888");
                console.log(data);
                // localStorage.setItem()
            });
    }

    if (loading) {
        return <DisplayLoading/>
    } else {
        if (user != null) {
             console.log(data);
             console.log();

            return <DisplayData data={user}/>

        } else {
            return (
              <div>
                <DisplayData data={data} />
                <div style={{ margin: "250px", width: "350px" }}>
                  <button onClick={fetchUserData}>Fetch User</button>
                </div>
              </div>
            );
        }
    }
}

function DisplayLoading() {
    return <div>Loading....</div>;
}

function DisplayData(data) {
    return (
      <div style={{ margin: "250px", width: "350px" }}>
        <samp>{JSON.stringify(data, null, 2)}</samp>
      </div>
    );
}

export default GoogleCallback;



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function GoogleCallback() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState({});
//   const [user, setUser] = useState(null);
//   const location = useLocation();

//   // On page load, we take "search" parameters
//   // and proxy them to /api/auth/callback on our Laravel API
//   useEffect(() => {
//     fetch(`http://localhost:8000/api/auth/callback${location.search}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setLoading(false);
//         setData(data);
//       });
//   }, []);

//   // Helper method to fetch User data for authenticated user
//   // Watch out for "Authorization" header that is added to this call
//   function fetchUserData() {
//     fetch(`http://localhost:8000/api/user`, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer " + data.access_token,
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((userData) => {
//         setUser(userData);
//         setLoading(false);
//       });
//   }

//   // Function to handle Google logout
//   function handleLogout() {
//     // Send a POST request to Google's token revocation endpoint
//     fetch("https://accounts.google.com/o/oauth2/revoke", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: `token=${data.access_token}`,
//     })
//       .then(() => {
//         // Once the token is revoked, you can clear the user data and do any additional cleanup
//         setUser(null);
//         setData({});
//       })
//       .catch((error) => {
//         console.error("Error revoking token:", error);
//       });
//   }

//   if (loading) {
//     return <DisplayLoading />;
//   } else {
//     if (user != null) {
//       return (
//         <div>
//           <DisplayData data={user} />
//           <div style={{ margin: "250px", width: "350px" }}>
//             <button onClick={fetchUserData}>Fetch User</button>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <DisplayData data={data} />
//           <div style={{ margin: "250px", width: "350px" }}>
//             <button onClick={fetchUserData}>Fetch User</button>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         </div>
//       );
//     }
//   }
// }


//  function DisplayLoading() {
//     return <div>Loading....</div>;
// }

// function DisplayData(data) {
//     return (
//       <div style={{ margin: "250px", width: "350px" }}>
//         <samp>{JSON.stringify(data, null, 2)}</samp>
//       </div>
//     );
// }
// export default GoogleCallback;
