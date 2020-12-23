import { configureStore } from '@reduxjs/toolkit';
import tournamentReducer from '../redux/tournament_slice';

export default configureStore({
  reducer: {
    tournament: tournamentReducer,
  },
});
