import React, { useEffect, useState } from "react";
import axios from "axios";
import CardUser from './UserCard';

const UserList = () => {
  const [ListOfUser, setListOfUser] = useState([]);

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
       // .then(rep => console.log(rep.data))
    .then(res => setListOfUser(res.data))
    .catch(err=> console.error(err))
    
  },[])

  return (
    <div  classNmae='golobal_cards'>
        {
          ListOfUser.map((user,i)=> <CardUser user={user} key={i}/>)
        }
    </div>
  );
};

export default UserList;



