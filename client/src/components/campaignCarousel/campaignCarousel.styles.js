import styled from "styled-components"

export const CampaignCard = styled.div`
  color: ${({ theme }) => theme.black};
  margin-bottom: ${({ theme }) => theme.m};
  width: 100%;
`

export const CampaignCardImage = styled.div`
  width: 100vw;
  height: 0;
  padding-top: 56.25%;
  background-url: ${props => props.background};
`

export const FlickityContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`

export const WhiteBackground = styled.span`
  background: white;
  padding: ${({ theme }) => theme.xs};
`
