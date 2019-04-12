import React from "react"
import styled from "styled-components"

export const Footer = styled.footer`
  background: ${({ theme }) => theme.dark_blue};
  width: 100vw;
  padding: ${({ theme }) => theme.xl};
  display: flex;
  flex-direction: row;
`

export const FooterLinks = styled.nav`
  font-family: "Arial Bold", "Arial", sans-serif;
  color: white;
  a {
    color: white;
  }
  padding-top: ${({ theme }) => theme.m};
`

export const FooterHeading = styled.header`
  margin-bottom: 1rem;
`

export const LinkList = styled.ul`
  margin-left: ${({ theme }) => theme.m};
`

export const LinkItem = styled.li`
  margin: ${({ theme }) => theme.s} 0;
`
