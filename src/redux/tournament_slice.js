import { createSlice } from '@reduxjs/toolkit';

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    tournaments: [],
    tournament: {},
    tournamentErrors: [],
  },
  reducers: {
    fetchAll: (state, action )=> {
      state.tournaments = action.payload.tournaments
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

export const { fetchAll, fetchById, errorCatch, addTournament} = tournamentSlice.actions;

export const tournamentIndexFetch = () => dispatch => {
  fetch('http://localhost:8000/tournaments')
    .then(resp=>resp.json())
    .then(data => dispatch(fetchAll(data)))
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

export const selectTournamentErrors = state => state.tournament.tournamentErrors;
export const selectTournaments = state => state.tournament.tournaments;
export const selectTournament = state => state.tournament.tournament;
// export const selectEditTournament = state => state.tournament.editTournament;

export default tournamentSlice.reducer;