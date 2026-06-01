import { Board } from "./Board";
import { Done } from "./components/organism/Done";
import { DoneList } from "./components/molecule/DoneList";
import { Todo } from "./components/organism/Todo";
import { TodoList } from "./components/molecule/TodoList";
import { Header } from "./components/molecule/Header";
import { Actions } from "./components/molecule/Actions";
import ButtonCreate from "./components/atom/ButtonCreate";

const Tasks = {
    Board,
    Todo,
    Done,
    Header,
    TodoList,
    DoneList,
    Actions,
    ButtonCreate
};

export default Tasks;