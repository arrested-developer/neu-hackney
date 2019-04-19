import React from "react"

export default ({ width, height, tweetLimit, timeline, ...props }) => {
  return (
    <a
      className="twitter-timeline"
      data-lang="en"
      data-width={width}
      data-height={height}
      href={timeline}
      data-tweet-limit={tweetLimit}
      {...props}
    >
      Tweets by hackneynut
    </a>
  )
}
