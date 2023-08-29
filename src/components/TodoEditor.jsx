import React, { useRef, useState } from 'react';
import './TodoEditor.css';

function TodoEditor({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef();
  const contentRef = useRef();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!title) {
      titleRef.current.focus();
      return;
    } else if (!content) {
      contentRef.current.focus();
      return;
    }
    onCreate(title, content);
    setTitle('');
    setContent('');
  };
  const onkeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  
  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className='editor_wrapper'>
        <input
          ref={titleRef}
          value={title}
          onChange={onChangeTitle}
          placeholder='new TodoTitle..'
        />
        <input
          ref={contentRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onkeydown}
          placeholder='new TodoContent..'
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;
