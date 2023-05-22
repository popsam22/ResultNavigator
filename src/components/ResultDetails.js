import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ResultDetails = () => {
    const params = useParams()

  return (
    <div>
        <h1>Result Detail</h1>
        <p>{params.id}</p>
        <div>
            <button><Link to='..' relative='path'>Go Back</Link></button>
        </div>
    </div>
  )
}

export default ResultDetails