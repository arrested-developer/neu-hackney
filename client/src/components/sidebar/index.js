import React from "react"
import TwitterFeed from "../twitter"
import Newsletters from "../newsletters"
import Join from "../join"

import { Aside } from "./sidebar.styles"
import PageSection from "../pageSection"

export default props => (
  <>
    <Aside>
      <PageSection
        title="Latest News"
        titleBackground="purple"
        titleColor="white"
      >
        <TwitterFeed
          tweetLimit="5"
          width="100%"
          height="auto"
          timeline="https://twitter.com/hackneynut?ref_src=twsrc%5Etfw"
        />
      </PageSection>
      <PageSection title="Newsletter" titleBackground="pink" titleColor="white">
        <Newsletters />
      </PageSection>
      <PageSection
        title="Join the NEU"
        titleBackground="light_green"
        titleColor="black"
      >
        <Join />
      </PageSection>
    </Aside>
  </>
)
