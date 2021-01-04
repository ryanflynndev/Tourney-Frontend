import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
    userErrors: []
  },
  reducers: {
    addError: (state, action) => {
      state.userErrors.push(action.payload)
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload
    }
  }
})

export const { addError, loginUser } = userSlice.actions;

export const selectCurrentUser = state => state.user.currentUser;
export const selectUserErrors = state => state.user.userErrors;

export const signUpUser = (user) => dispatch => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(user)
  }
  fetch('http://localhost:8000/signup', configObj)
    .then(resp=>resp.json())
    .then(data => dispatch(loginUser(data.user)))
    .catch(err => dispatch(addError(err)))
}

export default userSlice.reducer;