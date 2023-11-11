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




const {loading,setLoading}=useState(false);
  return (
    <MyContext.Provider value={{togglebtn,mode,loading,setLoading}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState