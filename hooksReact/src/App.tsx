import './App.css';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { State } from './pages/State/State';
import Effect from './pages/Effect/Effect';
import Dependencies from './pages/Effect/Dependencies';
import Cleanup from './pages/Effect/Cleanup';
import { FetchAbort } from './pages/Effect/FetchAndAbort';

export function Routes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/state',
      element: (
        <div className='container'>
          <State />
        </div>
      ),
    },
    {
      path: '/ue',
      element: (
        <div className='container'>
          <Effect />
          <Dependencies />
        </div>
      ),
    },
    {
      path: '/uecleanup',
      element: (
        <div className='container'>
          <Cleanup />
        </div>
      ),
    },
    {
      path: '/uecleanup',
      element: (
        <div className='container'>
          <FetchAbort />
        </div>
      ),
    },
  ]);
  return elements;
}

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
