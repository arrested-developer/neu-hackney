import styled from "styled-components"

import _Img from "gatsby-image"

export const Img = styled(_Img)``

export const ImgShadow = styled(_Img)`
  ${({ theme }) => theme.box_shadow};
  margin-bottom: 1em;
`
