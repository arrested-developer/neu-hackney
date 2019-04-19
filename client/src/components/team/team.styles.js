import styled from "styled-components"
import { H3, P } from "../shared/text"
import Img from "gatsby-image"

export const TeamList = styled.ul``

export const Card = styled.li`
  background: white;
  padding: ${({ theme }) => theme.m};
  margin-bottom: ${({ theme }) => theme.m};
  ${({ theme }) => theme.box_shadow};
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Heading = styled(H3)`
  margin-top: 0;
  margin-bottom: 0.25em;
`

export const Position = styled(P)``

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.dark_blue};
  margin-right: ${({ theme }) => theme.m};
  overflow: hidden;
  ${({ theme }) => theme.box_shadow_small}
`

export const TeamMemberPhoto = styled(Img)`
  height: 100px;
  width: 100px;
`

export const Details = styled.div``
