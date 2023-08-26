import React from 'react';
import './TodoItem.css';

function TodoItem({
  id,
  title,
  content,
  createdDate,
  onComplete,
  onDeleteTodo,
}) {
  const onChangeCompleteButton = () => {
    onComplete(id, title, content, createdDate);
  };
  const onClcikDelete = () => {
    onDeleteTodo(id);
  };
  return (
    <div className='TodoItem'>
      <div className='title_col'>{title}</div>
      <div className='content_col'>{content}</div>
      <div className='date_col'>
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={onClcikDelete}>삭제</button>
        <button onClick={onChangeCompleteButton}>완료</button>
      </div>
    </div>
  );
}

export default TodoItem;
