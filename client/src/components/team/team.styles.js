import styled from "styled-components"
import { H3, P } from "../shared/typography"

export const Card = styled.li`
  background: white;
  padding: ${({ theme }) => theme.m};
  margin-bottom: ${({ theme }) => theme.m};
  ${({ theme }) => theme.box_shadow}
`

export const Heading = styled(H3)`
  margin-top: 0;
  margin-bottom: 0.25em;
`

export const Position = styled(P)``
