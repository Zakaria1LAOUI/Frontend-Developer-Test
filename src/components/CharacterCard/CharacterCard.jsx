import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <span className="species">{character.species}</span>
      <h2 >Name: {character.name}</h2>
      <h2>Status: {character.status}</h2>
      <h2>Gender: {character.gender}</h2>
      <Link to={`/character/${character.id}`} className="view-details">
        Details
      </Link>
    </div>
  );
};

export default CharacterCard;
