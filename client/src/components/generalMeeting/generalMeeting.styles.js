import styled from "styled-components"
import Img from "gatsby-image"

export const ImgShadow = styled(Img)`
  ${({ theme }) => theme.box_shadow};
  margin-bottom: 1em;
`
