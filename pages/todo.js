import { update } from "lodash"
import { useState } from "react"

const Todo = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState(new Map())

    const hitEnterKey = keycode => keycode === 13
    const upDateTodo = newTodo => setTodos(prev => { 
        const newTodos = new Map(prev[Symbol.iterator]())
        newTodos.set(crypto.randomUUID(), newTodo)
        return newTodos
    })
    const emptyString = str => str === ''
    const cleanInputText = () => setInputText('')

    const handleKeyUp = event => {
        if(!hitEnterKey(event.which)) return
        if(emptyString(event.target.value)) return

        cleanInputText()
        upDateTodo(event.target.value)
    }


    return (
        <>
            <h1>Todo List</h1>
            <input value={inputText} type="text" onKeyUp={handleKeyUp} onChange={event => setInputText(event.target.value)}/>
            {Array.from(todos).map(([key, value]) => <li key={key}>{value}</li>)}
        </>
    )
}

export default Todo