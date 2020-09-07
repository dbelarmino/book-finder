import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 3rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  form input {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #6e44ff;
    font-size: 2rem;
    border-radius: 0.5rem;
    transition: background 400ms;
  }

  form input:focus,
  form input:hover {
    background: rgb(230, 232, 239);
  }

  form button {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #6e44ff;
    background: #6e44ff;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 400ms, color 400ms;
  }

  form button:focus,
  form button:hover {
    background: #fff;
    color: #6e44ff;
  }

  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  main article {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 0.5rem 0px rgba(0, 29, 239, 0.3);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  main article:focus,
  main article:hover {
  }

  main article + article {
    margin-top: 1.5rem;
  }

  main article img {
    width: 100%;
    min-height: 22rem;
    max-height: 22rem;
    object-fit: cover;
    transition: opacity 400ms;
  }

  main article img:focus,
  main article img:hover {
    opacity: 0.9;
  }

  main article div {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  main article div > * + * {
    margin-top: 2rem;
  }

  main article div button {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #6e44ff;
    background: #6e44ff;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 400ms, color 400ms;
  }

  main article div button:focus,
  main article div button:hover {
    background: #fff;
    color: #6e44ff;
  }

  @media (min-width: 570px) {
    main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
    }

    main article + article {
      margin-top: 0;
    }
  }

  @media (min-width: 900px) {
    main {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default Container
