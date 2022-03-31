import styled from "styled-components";
import { breackpoints } from "../../styles/breackpoints";

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.7rem;
  width: 100%;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 1.4rem;
    border: 1px solid transparent;
    text-align: center;
    margin-right: 1rem;
    white-space: nowrap;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.13rem;
    width: 100%;
    button {
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0.3rem;
      border-radius: 50%;
      outline: none;
      background-color: transparent;

      -webkit-animation: spin 4s linear 0s infinite;
      -moz-animation: spin 4s linear 0s infinite;
      -ms-animation: spin 4s linear 0s infinite;
      -o-animation: spin 4s linear 0s infinite;
      animation: spin 4s linear 0s infinite;

      -webkit-animation-play-state: paused;
      -moz-animation-play-state: paused;
      -ms-animation-play-state: paused;
      -o-animation-play-state: paused;
      animation-play-state: paused;
      svg {
        font-size: 2rem;
        height: 30px;
        width: 30px;
        border-radius: 50%;

        -webkit-animation: spin 10s linear 0s infinite reverse;
        -moz-animation: spin 10s linear 0s infinite reverse;
        -ms-animation: spin 10s linear 0s infinite reverse;
        -o-animation: spin 10s linear 0s infinite reverse;
        animation: spin 10s linear 0s infinite reverse;
      }
      &:hover {
        -webkit-animation-play-state: running;
        -moz-animation-play-state: running;
        -ms-animation-play-state: running;
        -o-animation-play-state: running;
        animation-play-state: running;
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(360deg);
      }
      100% {
        -webkit-transform: rotate(0deg);
      }
    }
    @-ms-keyframes spin {
      0% {
        -ms-transform: rotate(360deg);
      }
      100% {
        -ms-transform: rotate(0deg);
      }
    }
    @-moz-keyframes spin {
      0% {
        -moz-transform: rotate(360deg);
      }
      100% {
        -moz-transform: rotate(0deg);
      }
    }
    @-o-keyframes spin {
      0% {
        -o-transform: rotate(360deg);
      }
      100% {
        -o-transform: rotate(0deg);
      }
    }
  }

  span,
  button {
    margin-left: 1rem;
  }

  @media screen and (max-width: ${breackpoints.laptop}) {
    padding: 1.5rem 0.8rem 0.5rem 0.8rem;
    h1 {
      font-size: 1.3rem;
      content: 'hola';
    }
  }
`