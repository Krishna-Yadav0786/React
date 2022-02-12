import React from 'react'

const Students = (props) => {
  const { id, name } = props

  const inputHandler = (str) => {
    console.log(str)
  }
  return (
    <>
      <h1>Id : {id}</h1>
      <h2>Name : {name}</h2>
      <input type='text' onChange={(e) => inputHandler(e.target.value)} />
    </>
  )
}
export default Students
