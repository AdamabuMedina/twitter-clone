import "./Feed.css"
import FeedHeader from "./FeedHeader/FeedHeader"
import TweetBox from "./TweetBox/TweetBox"
import Post from './Post/Post';
import { useEffect, useState } from "react";
import db from "../../firebase";
import FlipMove from "react-flip-move"

const Feed = () => {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <FeedHeader text="Home" />
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed