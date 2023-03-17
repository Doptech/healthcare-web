import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({data}) => {
  return (
   <>
    <div>
        <h1>Hi,{data}</h1>
    </div>
   </>
  )
}

export default ProtectedRoute