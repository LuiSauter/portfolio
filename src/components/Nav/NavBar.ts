import styled from "styled-components";
import { breackpoints } from "../../styles/breackpoints";

export const NavBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 0;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 1.13rem;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    font-size: 1.13rem;
    button {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      padding: .3rem;
      border-radius: 50%;
      outline: none;
      background-color: transparent;
      svg {
        font-size: 2rem;
        height: 30px;
        width: 30px;
      }
    }
  }

  span, button {
    margin-left: 1rem;
  }

  @media screen and (max-width: ${breackpoints.laptop}) {
    padding: 1rem 0;
    h1 {
      font-size: 1.3rem;
      content: 'hola';
    }
  }
`