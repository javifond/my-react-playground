import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from './api';
import { setUsers } from './actions/actions';
import UsersLobby from './components/users-lobby/users-lobby';

import './App.scss';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  setUsers,
};

class App extends Component {
  componentDidMount() {
    api.fetchUsers()
      .then((users) => this.props.setUsers({
        isLoading: false,
        users: users.results
      }))
      .catch((err) => console.log(err))
  }

  render() {
    const { isLoading } = this.props;

    return (
      <>
        <header className="header">
          <h1 className="title">Users List</h1>
        </header>
        { isLoading && <div className="loading">Loading...</div> }
        { !isLoading && <UsersLobby /> }
        <footer className="footer">
          <p>Copyright - Javs - 2021</p>
        </footer>
    </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
