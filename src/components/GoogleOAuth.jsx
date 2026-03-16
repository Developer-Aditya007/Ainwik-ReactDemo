
/*App.js*/
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleOAuth() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    
    // localStorage.setItem("data",JSON.stringify({"name": profile.name,"email": profile.email}))
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="userimage" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <p>ProfileId: {profile.id}</p>
                    <br />
                    <br />
                    <button className='border' onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
        
    );
}
export default GoogleOAuth;

/*App.js*/

// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';

// function App() {
//   const responseMessage = (response) => {
//       console.log(response);
//   };
//   const errorMessage = (error) => {
//       console.log(error);
//   };
//   return (
//       <div>
//           <h2>React Google Login</h2>
//           <br />
//           <br />
//           <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
//       </div>
//   )
// }
// export default App;