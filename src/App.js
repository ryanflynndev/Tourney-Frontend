import { useSelector } from 'react-redux';
import Home from './Containers/Home';
import Landing from './Containers/Landing'
import { 
  selectCurrentUser,
  
} from './redux/user_slice';

function App() {

  const currentUser = useSelector(selectCurrentUser)

  return (
    <>
      {currentUser.username ? <Home /> : <Landing />}
    </>
  );
}

export default App;
