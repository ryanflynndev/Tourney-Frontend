import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Home from './Containers/Home';
import Landing from './Containers/Landing'
import {withRouter, Route} from 'react-router'
import { 
  selectCurrentUser,
  grabUser,
} from './redux/user_slice';

function App(props) {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!currentUser._id) {
      dispatch(grabUser(props.history));
    }
  }, [currentUser])

  const determineInitialLoad = () => {
    console.log("determining")
    if (currentUser._id){
      props.history.push('/home')
    } else {
      props.history.push('/')
    }
  }

  return (
    <>
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Landing}/>
    </>
  );
}

export default withRouter(App);
