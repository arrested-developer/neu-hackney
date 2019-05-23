import styled from "styled-components"
import { H3, P } from "../shared/text"
import Img from "gatsby-image"

export const TeamList = styled.ul``

export const TeamListFlex = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled.li`
  background: white;
  padding: ${({ theme }) => theme.m};
  margin-bottom: ${({ theme }) => theme.m};
  ${({ theme }) => theme.box_shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.s};
  width: 100%;
  @media screen and (min-width: 420px) {
    flex-direction: row;
  }
  @media ${({ theme }) => theme.break_ns} {
    flex-direction: column;
    width: calc(50% - ${({ theme }) => theme.m});
  }
`

export const Heading = styled(H3)`
  margin-top: 0;
  margin-bottom: 0.25em;
`

export const Position = styled(P).attrs({
  marginTop: 0,
  marginBottom: 0,
})``

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
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

export const Details = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.m};
  @media screen and (min-width: 420px) {
    margin-top: 0;
  }
  @media ${({ theme }) => theme.break_ns} {
    margin-top: ${({ theme }) => theme.m};
  }
`
