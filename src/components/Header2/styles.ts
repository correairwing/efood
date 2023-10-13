import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Title = styled.h2`
  font-size: 18px;
  color: ${cores.orange};
`
export const Hero = styled.div`
  height: 280px;
  color: ${cores.white};
  background-repeat: no-repeat;
  background-size: cover;

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
`
