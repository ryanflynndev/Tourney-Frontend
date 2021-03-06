import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTournamentFetch} from '../redux/tournament_slice'
import '../css/form.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '40vw',
  },
  componentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));


function TournamentForm(){
  const dispatch = useDispatch();
  const classes = useStyles();

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
    <div className={classes.componentWrapper}>
      <h3>Create New Tournament</h3>
      <form onSubmit={e => submitHandler(e)} id="create-tournament-form">
        <TextField 
          id="name"
          className={classes.formControl} 
          label="Name" 
          type="text" 
          variant="outlined" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField 
          id="category"
          className={classes.formControl} 
          label="Category" 
          type="text" 
          variant="outlined" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        
        <FormControl variant="outlined" className={classes.formControl} >
          <InputLabel id="select-label">Player Limit</InputLabel>
          <Select
              labelId="select-label"
              label="Player Limit"
              id="playerlimit"
              onChange={e => setPlayerLimit(e.target.value)} 
              value={playerLimit}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="32">32</MenuItem>
            </Select>
        </FormControl>
        <TextField
          id="startdate"
          className={classes.formControl} 
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
          id="enddate"
          className={classes.formControl} 
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
          id="description" 
          className={classes.formControl} 
          multiline
          rows={5}
          label="Description" 
          type="text" 
          variant="outlined" 
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Button 
          type="submit" 
          color="primary" 
          variant="outlined" 
          className={classes.formControl}>Submit</Button>
      </form>
    </div>
  )
}

export default (TournamentForm);