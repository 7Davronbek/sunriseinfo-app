import React from 'react'
import { GridLoader } from 'react-spinners'
import './Loader.css'

const Loader = () => {
  return (
    <div className='Loader'>
        <GridLoader color='#333' />
    </div>
  )
}

export default Loader