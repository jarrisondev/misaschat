import styled from 'styled-components'

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  header {
    margin: 3rem 2rem 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    button {
      background-color: transparent;
      border: 0;
      width: 2rem;
    }
  }

  .button-container {
    background-color: #3f3d56;
    margin: 0 2rem;
    width: max-content;
    border-radius: 1rem;

    button {
      color: white;
      border-radius: 1rem;
      background-color: #0056fd;

      width: 7rem;
      height: 2.5rem;

      &:nth-of-type(2) {
        background-color: #3f3d56;
        border-radius: 0 1rem 1rem 0;
      }
    }
  }
  .chats-container {
    margin: 0 2rem;
    width: auto;
    height: 30rem;
  }
  aside {
    background-color: #1a1a40;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    padding: 0 2rem;

    button {
      color: white;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      p {
        margin-top: 0.6rem;
        font-size: 0.8rem;
        font-weight: 200;
      }

      &:hover {
        opacity: 0.6;
      }

      .chats-icon {
        width: 1.5rem;
      }
      .profile-icon {
        width: 1.2rem;
      }
    }

    button:nth-of-type(2) {
      width: 2rem;
      margin-top: -5rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: #0056fd;

      img {
        width: 2.5rem;
      }
    }
  }
  @media (min-width: 450px) {
    aside {
      border-radius: 0 0 2rem 2rem;
    }
  }
`
