import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ChatStyled = styled(motion.section)`
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: space-between;

  .header-content {
    align-items: center;
    background-color: #1a1a40;
    border-radius: 2rem 2rem 0 0;
    display: flex;

    height: 5rem;
    justify-content: flex-start;
    padding: 0 2rem;
    width: auto;

    button {
      background-color: transparent;
      height: 2rem;
      margin-right: 2rem;
      width: 2rem;
    }
  }
  .chat-content {
    background-size: contain;
    height: 75%;
    overflow: scroll;
  }

  .input-content {
    align-items: center;
    background-color: #1a1a40;
    display: flex;
    gap: 1rem;

    height: 5rem;
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;

    input {
      background: #1e1e49;
    }

    button {
      align-items: center;
      background: #1e1e49;
      border-radius: 1rem;
      display: flex;

      height: 3.5rem;
      justify-content: center;
      width: 20%;

      img {
        width: 30%;
      }

      &:hover {
        border: 0.1rem solid #0056fd;
      }
    }
  }

  @media (min-width: 450px) {
    .input-content {
      border-radius: 0 0 2rem 2rem;
    }
  }
`
