import styled from "styled-components"

export const CampaignCard = styled.li`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  padding: ${({ theme }) => theme.m};
  margin-bottom: ${({ theme }) => theme.m};
`

export const CampaignCardImage = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background-url: ${props => props.background};
`
