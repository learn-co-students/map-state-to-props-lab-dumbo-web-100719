import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger
  return {users: state.users,
  numberOfUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
