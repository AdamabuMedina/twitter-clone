import './Post.css'
import PostAvatar from './PostAvatar/PostAvatar';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import PostFooter from './PostFooter/PostFooter';

const Post = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar }) => {
  return (
    <div className="post">
      <PostAvatar avatar="avatar.jpg" />
      <div className='post__body'>
        <PostHeader />
        <PostImage image="image-1.jpg" />
        <PostFooter />
      </div>
    </div>
  )
}

export default Post
