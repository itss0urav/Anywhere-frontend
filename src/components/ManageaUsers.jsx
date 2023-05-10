import axios from "axios";
import { useEffect, useState } from "react";
// import { callApi } from "../services/callApi";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await axios.get("http://localhost:5000/user");
    response && setUsers(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getUsers();
  }, []);

  async function banUnBanUser({ userId, banStatus }) {
    const response = await axios.patch("http://localhost:5000/user", {
      userId,
      isBanned: banStatus,
    });
    response && getUsers();
  }
  return (
    <div style={{ padding: "20px 10px" }}>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {users.map((user) => {
          return (
            <div
              style={{
                border: "2px solid #555",
                padding: "10px 18px",
                borderRadius: "5px",
              }}
            >
              <p>Name : {user.username}</p>
              <p>Email : {user.email}</p>
              <button
                onClick={() =>
                  banUnBanUser({
                    userId: user._id,
                    banStatus: !user.isBanned,
                  })
                }
              >
                {user.isBanned ? "Unban" : "Ban"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageUsers;
