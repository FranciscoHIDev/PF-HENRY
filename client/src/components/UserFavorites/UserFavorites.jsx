import React, { useState } from 'react';

function UserFavorites({id}) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites([...favorites, id]);
  };
  
  const deleteFavorite = (id) => {
    const updatedFavorites = favorites.filter((e) => e !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h2>FavoritesUsers</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite}>
            {favorite}
            <button onClick={() => deleteFavorite(favorite)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Agregar nuevo favorito" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addFavorite(e.target.value);
          e.target.value = '';
        }
      }} />
    </div>
  );
}

export default UserFavorites;