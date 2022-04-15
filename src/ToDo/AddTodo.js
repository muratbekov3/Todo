import { useState } from "react"
import React from 'react'
import PropTypes from 'prop-types'


function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear:() => setValue(''),
        value: () => value
        
       
    }
}

 function AddTodo( {onCreate}) {

const input = useInputValue('')
  function submitHandler(event) {
      event.preventDefault()

      if (input.value().trim()){
          onCreate(input.value())
          input.clear()
      }
  }

  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
        <input {...input.bind} style={{width:'30rem', height:'2rem'}}/>
        <button type='submit' style={{background: 'black', color: '#fff', width:'7rem', height:'2.5rem'}}> Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
