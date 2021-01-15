import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTournamentFetch} from '../redux/tournament_slice'
import '../css/form.css'
import TextField from '@material-ui/core/TextField'

function TournamentForm(){
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [playerLimit, setPlayerLimit] = useState('')
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')

  const submitHandler = e => {
    e.preventDefault();

    const newTourney = {
      name: name,
      category: category,
      playerLimit: playerLimit,
      startDate: startDate,
      endDate: endDate,
      description: description
    }
    dispatch(addTournamentFetch(newTourney))
  }

  return(
    <form onSubmit={e => submitHandler(e)} id="create-tournament-form">
      <TextField 
        id="outlined-text" 
        label="Name" 
        type="text" 
        variant="outlined" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Category:</label>
      <select 
        name="category" 
        id="category" 
        onChange={e => setCategory(e.target.value)} 
        value={category}>
          <option value="Tennis">Tennis</option>
          <option value="Golf">Golf</option>
          <option value="Bowling">Bowling</option>
      </select>
      <TextField
          id="outlined-number"
          label="Player Limit"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={playerLimit}
          onChange={(e) => setPlayerLimit(e.target.value)}
        />
      <TextField
        id="datetime-local"
        label="Start Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={startDate} 
        onChange={e => setStartDate(e.target.value)}
      />
      <TextField
        id="datetime-local"
        label="End Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={endDate} 
        onChange={e => setEndDate(e.target.value)}
      />
      <TextField 
        id="outlined-text" 
        label="Description" 
        type="text" 
        variant="outlined" 
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default (TournamentForm);