import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
    userErrors: []
  },
  reducers: {
    addError: (state, action) => {
      state.userErrors = action.payload
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
    const data = await resp.json();
    if (resp.status === 422){
      dispatch(addError(data.data))
      throw new Error(data.message)
    }
    if (resp.status !== 200 || resp.status !== 201){
      console.log('Error')
      throw new Error('Creating new user failed.')
    } 
    dispatch(setCurrentUser(data.user))
  } catch (err){
    console.log(err)
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
    if (resp.status === 404 || resp.status === 401){
      dispatch(addError(data.data))
      throw new Error(data.message)
    } 
    if (resp.status !== 200 || resp.status !== 201){
      console.log('Error')
      throw new Error('Login failed')
    }
    dispatch(setCurrentUser(data.user))
  } catch (err){
    console.log(err)
  }
}

export default userSlice.reducer;