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
    },
    addTournamentToJoined: (state, action) => {
      state.currentUser.joinedTournaments.push(action.payload)
    }
  }
})

export const { addError, setCurrentUser, addTournamentToJoined } = userSlice.actions;

export const selectCurrentUser = state => state.user.currentUser;
export const selectUserErrors = state => state.user.userErrors;

export const grabUser = (history) => async dispatch => {
  const resp = await fetch('/user')
  const data = await resp.json()
  if (resp.status === 201){
    console.log("User logged in.", data.user)
    await dispatch(setCurrentUser(data.user))
    const location = history.location.pathname
    if (location === "/" || location === "/login" || location === "/signup"){
      history.push('/home')
    } else {
      history.push(location)
    }
  } else {
    history.push('/login')
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
    }
    if (resp.status === 201){
      await dispatch(setCurrentUser(data.user))
      await dispatch(addError([]))
      history.push('/home')
    } else {
      console.log('Error, signup failed')
    }
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
    if (resp.status === 422){
      dispatch(addError(data.data))
    } 
    if (resp.status === 201){
      await dispatch(setCurrentUser(data.user))
      await dispatch(addError([]))
      history.push('/home')
    } else {
      console.log('Error, login failed')
    }
  } catch (err){
    console.log(err);
  }
}

export const logoutUser = (history) => async dispatch => {
  try {
    const resp = await fetch('/logout');
    const data = await resp.json();
    if (resp.status === 200){
      await dispatch(setCurrentUser({}))
    }
    history.push('/login')
  } catch (error){
    console.log(error)
  }
}

export default userSlice.reducer;