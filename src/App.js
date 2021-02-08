import React from 'react';
import WishList from './WishList/WishList';
import OneArray from './WishList/OneArray';
import VotingApp from './VotingApp';
import Todos from './Todos';
import Routing from './Routing';
import Unplash from './Unplash';
import Movie from './Movie';

function App() {
  return (
    <div>
      <WishList />
      <hr />
      {/* <OneArray /> */}
      <VotingApp />
      <hr />
      <Todos />
      <hr />
      <Routing />
      <hr />
      <Unplash />
      <hr />
      <Movie />
    </div>
  )
};

export default App;