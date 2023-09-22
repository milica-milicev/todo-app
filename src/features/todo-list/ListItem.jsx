import { useEffect, useState } from 'react';
import ListOperations from './ListOperations';
import { useDispatch } from 'react-redux';
import { updateItem } from './todoSlice';
import { toast } from 'react-hot-toast';

function ListItem({ item }) {
  const { title, status, date, id } = item;

  const dispatch = useDispatch();

  let currentChecked = status === 'Completed' ? true : false;

  const [isChecked, setIsChecked] = useState(currentChecked);

  useEffect(() => {
    setIsChecked(currentChecked);
  }, [currentChecked]);

  function handleChecked() {
    currentChecked = !currentChecked;

    const updatedItem = {
      ...item,
      status: currentChecked ? 'Completed' : 'Incomplete',
    };

    dispatch(updateItem(updatedItem));

    toast.success(
      `Task status is successfully updated to ${updatedItem.status}`,
    );
  }
  return (
    <li className="mb-4 flex items-center justify-between rounded-lg bg-white p-2 md:p-4">
      <div className="flex items-start gap-3 pr-3">
        <input
          type="checkbox"
          id={id}
          name="status"
          checked={isChecked}
          onChange={handleChecked}
          className="h-5 w-5 cursor-pointer rounded-md bg-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
        />
        <div>
          <label
            htmlFor={id}
            className={`mb-2 block cursor-pointer font-medium leading-[1] ${
              isChecked === true ? 'line-through' : ''
            }`}
          >
            {title}
          </label>
          <span className="block text-sm text-gray-500">{date}</span>
        </div>
      </div>

      <ListOperations item={item} />
    </li>
  );
}

export default ListItem;
