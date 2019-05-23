import React from "react"
import parse from "react-html-parser"
import styled from "styled-components"

import { H2Style, H3Style, H4Style, PStyle } from "../shared/text"

const PageContent = styled.div`
  & p {
    ${PStyle}
    color: ${({ theme, dark }) => (dark ? theme.dark_blue : theme.white)};
  }
  & h2 {
    ${H2Style}
  }
  & h3 {
    ${H3Style}
  }
  & h4 {
    ${H4Style}
  }
  & figure {
    margin-bottom: 1rem;
  }
  & ul {
    list-style: inside;
    margin-bottom: 1rem;
  }
  & ul > li {
    line-height: 1.25em;
  }
  & a,
  & a:visited,
  & a:active {
    color: ${({ theme, dark }) => (dark ? theme.blue : theme.dark_blue)};
    font-weight: 700;
    text-decoration: underline;
  }
  & a:hover {
    color: ${({ theme, dark }) => (dark ? theme.cyan : theme.blue)};
  }
`

const stripTags = htmlString =>
  htmlString
    .replace(/<html>/gi, "")
    .replace(/<body>/gi, "")
    .replace(/<head>/gi, "")
    .replace(/<\/html>/gi, "")
    .replace(/<\/body>/gi, "")
    .replace(/<\/head>/gi, "")

const makeLinksExternal = htmlString =>
  htmlString.replace(/<a/gi, '<a target="_blank" rel="noopener noreferrer"')

export default props => (
  <PageContent {...props}>
    {parse(makeLinksExternal(stripTags(props.children)))}
  </PageContent>
)
