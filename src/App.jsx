import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../src/App.css';

const App = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [editUserId, setEditUserId] = useState(null);

  function handlesave(e) {
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      id: editUserId || Date.now()
    };

    if (editUserId) {
      dispatch({ type: 'EDIT', payload: { id: editUserId, data: user } });
    } else {
      dispatch({ type: 'ADD', payload: user });
    }

    nameRef.current.value = '';
    ageRef.current.value = '';
    setEditUserId(null);
  }

  function handleremove(id) {
    let isdelete = confirm('Siz ma\'lumotni rostdan ham o\'chirmoqchimisiz?');
    if (isdelete) {
      dispatch({ type: 'REMOVE', payload: id });
    }
  }

  function handleEdit(user) {
    nameRef.current.value = user.name;
    ageRef.current.value = user.age;
    setEditUserId(user.id);
  }

  return (
    <div className='conta'>
      <div className='center'>
        <form onSubmit={handlesave} className='forma'>
          <br />
          <input ref={nameRef} type="text" placeholder='Enter name' />
          <br /><br />
          <input ref={ageRef} type="number" placeholder='Enter age' />
          <br /><br />
          <button>Save</button>
        </form>
        <div className="wrapper">
          {
            users.users.length && users.users.map((user) => {
              return (
                <div key={user.id} className='divport'>
                  <h1>Name: {user.name}</h1>
                  <h1>Age: {user.age}</h1>
                  <div className="bt">
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleremove(user.id)}>Delete</button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
