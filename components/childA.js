import { useColor } from "./colorProvider"

const ChildA = () => {
    const { color , setColor, dai } = useColor()
    
    return (
        <>
            <h1 style={{color}}>ChildA</h1>
            <button onClick={() => setColor('green')}>SetColor</button>
            <p>{dai}</p>
        </>
    )
}

export default ChildA