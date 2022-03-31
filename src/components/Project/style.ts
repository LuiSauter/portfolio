import styled from "styled-components";
import { colorDark } from "../../styles/theme";

export const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  .card-item {
    padding: 1.2rem;
    border: 1px solid #30363d;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: scale(1.005);
      border: 1px solid #3f464f;
      transition: all 0.3s ease-out;
    }

    &__header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
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

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  /* display: flex;
  flex-direction: column;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: visible;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0rem;
  left: 0;
  right: 0;
  user-select: text;
  .card-item {
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    overflow: auto;
    height: 100vh;
    width: 100%;
    &__img {
      height: 100%;
      width: 100%;
      overflow: hidden;
      object-fit: cover;
      position: absolute;
      z-index: 0;
      filter: blur(0.5px);
    }

    .card-item-info {
      padding: 1rem 1rem;
      position: relative;
      border-radius: 2rem;
      width: 90%;
      margin: 0 auto;
      height: min-content;
      display: flex;
      align-items: start;
      background-color: #0005;
      backdrop-filter: blur(6px);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 999999;
      color: #fff;
      &__header {
        z-index: 1;
        color: #fff;
        text-decoration: none;
        font-size: 1.3rem;
        &:hover {
          text-decoration: underline;
        }
      }
      &__technologies {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        li {
          list-style: none;
          background-color: transparent;
          border: none;
          color: #fff;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          svg {
            width: 1.8rem;
          }
        }
      }
      &__author {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #fff;
        text-decoration: none;
        span {
          font-size: 1.5rem;
          padding-bottom: 0.3rem;
        }
        img {
          border-radius: 100%;
          height: 40px;
        }
      }
      &__description {
        font-size: 1.5rem;
      }
    }
    @media screen and (min-width: 560px) {
      .card-item-info {
        padding: 2rem 2rem;
        width: 50vw;
        height: 50vh;
        margin-left: auto;
        margin-right: 2rem;
      }
    }
  }
   */
`