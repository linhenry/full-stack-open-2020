import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const [maxVotes, setMaxVotes] = useState(0)
  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  }
  const handleVoteClick = () => {
    const copy = [...votes] 
    copy[selected] += 1
    if (copy[selected] > votes[maxVotes]) {
      setMaxVotes(selected);
    }
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} 
      <div>has {votes[selected]} votes</div>
      <div>
        <Button onClick={handleVoteClick} text="vote" />
        <Button onClick={handleNextClick} text="next anecdote"/>
      </div>
      <h1>Anecdote with the most votes</h1>
      {props.anecdotes[maxVotes]}
      <div>has {votes[maxVotes]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)