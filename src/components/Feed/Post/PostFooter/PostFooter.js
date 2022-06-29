
import { ChatBubbleOutline, Repeat, FavoriteBorder, Publish } from '@mui/icons-material';

const PostFooter = () => {
  return (
    <div className="post__footer">
      <ChatBubbleOutline fontSize="small" />
      <Repeat fontSize="small" />
      <FavoriteBorder fontSize="small" />
      <Publish fontSize="small" />
    </div>
  )
}

export default PostFooter
