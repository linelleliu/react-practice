import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Container, NavItem, NavbarBrand, Navbar, Nav } from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Switch
}
  from "react-router-dom";
import Home from './Movie/Home';
import Movies from './Movie/Movies';


export default function Movie() {
  // const [userInput, setUserInput] = useState('')
  // const [result, setResult] = useState('')

  // const getSearch = () => {
  //   axios({
  //     method: 'GET',
  //     url: `http://www.omdbapi.com/?apikey=7d43c41&t=${userInput}`
  //   }).then(res => setResult(res.data))
  //     .catch(err => console.log(err))
  // }
  const [like, setLike] = useState([]);
  const likeButton = (result) => {
    let item = result
    let newArray = [...like]
    newArray.push(item)
    setLike(newArray)
  }


  return (
    <div style={{ padding: '30px' }}>
      <Container>
        <h2>Movie Favorites</h2>
        <Router>
          <Navbar color="light" light expand="md">
            <Link to='/'>
              <NavbarBrand>Home</NavbarBrand>
            </Link>
            <Nav className="mr-auto" navbar>
              <Link to='/movies'><NavItem>
                <NavbarBrand>Movies</NavbarBrand>
              </NavItem>
              </Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path='/' render={() => <Home likeButton={likeButton} />} />
            <Route path='/movies' render={() => <Movies like={like} />} />
          </Switch>
        </Router>

        {/* <input placeholder='Search'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => getSearch()}>Search</button>
      <h4>Title</h4>
      {result.Poster && (<img src={result.Poster} />)} */}
      </Container>
    </div>
  )
}