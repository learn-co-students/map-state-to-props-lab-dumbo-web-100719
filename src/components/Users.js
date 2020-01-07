import React, { Component } from 'react';
import {connect} from "react-redux"
// add any needed imports here
class Users extends Component {

  showUsers = () => {
    return this.props.users.map((user,index) =>
      <li key= {index}>{user.username}</li>
      )
  }
  

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.showUsers()}
          
        </ul>
        {this.props.numberOfUsers}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {users: state.users, numberOfUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
