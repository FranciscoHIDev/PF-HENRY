import React, { useState } from 'react';

function UserFavorites({id}) {
  const [favorites, setFavorites] = useState([]);

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
            <button onClick={() => deleteFavorite(favorite)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFavorites;