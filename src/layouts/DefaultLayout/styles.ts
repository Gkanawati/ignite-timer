import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  /* height: calc(100vh - 10rem); */
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    & {
      max-width: 95%;
      padding: 2.5rem 1.5rem;
      margin: 3rem auto;
      overflow: hidden;
    }
  }

  @media (max-width: 1200px) {
    & {
      max-width: 95%;
    }
  }
`
