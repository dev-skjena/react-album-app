import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AlbumTitle from './AlbumTitle';

const Dashboard = () => {
  const location = useLocation();
  const { id } = useParams();
  const { user } = location.state || {};
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  // const id=localStorage.getItem('id')

  const navigate=useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        // const userData = response.data;
        setUserData(response.data)
        // setUserData(userData);
        setFilteredAlbums(userData.albums || []);
      } catch (error) {
        setError('Error occurred during user data fetching');
      }
    };

    // if (user) {
    //   setUserData(user);
    //   setFilteredAlbums(user.albums || []);
    // } else {
    //   fetchUser();
    // }
    fetchUser();
  }, [id]);

  

  if (!userData) {
    return <p>Loading...</p>; // Add a loading state if userData is null
  }

  return (
    <div className="container col-10">
      <button onClick={()=>navigate('/')} className='btn btn-primary my-2'>Back</button>
      <div className="row mt-3 py-2 bg-light" style={{ textAlign: 'center' }}>
        <div className="col-2"></div>
        <div className="col-3" style={{ fontSize: '120px' }}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="col-7 py-4" style={{ textAlign: 'start' }}>
          <h3>{userData.name}</h3>
          <div className="py-3">
            <h6>{userData.email}</h6>
            <h6>{userData.username}</h6>
            <h6>Address: {userData.address.city}</h6>
          </div>
        </div>
      </div>

     
      {userData && <AlbumTitle key={userData.id} id={userData.id} />}

    </div>
  );
};

export default Dashboard;


