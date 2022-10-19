import React from 'react'
import Layout from '../Layout'
import UserAdd from '../../components/users/UserAdd'
import UserEdit from '../../components/users/UserEdit'

const AddUser = () => {
  return (
   <Layout>
    <UserAdd/>
    <UserEdit/>
   </Layout>
  )
}

export default AddUser