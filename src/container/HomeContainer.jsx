import { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import usersData from '../data/users.json';

const HomeContaienr = () => {

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");



    const loadUsers = () => {
        setUsers(usersData);
    }

    useEffect(() => {
        loadUsers();
        console.log(users);
    }, []);


    const filteredUserCards = users.filter((user) => {
        if(searchValue){
            return (user.name.toLowerCase().startsWith(searchValue.toLowerCase()))
        }

        return true;
    });


    return ( 
        <>
        <Home users={filteredUserCards} setSearchValue={setSearchValue}/>
        </>
     );
}
 
export default HomeContaienr;