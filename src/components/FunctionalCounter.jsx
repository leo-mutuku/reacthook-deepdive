import React,{useState} from 'react'

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