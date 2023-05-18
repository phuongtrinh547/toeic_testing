import "./ManagerExercisePage.scss"
import { BsTrash } from "react-icons/bs"
import { AiOutlineEdit } from "react-icons/ai"
import { Link } from "react-router-dom"
export default function ManagerExercise() {
	const exerciseName = {
		number: "1",
		skill: "listening",
		cate: "conversations",
		name: "Practice Test 1 - TOEIC Reading, Listening test",
		date: "2022-03-25"
	}
	return (
		<div className="manager-exercise">
			<div className="view-edit-del-exercise">
				<div className="title">Exercise</div>
				<table >
					<tr>
						<th>Serial</th>
						<th>Skill</th>
						<th>Category</th>
						<th>Name</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
					<tr>
						<td>{exerciseName.number}</td>
						<td>{exerciseName.skill}</td>
						<td>{exerciseName.cate}</td>
						<td>{exerciseName.name}</td>
						<td>{exerciseName.date}</td>
						<td className="action-exercise">
							<div className="view-exercise">View</div>
							<div className="edit-exercise"><AiOutlineEdit /></div>
							<div className="delete-exercise"><BsTrash /></div>
						</td>
					</tr>
				</table>
			</div>
			<div className="new-exercise">
				<Link to={"/createExercise"}>New Exercise</Link>

			</div>
		</div>
	)
}
export function newExercise() {
	return (
		<div className="form-new-exercise">
			<form>
				<input type="text" placeholder="Enter title of exercise" />
				<input type="text" placeholder="Enter question" />
				<input type="text" placeholder="Enter answer" />
				<div className="add answer">Add answer +</div>
				<input type="text" placeholder="Enter correct answer" />
			</form>
		</div>
	)
}