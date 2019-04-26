import React from "react"
import parse from "react-html-parser"

const stripTags = htmlString =>
  htmlString
    .replace(/<html>/gi, "")
    .replace(/<body>/gi, "")
    .replace(/<head>/gi, "")
    .replace(/<\/html>/gi, "")
    .replace(/<\/body>/gi, "")
    .replace(/<\/head>/gi, "")

const styleElements = htmlString =>
  htmlString
    .replace(/<p>/gi, '<p style="margin-bottom: 2rem">')
    .replace(/<figure>/gi, '<figure style="margin-bottom: 2rem">')

export default props => (
  <h1>{parse(styleElements(stripTags(props.children)))}</h1>
)
