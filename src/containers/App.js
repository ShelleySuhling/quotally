import React from 'react';
import Home from './Home';
import Quote from './Quote';

import data from '../api/data';

export default class App extends React.Component {
  render() {
    return (<div><Home data={data} /></div>,
    document.getElementById('root')
    );
  }
}