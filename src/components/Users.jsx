import React from 'react';

const Users = ({ userPromise }) => {
    const users =use(userPromise);
    return (
        <div>
           <h2>User from client: {users.length}</h2>
           users.map((user) => (
          UserCard key={user.id} user={user} />   
        </div>
    );
};

export default Users;