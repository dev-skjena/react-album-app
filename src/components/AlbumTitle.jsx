import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import '../App.css';
import AlbumCard from './AlbumCard';
import AlbumSearchBar from './AlbumSearchBar';

const AlbumTitle = ({ id }) => {
    const [album, setAlbum] = useState([]);
    const [showAllAlbums, setShowAllAlbums] = useState(false);
    const [filteredAlbums, setFilteredAlbums] = useState([]);

    console.log(id)


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=1');
                const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);

                // const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
                setAlbum(response.data);
                setFilteredAlbums(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);


    const deleteAlbum = async (albumId) => {
        try {
            // Delete the user data from the API
            await axios.delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`);

            // Remove the deleted user from the local state
            setAlbum((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));
            setFilteredAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));

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

           <div className='justify-content-end'>
           <AlbumSearchBar albums={album} setFilteredAlbums={setFilteredAlbums} />
            </div> 
            <div className="user-list card-container mt-5">
                {filteredAlbums.map((album) => (
                    <AlbumCard key={album.id} album={album} onDelete={deleteAlbum} />
                ))}
            </div>



        </div>



    );
};

export default AlbumTitle;


