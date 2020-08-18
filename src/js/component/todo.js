import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import {} from "@fortawesome/free-solid-svg-icons";

export const TodoList = () => {
	const [lista, setlista] = useState([]);

	const agregarList = e => {
		if (event.key == "Enter" && e.target.value != "") {
			setlista([...lista, e.target.value]);
		}
	};

	const DeleteItems = indexItem => {
		setlista(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	return (
		<Fragment>
			<h2 className="d-flex justify-content-center text-center">
				TO-DO LIST
			</h2>
			<div className="d-flex justify-content-center">
				<input
					type="text"
					placeholder="Escribe tu tarea"
					onKeyPress={agregarList}
				/>
			</div>

			<br />
			<div className="text-center">
				<ul>
					{lista.map((item, index) => (
						<li key={index}>
							{item}
							<button
								className="btn"
								onClick={() => DeleteItems(index)}>
								<i className="fas fa-trash-alt" />
							</button>
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
};

ReactDOM.render(<TodoList />, document.querySelector("#app"));
