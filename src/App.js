import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import TodoList from './containers/TodoList/TodoList';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';


function App() {
  return (
    // i'm gonna use multi-page
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/todos' exact render={() => <TodoList title={'My TODOs'} />} />
          
          <Route path='/new-todo' exact component={NewTodo} />
          <Redirect exact from='/' to='/todos' />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
