import styled from "styled-components";
import { colorDark } from "../../styles/theme";

export const ProjectContainer = styled.section`
  margin: 2rem 0;
  min-height: 100vh;
  margin: 0 -1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .infinite-scroll-component {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
    a {
      color: inherit;
      text-decoration: none;
      transition: transform 500ms;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 1rem;
  }
`
export const CardItemProject = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 100%;
  border-top: 1px solid #a1a1a138;
  border-bottom: 1px solid #a1a1a138;
  padding: 1rem 0;
  position: relative;
  height: 100%;
  .card-project__img {
    position: relative;
    border: 1px solid transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    span {
      max-width: 480px;
      height: 100%;
      width: 100%;
      min-height: 260px;
      max-height: 480px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    width: 100%;
    /* height: 70vh; */
    .card-project__img {
      width: 100%;
      span {
        width: 100%;
        border-radius: 1rem;
        /* box-shadow: 0 20px 25px -5px rgb(0 0 0/0.1),
          0 8px 10px -6px rgb(0 0 0/0.1); */
        box-shadow: 0 0px 10px 3px rgb(0 0 0 / 11%),
          0 0px 20px -50px rgb(0 0 0 / 11%);
      }
    }
  }
`

export const CardDescription = styled.div`
  position: relative;
  padding: 0 1rem;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }
  article {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    p {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      span img {
        border-radius: 50%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    place-content: center;
    place-items: center;
    margin: 0 0 0 2rem;
    width: 60%;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: 0 5px 8px 5px rgb(0 0 0 / 8%);
    p {
      padding: 0.7rem 1.5rem;
    }
  }
`

export const Footer = styled.footer`
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 0.8rem;
    opacity: 80%;
    padding: 0 0.5rem 0.5rem;
    li {
      font-size: 0.8rem;
      font-weight: bold;
      list-style: none;
      padding: 0.1rem 0.5rem;
      border-radius: 0.8rem;
    }
  }
  @media screen and (min-width: 768px) {
    ul {
      padding: 1rem 0;
      flex-wrap: wrap;
      li {
        padding: 0.1rem 0.5rem;
      }
    }
  }
`