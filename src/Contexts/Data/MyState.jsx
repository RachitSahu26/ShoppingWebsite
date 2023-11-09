import React, { useState } from 'react'
import MyContext  from './MyContext'
function MyState(props) {
  

const {mode,setMode} =useState('light');
const togglebtn=()=>{
    if(mode==='light'){
        setMode("dark")
document.body.style.backgroundColor="black"
    }
    else{
        setMode("light")
        document.body.style.backgroundColor="#fff"
            

    }

}


  return (
    <MyContext.Provider value={{togglebtn,mode}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState