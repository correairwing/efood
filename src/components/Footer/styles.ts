import { styled } from 'styled-components'
import { cores } from '../../styles'

export const FooterArea = styled.div`
  height: 298px;
  background-color: ${cores.background2};
  align-items: center;
`
export const Text = styled.p`
  max-width: 480px;
  color: ${cores.orange};
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  margin: 80px 0 40px 0;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  img {
    margin-top: 40px;
  }
`
export const SocialMedia = styled.div`
  img {
    margin-right: 8px;
  }
`
