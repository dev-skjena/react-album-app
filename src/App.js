import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AlbumTitle from './components/AlbumTitle';
import Protected from './components/Protected';

import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import PhotosPage from './components/PhotosPage';

export const AuthContext = React.createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const id=localStorage.getItem('id');

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedIsLoggedIn === 'true');
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  // }, [isLoggedIn]);                                            //Changing the logout btn to login but user details are showing

  //  not to - Change the logout btn to login but user details are showing
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleLogout }}>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<UserList />} />
        
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={isLoggedIn ? <Navigate to={`/dashboard/${id}`} /> : <Login />} />


          <Route element={<Protected />}>  
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route path="/dashboard/:id/albums" element={<AlbumTitle />} />
            <Route path="/photos/:albumId" element={<PhotosPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;













// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import UserList from './components/UserList';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// export const AuthContext = React.createContext();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <BrowserRouter>
//       <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<UserList />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </AuthContext.Provider>
//     </BrowserRouter>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import UserList from './components/UserList';
// import Navbar from './components/Navbar';
// // import SearchBar from './components/SearchBar';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export const AuthContext = React.createContext();


// const App = () => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
//     setIsLoggedIn(storedIsLoggedIn === 'true');
//   }, []);

//   // Update local storage and state on login status change
//   useEffect(() => {
//     localStorage.setItem('isLoggedIn', isLoggedIn.toString());
//   }, [isLoggedIn]);


//   return (
//     <BrowserRouter>
//       {/* <Navbar /> */}
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       {/* <SearchBar /> */}
//       <Routes>
      
//         <Route path="/" element={<UserList />} />
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>

//     </BrowserRouter>

//   );
// };

// export default App;








// <BrowserRouter>
//   <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<UserList />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   </AuthContext.Provider>
// </BrowserRouter>

  //  <Route exact path="/" element={< UserList />} />
  //  <Route path="/login" element={< Login />} />
  //  <Route path='/dashboard' element={<Dashboard />} />














   