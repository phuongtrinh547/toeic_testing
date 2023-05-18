import "./RankPage.scss"
import { FaUserCircle } from "react-icons/fa"
export default function RankPage() {
	return (
		<div className="rank-page">
			<h1> Rank </h1>
			<div className="top-winner" style={{ backgroundImage: "url(/images/Tribune.svg)" }}>
				<p>Top winners of the week</p>
				<div className="name-winner">
					<div className="no-2">
						<FaUserCircle className="user-icon" />
						<p>natapon</p>
					</div>
					<div className="no-1">
						<FaUserCircle className="user-icon" />
						<p>Oinas</p>
					</div>
					<div className="no-3">
						<FaUserCircle className="user-icon" />
						<p>torsten</p>
					</div>
				</div>
			</div>
			<div className="rank-table">
				<p className="title-tb">Rank Table</p>
				<table className="tb-rank">
					<tr>
						<th>Place</th>
						<th>Name</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td className="td-user">
							<FaUserCircle className="user-icon " />
							<p>Oinas</p>
						</td>
						<td>990</td>
					</tr>
					<tr>
						<td>2</td>
						<td className="td-user">
							<FaUserCircle className="user-icon " />
							<p>natapon</p>
						</td>
						<td>960</td>
					</tr>
					<tr>
						<td>3</td>
						<td className="td-user">
							<FaUserCircle className="user-icon " />
							<p>torsten</p>
						</td>
						<td>910</td>
					</tr>
					<tr>
						<td>4</td>
						<td className="td-user">
							<FaUserCircle className="user-icon " />
							<p>rn1hd</p>
						</td>
						<td>900</td>
					</tr>
				</table>
			</div>
		</div>
	)
}