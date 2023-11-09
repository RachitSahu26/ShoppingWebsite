import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../Footer/Footer'

function LayOut( {children}) {
  return (
<>
    <NavBar/>
    <div className="content">
        {children}
      </div>
    <Footer/>
</>

  )
}

export default LayOut
