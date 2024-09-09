import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CharStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const Context = ({ children }) => {
  const [theme, setTheme] = useState();
  const [chars, setChars] = useState([]);
  const [favs, setFavs] = useState(lsFavs);

  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChars(res.data.results);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <CharStates.Provider value={{ theme, setTheme, chars, favs, setFavs }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);
