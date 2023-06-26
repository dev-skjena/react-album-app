import React, { useState, useEffect} from 'react';

import axios from 'axios';
import '../App.css';
import PhotosCard from './PhotosCard';
import AlbumSearchBar from './AlbumSearchBar';


const PhotosList = ({ id }) => {
    const [photo, setPhoto] = useState([]);
    // const [showAllAlbums, setShowAllAlbums] = useState(false);
    const [filteredPhotos, setFilteredPhotos] = useState([]);

    console.log(id)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
                // https://jsonplaceholder.typicode.com/photos?albumId=1

                setPhoto(response.data);
                setFilteredPhotos(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);


    const deletePhoto = async (photoId) => {
        try {
            // Delete the user data from the API
            await axios.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`);

            // Remove the deleted user from the local state
            setPhoto((prevPhotos) => prevPhotos.filter((photo) => photo.id !== photoId));
            setFilteredPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== photoId));

        } catch (error) {
            console.log(error);
        }
    };

    // const toggleShowAllAlbums = () => {
    //     setShowAllAlbums(!showAllAlbums);
    // };

    // // let displayedAlbums = album;
    // let displayedAlbums = filteredAlbums.length > 0 ? filteredAlbums : album;

    // if (!showAllAlbums) {
    //     displayedAlbums = album.slice(0, 4);
    // }
    // const showViewAllButton = !showAllAlbums && album.length > 4;
    // const showShowLessButton = showAllAlbums && album.length > 4;

    return (
        <div className='user-album'>

            {/* <div className="card-container album-card-container mt-5">
                {displayedAlbums.map((album) => (
                    <AlbumCard key={album.id} album={album} onDelete={deleteAlbum} />
                ))}
                {showViewAllButton && (
                    <div className="view-all-button">
                        <button onClick={toggleShowAllAlbums}>View All</button>
                    </div>
                )}
                {showShowLessButton && album.length > 8 && (
                    <div className="view-all-button-last">
                        <button onClick={toggleShowAllAlbums}>Show Less</button>
                    </div>
                )}


            </div> */}

            <AlbumSearchBar albums={photo} setFilteredAlbums={setFilteredPhotos} />
            <div className="user-list card-container mt-5">
                {filteredPhotos.map((photo) => (
                    <PhotosCard key={photo.id} photo={photo} onDelete={deletePhoto} />
                ))}
            </div>



        </div>



    );
};

export default PhotosList;