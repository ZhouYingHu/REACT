import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleList = () => {
    setList([...list, name]);
    setName('');
  };
  const delList = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <div>
      <input onChange={handleName} value={name} /><button onClick={handleList}>添加</button>
      <ul>
        {
                    list.map((item, index) =>
                      <li key={item}>{item} <button onClick={() => delList(index)}>del</button></li>,

                    )
                }
      </ul>
    </div>
  );
}
