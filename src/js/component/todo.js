import React from "react";

export const Todolist = () => {
	return (
		<div className="card" style="width: 18rem;">
			<div className="card-body">
				<h1 className="card-title">TO-DO LIST</h1>
				<p className="card-text">
					Puedes confiar y colocar todo lo que necesites.
				</p>
				<a href="#" className="btn btn-primary">
					CLICK ME
				</a>
			</div>
		</div>
	);
};

/* 
export default class Todolist extends Component 
{
	render() {
	return (
		<div className="card" style="width: 18rem;">
			<div className="card-body">
				<h1 className= "card-title">TO-DO LIST</h1>
				<p className="card-text">
					Puedes confiar y colocar todo lo que necesites.
				</p>
				<a href="#" className="btn btn-primary">
					CLICK ME
				</a>
			</div>
		</div>
	);}
};
*/
