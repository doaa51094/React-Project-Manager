import React from 'react'

const Input = ({label,textarea}) => {
  return (
    <p>
    <label>{label}</label>
    {textarea ? <textarea />:<input type="text" />}
  </p>  )
}

export default Input