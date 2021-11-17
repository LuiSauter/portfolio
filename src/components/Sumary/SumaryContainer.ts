import styled from 'styled-components'

export const SumaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;
  article {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 1rem;
    min-height: 0vh;
    h3 {
      font-size: 1rem;
      font-weight: 500;
    }
    svg {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`