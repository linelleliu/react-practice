import React from 'react';

function OneArray() {
  const [userInput, setUserInput] = React.useState('')
  const [items, setItems] = React.useState([])

  const addToAvailable = () => {
    if (userInput === '' || items.find(i => i.name === userInput)) {
      return
    }
    let item = {
      name: userInput,
      type: 'available'
    }
    let newArray = [...items]
    newArray.push(item)
    setItems(newArray)
    setUserInput('')
  }

  const modify = (item, type) => {
    console.log(item, type)
    let newArray = [...items]
    let index = newArray.findIndex(i => i.name === item.name)
    newArray[index].type = type
    setItems(newArray)
  }



  return (
    <div>
      <h1>My Wish List</h1>
      <input
        value={userInput}
        onKeyDown={e => e.key === 'Enter' ? addToAvailable() : null}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Add Item"
      />
      <button onClick={(e) => addToAvailable()}>Add To Available</button>
      <h2>Available Items (2)</h2>

      <ul>
        {items.filter(i => i.type === 'available').map((item) =>
          <li>{item.name}<button onClick={() => modify(item, 'wish')}>Add To Wishlist</button></li>
        )}
      </ul>


      <h2>My Wist List (2)</h2>
      <ul>
        {items.filter(i => i.type === 'wish').map((item) =>
          <li>{item.name}<button onClick={() => modify(item, 'available')}>Remove me</button></li>
        )}
      </ul>
    </div>
  )
}



export default OneArray;


