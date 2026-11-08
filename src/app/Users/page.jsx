export const instant = false;
import UserCard from '@/components/UserCard';
import UserParent from '@/components/UserParent';
import React from 'react';


const getUsers = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
  
}




const UsersPage = async () => {
//const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  //const users = await res.json() fetch("https://api.abcz.workers.dev/api/fitlog")
  const users = await getUsers();
    console.log(users)
    return (
        <div className="grid grid-cols-3 gap-4">
            
                {users.map((user) => (
                <UserCard key={user.id} user={user} />  
                ))}
            </div>
       
      
    );
};

  {/*<UserParent/>*/}
export default UsersPage;