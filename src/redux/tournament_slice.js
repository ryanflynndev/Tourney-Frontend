import { createSlice } from '@reduxjs/toolkit';

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    upcomingTournaments: [],
    currentTournaments: [],
    pastTournaments: [],
    tournament: {},
    tournamentErrors: [],
  },
  reducers: {
    setUpcoming: (state, action )=> {
      state.upcomingTournaments = action.payload.upcomingTournaments
    },
    setCurrent: (state, action )=> {
      state.currentTournaments = action.payload.currentTournaments
    },
    setPast: (state, action )=> {
      state.pastTournaments = action.payload.pastTournaments
    },
    fetchById: (state, action) => {
      state.post = action.payload.tournament
    },
    errorCatch: (state, action) => {
      state.tournamentErrors.push(action.payload)
    },
    addTournament: (state, action) => {
      state.tournaments.push(action.payload.tournament);
    }
  },
});

export const { 
  setUpcoming, 
  setCurrent, 
  setPast,
  fetchById, 
  errorCatch, 
  addTournament,
} = tournamentSlice.actions;

export const upcomingTournamentFetch = () => async dispatch => {
  try {
    const resp = await fetch('/upcoming-tournaments')
    const data = await resp.json();
    console.log(data)
    dispatch(setUpcoming(data))
  } catch (error){
    dispatch(errorCatch(error))
  }
    
};
export const currentTournamentFetch =  () => async dispatch => {
  try {
    const resp = await fetch('/current-tournaments');
    const data = await resp.json();
    dispatch(setCurrent(data))
    console.log(data)
  } catch (error){
    dispatch(errorCatch(error))
  }
}
export const pastTournamentFetch = () => async dispatch => {
  try {
    const resp = await fetch('/past-tournaments')
    const data = await resp.json()
    console.log(data)
    dispatch(setPast(data))
  } catch (error){
    dispatch(errorCatch(error))
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

export const addUserToTournamentFetch = (user, tournament) => async dispatch => {
  const configObj = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Accepts': 'application/json'
    }
  }
  const resp = await fetch(`/tournament/${tournament._id}/join`, configObj)
  const data = await resp.json();
  console.log(data)
}




export const selectTournamentErrors = state => state.tournament.tournamentErrors;
export const selectUpcomingTournaments = state => state.tournament.upcomingTournaments;
export const selectCurrentTournaments = state => state.tournament.currentTournaments;
export const selectPastTournaments = state => state.tournament.pastTournaments;
export const selectTournament = state => state.tournament.tournament;
// export const selectEditTournament = state => state.tournament.editTournament;

export default tournamentSlice.reducer;