import Parent from "./parent"

const GrandParent = () => {
    return (
        <>
            <h1>GrandParent</h1>
            <Parent />
        </>
    )
}

export default GrandParent