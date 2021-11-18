import styled from "styled-components";

const renderBackgroundColor = (props) => {
  switch (props.type) {
    case "detail":
      return "#01DFD7";
    case "remove":
      return "red";
    case "done":
      return "blue";
    case "update":
    case "add":
      return "green";
    default:
      return "yellow";
  }
};

const renderDisplay = (props) => {
  switch (props.type) {
    case "detail":
    case "remove":
    case "done":
      return "inline-block";
    case "update":
    case "add":
      return "block";
    default:
      return "inline-block";
  }
};
const renderWidth = (props) => {
  switch (props.type) {
    case "add":
    case "update":
      return "100%";
    case "remove":
    case "done":
    case "detail":
      return "auto";
    default:
      return "auto";
  }
};
export const ButtonWrapper = styled.button`
  display: ${(props) => renderDisplay};
  background-color: ${(props) => renderBackgroundColor};
  width: ${(props) => renderWidth};
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  margin-left: 5px;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    height: 100%;
    width: 0;
    border-radius: 3px;
    background-color: darkseagreen;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 0.25s linear;
  }
  &:hover:before {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
  /* position: absolute; */
  &:disabled {
    cursor: not-allowed;
    background-color: darkgray;
  }
`;
