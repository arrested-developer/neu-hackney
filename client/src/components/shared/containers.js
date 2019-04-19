import styled from "styled-components"

export const Card = styled.div`
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};
  width: 100%;
  padding: ${({ theme }) => theme.m};
  border-radius: ${({ theme }) => theme.xs};
  margin-bottom: ${({ theme }) => theme.m};
`
