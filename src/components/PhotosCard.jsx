
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// const { Link } = require("react-router-dom");

const PhotoCard = ({ photo, onDelete }) => {
    // const url=photo.url;

    return (
        <div className='my-5 '>
        <div className="card text-center bg-light album-card">
            <img src={`${photo.url}`} class="card-img-top" alt="..."></img>
            <div className="card-body d-flex flex-column album-card-body">
                <h6 className="card-title">{photo.title}</h6>
                <div className='mt-auto'>                  
                    <button className='ms-2 album-action-button bg-danger text-white' onClick={() => onDelete(photo.id)}>Delete</button>

                </div>

            </div>
        </div>
        </div>

    );
};

export default PhotoCard;


