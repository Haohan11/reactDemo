
export default function() {
    const compose = (...fn) => 
        arg => fn.reduce( (composed, f) => f(composed), arg )

    const addSix = num => num + 6
    const timesFour = num => num * 4

    const calculator = compose(addSix, timesFour)

    return <h1>{calculator(2)}</h1>
}