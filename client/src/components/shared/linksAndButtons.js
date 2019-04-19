import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"

const buttonStyle = css`
${({ theme }) => theme.body} ; 
font-size: 1.1rem;
padding: ${({ theme }) => `${theme.s} ${theme.m}`};
background ${({ background, theme }) =>
  background ? theme[background] : theme.cyan};
color: ${({ color, theme }) => (color ? theme[color] : theme.white)};
border: none;
border-radius: ${({ theme }) => theme.s};
${({ theme }) => theme.box_shadow_small};
text-wrap: none;
display: inline-block;
margin-bottom: ${({ theme }) => theme.s};
margin-top: ${({ theme }) => theme.s};
${props =>
  props.right
    ? `margin-left: ${props.theme.s};`
    : `margin-right: ${props.theme.s};`}

`

const linkStyle = css`
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

export const Link = styled(GatsbyLink)`
  ${linkStyle}
`

export const ExternalLink = styled.a.attrs({
  target: "_blank",
})`
  ${linkStyle}
`

export const Button = styled.button`
  ${buttonStyle}
`

export const LinkButton = styled(GatsbyLink)`
  ${buttonStyle}
`

export const ExternalLinkButton = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  ${buttonStyle}
`

export const LinkList = styled.ul`
  ${props => (props.indent ? `margin-left: ${props.theme.l}` : null)};
`

export const LinkItem = styled.li`
  margin: ${({ theme }) => theme.m} 0;
  font-family: ${({ theme }) => theme.body};
`
