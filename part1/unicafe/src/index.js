import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <p>{props.text} {props.value} {props.text === "positive" ? "%" : ""}</p>
  )
}

const Statistics = (props) => {
  if (props.statistics.all === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <Statistic text="good" value={props.statistics.good} />
      <Statistic text="neutral" value={props.statistics.neutral} />
      <Statistic text="bad" value={props.statistics.bad} />
      <Statistic text="all" value={props.statistics.all} />
      <Statistic text="average" value={props.statistics.average} />
      <Statistic text="positive" value={props.statistics.positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + neutral + bad,
    average: (good - bad) / (good + neutral + bad),
    positive: (good / (good + neutral + bad)) * 100,
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics statistics={statistics} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)