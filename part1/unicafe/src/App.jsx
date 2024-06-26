import { useState } from "react"
import Header from "./Header"
import Statistics from "./Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(good+neutral+bad)

  return (
    <>
    <Header/>

    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>

    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App