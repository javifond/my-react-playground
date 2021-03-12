import React, { Component} from 'react';
import { connect } from 'react-redux';
import User from '../user/user';

import './users-lobby.scss';

const mapStateToProps = (state) => ({
  ...state,
});

class UsersLobby extends Component {
  render() {
    return (
      <div className="users-lobby">
        {this.props.users.map((user, i) => (
            <User user={user} key={i} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(UsersLobby);
