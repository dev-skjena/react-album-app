
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const { Link } = require("react-router-dom");

const UserCard = ({ user, onDelete }) => {
    const uid = localStorage.getItem('id');


    return (
        <div className="card text-center bg-light">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p>{user.email}</p>
                <div className=''>
                    {/* <button className='action-button bg-warning text-white' onClick={() => onDelete(user.id)} >LogIn</button> */}
                    {(uid) ? (
                        //  <button className='action-button bg-warning text-white'> 
                        //  {/* <Link
                        //      to={`/login?email=${user.email}`} // Pass email as a parameter in the URL
                        //      className='link-action text-light' style={{ textDecoration: 'none' }}

                        //  >
                        //     Delete
                        //  </Link>  */}
                        //  Delete
                        //  </button>
                        <div>{((uid === user.id) ? (
                            <button>Btn</button>
                        ) : (null))}</div>
                    ) : (
                        <div>
                            <button className='action-button bg-warning text-white'>
                                <Link
                                    to={`/login?email=${user.email}`} // Pass email as a parameter in the URL
                                    className='link-action text-light' style={{ textDecoration: 'none' }}
                                >
                                    Login
                                </Link>
                            </button>
                            <button className='action-button bg-danger text-white' onClick={() => onDelete(user.id)}>Delete</button>

                        </div>
                    )}

                </div>

            </div>
        </div>

    );
};

export default UserCard;


