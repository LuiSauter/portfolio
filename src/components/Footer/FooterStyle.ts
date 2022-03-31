import styled from 'styled-components'

export const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 0.8rem 0.5rem;
  z-index: 0;
  .icons {
    display: flex;
    flex-wrap: wrap;
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
      white-space: nowrap;
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
  .profile-view {
    border-radius: 0.4rem;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 390px) {
    padding: 1.8rem 0.5rem;
    .profile-view {
      margin-top: 0;
    }
  }
`
