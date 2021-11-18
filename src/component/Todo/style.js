import styled from "styled-components";

export const TodoWrapper = styled.div`
  position: relative;
  z-index: 1;
  .todo {
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 8px 1px #888888;
    span {
      margin-left: 40px;
      min-width: 750px;
    }
    .isCheck {
      margin-left: 10px;
    }
  }
  .isShowCheck {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px 16px 0px 16px;
    width: 160px;
    height: 40px;
    position: absolute;
    top: 30px;
    left: 34px;
    button {
      font-size: small;
      padding: 3px 6px;
    }
    /* z-index: 5; */
  }
`;
