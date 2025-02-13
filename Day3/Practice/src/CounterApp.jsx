import { useState } from "react"

function CounterApp() {
  const [number, setNumber] = useState(0);
  return(
    <>
      <div>
        <p>Count: {number}</p>
        <button type="button" onClick={()=> setNumber(number + 1)}> Increment</button>
        <button type="button" onClick={()=> setNumber(number - 1)}> Decrement</button>
      </div>
    </>
  )
}

export default CounterApp