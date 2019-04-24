import React from "react"
import { H2 } from "../shared/text"
import { Section, Content } from "./pageSection.styles"

export default ({ title, titleBackground, titleColor, children, ...props }) => {
  return (
    <Section {...props}>
      <H2 background={titleBackground} color={titleColor}>
        {title}
      </H2>
      <Content>{children}</Content>
    </Section>
  )
}
