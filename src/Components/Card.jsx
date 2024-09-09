import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";

const Card = ({ char }) => {
  const { setFavs } = useCharStates();

  const addFav = () => {
    setFavs((favs) => [...favs, char]);
  };

  return (
    <div>
      <img src={char.image} alt="" />
      <Link to={"/detail/" + char.id}>
        <h3>{char.name}</h3>
      </Link>
      <button onClick={addFav}>⭐</button>
    </div>
  );
};

export default Card;
