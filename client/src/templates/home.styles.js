import styled from "styled-components"

export const Main = styled.main`
  width: 100%;
  @media ${({ theme }) => theme.break_ns} {
    width: calc(70% - ${({ theme }) => theme.m});
    float: left;
  }
`
