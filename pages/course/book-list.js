import Mark from '../../components/mark.js'
// 範例資料
import data from '@/data/books.json'

function BookList() {

	return (
	<>

	<style>{`
		table {
			font-family: Arial, Helvetica, sans-serif;
			border-collapse: collapse;
			width: 100%;
		}
		
		td,
		th {
			border: 1px solid #ddd;
			padding: 8px;
		}
		
		tr:nth-child(even) {
			background-color: #f2f2f2;
		}
		
		tr:hover {
			background-color: #ddd;
		}
		
		th {
			padding-top: 12px;
			padding-bottom: 12px;
			text-align: left;
			background-color: #04AA6D;
			color: white;
		}
			
	`}</style>

	<h1>書籍清單</h1>
	<table>
		<thead>
			<tr>
				<th>ISBN</th>
				<th>title</th>
				<th>author</th>
				<th>加入收藏</th>
			</tr>
		</thead>
		<tbody>
			{data.map(item => 
			<tr key={item.isbn}>
				<td>{item.title}</td>
				<td>{item.subtitle}</td>
				<td>{item.author}</td>
				<td><Mark /></td>
			</tr>
			)}
		</tbody>
	</table>

	</>
	)
}

export default BookList
