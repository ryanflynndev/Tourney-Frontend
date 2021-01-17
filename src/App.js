import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Home from './Containers/Home';
import Landing from './Containers/Landing'
import { withRouter, Route } from 'react-router'
import { selectCurrentUser, grabUser } from './redux/user_slice';

function App(props) {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!currentUser._id) {
      dispatch(grabUser(props.history));
    }
  }, [])

  

  return (
    <>
        {currentUser._id ? null : <Landing />}
        <Route path="/home" component={Home} />
    </>
  );
}

export default withRouter(App);
