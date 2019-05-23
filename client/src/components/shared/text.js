import styled, { css } from "styled-components"

// ratios taken from http://typecast.com/blog/a-more-modern-scale-for-web-typography

export const headerStyles = css`
  ${({ theme }) => theme.heading};
  color: ${({ color, theme }) => (color ? theme[color] : theme.white)};
  background: ${props => props.theme[props.background] || "transparent"};
  ${props => {
    if (props.background) return props.theme.box_shadow
  }};
  padding: ${props => (props.background ? props.theme.s : 0)};
`

export const H1 = styled.h1`
  ${headerStyles}
  font-size: 2rem;
  line-height: 1.25em;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  @media ${({ theme }) => theme.break_m} {
    font-size: 2.5rem;
    line-height: 1.125em;
  }
  @media ${({ theme }) => theme.break_l} {
    font-size: 3rem;
    line-height: 1.05em;
  }
`

export const H2Style = css`
  ${headerStyles}
  font-size: 1.625rem;
  line-height: 1.15384615em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  @media ${({ theme }) => theme.m} {
    font-size: 2rem;
    line-height: 1.25em;
  }
  @media ${({ theme }) => theme.l} {
    font-size: 2.25rem;
    line-height: 1.25em;
  }
`

export const H2 = styled.h2`
  ${H2Style}
`

export const H3Style = css`
  ${headerStyles}
  font-size: 1.375rem;
  line-height: 1.13636364em;
  margin-top: 0.5em;
  margin-bottom: 0.75em;
  @media ${({ theme }) => theme.m} {
    font-size: 1.5rem;
    line-height: 1.25em;
  }
  @media ${({ theme }) => theme.l} {
    font-size: 1.75rem;
    line-height: 1.25em;
  }
`

export const H3 = styled.h3`
  ${H3Style}
  }
`

export const H4Style = css`
  ${headerStyles}
  font-size: 1.125rem;
  line-height: 1.11111111em;
  margin-top: 0.4em;
  margin-bottom: 0.5em;
  @media ${({ theme }) => theme.ns} {
    line-height: 1.22222222em;
  }
`

export const H4 = styled.h4`
  ${H4Style}
`

export const PStyle = css`
  ${({ theme }) => theme.body};
  line-height: 1.25em;
  max-width: 38em;
  text-overflow: ellipsis;
  margin-bottom: 1em;
  @media ${({ theme }) => theme.ns} {
    line-height: 1.375em;
  }
  font-size: ${props =>
    props.small ? "0.8rem" : props.large ? "1.2rem" : "1rem"};
  opacity: ${props => (props.secondary ? "0.6" : "1")};
  font-weight: ${props => (props.bold ? 700 : 400)};
  color: ${({ color, theme }) => (color ? theme[color] : theme.white)};
  background: ${({ background, theme }) =>
    background ? theme[background] : "inherit"};
  padding: ${({ background, theme }) => (background ? theme.s : 0)};
`

export const P = styled.p`
  ${PStyle}
`

export const SecondaryP = styled(P)`
  margin-top: ${({ theme }) => theme.m};
  opacity: 0.6;
`
