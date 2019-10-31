import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import FileForm from './components/FileForm';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <FileForm />
        </Container>
      </div>
    );
  }
}

export default App;
