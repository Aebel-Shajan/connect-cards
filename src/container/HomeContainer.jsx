import { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import usersData from '../data/users.json';

const HomeContaienr = () => {

    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        setUsers(usersData);
    }

    useEffect(() => {
        loadUsers();
        console.log(users);
    }, []);

    return ( 
        <>
        <Home />
        </>
     );
}
 
export default HomeContaienr;