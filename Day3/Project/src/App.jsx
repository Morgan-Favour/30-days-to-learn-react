import { useState } from 'react'
import './App.css'
import Article from './Component/Article'
import articles from './article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Articles</h1>
      <div className="card-container">
      {articles.map((article,index)=> (
        <Article 
        key={index} 
        title={article.title} 
        releaseDate={article.releaseDate}
        time={article.time}
        description={article.description}
        author={article.author}
        imageUrl={article.imageUrl}
        />
      ))}
      </div>
     
    </>
  )
}

export default App
