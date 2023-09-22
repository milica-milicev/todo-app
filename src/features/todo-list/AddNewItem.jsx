import { useDispatch } from 'react-redux';
import { addItem, updateItem } from './todoSlice';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { toast } from 'react-hot-toast';

function AddNewItem({ itemToEdit = {}, onCloseModal }) {
  const dispatch = useDispatch();
  const { id, ...editValues } = itemToEdit;
  const isEditSession = Boolean(id);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function onError(errors) {
    console.log(errors);
  }

  const dateFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const formattedDate = new Date().toLocaleString('en-US', dateFormatOptions);

  function onSubmit(data) {
    if (isEditSession) {
      const item = {
        ...data,
        date: itemToEdit.date,
        id: itemToEdit.id,
      };
      dispatch(updateItem(item));
      toast.success('Task is successfully updated');
    } else {
      const item = {
        ...data,
        date: formattedDate,
        id: Math.floor(Math.random() * Date.now()).toString(16),
      };
      dispatch(addItem(item));
      toast.success('Task is successfully added');
    }
    reset();
    onCloseModal?.();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h3 className="mb-5 text-xl font-bold text-gray-700">
        {isEditSession ? 'Edit task' : 'Add new TODO task'}
      </h3>
      <div className="mb-5">
        <div className="mb-3">
          <label className="mb-1 block text-sm text-gray-600" htmlFor="title">
            Title
          </label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            id="title"
            name="title"
            type="text"
            {...register('title', {
              required: 'Please enter the title',
            })}
          />
          {errors?.title?.message && (
            <p className="mt-1 text-sm text-red-400">
              {errors?.title?.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="mb-1 block text-sm text-gray-600" htmlFor="status">
            Status
          </label>
          <select
            name="status"
            {...register('status')}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option>Completed</option>
            <option>Incomplete</option>
          </select>
        </div>
      </div>
      <Button type="small">{isEditSession ? 'Edit task' : 'Add task'}</Button>
    </form>
  );
}

export default AddNewItem;
