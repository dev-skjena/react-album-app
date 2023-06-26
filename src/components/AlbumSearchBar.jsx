import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const AlbumSearchBar = ({ albums, setFilteredAlbums }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (albums) {
      const filteredAlbums = albums.filter((album) =>
        album.title.toLowerCase().includes(query.trim())
      );
      setFilteredAlbums(filteredAlbums);
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4">
        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchQuery}
            onChange={handleSearch}
          />
          <span className="input-group-text border-0" id="search-addon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </form>
      </div>
    </div>
  );
};

export default AlbumSearchBar;




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// // const AlbumSearchBar = ({ onSearch, searchType, albums, setFilteredAlbums }) => {
//   const AlbumSearchBar = ({ albums, setFilteredAlbums }) => {
//     const [searchQuery, setSearchQuery] = useState('');
  
//     const handleSearch = (event) => {
//       const query = event.target.value.toLowerCase();
//       setSearchQuery(query);
//       const filteredAlbums = albums.filter((album) =>
//         album.title.toLowerCase().includes(query)
//       );
//       setFilteredAlbums(filteredAlbums);
//       // onSearch(query);
//     };
  
//     return (
//       <div>
//         <div className="container col-4 mt-4">
//           <form className="d-flex input-group w-auto">
//             <input
//               type="search"
//               className="form-control rounded"
//               // placeholder={`Search ${searchType}`}
//               placeholder="Search"
//               aria-label="Search"
//               aria-describedby="search-addon"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//             <span className="input-group-text border-0" id="search-addon">
//               <FontAwesomeIcon icon={faSearch} />
//             </span>
//           </form>
//         </div>
//       </div>
//     );
//   };
//   export default AlbumSearchBar;
  
  