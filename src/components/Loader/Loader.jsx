import React from 'react'
import { GridLoader } from 'react-spinners'
import './Loader.css'

const Loader = () => {
  return (
    <div className='Loader'>
        <GridLoader color='#ff7e00' />
    </div>
  )
}

export default Loader