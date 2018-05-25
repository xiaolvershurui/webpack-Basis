import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import A from './A'
import B from './B'


class App extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

/*

ReactDom.render(<BrowserRouter>
    <Route path='/a' component={A}>
    <Route path='/b' component={B}>
</BrowserRouter>
,document.querySelector('.app'));
export default App*/
