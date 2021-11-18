import React, { useState } from "react";
import Button from "../common/Button";
import { TodoWrapper } from "./style";

const Todo = (props) => {
  const { todo, onDeleteTodo, onDetailTodo, onIsDoneTodo } = props;
  const [isCheck, setIsCheck] = useState(false);
  console.log(todo);
  return (
    <TodoWrapper
      style={
        todo.isDone
          ? { backgroundColor: "darkseagreen" }
          : { backgroundColor: "white" }
      }
      key={todo.id}
    >
      <div className="todo">
        <input
          className="isCheck"
          type="checkbox"
          checked={isCheck}
          onClick={() => setIsCheck(!isCheck)}
        />
        <span className="title">{todo.title}</span>
        <Button
          type="detail"
          children="detail"
          onClick={() => onDetailTodo(todo)}
        />
        <Button
          type="remove"
          children="remove"
          onClick={() => onDeleteTodo(todo.id)}
        />
      </div>
      {isCheck && (
        <div className="isShowCheck">
          {todo.isDone ? (
            <Button
              type="detail"
              children="unDone"
              onClick={() => {
                onIsDoneTodo({ ...todo, isDone: false });
                setIsCheck(false);
              }}
            />
          ) : (
            <Button
              type="detail"
              children="done"
              onClick={() => {
                onIsDoneTodo({ ...todo, isDone: true });
                setIsCheck(false);
              }}
            />
          )}
          <Button
            type="remove"
            children="remove"
            onClick={() => {
              onDeleteTodo(todo.id);
              setIsCheck(!isCheck);
            }}
          />
        </div>
      )}
    </TodoWrapper>
  );
};

export default Todo;
