import React, { useContext, useEffect, useState } from "react";
import TodoContext from "./context/todoContext";
import Header from "./components/header/header.component";
import TodoForm from "./containers/todoForm/todoForm.container";
import TodoList from "./containers/todoList/todoList.container";
import { ThemeProvider } from "styled-components";
import { templateTheme } from "./utils/theme";
import { ContentContainer, ImageContainer } from "./styled/main";

function App() {
  const {
    theme,
    todos,
    filterActiveItemsInTodoList,
    filterCompleteItemsInTodoList,
    filter,
  } = useContext(TodoContext);

  const [list, setList] = useState(todos);

  useEffect(() => {
    if (filter === "Active") {
      const activeList = filterActiveItemsInTodoList();
      setList(activeList);
    } else if (filter === "Completed") {
      const competeList = filterCompleteItemsInTodoList();
      setList(competeList);
    } else if (filter === "All") {
      setList(todos);
    }
  }, [
    todos,
    filter,
    filterActiveItemsInTodoList,
    filterCompleteItemsInTodoList,
  ]);

  return (
    <ThemeProvider theme={templateTheme.theme[theme]}>
      <ImageContainer>
        <ContentContainer>
          <Header />
          <main>
            <TodoForm />
            <TodoList list={list} />
          </main>
        </ContentContainer>
      </ImageContainer>
    </ThemeProvider>
  );
}

export default App;
