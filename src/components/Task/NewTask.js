import {
  Date,
  ImgCheckBoxStyled,
  ImgDeleteStyled,
  StyledNewTask,
  Text,
} from "./StyledNewTask.styles";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

export const NewTask = ({
  task,
  deleteTask,
  completeTask,
  isCompleted,
  date,
}) => {
  return (
    <StyledNewTask>
      <ImgCheckBox completeTask={completeTask} task={task} />
      <ImgDelete deleteTask={deleteTask} task={task} />

      <Text isCompleted={isCompleted}>
        <EditText
          defaultValue={task.text}
          style={{
            fontSize: "26px",
            backgroundColor: "#FCFFF5",
            borderRadius: "7px",
            marginRight: "10px",
            skipHover: true,
          }}
        >
          {" "}
        </EditText>
      </Text>
      <Date>Created:{date}</Date>
    </StyledNewTask>
  );
};

export const ImgDelete = ({ task, deleteTask }) => {
  const taskId = task.id;
  return (
    <ImgDeleteStyled
      onClick={() => deleteTask(taskId)}
      src="trash-blue.svg"
      alt="trash"
    />
  );
};

export const ImgCheckBox = ({ task, completeTask }) => {
  const taskId = task.id;
  return (
    <ImgCheckBoxStyled
      onClick={() => completeTask(taskId)}
      src="checkbox1.svg"
      alt="checkbox"
    />
  );
};
