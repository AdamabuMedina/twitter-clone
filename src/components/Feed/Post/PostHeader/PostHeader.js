import VerifiedUser from '@mui/icons-material/VerifiedUser';

const PostHeader = ({ displayName, username, text, verified }) => {
  return (
    <div className='post__header'>
      <div className='post__headerText'>
        <h3>
          {displayName}{" "}
          <span className='post__headerSpecial'>
            {verified && <VerifiedUser className="post__badge" />}
            {username}
          </span>
        </h3>
      </div>
      <div className='post__headerDescription'>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default PostHeader
