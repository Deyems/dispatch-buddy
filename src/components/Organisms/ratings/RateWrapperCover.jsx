import styled from "styled-components";

const RateWrapperCover = styled.div`
${(props)=>console.log(props.display)}

display: ${(props) => props.display || "block"};
    
    position: absolute;
    padding: 3rem;
    top: 80px;
    background: skyblue;
    left: 10px;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;

  margin-top: 4.4rem;
  width: 100vw;
  height: 70vh;
//   padding: 4.4rem 13.2% 6.2rem;
  .rating_style_wrapper{
    border: 1px solid green;
    width: 70%;
    height: 70vh;
  }
  

`
export default RateWrapperCover;