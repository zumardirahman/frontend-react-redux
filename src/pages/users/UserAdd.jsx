import React from 'react'
import Layout from '../Layout'
import UserAdd from '../../components/users/UserAdd'
import UserEdit from '../../components/users/UserEdit'

const RenderUserAdd = () => {
  return (
   <Layout>
    <UserAdd/>
    <UserEdit/>
   </Layout>
  )
}

export default RenderUserAdd