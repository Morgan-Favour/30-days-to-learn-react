import React from 'react'
import Car from './Car'

const Garage = () => {
    const carName = "Ford";
    const carColor = "blue";
  return (
    <div>
    <Car brand={carName} color={carColor} />
      <h1>Who lives in the garage</h1>
    </div>
  )
}

export default Garage;
