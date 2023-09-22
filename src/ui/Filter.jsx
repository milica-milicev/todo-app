import { useDispatch } from 'react-redux';
import Button from './Button';
import { updateFilterStatus } from '../features/todo-list/todoSlice';
import { useState } from 'react';

function Filter({ options }) {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('All');

  function handleClick(value) {
    dispatch(updateFilterStatus(value));
    setActiveFilter(value);
  }

  return (
    <div>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleClick(option.value)}
          type="secondary"
          className={`${
            option.value === activeFilter
              ? 'pointer-events-none !bg-purple-600'
              : ''
          }`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
