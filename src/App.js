import { ToastContainer } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes}>
        <ToastContainer></ToastContainer>
      </RouterProvider>
    </div>
  );
}

export default App;
