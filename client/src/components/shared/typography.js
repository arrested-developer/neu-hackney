import styled from "styled-components"

// ratios taken from http://typecast.com/blog/a-more-modern-scale-for-web-typography

export const H1 = styled.h1`
  ${({ theme }) => theme.heading};
  font-size: 2rem;
  line-height: 1.25em;
  @media ${({ theme }) => theme.m} {
    font-size: 2.5rem;
    line-height: 1.125em;
  }
  @media ${({ theme }) => theme.l} {
    font-size: 3rem;
    line-height: 1.05em;
  }
`

export const H2 = styled.h2`
  ${({ theme }) => theme.heading};
  font-size: 1.625rem;
  line-height: 1.15384615em;
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
  @media ${({ theme }) => theme.ns} {
    line-height: 1.22222222em;
  }
`

export const P = styled.p`
  ${({ theme }) => theme.body};
  font-size: 1rem;
  line-height: 1.25em;
  max-width: 38em;
  text-overflow: ellipsis;
  margin-bottom: 1em;
  font-weight: 300;
  @media ${({ theme }) => theme.ns} {
    line-height: 1.375em;
  }
`
