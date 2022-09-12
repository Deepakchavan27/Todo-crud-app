import React from 'react'

function Pagination({
    current,
    total,
    onChange
}) {

    const pages = new Array(total).fill(0).map((a,i)=>
    <button onClick={() =>onChange(i+1)} disabled ={current===(i+1)}>{i+1}</button>)
  return (
    <div>{pages}</div>
  )
}

export default Pagination