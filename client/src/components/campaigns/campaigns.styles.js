import styled from "styled-components"

export const Card = styled.div`
  color: ${({ theme }) => theme.black};
  width: 100%;
  padding: ${({ theme }) => theme.m};
`

export const CampaignCardImage = styled.div`
  width: 100vw;
  height: 0;
  padding-top: 56.25%;
  background-url: ${props => props.background};
`

export const CarouselContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.25);
  ${({ theme }) => theme.box_shadow}
`

export const WhiteBackground = styled.span`
  background: white;
  padding: ${({ theme }) => theme.xs};
`
