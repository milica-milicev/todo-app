import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './todoSlice';
import Modal from '../../ui/Modal';
import AddNewItem from './AddNewItem';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import { toast } from 'react-hot-toast';

function ListOperations({ item }) {
  const dispatch = useDispatch();
  function removeItemHandle() {
    dispatch(removeItem(item));
    toast.success('Task is successfully deleted');
  }
  return (
    <div className="basis-0">
      <Button onClick={removeItemHandle} type="small">
        <HiTrash />
      </Button>
      <Modal>
        <Modal.Open opens="edit">
          <Button type="small">
            <HiPencil />
          </Button>
        </Modal.Open>
        <Modal.Window name="edit">
          <AddNewItem itemToEdit={item} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ListOperations;
