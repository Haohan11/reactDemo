import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    console.log(count, setCount)

    function add() {
        setCount(e => e + 1)
    }

    return (
        <>
            <h1>React Counter</h1>
            <hr />
            <button onClick={add}>{count}</button>
        </>
    )
}
