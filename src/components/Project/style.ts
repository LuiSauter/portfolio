import styled from "styled-components";
import { colorDark } from "../../styles/theme";

export const ProjectContainer = styled.section`
  margin: 2rem 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    width: 100%;
    gap: 2rem;
    a {
      color: inherit;
      text-decoration: none;
      transition: transform 500ms;
      &:hover {
        transform: scale(1.01);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .infinite-scroll-component {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`
export const CardItemProject = styled.article`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  .card-project__img {
    position: relative;
    border-radius: 0.9rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-height: 200px;
    border: 1px solid transparent;
    span {
      overflow-y: hidden;
      span {
        background-color: red;
      }
      img {
        margin: auto;
        border-radius: 0.9rem;
        width: 100%;
        height: 100%;
        min-height: 300px;
        display: none;
      }
      transition: transform 1000ms;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    gap: 0.4rem;
    article p {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        border-radius: 50%;
      }
      span {
        display: block;
        margin-left: 0.4rem;
        font-size: 0.9rem;
      }
    }
  }
  ul {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.3rem;
    li {
      list-style: none;
      background-color: transparent;
      border-radius: 0.6rem;
      padding: 0rem 0.7rem 0.15rem;
      display: flex;
      span {
        text-align: center;
        font-size: 0.9rem;
        padding: 0;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    gap: 0.4rem;
    flex-direction: column;
  }
`