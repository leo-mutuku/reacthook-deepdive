import React,{useState} from 'react'

// Create a component
// state property initilized to 0
// a way to update that state property
function FunctionalCounter() {
    const [counter, setCounter] = useState(0)
    const handleCounter = ()=>{
        setCounter(counter + 1)
    }

  return (
    <div>
        <button onClick={handleCounter}>Count {counter}</button>
    </div>
  )
}

export default FunctionalCounter