import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {

  const [users, setUserss] = useState([])

  //manggil metode getProducts didalam useefffect
  useEffect(()=>{
    getUsers();
  },[])
  //sebuah metod untuk fetcing data
  const getUsers = async()=>{
    const response = await axios.get('http://localhost:5000/users')

    //masukan response kedalam statenya
    setUserss(response.data)
  }
  
  const deleteUser = async(usertId)=>{
    await axios.delete(`http://localhost:5000/users/${usertId}`)
//panggil lagi metode get prduct agar melihat perobahan interface
getUsers()
  }
  

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index)=>( //setiap looping memiliki uniq key
          <tr key={user.uuid}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.role}</td>
            <td>
              <Link to={`/users/edit/${user.uuid}`} className="button is-small is-info">Edit</Link>
              <button onClick={()=> deleteUser(user.uuid)} className="button is-small is-danger">Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
