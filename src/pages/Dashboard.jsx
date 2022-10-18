import React from 'react'
import Layout from './Layout'
import Welcome from '../components/Welcome' //render komponen welcome to dashboard

const Dashboard = () => {
  return (
   <Layout>
    <Welcome/>
   </Layout>
  )
}

export default Dashboard