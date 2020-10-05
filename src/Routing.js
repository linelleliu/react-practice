import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
}
  from "react-router-dom";

import NavbarPage from './Routing/NavbarPage'
import Home from './Routing/Home';
import People from './Routing/People';
import AddPeople from './Routing/AddPeople';



export default function Routing() {
  const [userName, setUserName] = React.useState('')
  const [userHome, setUserHome] = React.useState('')
  const [userLanguage, setUserLanguage] = React.useState('')
  const [userFact, setUserFact] = React.useState('')
  const [items, setItems] = React.useState([])


  const addPeople = () => {
    let item = {
      name: userName,
      home: userHome,
      language: userLanguage,
      fact: userFact
    }
    let newArray = [...items]
    newArray.push(item)
    setItems(newArray)
    setUserName('')
    setUserHome('')
    setUserLanguage('')
    setUserFact('')
  }



  return (
    <Router>
      <h2>People Rolodex</h2>
      <NavbarPage />
      <div style={{ padding: '20px' }} />
      <Switch>
        <Route exact path='/' render={() =>
          <Home
            userName={userName}
            setUserName={setUserName}
            userHome={userHome}
            setUserHome={setUserHome}
            userLanguage={userLanguage}
            setUserLanguage={setUserLanguage}
            userFact={userFact}
            setUserFact={setUserFact}
            items={items}
            setItems={setItems}
          />} />
        <Route path='/people' render={() =>
          <People userName={userName}
            setUserName={setUserName}
            userHome={userHome}
            setUserHome={setUserHome}
            userLanguage={userLanguage}
            setUserLanguage={setUserLanguage}
            userFact={userFact}
            setUserFact={setUserFact}
            items={items}
            setItems={setItems}
          />} />
        <Route path='/addpeople' render={() =>
          <AddPeople
            userName={userName}
            setUserName={setUserName}
            userHome={userHome}
            setUserHome={setUserHome}
            userLanguage={userLanguage}
            setUserLanguage={setUserLanguage}
            userFact={userFact}
            setUserFact={setUserFact}
            setItems={setItems}
            addPeople={addPeople} />} />
      </Switch>

    </Router>
  )
}