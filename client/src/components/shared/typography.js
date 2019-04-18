import styled from "styled-components"

// ratios taken from http://typecast.com/blog/a-more-modern-scale-for-web-typography

export const H1 = styled.h1`
  color: white;
  ${({ theme }) => theme.heading};
  font-size: 2rem;
  line-height: 1.25em;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  color: ${({ color, theme }) => (color ? theme[color] : "black")};
  @media ${({ theme }) => theme.break_m} {
    font-size: 2.5rem;
    line-height: 1.125em;
  }
  @media ${({ theme }) => theme.break_l} {
    font-size: 3rem;
    line-height: 1.05em;
  }
`

export const H2 = styled.h2`
  ${({ theme }) => theme.heading};
  font-size: 1.625rem;
  line-height: 1.15384615em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  background: ${props => props.theme[props.background] || "transparent"};
  color: ${props => props.theme[props.color] || "black"};
  padding: ${props => (props.background ? props.theme.s : 0)};
  @media ${({ theme }) => theme.m} {
    font-size: 2rem;
    line-height: 1.25em;
  }
  @media ${({ theme }) => theme.l} {
    font-size: 2.25rem;
    line-height: 1.25em;
  }
`

export const H3 = styled.h3`
  ${({ theme }) => theme.heading};
  font-size: 1.375rem;
  line-height: 1.13636364em;
  margin-top: 0.5em;
  margin-bottom: 0.75em;
  color: ${({ color, theme }) => (color ? theme[color] : "black")};
  @media ${({ theme }) => theme.m} {
    font-size: 1.5rem;
    line-height: 1.25em;
  }
  @media ${({ theme }) => theme.l} {
    font-size: 1.75rem;
    line-height: 1.25em;
  }
`

export const H4 = styled.h4`
  ${({ theme }) => theme.heading};
  font-size: 1.125rem;
  line-height: 1.11111111em;
  color: ${({ color, theme }) => (color ? theme[color] : "black")};
  @media ${({ theme }) => theme.ns} {
    line-height: 1.22222222em;
  }
`

export const P = styled.p`
  ${({ theme }) => theme.body};
  font-size: ${props =>
    props.small ? "0.8rem" : props.large ? "1.2rem" : "1rem"};
  opacity: ${props => (props.secondary ? "0.6" : "1")};
  line-height: 1.25em;
  max-width: 38em;
  text-overflow: ellipsis;
  margin-bottom: 1em;
  font-weight: ${props => (props.bold ? 700 : 400)};
  color: ${({ color, theme }) => (color ? theme[color] : "black")};
  @media ${({ theme }) => theme.ns} {
    line-height: 1.375em;
  }
`

export const SecondaryP = styled(P)`
  margin-top: ${({ theme }) => theme.m};
  opacity: 0.6;
`
