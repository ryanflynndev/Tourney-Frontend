import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Home from './Containers/Home';
import Landing from './Containers/Landing'
import { withRouter, Route, Switch } from 'react-router'
import { selectCurrentUser, grabUser } from './redux/user_slice';
import TournamentForm from './Forms/TournamentForm'
import TournamentContainer from './Containers/TournamentContainer'
import TournamentShow from './Components/TournamentShow'
import NavBar from './Components/NavBar'
import UpcomingTournamentShow from './Components/UpcomingTournamentShow'
import CurrentTournamentShow from './Components/CurrentTournamentShow'
import PastTournamentShow from './Components/PastTournamentShow'

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
        {currentUser._id ? <>
          <NavBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/tournament-form" component={TournamentForm} />
            <Route path="/tournaments" component={TournamentContainer}/>
            <Route path="/upcoming-tournament/:id" component={UpcomingTournamentShow} />
            <Route path="/current-tournament/:id" component={CurrentTournamentShow} />
            <Route path="/past-tournament/:id" component={PastTournamentShow} />
          </Switch> 
        </>
 : <Landing />}

    </>
  );
}

export default withRouter(App);
