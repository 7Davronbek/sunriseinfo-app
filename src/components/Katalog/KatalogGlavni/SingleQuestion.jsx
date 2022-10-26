import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, name}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title py-3 w-100'>
          {name}
        </h4>
        {/* <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button> */}
      </header>
      {/* {expanded &&
        <ul>
          <li>{info}</li>
          <li>{info2}</li>
          <li>{info3}</li>
          <li>{info4}</li>
        </ul>
      } */}
    </article>
  )
}

export default Question
