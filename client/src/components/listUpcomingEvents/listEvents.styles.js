import styled from "styled-components"

export const EventsList = styled.ul``
export const EventsListItem = styled.li`
  padding-bottom: ${({ theme }) => theme.l};
  margin-bottom: ${({ theme }) => theme.l};
  border-bottom: ${({ theme }) => theme.s} solid
    ${({ theme }) => theme.blue_grey};
`
