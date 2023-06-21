import { useState } from 'react'

const list = [
	{ id: crypto.randomUUID(), text: '首頁' },
	{ id: crypto.randomUUID(), text: '關於我們' },
	{ id: crypto.randomUUID(), text: '產品' }
]

function Menu() {
	const [activeId, setActiveId] = useState()

	return (
		<>
		<style>
		{`
          .container {
            padding: 15px 0;
          }

          ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
            color: #fff
          }

          ul li a {
            text-decoration: none;
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            font-weight: bold;
			border-radius: 5px;
          }

          ul li a:hover {
            background-color: gold;
            color: #333;
          }

          ul li a:hover.active {
            background-color: red;
            color: #fff;
          }

          ul li a.active {
            background-color: red;
          }
        `}
		</style>

		<div className="container">
			<ul>{ list.map(item =>
				<li key={item.id}>
					<a className={activeId === item.id ? 'active' : ''}
						onClick={() => setActiveId(item.id)}
					>{item.text}</a>
				</li>
			)}</ul>
		</div>
		</>
	)
}

export default Menu
