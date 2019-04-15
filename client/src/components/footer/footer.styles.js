import styled from "styled-components"

import { P } from "../shared/typography"

export const Footer = styled.footer`
  background: ${({ theme }) => theme.dark_blue};
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.l};
  @media ${({ theme }) => theme.break_ns} {
    padding: ${({ theme }) => theme.xl};
  }
`

export const FooterSection = styled.section`
  font-family: "Arial Bold", "Arial", sans-serif;
  color: white;
  a {
    color: white;
  }
  margin: ${({ theme }) => theme.l};
  padding-top: ${({ theme }) => theme.l};
  width: 100%;
  max-width: 400px;
  @media ${({ theme }) => theme.break_ns} {
    margin: 0;
    width: calc(50% - ${({ theme }) => theme.m});
    padding: ${({ theme }) => theme.l} 0;
  }
  @media ${({ theme }) => theme.break_l} {
    width: 25%;
    max-width: ${props => props.maxWidth};
  }
`

export const FooterHeading = styled.header`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.cyan};
`

export const LinkList = styled.ul`
  margin-left: ${({ theme }) => theme.m};
`

export const LinkItem = styled.li`
  margin: ${({ theme }) => theme.m} 0;
`

export const ContactLink = styled.a`
  display: block;
  margin: ${({ theme }) => theme.s} 0;
`

export const ContactP = styled(P)`
  margin-top: ${({ theme }) => theme.l};
`

export const FormP = styled(P)`
  margin-top: ${({ theme }) => theme.m};
`

export const FormMessage = styled(P).attrs({
  role: "alert",
  "aria-live": "assertive",
})`
  margin-top: ${({ theme }) => theme.m};
  color: ${props =>
    props.type === "success"
      ? "lime"
      : props.type === "error"
      ? "red"
      : "inherit"};
`
