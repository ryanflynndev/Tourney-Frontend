import { createSlice, current } from '@reduxjs/toolkit';
import {addTournamentToJoined} from './user_slice'

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    upcomingTournaments: [],
    currentTournaments: [],
    pastTournaments: [],
    currentTournament: {},
    tournamentErrors: [],
  },
  reducers: {
    setUpcoming(state, action ){
      state.upcomingTournaments = action.payload.upcomingTournaments
    },
    setCurrent(state, action ){
      state.currentTournaments = action.payload.currentTournaments
    },
    setPast(state, action ){
      state.pastTournaments = action.payload.pastTournaments
    },
    setCurrentTournament(state, action){
      state.currentTournament = action.payload.tournament
    },
    errorCatch(state, action){
      state.tournamentErrors.push(action.payload)
    },
    addTournament(state, action){
      state.tournaments.push(action.payload.tournament)
    },
    updateUpcomingTournament(state, action){
      const idx = state.upcomingTournaments.findIndex(t => t._id === action.payload.tournament._id)
      if (idx !== -1) state.upcomingTournaments[idx] = action.payload.tournament;
    },
  },
});

export const { 
  setUpcoming, 
  setCurrent, 
  setPast,
  setCurrentTournament, 
  errorCatch, 
  addTournament,
  updateUpcomingTournament,
} = tournamentSlice.actions;

export const upcomingTournamentFetch = () => async dispatch => {
  try {
    const resp = await fetch('/upcoming-tournaments')
    const data = await resp.json();
    dispatch(setUpcoming(data))
  } catch (error){
    console.log(error)
  }
};
export const currentTournamentFetch =  () => async dispatch => {
  try {
    const resp = await fetch('/current-tournaments');
    const data = await resp.json();
    dispatch(setCurrent(data))
  } catch (error){
    console.log(error)
  }
}
export const pastTournamentFetch = () => async dispatch => {
  try {
    const resp = await fetch('/past-tournaments')
    const data = await resp.json()
    dispatch(setPast(data))
  } catch (error){
    console.log(error)
  }
};

export const addTournamentFetch = (newTournament) => dispatch => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts' : 'application/json'
    },
    body: JSON.stringify(newTournament)
  }
  fetch('/tournament', configObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(addTournament(data))
    })
    .catch(err => console.log(err))
}

export const addUserToTournamentFetch = (tournament) => async dispatch => {
  try {
    const configObj = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Accepts': 'application/json'
      }
    }
    const resp = await fetch(`/tournament/${tournament._id}/join`, configObj)
    const data = await resp.json();
    if (resp.status === 200){
      dispatch(updateUpcomingTournament(data));
      const add = {_id: data.tournament._id};
      dispatch(addTournamentToJoined(add));
    } else if (resp.status === 201){
      //COMES BACK WITH TOURNAMENT AND FIRST ROUND(W/MATCHES) DATA//

      
    }

  } catch(error){
    console.log(error)
  }
}




export const selectTournamentErrors = state => state.tournament.tournamentErrors;
export const selectUpcomingTournaments = state => state.tournament.upcomingTournaments;
export const selectCurrentTournaments = state => state.tournament.currentTournaments;
export const selectPastTournaments = state => state.tournament.pastTournaments;
export const selectTournament = state => state.tournament.currentTournament;


export default tournamentSlice.reducer;