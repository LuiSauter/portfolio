import styled from 'styled-components'

export const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 2rem;
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.3rem;
    svg {
      width: 20px;
      height: 20px;
    }
    .love {
      transition: transform 0.5s;
      transform: color 0.9s;
      margin-right: 10px;
      display: flex;
      &:hover {
        transform: scale(1.1);
        filter: contrast(100px);
      }
    }
    & p {
      font-size: 1.2rem;
      font-weight: 400;
      margin: 0 10px;
    }
    a {
      display: flex;
      flex-direction: row;
      margin: 0 10px;
      &:hover {
        color: #00adb5;
      }
    }
  }
`
