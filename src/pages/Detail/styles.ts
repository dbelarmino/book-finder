import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  button {
    width: 100%;
    max-width: 15rem;
    height: 4rem;
    padding: 0 2rem;
    border: 0.2rem solid #6e44ff;
    background: #6e44ff;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 400ms, color 400ms;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background: #fff;
    color: #6e44ff;
  }

  article {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 0.5rem 0px rgba(0, 29, 239, 0.3);
    border-radius: 0.5rem;
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  article img {
    width: max-content;
  }

  article div {
    width: 100%;
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }

  article div > * + * {
    margin-top: 2rem;
  }
`

export default Container
