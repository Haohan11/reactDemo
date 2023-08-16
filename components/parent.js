import ChildA from "./childA"
import ChildB from "./childB"

const Parent = () => {
    return (
        <>
            <h1>Parent</h1>
            <ChildA />
            <ChildB />
        </>
    )
}

export default Parent