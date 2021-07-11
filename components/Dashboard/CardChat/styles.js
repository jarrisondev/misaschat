import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardChatStyled = styled(motion.div)`
  background-color: #1a1a40;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;

  height: 4rem;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;

  width: 100%;

  img {
    border-radius: 50%;
  }

  h4 {
    font-weight: 400;
    line-height: 3rem;
    margin: 0;
    padding: 0;
  }

  &:hover {
    opacity: 0.7 !important;
  }
`
