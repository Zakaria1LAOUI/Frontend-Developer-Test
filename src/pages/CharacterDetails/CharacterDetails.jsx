import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CharacterDetails.css"
import logo from "../../assets/logo.png"; // Import your logo image

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(res.data);
    };

    fetchCharacter();
  }, [id]);

  console.log(character);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <div className="character-details-container">
        {/* Logo at the top */}
        <img className="logo-image" src={logo} alt="Rick & Morty Logo" />

        {/* Title */}
        <h1 className="character-title">
          Discover the secrets of {character.name} from the Rick and Morty universe
        </h1>

        {/* Character Card */}
        <div className="character-details">
          <img className="character-image" src={character.image} alt={character.name} />
          <div className="character-info">
            {/* Character Name on top in green */}
            <h2 className="character-name">{character.name}</h2>
            <ul>
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
            </ul>
            <p className="character-summary">
              <span className="summary-highlight">{character.name}</span> is a <span className="summary-highlight">{character.gender}</span> <span className="summary-highlight">{character.species}</span> who is currently <span className="summary-highlight">{character.status}</span>.
            </p>
          </div>
        </div>
      </div>
      <footer class="footer">
        <img src={logo} alt="Logo" class="logo-image-footer" />
      </footer>
    </div>
  );
};

export default CharacterDetails;
