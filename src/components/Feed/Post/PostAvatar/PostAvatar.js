import { Avatar } from '@mui/material';

const PostAvatar = ({ avatar }) => {
  return (
    <div className='post__avatar'>
      <Avatar src={avatar} />
    </div>
  )
}

export default PostAvatar
