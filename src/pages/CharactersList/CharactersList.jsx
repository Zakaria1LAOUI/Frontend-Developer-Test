import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import "./CharactersList.css";
import logo from "../../assets/logo.png"; // Add your logo image path
import banner from "../../assets/banner.png"; // Add your banner image path

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState(""); // Add this line for gender filter
  const itemsPerPage = 9;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}&status=${statusFilter}&species=${speciesFilter}&gender=${genderFilter}` // Add genderFilter here
      );
      setCharacters(res.data.results);
    };

    fetchData();
  }, [page, searchTerm, statusFilter, speciesFilter, genderFilter]); // Add genderFilter to dependencies

  return (
    <div>
    <div className="characters-list-container">
      {/* Logo */}
      <img className="logo-image" src={logo} alt="Rick & Morty Logo" />

      {/* Banner centered */}
      <div className="banner-container">
        <img className="banner-image" src={banner} alt="Rick & Morty Banner" />
      </div>

      {/* Text Box directly under the banner */}
      <div className="text-box-under-banner">
        <p>"Get Schwifty with the Multiverse Madness of Rick and Morty!" 🚀🚀</p>
      </div>
      {/*Search*/}
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      {/*filters*/}
      <div className="filters-container">
        <div>
        <h3 className="type-filter">Gender:</h3>
        <select
          value={genderFilter} 
          onChange={(e) => setGenderFilter(e.target.value)} 
          className="filter-dropdown"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        </div>
        
        <div>
          <h3 className="type-filter">Species:</h3>
        <select
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">Select Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
        </select>
        </div>

        <div>
          <h3 className="type-filter">Status:</h3>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        </div>
      </div>
      {/*Introduce the grid*/}
      <div>
        <h1 className="meet">Meet the Wildest Characters </h1>
        <h1 className="meet">from the Rick and Morty Multiverse!</h1>
      </div>
      {/* Character Grid */}
      <div className="character-grid">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={page} setPage={setPage} />
    </div>
    <footer class="footer">
    <img src={logo} alt="Logo" class="logo-image-footer"/>
</footer>
</div>
  );
};

export default CharactersList;
