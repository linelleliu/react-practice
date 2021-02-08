import React from 'react';
import Display from './Display';
import {
  Container, Input,
  FormGroup, Label, Button, Col, Row
} from 'reactstrap';

export default function WishList() {
  const [userInput, setUserInput] = React.useState('');
  const [availableArray, setAvailableArray] = React.useState([]);
  const [wishListArray, setWishListArray] = React.useState([]);

  const addToAvailable = (e) => {
    e.preventDefault();
    // availableArray.push(userInput)
    let newItem = userInput;
    if (availableArray.find(item => item === newItem)) {
      return
    }
    let anotherAvailable = [...availableArray];
    anotherAvailable.push(newItem);
    setAvailableArray(anotherAvailable);
    setUserInput('')
  }

  const addToWishList = (item, index) => {
    // console.log(item)
    // console.log(index)
    let anotherAvailable = [...availableArray]
    anotherAvailable.splice(index, 1)
    setAvailableArray(anotherAvailable)
    let anotherWishList = [...wishListArray]
    anotherWishList.push(item)
    setWishListArray(anotherWishList)
  }

  const removeToWishList = (item, index) => {
    let anotherWishList = [...wishListArray]
    anotherWishList.splice(index, 1)
    setWishListArray(anotherWishList)
    let anotherAvailable = [...availableArray]
    anotherAvailable.push(item)
    setAvailableArray(anotherAvailable)
  }


  return (
    <div style={{ padding: '30px 0' }} >
      <Container>
        <h1>My Wish List</h1>
        <form onSubmit={addToAvailable} style={{ padding: '10px 0' }}>
          <Row>
            <Col md='6' xs='8'>
              <Input
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Add Item"
                value={userInput}
              />
            </Col>
            <Col>
              <Button onClick={(e) => addToAvailable(e)}>Add To Available</Button>
            </Col>
          </Row>
        </form>
        <Display availableArray={availableArray} addToWishList={addToWishList} />
        <h2>My Wist List ({wishListArray.length})</h2>
        <ul>
          {wishListArray.map((item, index) =>
            <div key={index}>
              <li style={{ paddingTop: '10px' }}>
                {item} <Button onClick={(e) => removeToWishList(item, index)}>Remove from Wish List</Button>
              </li>
            </div>
          )}
        </ul>
      </Container>
    </div>
  )
}