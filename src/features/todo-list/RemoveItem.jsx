import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './todoSlice';
import { toast } from 'react-hot-toast';

function RemoveItem({ itemToRemove = {}, onCloseModal }) {
  const dispatch = useDispatch();
  function removeItemHandle() {
    dispatch(removeItem(itemToRemove));
    toast.success('Task is successfully deleted');
  }
  return (
    <div>
      <h3 className="mb-5 max-w-[calc(100%-70px)] text-xl font-bold text-gray-700">
        Are you absolutely sure?
      </h3>
      <p className="mb-5 block text-sm text-gray-600 md:max-w-[calc(100%-70px)]">
        This action cannot be undone. This will permanently delete your task.
      </p>

      <div className="text-right">
        <Button type="small" onClick={removeItemHandle}>
          Continue
        </Button>
        <Button type="small" onClick={onCloseModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default RemoveItem;
