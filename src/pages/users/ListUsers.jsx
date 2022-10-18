import React from 'react'
import Layout from '../Layout'
import UserList from '../../components/users/UserList' //render komponen welcome to dashboard

const ListUsers = () => {
  return (
   <Layout>
    <UserList/>
   </Layout>
  )
}

export default ListUsers