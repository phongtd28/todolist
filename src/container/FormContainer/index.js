import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTodosApi } from "../../api/todoApi";
import FormField from "../../component/FormField";
import ListTodo from "../../component/ListTodo";
import { addTodos, deleteTodos, fetchTodos, updateTodos } from "./action";
import Loading from "../../component/common/Loading";

import { FormContainerWrapper } from "./style";

const FormContainer = (props) => {
  const {
    handlefetchTodos,
    handleaddTodo,
    handledeleteTodo,
    handleupdateTodo,
    todos,
    loading,
  } = props;

  const [todo, setTodo] = useState({
    isDone: false,
    title: "",
    desc: "",
    dueDate: new Date(),
    priority: "low",
  });
  const [isDetail, setIsDetail] = useState(false);
  const [keySearch, setKeySearch] = useState("");
  const [listSearch, setListSearch] = useState([]);

  useEffect(async () => {
    await handlefetchTodos();
  }, []);

  const onchangeTodo = (e) => {
    const value = e.target.value;
    setTodo({
      ...todo,
      [e.target.name]: value,
    });
  };

  const clearTodo = () => {
    setTodo({
      isDone: false,
      title: "",
      desc: "",
      dueDate: new Date(),
      priority: "low",
    });
  };
  const onAddTodo = async (newTodo) => {
    handleaddTodo(newTodo);
    clearTodo();
  };
  const onDeleteTodo = (id) => {
    handledeleteTodo(id);
  };
  const onDetailTodo = (todo) => {
    setTodo(todo);
    setIsDetail(true);
  };
  const onUpdateTodo = (todo) => {
    handleupdateTodo(todo);
    clearTodo();
    setIsDetail(false);
  };

  const onChangeSearch = (e) => {
    setKeySearch(e.target.value);
  };
  useEffect(() => {
    const listSearch = [...todos].filter((todo) => {
      return todo.title.toLowerCase().includes(keySearch.toLowerCase());
    });
    setListSearch(listSearch);
  }, [keySearch]);

  const onIsDoneTodo = (todo) => {
    handleupdateTodo(todo);
  };
  return (
    <FormContainerWrapper>
      {loading ? <Loading /> : ""}
      <FormField
        todo={todo}
        setTodo={setTodo}
        isDetail={isDetail}
        setIsDetail={setIsDetail}
        onchangeTodo={onchangeTodo}
        onAddTodo={onAddTodo}
        onUpdateTodo={onUpdateTodo}
      />
      <ListTodo
        todos={keySearch ? listSearch : todos}
        onIsDoneTodo={onIsDoneTodo}
        onDeleteTodo={onDeleteTodo}
        onDetailTodo={onDetailTodo}
        onChangeSearch={onChangeSearch}
        // onChangeSort={onChangeSort}
      />
    </FormContainerWrapper>
  );
};

const mapState = (state) => {
  return {
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading,
  };
};
const mapDispatch = (dispatch) => {
  return {
    handlefetchTodos: () => dispatch(fetchTodos()),
    handleaddTodo: (todo) => dispatch(addTodos(todo)),
    handledeleteTodo: (id) => dispatch(deleteTodos(id)),
    handleupdateTodo: (newTodo) => dispatch(updateTodos(newTodo)),
  };
};
export default connect(mapState, mapDispatch)(FormContainer);
