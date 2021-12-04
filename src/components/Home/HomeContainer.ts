import styled from "styled-components";
import { breackpoints } from "../../styles/breackpoints";
import { colorDark } from "../../styles/theme";
export const HomeContainer = styled.section`
  display: grid;
  justify-content: center;
  place-content: center;
  place-items: center;
  width: 80%;
  min-height: 100vh;
  margin: auto;
  article {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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
        margin-top: 1.5rem;
        border-radius: 2rem;
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
  h3 {
    margin: 1.5rem 0;
    font-weight: 500;
    font-size: 1.8rem;
  }
  .skills-sumary {
    display: grid;
    min-height: 90vh;
    width: 100%;
    h3 {
      margin: 1.5rem -1.5rem;
      a {
        color: inherit;
      }
      .clip {
        width: 1.4rem;
        color: inherit;
        opacity: 0;
      }
      &:hover {
        .clip {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (min-width: ${breackpoints.laptop}) {
    width: 70%;
    margin: -6rem auto 0 auto;
    article {
      min-height: 100vh;
      grid-template-columns: 1fr 1fr;
      .home-art {
        grid-column: 2 / span 1;
      }
    }
    .skills-sumary {
      min-height: 85vh;
    }
  }
  @media screen and (max-width: ${breackpoints.mobile}) {
    width: 100%;
    ul {
      width: 100%;
    }
    .skills-sumary {
      h3 {
        margin: 1.5rem 0;
      }
    }
  }
`