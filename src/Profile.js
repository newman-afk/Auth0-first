import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        {Object.keys(user).map((objKey, i) => {
          return (
            <p key={i}>
              {objKey} : {user[objKey]}
            </p>
          );
        })}
      </div>
    )
  );
};

export default Profile;
