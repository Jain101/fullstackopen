const Statistics = ({ good, neutral, bad }) => {
    let all = good + neutral + bad
    let avg = (good * 1 + neutral * 0 + bad * -1) / all
    let positive = (good*100) / all
    return (
        <>
            <h1>Statistics</h1>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>All {all}</p>
            <p>Avg {avg}</p>
            <p>Positive {positive}</p>
        </>
    )
}

export default Statistics