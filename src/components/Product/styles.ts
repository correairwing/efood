import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  color: ${cores.background2};
  background-color: ${cores.orange};
  max-width: 320px;
  padding: 8px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
`

export const CardButton = styled.button`
  background-color: ${cores.background2};
  border: none;
  display: block;
  width: 100%;
  color: ${cores.orange};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
`
