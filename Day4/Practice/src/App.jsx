import './App.css'

function App() {
  const bestFriend = (name, b) =>{
    return(alert(b.type))
  }


  return (
    <>
    <h2>These are just a few DOM events. You can create your own custom events as well</h2>
     <button onClick={(event) => bestFriend(null,event )}>On Click</button>
     <button onDoubleClick={(event) => bestFriend(null,event )}>Double Click</button>
     <button onMouseDown={(event) => bestFriend(null,event )}>Long press on mouse</button>
    </>
  )
}

export default App

