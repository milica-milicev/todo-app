import Button from '../../ui/Button';
import Filter from '../../ui/Filter';
import Modal from '../../ui/Modal';
import AddNewItem from './AddNewItem';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

function ListHeader() {
  return (
    <div className="container-sm container mx-auto my-5 items-center justify-between sm:flex">
      <Modal>
        <Modal.Open opens="add">
          <Button type="icon">
            <HiOutlinePlusCircle className="h-8 w-8" />
            <span>Add task</span>
          </Button>
        </Modal.Open>
        <Modal.Window name="add">
          <AddNewItem />
        </Modal.Window>
      </Modal>
      <Filter
        options={[
          { value: 'All', label: 'All' },
          { value: 'Completed', label: 'Completed' },
          { value: 'Incomplete', label: 'Incomplete' },
        ]}
      />
    </div>
  );
}

export default ListHeader;
