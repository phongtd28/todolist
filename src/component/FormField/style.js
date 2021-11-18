import styled from "styled-components";

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 500px;
  margin: 0 auto;
  h1 {
    margin: 50px auto;
    font-size: 28;
  }
  .inputAddTask {
    width: 500px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 1px 1px 8px 1px #888888;
  }
  .titleField {
    margin: 10px 0;
    font-weight: bold;
  }
  .desS {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    .areaAddTask {
      width: 500px;
      padding: 8px 16px 100px 16px;
      border: none;
      border-radius: 4px;
      outline: none;
      box-shadow: 1px 1px 8px 1px #888888;
    }
  }
  .groupField {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 500px;
    margin-top: 15px;
    margin-bottom: 40px;

    .groupFieldLeft {
      display: flex;
      flex-direction: column;
      /* margin-left: -16px; */
      .fieldDate {
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        box-shadow: 1px 1px 8px 1px #888888;
      }
    }
    .groupFieldRight {
      display: flex;
      flex-direction: column;
      /* margin-right: -16px; */
      .fieldPriority {
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        box-shadow: 1px 1px 8px 1px #888888;
      }
    }
  }
`;
