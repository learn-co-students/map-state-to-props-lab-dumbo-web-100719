import React, { Component } from 'react';
import {connect} from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
       <ul>
          <h3>Users:</h3>

          <div>{this.props.users.map(user=> {
            return <div>
              <li>Name: {user.username}</li>
              <p>Hometown: {user.hometown}</p>
              </div>
          })}
          
          </div>

        </ul>

          <h3>Total Number of Users: {this.props.users.length}</h3>

          

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users};
}

export default connect(mapStateToProps)(Users)
