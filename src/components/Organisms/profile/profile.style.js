import styled from "styled-components";

export const ProfileStyle = styled.div`
  padding: 8rem 24rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    // border: 1px solid blue;
    width: 60%;
    box-shadow: 0 0 5px rgba(16, 24, 40, 0.05);
    padding: 0.6rem 0;
    border-radius: 8px;
  }
  .header_profile {
    h1 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      margin: 1rem auto;
      text-align: center;
      color: #21334f;
    }
  }
  .avatar_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid blue;
    box-shadow: 0px 0px 5px rgb(200, 200, 200);
    background: rgba(88, 10, 255, 0.05);
    padding: 2rem 1rem;
    text-align: center;
  }
  .list_action {
    .list_action_tree {
      text-decoration: none;
      list-style: none;
      // border: 1px solid yellow;

      li {
        padding: 1rem 0;
        cursor: pointer;
        a .edit-img-wrapper,
        div .edit-img-wrapper {
          width: 20px;
          /* height: 20px; */
          /* border: 1px solid red; */
          
        }
        a,
        div {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: rgba(33, 51, 79, 1);
        }
        a .edit-img-wrapper img,
        div .edit-img-wrapper img {
          /* height: 100%; */
          width: 100%;
        }
        span {
          margin-left: 1rem;
        }
        &:hover {
          background: rgba(88, 10, 255, 0.05);
        }
      }
    }
  }
`;