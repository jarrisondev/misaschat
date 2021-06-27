import styled from 'styled-components'

export const LoginStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: space-between;
  padding: 0 2rem;

  img {
    margin: 3rem auto 0 auto;
    width: 18rem;
  }

  .heroContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    h1 {
      font-size: 2.4rem;
      margin: 0;

      span {
        color: #0056fd;
      }
    }

    p {
      font-size: 1.1rem;
      font-weight: 100;
      line-height: 2rem;
      margin-top: 1.5rem;
    }
  }

  .buttonContainer {
    background-color: #3f3d56;
    border-radius: 1rem;
    display: flex;
    height: 3.5rem;

    justify-content: space-between;
    margin-bottom: 3rem;
    width: 100%;

    button {
      background-color: #0056fd;
      border-radius: 1rem;
      color: white;
      outline: none;

      width: 50%;

      &:nth-of-type(2) {
        background-color: #3f3d56;
        border-radius: 0 1rem 1rem 0;
      }
    }
  }
`

export const FormStyled = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: available;

  .firstSection {
    margin-top: 3rem;
    text-align: left;
  }

  p {
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 0.8rem;
    text-decoration: underline;

    transform: translate(0, 0);

    &:hover {
      transform: translate(0, -0.2rem);
      color: #31ff6c;
    }
  }

  button {
    background-color: #31ff6c;
    border: none;
    border-radius: 20px;
    color: white;

    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    height: 2.5rem;

    margin-top: 1.5rem;
    transition: 0.3s;
    width: 50%;

    &:hover {
      background: #11c054;
    }
  }
`
