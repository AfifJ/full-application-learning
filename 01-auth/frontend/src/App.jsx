import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
