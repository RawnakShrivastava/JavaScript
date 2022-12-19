import React, { useEffect, useState } from "react";
import axios from "./Axios";
import { Avatar } from "@material-ui/core";
import "./../styles/sidebarPannel.css";

function SidebarPannel() {
  const [users, setUsers] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [chatOpened, setChatOpeneed] = useState(1);
  const userClicked = (id) => {
    console.log("Clicked.." + id);
    setChatOpeneed(id);
    setIsExpanded(!isExpanded);
  };
  const onlineUsers = [3, 2, 5];
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get();
      setUsers(request.data.data);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="sidebar-users">
      {users.map((user) => (
        <div
          key={user.id}
          className={
            chatOpened === user.id ? "user-container active" : "user-container"
          }
          onClick={() => userClicked(user.id)}
        >
          <div className={onlineUsers.includes(user.id) ? "user-avatar active" : "user-avatar"}>
            <Avatar src={user.avatar} />
          </div>
          <div className="user-details">
            <span className="user-name">
              {user.first_name + " " + user.last_name}
            </span>
            <span className="user-email">{user.email}</span>
          </div>
        </div>
      ))}
      {isExpanded && <div className="user-inner-details">yolo</div>}
    </div>
  );
}

export default SidebarPannel;
