import React from 'react'
import './style/pagination.css'
const Pagination = ({currentPagi,setcurrentPagi,total}) => {
    //se crea funciones para los botones
    const handlePrev=()=>{
       if (currentPagi>1) {
        setcurrentPagi(currentPagi-1)
       }
    }
    const handleNext=()=>{
        if (currentPagi<total) {
            setcurrentPagi(currentPagi+1) 
           }    
    }
  return (
    <div className='btn_pagination'>
        <button onClick={handlePrev}>Prev</button>
        <span>{`${currentPagi}/ ${total}`}</span>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination