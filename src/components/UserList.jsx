import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const uid=localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      
      try {      
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data);
          setFilteredUsers(response.data);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      // Delete the user data from the API
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

      // Remove the deleted user from the local state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user">
      <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
      <div className="user-list card-container mt-5">
       
        {filteredUsers.map((user) => ( 
          <UserCard key={user.id} user={user} onDelete={deleteUser} />
        ))}
      </div>
    </div>
  );
};

export default UserList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from './UserCard';
// import SearchBar from './SearchBar';
// import '../App.css';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteUser = async (userId) => {
//     try {
//       // Delete the user data from the API
//       await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

//       // Remove the deleted user from the local state
//       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="user">
//       <SearchBar data={users} onDelete={deleteUser} />
//       <div className="user-list card-container mt-5">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} onDelete={deleteUser} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from './UserCard';
// import '../App.css';
// import SearchBar from './SearchBar';

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [showAllUsers, setShowAllUsers] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//                 setUsers(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();
//     }, []);


//     const deleteUser = async (userId) => {
//         try {
//             // Delete the user data from the API
//             await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

//             // Remove the deleted user from the local state
//             setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const toggleShowAllUsers = () => {
//         setShowAllUsers(!showAllUsers);
//     };

//     let displayedUsers = users;
//     if (!showAllUsers) {
//         displayedUsers = users.slice(0, 4);
//     }
//     const showViewAllButton = !showAllUsers && users.length > 4;
//     const showShowLessButton = showAllUsers && users.length > 4;

//     return (
//         <div className='user'>
//             <SearchBar key={users.id} data={users} onDelete={deleteUser}></SearchBar>

//             <div className="user-list card-container  mt-5">
//                 {displayedUsers.map((user) => (
//                     <UserCard key={user.id} user={user} onDelete={deleteUser} />
//                 ))}
//                 {showViewAllButton && (
//                     <div className="view-all-button">
//                         <button onClick={toggleShowAllUsers}>View All</button>
//                     </div>
//                 )}
//                 {showShowLessButton && users.length > 8 && (
//                     <div className="view-all-button-last">
//                         <button onClick={toggleShowAllUsers}>Show Less</button>
//                     </div>
//                 )}


//             </div>
//         </div>
//     );
// };

// export default UserList;
