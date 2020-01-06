import React, { Component } from "react";
// add any needed imports here
import { connect } from "react-redux";
class Users extends Component {
	render() {
		return (
			<div>
				<ul>
					{/* In addition, display the total number of users curently in the store */}
					{this.props.users.map((user, idx) => (
						<li key={idx}>{user.username}</li>
					))}
				</ul>
				{this.props.numberOfUsers}
			</div>
		);
	}
}

//add mapStateToProps here
const mapStateToProps = state => {
	return {
		users: state.users,
		numberOfUsers: state.users.length
	};
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
