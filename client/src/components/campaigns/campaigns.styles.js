import styled from "styled-components"

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
`
export const CampaignList = styled.ul``
export const CampaignListItem = styled.li`
  padding-bottom: ${({ theme }) => theme.l};
  margin-bottom: ${({ theme }) => theme.l};
  border-bottom: ${({ theme }) => theme.s} solid
    ${({ theme }) => theme.blue_grey};
`
export const Details = styled.div`
  margin-top: 1rem;
`
