import { useState, useEffect } from "react"

export default function AddressBook() {
    const [rows, setRows] = useState([])
    
    useEffect(() => {
        (async () => {
            // put your addressbook api url here
            const response = await fetch('http://localhost:3000/addressBook/getData')
            const data = await response.json()
            setRows(data.rows)
        })()
    }, [])

    return (
        // bootstrap 樣式需要額外在其他檔案引入
        <div className="container">
        <div className="row">
        <div className="col">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">姓名</th>
                        <th scope="col">電子信箱</th>
                        <th scope="col">手機</th>
                        <th scope="col">生日</th>
                        <th scope="col">地址</th>
                    </tr>
                </thead>
                <tbody>
                { rows.map(row => 
                    // react 輸出 array 需要給予 key 屬性值
                    <tr key={row['sid']}>
                        <td>{row['sid']}</td>
                        <td>{row['name']}</td>
                        <td>{row['email']}</td>
                        <td>{row['mobile']}</td>
                        <td>{row['birthday']}</td>
                        <td>{row['address']}</td>
                    </tr>
                ) }
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )
}