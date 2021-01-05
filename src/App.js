import { useSelector } from 'react-redux';
import Home from './Containers/Home';
import Landing from './Containers/Landing'
import {withRouter, Route} from 'react-router'
import { 
  selectCurrentUser,
  
} from './redux/user_slice';

function App() {

  const currentUser = useSelector(selectCurrentUser)

  return (
    <>
      <Route path="/home" exact component={Home} />
      <Route path="/" component={Landing}/>
    </>
  );
}

export default withRouter(App);
