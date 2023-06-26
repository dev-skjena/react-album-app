import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import '../App.css';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn,user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const id=localStorage.getItem('id');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
    navigate('/');
  };

  // // const showNavbarPaths = ['/', '/dashboard', '/login'];
  // const showNavbarPaths = ['/','/login', /^\/dashboard\/.*/];
  // // const shouldShowNavbar = showNavbarPaths.includes(location.pathname);
  // const shouldShowNavbar = showNavbarPaths.some((path) =>
  //   location.pathname.match(path)
  // );


  // if (!shouldShowNavbar) {
  //   return null;
  // }

  return (
    <div style={{ marginTop: '5px',justifyContent:'center' }}>
      {isLoggedIn ? (
        <>        
            <nav className="navbar navbar-light bg-light nav justify-content-center">
                <a className='navbar-brand'> <NavLink to="/"   style={{ padding: '2px', textDecoration: 'none', fontSize: '20px' }} >USERS </NavLink></a>
                <a className='navbar-brand'> <NavLink to={`/dashboard/${id}`}    style={{ padding: '2px', textDecoration: 'none', fontSize: '20px' }} >DASHBOARD </NavLink></a>
                {/* {dashboardLink} */}
                    {/* <form class="form-inline"> */}
                    <a className='navbar-brand'> <button className="btn btn-danger my-2 " onClick={handleLogout}>Logout</button></a>
                    {/* </form> */}
            </nav>
          
        </>
      ) : (
        <>
        {/* style={{ padding: '2px', textDecoration: 'none', fontSize: '20px' }}  */}
          
          <nav class="navbar navbar-light bg-light justify-content-center">
                <a className='navbar-brand'> <NavLink to="/" style={{ padding: '2px', textDecoration: 'none', fontSize: '20px' }}   >USERS </NavLink></a>
                <a className='navbar-brand'> <NavLink to={`/dashboard/${id}`}   style={{ padding: '2px', textDecoration: 'none', fontSize: '20px'}} >DASHBOARD </NavLink></a>
                {/* {dashboardLink} */}
                    {/* <form class="form-inline"> */}
                           
                   <a className='navbar-brand'><NavLink to="/login" style={{ padding: '10px', textDecoration: 'none', fontSize: '20px' }}>LOGIN</NavLink></a>     
             
                    {/* </form> */}

            </nav>
        </>
      )}
    </div>
  );

};

export default Navbar;



// import React, { useContext,useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';


// const Navbar = () => {

//     // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();
   
//      const [isLoggedIn, setIsLoggedIn] = useState(false); // Maintain a login state

//     useEffect(() => {
//         // Check browser storage to determine if user is logged in
//         const isLoggedInStorage = localStorage.getItem("isLoggedIn") === "true";
//         setIsLoggedIn(isLoggedInStorage);
//     }, []);

//     // Specify the paths where you want to show the navbar
//     const showNavbarPaths = ["/", "/dashboard"];

//     // Check if the current location matches any of the paths to show the navbar
//     const shouldShowNavbar = showNavbarPaths.includes(location.pathname);

//     const handleLogout = () => {
//         localStorage.removeItem("isLoggedIn"); // Remove the login state from browser storage
//         setIsLoggedIn(false); // Update the login state
//         navigate('/') // Redirect to the homepage
//     };

//     if (!shouldShowNavbar) {
//         return null; // Don't render the navbar if shouldShowNavbar is false
//     }
//     return (
//         <nav className="" style={{ textAlign: "center", marginTop: "20px" }}>
//             <Link to="/" style={{ padding: "10px", textDecoration: "none", fontSize: "20px" }}>
//                 Users
//             </Link>
//             <Link to="/dashboard" style={{ padding: "10px", textDecoration: "none", fontSize: "20px" }}>
//                 Dashboard
//             </Link>
//             {isLoggedIn ? (
//                 <button onClick={handleLogout} style={{ padding: "10px", fontSize: "20px" }}>
//                     Logout
//                 </button>
//             ) : (
//                 <Link to="/login" style={{ padding: "10px", textDecoration: "none", fontSize: "20px" }}>
//                     Login
//                 </Link>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
