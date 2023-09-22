import List from './features/todo-list/List';
import ListHeader from './features/todo-list/ListHeader';
import Banner from './ui/Banner';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Banner />
      <ListHeader />
      <List />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'color-grey-0',
            color: 'color-grey-700',
          },
        }}
      />
    </>
  );
}

export default App;
