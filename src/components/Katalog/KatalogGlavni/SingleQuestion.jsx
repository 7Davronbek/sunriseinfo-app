import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info, info2, info3, info4 }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded &&
        <ul>
          <li>{info}</li>
          <li>{info2}</li>
          <li>{info3}</li>
          <li>{info4}</li>
        </ul>
      }
    </article>
  )
}

export default Question
