import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function List() {
  const listItems = useSelector((state) => state.items.listItems);
  const filterStatus = useSelector((state) => state.items.filterStatus);

  const filteredList = listItems.filter((item) => {
    if (filterStatus === 'All') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <div className="container-sm container mx-auto">
      <div className="rounded-lg bg-gray-100 px-3 py-4 md:px-6 md:py-7">
        {filteredList.length > 0 ? (
          filteredList.map((item) => <ListItem item={item} key={item.id} />)
        ) : (
          <p>There are no TODO tasks in the list</p>
        )}
      </div>
    </div>
  );
}

export default List;
