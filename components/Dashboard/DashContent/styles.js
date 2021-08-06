import styled from 'styled-components'

export const DashContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 3rem 2rem 0 2rem;

    h2 {
      margin: 0;
    }

    button {
      background-color: transparent;
      border: 0;
      width: 1.8rem;
    }
  }

  .button-container {
    background-color: #3f3d56;
    border-radius: 1rem;
    margin: 0 2rem;
    width: max-content;

    button {
      color: white;
      background-color: #0056fd;
      border-radius: 1rem;
      height: 3rem;

      width: 7rem;

      &:nth-of-type(2) {
        background-color: #3f3d56;
        border-radius: 0 1rem 1rem 0;
      }
    }
  }

  .chats-container {
    filter: blur(1);
    height: 28rem;
    margin: 0 2rem;
    overflow-y: scroll;

    width: auto;
  }

  aside {
    align-items: center;
    background-color: #1a1a40;
    display: flex;
    height: 5rem;

    justify-content: space-between;
    padding: 0 3rem;
    width: 100%;

    button {
      align-items: center;
      background-color: transparent;
      color: white;
      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;

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
      background-color: #0056fd;
      border-radius: 50%;
      height: 4rem;
      margin-top: -5rem;

      width: 4rem;

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
