import "./Feed.css"
import FeedHeader from "./FeedHeader/FeedHeader"
import TweetBox from "./TweetBox/TweetBox"
import Post from './Post/Post';

const Feed = () => {
  return (
    <div className="feed">
      <FeedHeader text="Home" />
      <TweetBox />
      <Post />
    </div>
  )
}

export default Feed