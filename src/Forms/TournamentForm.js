import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import DatePicker from "react-datepicker"
import {
  selectEditTournament, 
  setEditTournament,
  addTournamentFetch
} from '../redux/tournament_slice'

export default function TournamentForm(){
  const editTournament = useSelector(selectEditTournament);
  const dispatch = useDispatch();

    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date())

    const changeHandler = (e) => {
      let tournament = {...editTournament}
      if (e.target.id === 'name'){
        tournament.name = e.target.value
      } else if (e.target.id === 'category'){
        tournament.category = e.target.value
      } else if(e.target.id === 'startDate'){
        tournament.startDate = e.target.value
      } else if(e.target.id === 'endDate'){
        tournament.endDate = e.target.value
      }
      dispatch(setEditTournament(tournament))
    }
    
    return(
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log('submitting')
          dispatch(addTournamentFetch(editTournament))
          }
        }>
            <label>Name:</label>
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="Name..."
              value={editTournament.name}
              onChange={e => changeHandler(e)}
            />
            <label>Category:</label>
            <select name="category" id="category" onChange={e => changeHandler(e)} value={editTournament.category}>
                <option value="Tennis">Tennis</option>
                <option value="Golf">Golf</option>
                <option value="Bowling">Bowling</option>
            </select>
            <label>
                Start Date:
            </label>
            <input type="date" id="startDate" value={editTournament.startDate} onChange={e => changeHandler(e)} />
            <label>
                End Date:
            </label>
            <input type="date" id="endDate" value={editTournament.endDate} onChange={e => changeHandler(e)} />
            <button type="submit" >Submit</button>
        </form>
    )
}