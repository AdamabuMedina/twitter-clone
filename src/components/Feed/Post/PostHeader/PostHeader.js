import VerifiedUser from '@mui/icons-material/VerifiedUser';

const PostHeader = ({ verified, text, }) => {
  return (
    <div className='post__header'>
      <div className='post__headerText'>
        <h3>
          Adam Barkinkhoev
          <span className='post__headerSpecial'>
            <VerifiedUser className="post__badge" />
            @adamabumedina
          </span>
        </h3>
      </div>
      <div className='post__headerDescription'>
        <p>
          Какой-то текст
        </p>
      </div>
    </div>
  )
}

export default PostHeader
