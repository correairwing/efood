import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ListCard = styled.div`
  color: ${cores.background2};
  background-color: ${cores.orange};
  max-width: 320px;
  padding: 8px;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
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
  height: 168px;
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
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1024px;
  width: 100%;
  grid-gap: 32px;
  margin: 80px auto 120px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .container {
    max-width: 1024px;
  }
`
export const Card = styled.div`
  background-color: ${cores.orange};
  height: 344px;
  display: flex;
  padding: 32px;
  color: ${cores.white};
  position: relative;
  z-index: 1;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  img:first-child {
    height: 280px;
    width: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  p,
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  span {
    margin-top: 24px;
    display: block;
  }
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.background2};
  color: ${cores.orange};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  border: none;
  text-decoration: none;
  margin-top: 16px;
`
export const CloseButton = styled.img`
  height: 16px;
  width: 16px;
  top: 8px;
  right: 8px;
  position: absolute;
`
