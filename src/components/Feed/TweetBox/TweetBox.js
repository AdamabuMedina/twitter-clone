import { Button, Avatar } from "@mui/material"
import "./TweetBox.css"

const TweetBox = ({ text }) => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="avatar.jpg" />
          <input placeholder="Что происходит?" type="text" />
        </div>
        <input
          placeholder="Опция: Введите URL-адрес изображения" type="text"
          className="tweetBox__imageInput"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox