import React from "react";

const Users = ({users}) => {
  return (
    <div>
      <ul>
        {users.map(user =>
        <div key={user.id}>
          <li key={user.id}>{user.name}</li>
          <ul>
            {user.favorites.map(fav =>
                <li key={fav.id}>{fav.name} (Ranked: {fav.rank})</li>
              )}
          </ul>
        </div>
        )}
      </ul>
    </div>
  )
}

export default Users;
