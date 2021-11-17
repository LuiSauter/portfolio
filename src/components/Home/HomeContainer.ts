import styled from "styled-components";
import { breackpoints } from "../../styles/breackpoints";
export const HomeContainer = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  width: 80%;
  min-height: 70vh;
  margin: auto;
  article {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    .home-art {
      grid-row: 1 / span 1;
    }
    .home-head {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        text-align: center;
        font-size: 1rem;
        max-width: 400px;
        font-weight: 500;
        line-height: 1.7rem;
      }
      button {
        font-weight: 600;
        font-size: 1rem;
        border: none;
        outline: none;
        padding: 0.75rem 2rem;
        margin-top: 1rem;
        border-radius: 2rem;
      }
      svg {
        width: 26px;
        height: 26px;
        margin: 1rem 0.8rem 0 0.8rem;
        cursor: pointer;
      }
    }
    .home-art {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      figure {
        user-select: none;
        display: flex;
        border-radius: 50%;
        margin-bottom: 1rem;
        padding: 0.5rem;
        img {
          border-radius: 50%;
        }
      }
      span {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0rem 1rem 0 1rem;
    li {
      display: inline-block;
      list-style: none;
      font-size: 0.9rem;
      font-weight: 600;
      margin-right: 1rem;
      margin-bottom: 0.8rem;
      border-radius: 1rem;
      padding: 0.4rem 0.5rem;
    }
  }
  @media screen and (min-width: ${breackpoints.laptop}) {
    width: 80%;
    article {
      grid-template-columns: 1fr 1fr;
      .home-art {
        grid-column: 2 / span 1;
      }
    }
  }

  @media screen and (max-width: ${breackpoints.mobile}) {
    width: 100%;
    margin: auto;
    ul {
      width: 100%;
    }
  }
`