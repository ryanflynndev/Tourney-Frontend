import { configureStore } from '@reduxjs/toolkit';
import tournamentReducer from '../redux/tournament_slice';
import userReducer from '../redux/user_slice'

export default configureStore({
  reducer: {
    tournament: tournamentReducer,
    user: userReducer,
  },
});
