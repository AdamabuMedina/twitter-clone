import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';


const WidgetsContainer = () => {
  return (
    <div className="widgets__widgetContainer">
      <h2>Что произошло?</h2>
      <TwitterTweetEmbed tweetId={"858551177860055040"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="cleverqazi"
        options={{ height: 400 }}
      />
      <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      />
    </div>
  )
}

export default WidgetsContainer