import styled from "styled-components";
export const ListTodoWrapper = styled.div`
  min-height: 500px;
  margin-top: 35px;
  .groupHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .selectSortDate {
      width: 230px;
      padding: 8px 16px;
      border: none;
      border-radius: 3px;
      outline: none;
      box-shadow: 1px 1px 3px 1px #888888;
    }
    .searchInput {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      outline: none;
      box-shadow: 1px 1px 8px 1px #888888;
      width: 150px;
      transition: 0.5s ease-out;
      &:focus {
        width: 300px;
      }
    }
  }
`;
