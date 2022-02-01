import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90%;
  background-color: #fff;
  margin: .5em auto;
  border: 1px solid #999999;
  padding: 1.2em;
  overflow: hidden;
  
  .status {
    margin: 0;
    display: flex;
    justify-content: end;
    align-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 50%;
    color: white;
    
    .banner {
      position: static;
      font-size: 2vw;
      display: grid;
      align-items: center;
      justify-content: center;
      margin-right: -7%;
      width: 40%;
      height: 20%;
      background-color: #02641e;
      transform: rotate(45deg) translate(2%, -10%);
      
    }
  }

  .expired {
    background-color: #c40606 !important;
  }

  .message {
    color: #999999;
    font-size: 1.7vw;
  }

  ${({ card }) => card && css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `} 
`;