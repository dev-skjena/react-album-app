import React, { useContext, useState,Redirect } from 'react';
import { useLocation, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../App';

const Login = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');


    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    const [email1, setEmail1] = useState("");   //Email 1 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const id=localStorage.getItem('id');



    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            const user = response.data.find(
                (user) => (user.email === email || user.email === email1) && user.username === password
            );
            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                setIsLoggedIn(true);
                localStorage.setItem('id', user.id)
                // navigate('/dashboard');
                console.log('User:', user);

                // navigate('/dashboard', { state: {user} });  
                // navigate(`/dashboard/${user.id}`,{ state: {user} });  
                // navigate(`/dashboard/?id=${user.id}`,{state:{user}});

                navigate(`/dashboard/${user.id}`);  
                // navigate(`/dashboard`);




            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Error occurred during authentication');
        }
    };

    const showDefaultEmail = location.search && email;


    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleLogin}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email1"
                            className="form-control mt-1"
                            //   value={email1}
                            //   defaultValue={email}
                            value={showDefaultEmail ? email : email1}

                            onChange={(e) => setEmail1(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            // placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                    {error && <p className="error-message mt-3 text-center text-danger">{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;



// import React, { useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const email = searchParams.get('email');
//     const navigate = useNavigate();

//     const [password, setPassword] = useState("");
//     const [email1, setEmail1] = useState("");   //Email1 
//     const [error, setError] = useState("");

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/users');

//             // Find the user in the fetched data that matches the provided email and password
//             const user = response.data.find((user) => (user.email === email || user.email === email1) && user.username === password);
//             if (user) {
//                 localStorage.setItem('isLoggedIn', 'true');
//                 // setIsLoggedIn(true); // Update the isLoggedIn state to true
//                 console.log('Authentication successful');
//                 navigate('/dashboard');
//             } else {
//                 setError('Invalid credentials');
//             }
//         } catch (error) {
//             setError('An error occurred');
//         }
//     };


//     const showDefaultEmail = location.search && email;

//     return (
//         <div className="Auth-form-container">
//             <form className="Auth-form" onSubmit={handleLogin}>
//                 <div className="Auth-form-content">
//                     <h3 className="Auth-form-title">Sign In</h3>
//                     <div className="form-group mt-3">
//                         <label>Email address</label>
//                         <input
//                             type="email"
//                             name="email1"
//                             className="form-control mt-1"
//                             //   value={email1}
//                             //   defaultValue={email}
//                             value={showDefaultEmail ? email : email1}

//                             onChange={(e) => setEmail1(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group mt-3">
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             className="form-control mt-1"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className="d-grid gap-2 mt-3">
//                         <button type="submit" className="btn btn-primary" onClick={handleLogin}>
//                             Login
//                         </button>
//                     </div>
//                     {error && <p className="error-message mt-2">{error}</p>}
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;
