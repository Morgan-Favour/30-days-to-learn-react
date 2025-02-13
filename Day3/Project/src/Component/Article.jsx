// import likebutton from "../assets/like.png"
import "../App.css";
import { useState } from "react";
function Article(props) {
  const [like, setLike] = useState("like");
  return (
    <>
      <div className="article-card">
        <img src={props.imageUrl} alt={props.title} className="article-image" />
        <h2>{props.title}</h2>
        <p className="article-description">{props.description}</p>
        <p className="article-info">
          <span className="article-date">{props.releaseDate}</span> |
          <span className="article-read-time">{props.time}</span> |
          <span className="article-author">{props.author}</span>
        </p>
        <button
          type="button"
          onClick={() => setLike(like === "like" ? "Unlike" : "like")}
        >
          {like}
        </button>
      </div>
    </>
  );
}

export default Article;
