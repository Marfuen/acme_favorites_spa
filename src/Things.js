import React from "react";

const Things = ({things}) => {
  return (
    <div>
      <ul>
        {things.map(thing =>
        <div key={thing.id}>
          <li key={thing.id}>{thing.name}</li>
          <ul>
            {thing.favorites.map(fav =>
                <li key={fav.id}>favorited by: {fav.user.name}</li>
              )}
          </ul>
        </div>
        )}
      </ul>
    </div>
  )
}

export default Things;
