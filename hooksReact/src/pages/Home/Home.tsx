import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <div className='container'>
        <Link to='state'>
          <h1>useState</h1>
        </Link>
      </div>
      <div className='container'>
        <Link to='ue'>
          <h1>useEffect</h1>
        </Link>
        <Link to='uecleanup'>
          <h1>useEffect Cleanup</h1>
        </Link>
        <Link to='fetch'>
          <h1>FetchAndAbort</h1>
        </Link>
      </div>
      <div className='container'>
        <h1>useRef</h1>
      </div>
      <div className='container'>
        <h1>fowardRef</h1>
      </div>
      <div className='container'>
        <h1>useReducer</h1>
      </div>
      <div className='container'>
        <h1>useMemo</h1>
      </div>
    </div>
  );
}

export default Home;
