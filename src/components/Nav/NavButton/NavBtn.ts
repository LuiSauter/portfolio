import styled from 'styled-components';
import { breackpoints } from '../../../styles/breackpoints';

export const NavBtn = styled.div`
  a {
    border-bottom: 1rem;
    display: flex;
    align-items: center;
    span {
      width: 100%;
      border-radius: .5rem;
      padding: .2rem .5rem .4rem .5rem;
      font-weight: 500;
    }

    .btn-svg {
      display: none;
      padding: .2rem .2rem;
      border-radius: 50%;
      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
  @media screen and (max-width: ${breackpoints.mobile}) {
    span {
      display: none;
    }
    margin-left: 1rem;
    a .btn-svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`