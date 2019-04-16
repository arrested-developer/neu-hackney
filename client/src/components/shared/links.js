import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const Link = styled(GatsbyLink)`
  display: block;
  margin: ${({ theme }) => theme.s} 0;
  text-decoration: underline;
  font-family: ${({ theme }) => theme.body};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.cyan};
  }
`

export const ExternalLink = styled.a.attrs({
  target: "_blank",
})`
  color: white;
  display: block;
  margin: ${({ theme }) => theme.s} 0;
  text-decoration: underline;
  font-family: ${({ theme }) => theme.body};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.cyan};
  }
`
