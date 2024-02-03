import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <div>
      <Header />
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
