import React from 'react'
import Layout from '../Layout'
import UserList from '../../components/users/UserList' //render komponen welcome to dashboard

const RenderUserList = () => {
  return (
   <Layout>
    <UserList/>
   </Layout>
  )
}

export default RenderUserList