import React from 'react';
import './DoneItem.css';

function DoneItem({
  id,
  title,
  content,
  createdDate,
  onCancel,
  onDeleteDone,
}) {
  const onClickCancel = () => {
    onCancel(id, title, content, createdDate);
  };
  const onClcikDelete = () => {
    onDeleteDone(id);
  };

  return (
    <div className='DoneItem'>
      <div className='title_col'>{title}</div>
      <div className='content_col'>{content}</div>
      <div className='date_col'>
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={onClcikDelete}>삭제</button>
        <button onClick={onClickCancel}>취소</button>
      </div>
    </div>
  );
}

export default DoneItem;
