import styled from "styled-components";

export const SkillsStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  width: 100%;
  gap: 1rem;
  li {
    list-style: none;
    font-size: 0.9rem;
    font-weight: 900;
    border-radius: 1rem;
    padding: 0.4rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      width: 100%;
      height: 80px;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      margin: auto;
    }
  }
`