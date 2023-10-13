import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonLink = styled(Link)`
  background-color: ${cores.orange};
  color: ${cores.white};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  margin: 8px;
  border: none;
  text-decoration: none;
`
