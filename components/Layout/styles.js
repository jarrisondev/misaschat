import styled from 'styled-components'

export const LayoutStyled = styled.div`
  background: #1e1e49;
  height: 100vh;
  max-width: 450px;
  min-height: 100vh;

  position: relative;
  width: 100vw;

  @media (min-width: 450px) {
    border-radius: 2rem;
    height: 48rem;
    min-height: 48rem;
    width: 26rem;
  }
`
