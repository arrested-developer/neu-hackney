import styled from "styled-components"

export const Card = styled.div`
  color: ${({ theme }) => theme.black};
  background: ${({ background, theme }) =>
    background ? theme[background] : theme.white};
  width: 100%;
  padding: ${({ theme }) => theme.m};
  border-radius: ${({ theme }) => theme.xs};
  margin-bottom: ${({ theme }) => theme.m};
`

export const Main = styled.main`
  width: 100%;
  @media ${({ theme }) => theme.break_ns} {
    width: calc(70% - ${({ theme }) => theme.m});
    float: left;
  }
`
