import { useState, useRef } from 'react';
import './App.css';
import DoneList from './components/DoneList';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

// const mockTodo = [
//   {
//     id: 0,
//     title: 'React입문 공부',
//     content: 'React입문 공부하기',
//     isDone: false,
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     title: 'React심화 공부',
//     content: 'React심화 공부하기',
//     isDone: false,
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     title: 'React숙련 공부',
//     content: 'React숙련 공부하기',
//     isDone: false,
//     createdDate: new Date().getTime(),
//   },
// ];

// const doneTodo = [
//   {
//     id: 200,
//     title: 'JavaScript 공부',
//     content: 'JavaScript심화 공부하기',
//     isDone: false,
//     createdDate: new Date().getTime(),
//   },
// ];

function App() {
  let idRef = useRef(3);
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  function onCreate(title, content) {
    const newItem = {
      id: idRef.current,
      title,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current++;
  }

  const onComplete = (
    targetId,
    targetTitle,
    targetContent,
    targetCreatedDate
  ) => {
    setTodo(todo.filter((it) => it.id !== targetId));
    setDone([
      {
        id: targetId,
        title: targetTitle,
        content: targetContent,
        createdDate: targetCreatedDate,
      },
      ...done,
    ]);
  };

  const onCancel = (
    targetId,
    targetTitle,
    targetContent,
    targetCreatedDate
  ) => {
    setDone(done.filter((it) => it.id !== targetId));
    setTodo([
      {
        id: targetId,
        title: targetTitle,
        content: targetContent,
        createdDate: targetCreatedDate,
      },
      ...todo,
    ]);
  };

  const onDeleteTodo = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  const onDeleteDone = (targetId) => {
    setDone(done.filter((it) => it.id !== targetId));
  };
  return (
    <div className='App'>
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList
        todo={todo}
        onComplete={onComplete}
        onDeleteTodo={onDeleteTodo}
      ></TodoList>
      <DoneList
        done={done}
        onCancel={onCancel}
        onDeleteDone={onDeleteDone}
      ></DoneList>
    </div>
  );
}

export default App;
