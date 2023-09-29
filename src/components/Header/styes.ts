import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeaderArea = styled.header`
  width: 100%;
  height: 384px;

  img {
    margin-top: 48px;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`
export const Title = styled.h1`
  color: ${cores.orange};
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  max-width: 536px;
  margin-bottom: 40px;
`
