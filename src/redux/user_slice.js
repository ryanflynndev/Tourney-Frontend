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

export const grabUser = (history) => async dispatch => {
  const resp = await fetch('/user')
  const data = await resp.json()
  if (resp.status === 201){
    await dispatch(setCurrentUser(data.user))
    history.push('/home')
  } else {
    history.push('/')
  }
}

export const signUpUser = (user, history) => async dispatch => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(user)
  }
  try {
    const resp = await fetch('/signup', configObj)
    const data = await resp.json();
    if (resp.status === 422){
      dispatch(addError(data.data))
      throw new Error(data.message)
    }
    if (resp.status !== 200 && resp.status !== 201){
      console.log('Error')
      throw new Error('Creating new user failed.')
    } 
    console.log(data.message)
    await dispatch(setCurrentUser(data.user))
    history.push('/home')
  } catch (err){
    console.log(err)
  } 
}

export const loginUser = (user, history) => async dispatch => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(user)
  }
  try {
    const resp = await fetch('/login', configObj);
    const data = await resp.json();
    if (resp.status === 404 || resp.status === 401){
      dispatch(addError(data.data))
      throw new Error(data.message)
    } 
    if (resp.status !== 200 && resp.status !== 201){
      console.log('Error')
      throw new Error('Login failed')
    }
    console.log(data.message)
    await dispatch(setCurrentUser(data.user))
    history.push('/home')
  } catch (err){
    console.log(err)
  }
}

export default userSlice.reducer;