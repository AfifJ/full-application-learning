import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
