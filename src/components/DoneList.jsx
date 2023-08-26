import React, { useState } from 'react';
import './DoneList.css';
import DoneItem from './DoneItem';

function DoneList({ done, onCancel, onDeleteDone }) {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ''
      ? done
      : done.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <div className='DoneList'>
      <h4>Done List😎</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className='searchbar'
        placeholder='검색어를 입력하세요'
      />
      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          <DoneItem
            key={it.id}
            {...it}
            onCancel={onCancel}
            onDeleteDone={onDeleteDone}
          />
        ))}
      </div>
    </div>
  );
}

export default DoneList;
