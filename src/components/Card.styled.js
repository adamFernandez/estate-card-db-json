import styled, { keyframes }from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledCard = styled.div`
  
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  .status {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    clip-path: polygon(20% 0, 41% 0, 0 40%, 0 20%);
    height: 150%;
    width: 50%;
    background-color: purple;
    color: white;
    &:: {
      color: red;
    }
    animation: ${rotate} 2s linear;
  }
  
  .image {
    width: 90%;

    img {
      width: 100%;
    }
  }
  .title {
    font-size: 1.2em;
  }

  .price {
    color: purple;
    font-size: 1.8em;
    margin: 0;
    padding: 0;
  }

  .rooms {
    display: flex;
    margin: .5em 0;
    
    div:nth-child(n+2){
      margin-left: .8em;
    }
  }

  .description {
    font-size: .9em;
  }

  .address {
    font-size: .8em;
  }

`