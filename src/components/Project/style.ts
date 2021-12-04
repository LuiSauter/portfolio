import styled from "styled-components";

export const ProjectContainer = styled.section`
  margin-top: 2rem;
  overflow-y: hidden;
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    width: 100%;
    gap: 2rem;
  }
`

export const CardItemProject = styled.article`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.4rem;
  figure {
    position: relative;
    margin: 0;
    background-color: #1f2028d9;
    border-radius: 0.9rem;
    width: 100%;
    overflow: hidden;
    height: 100%;
    span {
      height: 100%;
      overflow-y: hidden;
      img {
        border-radius: 0.9rem;
        width: 100%;
        height: 100%;
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
    height: 100%;
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
    gap: 0.4rem;
    li {
      font-size: 0.9rem;
      list-style: none;
      background-color: transparent;
      border-radius: 2rem;
      text-align: center;
      padding: 0.1rem 0.7rem;
    }
  }
`