import { useColor } from "./colorProvider"

const ChildB = () => {
    const { color , setColor, dai } = useColor()
    
    return (
        <>
            <h1 style={{color}}>ChildB</h1>
            <button onClick={() => setColor('tomato')}>SetColor</button>
            <p>{dai}</p>
        </>
    )
}

export default ChildB