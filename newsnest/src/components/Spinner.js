import React from "react";
import Loading from './Loading.gif'
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading}  alt="Loading"></img>
      </div>
    )
  }
export default Spinner
