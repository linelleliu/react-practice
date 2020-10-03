import React from 'react';
import { Input, Button, Row, Col, Container, Badge } from 'reactstrap';

function OneArray() {
  const [userInput, setUserInput] = React.useState('')
  const [list, setList] = React.useState([])

  const addToAvailable = () => {
    if (userInput !== '' && list.find(i => i.name === userInput)) {
      return
    }
    let item = {
      name: userInput,
      type: 'available'
    }
    let newArray = [...list]
    newArray.push(item)
    setList(newArray)
    setUserInput('')
  }

  const addToWishList = (item, type) => {
    let newArray = [...list]
    let index = newArray.findIndex(i => i.name === item.name)
    newArray[index].type = type
    setList(newArray)
  }

  return (
    <div>
      <Container>
        <h2>My Wish List </h2>
        <Row>
          <Col md='3'>
            <h4>Available Items</h4>
          </Col>
          <Col>
            <Badge color='warning'>{list.length}</Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          </Col>
          <Col>
            <Button
              onClick={() => { addToAvailable() }}
            >Add to Available</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {list.filter(i => i.type === 'available').map(item =>
              <li>{item.name}
                <Button onClick={() => addToWishList(item, 'wish')}>Add to Wish List</Button>
              </li>
            )}
          </Col>
        </Row>

        <div style={{ padding: '20px' }} />
        <Row>
          <Col md='3'>
            <h4>My Wish List</h4>
          </Col>
          <Col>
            <Badge color='info'>{list.length}</Badge>
          </Col>
        </Row>

        <Row>
          <Col>
            {list.map(item =>
              <li>{item.name}
                <Button>Remove from Wish List</Button>
              </li>
            )}
          </Col>
        </Row>

      </Container>
    </div >
  )

}

export default OneArray;


// const addToAvailable = ()=>{
//   if (userInput !== '' && items.find(i=>i.name === userInput)){
//       return
//   }
//   let item = {
//       name: userInput,
//       type: 'available'
//   }
//   let newArray = [...items]
//   newArray.push(item)
//   setItems(newArray)
//   setUserInput('')
// }

// const modify = (item,type)=>{
//   let newArray = [...items]
//   let index = newArray.findIndex(i=>i.name === item.name)
//   newArray[index].type = type
//   setItems(newArray)
// }

// const removeToWishList = (item)=>{
//     let newArray = [...items]
//     let index = newArray.findIndex(i=>i.name === item.name)
//     newArray[index].type = 'available'
//     setItems(newArray)
// }

// return(
//   <div>
//   <h1>My Wish List</h1>
//   <h2>Available Items (2)</h2>
//   <input value={userInput} onKeyDown={e=> e.key === 'Enter' ? addToAvailable():null} onChange={(e)=>setUserInput(e.target.value)} placeholder="Add Item" />
//   <button onClick={(e)=>addToAvailable()}>Add To Available</button>
//   <ul>
//       {items.filter(i=>i.type === 'available').map((item)=>
//           <li>{item.name}<button onClick={()=>modify(item,'wish')}>Add To Wishlist</button></li>
//           )}
//   </ul>


//   <h2>My Wist List (2)</h2>
//   <ul>
//       {items.filter(i=>i.type === 'wish').map((item)=>
//           <li>{item.name}<button onClick={()=>modify(item,'avaible')}>Remove me</button></li>
//           )}
//   </ul>
// </div>
// )
// }