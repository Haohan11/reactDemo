import data from '@/data/product/products2.json'

export default function() {
    return (
        <>
        <style jsx>
        {`
            table {
                width: 80%;
                margin-inline: auto;
                text-align: center;
            }

            th, td {
                border: 2px solid gray;
            }

            thead tr, tr:nth-child(even) {
                background-color: lightgrey;
            }
        `}
        </style>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>picture</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {data.products.map(product => 
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>
                        <img src={`https://picsum.photos/id/${parseInt(Math.random() * 200)}/100/100`} />
                        </td>
                        <td>{product.price}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )

}