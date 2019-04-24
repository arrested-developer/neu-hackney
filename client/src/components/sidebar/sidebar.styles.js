import styled from "styled-components"

export const Aside = styled.aside`
  width: 100%;
  @media ${({ theme }) => theme.break_ns} {
    width: calc(30% - ${({ theme }) => theme.m});
    float: right;
  }
`
