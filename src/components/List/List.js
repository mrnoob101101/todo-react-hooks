import { ButtonForAdd, Input } from "../Input/Input";
import { ButtonDeleteChecked, SortButton } from "../Sorting/SortingBlock";
import { ListWrapper, MainBlock } from "./List.styles";
import { TaskContainer } from "../Task/StyledNewTask.styles";
import { useState } from "react";
import { NewTask } from "../Task/NewTask";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { SortingDiv } from "../Sorting/SortingBlock.styles";

export const List = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Помыть жопу",
      isCompleted: false,
      date: dayjs().format("DD/MM/YYYY,HH:mm"),
      isSortedByAlphabet: false,
    },
  ]);

  const addTodo = (text) => {
    const id = nanoid();
    const isCompleted = false;
    const date = dayjs().format("DD/MM/YYYY, HH:mm ");
    const isSortedByAlphabet = false;
    const oneMoreTask = { id, text, isCompleted, date, isSortedByAlphabet };
    setTasks((previousTasks) => [...previousTasks, oneMoreTask]);
  };

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };

  const addTodoByButton = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  const handleChangeInputValue = (e) => setValue(e.target.value);

  const deleteTask = (idOfDeletedTask) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== idOfDeletedTask)
    );
  };

  const completeTask = (idOfCompletedTask) => {
    setTasks((previousTasks) => {
      return previousTasks.map((item) =>
        item.id !== idOfCompletedTask
          ? item
          : { ...item, isCompleted: !item.isCompleted }
      );
    });
  };

  const sortByAlphabet = () => {
    setTasks((tasks) => {
      tasks.sort((a, b) => a.text.localeCompare(b.text));
      return tasks.map((item) => ({ ...item, isSortedByAlphabet: true }));
    });
  };

  const deleteChecked = () => {
    setTasks((tasks) => {
      return tasks.filter((item) => item.isCompleted === false);
    });
  };

  return (
    <MainBlock>
      <ListWrapper>
        <Input
          value={value}
          handleSubmit={handleSubmit}
          handleChangeInputValue={handleChangeInputValue}
        />
        <ButtonForAdd addTodoByButton={addTodoByButton} />

        <TaskContainer>
          {tasks.map((item) => (
            <NewTask
              task={item}
              key={item.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              isCompleted={item.isCompleted}
              date={item.date}
            />
          ))}
        </TaskContainer>
        <SortingDiv>
          <SortButton sortByAlphabet={sortByAlphabet} />
          <ButtonDeleteChecked deleteChecked={deleteChecked} />
        </SortingDiv>
      </ListWrapper>
    </MainBlock>
  );
};
