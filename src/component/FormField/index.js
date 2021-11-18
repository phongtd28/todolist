import React, { useState } from "react";
import { FormFieldWrapper } from "./style";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import Button from "../common/Button";
import { v4 } from "uuid";

const FormField = (props) => {
  const {
    onAddTodo,
    todo,
    setTodo,
    onchangeTodo,
    isDetail,
    setIsDetail,
    onUpdateTodo,
  } = props;

  const onCancelUpdate = () => {
    setIsDetail(false);
    setTodo({
      uuid: "",
      title: "",
      desc: "",
      dueDate: new Date(),
      priority: "low",
    });
  };
  return (
    <FormFieldWrapper>
      {isDetail ? (
        <h1 className="title">Update Task</h1>
      ) : (
        <h1 className="title">New Task</h1>
      )}
      <input
        required={true}
        name="title"
        type="text"
        value={todo.title}
        placeholder="Add new task"
        className="inputAddTask"
        onChange={(e) => onchangeTodo(e)}
      />
      <div className="desS">
        <label className="titleDescription titleField">Description</label>
        <textarea
          name="desc"
          value={todo.desc}
          className="areaAddTask"
          onChange={(e) => onchangeTodo(e)}
        />
      </div>
      <div className="groupField">
        <div className="groupFieldLeft">
          <label className="titleDate titleField">Due Date</label>
          <Flatpickr
            name="dueDate"
            className="fieldDate"
            value={todo.dueDate}
            options={{
              dateFormat: "d-m-Y",
              minDate: todo.dueDate,
            }}
            onChange={([date]) =>
              setTodo({
                ...todo,
                dueDate: date,
              })
            }
          />
        </div>
        <div className="groupFieldRight">
          <label className="titlePriority titleField">Priority</label>
          <select
            name="priority"
            value={todo.priority}
            className="fieldPriority"
            onChange={(e) => onchangeTodo(e)}
          >
            <option value="low">low</option>
            <option value="normal">normal</option>
            <option value="high">high</option>
          </select>
        </div>
      </div>

      {isDetail ? (
        <>
          <Button
            style={{ marginBottom: "10px" }}
            type="update"
            children="update"
            disabled={!todo.title}
            onClick={() => onUpdateTodo(todo)}
          />
          <Button
            style={{ backgroundColor: "red" }}
            type="update"
            children="cancel"
            disabled={!todo.title}
            onClick={onCancelUpdate}
          />
        </>
      ) : (
        <Button
          type="add"
          children="add"
          disabled={!todo.title}
          onClick={() => onAddTodo({ ...todo, uuid: v4() })}
        />
      )}
    </FormFieldWrapper>
  );
};

export default FormField;
