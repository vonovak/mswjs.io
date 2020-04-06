import { Box } from 'atomic-layout'
import styled from 'styled-components'

export interface CardProps {
  stripeColor?: string
}

export const Card = styled(Box)<CardProps>`
  position: relative;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 0.6px 0.9px rgba(0, 0, 0, 0.008),
    0 1.3px 2.1px rgba(0, 0, 0, 0.012), 0 2.5px 4px rgba(0, 0, 0, 0.015),
    0 4.5px 7.1px rgba(0, 0, 0, 0.018), 0 8.4px 13.4px rgba(0, 0, 0, 0.022),
    0 20px 32px rgba(0, 0, 0, 0.03);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background-color: ${({ stripeColor }) => stripeColor};
  }
`

Card.defaultProps = {
  stripeColor: '#eee',
  inline: true,
}