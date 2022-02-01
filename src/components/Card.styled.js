import styled from "styled-components";

export const StyledCard = styled.div`
  
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
  margin: 0;
  padding: .2em 0;
  
  
  .image {
    width: 90%;

    img {
      width: 100%;
    }
  }
  .title {
    /* font-size: 1.2rem; */
  }

  .price {
    color: purple;
    /* font-size: 1.8em; */
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
    /* font-size: .9em; */
  }

  .address {
    /* font-size: .8em; */
  }

  

`