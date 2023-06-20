
export default function() {
    const daidai = ['d', 'a', 'i', 'd', 'a', 'i']

    return (
        <ul>
            {daidai.map(dai => {
                const key = crypto.randomUUID()
                return <li key={key}>{dai}</li>
            }
            )}
        </ul>
    )
} 