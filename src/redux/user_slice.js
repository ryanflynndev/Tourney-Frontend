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
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    }
  }
})

export const { addError, setCurrentUser } = userSlice.actions;

export const selectCurrentUser = state => state.user.currentUser;
export const selectUserErrors = state => state.user.userErrors;

export const signUpUser = (user) => async dispatch => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(user)
  }
  try {
    const resp = await fetch('http://localhost:8000/signup', configObj)
    if (resp.status === 422) throw new Error('Validation failed')
    if (resp.status !== 200 || resp.status !== 201) throw new Error('Creating new User failed')
    const data = await resp.json();
    dispatch(setCurrentUser(data.user))
  } catch (err){
    console.log(err)
    dispatch(addError(err))
  } 
}

export const loginUser = (user) => async dispatch => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(user)
  }
  try {
    const resp = await fetch('http://localhost:8000/login', configObj);
    const data = await resp.json();
    //ERROR HANDLING NEEDED
    dispatch(setCurrentUser(data.user))
  } catch (err){
    dispatch(addError(err));
  }
}

export default userSlice.reducer;