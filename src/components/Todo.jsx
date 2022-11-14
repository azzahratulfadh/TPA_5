import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import Data from './Data';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action/todoAction';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'

const Todo = (props) => {
  const [data, setData] = useState(false);
  const dispatch = useDispatch();
  const mountData = () => {
    setData(true);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between content-center mt-4 w-96 border-2 h-14 px-5">
          <div>
            <input type="checkbox" name="check" id="check" />
          </div>
          <div>
            <p>{props.todoName}</p>
          </div>
          <div>
            <button onClick={() => mountData()} className="mr-5">
              <Icon icon={edit2} />
            </button>
            <button onClick={() => dispatch(deleteTodo(props.i))}>
              <Icon icon={trash} />
            </button>
          </div>
        </div>
      </div>
      {data && <Data />}
    </>
  );
};

export default Todo;