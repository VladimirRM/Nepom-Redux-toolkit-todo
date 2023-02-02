import React from 'react'

const inputField = ({text,handleInput,handelSubmit}) => {
  return (
    <div>
             <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default inputField
