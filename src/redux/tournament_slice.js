import { createSlice } from '@reduxjs/toolkit';

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    activeTournaments: [],
    inactiveTournaments: [],
    tournament: {},
    tournamentErrors: [],
  },
  reducers: {
    fetchActive: (state, action )=> {
      state.activeTournaments = action.payload.activeTournaments
    },
    fetchInactive: (state, action )=> {
      state.inactiveTournaments = action.payload.inactiveTournaments
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

export const { fetchActive, fetchInactive, fetchById, errorCatch, addTournament} = tournamentSlice.actions;

export const activeTournamentFetch = () => dispatch => {
  fetch('http://localhost:8000/active-tournaments')
    .then(resp=>resp.json())
    .then(data => dispatch(fetchActive(data)))
    .catch(err => dispatch(errorCatch(err)))
};
export const inactiveTournamentFetch = () => dispatch => {
  fetch('http://localhost:8000/inactive-tournaments')
    .then(resp=>resp.json())
    .then(data => {
      console.log(data)
      dispatch(fetchInactive(data))
    })
    .catch(err => dispatch(errorCatch(err)))
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
  fetch('http://localhost:8000/tournament', configObj)
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
      'Accepts': 'application/json',
      // 'Authorization': 'Bearer ' + 
    },
    body: JSON.stringify(user)
  }
  const resp = await fetch(`http://localhost:8000/tournament/${tournament._id}/join`, configObj)
  const data = await resp.json();
  console.log(data)
}




export const selectTournamentErrors = state => state.tournament.tournamentErrors;
export const selectActiveTournaments = state => state.tournament.activeTournaments;
export const selectInactiveTournaments = state => state.tournament.inactiveTournaments;
export const selectTournament = state => state.tournament.tournament;
// export const selectEditTournament = state => state.tournament.editTournament;

export default tournamentSlice.reducer;