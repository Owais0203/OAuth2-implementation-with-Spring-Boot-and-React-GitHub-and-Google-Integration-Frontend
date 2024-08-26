import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user-info", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          {user.picture && (
            <img
              src={user.picture}
              alt="User Profile"
              referrerPolicy="no-referrer"
            />
          )}
          {/* referrerPolicy="no-referrer" since fetching is from google otherwise we will get a cros error */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
