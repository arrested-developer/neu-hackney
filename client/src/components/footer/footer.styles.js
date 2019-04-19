import styled from "styled-components"
import Img from "gatsby-image"
import { Alert } from "reactstrap"

export const Footer = styled.footer`
  background: ${({ theme }) => theme.dark_blue};
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${({ theme }) => theme.l};
  @media screen and (min-width: 550px) {
    padding: ${({ theme }) => theme.xl};
  }
`

export const FooterSection = styled.section`
  font-family: ${({ theme }) => theme.body};
  color: white;
  a {
    color: white;
  }
  margin: ${({ theme }) => theme.l} 0;
  width: 100%;
  @media ${({ theme }) => theme.break_ns} {
    margin: 0;
    width: calc(45% - ${({ theme }) => theme.m});
    padding: ${({ theme }) => theme.l} 0;
  }
  @media ${({ theme }) => theme.break_xl} {
    width: calc(25% - ${({ theme }) => theme.s});
    max-width: ${props => props.maxWidth};
  }
`

export const FormMessage = styled(Alert).attrs({
  role: "alert",
  "aria-live": "assertive",
})`
  margin-top: ${({ theme }) => theme.m};
`

export const MapImg = styled(Img)`
  width: 100%;
  aspect-ratio: 4/3;
`

export const FooterSocials = styled.nav`
  font-size: 1.5rem;
  color: white;
  border-top: 1px solid white;
  width: 100%;
  padding-top: ${({ theme }) => theme.m};
  margin: ${({ theme }) => theme.l} 0;
  text-align: right;
`
