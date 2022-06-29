import './Post.css'
import PostAvatar from './PostAvatar/PostAvatar';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import PostFooter from './PostFooter/PostFooter';
import { forwardRef } from 'react';

const Post = forwardRef(({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}, ref) => {
  return (
    <div className="post" ref={ref}>
      <PostAvatar avatar={avatar} />
      <div className='post__body'>
        <PostHeader
          displayName={displayName}
          username={username}
          text={text}
          verified={verified}
        />
        <PostImage image={image} />
        <PostFooter />
      </div>
    </div>
  )
})

export default Post
