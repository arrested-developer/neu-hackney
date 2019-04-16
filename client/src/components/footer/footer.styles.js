import styled from "styled-components"
import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"
import { P } from "../shared/typography"
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

export const FooterHeading = styled.header`
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.cyan};
  color: white;
  padding: ${({ theme }) => theme.xs};
`

export const LinkList = styled.ul`
  ${props => (props.indent ? `margin-left: ${props.theme.l}` : null)};
`

export const LinkItem = styled.li`
  margin: ${({ theme }) => theme.m} 0;
  font-family: ${({ theme }) => theme.body};
`

export const Link = styled(GatsbyLink)`
  display: block;
  margin: ${({ theme }) => theme.s} 0;
  text-decoration: underline;
  font-family: ${({ theme }) => theme.body};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.cyan};
  }
`

export const ExternalLink = styled.a`
  display: block;
  margin: ${({ theme }) => theme.s} 0;
  text-decoration: underline;
  font-family: ${({ theme }) => theme.body};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.cyan};
  }
`

export const ContactP = styled(P)`
  margin-top: ${({ theme }) => theme.l};
`

export const FormP = styled(P)`
  margin-top: ${({ theme }) => theme.m};
`

export const SecondaryP = styled(P)`
  margin-top: ${({ theme }) => theme.m};
  opacity: 0.6;
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