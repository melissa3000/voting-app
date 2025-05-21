import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';


const Vote = ({ candidates, user }) => {
  const [currentVoteId, setCurrentVoteId] = useState('');
  const [currentVoteName, setCurrentVoteName] = useState('');
  const [userVoted, setUserVoted] = useState(user.voted);

  // needed once we update user voted status
  // const userId = user.id;

  const handleSubmit = async () => {
    console.log("====recording vote for candidateId: ", currentVoteId)
    user.voted = 1
    // TODO: This should actually be handled in a way that both writes work or neither do (maybe set up as a transaction?)
    // update user record
    try {
      console.log("updating voting status for user: ", user.id)
      await fetch("http://localhost:3000/users/update", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        credentials: 'same-origin',
        body: JSON.stringify(user),
      });
      setUserVoted(1)
    } catch(e) {
      console.log('=======oh no! user not updated', e)
    }
    // add increment candidate vote -- Not yet implemented
    // try {
    //   console.log("adding vote to candidate: ", currentVoteId)
    //   await fetch("http://localhost:3000/candidate/update", {
    //     method: 'PUT',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    //     },
    //     credentials: 'same-origin',
    //     body: JSON.stringify(currentVoteId),
    //   });
    // } catch(e) {
    //   console.log('=======oh no! candidate not updated', e)
    // }
  }
  const handleRadioChange = (event) => {
    setCurrentVoteId(event.target.value)
  }
  const handleInputChange = (event) => {
    setCurrentVoteName(event.target.value)
  }
  const handleWriteIn = async () => {
    // add validation so user doesn't accidentally submit empty input and lose the ability to vote
    const data = {
      "name": currentVoteName
    }
    // update candidate db with new candidate, user voted not yet implemented
    try {
      console.log("adding new candidate: ", currentVoteName)
      await fetch("http://localhost:3000/candidates/create", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        credentials: 'same-origin',
        body: JSON.stringify(data),
      });
      // update user status to voted not yet implemented but when we do, we should also update state 
      // setUserVoted(1)
    } catch(e) {
      console.log('=======oh no! candidate not added', e)
    }
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      {!userVoted ? 
      (
      <FormControl sx={{ p: 5 }}> 
        <FormLabel id="vote-label">Cast your vote today!</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={currentVoteId}
          onChange={handleRadioChange}
        >
          {candidates.map((candidate => (
            <FormControlLabel key={candidate.id} value={candidate.id} control={<Radio />} label={candidate.name} />
          )
          ))}
        </RadioGroup>
        <button
          id="submit-vote-button"
          className="submit-button-class"
          onClick={handleSubmit}
        >
          Vote
        </button>
        <Divider sx={{ py: 1 }}/>
        <p>Or, add a new candidate:</p>
        <div>
          <TextField
            id="write-in-candidate"
            label="Enter name ..."
            onChange={handleInputChange}
            sx={{ height: 40, mr: 2, width: 250 }}
          />
          <button
            id="submit-write-in-vote-button"
            className="submit-button-class"
            onClick={handleWriteIn}
          >
            Vote
          </button>
        </div>
      </FormControl>
      )
      : (<h1>Thank you for voting!</h1>)
      }
    </Box>
  );
};

export default Vote;
