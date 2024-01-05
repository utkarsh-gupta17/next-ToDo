"use client";
import { useEffect, useState } from 'react';
import UserContext from './UserContext'
import { toast } from "react-toastify";
import { currentUser } from '@/services/userServices';




const UserProvider = ({children}) => {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function getCurrentUser(){
      try {
        const currentUserRes = await currentUser();
        console.log(currentUserRes);
        setUser({...currentUserRes});
        } catch (error) {
          // toast.error("error in getting current user");
          console.log(error);
          setUser(undefined);
        }  
    }
    if(!user){
     getCurrentUser();
    }
  }, []);
  // dependency array blank rakho taaki sirf ek baar chale

  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider
