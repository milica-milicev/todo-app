import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import AddNewItem from './AddNewItem';
import { HiPencil, HiTrash } from 'react-icons/hi2';

import RemoveItem from './RemoveItem';

function ListOperations({ item }) {
  return (
    <div className="flex basis-0">
      <Modal>
        <Modal.Open opens="remove">
          <Button type="small">
            <HiTrash />
          </Button>
        </Modal.Open>
        <Modal.Window name="remove">
          <RemoveItem itemToRemove={item} />
        </Modal.Window>
      </Modal>
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
