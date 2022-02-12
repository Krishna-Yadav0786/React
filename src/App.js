import React from 'react'
import Students from './components/Students'
import { students } from './data/data'

const App = () => {
  return (
    <>
      {students.map((std) => (
        <Students id={std.id} name={std.name} key={std.id} />
      ))}
    </>
  )
}
export default App
