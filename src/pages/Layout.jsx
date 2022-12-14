import React from 'react'

//render slide partial komponen to layout
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

//layout membawa parameter children
const layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-6" style={{minHeight: "100vh"}}>
            <div className="column is-2">
                <Sidebar/>
            </div>
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default layout