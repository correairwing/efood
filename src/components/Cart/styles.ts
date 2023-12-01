import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

import del from '../../assets/images/delete.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.orange};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonLink} {
    background-color: ${cores.background2};
    color: ${cores.orange};
    width: 100%;
    margin: 0;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px 0;

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.background2};
  }
`
export const CartItem = styled.div`
  display: flex;
  background-color: ${cores.background2};
  padding: 8px 8px 12px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.orange};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.orange};
  }

  button {
    background-image: url(${del});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
