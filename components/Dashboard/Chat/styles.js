import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ChatStyled = styled(motion.section)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2rem;

  .header-content {
    padding: 0 2rem;
    width: auto;
    background-color: #1a1a40;
    display: flex;
    justify-content: flex-start ;
    align-items: center;
    height: 5rem;
    border-radius: 2rem 2rem 0 0;
  }
  .chat-content {
    background: url('/background-chat.jpg');
    background-size: contain;
    height: 75%;
  }
`
