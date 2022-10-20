import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import User from '../User/User';
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequests";

const FollowersCard = () => {
    const [persons, setPersons] = useState([]);
    const { user } = useSelector((state) => state.authReducer.authData);
    useEffect(() => {
        const fetchPersons = async () => {
          const { data } = await getAllUser();
         
    //       let randomUser = new Set();
    //  while (randomUser.size < 6) {
    //             let s = Math.floor(Math.random() * data.length-1);  
    //      randomUser.add(s);
    //         }
    //         let usersdata=[];
    //         for (let i of randomUser) {
    //             usersdata.push(data[i]);
    //         }
                  
          setPersons(data);
          
        };
        fetchPersons();
      }, []);
 


  return (
    <div className="FollowersCard">
       <h3>People you may know</h3>

{persons.map((person, id) => {
  if (person._id !== user._id) return <User person={person} key={id} />;
})}
    </div>
  )
}

export default FollowersCard