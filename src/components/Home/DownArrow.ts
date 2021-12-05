import styled from "styled-components";
import { breackpoints } from "../../styles/breackpoints";

export const DownArrow = styled.a`
  position: absolute;
  bottom: 2vw;
  left: 50%;
  cursor: pointer;
  padding: 0.4rem;
  width: 3rem;
  height: 3rem;
  color: #7a7a7a;
  border: none;
  background-color: transparent;
  &:hover {
    color: #afafafaf;
  }
  -webkit-animation: bounce 1.75s infinite;
  animation: bounce 1.75s infinite;
  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    to {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-7px);
    }
    60% {
      transform: translateY(-3.5px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    to {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-7px);
    }
    60% {
      transform: translateY(-3.5px);
    }
  }
  @media screen and (max-width: ${breackpoints.laptop}) {
    display: none;
  }
`