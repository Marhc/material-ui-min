import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';

class App extends Component {

  render() {
    return (
    <Button variant="contained" color="primary">
      Olá Mundo
    </Button>
    );
  }
}

render(<App />, document.getElementById('root'));
