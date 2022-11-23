import React, { useContext } from 'react';
import { ApiContext } from '../context/Apicontext';

const Users = ({ users }) => {
  const {handleCount,count} = useContext(ApiContext)
  const handleDelete =async (id)=>{
      const res = await fetch(`http://localhost:3000/users/${id}`,{
         headers: {
        'Content-type': 'application/json'
        },
        method:'DELETE',
      });
      handleCount()
       console.log(count)
  }
  return (
    <>
      {users.length==0?<h1>Not found</h1>:users.map((user) => {
        const { id, first_name, last_name, avatar,email } = user;
        return (
          <article key={id} className='user'>
            <img src={avatar} alt={first_name} />
            <div>
              <h4>{first_name}</h4>
              <h4>{last_name}</h4>
              <p>{email}</p>
            </div>
            <button onClick={()=>handleDelete(id)}>X</button>
          </article>
        );
      })}
    </>
  );
};

export default Users;