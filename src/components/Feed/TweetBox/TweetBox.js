import { Button, Avatar } from "@mui/material"
import "./TweetBox.css"
import { useState } from 'react';
import db from './../../../firebase';

const TweetBox = ({ text }) => {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault()
    db.collection("posts").add({
      displayName: "Григорий Осипов",
      username: "@gocakes",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://sun6-22.userapi.com/s/v1/if1/3DOArqslAzZck0oO7U0t37siwJYAAwe-7dGciUizeotOioLiJPDEpS-5YCm9QfD7mJ4OOexp.jpg?size=200x200&quality=96&crop=0,358,1162,1162&ava=1"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="avatar.jpg" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Что происходит?" type="text" />
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Опция: Введите URL-адрес изображения" type="text"
          className="tweetBox__imageInput"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox