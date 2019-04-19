import styled from "styled-components"

export const Button = styled.button`
  ${({ theme }) => theme.body} ; 
  font-size: 1.1rem;
  padding: ${({ theme }) => `${theme.s} ${theme.m}`};
  background ${({ background, theme }) =>
    background ? theme[background] : theme.cyan};
  color: ${({ color, theme }) => (color ? theme[color] : theme.white)};
  border: none;
  border-radius: ${({ theme }) => theme.s};
  ${({ theme }) => theme.box_shadow_small};
`

export const ButtonLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  ${({ theme }) => theme.body}; 
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
  margin-right: ${({ theme }) => theme.s};
`
