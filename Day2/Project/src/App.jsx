import React from 'react';
import './App.css';
import Profile from './Components/Profile';
import profiles from './profiles';  // Import profiles array from the data.js file
import products from './products';
import Products from './Components/Products';

function App() {
  return (
    <>
      <h1 className="card-name">This is a profile card from my favourite programming tutors</h1>
      <div className="card-container">
        {profiles.map((profile, index) => (
          <Profile
            key={index} // "key" is important to help React efficiently re-render lists
            name={profile.name}
            phoneNumber={profile.phoneNumber}
            img={profile.img} />
        ))}
      </div>
      <h2>Tech products you may love</h2>
      <div className='card-container'>
      {products.map((products, index) =>{
        return(
          <Products 
            key={index}
            name={products.ProductName}
            description={products.description}
            price={products.price}
            img={products.img}
          />
        )
      })}
      </div>
    </>
  );
}

export default App;
