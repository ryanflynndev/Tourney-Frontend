import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {
  addTournamentFetch
} from '../redux/tournament_slice'

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
    <form onSubmit={e => submitHandler(e)}>
      <label>Name:</label>
      <input 
        type="text" 
        name="name"
        id="name"
        placeholder="Name..."
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
      <label>Player Limit:</label>
      <input 
        type="number" 
        name="playerLimit"
        id="player-limit"
        placeholder="Player Limit..."
        value={playerLimit}
        onChange={(e) => setPlayerLimit(e.target.value)}
      />
      <label>
          Start Date:
      </label>
      <input 
        type="date" 
        id="startDate" 
        value={startDate} 
        onChange={e => setStartDate(e.target.value)} />
      <label>
          End Date:
      </label>
      <input 
        type="date" 
        id="endDate" 
        value={endDate} 
        onChange={e => setEndDate(e.target.value)} />
      <label>
        Description:
      </label>
      <input 
        type="text"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default (TournamentForm);