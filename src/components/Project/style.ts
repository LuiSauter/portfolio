import styled from "styled-components";
import { colorDark } from "../../styles/theme";

export const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0 1rem;
  .card-item {
    padding: 1.2rem;
    border: 1px solid #30363d;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &:hover {
      transform: scale(1.005);
      border: 1px solid #3f464f;
      transition: all 0.3s ease-out;
    }

    &__header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      span {
        width: 1.2rem;
        display: flex;
        svg {
          height: 100%;
        }
      }
      h2 {
        font-size: 1rem;
        color: ${colorDark.colorTextThird};
      }
      .visibility {
        border: 1px solid #3f464f;
        width: max-content;
        padding: 0rem 0.4rem 0.2rem 0.4rem;
        border-radius: 0.8rem;
        font-size: 0.8rem;
      }
    }

    &__description {
      margin-top: 0.7rem;
      font-size: 0.8rem;
      height: 38px;
      opacity: 0.8;
    }

    &__tags {
      margin-top: 0.7rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.8rem;
      li {
        display: flex;
        list-style: none;
        align-items: center;
        height: 1rem;
        background-color: transparent;
        border: none;
        opacity: 0.8;
        .dot {
          font-size: 1rem;
          transform: scale(2.4) translateY(-4%);
          padding: 0 0.4rem 0 0.3rem;
        }
      }
    }
  }

  .current-streak {
    border: 1px solid #30363d;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    width: 100%;
    /* transform: scale(1.02) */
  }

  @media screen and (min-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr 1fr;
  }
`