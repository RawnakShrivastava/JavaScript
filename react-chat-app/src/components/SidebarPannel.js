import React , { useEffect, useState } from 'react'
import axios from './Axios'
import { Avatar } from '@material-ui/core';
import './../styles/sidebarPannel.css';

function SidebarPannel() {

    const [users,setUsers] = useState([]);
    const [isExpanded,setIsExpanded] = useState(false);
    const userClicked = (id) => {
        console.log("Clicked.." + id );
        setIsExpanded(!isExpanded);
    }
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get();
            setUsers(request.data.data);
            console.log(request)
            return request;
        }
        fetchData();
    }, []);

    return (
        <div className="sidebar-users">
            {users.map(user => ( 
                <div key={user.id} className="user-container" onClick={ () => userClicked(user.id)} >
                    <Avatar src={user.avatar} />
                    <span className="user-name">{user.first_name}</span>
                    <span className="user-email">{user.email}</span>
                </div>
            ))}
            {isExpanded && <div className="user-inner-details">yolo</div>}
        </div>
    )
}

export default SidebarPannel
