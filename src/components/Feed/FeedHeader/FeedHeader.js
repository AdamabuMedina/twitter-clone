import "./FeedHeader.css"

const FeedHeader = ({ text }) => {
  return (
    <div className="feed__header">
      <h2>{text}</h2>
    </div>
  )
}

export default FeedHeader