import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  background-color: #fff;
  margin: .5em auto;
  border: 1px solid #999999;
  padding: 1.2em;

  ${({ card }) => card && css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `} 
`;