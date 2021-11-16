import styled from "styled-components";
import { breackpoints } from "../../styles/breackpoints";

export const HomeContainer = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  width: 50%;
  min-height: 90vh;
  margin: auto;
  figure {
    margin-bottom: 2rem;
  }
  span {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  h1 {
    text-align: center;
    font-size: 1rem;
    max-width: 400px;
    font-weight: 500;
    line-height: 1.7rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 1rem 0 1rem;
    li {
      display: inline-block;
      list-style: none;
      margin-right: 1rem;
      margin-bottom: .8rem;
      border: 2px solid #ccc;
      border-radius: .8rem;
      padding: .4rem .5rem;
    }
  }

  @media screen and (max-width: ${breackpoints.mobile}) {
    width: 100%;
  }
`