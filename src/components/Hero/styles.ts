import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeroImg = styled.div`
  height: 280px;
  color: ${cores.white};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 30px 380px;
    height: 100%;
  }

  p {
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  h1,
  p {
    z-index: 1;
  }
`
