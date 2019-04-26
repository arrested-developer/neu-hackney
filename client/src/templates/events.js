import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1, P } from "../components/shared/text"
import PageSection from "../components/pageSection"

export default ({ pageContext: { events } }) => {
  const pageHas = data => data && data.length > 0
  return (
    <>
      <Layout>
        <SEO title={`Events`} />
        <H1>Events</H1>
        <Main>Events!</Main>
      </Layout>
    </>
  )
}
