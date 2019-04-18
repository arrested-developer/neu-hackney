import styled from "styled-components"

export const HomePageSection = styled.section`
  margin-bottom: ${({ theme }) => theme.xl};
`

export const Content = styled.article`
  color: ${({ theme }) => theme.white};
`

export const Main = styled.main`
  width: 100%;
  @media ${({ theme }) => theme.break_ns} {
    width: calc(70% - ${({ theme }) => theme.m});
    float: left;
  }
`

export const Aside = styled.aside`
  width: 100%;
  @media ${({ theme }) => theme.break_ns} {
    width: calc(30% - ${({ theme }) => theme.m});
    float: right;
  }
`
