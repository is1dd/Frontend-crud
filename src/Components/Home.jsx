import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../context/Apicontext';
import Users from './Users';
import Pagination from './Pagination'

const Home = () => {
 const [users , setUsers] = useState([])
 const [search,setSearch] = useState("")
 const [select,setSelect] = useState('');
 const total = useRef(null);
 const {handleCount,count} = useContext(ApiContext);
 const [page,SetPage] = useState(1);
 const redirect = useNavigate();
 const getData = async ()=>{
  const res = await fetch(`http://localhost:3000/users?_page=${page}&_limit=3`);
  const data = await res.json()
  // console.log(data)
  setUsers(data)
  total.current = Math.ceil(users.length/3)
  
 }

 useEffect(()=>{
  getData()
 },[count])
 useEffect(()=>{
  getData()
 },[page])
const handleSubmit=(e)=>{
  e.preventDefault();
  if(search){
      let filtered = users.filter((el)=>el.first_name==search);
      setUsers(filtered);
  }else{
     getData()
  }
}
const handleChange=(e)=>{

    if(e.target.value=='firstname'){
    let sortA =users.sort((a, b) => {
     if (a.first_name.toUpperCase() < b.first_name.toUpperCase()) {
    return -1;
     }
     if (a.first_name.toUpperCase() > b.first_name.toUpperCase()) {
    return 1;
  }
  return 0;
});
  setUsers([...sortA])
  console.log(users);
  }else if(e.target.value=='lastname'){
     let sortA =users.sort((a, b) => {
     if (a.last_name.toUpperCase() < b.last_name.toUpperCase()) {
    return -1;
     }
     if (a.last_name.toUpperCase() > b.last_name.toUpperCase()) {
    return 1;
  }
  return 0;
});
  setUsers([...sortA])

  }else if(e.target.value=='email'){
     let sortA =users.sort((a, b) => {
     if (a.email.toUpperCase() < b.email.toUpperCase()) {
    return -1;
     }
     if (a.email.toUpperCase() > b.email.toUpperCase()) {
    return 1;
  }
  return 0;
});
  setUsers([...sortA])
  }
}
const handlePage = (value)=>{
  SetPage(value);
}
  return (
     <main>
   
      <nav>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder={'Search name'} onChange={(e)=>setSearch(e.target.value)}/>
        <button style={{cursor:'pointer'}} type={'submit'}>Search</button>
          <select onChange={handleChange}>
            <option value={'firstname'}>F_Name</option>
            <option value={'lastname'}>L_name</option>
            <option value={'email'}>email</option>
          </select>
        </form>
        <button onClick={()=>redirect('/adduser')}>Add User</button>
      </nav>
    <section className='container'>
      <Users users={users} />
     
      </section>
       <div className='pagination'>
        <Pagination handlePage={handlePage} total={total.current} page={page} />
      </div>
       
    </main>
  )
}

export default Home