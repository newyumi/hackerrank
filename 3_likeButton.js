import React, { useState } from "react";

function LikeButtonComponent() {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setLiked(!liked);
  };

  return (
    <button className={liked ? "like-button liked" : "like-button"} onClick={toggleLike}>
      Like | <span className="likes-counter">{likes}</span>
    </button>
  );
}

export default LikeButtonComponent;
