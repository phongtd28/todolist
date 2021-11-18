import React, { useState, useEffect } from "react";
import Todo from "../Todo";
import { ListTodoWrapper } from "./style";

const ListTodo = (props) => {
  const { todos, onDeleteTodo, onDetailTodo, onChangeSearch, onIsDoneTodo } =
    props;
  const [sortBy, setSortBy] = useState("nearDeadline");
  const [listTodoSort, setListTodoSort] = useState(todos);
  useEffect(() => {
    if (sortBy === "nearDeadline") {
      const todosSortNearDeadline = todos.sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );
      setListTodoSort(todosSortNearDeadline);
    } else if (sortBy === "farDeadline") {
      const todosSortFarDeadline = todos.sort(
        (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
      );
      setListTodoSort(todosSortFarDeadline);
    } else {
      setListTodoSort(todos);
    }
  }, [sortBy]);

  return (
    <ListTodoWrapper>
      <div className="groupHeader">
        <h2>List task</h2>
        <div>
          <label style={{ fontSize: "small" }}>Sorted by: </label>
          <select
            value={sortBy}
            // defaultValue={sortBy}
            className="selectSortDate"
            onChange={(e) => setSortBy(e.target.value)}
          >
            {/* <option>Choose</option> */}
            <option value="nearDeadline">__Date__Near__Deadline__</option>
            <option value="farDeadline">__Date__Far__Deadline__</option>
          </select>
        </div>

        <input
          onChange={onChangeSearch}
          type="text"
          placeholder="Search task..."
          className="searchInput"
        />
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            onIsDoneTodo={onIsDoneTodo}
            onDeleteTodo={onDeleteTodo}
            onDetailTodo={onDetailTodo}
          />
        ))}
      </div>
    </ListTodoWrapper>
  );
};

export default ListTodo;
