import React from 'react';
import Home from './Home';

import data from '../api/data';

class App extends React.Component {
  
  componentWillMount () {
    console.log('mounted')
  }

  render() {
    return <Home data={data} />;
  }
}

export default App;