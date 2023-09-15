'use client'
import React, { useState } from 'react'
import SubmitForm from '@/components/SubmitForm'

export default function Home() {
  const [object, setObject] = useState({
    array: [],
    item: {
      date: new Date().getTime(),
      name: ''
    }
  })

  const handleChange = e => {
    console.log(e.target.value)
    setObject({
      ...object, 
      item: {
        ...object.item,
        name: e.target.value
      } 
    })
  }

  const handleSubmit = () => {
    console.log(object)
  }
  
  return (
    <>
      Home
      {/* <SubmitForm handleSubmit={handleSubmit} /> */}
      <div>
            <form onSubmit={handleSubmit}>
                <input 
                  type='text' 
                  id='name' 
                  name='name'
                  // value={object.item.name}
                  onChange={e => handleChange(e)} 
                  placeholder='Add Task'/>
                <button type="submit">Add</button>
            </form>
        </div>
    </>
  )
}
