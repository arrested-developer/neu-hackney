import React from "react"

export default ({ width, height, tweetLimit, ...props }) => {
  return (
    <a
      className="twitter-timeline"
      data-lang="en"
      data-width={width}
      data-height={height}
      href="https://twitter.com/hackneynut?ref_src=twsrc%5Etfw"
      data-tweet-limit={tweetLimit}
      {...props}
    >
      Tweets by hackneynut
    </a>
  )
}
